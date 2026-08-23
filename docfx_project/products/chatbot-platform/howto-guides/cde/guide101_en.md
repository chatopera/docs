# CDE Quick Get Started

### Install

* Install VSCode

* Install Nodejs, add `node` into path, e.g. Window `path` or Linux `PATH`

* Install `@chatopera/sdk` with `npm` in Command Prompt, or other terminal

  

```

npm install -g @chatopera/sdk

bot --version # make sure you have install `bot` command successfully

# check the bot version, 2.9.13, or higher is required.

```

  

* Install CDE Vscode Extension, [LINK](https://marketplace.visualstudio.com/items?itemName=chatopera.chatbot-dev-env)

  

### Create a new bot

  

Login [https://bot.chatopera.com/](https://bot.chatopera.com/), create a bot by clicking button.

  

Navigate to the new bot's console, find its clientId and secret.

  

Here after, we use them as Bot's clientId and secret instead.

  

### Create a cde project

  

In your terminal, run commands

  

```

mkdir botProject

cd botProject

bot env # this command would generate a .env file in `botProject` folder

```

  

Now, edit `.env` file with a text editor, set the `BOT_CLIENT_ID` to bot's clientId and `BOT_CLIENT_SECRET` to bot's secret.

  
  
  

Next, run `bot project -a pull` in your `botProject` folder from terminal.

  

### Open cde project

  

We have a cde project with folder `botProject`, next, open this foler from vscode.