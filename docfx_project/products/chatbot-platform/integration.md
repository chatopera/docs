# 系统集成

企业或开发者可以选择两种集成 Chatopera 云服务的方式：SDK 以及 RestAPI。
SDK 是 Chatopera 团队将 RestAPI 封装好的面向不同编程语言的库，包括 Node.js、Go、PHP 和 Java 等。
SDK 简化了集成的复杂度，甚至可以通过不同语言的包管理工具直接安装。
RestAPI 接口是面向未发布 SDK 的语言进行集成时候的选择，推荐您优先选择 SDK，下面分别介绍两种方案。

## SDK

Chatopera 机器人平台提供集成聊天机器人的方案为 SDK，目前支持 Java、Node.js、PHP 和 Golang，近期也会补充更多语言的 SDK。

在聊天机器人的一级菜单，可以进入*集成*页面。

<table class="image">
    <caption align="bottom">集成</caption>
    <tr>
        <td><img width="800" src="../../images/platform/8.png" alt="" /></td>
    </tr>
</table>

对于不同语言而言，其安装配置方式有别，但是用代码取得一个聊天机器人实例的方式大同小异，参数是一致的，请求结果也全部采用 JSON 数据格式。

各 SDK 的配置文档、接口文档和示例程序可以在*集成*页面得到。以下内容是对不同接口返回接口的解释。

### 获得机器人详情


```
chatbot.details
```

<pre class="prettyprint">
{
  "name": "test1",
  "fallback": "我不明白您的意思。",
  "description": "ss",
  "welcome": "你好！我是机器人客服。",
  "primaryLanguage": "zh_CN"
}
</pre>

_name_: 机器人名字
_fallback_: 兜底回复
_description_: 机器人描述
_welcome_: 机器人问候语
_primaryLanguage_: 机器人语言

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

* 回复处理逻辑

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


## RestAPI

Chatopera云服务与其他服务集成的方式是暴露出来的Rest API接口，接口可以分为以下几类：


| 资源 | 描述 | 路径前缀 | 
| --- | --- | --- |
| **聊天机器人** | 对象的增删改查 | `/api/v1/chatbot` |
| **多轮对话** | 查询，导入和状态管理 | `/api/v1/chatbot/:clientId/conversation` | 
| **多轮对话** | 问答的使用情况统计数据 | `/api/v1/chatbot/:clientId/conversation/query/counts` | 
| **知识库FAQ问答对** | 增删改查和状态管理 | `/api/v1/chatbot/:clientId/faq/database` | 
| **知识库近义词** | 增删改查  | `/api/v1/chatbot/:clientId/faq/synonyms` | 
| **知识库** | 问答的使用情况统计数据 | `/api/v1/chatbot/:clientId/faq/query/counts` | 
| **历史管理** | 查询对话历史，用户列表 |  `/api/v1/chatbot/:clientId/users` | 

### 基本规范

在Rest API接口中，请求包括协议(http/https)，IP地址(Host)，PORT端口，HTTP头字段(Headers)，HTTP报文主体(Body *可选*)。

* 请求(Request)

在智能问答引擎服务启动后，通过 *http* 协议处理请求，如无特殊说明，每个接口都有如下设置：

Host: `{{IP}}`

PORT: `{{PORT}}`

Headers: `Content-Type application/json`


**注意**：
1. `{{变量}}`代表变量；
2. `{{IP}}`代表Chatopera云服务的提供地址，默认使用**https://bot.chatopera.com**。
3. `{{PORT}}`代表Chatopera云服务的提供的端口，HTTP协议默认使用80，HTTPS协议默认使用443。

* 响应(Response)

如无特殊说明，返回值都是`JSON`数据格式，在**正常返回**下，格式符合如下形式：

<pre class="prettyprint">
{
  "rc": 0,
  "data": ...
}    
</pre>

其中，`rc`代表请求是否被满足，`0`代表满足；`rc`非`0`时，代表有异常，不同的异常类型使用不同的数字，在每个API中介绍。

异常返回的一般形式：

<pre class="prettyprint">
{
  "rc": 非0的正整数,
  "error": ...,
  "msg": ...
}    
</pre>

### 创建聊天机器人

* POST /api/v1/chatbot/:clientId 

> cURL：创建聊天机器人

```
curl --request POST \
  --url 'http://{{IP}}:{{PORT}}/api/v1/chatbot/{{clientId}}' \
  --header 'Content-Type: application/json' \
  --data '{
  "name": "小叮当",
  "primaryLanguage": "zh_CN"
}'
```

创建聊天机器人

* BODY

<pre class="prettyprint">
{
  "name": "小叮当",
  "primaryLanguage": "zh_CN"
}    
</pre>

| 字段 | 必须 | 类型 | 描述 | 
| --- | --- | --- | --- | 
| chatbotID | 是 | string | 机器人的唯一ID，是以字母开始的由[a-zA-Z0-9_]组成的字符串。 |
| name | 是 | string | 机器人的名称。 |
| primaryLanguage | 是 | string | 机器人的语言，现在支持两个选项：["zh_CN", "en_US"]，分别代表中文和英文。 |
| description | 否 | string | 机器人的描述 |

* 成功返回

<pre class="prettyprint">
{
    "rc": 0,
    "data": {
        "chatbotID": "{{clientId}}",
        "name": "小叮当",
        "fallback": "我不明白您的意思。",
        "description": "智能问答和对话任务",
        "welcome": "你好！我是机器人客服。",
        "primaryLanguage": "zh_CN"
    }
} 
</pre>

返回字段说明：

`fallback`：聊天机器人的兜底回复。

`description`：聊天机器人的描述。

`welcome`：欢迎语。

* 异常返回

<pre class="prettyprint">
{
    "rc":2,
    "error":"already exists."
}
</pre>

返回字段说明：

`rc`：非0正整数代表不同的异常类型，比如，当前`rc`是2，异常描述为“already exists.”，说明该{{clientId}}已经存在了。


### 更新聊天机器人

