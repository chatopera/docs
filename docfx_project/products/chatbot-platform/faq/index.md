# 知识库

## 概述

在智能问答需求中，有一些问题可以提前设置好答案，并且是一问一答，不涉及上下文环境，对于这类问题，就可以使用**知识库**模块。知识库通过标准问、扩展问、自定义词典和答案维护了一套知识体系，为用户提供标准的、快速的对话检索服务。

尤其是在客服场景中，来访者有大量的问题都是重复的一问一答的问题，答案相对来说固定，或者在一段时间内固定，这样最适合通过完善**知识库**提升客服工作效率。

学习使用**知识库**的过程也很简单，历史数据也不是必需的。通常先由业务人员整理一些常见问题，并在**知识库管理页面**添加问答对，在**对话测试**页面进行简单的验证就可以集成上线了。进阶优化知识库包括设置自定义词典，增强知识库检索时处理近义词的能力，以及为标准问增加扩展问，或者在对话**历史记录**页面查看沉寂问题和兜底回复，创建新的问答对，增强知识库的智能水平，知识库的优化，可以认为只能回答提前编辑好的问题，知识库的优化也是长期的过程，也是企业重要的很有价值的资产。

<table class="image">
    <caption align="bottom">知识库管理</caption>
    <tr>
        <td><img width="800" src="../../../images/platform/2.png" alt="" /></td>
    </tr>
</table>

> **提示：一问一答是指一个问题对应固定的答案。** 比如“世界上有几个大洲？”就属于这类为题；但是如果问“今天股市大盘走势如何？”，则答案不是固定的，该类问题可以通过 **意图识别模块** 或 **多轮对话** 脚本实现。

## 接下来

- [问答对管理](/products/chatbot-platform/faq/qna.html)
- [调试知识库](/products/chatbot-platform/faq/tune.html)
- [自定义词典](/products/chatbot-platform/faq/dicts.html)
- [导入和导出](/products/chatbot-platform/faq/transfer.html)
- [知识库小助手](/products/chatbot-platform/faq/assistant.html)

## 集成知识库

经过一系列的工作，知识库终于准备妥当，可以为业务系统提供机器人问答服务了，下一步参考[系统集成](/products/chatbot-platform/integration/index.html)接入上线吧！

## 评论

<script src="https://utteranc.es/client.js"
        repo="chatopera/docs"
        issue-term="pathname"
        label="Comment"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
