# 系统集成

企业或开发者可以使用 SDK 集成 Chatopera 云服务。
SDK 是 Chatopera 团队将 RestAPI 封装好的面向不同编程语言的库，包括 Node.js、Go、PHP、Python, Java 等。
SDK 简化了集成的复杂度，甚至可以通过不同语言的包管理工具直接安装。

## SDK

Chatopera 云服务提供集成聊天机器人的方案为 SDK，目前支持 Java、Node.js、PHP、Python 和 Golang，近期也会补充更多语言的 SDK。

| 语言    | SDK 位置                                        |
| ------- | ----------------------------------------------- |
| Python  | https://github.com/chatopera/chatopera-py-sdk   |
| Java    | https://github.com/chatopera/chatopera-java-sdk |
| Go      | https://github.com/chatopera/chatopera-go-sdk   |
| PHP     | https://github.com/chatopera/chatopera-php-sdk  |
| Node.js | https://www.npmjs.com/package/@chatopera/sdk    |

对于不同语言而言，其安装配置方式有别，但是用代码取得一个聊天机器人实例的方式大同小异，参数是一致的，请求结果也全部采用 JSON 数据格式。

各 SDK 的配置文档、接口文档和示例程序可以在*集成*页面得到。以下内容是对不同接口返回接口的解释。

在聊天机器人的一级菜单，可以进入*集成*页面。

<table class="image">
    <caption align="bottom">集成</caption>
    <tr>
        <td><img width="800" src="../../images/platform/8.png" alt="" /></td>
    </tr>
</table>

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

## 评论

<script src="https://utteranc.es/client.js"
        repo="chatopera/docs"
        issue-term="pathname"
        label="Comment"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