* PUT /api/v1/chatbot/:clientId

> cURL：更新聊天机器人

```
curl -X PUT \
  http://{{IP}}:{{PORT}}/api/v1/chatbot/{{clientId}} \
  -H 'Content-Type: application/json' \
  -d '{
    "fallback": "我不能理解您的意思。",
    "description": "聊天机器人",
    "welcome": "我的特长是聊天。"
}'
```

更新聊天机器人

* BODY

<pre class="prettyprint">
{
    "fallback": "我不能理解您的意思。",
    "description": "聊天机器人",
    "welcome": "我的特长是聊天。"
}
</pre>

| 字段 | 必须 | 类型 | 描述 | 
| --- | --- | --- | --- | 
| fallback | 否 | string | 机器人兜底回复，在多轮对话查询没有匹配到回复时使用。| 
| description | 否 | string | 描述该机器人。 | 
| welcome | 否 | string | 欢迎语，保留字段，暂时未使用。 | 

对于机器人的`chatbotID`，`name`和`primaryLanguage`都是在创建时设定的，设定后不能变更。

* 成功返回
<pre class="prettyprint">
{
    "rc": 0,
    "data": {
        "chatbotID": "{{clientId}}",
        "fallback": ...,
        "description": ...,
        "welcome": ...
    }
}
</pre>

* 异常返回


<pre class="prettyprint">
{
    "rc": 1,
    "error": ...
}
</pre>

返回字段说明：

`rc`为正整数时，代表异常，异常描述为`error`。

### 获取聊天机器人信息

* GET /api/v1/chatbot/:clientId
> cURL：获取聊天机器人信息

```
curl -X GET \
  http://{{IP}}:{{PORT}}/api/v1/chatbot/{{clientId}} \
  -H 'Content-Type: application/json'
```

获取聊天机器人信息

* BODY

`null`

* 成功返回

<pre class="prettyprint">
{
    "rc": 0,
    "data": {
        "chatbotID": "{{clientId}}",
        "name": "小叮当",
        "fallback": "我不明白您的意思。",
        "description": "智能问答和对话任务",
        "welcome": "你好！我是机器人客服。",
        "primaryLanguage": "zh_CN"
    }
}
</pre>



* 异常返回
<pre class="prettyprint">
{
    "rc": 3,
    "error": "not exist."
}
</pre>

返回字段说明：

`rc`为正整数时，代表异常，异常描述为`error`。


### 获取聊天机器人列表

* GET /api/v1/chatbot

> cURL：获取聊天机器人列表

```
curl -X GET \
  'http://{{IP}}:{{PORT}}/api/v1/chatbot?sortby=-created&q={"chatbotID": "department_1"}' \
  -H 'Content-Type: application/json'
```

获取聊天机器人列表

* QUERY

支持在URL中添加query信息来查询机器人和翻页等操作，比如 `/api/v1/chatbot?page=1&limit=10&fields=chatbotID name&q={"name": "test"}`，各参数介绍如下：

| 属性 | 类型 | 描述 | 默认值 | 示例 |
| --- | --- | --- | --- | --- | 
| limit | number | 返回本页数据的条数 | 100 | 10 |
| page | number | 返回哪一页(可根据total进行判断) | 1 | 2 | 
| fields | string | 返回哪些字段 | 除_id 和 __v之外的所有字段 | chatbotID name  | 
| sortby | string | 按照哪个字段进行排序 | 空 |  -created (按照 created 降序) |
| q | string | 按照字段查询 | 空 | {"name": "test"} |

* BODY

`null`


* 成功返回


<pre class="prettyprint">
{
    "total": 1,
    "rc": 0,
    "current_page": 1,
    "total_page": 1,
    "data": [
        {
            "name": "小叮当",
            "chatbotID": "{{clientId}}",
            "primaryLanguage": "zh_CN",
            "fallback": "我不明白您的意思。",
            "welcome": "你好！我是机器人客服。",
            "description": "智能问答和对话任务"
        },
        ...
    ]
}
</pre>

返回字段说明：

`total`代表聊天机器人数量。

`current_page`代表当前页，`total_page`代表总页数。

`data`是聊天机器人数据。

* 异常返回


<pre class="prettyprint">
{
    "rc": 1,
    "error": ...
}
</pre>


返回字段说明：

`rc`为正整数时，代表异常，异常描述为`error`。


### 删除一个聊天机器人

* DELETE /api/v1/chatbot/:clientId

> cURL：删除一个聊天机器人

```
curl -X DELETE \
  http://{{IP}}:{{PORT}}/api/v1/chatbot/{{clientId}} \
  -H 'Content-Type: application/json' \
```

删除一个聊天机器人

* BODY

`null`

* 成功返回


<pre class="prettyprint">
{
    "rc": 0,
    "data": {
        "message": "done."
    }
}
</pre>

* 异常返回

<pre class="prettyprint">
{
    "rc": 1,
    "error": ...
}
</pre>


返回字段说明：

`rc`为正整数时，代表异常，异常描述为`error`。

### 创建问答对

* POST /api/v1/chatbot/:clientId/faq/database
> cURL：创建问答对

```
curl -X POST \
  http://{{IP}}:{{PORT}}/api/v1/chatbot/{{clientId}}/faq/database \
  -H 'Content-Type: application/json' \
  -d '{
    "post": "怎么开通微信支付?",
    "reply": "登录微信公众号平台，点击左侧微信支付菜单栏，按照开通步骤开通微信支付",
    "enabled": true
}'
```

创建问答对

* BODY

<pre class="prettyprint">
{
    "post": "怎么开通微信支付?",
    "reply": "登录微信公众号平台，点击左侧微信支付菜单栏，按照开通步骤开通微信支付",
    "enabled": true
}
</pre>

| 字段 | 必须 | 类型 | 描述 | 
| --- | --- | --- | --- | 
| post | 是 | string | 问答对的问题，也称“标准问” | 
| reply | 是 | string | 问题对应的回复 | 
| enabled | 是 | boolean | 是否“启用”，启用代表该问答对在检索时被使用；否则不被检索 | 

