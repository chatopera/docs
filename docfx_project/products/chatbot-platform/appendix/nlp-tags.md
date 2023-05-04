# 词性标注

词性标注（Part-of-Speech tagging 或 POS tagging)，又称词类标注或者简称标注，是指为分词结果中的每个单词标注一个正确的词性的程序，也即确定每个词是名词、动词、形容词或其他词性的过程。

## 使用位置

在 Chatopera 机器人平台内，较多的使用词性标注，为了方便 BOT 开发者实现更为强大的对话能力的机器人，部分模块开放词性标注的结果，供灵活的支持更多场景。

### 多轮对话内置函数

在 Chatopera 机器人平台中，多轮对话模块，使用[函数](https://docs.chatopera.com/products/chatbot-platform/references/func-builtin/index.html)处理请求和回复时，支持在函数中，使用 `this.message.words` 和 `this.message.tags` 访问经过自然语言处理的输入文本信息。

比如输入：商场的开门时间。那么，则有

```函数
this.message.words = ["商场","的","开门","时间"];
this.message.tags = ["nis","ude1","vi","n"]
```

针对，不同的语言，tags 所使用的定义集合是不一样的。以下正是说明不同语言，Chatopera 机器人平台使用的词性标注集合。

## 中文

包括简体中文和繁体中文，使用的词性标注集。在汉语中，词性标注比较简单，因为汉语词汇词性多变的情况比较少见，大多词语只有一个词性，或者出现频次最高的词性远远高于第二位的词性。

| tag   | 词性                                                 |
| ----- | ---------------------------------------------------- |
| a     | 形容词                                               |
| ad    | 副形词                                               |
| ag    | 形容词性语素                                         |
| al    | 形容词性惯用语                                       |
| an    | 名形词                                               |
| b     | 区别词                                               |
| begin | 仅用于始##始                                         |
| bg    | 区别语素                                             |
| bl    | 区别词性惯用语                                       |
| c     | 连词                                                 |
| cc    | 并列连词                                             |
| d     | 副词                                                 |
| dg    | 辄,俱,复之类的副词                                   |
| dl    | 连语                                                 |
| e     | 叹词                                                 |
| end   | 仅用于终##终                                         |
| f     | 方位词                                               |
| g     | 学术词汇                                             |
| gb    | 生物相关词汇；或 Chatopera Built-in 词汇，在 Chatopera 意图识别模块使用该标签作为自定义词汇                                         |
| gbc   | 生物类别                                             |
| gc    | 化学相关词汇                                         |
| gg    | 地理地质相关词汇                                     |
| gi    | 计算机相关词汇                                       |
| gm    | 数学相关词汇                                         |
| gp    | 物理相关词汇                                         |
| h     | 前缀                                                 |
| i     | 成语                                                 |
| j     | 简称略语                                             |
| k     | 后缀                                                 |
| l     | 习用语                                               |
| m     | 数词                                                 |
| mg    | 数语素                                               |
| Mg    | 甲乙丙丁之类的数词                                   |
| mq    | 数量词                                               |
| n     | 名词                                                 |
| nb    | 生物名                                               |
| nba   | 动物名                                               |
| nbc   | 动物纲目                                             |
| nbp   | 植物名                                               |
| nf    | 食品，比如“薯片”                                     |
| ng    | 名词性语素                                           |
| nh    | 医药疾病等健康相关名词                               |
| nhd   | 疾病                                                 |
| nhm   | 药品                                                 |
| ni    | 机构相关（不是独立机构名）                           |
| nic   | 下属机构                                             |
| nis   | 机构后缀                                             |
| nit   | 教育相关机构                                         |
| nl    | 名词性惯用语                                         |
| nm    | 物品名                                               |
| nmc   | 化学品名                                             |
| nn    | 工作相关名词                                         |
| nnd   | 职业                                                 |
| nnt   | 职务职称                                             |
| nr    | 人名                                                 |
| nr1   | 复姓                                                 |
| nr2   | 蒙古姓名                                             |
| nrf   | 音译人名                                             |
| nrj   | 日语人名                                             |
| ns    | 地名                                                 |
| nsf   | 音译地名                                             |
| nt    | 机构团体名                                           |
| ntc   | 公司名                                               |
| ntcb  | 银行                                                 |
| ntcf  | 工厂                                                 |
| ntch  | 酒店宾馆                                             |
| nth   | 医院                                                 |
| nto   | 政府机构                                             |
| nts   | 中小学                                               |
| ntu   | 大学                                                 |
| nx    | 字母专名                                             |
| nz    | 其他专名                                             |
| o     | 拟声词                                               |
| p     | 介词                                                 |
| pba   | 介词“把”                                             |
| pbei  | 介词“被”                                             |
| q     | 量词                                                 |
| qg    | 量词语素                                             |
| qt    | 时量词                                               |
| qv    | 动量词                                               |
| r     | 代词                                                 |
| rg    | 代词性语素                                           |
| Rg    | 古汉语代词性语素                                     |
| rr    | 人称代词                                             |
| ry    | 疑问代词                                             |
| rys   | 处所疑问代词                                         |
| ryt   | 时间疑问代词                                         |
| ryv   | 谓词性疑问代词                                       |
| rz    | 指示代词                                             |
| rzs   | 处所指示代词                                         |
| rzt   | 时间指示代词                                         |
| rzv   | 谓词性指示代词                                       |
| s     | 处所词                                               |
| st     | 停用词，stopword 缩写                                               |
| t     | 时间词                                               |
| tg    | 时间词性语素                                         |
| u     | 助词                                                 |
| ud    | 助词                                                 |
| ude1  | 的 底                                                |
| ude2  | 地                                                   |
| ude3  | 得                                                   |
| udeng | 等 等等 云云                                         |
| udh   | 的话                                                 |
| ug    | 过                                                   |
| uguo  | 过                                                   |
| uj    | 助词                                                 |
| ul    | 连词                                                 |
| ule   | 了 喽                                                |
| ulian | 连 （“连小学生都会”）                                |
| uls   | 来讲 来说 而言 说来                                  |
| usuo  | 所                                                   |
| uv    | 连词                                                 |
| uyy   | 一样 一般 似的 般                                    |
| uz    | 着                                                   |
| uzhe  | 着                                                   |
| uzhi  | 之                                                   |
| v     | 动词                                                 |
| vd    | 副动词                                               |
| vf    | 趋向动词                                             |
| vg    | 动词性语素                                           |
| vi    | 不及物动词（内动词）                                 |
| vl    | 动词性惯用语                                         |
| vn    | 名动词                                               |
| vshi  | 动词“是”                                             |
| vx    | 形式动词                                             |
| vyou  | 动词“有”                                             |
| w     | 标点符号                                             |
| wb    | 百分号千分号，全角：％ ‰ 半角：%                     |
| wd    | 逗号，全角：， 半角：,                               |
| wf    | 分号，全角：； 半角： ;                              |
| wh    | 单位符号，全角：￥ ＄ ￡ ° ℃ 半角：$                 |
| wj    | 句号，全角：。                                       |
| wky   | 右括号，全角：） 〕 ］ ｝ 》 】 〗 〉 半角： ) ] { > |
| wkz   | 左括号，全角：（ 〔 ［ ｛ 《 【 〖 〈 半角：( [ { <  |
| wm    | 冒号，全角：： 半角： :                              |
| wn    | 顿号，全角：、                                       |
| wp    | 破折号，全角：—— －－ ——－ 半角：— —-                |
| ws    | 省略号，全角：…… …                                   |
| wt    | 叹号，全角：！                                       |
| ww    | 问号，全角：？                                       |
| wyy   | 右引号，全角：” ’ 』                                 |
| wyz   | 左引号，全角：“ ‘ 『                                 |
| x     | 字符串                                               |
| xu    | 网址 URL                                             |
| xx    | 非语素字                                             |
| y     | 语气词(delete yg)                                    |
| yg    | 语气语素                                             |
| z     | 状态词                                               |
| zg    | 状态词                                               |

## English / 英语

| tag  | description         | examples   |
| ---- | ------------------- | ---------- |
| CC   | Coord Conjuncn      | and,but,or |
| CD   | Cardinal number     | one,two    |
| DT   | Determiner          | the,some   |
| EX   | Existential there   | there      |
| FW   | Foreign Word        | mon dieu   |
| IN   | Preposition         | of,in,by   |
| JJ   | Adjective           | big        |
| JJR  | Adj., comparative   | bigger     |
| JJS  | Adj., superlative   | biggest    |
| LS   | List item marker    | 1,One      |
| MD   | Modal               | can,should |
| NN   | Noun, sing. or mass | dog        |
| NNP  | Proper noun, sing.  | Edinburgh  |
| NNPS | Proper noun, plural | Smiths     |
| NNS  | Noun, plural        | dogs       |
| POS  | Possessive ending   | 's         |
| PDT  | Predeterminer       | all, both  |
| PRP$ | Possessive pronoun  | my,one's   |
| PRP  | Personal pronoun    | I,you,she  |
| RB   | Adverb              | quickly    |
| RBR  | Adverb, comparative | faster     |
| RBS  | Adverb, superlative | fastest    |
| RP   | Particle            | up,off     |
| SYM  | Symbol              | +,%,&      |
| TO   | 'to'                | to         |
| UH   | Interjection        | oh, oops   |
| VB   | verb, base form     | eat        |
| VBD  | verb, past tense    | ate        |
| VBG  | verb, gerund        | eating     |
| VBN  | verb, past part     | eaten      |
| VBP  | Verb, present       | eat        |
| VBZ  | Verb, present       | eats       |
| WDT  | Wh-determiner       | which,that |
| WP   | Wh pronoun          | who,what   |
| WP$  | Possessive-Wh       | whose      |
| WRB  | Wh-adverb           | how,where  |
| ,    | Comma               | ,          |
| .    | Sent-final punct    | . ! ?      |
| :    | Mid-sent punct.     | : ; Ñ      |
| $    | Dollar sign         | $          |
| #    | Pound sign          | #          |
| "    | quote               | "          |
| (    | Left paren          | (          |
| )    | Right paren         | )          |

## 日语 / Japanese

| tag                  | 説明                                   |
| -------------------- | -------------------------------------- |
| N                    | 名詞 # Noun                            |
| PRO                  | 代名詞 # Pronoun                       |
| DT                   | 連体詞 # Adjectival determiner         |
| V                    | 動詞 # Verb                            |
| ADJ                  | 形容詞 # Adjective                     |
| ADJV                 | 形状詞 # Adjectival verb               |
| ADV                  | 副詞 # Adverb                          |
| PRT                  | 助詞 # Particle                        |
| AUXV                 | 助動詞 # Auxiliary verb                |
| PUNCT                | 補助記号 # Punctuation                 |
| SYM                  | 記号 # Symbol                          |
| SUF                  | 接尾辞 # Suffix                        |
| PRE                  | 接頭辞 # Prefix                        |
| TAIL                 | 語尾 # Word tail (conjugation)         |
| CC                   | 接続詞 # Conjunction                   |
| PRP                  | 代名詞 # Pronoun                       |
| URL                  | URL # URL                              |
| ENG                  | 英単語 # English word                  |
| FIL                  | 言いよどみ # Filler                    |
| MSP                  | web 誤脱 # Misspelling                 |
| INT                  | 感動詞 # Interjection                  |
| KYTEA_JA_DEFAULT_TAG | 新規未知語 # Unclassified unknown word |
