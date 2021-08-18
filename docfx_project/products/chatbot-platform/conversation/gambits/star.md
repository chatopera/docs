# 通配符匹配器

为了让 **匹配器** 能适应复杂的需求，Chatopera 机器人平台使用通配符规则，通配符既能让规则具有更好的匹配能力，也能让[回复和函数中使用不同通配符的值，即通配符取值](/products/chatbot-platform/conversation/replies.html#通配符取值)，基于通配符的匹配器称为通配符匹配器，也称为 **Star Gambit**。

**注意**：下面的某些通配符左右带有空格，这些空格是必须的。

## 全能匹配

全能匹配通配符会匹配零到无穷个字符、单词。

<font color="blue"><b>(\*)</b></font>

此处的输入也会被系统捕获或者存储。

```
+ (*) 你好 (*)
- 欢迎光临
```

对话效果

```
匹配：客服你好
匹配：你好
匹配：你好吗
```

## 固定长度通配符

如果你知道你想要的字符长度，使用固定长度通配符。

<font color="blue"><b>\*n</b></font>

其中 n 代表长度。

此处的通配符可以被系统捕获，而且可以在回答中使用。

```
+ 早安 *2
- 早安
```

对话效果

```
匹配：早安北京
不匹配：早安乌鲁木齐
```

## 可变长度通配符

<font color="blue"><b>\*~n</b></font>

如果只想匹配一些字符，可控长度的通配符是个不错的选择。 n 代表你想匹配的最大长度。

```
+ 早安 *~4
- 早安
```

对话效果

```
匹配：早安
匹配：早安北京
匹配：早安哈尔滨
匹配：早安乌鲁木齐
不匹配：早安君士坦丁堡
```

## 区间通配符

如果想匹配一个确定的区间，比如 2 到 4 个字符之间，区间通配符绝对可以满足需要。

<font color="blue"><b>\*(最短-最长)</b></font>

此通配符可以被系统捕获和用在回复中。

```
+ 早安 *(2-4)
- 早安
```

对话效果

```
匹配：早安北京
匹配：早安乌鲁木齐
不匹配：早安
```

## 词性通配符

在匹配器中，在某个位置使用词性来匹配一个词汇集合，比如名称、动词等。被匹配到的词，可以使用通配符取值在回复中使用。

比如：

```
// 脚本
+ <noun>是个好地方
- 嗯

+ <noun>很好吃
- ^echoYummy(<cap>)


// 函数
exports.echoYummy = async function(cap1) {
    return "那就多吃点" + cap1
}
```

对话效果

```
匹配：香港是个好地方
匹配：蛋糕很好吃
```

如果在一句话中存在多个要匹配的词性，使用 `<noun1>`， `<noun2>` 进行标记，就是增加序号。

### 支持的词性

| 词性               | 词性匹配器                                                               | 含义                   | 支持语言                 |
| ------------------ | ------------------------------------------------------------------------ | ---------------------- | ------------------------ |
| 名词 / Noun        | `<noun>, <noun1>,<noun2> ...<nounN>, <nouns>`                            | 组织机构，地名，人名等 | 机器人所有语言           |
| 形容词 / Adjective | `<adjective>, <adjective1>, <adjective2> ... <adjectiveN>, <adjectives>` | 比如：美好，顺利，难忘 | 机器人所有语言           |
| 动词 / Verb        | `<verb>,<verb1>,<verb2>...<verbN>, <verbs>`                              | 比如：跑步，游泳       | 机器人所有语言           |
| 副词 / Adverb      | `<adverb>, <adverb1>, <adverb2>...<adverbN>, <adverbs>`                  | 比如：急忙，快速       | 机器人所有语言           |
| 代词 / Pronoun     | `<pronoun>, <pronoun1>, <pronoun2>... <pronounN>, <pronouns>`            | 比如：我，他，她       | 机器人所有语言           |
| 人名 / Names       | `<name>, <name1>,<name2>... <nameN>, <names>`                            | 比如：张三，李四       | 简体中文，繁体中文，英文 |

### 更多例子

```
// 脚本
+ <noun>是个好地方
- 嗯

+ <noun>很好吃
- ^echoYummy(<cap1>)

+ 今天是<adjective> (*) 一天
- 美好！

+ <verb>对健康有好处
- 喜欢<cap1>

+ <adverb>地躲避
- 机智

+ <pronoun>在张望什么
- 等人

+ <name>有什么爱好
- 旅游

// 函数
exports.echoYummy = async function(cap1) {
    return "那就多吃点" + cap1
}
```

## 必选项

必选项用在你有一系列可选项，但是必须有一个被匹配。

<font color="blue"><b>(候选-1|候选-2|...|候选-n)</b></font>

输入中的可选项会被系统捕获和用在回复中。

```
+ 早安(北京|上海|天津)
- 早安
```

```
匹配：早安北京
不匹配：早安西安
不匹配：早安
```

## 可选项

可选项用来确定一些额外的内容。

<font color="blue"><b>[可能值-1|可能值-2]</b></font>

```
+ 早安 [美丽的] 北京
- 早安
```

**注意：此处 `[]` 前后的空格不可省略。**

```
匹配：早安北京
匹配：早安美丽的北京
不匹配：早安热闹的北京
```

## 下一步

- [通配符取值：在回复中使用匹配到的值](/products/chatbot-platform/conversation/replies.html#通配符取值)

- [模糊匹配器：容错能力更强和智能的匹配器](/products/chatbot-platform/conversation/gambits/like.html)

## 评论

<script src="https://utteranc.es/client.js"
        repo="chatopera/docs"
        issue-term="pathname"
        label="Comment"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