* 成功返回


<pre class="prettyprint">
{
    "rc": 0,
    "data": {
        "id": "{{docId}}}"
    }
}
</pre>

返回字段说明：

`docId`代表该问答对的唯一标识。


* 异常返回
<pre class="prettyprint">
{
    "rc": 3,
    "error": ...
}
</pre>


返回字段说明：

`rc`为正整数时，代表异常，异常描述为`error`。

### 查询问答对详情


* GET /api/v1/chatbot/:clientId/faq/database/:docId
> cURL：根据文档Id查询问答对详情

```
curl -X GET \
  http://{{IP}}:{{PORT}}/api/v1/chatbot/{{clientId}}/faq/database/{{docId}} \
  -H 'Content-Type: application/json'
```

根据文档Id查询问答对详情

* BODY

`null`

* 成功返回


<pre class="prettyprint">
{
    "rc": 0,
    "data": {
        "id": "{{docId}}",
        "post": "怎么开通微信支付?",
        "reply": "登录微信公众号平台，点击左侧微信支付菜单栏，按照开通步骤开通微信支付",
        "enabled": true
    }
}
</pre>

* 异常返回
<pre class="prettyprint">
{
    "rc": 3,
    "error": {
        "msg": "Not Found"
    }
}
</pre>

返回字段说明：

`rc`为正整数时，代表异常，异常描述为`error`。


### 更新问答对

* PUT /api/v1/chatbot/:clientId/faq/database/:docId
> cURL：根据文档ID更新问答对

```
curl -X PUT \
  http://{{IP}}:{{PORT}}/api/v1/chatbot/{{clientId}}/faq/database/{{docId}} \
  -H 'Content-Type: application/json' \
  -d '{
    "post": "怎么开通微信支付?",
    "reply": "登录微信公众号平台，点击左侧微信支付菜单栏，按照开通步骤开通微信支付",
    "enabled": true
}'
```

根据文档ID更新问答对

* BODY

<pre class="prettyprint">
{
    "post": "怎么开通微信支付?",
    "reply": "登录微信公众号平台，点击左侧微信支付菜单栏，按照开通步骤开通微信支付",
    "enabled": true
}
</pre>


| 字段 | 必须 | 类型 | 描述 | 
| --- | --- | --- | --- | 
| post | 否 | string | 问答对的问题，也称“标准问” | 
| reply | 否 | string | 问题对应的回复 | 
| enabled | 否 | boolean | 是否“启用”，启用代表该问答对在检索时被使用；否则不被检索 | 

* 成功返回
<pre class="prettyprint">
{
    "rc": 0,
    "data": {
        "id": "{{docId}}"
    }
}
</pre>


* 异常返回
<pre class="prettyprint">
{
    "rc": 3,
    "error": {
        "msg": "Not Found"
    }
}
</pre>


返回字段说明：

`rc`为正整数时，代表异常，异常描述为`error`。


### 删除问答对

* DELETE /api/v1/chatbot/:clientId/faq/database/:docId
> cURL：根据文档ID删除问答对

```
curl -X DELETE \
  http://{{IP}}:{{PORT}}/api/v1/chatbot/{{clientId}}/faq/database/{{docId}} \
  -H 'Content-Type: application/json'
```

根据文档ID删除问答对


* BODY

`null`


* 成功返回
<pre class="prettyprint">
{
    "rc": 0,
    "message": "done"
}
</pre>

* 异常返回
<pre class="prettyprint">
{
    "rc": 3,
    "error": {
        "msg": "Not Found"
    }
}
</pre>


返回字段说明：

`rc`为正整数时，代表异常，异常描述为`error`。


### 查询问答对列表

* GET /api/v1/chatbot/:clientId/faq/database
> cURL：查询问答对列表，可根据字段查询，支持分页

```
curl -X GET \
  'http://{{IP}}:{{PORT}}/api/v1/chatbot/{{clientId}}/faq/database?limit=30' \
  -H 'Content-Type: application/json'
```

查询问答对列表，可根据字段查询，支持分页

* QUERY

在url中，支持使用检索条件，比如 `/api/v1/chatbot/{{clientId}}/faq/database?page=1&limit=10`，各参数介绍如下：

| 属性 | 类型 | 描述 | 默认值 | 示例 |
| --- | --- | --- | --- | --- | 
| limit | number | 返回本页数据的条数 | 100 | 10 |
| page | number | 返回哪一页(可根据total进行判断) | 1 | 2 | 


* BODY

`null`


* 成功返回

<pre class="prettyprint">
{
    "total": 354,
    "current_page": 1,
    "total_page": 12,
    "data": [
        {
            "post": "上架商品就不能修改了是吗？",
            "is_original": true,
            "reply": "没有订单产生时可以修改",
            "enabled": true,
            "id": "{{docId}}"
        },
        ...
    ]
}
</pre>

* 异常返回
<pre class="prettyprint">
{
    "rc": 3,
    "error": {
        "msg": "[index_not_found_exception] no such index
    }
}
</pre>


返回字段说明：

`rc`为正整数时，代表异常，异常描述为`error`。


### 创建扩展问

* POST /api/v1/chatbot/:clientId/faq/database/:docId/extend
> cURL：创建扩展问

```
curl -X POST \
  http://{{IP}}:{{PORT}}/api/v1/chatbot/{{clientId}}/faq/database/{{docId}}/extend \
  -H 'Content-Type: application/json' \
  -d '{
    "post": "怎样支持微信支付?"
}
'
```

创建扩展问，扩展问关联一个问答对，扩展问是标准问的另一种问法。一个问答对可以关联多个扩展问。

扩展问可以使系统更智能，提高检索的准确率。

* BODY

<pre class="prettyprint">
{
    "post": "怎样支持微信支付?"
}
</pre>

| 字段 | 必须 | 类型 | 描述 | 
| --- | --- | --- | --- | 
| post | 是 | string | 与标准问意思一致的另一种问法，也称“扩展问”。 | 

