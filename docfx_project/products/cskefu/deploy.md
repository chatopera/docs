# 应用部署

春松客服适应各种部署方式，本文使用 Docker 和 Docker compose 的方式，适合体验、开发、测试和上线春松客服，此种方式简单快捷。

重要提示：部署应用后，必须按照《系统初始化》[^initdoc]文档进行系统初始化，再使用，不做初始化，会造成坐席无法分配等问题。

[^initdoc]: 系统初始化文档，https://docs.chatopera.com/products/cskefu/initialization.html

## 准备条件

### 前提

| 项目                | 说明                                                          |
| ------------------- | ------------------------------------------------------------- |
| 操作系统            | Linux (CentOS 7.x, Ubuntu 16.04+ 等)，**推荐使用 Ubuntu LTS** |
| Docker 版本         | Docker version 1.13.x 及以上                                  |
| Docker Compose 版本 | version 1.23.x 及以上                                         |
| 防火墙端口          | 8035, 8036                                                    |
| 其他软件            | git                                                           |
| 内存                | 开发测试 >= 8GB \| 生产环境 >= 16GB                           |
| CPU 颗数            | 开发测试 >= 2 \| 生产环境 >= 4                                |
| 硬盘                | >= 20GB                                                       |
<!-- markup:table-caption 部署依赖资源的最低配置 -->

### 安全组

如果使用云主机，要考虑到不同云服务提供商的安全组设置，允许 8035 和 8036 端口下行。

## 克隆代码

```Bash
git clone https://github.com/chatopera/cskefu.git cskefu
cd cskefu
cp sample.env .env # 使用文本编辑器打开 .env 文件，并按照需求需改配置
```

> osc 为 OpenSource Community 缩写，代表春松客服开源版本分支。

## 配置项

以下为部署相关的环境变量，可以在 `.env` 中覆盖默认值。

| KEY                  | 默认值             | 说明                                           |
| -------------------- | ------------------ | ---------------------------------------------- |
| COMPOSE_FILE         | docker-compose.yml | 服务编排描述文件，保持默认值                   |
| COMPOSE_PROJECT_NAME | cskefu             | 服务实例的容器前缀，可以用其它字符串           |
| MYSQL_PORT           | 8037               | MySQL 数据库映射到宿主机器使用的端口           |
| REDIS_PORT           | 8041               | Redis 映射到宿主机器的端口                     |
| ES_PORT1             | 8039               | ElasticSearch RestAPI 映射到宿主机器的端口     |
| ES_PORT2             | 8040               | ElasticSearch 服务发现端口映射到宿主机器的端口 |
| CC_WEB_PORT          | 8035               | 春松客服 Web 服务地址映射到宿主机器的端口      |
| CC_SOCKET_PORT       | 8036               | 春松客服 SocketIO 服务映射到宿主机器的端口     |
| ACTIVEMQ_PORT1       | 8051               | ActiveMQ 端口                                  |
| ACTIVEMQ_PORT2       | 8052               | ActiveMQ 端口                                  |
| ACTIVEMQ_PORT2       | 8053               | ActiveMQ 端口                                  |
| DB_PASSWD            | 123456             | 数据库密码，设置到 MySQL, Redis, ActiveMQ      |
| LOG_LEVEL            | INFO               | 日志级别，可使用 WARN, ERROR, INFO, DEBUG      |
<!-- markup:table-caption 配置环境变量项目 -->

以上配置中，**端口的各默认值需要保证在宿主机器上还没有被占用；数据库的密码尽量复杂；CC_WEB_PORT 和 CC_SOCKET_PORT 这两个值尽量不要变更；生产环境下 LOG_LEVEL 使用至少 WARN 的级别**。

以下为一些业务功能相关配置的环境变量：

| KEY                  | 默认值      | 说明                                                                                                   |
| -------------------- | ----------- | ------------------------------------------------------------------------------------------------------ |
| TONGJI_BAIDU_SITEKEY | placeholder | 使用[百度统计](https://tongji.baidu.com/web/welcome/login) 记录和查看页面访问情况，默认不记录          |
| EXTRAS_LOGIN_BANNER  | off         | 登录页上方展示通知的内容，默认(off)不展示                                                              |
| EXTRAS_LOGIN_CHATBOX | off         | 登录页支持加入一个春松客服网页渠道聊天按钮，比如 <https://oh-my.cskefu.com/im/xxx.html，默认(off>)不展示 |
<!-- markup:table-caption 业务相关环境变量 -->

## 管理命令

### 启动服务

```Bash
cd cskefu                        # 进入下载后的文件夹
docker-compose pull                  # 拉取镜像
docker-compose up -d contact-center  # 启动服务
```

### 查看服务状态

```Bash
docker-compose ps
```

### 查看服务日志

```Bash
docker-compose logs -f contact-center
```

### 登陆系统

在日志中，查看到如下类似信息，代表服务已经启动。

```日志
INFO  c.c.socketio.SocketIOServer - SocketIO server started at port: 8036 [nioEventLoopGroup-2-1]
INFO  com.chatopera.cc.Application - Started Application in 35.319 seconds (JVM running for 42.876) [main]
```

然后，从浏览器打开 <http://YOUR_IP:CC_WEB_PORT/> 访问服务。
默认管理员账号： admin 密码： admin1234

### 关闭服务

```Bash
docker-compose down
```

### 重启服务

```Bash
docker-compose restart
```

## 无网络访问条件下部署

### 利用其他机器

首先，找一个网络条件好的电脑或服务器，安装 docker。

### 下载镜像

然后，在新的电脑下载镜像。

方法，执行命令：

```
docker pull IMAGE_NAME
```

IMAGE_NAME 参考 docker-compose.yml 中各服务的image，
比如：
`docker pull chatopera/contact-center:develop`

春松客服包含多个image。

### 导出镜像

下载好image后，导出image，将所有image使用下面命令导出为 tgz 文件

```
docker save chatopera/contact-center:develop > cc.docker.tgz
```

### 上传镜像

将所有导出的image tgz文件上传到目标部署的服务器
即网络条件不好的机器，比如用 FTP工具或SCP命令。

### 安装镜像

 上传到目标机器后，安装镜像
`docker load < cc.docker.tgz`

安装成功后，会提示。

### 启动服务

启动春松客服，参考本章以上内容。

```
cd cskefu # 源文件下载地址
docker-compose up -d contact-center
```

<!-- markup:markdown-end -->

## 下一步

- [系统初始化：建立组织机构、账号、坐席和角色等](/products/cskefu/initialization.html)

- [系统维护：备份、升级和恢复回退等](/products/cskefu/osc/maintainence.html)

- [春松客服配置 CDN 和 HTTPS | 春松客服](https://chatopera.blog.csdn.net/article/details/105820829)
