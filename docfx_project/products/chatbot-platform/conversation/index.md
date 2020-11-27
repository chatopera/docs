# 多轮对话

## 概述

多轮对话基于规则，使用*对话脚本*，并结合 JavaScript*函数*实现固定话术和固定流程的聊天服务。聊天机器人开发者使用[多轮对话设计器](/products/chatbot-platform/conversation/cde.html)实现满足企业业务需求的聊天机器人。

<table class="image">
    <caption align="bottom">多轮对话管理</caption>
    <tr>
        <td><img width="800" src="../../../images/platform/1.png" alt="" /></td>
    </tr>
</table>

在一些场景中，如导购、销售、邀约和筛选潜在客户等带有话术流程的需求中，使用**多轮对话**模块实现很方便，并且结合[知识库](/products/chatbot-platform/faq/index.html)和[意图识别](/products/chatbot-platform/intent.html)，可实现强大的智能问答服务。

## 术语

在多轮对话实现的过程中，解决的是一个复杂问题：能够让机器能分析和执行的自然语言的聊天过程。为此，不得不定义了一些专用的术语和概念：

| 中文               | 英文                  | 描述                                                                                                                                     |
| ------------------ | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **多轮对话设计器** | Conversation Designer | 根据需求撰写对话脚本，对话函数的软件工具                                                                                                 |
| **对话、话题**     | Topic / Topic Name    | 这几个词代表同一个概念：由一些脚本组成的、满足预期对话能力的单元。机器人的对话能力由多个对话主题组成，对话主题是对话脚本模块化管理的形式 |
| **输入**           | Input                 | 用户向聊天机器人发送的消息的文字形式                                                                                                     |
| **匹配器**         | Gambit                | 匹配用户输入文字的字符串，可以声明通配符，当用户的输入发生时，会按照算法顺序匹配                                                         |
| **通配符**         | Star                  | 一些写法规则，约束字符串集合                                                                                                             |
| **回复**           | Reply                 | 机器人回复用户输入的文字                                                                                                                 |
| **上次回复**       | Last Reply            | 作为机器人给来访者回复的最近一次的内容                                                                                                   |
| **上下文钩子**     | Conversation Hooks    | 通过**上次回复**，链接匹配器，形成多轮对话                                                                                               |
| **函数**           | Function              | 可以从脚本中接受输入，并通过 JavaScript 执行任务返回结果的代码                                                                           |
| **对话状态**       | Conversation Status   | 多轮对话是按照状态机的模型设计的，**对话状态**就是当前对话处于状态机的什么状态                                                           |
| **对话应用**       | Conversational App    | 对应应用，c66 文件，从多轮对话设计器导出的文件                                                                                           |
| **对话模板**       | Chatbot Sample        | 聊天机器人示例程序，开源地址，https://github.com/chatopera/chatbot-samples                                                               |

<table class="image">
<caption align="bottom">对话</caption>
<tr><td><img width="800" src="../../../images/products/cde/cde-15.png" alt="对话"/></td></tr>
</table>

### 匹配器

**匹配器**是对话的基础，当用户向聊天机器人发送一条消息时，Chatopera 机器人平台会从所有定义的**匹配器**中找到匹配的一个。在 Chatopera 机器人平台中，**匹配器**用半角字符加号`+`开始，对应的回答是紧邻的下行，用半角字符减号`-`开始。

例如，我们可以这样定义一个对话：

```
+ 晚饭吃什么
- 北京烤鸭
```

**注意**：这里`+`和`-`和文字之间需要隔一个空格。

## 接下来

- [快速开始](/products/chatbot-platform/conversation/quick-start.html)
- [多轮对话设计器](/products/chatbot-platform/conversation/cde.html)
- [通配符](/products/chatbot-platform/conversation/star.html)
- [函数](/products/chatbot-platform/conversation/function.html)
- [对话状态管理](/products/chatbot-platform/conversation/state.html)
- [使用进阶](/products/chatbot-platform/conversation/expertise.html)

## 系统集成

经过一系列的工作，多轮对话终于准备妥当，可以为业务系统提供机器人问答服务了，下一步参考[系统集成](/products/chatbot-platform/integration/index.html)接入上线吧！

## 评论

<script src="https://utteranc.es/client.js"
        repo="chatopera/docs"
        issue-term="pathname"
        label="Comment"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
