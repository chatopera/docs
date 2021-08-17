# 工作机制

多轮对话工作机制

## 服务器端逻辑

多轮对话获取回复的逻辑解释如下：

<table class="image">
    <caption align="bottom">查询逻辑</caption>
    <tr>
        <td><img width="800" src="../../../images/products/chatbot-engine-1.png" alt="查询逻辑" /></td>
    </tr>
</table>

1. 用户输入，以文本的形式输入，语音输入也需要转化成文字。
2. [知识库检索] 如果知识库检索出相似度大于 `faqBestReplyThreshold` 的问答对，直接返回得分最高的问题的答案。
3. [多轮对话检索] 如果知识库没有检索出相似度大于 `faqBestReplyThreshold` 的问答对，检索多轮对话，如果命中了一个规则，直接返回答案。
4. [兜底回复] 如果多轮对话也没有检索出答案，返回兜底回复。

## 知识库路由

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
