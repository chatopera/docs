# 命令行界面（CLI）

Chatopera CLI 是连接 Chatopera 机器人平台，管理和维护资源的工具，包括一些常用的命令，辅助开发者实现和管理对话机器人。尤其是在有自动化或批量管理的需要时。CLI 完全基于 [Chatopera Node.js SDK](https://github.com/chatopera/chatopera-nodejs-sdk)。

* [安装和配置 Chatopera CLI](https://docs.chatopera.com/products/chatbot-platform/howto-guides/cli-install-config.html)
* [使用 CLI 导入和导出对话语料](https://docs.chatopera.com/products/chatbot-platform/howto-guides/cli-export-import.html)

## 命令帮助

打印 CLI 可用命令。

```Bash
bot --help
```

得到类似输出:

```说明
Usage: bot [options] [command]

Options:
  -V, --version           output the version number
  -h, --help              display help for command

Commands:
  details [options]       get a bot's detail info, such as name, primaryLanguage
  connect [options]       chat with bot via bot#conversation interface
  conversation [options]  import or export a bot's conversations data
  trace [options]         tail a bot's conversations logging info
  asr [options]           request Chatopera ASR API
  faq [options]           import or export a bot's faqs data
  dicts [options]         sync, import or export a bot's dicts data
  intents [options]       train, import or export a bot's intents data
  help [command]          display help for command
```

也可以针对一个命令，获得更多帮助提示，比如：

```Bash
bot connect --help
bot trace --help
bot conversation --action export --help
```

获得类似输出：

```说明
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

## 配置文件

### env

生成配置文件，对生成的配置文件，需要修改，设置键值对。

```Bash
bot env [-fp FOLDER]
```

默认为当前命令执行所在目录。

比如：

```Bash
bot env -fp /c
```

将生成配置文件 `/c/.env`。

## 词典

<font color="blue">词典在知识库、多轮对话、意图识别中都有使用和依赖，在导入知识库文件、多轮对话文件或意图识别文件之前，最好是先导入词典文件，以免为使用带来影响。</font>

### export

导出引用的系统词典、所有自定义词典（词汇表词典和正则表达式词典）。

举例：

```Bash
bot dicts --action export --filepath /tmp/bot.dicts.json
```

### import

导入引用的系统词典、所有自定义词典（词汇表词典和正则表达式词典）。

举例：

```Bash
bot dicts --action import --filepath /tmp/bot.dicts.json
```

### sync

触发同步命令，知识库、意图识别和多轮对话同步最新的近义词词典；此步骤将引起数据改写，生产环境宜业务低峰时间段进行。

```Bash
bot dicts --action sync
```

## 多轮对话

### connect

连接聊天机器人，在命令行终端连接 BOT 并进行对话。

示例：

```Bash
bot connect -c xxx -s xxx -u zhangsan
```

其中，`clientid`和`clientsecret`从每个机器人的设置页面获取，`username`代表用户名，是一个不含空格或特殊符号的字符串，每个用户的唯一标识，`provider`是[Chatopera 机器人平台](https://docs.chatopera.com/products/chatbot-platform/index.html)地址，默认为 [Chatopera 云服务](https://bot.chatopera.com/)。

在对话中，可以使用快捷方式，快速输入。

| 快捷方式                                 | Mac OSX / Windows                              |
| ---------------------------------------- | ---------------------------------------------- |
| 回溯历史                                 | ↑ 上箭头；↓ 下箭头                             |
| 打印历史                                 | Shift + → 右箭头                               |
| 使用索引输入历史，索引根据*打印历史*获得 | 输入索引，然后 Ctrl + Shift + Shift + → 右箭头 |

### export

导出多轮对话为 c66 文件。

示例：

```Bash
bot conversation --action export --filepath /tmp/bot.conversations.c66
```

### import

导入多轮对话脚本，在命令行终端发布脚本文件到[多轮对话](https://docs.chatopera.com/products/chatbot-platform/explanations/index.html)中。

示例：

```Bash
bot conversation --action import --filepath /tmp/bot.conversations.c66
```

其中 `filepath` 为 `xx.c66` 文件，支持相对路径和绝对路径。

因为多轮对话可能使用了词典，所以宜先导入词典，再导入多轮对话。

### trace

打印聊天机器人日志：方便调试多轮对话脚本，实时跟踪服务器端日志，排查问题。

示例：

```Bash
bot trace --log-level DEBUG
```

Log level 可以是 `[DEBUG|INFO|WARN|ERROR]`。

## 知识库

### export

导出知识库问答对、扩展问和分类信息等，目前 CLI 导入和导出只支持 JSON 格式，欲使用 Excel 从机器人平台浏览器管理界面完成。

举例：

```Bash
bot faq --action export --filepath /tmp/bot.faqs.json
```

### import

导入知识库问答对、扩展问和分类信息等。

举例：

```Bash
bot faq --action import --filepath /tmp/bot.faqs.json
```

因为知识库可能使用了词典，所以宜先导入词典，再导入知识库。

## 意图识别

### export

导出意图识别说法、槽位等信息。

```Bash
bot intents --action export --filepath /tmp/bot.intents.json
```

### import

导入意图识别说法、槽位等信息。

```Bash
bot intents --action import --filepath /tmp/bot.intents.json
```

因为意图识别可能使用了词典，所以宜先导入词典，再导入意图识别。

导入命令也会自动执行训练意图调试分支，训练完成后，命令退出。

<font color="blue">意图识别的导入和导出不会处理生产版本上线信息和操作，需要 Chatopera 机器人平台用户自行维护意图识别模块的生产分支。</font>

### train

训练意图识别的调试分支。

```Bash
bot intents --action train
```

## 语音识别

### asr

```Bash
bot asr -f 001.wav
```

```说明
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

```Bash
bot asr -c xxx \
     -s xxxx \
     -u nodetest \
     -f ./test/fixtures/001.wav
```

返回结果

```JSON
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

## 开源项目

Chatopera CLI 工具是[开源的](https://github.com/chatopera/chatopera-nodejs-sdk)，更多使用示例参考：

[https://github.com/chatopera/chatopera-nodejs-sdk/tree/master/scripts](https://github.com/chatopera/chatopera-nodejs-sdk/tree/master/scripts)

## 下一步

* [使用 CLI 导入和导出对话语料](https://docs.chatopera.com/products/chatbot-platform/howto-guides/cli-export-import.html)
