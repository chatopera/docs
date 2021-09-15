## 创建聊天机器人

首先，创建聊天机器人，登录[Chatopera 云服务](https://bot.chatopera.com/)，注册并在【控制台】中创建聊天机器人。

<p align="center">
  <b>创建聊天机器人</b><br>
  <img src="../../../images/products/cc-bot-1.png" width="600">
</p>

| 项目       | 值         | 描述                         |
| ---------- | ---------- | ---------------------------- |
| 机器人名称 | 小 C       | 机器人的名字，创建后不能变更 |
| 描述       | 机器人客服 | 机器人的描述                 |
| 语言       | zh_CN      | 机器人的语言为中文           |

机器人具有多轮对话和知识库两个管理对话能力的组件，在创建好机器人后，创建一个问答对作为测试示例。点击【知识库】图标，点击【新建问题】。

<p align="center">
  <b>新建问答对</b><br>
  <img src="../../../images/products/cc-bot-2.png" width="600">
</p>

| 项目 | 值                                                       | 描述       |
| ---- | -------------------------------------------------------- | ---------- |
| 问题 | 缴费年期变更后，佣金如何计算？                           | 问题的文本 |
| 答案 | 变更后仍有佣金的，按照变更后的年期对应的提佣率计算佣金。 | 问题的答案 |

点击【确定】。

集成机器人的方式是通过 SDK 创建机器人实例，使用机器人接口进行对话和查询等。机器人实例的认证和授权是通过*ClientId*和*Secret*完成，点击【设置】查看*ClientId*和*Secret*。

<p align="center">
  <b>查看ClientId和Secret</b><br>
  <img src="../../../images/products/cc-bot-4.png" width="600">
</p>

## 绑定机器人

然后，以管理员身份进入系统设置，在左侧菜单中导航至【智能机器人-新建机器人】，按照如下内容填入创建表单。

| 项目     | 值             | 描述                                                    |
| -------- | -------------- | ------------------------------------------------------- |
| 网站渠道 | localhost      | 根据网站地址选择网站渠道                                |
| ClientId | xxx            | [Chatopera 云服务 ClientId](https://bot.chatopera.com/) |
| Secret   | xxx            | [Chatopera 云服务 Secret](https://bot.chatopera.com/)   |
| 工作模式 | 机器人客服优先 | 目前支持【机器人客服优先】或【人工客服优先】两种类型    |
| 描述     | 机器人客服     | 对机器人的简要介绍                                      |

<p align="center">
  <b>集成机器人客服</b><br>
  <img src="../../../images/products/cosin/b1.jpg" width="800">
</p>

点击【保存】创建机器人，返回机器人列表页面，可以找到刚刚创建的机器人客服。

<p align="center">
  <b>开启机器人客服</b><br>
  <img src="../../../images/products/cosin/b2.jpg" width="800">
</p>

## 测试机器人客服

> 提示：春松客服访客测试端地址

```URL
http[s]://春松客服IP[:PORT]/testclient.html
```

使用浏览器打开*春松客服访客测试端*，并点击【在线客服】。在知识库设置好后，当访客在客户端问问题，匹配了知识库的问题后，机器人就自动回复。

比如输入：_缴费年期变更后，佣金如何计算？_，能得到在知识库中设置的答案。

<p align="center">
  <b>访客端和机器人对话</b><br>
  <img src="../../../images/products/cc-bot-6.png" width="800">
</p>

如果想使机器人变得更加智能，需要参考关于[Chatopera 云服务](https://docs.chatopera.com/chatbot-platform.html)的更多介绍。

## 评论

<script src="https://utteranc.es/client.js"
        repo="chatopera/docs"
        issue-term="pathname"
        label="Comment"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
