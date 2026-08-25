# CDE Quick Start

CDE, or **Chatbot Development Env** ([VS Code Marketplace link](https://marketplace.visualstudio.com/items?itemName=chatopera.chatbot-dev-env)), is a developer tool released by Chatopera Cloud Services. With CDE, you can customize chatbot conversational skills and enhance their intelligence.

![](../../../../images/assets/Pasted%20image%2020260823172005.png)

This tutorial focuses on the installation and configuration of CDE. For specific usage techniques, please refer to the [Getting Started Tutorial](https://docs.chatopera.com/products/chatbot-platform/tutorials/index.html).

## Prerequisites

*   **Install Node.js:** CDE requires the Chatopera CLI, and installing the CLI requires Node.js.
*   **Install Chatopera CLI:** After installing and configuring Node.js, use the `npm` command in your terminal/console to install it.
*   **Install VS Code:** Since CDE is a VS Code extension, you must have VS Code installed first.

### Installing Node.js

Node.js v18 or higher is required. Download the installer from the [official Node.js website](https://nodejs.org/zh-cn/download). Node.js installers come in various formats; the standalone installer is recommended.

![alt text](../../../../images/assets/1787616405961.png)

For example, the [MSI installer](https://nodejs.org/dist/v24.19.0/node-v24.19.0-x64.msi) for Windows.

**Set the Path Environment Variable:** Note that you should select the following option during installation:

> Add Node and npm to the Path environment variable.

![alt text](../../../../images/assets/1787616606225.png)

After installation is complete, verify that it was successful.

**Mac/Linux Users:** Launch a terminal/console, run `echo $PATH` to check if the Node installation path is included in `PATH`, and then run `node --version` and `npm --version` to confirm the installed versions are correct. 

**Windows users:** Launch a Command Prompt (CMD), run `echo %Path%` to verify that the Node.js installation path is included in the `Path` variable. Then, run `node --version` and `npm --version` in the CMD window to confirm the installed versions are correct.

![alt text](../../../../images/assets/1787616975744.png)

### Installing Chatopera CLI

After installing Node.js, execute the following command in your command-line terminal:

```bash
npm install -g @chatopera/sdk
```

![alt text](../../../../images/assets/1787617131309.png)

Once the command finishes executing, run the following command to verify the installation:

```
bot --help
```

If you see the output shown below, it indicates that the Chatopera CLI has been successfully installed.

![alt text](../../../../images/assets/1787617205477.png)

### Installing VSCode

Visit the official VSCode website: [https://code.visualstudio.com/Download](https://code.visualstudio.com/Download)

Download the installer package for your operating system and proceed with the installation. Once installed, you can launch VSCode from your system's application launcher.

![alt text](../../../../images/assets/1787617368584.png)

## Installing the CDE Extension

Open VSCode and follow the steps shown in the image below:

1. Go to the Extensions view

2. Search for `chatbot-dev-env`

3. Click the Chatopera icon to view the extension details

![alt text](../../../../images/assets/1787617472862.png)

4. Click `Install`

![alt text](../../../../images/assets/1787617490886.png)

5. Click [Trust]

![alt text](../../../../images/assets/1787617634875.png)

After installation, you will see the CDE extension icon in the sidebar. ![alt text](../../../../images/assets/1787618034291.png)

Installation complete.

## Next Steps

* Use the [Getting Started Guide](https://docs.chatopera.com/products/chatbot-platform/tutorials/index.html) to learn more about using CDE.