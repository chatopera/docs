# FAQ

以下总结[春松客服](/products/cskefu/index.html)的大家关心的常问问题，是基于企业客户/开发者的咨询整理而来。

## 问答列表

**问：简单的介绍下这个开源项目吧?**

春松客服是面向中小型企业的智能客服系统。现有提供的功能可以参考我们的 README.md 文件。<https://github.com/chatopera/cskefu/>
我们强调的智能客服主要是机器人客服以及辅助客服人员的一些功能。语音识别模块，以及我们已经发布的多轮对话设计器、智能问答引擎，很快会集成到春松客服中。
适用场景包括售前、对话营销。

**问：多轮对话设计器、智能问答引擎，这两个集成后是开源的吗，还是付费使用?**

多轮对话设计器可以免费下载使用, 智能问答引擎还没有开源。参考[Chatopera 云服务](/products/chatbot-platform/index.html)。

**问：请问客户怎么接入？**

部署安装，配置使用。创建网站渠道，查看网站渠道详情有集成指南。

**问：软件怎么收费?**

基础模块不收费，商业插件和服务收费。参考[开源项目地址主页介绍](https://github.com/chatopera/cskefu)。

**问：春松客服支持哪些渠道？**

免费模块目前支持 PC，Mobile 浏览器，开源版本就可以。APP 需要对接 SDK，这个有额外的开发工作，我们可以定制开发。

付费模块支持安装 [Facebook Messenger](/products/cskefu/channels/messenger/index.html) 渠道插件。

**问：如果我们也需要给商家开坐席,也是能支持的吗？**

支持，春松客服内置的权限，组织机构管理使用参考[账号和权限](/products/cskefu/accounting.html)。

**问：那怎么能互相交流？后台看到坐席了，前端是不是还要在跑一个程序？**

访客可以用网页客户端插件，参考[文档](/products/cskefu/work.html)。

**问：有没有 java 项目可以直接导入 idea？**

[开发环境搭建](/products/cskefu/osc/engineering.html)

**问：为啥我这里客服没有管理员权限就看不到对话？**

权限由“人员-角色-资源”确定。资源又通过部门隔离，参考[cc] resource 根据角色和部门进行权限检查 [#61](https://github.com/chatopera/cskefu/issues/61)
然后，具体到坐席管理，需要新建一个角色。之后赋予坐席的权限。再加“人员”到这个角色。

**问：我的服务器已经部署过 redis mysql 等服务，对这个项目部署有问题吗？**

那可以直接用，设置环境变量就行。修改一下 docker-compose.yml。

**问：有本地部署的教程文档吗？**

[参考春松客服部署方案](/products/cskefu/deploy.html)

**问：我想改成异步触发对话，后台重新输出了一下页面作用域里面的值，发现参数太多，web 通信时候调用得 socket.io.js 有没有相关的文档和参数解释？**

[cc] 提供启动客服会话的 RestAPI [#97](https://github.com/chatopera/cosin/issues/97)

**问：由于使用了 netty-socketio，所以 Web 端、android、ios 端都需要使用 socketio 的客户端吧，比如不能说 Android 直接写原生 netty 客户端 或者 web 直接写 websocket 客户端去连服务器，对吧？**

socketio 是对 websocket 进行封装，是 websocket 协议的一种实现，在客户端通过 websocket 连接应该是没问题的。这块我还没有试过，不过肯定能 google 到。

**问：微信功能接进去了吗?**

现在还不支持微信公众号。

**问：机器人自动回复模块在哪？**

机器人客服参考[文档](https://docs.chatopera.com/products/cskefu/work-chatbot/index.html)。

**问：多轮对话,看上去就是在编辑脚本,有对分支逻辑的支持吗?**

支持分支编辑，参考 <https://github.com/chatopera/chatbot-samples>

**问：多轮语言的编辑的 开源的也有么**

我们做的不开源。

**问：就是客服开源对吧**

Chatopera 全部开源项目查看 [https://github.com/chatopera](https://github.com/chatopera)。

**问：春松的访客，有匿名用户和注册用户的概念吗**

没有，访客并不注册账号，客服端可以关联联系人。

**问：没有多租户也就是你们没有考虑搞 saas 云喽?要用只能做独立部署?**

春松客服 SaaS 版暂时没有上线时间计划，主要是企业私有部署或部署在 IaaS 云服务内。

**问：现在的最新开源代码，已经完成集群改造了？**

集群还需要调整一点代码，因为目前单机版性能轻松支持 200 位坐席人员同时使用，集群部署还未提上日程。

**问：常用浏览器兼容到的最低版本多少？**

有条件就用最新的，安全性有保证。
特殊说明微软浏览器：暂时不支持`IE`，请推荐用户使用 Edge 浏览器。

**问：这个项目要怎么启动呢**

- 服务器部署：<https://docs.chatopera.com/products/cskefu/deploy.html>

- 开发环境搭建：<https://docs.chatopera.com/products/cskefu/osc/engineering.html>
