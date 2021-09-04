# 意图识别

## 概述

在应用聊天机器人的场景中，有一大类是任务驱动型的问答，比如来访者说“我想购买车票”，那么接下来机器人围绕订票这个需求，询问出行时间、目的地等信息，并将收集到的信息返回给聊天机器人开发者，完成订单确认、支付和下单订票等。这就是一个典型的任务驱动的问答，或者说识别意图并根据意图收集相关信息为目的。该种类型对话，在 Chatopera 云服务中，就是通过**意图识别**模块支持。

**意图识别**是语义理解的一个重要话题：与机器人对话时，是需要机器首先理解人的意图的；然后，根据这个意图，机器人继续与人进行问答；得到了这个意图的相关信息，然后机器才去执行这个意图代表的任务。

<table class="image">
<caption align="bottom">图：意图识别模块工作机制</caption>
<tr><td><img width="800" src="../../../images/intent/intent-001.png" alt="意图识别模块工作机制"/></td></tr>
</table>

在 Chatopera 机器人平台，意图识别模块也是集成进入了多轮对话模块，参考使用[意图识别匹配器](/products/chatbot-platform/conversation/gambits/intent.html。

## 下一步

- [术语：意图、槽位、词典、说法和会话等](/products/chatbot-platform/intent/glossary.html)

- [快速开始：快速实现一个任务机器人，识别意图收集关键信息](/products/chatbot-platform/intent/quick-get-start.html)

- [意图管理：创建和维护意图，训练模型](/products/chatbot-platform/intent/intents.html)

- [版本管理：发布生产版本和调试版本](/products/chatbot-platform/intent/releases.html)

- [多轮对话：使用意图识别匹配器，完成更智能对话](/products/chatbot-platform/conversation/gambits/intent.html)

- [系统集成：集成到业务系统，上线智能对话机器人](/products/chatbot-platform/integration/chatbot/chat.html#检索意图识别)

## 获得帮助和支持

### 常见问题

点击各问题链接获得解决方案：

- [意图识别远程调用出现问题](https://github.com/chatopera/docs/issues/18)

### 联系我们

如无法在常见问题中得到相关信息，请查看 [Chatopera 技术支持联系信息](/products/chatbot-platform/contract/support.html)。

## 评论

<script src="https://utteranc.es/client.js"
        repo="chatopera/docs"
        issue-term="pathname"
        label="Comment"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
