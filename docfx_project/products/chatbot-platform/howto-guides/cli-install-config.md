# 安装和配置 CLI

Chatopera CLI 是连接 Chatopera 机器人平台，管理和维护资源的工具，包括一些常用的命令，辅助开发者实现和管理对话机器人。尤其是在有自动化或批量管理的需要时。

## 安装

### Bash

因为使用过程中，依赖于命令终端交界面，在 Linux 或 Mac 上，有 Bash（或兼容）环境。

对于 Windows 用户，请安装 [Git Bash for Windows](https://gitforwindows.org/)，安装完成后，在桌面右键，就可以点击 【Git Bash】进入命令终端交界面。

本文以下内容，涉及 Shell 命令，都假设命令终端交界面是 Bash Shell 环境。

### Node.js

Chatopera CLI 依赖于 [Node.js v10+](https://nodejs.org/zh-cn/) 环境，使用 `npm` 进行安装（`npm` 是 `Nodejs` 安装完成后得到的 CLI 工具）。

- Windows 上安装 Node.js 及配置环境变量[参考文档](https://www.cnblogs.com/zjfjava/p/9677444.html)

- Linux 上安装 Node.js [参考文档](https://segmentfault.com/a/1190000040178369)

### Chatopera CLI

有了 Node.js 环境，在命令行终端，执行如下命令：

```
npm install -g @chatopera/sdk
```

在 Windows 上，安装过程输出类似的日志：

```
 npm install -g @chatopera/sdk
C:\Users\Administrator\AppData\Roaming\npm\bot -> C:\Users\Administrator\AppData
\Roaming\npm\node_modules\@chatopera\sdk\bin\bot.js
+ @chatopera/sdk@2.7.1
added 147 packages from 104 contributors in 36.389s
```

检查安装是否正确，执行：

```
$ bot --version
2.x  # 得到类似输出，代表安装正确，2.x 为当时最新的 Chatopera CLI 版本
```

如果上述命令 `bot --version` 执行提示错误，检查环境变量 `PATH` 路径，比如 `C:\Users\Administrator\AppData\Roaming\npm` 是否在 `PATH` 内。


## 配置参数

Chatopera CLI 命令行工具支持读取文件配置变量，比如 `provider`, `clientid` 等常用的变量。

**参数设定优先级:** 命令行参数 > `.env` 文件 > 环境变量

| 映射配置项                         | 命令行参数               | 环境变量            | 备注                              |
| ---------------------------------- | ------------------------ | ------------------- | --------------------------------- |
| clientId, 机器人 ID                | `-c, --clientid [value]` | `BOT_CLIENT_ID`     | 无默认值，必填                    |
| secret, 机器人密钥                 | `-u, --username [value]` | `BOT_CLIENT_SECRET` | 无默认值，必填                    |
| provider, Chatopera 机器人平台地址 | `-p, --provider [value]` | `BOT_PROVIDER`      | 默认值，https://bot.chatopera.com |
| accessToken, 访客设置密钥          | `无`                     | `BOT_ACCESS_TOKEN`  | 保留值，无默认值                  |

其中， `.env` 文件例子如：

```
BOT_CLIENT_ID=xxx
BOT_CLIENT_SECRET=xxx
BOT_PROVIDER=https://bot.chatopera.com
BOT_ACCESS_TOKEN=xxx
```

`.env` 文件存储的也是环境变量值。`bot` 命令会沿当前执行命令的路径(`pwd`)，寻找 `.env` 文件。

比如，在 `/Users/chatopera/chatopera-nodejs-sdk`下执行 `bot` 命令，那么，`.env`文件按照以下顺序进行查找，一旦查找到就加载为配置，并退出查找。

```
/Users/chatopera/chatopera-nodejs-sdk/.env
/Users/chatopera/.env
/Users/.env
/.env
```

## 下一步

* [命令行界面（CLI）参考手册：帮助、使用命令参考手册](/products/chatbot-platform/references/cli.html)

* [使用 CLI 导入和导出对话语料](cli-export-import.md)

## 评论

<script src="https://utteranc.es/client.js"
        repo="chatopera/docs"
        issue-term="pathname"
        label="Comment"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
