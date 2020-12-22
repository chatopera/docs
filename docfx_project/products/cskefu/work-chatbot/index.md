# 机器人客服

## 痛点

企业需要快速回复客服问题，当前市场上，存在很多厂商能提供全渠道智能客服系统，相对来说，渠道对接已经非常成熟，集成起来容易。在机器人客服上，用户体验参差不齐。在 Chatopera，我们主要关注智能机器人，追求最好的机器人客服体验：快速实现符合业务需求的聊天机器人，效果稳定。

<table class="image">
    <caption align="bottom">用户服务环节</caption>
    <tr>
        <td><img width="800" src="../../../images/products/user-cycle-service.png" alt="用户服务环节" /></td>
    </tr>
</table>

## 解决方案

### 场景描述

在 Chatopera，机器人客服将加入到聊天室中，它有两种参与客户服务的方式：

- 管聊天室，直接和消费者沟通

<table class="image">
    <caption align="bottom">机器人客服</caption>
    <tr>
        <td><img width="800" src="../../../images/products/user-service-flow-2.png" alt="机器人客服" /></td>
    </tr>
</table>

具体地说，在排队阶段，引导消费者问问题，借助<a href="https://docs.chatopera.com/products/chatbot-platform/index.html" target="_blank">Chatopera 机器人平台</a>，进行意图识别，如果意图匹配到了智能问答引擎中的对话，就启动多轮对话，完成服务；未匹配到多轮对话则继续排队，在客服人员接入会话时，机器人客服针对消费者的问题，给客服人员建议回复。

**针对不同企业客户的需求，机器人客服的服务方式也可以调整，最主要的是，机器人客服可以利用多轮对话和知识库，提高用户满意度，提高效率，人工坐席专注于更加棘手的问题。**

- 辅助客服人员

<table class="image">
    <caption align="bottom">机器人辅助坐席</caption>
    <tr>
        <td><img width="800" src="../../../images/products/cosin/faq-work-ass.png" alt="机器人辅助坐席" /></td>
    </tr>
</table>

### 功能设计

考虑到上述痛点，春松客服的机器人客服推出两个主要功能：机器人客服的主要功能包括：1）智能客服，接待访客；2）知识库建议，包括知识库联想和知识库快捷。

<p>智能客服：在开启状态下，在访客端可以看到<b>智能客服</b>对话窗口并与机器人客服对话。 在管理页面，可切换工作状态，比如机器人客服优先、人工坐席优先或仅机器人客服。</p>

<p>知识库建议：包括<b>知识库联想</b>和<b>知识库快捷</b>。<b>知识库联想</b>：当坐席与访客进行对话过程中，坐席输入消息时是否得到机器人的建议回复；<b>知识库快捷</b>：当坐席与访客进行对话过程中，坐席收到访客的消息时是否得到机器人的建议回复。</p> 利用机器人知识库，可以支持坐席即时获得建议回复，得到标准、准确、体贴的回复内容，提升用户体验，大幅度提升工作效率。在春松客服中，支持使用知识库完成：知识库快捷和知识库联想，详细内容阅读下文。

可以在 Chatopera 机器人平台的管理页面设置这些功能的开启状态，在右上角菜单进入机器人管理和使用统计情况查看页面。

## 视频教程

机器人客服是春松客服的特色功能之一，机器人客服设计的目标是自动完成固定话术和固定话术的问答。春松客服的机器人客服是从客服人员和访客两个角度展开的，提升生产力和客户满意度，比如智能建议回复、知识库问答和多轮对话。

建议先看[视频教程](https://ke.qq.com/course/475430)，再看本文剩余内容。

视频地址：[https://ke.qq.com/course/475430](https://ke.qq.com/course/475430)

## 计费和发票

春松客服里机器人客服的收费标准，对于使用 [Chatopera 云服务](https://bot.chatopera.com/) 而言，参考 [《计费和发票》](https://docs.chatopera.com/products/chatbot-platform/billing.html)；同时，Chatopera 机器人平台可为企业客户私有部署，洽谈合作参考 [《联系我们》](https://www.chatopera.com/price.html)。

## 知识库工具条

考虑到客服工作目前分布在不同渠道，而且每隔一段时间还会出现新的渠道，有没有一个好的知识库工具能适应不同渠道呢？

Chatopera 开发 [Chatopera 小助手](/products/chatbot-platform/faq/assistant.html) 来适应差异较大的不同渠道，将机器人知识库发挥更大作用。

Chatopera 小助手将知识库的效益最大化，适合作为企业知识库管理、网络聊天快捷语等场景。

## 评论

<script src="https://utteranc.es/client.js"
        repo="chatopera/docs"
        issue-term="pathname"
        label="Comment"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
