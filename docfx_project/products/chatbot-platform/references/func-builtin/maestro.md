# maestro

`maestro` 是管理对话状态存储和自然语言处理的高级接口，它并不是全局对象，必须在 `exports` 的函数中，使用 `this.maestro` 来引用。

**注意事项：**

1. 对于返回值是 `Promise` 的接口，使用 `try catch`, `await` 进行调用可读性更好。

**2. 该对象不是全局函数，作用域在函数内部，使用时依赖于函数内`this`变量。**

## User

对话用户信息相关，此部分为 `maestro` 内实现的，和对话用户相关的还有 [user](https://docs.chatopera.com/products/chatbot-platform/references/func-builtin/user.html) 库。

### profile

设置用户画像

```函数
await this.maestro.profile(userId, property, value) 返回值 Promise
```

_userId_: 用户唯一标识

_property_: 用户的属性

_value_: 属性值

该接口用于持久化一个用户的信息，此处 userId 可以使用当前用户的信息`this.user.id`；`property`和`value`是根据业务灵活定义。

该信息被持久化到数据库里，该接口的目的是设置用户画像，比如用户对一个产品是否有兴趣。

用户画像可以通过[系统集成/用户管理/获取用户画像信息 API](https://docs.chatopera.com/products/chatbot-platform/references/sdk/chatbot/users.html#获取用户画像信息)获得。

## KeyValue Pairs

用于管理持久化的信息，通过键值对存取。

### set

存储键值对，支持过期时间，过期时间以秒为单位。VALUE 可以是时间，字符串，数字。

该命令也可以用于更新键值对，或者更新 EXPIRES 时间，让该信息不过期。

```函数
this.maestro.set(KEY, VALUE [, EXPIRES]) 返回值: Promise
```

### ttl

获得键值对有效时间，键值对是存储在 Redis 服务中，如果设定键值对时同时对`EXPIRES`赋值，那么到达过期时刻，该键值对将被删除。使用`ttl`接口获得一个键值对有效存在时间，返回值是有效的秒数，如果返回值为`-1`则代表该值不存在。

```函数
this.maestro.ttl(KEY) 返回值: Promise(number)
```

### incrby

增加键的值，对于 Number 类型的键，增加一定值

```函数
this.maestro.incrby(KEY, NUMBER) 返回值: Promise
```

### get

获得一个键的值

```函数
this.maestro.get(KEY) 返回值: Promise
```

### del

删除一个键和其值

```函数
this.maestro.del(KEY) 返回值：Promise
```

## Extract information

信息提取

### extractNumber

获得一句文本中的阿拉伯数字，比如 来访者提到 “一二三”，“123”等数字，会被提取为一个转化为阿拉伯数字的数组。

```函数
let numbers = await this.maestro.extractNumber(cap1);
```

返回值: `numbers` 是处理后的数字数组，识别的文本中，可以包含多个数字；未获得数字时，数组长度为 0。
比如

```函数
let numbers = await this.maestro.extractNumber("一二三和123？");
// numbers  [ '123', '123' ]
```

### extractTime

获得绝对时间，比如 来访者提到 “明天”，“后天”，“下周一”等相对时间，会被计算出正确的绝对时间，时区为北京时间。

```函数
let dates = await this.maestro.extractTime(cap1[, format, timezone]);
```

其中，`format` 格式参考[momentjs#format](https://momentjs.com/docs/#/displaying/format/)，如果设定 `format` 的值为 `long`，返回值数组中数据格式为数字，类似于使用 JavaScript `(new Date()).getTime()` 获得的数据。

`timezone` 值设定参考[momentjs#timezone](https://momentjs.com/timezone/)。

`format` 默认值为 `YYYY/MM/DD HH:mm`，`timezone` 默认值为 `Asia/Shanghai`。

返回值: `dates` 是处理后的时间数组，识别的文本中，可以包含多个时间；可以具体到分钟，格式化时，未得到的时间被设置为 `0` 。

比如

```函数
let dates = await this.maestro.extractTime("明天和后天是几月几号？", "YYYY年MM月DD日", "Asia/Shanghai");
// dates  [ '2021年09月02日', '2021年09月03日' ]
```

### extractRegexDicts

提取指定文本中，包含的[自定义正则表达式词典](/products/chatbot-platform/howto-guides/dicts/dicts-regex.html)信息。


```JavaScript
let matches = await this.maestro.extractRegexDicts(string);
```


返回值：

```JavaScript
{
    "词典标识": [
        {
            "val": 匹配值,
            "begin": 开始位置,
            "end": 结束位置,
        }
    ],
    ...
}
```


举例，比如在函数中使用：

```JavaScript
exports.getCustomRegexDictnames = async function() {
    debug("this.message.original %s", this.message.original)
    let matches = await this.maestro.extractRegexDicts(this.message.original);
    debug("[extractRegexDicts] matches %j", matches);

    return {
        text: "hello "
    }
}
```

返回值：

```
{
  "email": [
    {
      "begin": 18,
      "end": 28,
      "val": "doo@cc.com"
    }
  ]
}
```

查看详细[使用说明](https://github.com/chatopera/docs/issues/79#issuecomment-1549241787)。


### digest

自动生成文本的摘要，假设文本有“.。,!?”等分隔句子的符号。那么 `digest` 将会获得其中最关键的句子作为摘要。

```函数
let texts = await this.maestro.digest("冬天来了。春天还会远吗?", 5);
```

第一个参数文本内容，第二个参数是返回摘要文本的字数长度。

返回值 `texts` 是一个数组，是输入文本中的若干句子，按照重要程度排序。

### keywords

提取文本关键词。

```函数
let words = await this.maestro.keywords("冬天来了。春天还会远吗?", 5);
```

第一个参数文本内容，第二个参数是返回关键词语的数量。
返回值 `words` 是一个数组，是输入文本中的若干词语，按照重要程度排序。


## FAQs Integrations

在 `maestro` 集成[知识库](/products/chatbot-platform/howto-guides/faq/faq-qna.html)的相关功能，知识库是通过问答对的形式管理机器人的语料。

### searchFAQs

在函数中检索该机器人的知识库。

```JavaScript
let results = await this.maestro.searchFAQs(text, topk);
debug("results faqs %j", results);
```

其中，`text` 是搜索条件，不能为 null 或空；topk 是最多检索返回多少相关信息，默认为 20。比如，

```
let results = await this.maestro.searchFAQs("黄金的主要产地", 10);
debug("results faq %j", results);
```

返回值 `results` 是一个数组( JSONArray)，每个成员是一个问答对信息，数据按照 `score` 降序排序。数据结构如下：

```JavaScript
[
  {
    "id": "{{DOC_ID}}",
    "score": 1,
    "post": "黄金的主要产地",
    "replies": [
      {
        "rtype": "plain",
        "enabled": true,
        "content": "美国，圣地亚哥"
      }
    ],
    "categories": [
      "标的"
    ]
  }
]
```

其中，`score` 为相似度（[0, 1] 区间）；`post` 为问答对标准问；`id` 是问答对 ID；`replies` 为答案信息；`categories` 为分类信息。 

以下介绍更为详细的使用例子：

```
# 脚本
+ {keep} 查询知识库
- ^searchBotFAQ()

# 函数
exports.searchBotFAQ = async function() {
    let results = await this.maestro.searchFAQs("黄金的主要产地", 1);
    debug("results faq %j", results);

    return {
        text: "知识库返回"
    }
}
```

### getFAQList

获得该机器人知识库的问答对列表。

```JavaScript
let params = {
    query: {{text}},
    limit: 10,    
    page: 1,
    categories: []
};
let results = await this.maestro.getFAQList(params);
debug("[getFAQListTest] results faq %j", results);
```

其中，参数 `params` 中字段的使用如下：

* params.query - 查询语句，模糊匹配问题；非必填，默认为空；
* params.limit - 每页返回问答对条数；非必填，默认为 10；
* params.page - 返回列表的页码，从 1 开始的正整数；非必填，默认为 1；
* params.categories - 问答对的分类信息；非必填，默认为 `[]`；填写字符串数组，数组内元素按照顺序，从左到右分别是一级分类，二级分类，三级分类，以此类推，最多支持四级，比如 `["动物", "海洋动物"]`

返回值 `results` 是一个数组( JSONObject)，如下：


```JavaScript
{
  "total": 1,
  "current_page": 1,
  "total_page": 1,
  "data": [
    {
      "createtime": "2024-02-01T05:38:05.853Z",
      "post": "虎鲸",
      "categories": [
        "动物",
        "海洋动物"
      ],
      "updatetime": "2024-02-01T06:00:27.684Z",
      "enabled": true,
      "id": "uxQsY40BLFVcfeSHoai6",
      "inquiryscore": 1
    }
  ]
}
```

其中，字段的含义如下：

* `total` - 符合查询条件的总的记录条数
* `current_page` - 当前数据列表的页码
* `total_page` - 全部符合条件的记录的总页码
* `data` - JSONArray, 问答对概要信息（`post` 标准问，`categories` 分类，`enabled` 是否启用，`id` docId，`inquiryscore` 问题的热度），docId 可以用于继续检索该问答对的详情，见 `getFAQDetail` 的说明。

#### 使用举例

`getFAQList` 的使用，可以结合脚本语法，下面举一个例子：

```脚本
+ 查询 (*)
- {keep} ^searchFaqTest(<cap1>)
```

```JavaScript
exports.searchFaqTest = async function(text) {
    let params = {
        query: text,
        limit: 10,
        page: 1,
    };
    let results = await this.maestro.getFAQList(params);
    debug("[searchFaqTest] results faq %j", results);

    return "hello"
}
```

由上，注意 `<cap1>` 和 `text` 的用法。用户输入时，[通配符匹配值](https://docs.chatopera.com/products/chatbot-platform/howto-guides/convs/conv-replies.html#)可以传入到查询语句中。

### getFAQDetail

根据指定的知识库问答对标识（docId）返回问答对详情。

```JavaScript
exports.searchFaqTest2 = async function() {
    let docId = "foo";
    let result = await this.maestro.getFAQDetail(docId);
    debug("[searchFaqTest] result faq %j", result);
    return "hello"
}
```

其中，`docId` 就是问答对的唯一标识。返回值有两种情况：1）该问答对存在；2）该问答对不存在。

#### 问答对存在的返回值

获得了详情 `(rc = 0)`，`result` 结果类似：

```JavaScript
{
  "rc": 0,
  "id": "uxQsY40BLFVcfeSHoai6",
  "inquiryscore": 5,
  "post": "虎鲸",
  "categories": [
    "动物",
    "海洋动物"
  ],
  "enabled": true,
  "replies": [
    {
      "rtype": "plain",
      "enabled": true,
      "content": "2121"
    }
  ]
}
```

#### 问答不对存在的返回值

未找到 `(rc = 1)`。

```JavaScript
 {"rc":1,"error":"Not found."}
```

## Notifications

通知服务。

### sendMail

通过邮件服务器发送邮件, 使用 [nodemailer](https://nodemailer.com/) 实现。

```函数
exports.sendMail = async function(argvs) {

let mailSettings = {
        service: config['MAIL_SERVICE'],
        auth: {
            user: config['MAIL_ACCOUNT'],
            pass: config['MAIL_PASSWORD']
        }
    };
    let transporter = this.maestro.nodemailer.createTransport(mailSettings);
    // setup e-mail data with unicode symbols
    let mailOptions = {
        from: `HR<${config['MAIL_ACCOUNT']}>`, // sender address
        to: config['MAIL_RECEP'], // list of receivers
        subject: `【应聘】小主，新增候选人了，岗位${openning}`, // Subject line
        text: '', // plaintext body
        html: content, // html body
    };
    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            debug(error);
        }
    });
```

以上 SMTP 邮件服务的配置需要定义在环境变量中，支持的邮箱服务参考[nodemailer](https://nodemailer.com/smtp/well-known/)，可配置 QQ 企业邮箱、163 邮箱等。