# FAQ

以下总结春松客服的大家关心的常问问题，是基于企业客户/开发者的咨询整理而来。

## 问答列表

**问：系统是否支持电话外呼?**

支持

**问：简单的介绍下这个开源项目吧?**

春松客服是面向中小型企业的智能客服系统。现有提供的功能可以参考我们的 README.md 文件。https://github.com/chatopera/cskefu/
我们强调的智能客服主要是机器人客服以及辅助客服人员的一些功能。语音识别模块，以及我们已经发布的多轮对话设计器、智能问答引擎，很快会集成到春松客服中。
适用场景包括售前、电话营销、呼叫中心。

**问：多轮对话设计器、智能问答引擎，这两个集成后是开源的吗，还是付费使用?**

多轮对话设计器可以免费下载使用, 智能问答引擎还没有开源

**问：请问客户怎么接入？**

部署安装，配置使用。创建网站渠道，查看网站渠道详情有集成指南。

**问：多轮对话设计器和智能问答引擎发布至今，有相关的资料吗？**

https://docs.chatopera.com/ 在文档中心有这两个产品的介绍。

**问：如何部署？**

- 私有部署：春松客服提供了部署脚本，一行代码启动服务，依赖 docker 和 docker-compose。
- 公有云部署：默认青云应用中心部署，通过沟通可部署到其他平台。

**问：开源是包括了聊天机器人源码？还是说只是接入你们机器人的客服系统部分开源？**

聊天机器人包括多轮对话设计器和智能问答引擎不会全部开源，我们出于回馈开源社区的目的开源部分代码，比如[Clause:中文语义理解系统](https://github.com/chatopera/clause)。

**问：软件怎么收费?**

基础模块不收费，商业插件和服务收费。

**问：春松客服支持哪些渠道？**

免费模块目前支持 PC，Mobile 浏览器，开源版本就可以。APP 需要对接 SDK，这个有额外的开发工作，我们可以定制开发。

完成付费模块支持电话和 Skype。

**问：如果我们也需要给商家开坐席,也是能支持的吗？**

支持，但是商家的权限不能设置系统。也可以给每个商家单独部署，现在能做到秒级部署一个实例。

**问：那怎么能互相交流？后台看到坐席了，前端是不是还要在跑一个程序？**

访客可以用网页客户端插件，参考[文档](/products/cskefu/work.html)。

**问：请问这款软件是收费的吗？**

开源的部分不收费，https://github.com/chatopera/cskefu， 定制化开发和服务收费。

**问：有没有 java 项目可以直接导入 idea？**

[开发环境搭建](/products/cskefu/engineering.html)

**问：为啥我这里客服没有管理员权限就看不到对话？**

权限由“人员-角色-资源”确定。资源又通过部门隔离，参考[cc] resource 根据角色和部门进行权限检查 [#61](https://github.com/chatopera/cskefu/issues/61)
然后，具体到坐席管理，需要新建一个角色。之后赋予坐席的权限。再加“人员”到这个角色。

**问：我的服务器已经部署过 redis mysql 等服务，对这个项目部署有问题吗？**

那可以直接用，设置环境变量就行。修改一下 docker-compose.yml。

**问：这个智能机器人是免费的吗？我可以自己配置知识规则吗？**

智能机器人收费，参考[文档](https://docs.chatopera.com/products/chatbot-platform/index.html)。

**问：VOIP 能关联吗？**

现在通过 SIP 协议支持 VOIP 提供商的服务。

**问：有本地部署的教程文档吗？**

[参考春松客服部署方案](https://docs.chatopera.com/products/cskefu/deploy.html)

**问：我想改成异步触发对话，后台重新输出了一下页面作用域里面的值，发现参数太多，web 通信时候调用得 socket.io.js 有没有相关的文档和参数解释？**

[cc] 提供启动客服会话的 RestAPI [#97](https://github.com/chatopera/cosin/issues/97)

**问：这个后台的电话功能是需要配置完才会有吗？工单系统怎么用？**

呼叫时要配合一个硬件设备，才能适应起来。工单目前不支持，除非你们愿意采购我们定制化开发服务，可以很快支持。

**问：由于使用了 netty-socketio，所以 Web 端、android、ios 端都需要使用 socketio 的客户端吧，比如不能说 Android 直接写原生 netty 客户端 或者 web 直接写 websocket 客户端去连服务器，对吧？**

socketio 是对 websocket 进行封装，是 websocket 协议的一种实现，在客户端通过 websocket 连接应该是没问题的。这块我还没有试过，不过肯定能 google 到。

**问：微信功能接进去了吗?**

现在还不支持微信公众号

**问：机器人自动回复模块在哪？**

机器人客服参考[文档](https://docs.chatopera.com/products/cskefu/work-chatbot.html)。

**问：多轮对话,看上去就是在编辑脚本,有对分支逻辑的支持吗?**

支持分支编辑，参考 https://github.com/chatopera/chatbot-samples

**问：多轮语言的编辑的 开源的也有么**

我们做的不开源

**问：就是客服开源对吧**

Chatopera 全部开源项目查看 [https://github.com/chatopera](https://github.com/chatopera)。

** 问：春松的访客，有匿名用户和注册用户的概念吗 **

没有，访客并不注册账号，客服端可以关联联系人。

**问：好像没有多租户的功能？**

春松客服商业版支持多租户。

**问：没有多租户也就是你们没有考虑搞 saas 云喽?要用只能做独立部署?**

春松客服 SaaS 版 暂时没有上线时间计划，主要是企业私有部署或部署在 IaaS 云服务内。

**问：现在的最新开源代码，已经完成集群改造了？**

集群还需要调整一点代码，因为目前单机版性能轻松支持 200 位坐席人员同时使用，集群部署还未提上日程。

**问：UDesk 是同类的竞品吗**

不是，UDesk 是呼叫中心运营商，我们主要是做机器人客服产品和方案。UDesk 也是集成了很多厂商的产品。

**问：呼叫中心我看只有外出的。呼入排队那块的功能及查询统计都没有？**

呼入会自动分配到空闲的坐席，如果全忙会等待空闲的坐席，没有排队列表。呼入的统计和通话记录也在呼出的里面。

**问：源码里没看到配套的 Freeswitch 的 dialplan？**

呼叫中心插件不开源，购买商业插件后能得到呼叫计划配置文件。

**问：语音识别用在什么场景？**

语音识别应用在和不同渠道的语音交互上，这个是一个基础服务。场景包括外呼机器人和微信公众号语音交互等。

**问：常用浏览器兼容到的最低版本多少？**

有条件就用最新的，安全性有保证。
特殊说明微软浏览器：暂时不支持`IE`，请推荐用户使用 Edge 浏览器。

**问：这个项目要怎么启动呢**

- 服务器部署：https://docs.chatopera.com/products/cskefu/deploy.html

- 开发环境搭建：https://docs.chatopera.com/products/cskefu/engineering.html

## 加入社区

作为开发者、企业用户，如何有效的搭建、使用春松客服开源版？春松客服团队进行有限程度免费支持，加入 QQ 群即刻融入春松客服开源社区。

<p align="center">
  <b>春松客服QQ交流群：185659917， <a href="https://jq.qq.com/?_wv=1027&k=5I1cJLP" target="_blank">点击链接加入群聊</a></b><br>
  <img src="../../images/products/cosin/g1.jpg" width="200">
</p>

## 评论

<script src="https://utteranc.es/client.js"
        repo="chatopera/docs"
        issue-term="pathname"
        label="Comment"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
