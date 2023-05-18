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

## 词根信息

词根是一个词的标准词，在[词典管理](/products/chatbot-platform/howto-guides/dicts/dicts-vocab.html)中，通过词汇表词典，可以定义标准词及其关联的近义词，那么 `this.message.lemms` 会存储 `words` 对应的标准词。

```函数
this.message.lemms // String, 输入文本的改写，经过词根转化的输入字符串
```

比如，如下的函数打印 `words` 对应的 `tags`(词性), `lemms`(词根)。

```函数
exports.getCustomDictnames = async function() {
    debug("words %j, %j, %j", this.message.words, this.message.tags, this.message.lemms);

    let terms = _.zip(this.message.words, this.message.tags, this.message.lemms);

    for (let i in terms) {
        debug("No. %d, word: %s, tag: %s, lemm: %s", i, terms[i][0], terms[i][1], terms[i][2]);
    }

    return {
        text: "hello"
    }
}
```

当一个词汇(`word`) 不在自定义词汇表词典，或本身就是标准词时，在 `this.message.lemms` 里的对应信息就是自身。

使用详细介绍[参考链接](https://github.com/chatopera/docs/issues/79#issuecomment-1548939718)。

## 自定义信息

在多轮对话检索接口中，传入自定义的信息 `extras`。

```函数
this.message.extras
```

传入方法参考，[多轮对话检索接口](https://docs.chatopera.com/products/chatbot-platform/references/sdk/chatbot/chat.html#检索多轮对话)。
