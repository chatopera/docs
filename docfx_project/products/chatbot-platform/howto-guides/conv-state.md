# 在多轮对话中管理对话状态

在多轮对话中，来访者和机器人对话的过程可以想像成来访者使用地图游览，每个时刻，来访者的位置都可以映射到地图上。地图有一定的行走路径，来访者下一步所能选择的方向是由当前状态提供的。

现在，来访者与机器人对话的状态会保持 30 分钟，比如来访者想要点餐，但是说了一句“我要点晚餐”，然后半个小时没有继续发送信息，那么等来访者再次发送信息时，机器人已经不记得上文了。

上下文状态和机器人记忆，都是让机器人有更强的对话处理能力：通过**上下轮钩子**和**通配符取值**，设计对话流程，满足各种定制化业务。

在实际应用中，对话状态按照匹配器、上下轮钩子和时间作用改变外，还有哪些办法影响对话状态呢？以下介绍三种方法，改变对话状态。

## 清除状态

所谓清除状态，就是在处理完某次回复，不再需要用户处于当前对话状态，而恢复默认对话状态。

解决办法：设置回复的文本以 `{CLEAR}` 开头。比如：

```
+ 再见
- {CLEAR} 感谢您选择我们，期待再次光临！
```

`{CLEAR}` 可以添加在 **回复** 或 **函数返回值**中。在 Chatopera 机器人平台返回给来访者时，文本内容会去掉这个前缀。

这个方法很实用，尤其是在**全能匹配器**，对话可能进入死循环，因为所有的输入都被全能匹配拦截，那么在对应的回复中使用`{CLEAR}`就达到了下一次对话进入默认状态，不优先匹配**全能匹配器**的目的。

## 切换话题

在多轮对话中，开发者可以定义多个**对话主题**，对话主题的名字是字母组成的字符串，使用回复在不同对话主题间跳转。

### 跳转到通配符匹配器或模糊匹配器

```
+ 你好
- ^topicRedirect("greetings","你好")
```

_topicRedirect_ 是内置的函数，第一个参数是目标主题名字，第二个参数是目标匹配器。

### 跳转到意图匹配器

在函数中，跳转到指定的意图匹配器有一点特殊，参考[使用说明](/products/chatbot-platform/conversation/gambits/intent.html#在回复中跳转到指定意图)。

## 知识库路由

在[知识库的答案](/products/chatbot-platform/faq/qna.html#设定答案)或[多轮对话的函数](/products/chatbot-platform/conversation/function.html)中设置回复时，可以用 **routeDirectReply** 来检索一个指定的[话题](/products/chatbot-platform/conversation/index.html#术语)和[匹配器](/products/chatbot-platform/conversation/index.html#匹配器)，直接路由到多轮对话的主题和匹配器。

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
