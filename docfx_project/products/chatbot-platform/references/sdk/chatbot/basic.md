# 机器人基本管理

## 获取机器人画像

```API
Chatbot#command("GET", "/")
```

<h4><font color="purple">result / JSON Object</font></h4>

```JSON
{
    "rc": 0,
    "data": {
        "name": "小巴巴",
        "fallback": "请联系客服。",
        "description": "Performs Tasks or retrieves FAQ.",
        "welcome": "你好，我是机器人小巴巴",
        "primaryLanguage": "zh_CN",
        "status": {
            "reindex": 0,
            "retrain": 0
        }
    }
}
```

| key               | type        | description                                                                                              |
| ----------------- | ----------- | -------------------------------------------------------------------------------------------------------- |
| `name`            | string      | 机器人名字。                                                                                             |
| `fallback`        | string      | 兜底回复，当请求机器人对话时，没有得到来自多轮对话、知识库或意图识别回复时，回复此内容。                 |
| `welcome`         | string      | 机器人问候语。                                                                                           |
| `description`     | string      | 机器人描述。                                                                                             |
| `primaryLanguage` | string      | 机器人语言。                                                                                             |
| `status`          | JSON Object | 全局任务的执行状态，`reindex`代表知识库同步自定义词典的状态；`retrain`代表意图识别同步自定义词典的状态。 |

## 更新机器人画像

```API
Chatbot#command("PUT", "/", body)
```

<h4><font color="purple">body / JSON Object</font></h4>

```JSON
{
 "fallback": "请联系客服。",
 "description": "我的超级能力是对话",
 "welcome": "你好，我是机器人小巴巴"
}
```

<h4><font color="purple">result / JSON Object</font></h4>

```JSON
{
 "rc": 0,
 "data": {
  "name": "小巴巴",
  "fallback": "请联系客服。",
  "description": "Performs Tasks or retrieves FAQ.",
  "welcome": "你好，我是机器人小巴巴"
}
```

## 获取全局任务状态

```API
Chatbot#command("GET", "/status")
```

<h4><font color="purple">result / JSON Object</font></h4>

```JSON
{
 "rc": 0,
 "data": {
  "status": {
   "reindex": 0,
   "retrain": 0
  }
}
```

## 删除聊天机器人

删除聊天机器人，该接口销毁机器人资源，并且不可逆。**使用时需格外谨慎！**

```API
Chatbot#command("DELETE", "/")
```

<h4><font color="purple">result / JSON Object</font></h4>

```JSON
{
    "rc": 0,
    "msg": done
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
