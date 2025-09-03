# 生成 RAG 知识库

## RAG 检索增强

RAG (Retrieval-Augmented Generation) ，检索增强服务，是利用大语言模型的语义理解能力，处理用户上传的文档，生成回复内容的服务。

Chatopera 云服务内置了 RAG 服务，支持用户上传多种格式的文件，生成 RAG 知识库问答。

在创建好的机器人中，进入 【RAG 知识库】，并上传文件，生成知识库。

![RAG 知识库菜单](../../../../images/assets/screenshot_20250901182927.png)

在聊天机器人的多轮对话中，会调用 RAG 知识库，并利用其产生的回答回复给访客。
具体过程参考：[多轮对话的检索](/products/chatbot-platform/explanations/query.html)。

## SDK / API 使用

在机器人的【RAG 知识库】上传文件，并生成 RAG 知识库后，机器人的[多轮对话检索](https://docs.chatopera.com/products/chatbot-platform/references/sdk/chatbot/chat.html#%E6%A3%80%E7%B4%A2%E5%A4%9A%E8%BD%AE%E5%AF%B9%E8%AF%9D)就会从 RAG 中，生成答案。

机器人开发者同时也可以调用 RAG 知识库检索，单独的使用 RAG 检索服务，比如，通过 Chatopera NodeJS SDK, 下面位示例代码：

```
const chatbot = new Chatbot(clientId, clientSecret, botProvider);
let method = "post";
let path = "/rag/query";
let payload = {
    query: "海南有几个机场"
};
let resp = await chatbot.command(method, path, payload);
```

详细示例代码：[https://github.com/chatopera/chatopera-nodejs-sdk/blob/master/test/rag.test.js](https://github.com/chatopera/chatopera-nodejs-sdk/blob/master/test/rag.test.js)

更多 API 使用介绍，参考 [对话检索](https://docs.chatopera.com/products/chatbot-platform/references/sdk/chatbot/chat.html)。