# 背景知识

Chatopera 机器人平台的定位是低代码上线智能对话机器人的工具和服务。本篇的主要目的是帮助 Chatopera 机器人平台用户从系统的角度理解 Chatopera 的多轮对话的工作机制。在开始之前，您先要对 Chatopera 云服务有一个系统的认识，那就是下面这张图。

![](../../../images/assets/screenshot_20240624091218.png)

作为定制聊天机器人的工具，Chatopera 将定制机器人的生命周期分成了三个：

* 1、定制对话技能；
* 2、发布上线；
* 3、迭代优化。
* 针对全部活动，进行投入产出的分析。

刚刚开始认识 Chatopera 云服务的新用户，待阅读背景知识后，相信你可以更好的使用 Chatopera 机器人平台定制出满足各种需求的聊天机器人。

## 多轮对话的定义

Chatopera 的智能对话机器人解决方案主要面向企业在客户服务、营销和企业内部协作中使用自然语言交互完成信息查询、任务和自动化流程。目前，市场中比较常见的智能对话机器人解决方案主要是一问一答：设定问答对，使用信息检索形式，提供信息查询功能，在 Chatopera 看来，这不是智能对话机器人的体验。

在 Chatopera，我们认为多轮对话是在一定时间内，一定交互次数内，考虑对话的上下文，每次人发送聊天内容时，机器人具备从上下文情境中分析最合理的回答，准确的为人提供回复。

## 什么场景下使用多轮对话

Chatopera 的智能对话机器人解决方案是工具，用于设计、实现和发布聊天机器人。从价值提供上，Chatopera 所面向的是封闭域聊天，更关注智能对话机器人在生产、消费和制造等领域的聊天机器人应用；在开放域聊天，尤其是以闲聊为主的应用，不是 Chatopera 智能对话机器人的关注点，虽然我们提供了标准的通用的工具，但是作为开放域聊天，在目前还没有好的技术方案，强人工智能还没有成熟，对于实际应用上，还不能大规模的提供价值。

Chatopera 的多轮对话服务，可以面向不同行业，比如教育、电商、游戏和生产制造等。尤其是客服和企业内部协作中，将以前通过表单、人工等的服务使用自然语言对话的形式实现。应用场景比如智能客服、智能招聘面试、智能提交工单、智能提交请假、智能分析潜在客户意向等。

## 实现原理

Chatopera 将问答技术中的不同组成部分构建为基础模块，提供每个模块的管理工具、APIs，Chatopera 机器人平台用户可以单独使用。在基础模块之上，再融合为一个多轮对话方案。

<!-- markup:markdown-end -->

基础模块包括：

* [深度学习: 实现语义理解、回答检索、聚类分析等](https://docs.chatopera.com/products/chatbot-platform/explanations/deeplearning.html)
* [词典：机器人能理解和捕捉的概念](https://docs.chatopera.com/products/chatbot-platform/explanations/dicts.html)
* [知识库：以搜索引擎技术为主](https://docs.chatopera.com/products/chatbot-platform/explanations/faq.html)
* [意图识别：以机器学习为主，实现任务型对话](https://docs.chatopera.com/products/chatbot-platform/explanations/intent.html)
* [对话脚本：以脚本规则为主，设定对话规则同时融合 FAQ 和意图识别](https://docs.chatopera.com/products/chatbot-platform/explanations/scripts.html)

以对话脚本为中心融合知识库和意图识别，形成多轮对话，实现定制聊天机器人的标准，是 Chatopera 机器人平台的主要特色：

* [多轮对话的检索：Chatopera 多轮对话如何融合基础模块为一个标准技术](https://docs.chatopera.com/products/chatbot-platform/explanations/query.html)
* [模糊匹配器](https://docs.chatopera.com/products/chatbot-platform/explanations/gambit-like.html)
* [意图匹配器](https://docs.chatopera.com/products/chatbot-platform/explanations/gambit-intent.html)

## 其它资料

* [视频教程](https://docs.chatopera.com/products/chatbot-platform/explanations/webinars.html)
