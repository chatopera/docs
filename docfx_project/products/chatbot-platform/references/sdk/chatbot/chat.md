# 对话检索

对话检索接口，就是将对话用户的请求发送给机器人，获得机器人的回复。

- [检索多轮对话](#检索多轮对话)：从多轮对话获得回复
- [检索知识库](#检索知识库)：从知识库获得回复
- [检索意图识别](#检索意图识别)：从意图识别模块获得回复

检索多轮对话，也**同时会从知识库、意图识别、对话脚本中获得答案并按照算法回复最佳答案，也是 Chatopera 官方最推荐的集成形式**，使用检索多轮对话接口，可以定制出更为智能的对话机器人。 了解详情，请阅读[《多轮对话的工作机制》](/products/chatbot-platform/explanations/query.html)。

## 检索多轮对话

多轮对话是通过脚本规则、函数编程实现问答服务，在*检索多轮对话*接口中，同时融合了知识库参与回复决策，返回结果，尤其是通过知识库答案路由到指定话题的指定触发器，非常实用。为了方便使用，宜先理解[多轮对话的工作机制和工作原理](/products/chatbot-platform/explanations/query.html)，熟悉多轮对话机制可以真正将 Chatopera 机器人平台的能量发挥到最大。

```API
Chatbot#command("POST", "/conversation/query", body)
```

<h4><font color="purple">body / JSON Object</font></h4>

```JSON
{
    "fromUserId": "{{userId}}",
    "textMessage": "想要说些什么",
    "faqBestReplyThreshold": 0.6,
    "faqSuggReplyThreshold": 0.35,
    "extras": {}
}
```

| key                   | type   | required | description                                                                                       |
| --------------------- | ------ | -------- | ------------------------------------------------------------------------------------------------- |
| fromUserId            | string | &#10004; | 用户唯一 ID，用户 ID 由业务系统传递或生成，保证每个用户用唯一字符串                               |
| textMessage           | string | &#10004; | 用户输入的对话文字                                                                                |
| faqBestReplyThreshold | number | &#10008; | 知识库最佳回复， 默认 0.8，知识库建议回复，知识库中置信度超过该值通过返回值`string`和`params`返回 |
| faqSuggReplyThreshold | number | &#10008; | 知识库建议回复，默认 0.6，知识库中置信度超过该值的问答对通过返回值`faq`属性返回                   |
| extras | JSONObject 或 JSONArray | &#10008; | 在消息中，添加自定义的信息，然后在多轮对话脚本的函数 [`this.message.extras`](/products/chatbot-platform/references/func-builtin/message.html) 和 [`this.user.history`](/products/chatbot-platform/references/func-builtin/user.html#thisuserhistory)  中使用                 |

其中，`extras` 用以支持更灵活，自定义的场景。

<h4><font color="purple">result/ JSON Object</font></h4>

```JSON
{
    "rc": 0,
    "data": {
        "state": "default",
        "string": "方法",
        "logic_is_unexpected": false,
        "logic_is_fallback": false,
        "service": {
            "provider": "faq",
            "docId": "{{doctId}}",
            "score": 0.3781,
            "threshold": 0.37
        },
        "botName": "小巴巴",
        "faq": [
            {
                "id": "{{doctId}}",
                "score": 0.3781,
                "post": "查看相似问题不可能的",
                "replies": [
                    {
                        "rtype": "plain",
                        "enabled": true,
                        "content": "方法"
                    }
                ]
            }
        ]
    }
}
```

_state_: 业务字段，可以在多轮对话脚本中设置

_string_: 机器人回复的文本内容

_topicName_: 机器人会话主题

_logic_is_fallback_: 是否是兜底回复

_botName_: 机器人的名字

_faq_: 知识库中匹配 textMessage 的相似度超过 **faqSuggReplyThreshold**的记录，数组类型

`service`代表返回的数据来源，**provider:conversation**指**多轮对话**，**provider:faq**指**知识库**，**provider:intent**指**意图识别**；不同数据来源也会提供相应信息。

| provider     | key                  | 解释                                                                                  |
| ------------ | -------------------- | ------------------------------------------------------------------------------------- |
| faq          |                      |                                                                                       |
|              | docId                | 文档 ID                                                                               |
|              | post                 | 标准问                                                                                |
|              | score                | 分数                                                                                  |
|              | threshold            | 阀值                                                                                  |
| intent       | 意图识别             | 更多描述参考[意图匹配器](/products/chatbot-platform/conversation/gambits/intent.html) |
|              | intent.name          | 意图名称                                                                              |
|              | intent.state         | 意图会话状态                                                                          |
|              | intent.entities      | 意图中的命名实体                                                                      |
| conversation | 多轮对话             |                                                                                       |
| fallback     | 兜底回复             |                                                                                       |
| mute         | 该用户被该机器人屏蔽 |                                                                                       |

## 检索知识库

```API
Chatbot#command("POST", "/faq/query", body)
```

<h4><font color="purple">body / JSON Object</font></h4>

```JSON
{
 "query": "查找相似的问题",
 "fromUserId": "{{userId}}",
 "faqBestReplyThreshold": 0.5,
 "faqSuggReplyThreshold": 0.1
}
```

<h4><font color="purple">result/ JSON Object</font></h4>

```JSON
{
    "rc": 0,
    "data": [
        {
            "id": "{{docId}}",
            "score": 0.48534,
            "post": "查看相似问题不可能的",
            "replies": [
                {
                    "rtype": "plain",
                    "enabled": true,
                    "content": "方法"
                }
            ]
        },
        {
            "id": "{{docId}}",
            "score": 0.32699,
            "post": "聊天",
            "replies": [
                {
                    "rtype": "plain",
                    "content": "foo",
                    "enabled": true
                },
                {
                    "rtype": "plain",
                    "content": "bar",
                    "enabled": true
                }
            ]
        }
    ]
}
```

## 检索意图识别

意图识别是基于请求者的文本内容分析意图，然后基于意图追问意图槽位信息的对话，这部分的详细介绍参考[https://docs.chatopera.com/products/chatbot-platform/intent.html](/products/chatbot-platform/intent.html)，下面重点介绍在系统集成中，通过意图识别服务提供智能问答。

### 什么是“会话”

“会话”(session)在代表一个用户对话的周期，认为用户在这个周期内是为了完成某个任务的。从确定任务，到得到和这个任务相关的信息，这个 session 就正常结束了，但是如果用户变化了任务，这个 session 就不能正常结束。开发者选择什么时候创建新的 session，但是服务器端决定什么时候完成这个 session，session 的管理涉及：意图的确定，意图参数的确定，会话最大空闲时间，会话是否解决(resolved)。

- 训练完成后请求对话，需要先创建会话，会话会绑定 0-1 个任务：刚开始不知道用户意图，当确定用户意图后，该 session 就只和这个意图相关；
- 会话有最大空闲日期，如果在半个小时内没有更新，会被服务器删除；
- 会话可以任意创建，只要没有超过最大空闲日期都是有效的；
- 不同的用户使用不同的会话，同一个用户可以同时有多个会话，但是为了实际效果，用户最好同时只使用一个会话；
- 当用户的意图和槽位信息被全部确认，会话包含的 resolved 字段会被设置为 true，这时开发者可以再次创建一个新的会话。

### 创建会话

```API
Chatbot#command("POST", "/clause/prover/session", body)
```

<h4><font color="purple">body / JSON Object</font></h4>

```JSON
{
 "uid": "{{userId}}",
 "channel": "{{channelId}}"
}
```

| key       | type   | required | description                                                                    |
| --------- | ------ | -------- | ------------------------------------------------------------------------------ |
| userID    | string | &#10004; | 用户标识，由字母和数字组成的字符串。开发者自定义，保证每个用户唯一             |
| channelId | string | &#10004; | 用户来源的渠道标识，由字母和数字组成的字符串。由开发者自定义，保证每个渠道唯一 |

<h4><font color="purple">result/ JSON Object</font></h4>

```JSON
{
    "rc": 0,
    "data": {
        "intent_name": null,
        "uid": "{{userId}}",
        "channel": "{{channelId}}",
        "resolved": null,
        "id": "{{sessionId}}",
        "entities": null,
        "createdate": "2019-08-28 18:08:51",
        "updatedate": "2019-08-28 18:08:51"
        "ttl": 3600
    },
    "error": null
}
```

_intent_name_: 意图名字

_id_: 会话 ID

_resolved_: 该会话是否完成收集参数

_entities_: 参数列表，完成填槽或待填槽

_ttl_: 该会话信息在多少秒后过期，每个会话默认是 1 小时的空闲周期，在该时间内没有跟进的对话，则会话过期

### 检索意图识别

```API
Chatbot#command("POST", "/clause/prover/chat", body)
```

<h4><font color="purple">body / JSON Object</font></h4>

```JSON
{
 "fromUserId": "{{userId}}",
 "session": {
  "id": "{{sessionId}}"
 },
 "message": {
  "textMessage": "我想购买明天火车票"
 }
}
```

| key         | type   | required | description                                                         |
| ----------- | ------ | -------- | ------------------------------------------------------------------- |
| userId      | string | &#10004; | 用户唯一 ID，用户 ID 由业务系统传递或生成，保证每个用户用唯一字符串 |
| sessionId   | string | &#10004; | 使用创建会话接口创建                                                |
| textMessage | string | &#10004; | 用户输入的对话文字                                                  |

<h4><font color="purple">result/ JSON Object</font></h4>

```JSON
{
    "rc": 0,
    "data": {
        "session": {
            "intent_name": "{{intentName}}",
            "uid": "{{userId}}",
            "channel": "{{channelId}}",
            "resolved": false,
            "id": "{{sessionId}}",
            "entities": [
                {
                    "name": "cityName",
                    "val": "中国首都"
                }
            ],
            "createdate": "2019-08-28 18:15:24",
            "updatedate": "2019-08-28 18:15:24",
             "ttl": 3595
        },
        "message": {
            "textMessage": "你想做什么工具",
            "is_fallback": null,
            "is_proactive": true
        }
    },
    "error": null
}
```

### 查看会话详情

```API
Chatbot#command("GET", "/clause/prover/session/{{sessionId}}")
```

<h4><font color="purple">result/ JSON Object</font></h4>

```JSON
{
    "rc": 0,
    "data": {
        "intent_name": "{{intentName}}",
        "uid": "{{userId}}",
        "channel": "{{channelId}}",
        "resolved": false,
        "id": "{{sessionId}}",
        "entities": null,
        "createdate": "2019-08-28 18:41:56",
        "updatedate": "2019-08-28 18:41:56",
        "ttl": 3600
    },
    "error": null
}
```

## 评论

<script src="https://utteranc.es/client.js"
        repo="chatopera/docs"
        issue-term="pathname"
        label="Comment"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