* 成功返回
<pre class="prettyprint">
{
    "rc": 0,
    "data": {
        "id": "{{extendId}}"
    }
}
</pre>

返回字段说明：

`extendId`是该扩展问的唯一标识。

* 异常返回
<pre class="prettyprint">
{
    "rc": 1,
    "error": ...
}
</pre>

返回字段说明：

`rc`为正整数时，代表异常，异常描述为`error`。


### 查询扩展问

* GET /api/v1/chatbot/:clientId/faq/database/:docId/extend
> cURL：查询扩展问

```
curl -X GET \
  http://{{IP}}:{{PORT}}/api/v1/chatbot/{{clientId}}/faq/database/{{docId}}/extend \
  -H 'Content-Type: application/json'
```


查询扩展问

* BODY

`null`

* 成功返回
<pre class="prettyprint">
{
    "total": 1,
    "current_page": 1,
    "total_page": 1,
    "data": [
        {
            "post": "怎样支持微信支付?",
            "is_original": false,
            "postId": "{{docId}}",
            "enabled": true,
            "id": "{{extendId}}"
        },
        ...
    ],
    "rc": 0
}
</pre>

* 异常返回


<pre class="prettyprint">
{
    "rc": 3,
    "error": ...
}
</pre>

返回字段说明：

`rc`为正整数时，代表异常，异常描述为`error`。


### 更新扩展问

* PUT /api/v1/chatbot/:clientId/faq/database/:docId/extend/:extendId
> cURL：更新扩展问

```
curl -X PUT \
  http://{{IP}}:{{PORT}}/api/v1/chatbot/{{clientId}}/faq/database/{{docId}}/extend/{{extendId}} \
  -H 'Content-Type: application/json' \
  -d '{
    "post": "怎样支持微信支付?"
}
'
```

更新扩展问

* BODY

<pre class="prettyprint">
{
    "post": "怎样支持微信支付?"
}
</pre>


| 字段 | 必须 | 类型 | 描述 | 
| --- | --- | --- | --- | 
| post | 是 | string | 与标准问意思一致的另一种问法，也称“扩展问”。 | 


* 成功返回


<pre class="prettyprint">
{
    "rc": 0,
    "data": {
        "id": "{{extendId}}"
    }
}
</pre>

返回字段说明：

`extendId`是该扩展问的唯一标识。


* 异常返回


<pre class="prettyprint">
{
    "rc": 3,
    "error": {
        "msg": "Not Found"
    }
}
</pre>

返回字段说明：

`rc`为正整数时，代表异常，异常描述为`error`。


### 删除扩展问

* DELETE /api/v1/chatbot/:clientId/faq/database/:docId/extend/:extendId
> cURL：删除扩展问

```
curl -X DELETE \
  http://{{IP}}:{{PORT}}/api/v1/chatbot/{{clientId}}/faq/database/{{docId}}/extend/{{extendId}} \
  -H 'Content-Type: application/json'
```

删除扩展问


* BODY

`null`


* 成功返回

<pre class="prettyprint">
{
    "rc": 0,
    "message": "done"
}
</pre>


* 异常返回

<pre class="prettyprint">
{
    "rc": 3,
    "error": ... 
}
</pre>

返回字段说明：

`rc`为正整数时，代表异常，异常描述为`error`。


### 导出知识库

* GET /api/v1/chatbot/:clientId/faq/database/export 
> cURL：导出问答对数据

```
curl -X GET \
  http://{{IP}}:{{PORT}}/api/v1/chatbot/{{clientId}}/faq/database/export \
  -H 'Content-Type: application/json'
```

导出问答对数据


* BODY

`null`


* 成功返回
<pre class="prettyprint">
{
    "rc": 0,
    "data": [
        [
            true,
            "怎么开通微信支付?",
            "登录微信公众号平台，点击左侧微信支付菜单栏，按照开通步骤开通微信支付",
            "如何支持微信支付"
        ],
        ...
    ]
}
</pre>

返回字段说明：

`data`是问答对的所有数据，每个元素代表一个问答对。
每个元素又是一个数组，按照顺序分别代表：[enabled，标准问，回复，0~多个扩展问]。

* 异常返回
<pre class="prettyprint">
{
    "rc": 1,
    "error": ... 
}
</pre>

返回字段说明：

`rc`为正整数时，代表异常，异常描述为`error`。


### 创建近义词

* POST /api/v1/chatbot/:clientId/faq/synonyms
> cURL：创建近义词

```
curl -X POST \
  http://{{IP}}:{{PORT}}/api/v1/chatbot/{{clientId}}/faq/synonyms \
  -H 'Content-Type: application/json' \
  -d '{
    "text": "番茄",
    "neighbors": ["西红柿", "狼桃"]
}'
```

创建近义词，近义词可以进一步提高系统的智能水平。


* BODY

<pre class="prettyprint">
{
    "text": "番茄",
    "neighbors": ["西红柿", "狼桃"]
}
</pre>

| 字段 | 必须 | 类型 | 描述 | 
| --- | --- | --- | --- | 
| text | 是 | string | 词汇 | 
| neighbors | 是 | [string] | 与text意思相近的词汇 | 


* 成功返回
<pre class="prettyprint">
{
    "rc": 0,
    "data": {
        "text": "番茄",
        "chatbot": "{{clientId}}",
        "neighbors": [
            "西红柿",
            "狼桃"
        ],
        "id": "{{synonymsId}}"
    }
}
</pre>

返回字段说明：

`synonymsId`是该近义词组的唯一标识。

* 异常返回
<pre class="prettyprint">
{
    "rc": 1,
    "error": ... 
}
</pre>

返回字段说明：

`rc`为正整数时，代表异常，异常描述为`error`。


### 获取近义词详情

* GET /api/v1/chatbot/:clientId/faq/synonyms/:synonymsId
> cURL：使用synonymsId获取近义词详情

```
curl -X GET \
  http://{{IP}}:{{PORT}}/api/v1/chatbot/{{clientId}}/faq/synonyms/{{synonymsId}} \
  -H 'Content-Type: application/json'
```

