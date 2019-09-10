# 应用部署

安装方式：

- 单服务器部署：个人/开发者，体验服务
- 公有云部署：青云 AppCenter，支持秒级计费、动态伸缩、备份恢复、高可用性、监控告警。
- 私有部署：部署到企业 IT 基础设施。

以上安装方式在文档的其余部分作详细介绍。

## 单服务器部署

满足个人和开发者快速部署，体验产品。

[单服务器部署](https://github.com/chatopera/cosin/wiki/%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%83%A8%E7%BD%B2#%E5%8D%95%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%83%A8%E7%BD%B2)

## 公有云部署

青云 AppCenter
是一个云计算环境中的应用交付与运营管理平台，同时包含一整套用来开发云应用及云化已有应用的框架。让应用提供商和开发者可以从资源层管理的复杂性中脱离出来，从而更高效地开发、部署、运维及管理所提供的应用，让用户可以便捷地选择需要的应用来构建和管理自身的业务。

春松客服的公有云部署默认采用青云 AppCenter 并充分发挥 PaaS 平台的强大计算能力，提供支持海量用户并发访问的春松客服实例，具体详细阅读<a
    href="https://github.com/chatopera/cosin/wiki/%E6%98%A5%E6%9D%BE%E5%AE%A2%E6%9C%8D%E4%B8%8A%E6%9E%B6%E9%9D%92%E4%BA%91AppCenter"
    target="_blank">春松客服上架青云 AppCenter</a>， 获得详细介绍，包括服务部署、管理等。

## 企业私有部署

部署到企业内部 IT 基础设施，获取服务镜像

春松客服的拓扑结构介绍：

| 组件                                                                     | 描述                            | 镜像                                                            | 开源码 |
| ------------------------------------------------------------------------ | ------------------------------- | --------------------------------------------------------------- | ------ |
| ------------------------------------------------------------------------ |
| contact-center                                                           | 客服系统                        | [DockerHub](https://hub.docker.com/r/chatopera/contact-center/) |
| [Github](https://github.com/chatopera/cosin/tree/develop/contact-center) |
| cc-switch                                                                | 电话渠道软交换，基于 FreeSWITCH | [DockerHub](https://hub.docker.com/r/chatopera/cc-switch/)      |
| [Github](https://github.com/chatopera/cosin/tree/develop/cc-switch)      |
| mysql                                                                    | 数据库                          | [DockerHub](https://hub.docker.com/_/mysql/)                    | x      |
| redis                                                                    | 数据库                          | [DockerHub](https://hub.docker.com/_/redis/)                    | x      |
| elasticsearch                                                            | 检索服务                        | [DockerHub](https://hub.docker.com/_/elasticsearch/)            |
| [Github](https://github.com/elastic/elasticsearch)                       |

### 依赖环境

智能问答引擎是使用 docker 镜像进行分发的，所以，只要是 docker v12+ 版本支持的操作系统都可以运行智能问答引擎服务，对于更详细的操作系统的兼容列表，请参考[Docker Community Edition
(CE)](https://www.docker.com/community-edition)。

硬件方面，Chatopera 推荐使用 4Core CPU(Intel E5 or better)， 16GB Memory，128GB Disk 运行服务。

智能问答引擎的 docker 镜像可以安装在 docker 服务中，或[docker
registry](https://docs.docker.com/registry/)中。然后通过容器管理框架，比如[kubernetes](https://kubernetes.io/)、[Apache
Mesos](http://mesos.apache.org/)或[docker compose](https://docs.docker.com/compose/)。

在本文档中，介绍使用 docker compose 的方式部署和管理服务，docker compose 是轻量级的 docker 服务编排方案。

- docker 版本

`Docker version 18.03.1-ce, build 9ee9f40`

[安装文档](https://docs.docker.com/install/)，注意：docker 为开源码程序，本文档使用*社区版本（Docker CE）*。

- docker-compose

`docker-compose version 1.21.1, build 5a3f1a3`

[安装文档](https://docs.docker.com/compose/install/)。

### 安装

假设 docker 已经被安装好，并且其进程已经启动，在命令行终端，执行下面命令：

<pre class="prettyprint">
git clone https://github.com/chatopera/cosin.git
cd cosin
./scripts/start.sh
</pre>

上述命令执行后，查看各个服务是否已经启动成功。

`docker-compose ps`

智能客服系统的登录地址是：

`http://服务器IP地址:8035`

默认管理员用户名： admin， 密码：admin1234

生产环境安装建议：

| 事项                   | 内容                                                                         |
| ---------------------- | ---------------------------------------------------------------------------- |
| 部署方式               | 服务端软件使用 Docker 容器分发，支持公有云环境/本地服务器部署                |
| 网络带宽配置要求       | 本地内部办公网 100 兆交换，服务器之间千兆交换                                |
| 操作系统、相关软件要求 | 最小化部署：Ubuntu 16.04 或者其他服务器系统 , 资源要求为：8 核 CPU，16G 内存 |
| 终端配置要求           | 座席电脑的配置 8G 内存，500G 硬盘，I5 CPU，支持 windows 7 或者 windows10     |
| 服务方案               | 提供系统版本升级建议，优化建议等技术支持服务                                 |

### 停止服务

完成磁盘路径的创建后，就可以启动服务了。

在命令行终端中，

<pre class="prettyprint">
cd cosin
docker-compose down    
</pre>

### 重启服务

在命令行终端中，

<pre class="prettyprint">
cd cosin
docker-compose restart
</pre>

## 评论

<script src="https://utteranc.es/client.js"
        repo="chatopera/docs"
        issue-term="pathname"
        label="Comment"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
