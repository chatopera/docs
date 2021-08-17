# 术语

在多轮对话实现的过程中，解决的是一个复杂问题：能够让机器能分析和执行的自然语言的聊天过程。为此，不得不定义了一些专用的术语和概念：

| 中文               | 英文                  | 描述                                                                                                                                                                                 |
| ------------------ | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **多轮对话设计器** | Conversation Designer | 根据需求撰写对话脚本，对话函数的软件工具                                                                                                                                             |
| **对话、话题**     | Topic / Topic Name    | 这几个词代表同一个概念：由一些脚本组成的、满足预期对话能力的单元。机器人的对话能力由多个对话主题组成，对话主题是对话脚本模块化管理的形式                                             |
| **输入**           | Input                 | 用户向聊天机器人发送的消息的文字形式                                                                                                                                                 |
| **匹配器**         | Gambit                | 匹配用户输入文字的字符串，包括[通配符匹配器](/products/chatbot-platform/conversation/gambits/star.html)和[模糊匹配器](/products/chatbot-platform/conversation/gambits/like.html)两种 |
| **通配符匹配器**   | Star Gambit           | 写法规则，约束字符串集合                                                                                                                                                             |
| **模糊匹配器**     | Like Gambit           | 使用机器学习匹配用户输入和匹配器包括的成员之间的相似度，如果相似度大于阀值则认为匹配，在机器人控制台或语法规则内设置阀值                                                             |
| **回复**           | Reply                 | 机器人回复用户输入的文字                                                                                                                                                             |
| **上次回复**       | Last Reply            | 作为机器人给来访者回复的最近一次的内容                                                                                                                                               |
| **上下轮钩子**     | Conversation Hooks    | 通过**上次回复**，链接匹配器，形成多轮对话                                                                                                                                           |
| **函数**           | Function              | 可以从脚本中接受输入，并通过 JavaScript 执行任务返回结果的代码                                                                                                                       |
| **对话状态**       | Conversation Status   | 多轮对话是按照状态机的模型设计的，**对话状态**就是当前对话处于状态机的什么状态                                                                                                       |
| **对话应用**       | Conversational App    | 对应应用，c66 文件，从多轮对话设计器导出的文件                                                                                                                                       |
| **对话模板**       | Chatbot Sample        | 聊天机器人示例程序，开源地址，https://github.com/chatopera/chatbot-samples                                                                                                           |

<table class="image">
<caption align="bottom">对话</caption>
<tr><td><img width="800" src="../../../images/products/cde/cde-15.png" alt="对话"/></td></tr>
</table>

## 评论

<script src="https://utteranc.es/client.js"
        repo="chatopera/docs"
        issue-term="pathname"
        label="Comment"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
