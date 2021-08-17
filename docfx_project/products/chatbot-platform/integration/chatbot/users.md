## 用户和对话历史

### 获取用户列表

```
Chatbot#command("GET", "/users")
```

<h4><font color="purple">path</font></h4>

| key   | type | default | description        |
| ----- | ---- | ------- | ------------------ |
| limit | int  | 1       | 返回最多多少条数据 |
| page  | int  | 20      | 返回第多少页       |

<h4><font color="purple">result / JSON Object</font></h4>

```
{
    "rc": 0,
    "total": 5,
    "current_page": 1,
    "total_page": 1,
    "data": [
        {
            "userId": "{{userId}}",
            "lasttime": "2020-07-19T14:12:13.690Z",
            "created": "2020-07-19T13:48:02.225Z"
        }
    ]
}
```

_userId_: 和机器人对话的用户标识

_lasttime_: 最后沟通时间

_created_: 第一次沟通时间

### 屏蔽用户

```
Chatbot#command("POST", "/users/{{userId}}/mute")
```

<h4><font color="purple">path</font></h4>

| key    | type   | default        | description  |
| ------ | ------ | -------------- | ------------ |
| userId | string | 无默认值, 必填 | 用户唯一标识 |

<h4><font color="purple">result / JSON Object</font></h4>

```
{
    "rc": 0,
    "data": {}
}
```

### 取消屏蔽

```
Chatbot#command("POST", "/users/{{userId}}/unmute")
```

<h4><font color="purple">path</font></h4>

| key    | type   | default        | description  |
| ------ | ------ | -------------- | ------------ |
| userId | string | 无默认值, 必填 | 用户唯一标识 |

<h4><font color="purple">result / JSON Object</font></h4>

```
{
    "rc": 0,
    "data": {}
}
```

### 是否被屏蔽

```
Chatbot#command("POST", "/users/{{userId}}/ismute")
```

<h4><font color="purple">result / JSON Object</font></h4>

```
{
    "rc": 0,
    "data": {
        "mute": false
    }
}
```

`data.mute`返回 boolean 类型值。

### 获取用户画像信息

```
Chatbot#command("GET", "/users/{{userId}}/profile")
```

<h4><font color="purple">path</font></h4>

| key    | type   | default        | description  |
| ------ | ------ | -------------- | ------------ |
| userId | string | 无默认值, 必填 | 用户唯一标识 |

<h4><font color="purple">result/ JSON Object</font></h4>

```
{
    "rc": 0,
    "data": {
        "userId": "postman9",
        "name": null,
        "lasttime": "2020-07-19T14:12:13.690Z",
        "created": "2020-07-19T13:48:02.225Z",
        "profile": {},
        "mute": false
    }
}
```

### 获取聊天历史

```
Chatbot#command("GET", "/users/{{userId}}/chats?limit={{limit}}&page={{page}}")
```

<h4><font color="purple">path</font></h4>

| key    | type   | default        | description        |
| ------ | ------ | -------------- | ------------------ |
| userId | string | 无默认值, 必填 | 用户唯一标识       |
| limit  | int    | 1              | 返回最多多少条数据 |
| page   | int    | 20             | 返回第多少页       |

<h4><font color="purple">result / JSON Object</font></h4>

```
{
    "rc": 0,
    "total": 16,
    "current_page": 1,
    "total_page": 1,
    "data": [
        {
            "userId": "postman9",
            "textMessage": "方法",
            "direction": "outbound",
            "service": "faq",
            "confidence": 0.3781,
            "docId": "AXNCspoufXOJhfysI3-Z",
            "created": "2020-07-19T14:12:13.802Z"
        }
    ]
}
```

_total_: 该用户和机器人之间对话总数

_current_page_： 当前页

_total_page_: 总页数

_userId_: 用户标识

_textMessage_: 文本内容

_direction_: 消息传递方向，【inbound】为消费者发送，【outbound】为机器人发送

_service_: 提供回复的服务

_confidence_: 置信度

_created_: 消息创建时间
