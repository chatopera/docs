# user

在函数中获得对话用户的信息。

## this.user.id

当前对话用户标识，在 [多轮对话检索](/products/chatbot-platform/references/sdk/chatbot/chat.html#检索多轮对话)传入的`userId`信息。

在函数中，获取该唯一标识信息：

```函数
this.user.id
```

比如：

```函数
exports.myUserId = function(cb){
    cb(null, {
        text: "Your id is " + this.user.id
    })
}
```

## this.user.history

当前用户与机器人对话的历史

```函数
this.user.history // 类型：数组
```

其中，每个元素内容如下：

```JSON
{
    "input" : {
        "timestamp" : ISODate("2020-07-28T17:06:01.458Z"),
        "original" : "hello"
    },
    "reply" : {
        "createdAt" : 1595955961672.0,
        "string" : "#in-params#",
        "topicName" : "greetings",
        "clearConversation" : false,
        "props" : {
            "params" : [
                {
                    "hyperlink" : "http://",
                    "thumbnail" : "http://xx.png",
                    "summary" : "描述",
                    "title" : "标题",
                    "type" : "card"
                }
            ]
        },
    }
}
```

其中，*original*就是来访者的输入，*reply*是上一轮对话中机器人的回复。

历史对话按照降序排列，即最近发生的对话在上面，最多存储 100 轮历史对话数据。

## 评论

<script src="https://utteranc.es/client.js"
        repo="chatopera/docs"
        issue-term="pathname"
        label="Comment"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>