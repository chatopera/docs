# CDE 快速开始

CDE, 即 [Chatbot Development Env](https://marketplace.visualstudio.com/items?itemName=chatopera.chatbot-dev-env), 是 Chatopera 云服务面向开发者发布的开发者工具。使用 CDE 可以定制聊天机器人的对话技能，提升智能化。

![](../../../../images/assets/Pasted%20image%2020260823172005.png)

安装过程概述：

![alt text](../../../../images/assets/1787881237181.png)

* 安装 Node.js: 使用 CDE 需要结合 Chatopera CLI，安装 CLI 需要 Node.js  
* 安装 Chatopera CLI: 安装和配置 Node.js 后，使用 `npm` 命令在控制台安装 
* 安装 VSCode: CDE 是一个 VSCode 插件，所以需要先安装 VSCode

## 安装 Node.js

需要使用 Node.js v18 或更高版本，在 [Nodejs 官网](https://nodejs.org/zh-cn/download) 下载安装包。Node.js 安装包支持不同的形式，推荐使用独立安装包。

![alt text](../../../../images/assets/1787616405961.png)

比如，适用于 Windows 平台的 [MSI 安装包](https://nodejs.org/dist/v24.19.0/node-v24.19.0-x64.msi)。

**设置环境变量 Path** ：注意，在安装过程中，设置如下选项。

> 将 Node 和 npm 设置到 Path 环境变量。

![alt text](../../../../images/assets/1787616606225.png)

安装完成后，检查是否安装成功。

* Mac/Linux 用户： 启动一个命令行控制台，执行 `echo $PATH`，检查 node 的安装路径是否在 `PATH` 中，然后执行 `node --version` 和 `npm --version`，确认安装的版本是否正确。

* Windows 用户： 启动一个 CMD Prompt，执行 `echo %Path%` 检查 node 的安装路径是否在 `Path` 中，然后再 CMD 中执行 `node --version` 和 `npm --version`，确认安装的版本是否正确。

![alt text](../../../../images/assets/1787616975744.png)

## 安装 Chatopera CLI

安装好 Nodejs 后，在命令行终端执行以下命令：

```bash
npm install -g @chatopera/sdk
```

![alt text](../../../../images/assets/1787617131309.png)

上述命令退出后，执行下面命令测试是否安装成功：

```
bot --help
```

如果能看到下面的输出，就表明 Chatopera CLI 已经安装成功。

![alt text](../../../../images/assets/1787617205477.png)

## 安装 VSCode

进入 VSCode 官方网站： [https://code.visualstudio.com/Download](https://code.visualstudio.com/Download)

下载您的操作系统的安装包，然后安装，安装成功后，可以在启动中心找到 VSCode。

![alt text](../../../../images/assets/1787617368584.png)

## 安装 CDE 插件

打开 VSCode, 安装下图：

1. 进入插件管理

2. 搜索 `chatbot-dev-env`

3. 点击 Chatopera 图标，进入插件详情

![alt text](../../../../images/assets/1787617472862.png)

4. 点击 `Install` / `安装`

![alt text](../../../../images/assets/1787617490886.png)

5. 点击【信任】

![alt text](../../../../images/assets/1787617634875.png)

安装后，能在左侧查看到 CDE 插件图标。

![alt text](../../../../images/assets/1787618034291.png)

安装结束。

## 下一步

* CDE 的具体的使用，参考：[入门教程](https://docs.chatopera.com/products/chatbot-platform/tutorials/index.html)
* 在机器人发布时，可以使用 SDK/API 集成到其他软件中，参考：[Chatopera SDK 和 APIs](https://docs.chatopera.com/products/chatbot-platform/references/sdk/index.html)