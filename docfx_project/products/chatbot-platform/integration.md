# 系统集成

## 概述

[**Chatopera 云服务**](https://bot.chatopera.com/)提供一站式实现智能对话机器人的按量付费的云服务，企业或开发者可以使用 SDK 集成 Chatopera 云服务。Chatopera 云服务是 **Chatopera 机器人平台**的**软件即服务**版本，软件即服务也被称为[**SaaS（Software as a Service）**](https://baike.baidu.com/item/saas/6703273?fromtitle=%E8%BD%AF%E4%BB%B6%E5%8D%B3%E6%9C%8D%E5%8A%A1)。

SDK 是面向不同编程语言的和 Chatopera 云服务集成的工具库，包括 Node.js、Go、PHP、Python, Java 等，SDK 简化了集成的复杂度，某些语言可以通过包管理工具安装。

## 下载 SDK

下载地址参考列表：

| 语言    | 下载地址                                                                      | 使用指南                                                                                                                                                                                                                              |
| ------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Python  | [chatopera-py-sdk](https://pypi.org/project/chatopera/)                       | [示例程序](https://github.com/chatopera/chatopera-py-sdk) / [技术支持](https://github.com/chatopera/status/issues/new/choose)                                                                                                         |
| Java    | [chatopera-java-sdk](https://github.com/chatopera/chatopera-sample-java/wiki) | [示例程序](https://github.com/chatopera/chatopera-sample-java) / [技术支持](https://github.com/chatopera/status/issues/new/choose) / [JavaDocs](https://chatopera.github.io/chatopera-sample-java/com/chatopera/bot/sdk/Chatbot.html) |
| Go      | [chatopera-go-sdk](https://github.com/chatopera/chatopera-go-sdk)             | [示例程序](https://github.com/chatopera/chatopera-go-sdk/blob/master/chatopera_test.go) / [技术支持](https://github.com/chatopera/status/issues/new/choose)                                                                           |
| PHP     | [chatopera-php-sdk](https://packagist.org/packages/chatopera/sdk)             | [示例程序](https://github.com/chatopera/chatopera-php-sdk) / [技术支持](https://github.com/chatopera/status/issues/new/choose)                                                                                                        |
| Node.js | [chatopera-nodejs-sdk](https://www.npmjs.com/package/@chatopera/sdk)          | [示例程序](https://github.com/chatopera/chatopera-sample-node) / [技术支持](https://github.com/chatopera/status/issues/new/choose)                                                                                                    |

为了方便开发者调用 SDK，每个 SDK 内均有示例程序或测试程序作为参考。

> **提示：** 以上 SDK 同时支持私有部署的 Chatopera 机器人平台。

在聊天机器人的一级菜单，可以进入**集成页面**查看。

<table class="image">
    <caption align="bottom">集成</caption>
    <tr>
        <td><img width="800" src="../../images/platform/8.png" alt="" /></td>
    </tr>
</table>

<font color="blue">如以上没有满足您说使用环境/语言的 SDK，请[创建工单](https://github.com/chatopera/docs/issues/new?template=1_help.md)进行描述，Chatopera 将尽快满足您的需求。</font>

## 快速开始

不同语言的 SDK 都是调用**Chatopera 云服务**的[RestAPIs](https://baike.baidu.com/item/RESTful)，这些 RestAPIs 是标准一致的。每种语言的 SDK 使用流程按照顺序包括：下载 SDK，实例化`Chatbot`类为对象，请求接口和处理返回结果。

SDK 的下载链接在上一节中介绍了，本节以[Node.js SDK](https://www.npmjs.com/package/@chatopera/sdk) 为例子演示使用流程，不同语言的使用细节大同小异。

> **提示：** [Node.js](https://nodejs.org/en/) 是 JavaScript 运行时环境，面向服务器端应用开发，底层使用 Google V8 引擎。[Node.js](https://nodejs.org/en/) 尤其被前端开发者偏爱，因为它让前端开发者以“熟悉”的方式开发后端应用。[Node.js](https://nodejs.org/en/) 的出现一度降低了开发成本，并且成为“快应用”开发趋势出现，[Node.js](https://nodejs.org/en/) 包管理工具 [Npm 站点](https://www.npmjs.com/) 是开源领域最大的包管理服务。

### 安装 SDK

```
npm install -s @chatopera/sdk
```

### 实例化`Chatbot`类为对象

```
var Chatbot = require("@chatopera/sdk").Chatbot;
var chatbot = new Chatbot(clientId, secret [, serviceProvider]);
```

<h4><font color="purple">参数说明</font></h4>

| name            | type   | required | description                                                                                                                      |
| --------------- | ------ | -------- | -------------------------------------------------------------------------------------------------------------------------------- |
| clientId        | string | &#10004; | 在[机器人控制台/机器人/设置](https://bot.chatopera.com/dashboard)中获得                                                          |
| secret          | string | &#10004; | 获取办法同上                                                                                                                     |
| serviceProvider | string | &#10008; | Chatopera 机器人平台地址，<br><font color="green">当使用 Chatopera 云服务时，该值为 https://bot.chatopera.com，也是默认值</font> |

<!--  对号和差号， https://www.w3schools.com/charsets/ref_utf_dingbats.asp -->

> **提示：** 参数列表中，写在 `[]` 内的部分是选填参数，如果不填写使用默认值，下同。

### 调用接口示例

得到`Chatbot`实例后，怎么样请求接口服务呢？假设对该机器人的基本信息感兴趣，获得基本信息方式如下：

```
var response = await chatbot.command("GET", "/");
console.log("机器人名称：", response.data.name)
```

或者获得 `Promise` 返回

```
chatbot.command("GET", "/").then(
  (response) => {
    console.log("机器人名称：", response.data.name);
  },
  (err) => {}
);
```

此处，不深入探讨`await`和`Promise`的相关知识，它们是和 JavaScript 语言相关的内容。在这个例子中，我们请读者注意，给定一个机器人类的实例，再请求 API 服务是多么的简单，`Chatbot#command`接口提供了一系列的方法，也是下文给您详细介绍的重点。

## `Chatbot`类

### 实例化

`Chatbot`类是与 Chatopera 云服务集成的一个核心类，因为 Chatopera 云服务为开发者提供聊天机器人服务，`Chatbot`类的对象就是 Chatopera 云服务中一个聊天机器人的代理。

<h4><font color="purple">构造函数</font></h4>

```

Chatbot(clientId, secret [, serviceProvider])

```

<h4><font color="purple">参数说明</font></h4>

| name            | type   | required | description                                                                                                                      |
| --------------- | ------ | -------- | -------------------------------------------------------------------------------------------------------------------------------- |
| clientId        | string | &#10004; | 在[机器人控制台/机器人/设置](https://bot.chatopera.com/dashboard)中获得                                                          |
| secret          | string | &#10004; | 获取办法同上                                                                                                                     |
| serviceProvider | string | &#10008; | Chatopera 机器人平台地址，<br><font color="green">当使用 Chatopera 云服务时，该值为 https://bot.chatopera.com，也是默认值</font> |

<h4><font color="purple">更多实例化例子</font></h4>

不同语言下，`Chatbot`类的报名或引用方式不同，Node.js SDK 的实例化上文已经表述，以下再介绍其它语言。

<h5><font color="purple">Java</font></h5>

```
import com.chatopera.bot.sdk.Chatbot;
...
Chatbot chatbot = new Chatbot(clientId, secret);
```

<h5><font color="purple">Python</font></h5>

```
from chatopera import Chatbot
bot = Chatbot(clientId, secret)
```

<h5><font color="purple">PHP</font></h5>

假设使用[composer](https://getcomposer.org/)作为包管理工具，其它安装方式参考[chatopera-php-sdk](https://github.com/chatopera/chatopera-php-sdk)。

```
<?php

include_once **DIR** . "/vendor/autoload.php";
$chatbot = new Chatopera\SDK\Chatbot($appId, \$secret);

```

<h5><font color="purple">Go</font></h5>

```
import (
	"github.com/chatopera/chatopera-go-sdk"
)
...
var chatbot = chatopera.Chatbot(clientId, secret)
```

### 发送请求

`Chatbot`实例的核心接口是`command`，以下也使用`Chatbot#command`来指这个接口，该接口是对 RestAPI Request 的高级封装，内部完成**签名认证**，**RequestHeaders**和**RequestBody**等处理。

<h4><font color="purple">接口规范</font></h4>

```
result = chatbot.command(method, path [, payload])
```

> **提示：** result 返回在 Node.js 中使用`await`或`Promise`，参考[快速开始](/products/chatbot-platform/integration.html#调用接口示例)；其它语言直接用 `=` 便可获取。

<h4><font color="purple">参数说明</font></h4>

| name    | type           | required | description                                                                                  |
| ------- | -------------- | -------- | -------------------------------------------------------------------------------------------- |
| method  | string         | &#10004; | 对于资源的具体操作类型，由 HTTP 动词表示。有效值包括`GET`，`POST`，`PUT`，`DELETE`和`HEAD`等 |
| path    | string         | &#10004; | 资源的执行路径，通常包含资源实体名称或唯一标识，也可能在 `path`中使用`queryString`传递参数   |
| payload | `JSON`数据结构 | &#10067; | `payload` 是请求中的数据，对应 RestAPI 中的 Http Body                                        |

`method`不同动词代表的含义一般如下：

- GET - 从服务器取出一项或多项资源；
- POST - 在服务器创建一个资源；
- PUT - 在服务器更新一个资源；
- DELETE - 在服务器删除一个资源。

还有更多类型的`method`，不如上述几种常用，在此不进行赘述。

`queryString`是 URL 的一部分。典型的 URL 看起来像这样: <font color="green">http://server/resource?</font><font color="blue">foo=A&bar=B</font>。其中，<font color="blue">foo=A&bar=B</font>就是`queryString`，通常用来传递参数，这个例子中包含两个参数：`foo`值为`A`；`bar`值为`B`。在下文中，`path`参数中可能包含`queryString`，形式如<font color="blue">foo=${var1}&bar=${var2}</font>，需要把`${varN}`替换为实际值。

`payload`是 JSON 或在不同语言下的等价结构。[JSON](https://www.json.org/json-en.html)是一种轻量级的数据交换格式，描述了使用键值对、数组、字符串、数字、日期和布尔类型等值存储对象。`payload`数据是 JSON 格式的，不同语言对于 JSON 格式支持方式不同，`payload`在不同语言下，等价数据结构如下。

| 语言       | JSON Object                                                                            | JSON Array                                                                            |
| ---------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| JavaScript | `{...}`                                                                                | `[...]`                                                                               |
| Java       | [org.json.JSONObject](https://www.tutorialspoint.com/org_json/org_json_jsonobject.htm) | [org.json.JSONArray](https://www.tutorialspoint.com/org_json/org_json_jsonobject.htm) |
| PHP        | 基本类型`array`                                                                        | 基本类型`array`                                                                       |
| Python     | 基本类型`dict`                                                                         | 基本类型`list`                                                                        |
| Go         | TBD                                                                                    | TBD                                                                                   |

**下文表述时，统一使用`JSON`，`JSON Object`和`JSON Array`代表 JSON 数据结构和其不同语言下的等价数据结构。**

> **提示：** 相对而言，JSON 等价的数据结构，在获得`JSON Object`的键值或`JSON Array`的长度和成员时，语法不同，但都易于掌握。在使用时，参考不同 SDK 的[示例程序](/products/chatbot-platform/integration.html#下载-sdk)。

**`payload`是否必填以及是`JSON Object`还是`JSON Array`，取决于`method`和`path`的值，不同`method`和`path`的组合对应了不同的接口功能，满足不同需求，下文将介绍满足各种需求的`method`和`path`，并各个说明`payload`参数。**

### 返回值

**返回值**即请求结果，针对接口定义，`Chatbot#command`的返回值`result`是 `JSON Object`，并有以下属性。

| key      | type   | description                                                                                                           |
| -------- | ------ | --------------------------------------------------------------------------------------------------------------------- |
| `rc`     | int    | response code，返回码，大于等于 0 的正整型。`0`代表服务器端按照请求描述，正常返回结果；`rc` 不等于 0 是代表异常返回。 |
| `data`   | JSON   | 数据资源。正常返回时，服务器端执行逻辑成功，比如查询时，`data`就是查询结果。                                          |
| `msg`    | string | 消息，当服务器端执行请求成功，并且不需要返回数据资源时，通过 `msg`代表文本信息，比如提示信息                          |
| `error`  | string | 异常消息，当服务器端返回异常时，具体出错信息包含在`error`中                                                           |
| `status` | JSON   | 全局任务的状态信息                                                                                                    |

每次请求结果中，`rc`是必含有的属性，其它属性为可能含有。不同`rc`的正整形代表不同的异常，以及`data`和`status`的信息，则因`method`和`path`而异，以下进行详细介绍。

> **提示：** 不同语言对返回值可能进行了封装，但是不离其宗，都是基于以上定义，比如 Java SDK 中，定义`com.chatopera.bot.sdk.Response`作为`Chatbot#command`接口返回值，`Response`类提供`getRc`、`getData`和`toJSON`等方法，提升代码可读性。在使用时，参考不同 SDK 的[示例程序](/products/chatbot-platform/integration.html#下载-sdk)。

下文中使用的`method`，`path`，`payload`和`result`等均代表以上介绍的概念。

## 机器人画像

### 获得机器人详情

```
Chatbot#command("GET", "/")
```

<h4><font color="purple">result.data / JSON Object</font></h4>

```
{
  "name": "test1",
  "fallback": "我不明白您的意思。",
  "description": "ss",
  "welcome": "你好！我是机器人客服。",
  "primaryLanguage": "zh_CN"
}
```

| key               | type   | description  |
| ----------------- | ------ | ------------ |
| `name`            | string | 机器人名字   |
| `fallback`        | string | 兜底回复     |
| `welcome`         | string | 机器人问候语 |
| `description`     | string | 机器人描述   |
| `primaryLanguage` | string | 机器人语言   |

## 知识库

### 检索知识库

```

chatbot.faq

```

<pre class="prettyprint">
[
  {
    "id": "AWbyu9DYjTtqn-PFv1GV",
    "score": 1,
    "post": "停效期间的保单是否能办理减保？",
    "reply": "停效期间的保单可以办理减"
  },
  {
    "id": "AWbyu86_jTtqn-PFv1GR",
    "score": 0.3333333333333333,
    "post": "主险期缴期间，附加险能不能办理减额缴清？",
    "reply": "根据目前的业务规定：附加险缴费方式应与主险一致"
  }
]
</pre>

_id_: 问答对 Id
_score_: 置信度
_post_: 标准问
_reply_: 答案

## 多轮对话

### 检索多轮对话

```

chatbot.conversation

```

<pre class="prettyprint">
{
  "state": "default",
  "createdAt": 1541677323194,
  "string": "欢迎惠顾！",
  "topicName": "greetings",
  "subReplies": [],
  "service": {
    "provider": "conversation"
  },
  "logic_is_fallback": false,
  "botName": "test1"
}
</pre>

_state_: 业务字段，可以在多轮对话脚本中设置
_string_: 机器人回复的文本内容
_topicName_: 机器人会话主题
_logic_is_fallback_: 是否是兜底回复
_botName_: 机器人的名字

`service`代表返回的数据来源，**provider:script**指**多轮对话**，**provider:faq**指**知识库**；不同数据来源也会提供相应信息。

| provider     | key                  | 解释    |
| ------------ | -------------------- | ------- |
| faq          |                      |         |
|              | docId                | 文档 ID |
|              | post                 | 标准问  |
|              | score                | 分数    |
|              | threshold            | 阀值    |
| conversation | 多轮对话             |         |
| fallback     | 兜底回复             |         |
| mute         | 该用户被该机器人屏蔽 |         |

- 回复处理逻辑

多轮对话获取回复的逻辑解释如下：

<table class="image">
    <caption align="bottom">查询逻辑</caption>
    <tr>
        <td><img width="800" src="../../images/products/chatbot-engine-1.png" alt="查询逻辑" /></td>
    </tr>
</table>

1. 用户输入，以文本的形式输入，语音输入也需要转化成文字。
2. [知识库检索] 如果知识库检索出相似度大于 0.8 的问答对，直接返回得分最高的问题的答案。
3. [多轮对话检索] 如果知识库没有检索出相似度大于 0.8 的问答对，检索多轮对话，如果命中了一个规则，直接返回答案。
4. [兜底回复] 如果多轮对话也没有检索出答案，返回兜底回复。

## 意图识别

## 用户管理

### 获得用户列表

```

chatbot.users

```

<pre class="prettyprint">
[
  {
    "userId": "nodesdk",
    "lasttime": "2018-11-08T11:45:44.268Z",
    "created": "2018-11-08T11:42:02.104Z"
  },
  {
    "userId": "superadmin",
    "lasttime": "2018-11-08T11:33:23.163Z",
    "created": "2018-11-08T11:33:23.167Z"
  },
  {
    "userId": "c100680c10dc534dac3e28a024e59207",
    "lasttime": "2018-11-08T08:58:48.575Z",
    "created": "2018-11-08T08:57:16.915Z"
  }
]
</pre>

_userId_: 和机器人对话的用户标识
_lasttime_: 最后沟通时间
_created_: 第一次沟通时间

### 屏蔽用户

```

chatbot.mute

```

正常返回时，statusCode 200, body 为 `{}`。

### 取消屏蔽

```

chatbot.unmute

```

正常返回时，statusCode 200, body 为 `{}`。

### 是否被屏蔽

```

chatbot.ismute

```

返回 Boolean 类型值。

<pre class="prettyprint">
true
</pre>

### 获取聊天历史

```

chatbot.chats

```

<pre class="prettyprint">
{
  "total": 4,
  "current_page": 1,
  "total_page": 1,
  "data": [
    {
      "userId": "nodesdk",
      "textMessage": "xx",
      "direction": "outbound",
      "service": "faq",
      "confidence": 1,
      "created": "2018-11-08T11:45:44.448Z"
    },
    {
      "userId": "nodesdk",
      "textMessage": "xxx",
      "direction": "inbound",
      "service": "faq",
      "created": "2018-11-08T11:45:44.276Z"
    },
    {
      "userId": "nodesdk",
      "textMessage": "xx",
      "direction": "outbound",
      "service": "conversation",
      "confidence": 1,
      "created": "2018-11-08T11:42:03.234Z"
    },
    {
      "userId": "nodesdk",
      "textMessage": "你好",
      "direction": "inbound",
      "service": "conversation",
      "created": "2018-11-08T11:42:02.110Z"
    }
  ]
}
</pre>

_total_: 该用户和机器人之间对话总数
_current_page_： 当前页
_total_page_: 总页数
_userId_: 用户标识
_textMessage_: 文本内容
_direction_: 消息传递方向，【inbound】为消费者发送，【outbound】为机器人发送
_service_: 提供回复的服务
_confidence_: 置信度
_created_: 消息创建时间

## 评论

<script src="https://utteranc.es/client.js"
        repo="chatopera/docs"
        issue-term="pathname"
        label="Comment"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>

```

```

```

```
