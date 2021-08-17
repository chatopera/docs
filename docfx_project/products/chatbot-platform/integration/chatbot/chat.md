# 对话检索

## 检索知识库

```
Chatbot#command("POST", "/faq/query", body)
```

<h4><font color="purple">body / JSON Object</font></h4>

```
{
	"query": "查找相似的问题",
	"fromUserId": "{{userId}}",
	"faqBestReplyThreshold": 0.5,
	"faqSuggReplyThreshold": 0.1
}
```

<h4><font color="purple">result/ JSON Object</font></h4>

```
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

```
Chatbot#command("POST", "/clause/prover/session", body)
```

<h4><font color="purple">body / JSON Object</font></h4>

```
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

```
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

```
Chatbot#command("POST", "/clause/prover/chat", body)
```

<h4><font color="purple">body / JSON Object</font></h4>

```
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

```
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

```
Chatbot#command("GET", "/clause/prover/session/{{sessionId}}")
```

<h4><font color="purple">result/ JSON Object</font></h4>

```
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

## 检索多轮对话

多轮对话是通过脚本规则、函数编程实现问答服务，在*检索多轮对话*接口中，同时融合了知识库参与回复决策，返回结果，尤其是通过知识库答案路由到指定话题的指定触发器，非常实用。

```
Chatbot#command("POST", "/conversation/query", body)
```

<h4><font color="purple">body / JSON Object</font></h4>

```
{
    "fromUserId": "{{userId}}",
    "textMessage": "想要说些什么",
    "faqBestReplyThreshold": 0.6,
    "faqSuggReplyThreshold": 0.35
}
```

| key                   | type   | required | description                                                                                       |
| --------------------- | ------ | -------- | ------------------------------------------------------------------------------------------------- |
| userId                | string | &#10004; | 用户唯一 ID，用户 ID 由业务系统传递或生成，保证每个用户用唯一字符串                               |
| textMessage           | string | &#10004; | 用户输入的对话文字                                                                                |
| faqBestReplyThreshold | number | &#10008; | 知识库最佳回复， 默认 0.8，知识库建议回复，知识库中置信度超过该值通过返回值`string`和`params`返回 |
| faqSuggReplyThreshold | number | &#10008; | 知识库建议回复，默认 0.6，知识库中置信度超过该值的问答对通过返回值`faq`属性返回                   |

<h4><font color="purple">result/ JSON Object</font></h4>

```
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

<h4><font color="purple">服务器端逻辑</font></h4>

多轮对话获取回复的逻辑解释如下：

<table class="image">
    <caption align="bottom">查询逻辑</caption>
    <tr>
        <td><img width="800" src="../../../../images/products/chatbot-engine-1.png" alt="查询逻辑" /></td>
    </tr>
</table>

1. 用户输入，以文本的形式输入，语音输入也需要转化成文字。
2. [知识库检索] 如果知识库检索出相似度大于 `faqBestReplyThreshold` 的问答对，直接返回得分最高的问题的答案。
3. [多轮对话检索] 如果知识库没有检索出相似度大于 `faqBestReplyThreshold` 的问答对，检索多轮对话，如果命中了一个规则，直接返回答案。
4. [兜底回复] 如果多轮对话也没有检索出答案，返回兜底回复。

<h4><font color="purple">知识库路由</font></h4>

在[知识库的答案](/products/chatbot-platform/faq/qna.html#设定答案)或[多轮对话的函数](/products/chatbot-platform/conversation/function.html)中设置回复时，可以用 **routeDirectReply** 来检索一个指定的[话题](/products/chatbot-platform/conversation/index.html#术语)和[匹配器](/products/chatbot-platform/conversation/index.html#匹配器)。

语法：

```
routeDirectReply#["TOPIC_NAME", "TOPIC_GAMBIT_ID" [,INHERIT_PARAMS]]
```

_TOPIC_NAME_: [对话名称](/products/chatbot-platform/conversation/index.html#术语)

_TOPIC_GAMBIT_ID_: [触发器名称](/products/chatbot-platform/conversation/index.html#术语)

其中，_INHERIT_PARAMS_ 是可选参数，决定当前对话取得的 `params` 是否覆盖接下来对话的 `params`，值为`[true|false]`，默认为 `false`。

另外，当 `TOPIC_GAMBIT_ID` 的值为 `$ctx.textMessage$` 时，则使用当前对话的用户输入，在 `TOPIC_NAME` 中进行检索。

比如

```
routeDirectReply#["class_001_pre", "__C1PRE_GAMBIT_003",true]
```

<table class="image">
<caption align="bottom">【知识库或函数】路由多轮对话</caption>
<tr><td><img width="600" src="../../../images/products/platform/set-faq-route-conversion-reply.jpg" alt="【知识库或函数】路由多轮对话"/></td></tr>
</table>

提示：**routeDirectReply**需要设定为知识库问答对里的第一个答案，答案类型为 纯文本`plain`。

## 评论

<script src="https://utteranc.es/client.js"
        repo="chatopera/docs"
        issue-term="pathname"
        label="Comment"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
