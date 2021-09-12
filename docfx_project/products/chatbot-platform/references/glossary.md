# 术语

在多轮对话实现的过程中，解决的是一个复杂问题：能够让机器能分析和执行的自然语言的聊天过程。为此，需要定义一些专用的术语和概念。

## 多轮对话

在多轮对话实现的过程中，解决的是一个复杂问题：能够让机器能分析和执行的自然语言的聊天过程。为此，不得不定义了一些专用的术语和概念。


### 多轮对话设计器
Conversation Designer，根据需求撰写对话脚本，对话函数的软件工具。

### 对话、话题
Topic / Topic Name，这几个词代表同一个概念：由一些脚本组成的、满足预期对话能力的单元。机器人的对话能力由多个对话主题组成，对话主题是对话脚本模块化管理的形式。


### 输入
Input，用户向聊天机器人发送的消息的文字形式。


### 匹配器
Gambit，匹配用户输入文字的规则，包括以下三种：

* [通配符匹配器 / Star Gambit](/products/chatbot-platform/conversation/gambits/star.html)，写法规则，约束字符串集合。

* [模糊匹配器 / Like Gambit](/products/chatbot-platform/conversation/gambits/like.html)，使用机器学习匹配用户输入和匹配器包括的成员之间的相似度，如果相似度大于阀值则认为匹配，在机器人控制台或语法规则内设置阀值。

* [意图匹配器]()

### 回复
Reply，机器人回复用户输入的文字。

### 上次回复
Last Reply，作为机器人给来访者回复的最近一次的内容。

### 上下轮钩子
Conversation Hooks，通过**上次回复**，链接匹配器，形成多轮对话。

### 函数
Function，可以从脚本中接受输入，并通过 JavaScript 执行任务返回结果的代码。

### 对话状态

Conversation State， 多轮对话是按照状态机的模型设计的，**对话状态**就是当前对话处于状态机的什么状态。

### 对话应用 

Conversational App，c66 文件，从多轮对话设计器导出的文件。

### 对话模板
Chatbot Sample， 聊天机器人示例程序，开源地址，[https://github.com/chatopera/chatbot-samples](https://github.com/chatopera/chatbot-samples)。


<table class="image">
<caption align="bottom">对话</caption>
<tr><td><img width="800" src="../../../images/products/cde/cde-15.png" alt="对话"/></td></tr>
</table>



## 意图识别

### 词典

机器人的词汇表

- 自定义词典：通过词汇表，正则表达式来设定词汇集合，表达实体概念
- 系统词典：Chatopera 机器人平台内置地名、组织机构名、人名和时间等

### 意图

一个对话任务的最小单元

- 说法：表达同样意图的不同说法，可包含槽位标识
- 槽位：在意图中，完成用户任务需要的信息

### 调试

从设计到实现机器人的技能

- 训练机器人：建立词汇表，意图，为意图添加槽位和说法
- 测试对话：在测试对话页面，测试意图识别，优化训练内容

### 版本

每次训练都会得到新的意图识别模型，系统创建新的版本

- 调试版本：调试中的机器人版本
- 生产版本：训练好的机器人模型，满足上线使用需求，从调试版本发布而成

### 会话

也称为 session，和用户的单个意图关联的对话；在系统集成时，会话生命周期，部分阶段由开发者管理。

- 请求对话，需要先创建会话，会话会绑定 0-1 个任务：刚开始不知道用户意图，当确定用户意图后，该 session 就只和这个意图相关。

### 聊天

发送访客的请求，获得机器人的回复

- 通过访客的 ID，session id， 文本消息和机器人进行聊天

**会话** 和 **聊天** 都是与上线集成相关，详细参考 [系统集成](/products/chatbot-platform/integration/chatbot/chat.html)。


## 其它术语

### 对话语料

指机器人的词典内容、意图识别内容、知识库问答对和多轮对话脚本、函数和环境变量，以上内容的集合。对话语料就是机器人的对话能力依赖的所有原料。

## 评论

<script src="https://utteranc.es/client.js"
        repo="chatopera/docs"
        issue-term="pathname"
        label="Comment"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
