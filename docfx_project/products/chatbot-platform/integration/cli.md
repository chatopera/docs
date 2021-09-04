# 命令行界面（CLI）

Chatopera CLI 是连接 Chatopera 机器人平台，管理和维护资源的工具，包括一些常用的命令，辅助开发者实现和管理对话机器人。尤其是在有自动化或批量管理的需要时。CLI 完全基于 [Chatopera Node.js SDK](Chatopera Node.js SDK)，开发者也可以参考 SDK 源码，进一步掌握对 SDK 的使用。

[https://github.com/chatopera/chatopera-nodejs-sdk](https://github.com/chatopera/chatopera-nodejs-sdk)


## 安装

Chatopera CLI 依赖于 [Node.js v10+](https://nodejs.org/zh-cn/) 环境，使用 `npm` 进行安装（`npm` 是 `Nodejs` 安装完成后得到的 CLI 工具）。

- Windows 上安装 Node.js 及配置环境变量[参考文档](https://www.cnblogs.com/zjfjava/p/9677444.html)

- Linux 上安装 Node.js [参考文档](https://segmentfault.com/a/1190000040178369)

有了 Node.js 环境，在命令行终端，执行如下命令：

```
npm install -g @chatopera/sdk
```

在 Windows 上，安装过程输出类似的日志：

```
 npm install -g @chatopera/sdk
C:\Users\Administrator\AppData\Roaming\npm\bot -> C:\Users\Administrator\AppData
\Roaming\npm\node_modules\@chatopera\sdk\bin\bot.js
+ @chatopera/sdk@2.6.1
added 147 packages from 104 contributors in 36.389s
```

检查安装是否正确，执行：

```
$ bot --version
2.6.1  # 得到类似输出，代表安装正确，2.6.1 为当时最新的 Chatopera CLI 版本
```

如果上述命令 `bot --version` 执行提示错误，检查环境变量 `PATH` 路径，比如 `C:\Users\Administrator\AppData\Roaming\npm` 是否在 `PATH` 内。

## 命令帮助

打印 CLI 可用命令。

```
bot --help
```

得到类似输出:

```
Usage: bot [options] [command]

Options:
  -V, --version      output the version number
  -h, --help         display help for command

Commands:
  connect [options]
  deploy [options]
  trace [options]
  asr [options]
  help [command]     display help for command
```

也可以针对一个命令，获得更多帮助提示，比如：

```
bot connect --help
```

获得类似输出：

```
Usage: bot connect [options]

Options:
  -c, --clientid [value]      ClientId of the bot
  -s, --clientsecret [value]  Client Secret of the bot, optional, default null
  -u, --username [value]      Username to chat with bot, default: commandline
  -p, --provider [value]      Chatopera Bot Service URL, optional, default
                              https://bot.chatopera.com
  -fb, --faq-best [value]     FAQ best reply threshold, optional, default 0.8
  -fs, --faq-sugg [value]     FAQ suggest reply threshold, optional, default
                              0.6
  -h, --help                  display help for command
```


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
## 多轮对话
### connect

连接聊天机器人，在命令行终端连接 BOT 并进行对话。

```
Usage: connect [options]

Options:
  -c, --clientid [value]      ClientId of the bot
  -s, --clientsecret [value]  Client Secret of the bot, optional, default null
  -u, --username [value]      Username to chat with bot, default: commandline
  -p, --provider [value]      Chatopera Bot Service URL, optional, default https://bot.chatopera.com
  -fb, --faq-best [value]     FAQ best reply threshold, optional, default 0.8
  -fs, --faq-sugg [value]     FAQ suggest reply threshold, optional, default 0.6
```

其中，`clientid`和`clientsecret`从每个机器人的设置页面获取，`username`代表用户名，是一个不含空格或特殊符号的字符串，每个用户的唯一标识，`provider`是[Chatopera 机器人平台](https://docs.chatopera.com/products/chatbot-platform/index.html)地址，默认为 [Chatopera 云服务](https://bot.chatopera.com/)。

示例：

```
bot connect -c xxx -s xxx -u zhangsan
```

在对话中，可以使用快捷方式，快速输入。

| 快捷方式                                 | Mac OSX / Windows                              |
| ---------------------------------------- | ---------------------------------------------- |
| 回溯历史                                 | ↑ 上箭头；↓ 下箭头                             |
| 打印历史                                 | Shift + → 右箭头                               |
| 使用索引输入历史，索引根据*打印历史*获得 | 输入索引，然后 Ctrl + Shift + Shift + → 右箭头 |

### deploy

上传多轮对话脚本，在命令行终端发布脚本文件到[多轮对话](https://docs.chatopera.com/products/chatbot-platform/conversation/index.html)中。

```
Usage: deploy [options]

Options:
  -c, --clientid [value]      ClientId of the bot
  -s, --clientsecret [value]  Client Secret of the bot, optional, default null.
  -p, --provider [value]      Chatopera Bot Service URL, optional, default https://bot.chatopera.com
  -b, --botarchive <value>    Conversation Bundle, *required.
  -h, --help                  display help for command
```

其中 `botarchive` 为 `xx.c66` 文件或**机器人的话题文件目录**，支持相对路径和绝对路径。


#### 机器人的话题文件目录

将 `xx.c66` 文件后缀调整为 `.zip` 并解压后的目录结构。

```
botarchive
├── index.json
├── plugin.js
└── zh_CN.greeting.ms
```

其中，`index.json`描述机器人多轮对话属性：

```
{
    "name": "大白",
    "primaryLanguage": "zh_CN",
    "version": "0.5.0",
    "conversations": [
        {
            "name": "greeting",
            "enabled": true
        }
    ],
    "config": // 环境变量Key-Value
    {
    }
}
```

`plugin.js` 是`函数`，参考[说明文档](https://docs.chatopera.com/products/chatbot-platform/conversation/function.html)。

快速开始参考[示例程序](https://github.com/chatopera/chatbot-samples)：[活动通知](https://github.com/chatopera/chatbot-samples/tree/master/projects/%E6%B4%BB%E5%8A%A8%E9%80%9A%E7%9F%A5)。

Chatopera CLI 支持直接使用 `-b` 参数指定`机器人的话题文件目录`的方式上传多轮对话。


### trace

打印聊天机器人日志：方便调试多轮对话脚本，实时跟踪服务器端日志，排查问题。

```
Usage: bot trace [options]

Options:
  -c, --clientid [value]      ClientId of the bot
  -s, --clientsecret [value]  Client Secret of the bot, optional, default null
  -p, --provider [value]      Chatopera Bot Service URL, optional, default https://bot.chatopera.com
  -l, --log-level [value]     Log level to follow, optional, [DEBUG|INFO|WARN|ERROR], default DEBUG
  -h, --help                  display help for command
```

## 语音识别

### asr

```
Usage: bot asr [options]

Options:
  -c, --clientid [value]      ClientId of the bot
  -u, --username [value]      Username to chat with bot
  -s, --clientsecret [value]  Client Secret of the bot, optional, default null
  -p, --provider [value]      Chatopera Bot Service URL, optional, default https://bot.chatopera.com
  -f, --file <value>          Target file to recognize, *required.
  -h, --help                  display help for command
```

示例：

```
bot asr -c xxx \
     -s xxxx \
     -u nodetest \
     -f ./test/fixtures/001.wav
{
 "rc": 0,
 "data": {
  "duration": 6250,
  "predicts": [
   {
    "confidence": 0.960783,
    "text": "上海 浦东机场 入境 房 输入 全 闭 环 管理"
   },
   {
    "confidence": 0.960767,
    "text": "上海 浦东机场 入境 防 输入 全 闭 环 管理"
   },
   {
    "confidence": 0.960736,
    "text": "上海 浦东机场 入境 坊 输入 全 闭 环 管理"
   }
  ]
 }
}
```


## 评论

<script src="https://utteranc.es/client.js"
        repo="chatopera/docs"
        issue-term="pathname"
        label="Comment"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
