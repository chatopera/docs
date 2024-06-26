# 机器人管理

## 创建聊天机器人

```API
Chatopera#command("POST", "/chatbot", body)
```

示例代码：[Node.js](https://github.com/chatopera/chatopera-nodejs-sdk/blob/master/test/chatopera.test.js) | [Java](https://github.com/chatopera/chatopera-java-sdk/blob/master/src/test/java/com/chatopera/bot/sdk/ChatoperaTest.java) | [PHP](https://github.com/chatopera/chatopera-php-sdk/blob/master/test/ChatoperaTest.php) | [Python](https://github.com/chatopera/chatopera-py-sdk/blob/master/demo.py) | [Go](https://github.com/chatopera/chatopera-go-sdk/blob/master/chatopera_test.go)

<h4><font color="purple">body / JSON Object</font></h4>

```JSON
{
 "name": "小巴",
 "primaryLanguage": "zh_CN",
 "fallback": "请联系客服。",
 "description": "我的超级能力是对话",
 "welcome": "你好，我是机器人小巴巴",
 "trans_zhCN_ZhTw2ZhCn": false
}
```

| key               | type   | required | description                                                                                                                                                                                                           |
| ----------------- | ------ | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`            | string | &#10004; | 机器人名字。                                                                                                                                                                                                          |
| `primaryLanguage` | string | &#10008; | 聊天机器人语言，目前支持简体中文（`zh_CN`）、繁体中文(`zh_TW`)、英文（`en_US`）、日语（`ja`）、泰语（`th`）。 默认为 `zh_CN` .当使用 `zh_CN` 时可开启自动识别繁体并翻译(`trans_zhCN_ZhTw2ZhCn`: true)，默认为 false。 |
| `fallback`        | string | &#10008; | 兜底回复，当请求机器人对话时，没有得到来自多轮对话、知识库或意图识别回复时，回复此内容。                                                                                                                              |
| `welcome`         | string | &#10008; | 机器人问候语。                                                                                                                                                                                                        |
| `description`     | string | &#10008; | 机器人描述。                                                                                                                                                                                                          |

<h4><font color="purple">result / JSON Object</font></h4>

```JSON
{
 "rc": 0,
 "data": {
  "clientId": "{{clientId}}",
  "secret": "{{secret}}",
  "name": "小巴",
  "description": "Test",
  "primaryLanguage": "zh_CN",
  "createdAt": "Mon Aug 02 2021 20:35:23 GMT+0800 (CST)"
 }
}
```

_clientId_: 初始化 [Chatbot 类](https://docs.chatopera.com/products/chatbot-platform/integration/api.html) 的信息

_secret_: 初始化 [Chatbot 类](https://docs.chatopera.com/products/chatbot-platform/integration/api.html) 的信息

## 获得聊天机器人列表

```API
Chatopera#command("GET", "/chatbot?limit={{limit}}&page={{page}}")
```

示例代码：[Node.js](https://github.com/chatopera/chatopera-nodejs-sdk/blob/master/test/chatopera.test.js) | [Java](https://github.com/chatopera/chatopera-java-sdk/blob/master/src/test/java/com/chatopera/bot/sdk/ChatoperaTest.java)

<h4><font color="purple">path</font></h4>

| key   | type | default         | description      |
| ----- | ---- | --------------- | ---------------- |
| limit | int  | 默认值 20, 选填 | 返回数据条数     |
| page  | int  | 默认值 1, 选填  | 返回数据页面索引 |

<h4><font color="purple">result/ JSON Object</font></h4>

```JSON
{
    "rc": 0,
    "total": 3,
    "total_page": 3,
    "data": [
      {
        "clientId": "{{clientId}}",
        "name": "TestBot1627889023922",
        "description": "",
        "primaryLanguage": "zh_CN",
        "createdAt": "Mon Aug 02 2021 15:23:44 GMT+0800 (CST)",
        "secret": "{{secret}}",
      },
      ...
    ]
```

_total_: 所有数据条数

_total_page_: 所有页面数

## 获得聊天机器人密钥

```API
Chatopera#command("GET", "/secret/{{clientId}}")
```


示例代码：[Java](https://github.com/chatopera/chatopera-java-sdk/blob/09ca2eceda5d85e0a37f5de0eca331532edd4fe3/src/test/java/com/chatopera/bot/sdk/ChatoperaTest.java#L94)

<h4><font color="purple">path</font></h4>

| key   | type | default         | description      |
| ----- | ---- | --------------- | ---------------- |
| clientId | string  | 无，必填 | 机器人的 clientId     |

<h4><font color="purple">result/ JSON Object</font></h4>

```JSON
{
  "rc": 0,
  "data": {
    "createdAt": "Fri May 10 2024 17:11:52 GMT+0800 (China Standard Time)",
    "isDeleted": false,
    "name": "testdel3",
    "logo": "",
    "secret": "xxx",
    "descriptions": ""
  }
}
```


## 删除聊天机器人

删除聊天机器人需要：
* 聊天机器人的 ClientId，见上文方式或从聊天机器人控制台的设置页面获得；
* 聊天机器人的密钥，见上文方式或从聊天机器人控制台的设置页面获得。

有了上述两个信息，通过接口：[Chatbot](https://docs.chatopera.com/products/chatbot-platform/references/sdk/chatbot/index.html) 类中的[删除聊天机器人](https://docs.chatopera.com/products/chatbot-platform/references/sdk/chatbot/basic.html#%E5%88%A0%E9%99%A4%E8%81%8A%E5%A4%A9%E6%9C%BA%E5%99%A8%E4%BA%BA)实现。


## 更多机器人管理和使用 APIs

更多机器人管理和使用 APIs，参考 [ `Chatbot 类`](https://docs.chatopera.com/products/chatbot-platform/references/sdk/chatbot/index.html)。