使用synonymsId获取近义词详情


* BODY

`null`

* 成功返回


<pre class="prettyprint">
{
    "rc": 0,
    "data": {
        "text": "番茄",
        "neighbors": [
            "西红柿",
            "狼桃"
        ]
    }
}
</pre>

* 异常返回
<pre class="prettyprint">
{
    "rc": 1,
    "error": ... 
}
</pre>

返回字段说明：

`rc`为正整数时，代表异常，异常描述为`error`。


### 更新近义词

* PUT /api/v1/chatbot/:clientId/faq/synonyms/:synonymsId
> cURL：更新近义词

```
curl -X PUT \
  http://{{IP}}:{{PORT}}/api/v1/chatbot/{{clientId}}/faq/synonyms/{{synonymsId}} \
  -H 'Content-Type: application/json' \
  -d '{
    "text": "番茄",
    "neighbors": ["西红柿", "狼桃", "洋柿子"]
}'
```

更新近义词

* BODY

<pre class="prettyprint">
{
    "text": "番茄",
    "neighbors": ["西红柿", "狼桃", "洋柿子"]
}
</pre>

* 成功返回


<pre class="prettyprint">
{
    "rc": 0,
    "data": {
        "text": "番茄",
        "neighbors": [
            "西红柿",
            "狼桃",
            "洋柿子"
        ]
    }
}
</pre>

* 异常返回


<pre class="prettyprint">
{
    "rc": 1,
    "error": ... 
}
</pre>

### 删除近义词

* DELETE /api/v1/chatbot/:clientId/faq/synonyms/:synonymsId
> cURL：删除近义词

```
curl -X DELETE \
  http://{{IP}}:{{PORT}}/api/v1/chatbot/{{clientId}}/faq/synonyms/{{synonymsId}} \
  -H 'Content-Type: application/json'
```

删除近义词


* BODY

`null`

* 成功返回

<pre class="prettyprint">
{
    "rc": 0,
    "message": "done"
}
</pre>

* 异常返回

<pre class="prettyprint">
{
    "rc": 1,
    "error": ... 
}
</pre>


返回字段说明：

`rc`为正整数时，代表异常，异常描述为`error`。


### 查询近义词列表

* GET /api/v1/chatbot/:clientId/faq/synonyms
> cURL：查询近义词列表，支持分页和按字段查询

```
curl -X GET \
  http://{{IP}}:{{PORT}}/api/v1/chatbot/{{clientId}}/faq/synonyms \
  -H 'Content-Type: application/json'
```

查询近义词列表，支持分页和按字段查询


* BODY

`null`

* 成功返回
<pre class="prettyprint">
{
    "total": 1,
    "rc": 0,
    "current_page": 1,
    "total_page": 1,
    "data": [
        {
            "text": "番茄",
            "chatbot": "{{clientId}}",
            "neighbors": [
                "西红柿",
                "狼桃",
                "洋柿子"
            ],
            "id": "{{synonymsId}}"
        },
        ...
    ]
}
</pre>

* 异常返回
<pre class="prettyprint">
{
    "rc": 1,
    "error": ... 
}
</pre>

返回字段说明：

`rc`为正整数时，代表异常，异常描述为`error`。


### 检索知识库

* POST /api/v1/chatbot/:clientId/faq/query
> cURL：根据查询句子查询答案, 返回答案列表，并带有分数

```
curl -X POST \
  http://{{IP}}:{{PORT}}/api/v1/chatbot/{{clientId}}/faq/query \
  -H 'Content-Type: application/json' \
  -d '{
    "fromUserId": "test",
    "query": "如何开通微信支付"
}'
```

`fromUserId` 代表用户的唯一标识，必填项。
`query` 代表请求的查询，必填项。

根据查询句子查询答案, 返回答案列表，并带有分数。

* BODY

<pre class="prettyprint">
{
    "fromUserId": "xxx",
    "query": "如何开通微信支付"
}
</pre>



| 字段 | 必须 | 类型 | 描述 | 
| --- | --- | --- | --- | 
| fromUserId | 是 | string | 用户的唯一标识 | 
| query | 是 | string | 从知识库中检索的目标 | 

* 成功返回
<pre class="prettyprint">
{
    "rc": 0,
    "data": [
        {
            "id": "{{docId}}",
            "score": 0.647,
            "post": "怎么开通微信支付?",
            "reply": "登录微信公众号平台，点击左侧微信支付菜单栏，按照开通步骤开通微信支付"
        }
    ]
}
</pre>

返回字段说明：

`data`是一个数组，包含0～多个问答对，并且按照匹配程度降序，匹配程度就是该问答对的问题和`query`的相似度。

相似度是属于[0-1]区间的值，越大代表语义越相似。

* 异常返回
<pre class="prettyprint">
{
    "rc": 1,
    "error": ... 
}
</pre>

返回字段说明：

`rc`为正整数时，代表异常，异常描述为`error`。

### 记录FAQ点击事件

* POST /api/v1/chatbot/:clientId/faq/click 
> cURL：记录FAQ点击事件

```
curl -X POST \
  http://{{IP}}:{{PORT}}/api/v1/chatbot/{{clientId}}/faq/click \
  -H 'Content-Type: application/json' \
  -d '{
    "query": "如何开通微信支付",
    "groundtruth": "如何支持微信支付",
    "negatives": ["如何支持支付", "怎么取消微信支付"]
}'
```

记录FAQ点击事件：在客服人员点击建议问时，将访客的问题和客服点击的问题记录下来。

点击事件具有很重要的价值：

1. 梳理业务，提高商业智能;

2. 方便统计系统使用情况;

3. 评估系统准确率;

4. 优化系统准确率，比如训练更好的机器学习模型。


所以，该接口应保证尽可能调用。

* BODY

<pre class="prettyprint">
{
    "query": "如何开通微信支付",
    "groundtruth": "如何支持微信支付",
    "negatives": ["如何支持支付", "怎么取消微信支付"]
}
</pre>


