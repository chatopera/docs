# message

`this.message` 是每次用户输入文本经过自然语言处理后的对象，它并不是全局对象，必须在 `exports` 的函数中，使用 `this.message` 来引用。

## 请求文本

即对话用户发送的文本内容。

```函数
this.message.original // String, 输入文本的原始内容
this.message.clean // String, 输入文本的改写，经过词根转化的输入字符串
```

## 词性信息

```函数
this.message.words // JSONArray, 分词结果
this.message.tags // JSONArray, 对应位置分词的词性
this.message.entities // JSONArray, 输入文本包含的命名实体
this.message.names // JSONArray, 输入文本包含的人名
this.message.nouns // JSONArray, 输入文本包含的名词
this.message.adverbs· // JSONArray, 输入文本包含的副词
this.message.verbs // JSONArray, 输入文本包含的动词
this.message.adjectives // JSONArray, 输入文本包含的形容词
this.message.pronouns // JSONArray, 输入文本包含的指示代词
```

关于 `this.message.tags` 包含了所有的分词对应的词性，可以用来做更多的判断，不同语言的词性集是不同的，参考 [Chatopera 多轮对话 Message 语言词性标注](https://docs.chatopera.com/products/chatbot-platform/appendix/nlp-tags.html)。

## 自定义信息

在多轮对话检索接口中，传入自定义的信息 `extras`。

```函数
this.message.extras
```

传入方法参考，[多轮对话检索接口](https://docs.chatopera.com/products/chatbot-platform/references/sdk/chatbot/chat.html#检索多轮对话)。
