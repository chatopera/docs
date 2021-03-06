# 应用部署

春松客服适应各种部署方式，本文使用 Docker 和 Docker compose 的方式，适合体验、开发、测试和上线春松客服，此种方式简单快捷。

## 准备条件

### 前提

| 项目                | 说明                                                          |
| ------------------- | ------------------------------------------------------------- |
| 操作系统            | Linux (CentOS 7.x, Ubuntu 16.04+ 等)，**推荐使用 Ubuntu LTS** |
| Docker 版本         | Docker version 1.13.x 及以上                                  |
| Docker Compose 版本 | version 1.23.x 及以上                                         |
| 防火墙端口          | 8035, 8036                                                    |
| 其他软件            | git                                                           |
| 内存                | >= 8GB                                                        |
| CPU 颗数            | >= 2                                                          |
| 硬盘                | >= 20GB                                                       |

### 安全组

如果使用云主机，要考虑到不同云服务提供商的安全组设置，允许 8035 和 8036 端口下行。

## 克隆代码

```
git clone https://github.com/chatopera/cskefu.git cskefu.osc
cd cskefu.osc
cp sample.env .env # 使用文本编辑器打开 .env 文件，并按照需求需改配置
```

> osc 为 OpenSource Community 缩写，代表春松客服开源版本分支。

## 配置项

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

以上配置中，**端口的各默认值需要保证在宿主机器上还没有被占用；数据库的密码尽量复杂；CC_WEB_PORT 和 CC_SOCKET_PORT 这两个值尽量不要变更；生产环境下 LOG_LEVEL 使用至少 WARN 的级别**。

## 管理命令

### 启动服务

```
cd cskefu.osc                        # 进入下载后的文件夹
docker-compose pull                  # 拉取镜像
docker-compose up -d contact-center  # 启动服务
```

### 查看服务状态

```
docker-compose ps
```

### 查看服务日志

```
docker-compose logs -f contact-center
```

### 登陆系统

在日志中，查看到如下类似信息，代表服务已经启动。

```
INFO  c.c.socketio.SocketIOServer - SocketIO server started at port: 8036 [nioEventLoopGroup-2-1]
INFO  com.chatopera.cc.Application - Started Application in 35.319 seconds (JVM running for 42.876) [main]
```

然后，从浏览器打开 http://YOUR_IP:CC_WEB_PORT/ 访问服务。
默认管理员账号： admin 密码： admin1234

### 关闭服务

```
docker-compose down
```

### 重启服务

```
docker-compose restart
```

## 下一步

- [系统初始化](/products/cskefu/initialization.html)

- [春松客服配置 CDN 和 HTTPS | 春松客服](https://chatopera.blog.csdn.net/article/details/105820829)

## 寻找开发者

寻找开发者合作智能客服项目，社区共建，携手共赢！

- 组织或个人，在春松客服主页展示为认证开发者
- 春松客服官方推荐项目机会
- 专访并通过官方渠道曝光

填写申请：[https://www.wjx.top/jq/93397428.aspx](https://www.wjx.top/jq/93397428.aspx)

## 其它

- [服务器没有互联网访问条件情况下怎么部署？](https://github.com/chatopera/cskefu/issues/264)

## 评论

<script src="https://utteranc.es/client.js"
        repo="chatopera/docs"
        issue-term="pathname"
        label="Comment"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