| 字段 | 必须 | 类型 | 描述 | 
| --- | --- | --- | --- | 
| query | 是 | string | 原始查询 | 
| groundtruth | 是 | string | 准确答案 | 
| negatives | 是 | [string] | 被展示为建议答案但是没有被选中的候选回复 | 

* 成功返回
<pre class="prettyprint">
{
    "rc": 0,
    "message": "done"
}
</pre>

返回字段说明：


* 异常返回
<pre class="prettyprint">
{
    "rc": 1,
    "error": ... 
}
</pre>

返回字段说明：

`rc`为正整数时，代表异常，异常描述为`error`。

### 获得多轮对话列表

* GET /api/v1/chatbot/:clientId/conversation
> cURL：获得对话列表

```
curl -X GET \
  http://{{IP}}:{{PORT}}/api/v1/chatbot/{{clientId}}/conversation \
  -H 'Content-Type: application/json'
```

获得对话列表


* BODY

`null`

* 成功返回

<pre class="prettyprint">
{
    "rc": 0,
    "total": 1,
    "current_page": 1,
    "total_page": 1,
    "data": [
        {
            "chatbotID": "{{clientId}}",
            "name": "{{conversationName}}",
            "enabled": true,
            "id": "{{conversationId}}"
        },
        ...
    ]
}
</pre>

返回字段说明：


* 异常返回


<pre class="prettyprint">
{
    "rc": 1,
    "error": ... 
}
</pre>

返回字段说明：

`rc`为正整数时，代表异常，异常描述为`error`。

### 获得多轮对话详情

* GET /api/v1/chatbot/:clientId/conversation/:conversationId
> cURL：获得对话详情

```
curl -X GET \
  http://{{IP}}:{{PORT}}/api/v1/chatbot/{{clientId}}/conversation/{{conversationId}} \
  -H 'Content-Type: application/json' \
```

获得对话详情


* BODY

`null`

* 成功返回


<pre class="prettyprint">
{
    "rc": 0,
    "data": {
        "chatbotID": "{{clientId}}",
        "name": "course",
        "modified": "2018-07-11T09:39:58.349Z",
        "created": "2018-07-02T12:02:43.037Z",
        "scriptBody": "+ _resolve_course_\n- 您好，我是小云，您的课程顾问，请问您家小孩多大了？\n\n+ 一年级老师\n- ^get_teachers(1)",
        "enabled": true,
        "id": "{{conversationId}}"
    }
}
</pre>

返回字段说明：

* 异常返回


<pre class="prettyprint">
{
    "rc": 1,
    "error": ... 
}
</pre>

返回字段说明：

`rc`为正整数时，代表异常，异常描述为`error`。

### 启用多轮对话

* PUT /api/v1/chatbot/:clientId/conversation/:conversationId/enable
> cURL：使对话处于"启用"状态

```
curl -X PUT \
  http://{{IP}}:{{PORT}}/api/v1/chatbot/{{clientId}}/conversation/{{conversationId}}/enable
```

使对话处于"启用"状态



* BODY

`null`

* 成功返回
<pre class="prettyprint">
{
    "rc": 0,
    "data": {
        "name": "course",
        "chatbotID": "{{clientId}}",
        "enabled": true,
        "id": "{{conversationId}}"
    }
}
</pre>

返回字段说明：

* 异常返回


<pre class="prettyprint">
{
    "rc": 1,
    "error": ... 
}
</pre>

返回字段说明：

`rc`为正整数时，代表异常，异常描述为`error`。


### 禁用多轮对话

* PUT /api/v1/chatbot/:clientId/conversation/:conversationId/disable
> cURL：使对话处于"禁用"状态

```
curl -X PUT \
  http://{{IP}}:{{PORT}}/api/v1/chatbot/{{clientId}}/conversation/{{conversationId}}/disable \
```

使对话处于"禁用"状态


* BODY

`null`

* 成功返回
<pre class="prettyprint">
{
    "rc": 0,
    "data": {
        "name": "course",
        "chatbotID": "{{clientId}}",
        "enabled": false,
        "id": "{{conversationId}}"
    }
}
</pre>

返回字段说明：

* 异常返回
<pre class="prettyprint">
{
    "rc": 1,
    "error": ... 
}
</pre>

返回字段说明：

`rc`为正整数时，代表异常，异常描述为`error`。


### 获取环境变量

* GET /api/v1/chatbot/:clientId/conversation/environment
> cURL：获取环境变量

```
curl -X GET \
  http://{{IP}}:{{PORT}}/api/v1/chatbot/{{clientId}}/conversation/environment \
```

获取环境变量

环境变量是多轮对话的在“设计阶段”和“部署阶段”不共享的变量。具体应用场景见[多轮对话设计器：快速开始](https://mp.weixin.qq.com/s/kTfUGsIOFIupWOgUiVam1Q)。

* BODY

`null`


* 成功返回


<pre class="prettyprint">
{
    "rc": 0,
    "data": {
        "USERNAME": "张三"
    }
}
</pre>

返回字段说明：

* 异常返回

<pre class="prettyprint">
{
    "rc": 1,
    "error": ... 
}
</pre>

返回字段说明：

`rc`为正整数时，代表异常，异常描述为`error`。


### 更新环境变量

* PUT /api/v1/chatbot/:clientId/conversation/environment 
> cURL：更新环境变量

```
curl -X PUT \
  http://{{IP}}:{{PORT}}/api/v1/chatbot/{{clientId}}/conversation/environment \
  -H 'Content-Type: application/json' \
  -d '{
        "USERNAME": "李四",
        "PASSWORD": "123456"
    }'
```

更新环境变量


* BODY

<pre class="prettyprint">
{
    "USERNAME": "李四",
    "PASSWORD": "123456"
}
</pre>


* 成功返回


<pre class="prettyprint">
{
    "rc": 0,
    "msg": "done"
}
</pre>

返回字段说明：

* 异常返回

<pre class="prettyprint">
{
    "rc": 1,
    "error": ... 
}
</pre>

返回字段说明：

`rc`为正整数时，代表异常，异常描述为`error`。


### 检索多轮对话

* POST /api/v1/chatbot/:clientId/conversation/query 
> cURL：对话问答查询

```
curl -X POST \
  http://{{IP}}:{{PORT}}/api/v1/chatbot/{{clientId}}/conversation/query \
  -H 'Content-Type: application/json' \
  -d '{
    "fromUserId": "{{uid}}",
    "textMessage": "北京今天天气怎么样",
    "isDebug": false
}'
```

对话问答查询


* BODY

<pre class="prettyprint">
{
    "fromUserId": "{{uid}}",
    "textMessage": "北京今天天气怎么样",
    "isDebug": false
}
</pre>


* 成功返回


<pre class="prettyprint">
{
    "rc": 0,
    "data": {
        "state": "default",
        "createdAt": 1543559131688,
        "string": "我不明白您的意思。",
        "topicName": null,
        "subReplies": [],
        "service": {
            "provider": "fallback"
        },
        "logic_is_fallback": true,
        "logic_is_unexpected": true,
        "botName": "test1",
        "faq": [
            {
                "id": "AWdjRddmHR0CxALgXwY-",
                "score": 0.75,
                "post": "怎么开通微信支付?",
                "reply": "登录微信公众号平台，点击左侧微信支付菜单栏，按照开通步骤开通微信支付"
            }
        ]
    }
}
</pre>


返回字段说明：

`state`是一些业务需求的约定字段，比如，对话要完成“用户认证”，那么在完成认证后，`state`会返回`auth_succ`；认证失败时，返回`auth_fail`，该字段可通过对话脚本设定。

`logic_is_fallback`代表该回复是否是兜底。

`topicName`代表当前机器人正在聊的话题。

`botName`代表聊天机器人的名字。

`service`代表返回的数据来源，**provider:script**指**多轮对话**，**provider:faq**指**知识库**；不同数据来源也会提供相应信息。

`faq`代表知识库的检索结果，类型为数组，包括每个问答对的详情。


| provider | key | 解释 |
| --- | --- | --- | 
| faq | | | 
| | docId | 文档ID |
| | post | 标准问 |
| | score | 分数 |
| | threshold | 阀值 |
| conversation | 多轮对话 | |
| fallback | 兜底回复 | |
| mute | 该用户被该机器人屏蔽 | |


* 异常返回
<pre class="prettyprint">
{
    "rc": 1,
    "error": ... 
}
</pre>

返回字段说明：

`rc`为正整数时，代表异常，异常描述为`error`。


* 回复处理逻辑

多轮对话获取回复的逻辑解释如下：

<table class="image">
<caption align="bottom">查询逻辑</caption>
<tr><td><img width="800" src="../../images/products/chatbot-engine-1.png" alt="查询逻辑"/></td></tr>
</table>

1. 用户输入，以文本的形式输入，语音输入也需要转化成文字。
2. [知识库检索] 如果知识库检索出相似度大于0.8的问答对，直接返回得分最高的问题的答案。
3. [多轮对话检索] 如果知识库没有检索出相似度大于0.8的问答对，检索多轮对话，如果命中了一个规则，直接返回答案。
4. [兜底回复] 如果多轮对话也没有检索出答案，返回兜底回复。


### 导入对话应用

* POST /api/v1/chatbot/:clientId/conversation/droplet/import
> cURL：导入对话应用文件

```
ZIPFILE=小叮当-1.0.0-conversations.c66
set -x
curl -i -X POST -H "Content-Type: multipart/form-data" \
    -F "droplet=@$ZIPFILE" \
    -F "USERNAME=李四" \
    -F "PASSWORD=123456" \
    http://{{IP}}:{{PORT}}/api/v1/chatbot/{{clientId}}/conversation/droplet/import
```

导入对话应用文件

对话应用文件示例详见[天气查询机器人:多轮对话示例程序](https://github.com/chatopera/conversation-sampleapp)。

* BODY

multipart表单，环境变量使用`-F`设定键值对，对话应用文件设置`droplet`的文件路径，参考cURL样例程序。

* 成功返回


<pre class="prettyprint">
{
  "rc": 0,
  "data": {
    "msg": "Import is done successfully."
  }
}
</pre>


* 异常返回
<pre class="prettyprint">
{
    "rc": 1,
    "error": ... 
}
</pre>

返回字段说明：

`rc`为正整数时，代表异常，异常描述为`error`。



### 获取用户列表

* GET /api/v1/chatbot/:clientId/users

> cURL：获取用户列表

```
curl -X GET \
  http://{{IP}}:{{PORT}}/api/v1/chatbot/{{clientId}}/users \
  -H 'Accept: application/json' \
  -H 'Content-Type: application/json'
```

获取用户列表

在智能问答引擎中，并不具备管理用户的功能，但是在每次请求**/api/v1/chatbot/{{clientId}}/conversation/query**或**/api/v1/chatbot/{{clientId}}/faq/query**时，在body中传入的**fromUserId**会被保存为一个用户。

在智能问答引擎中，将**chatbotID**下的每个**fromUserId**视为该聊天机器人的用户唯一标识，所以**chatbotID**和**fromUserId**具有联合唯一的性质。

* QUERY

在url中，支持使用检索条件，比如 `/api/v1/chatbot/{{clientId}}/users?page=1&limit=10`，各参数介绍如下：

| 属性 | 类型 | 描述 | 默认值 | 示例 |
| --- | --- | --- | --- | --- | 
| limit | number | 返回本页数据的条数 | 100 | 10 |
| page | number | 返回哪一页(可根据total进行判断) | 1 | 2 | 
| sortby | string | 返回值的排序条件 | -lasttime (按照最后一次对话时间降序) | -created (按照初次对话时间降序), lasttime (按照最后一次对话升序) | 

* 成功返回

<pre class="prettyprint">
{
    "rc": 0,
    "total": 1,
    "current_page": 1,
    "total_page": 1,
    "data": [
        {
            "chatbotID": "{{clientId}}",
            "userId": "postman",
            "lasttime": "2018-10-06T01:22:30.584Z",
            "created": "2018-10-06T01:19:30.726Z"
        }
    ]
}
</pre>


返回字段说明：

`total`代表用户总数量。

`current_page`代表当前页，`total_page`代表总页数。

`data`是用户数据，`userId`是用户ID，`lasttime`是该用户最后一次对话时间，`create`是该用户第一次对话时间。

* 异常返回
<pre class="prettyprint">
{
    "rc": 1,
    "error": ... 
}
</pre>

返回字段说明：

`rc`为正整数时，代表异常，异常描述为`error`。

### 屏蔽指定用户

* POST /api/v1/chatbot/:clientId/users/:userId/mute

> cURL：屏蔽指定用户

```
curl -X POST \
  http://{{IP}}:{{PORT}}/api/v1/chatbot/{{clientId}}/users/{{userId}}/mute \
  -H 'Content-Type: application/json'
```

屏蔽用户

根据**chatbotID**和**userId**屏蔽该用户，该用户被屏蔽后，该用户作为*fromUserId*时，发起对轮对话查询时，返回结果如下：

<pre class="prettyprint">
{
    "rc": 0,
    "data": {
        "state": "default",
        "string": null,
        "botName": "BOTNAME",
        "logic_is_unexpected": false,
        "service": {
            "provider": "mute"
        }
    }
}
</pre>

【提示】返回*service.provider='mute'*的结果。

发起知识库问答时，返回如下结果：

<pre class="prettyprint">
{
    "rc": 10,
    "error": "userId [xxx] is blocked with chatbotID [xxx]"
}
</pre>


【提示】返回结果*rc=10* 。

* 成功返回

<pre class="prettyprint">
{
    "rc": 0,
    "data": {}
}
</pre>

* 异常返回

<pre class="prettyprint">
{
    "rc": 1,
    "error": ... 
}
</pre>

返回字段说明：

`rc`为正整数时，代表异常，异常描述为`error`。


### 检查用户是否被屏蔽

* POST /api/v1/chatbot/:clientId/users/:userId/ismute

> cURL：检查用户是否被屏蔽

```
curl -X POST \
  http://{{IP}}:{{PORT}}/api/v1/chatbot/{{clientId}}/users/{{userId}}/ismute \
  -H 'Content-Type: application/json'
```

检查用户是否被屏蔽

根据**chatbotID**和**userId**检查该用户是否被屏蔽。

* 成功返回

<pre class="prettyprint">
{
    "rc": 0,
    "data": {
        "mute": true
    }
}
</pre>

* 异常返回

<pre class="prettyprint">
{
    "rc": 1,
    "error": ... 
}
</pre>

返回字段说明：

`rc`为正整数时，代表异常，异常描述为`error`。

### 取消屏蔽用户

* POST /api/v1/chatbot/:clientId/users/:userId/unmute

> cURL：取消屏蔽用户

```
curl -X POST \
  http://{{IP}}:{{PORT}}/api/v1/chatbot/{{clientId}}/users/{{userId}}/unmute \
  -H 'Content-Type: application/json'
```

根据chatbotID和userId取消对一个用户的屏蔽。

* 成功返回

<pre class="prettyprint">
{
    "rc": 0,
    "data": {}
}
</pre>

* 异常返回

<pre class="prettyprint">
{
    "rc": 1,
    "error": ... 
}
</pre>

返回字段说明：

`rc`为正整数时，代表异常，异常描述为`error`。

### 获取用户聊天历史

* GET /api/v1/chatbot/:clientId/users/:userId/chats

> cURL：获取用户聊天历史

```
curl -X GET \
  'http://{{IP}}:{{PORT}}/api/v1/chatbot/{{clientId}}/users/{{userId}}/chats?limit=20' \
  -H 'Accept: application/json' \
  -H 'Content-Type: application/json' \
```

获取用户聊天历史

根据**chatbotID**和**userId**获取聊天历史记录


* QUERY

在url中，支持使用检索条件，比如 `/api/v1/chatbot/{{clientId}}/users/{{userID}}/chats?page=1&limit=10`，各参数介绍如下：

| 属性 | 类型 | 描述 | 默认值 | 示例 |
| --- | --- | --- | --- | --- | 
| limit | number | 返回本页数据的条数 | 100 | 10 |
| page | number | 返回哪一页(可根据total进行判断) | 1 | 2 | 
| sortby | string | 返回值的排序条件 | -created (按照对话时间降序) | created (按照初次对话时间升序) |

* 成功返回

<pre class="prettyprint">
{
    "rc": 0,
    "total": 2,
    "current_page": 1,
    "total_page": 1,
    "data": [
        {
            "chatbotID": "gmis_department_11",
            "userId": "postman",
            "textMessage": "白天不太热也不太冷，风力不大，相信您在这样的天气条件下，应会感到比较清爽和舒适。",
            "direction": "outbound",
            "service": "conversation",
            "created": "2018-10-06T01:58:27.828Z"
        },
        {
            "chatbotID": "gmis_department_11",
            "userId": "postman",
            "textMessage": "北京今天天气怎么样",
            "direction": "inbound",
            "created": "2018-10-06T01:58:22.270Z"
        }
    ]
}
</pre>

返回字段说明：

`direction`代表数据传递方向，`inbound`是用户发送给聊天机器人，`outbound`是聊天机器人发送给用户。
`textMessage`发送的文字消息。
`service`在发送为`outbound`时，机器人获取答案的服务标识: `conversation` 代表多轮对话； `faq`代表知识库；`fallback`代表兜底回复。


* 异常返回
<pre class="prettyprint">
{
    "rc": 1,
    "error": ... 
}
</pre>

返回字段说明：

`rc`为正整数时，代表异常，异常描述为`error`。

## 评论

<script src="https://utteranc.es/client.js"
        repo="chatopera/docs"
        issue-term="pathname"
        label="Comment"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>