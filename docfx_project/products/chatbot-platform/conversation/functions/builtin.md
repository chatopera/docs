# 内置函数库

在开发中，进一步提供系统灵活性，在`函数`定义中，系统预置了以下几个工具对象，方便聊天机器人开发者实现各种功能的聊天机器人。以下内容假设读者已经掌握了`JavaScript`编程语言。

> 提示：以下使用 `this` 前缀的变量代表该变量依赖于在函数内部的 `this` 对象。

## this.user.id

当前对话用户标识，在 [知识库检索](/products/chatbot-platform/integration/api.html#检索知识库)、 [意图识别检索](/products/chatbot-platform/integration/api.html#检索意图识别) 和 [多轮对话检索](/products/chatbot-platform/integration/api.html#检索多轮对话)传入的`userId`信息。

在函数中，获取该唯一标识信息：

```
this.user.id
```

比如：

```
exports.myUserId = function(cb){
    cb(null, {
        text: "Your id is " + this.user.id
    })
}
```

## this.user.history

当前用户与机器人对话的历史

```
this.user.history 类型：数组
```

其中，每个元素内容如下：

```
{
    "input" : {
        "timestamp" : ISODate("2020-07-28T17:06:01.458Z"),
        "original" : "hello"
    },
    "reply" : {
        "createdAt" : 1595955961672.0,
        "string" : "#in-params#",
        "topicName" : "greetings",
        "clearConversation" : false,
        "props" : {
            "params" : [
                {
                    "hyperlink" : "http://",
                    "thumbnail" : "http://xx.png",
                    "summary" : "描述",
                    "title" : "标题",
                    "type" : "card"
                }
            ]
        },
    }
}
```

其中，*original*就是来访者的输入，*reply*是上一轮对话中机器人的回复。

历史对话按照降序排列，即最近发生的对话在上面，最多存储 100 轮历史对话数据。

## this.message

`this.message` 是每次用户输入文本经过自然语言处理后的对象，它并不是全局对象，必须在 `exports` 的函数中，使用 `this.message` 来引用。

```
this.message.original | String, 输入文本的原始内容
this.message.words | JSONArray, 分词结果
this.message.tags | JSONArray, 对应位置分词的词性
this.message.clean | String, 输入文本的改写，经过词根转化的输入字符串
this.message.entities | JSONArray, 输入文本包含的命名实体
this.message.names | JSONArray, 输入文本包含的人名
this.message.nouns | JSONArray, 输入文本包含的名词
this.message.adverbs· | JSONArray, 输入文本包含的副词
this.message.verbs | JSONArray, 输入文本包含的动词
this.message.adjectives | JSONArray, 输入文本包含的形容词
this.message.pronouns | JSONArray, 输入文本包含的指示代词
```

关于 `this.message.tags` 包含了所有的分词对应的词性，可以用来做更多的判断，不同语言的词性集是不同的，参考 [Chatopera 多轮对话 Message 语言词性标注](https://github.com/chatopera/docs/wiki/Chatopera-%E5%A4%9A%E8%BD%AE%E5%AF%B9%E8%AF%9D-Message-%E8%AF%AD%E8%A8%80%E8%AF%8D%E6%80%A7%E6%A0%87%E6%B3%A8)。

## this.maestro

maestro 是管理对话状态存储和自然语言处理的高级接口，它并不是全局对象，必须在 `exports` 的函数中，使用 `this.maestro` 来引用。

**注意事项：**

1. 对于返回值是 `Promise` 的接口，使用 `try catch`, `await` 进行调用可读性更好。

**2. 该对象不是全局函数，作用域在函数内部，使用时依赖于函数内`this`变量。**

### 存储键值对

```
this.maestro.set(KEY, VALUE [, EXPIRES]) 返回值: Promise
```

存储键值对，支持过期时间，过期时间以秒为单位。VALUE 可以是时间，字符串，数字。

该命令也可以用于更新键值对，或者更新 EXPIRES 时间，让该信息不过期。

### 获得键值对有效时间

键值对是存储在 Redis 服务中，如果设定键值对时同时对`EXPIRES`赋值，那么到达过期时刻，该键值对将被删除。使用`ttl`接口获得一个键值对有效存在时间，返回值是有效的秒数，如果返回值为`-1`则代表该值不存在。

```
this.maestro.ttl(KEY) 返回值: Promise(number)
```

### 增加键的值

```
this.maestro.incrby(KEY, NUMBER) 返回值: Promise
```

对于 Number 类型的键，增加一定值。

### 获得一个键的值

```
this.maestro.get(KEY) 返回值: Promise
```

获得一个键的值。

### 删除一个键和其值

```
this.maestro.del(KEY) 返回值：Promise
```

删除一个键和其值。

### 获得绝对时间

获得绝对时间，比如 来访者提到 “明天”，“后天”，“下周一”等相对时间，会被计算出正确的绝对时间，时区为北京时间。

```
let time = await this.maestro.extractTime(cap1)
this.maestro.formatTime(time[0].toString(), "YYYY年MM月DD日") # 从返回值中格式化日期，formatTime返回值 String
```

### 发送邮件

通过邮件服务器发送邮件, 使用 [nodemailer](https://nodemailer.com/) 实现。

```
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

### 设置用户画像

```
await this.maestro.profile(userId, property, value) 返回值 Promise
```

_userId_: 用户唯一标识

_property_: 用户的属性

_value_: 属性值

该接口用于持久化一个用户的信息，此处 userId 可以使用当前用户的信息`this.user.id`；`property`和`value`是根据业务灵活定义。

该信息被持久化到数据库里，该接口的目的是设置用户画像，比如用户对一个产品是否有兴趣。

用户画像可以通过[系统集成/用户管理/获取用户画像信息 API](/products/chatbot-platform/integration/api.html#获取用户画像信息)获得。

## config

获取**环境变量**，环境变量在**多轮对话设计器**和**聊天机器人多轮对话控制台**都可以定义，目的是在设计阶段和运行阶段，多轮对话使用不同的配置。

<table class="image">
<caption align="bottom">配置环境变量</caption>
<tr><td><img width="800" src="../../../../images/products/platform/bot-console-define-config.jpg" alt="配置环境变量"/></td></tr>
</table>

`config`作为函数中的全局常量，不需要用户定义，不支持改变该值，只能作为读取用途，并且`config`只是键值对，值只是`string`类型。

```
exports.print_key_value = function(key, cb){
    // 通过通配符获得key, 查看其在环境变量中对应对值
    cb(null, "Ok, value is " + config[key]);
}
```

- config 更多使用示例代码：[https://github.com/chatopera/chatbot-samples/search?q=config](https://github.com/chatopera/chatbot-samples/search?q=config)

`环境变量`常用来配置一些生产环境对应的信息。

## http

用于在函数内部，通过 HTTP 协议集成外部系统。

`http`作为函数中的全局常量，不需要用户定义。

```
http.get(url[, config])
http.delete(url[, config])
http.head(url[, config])
http.options(url[, config])
http.post(url[, data[, config]])
http.put(url[, data[, config]])
http.patch(url[, data[, config]])
```

Chatopera 机器人平台中，函数内置`http`常量使用[axios](https://www.npmjs.com/package/axios)包实例化，`http`即`axios`。

- http 更多使用示例代码：[https://github.com/chatopera/chatbot-samples/search?q=http](https://github.com/chatopera/chatbot-samples/search?q=http)

- axios 详细使用文档： [https://github.com/axios/axios](https://github.com/axios/axios)

## debug

打印调试日志。

`debug`作为函数中的全局常量，不需要用户定义。

```
debug("hello")
debug("hello %s", stringVar)
debug("hello %s, %j", stringVar, jsonVar)
debug("hello %s, %o", stringVar, objVar)
```

- debug 更多使用示例代码：[https://github.com/chatopera/chatbot-samples/search?q=debug](https://github.com/chatopera/chatbot-samples/search?q=debug)

## 评论

<script src="https://utteranc.es/client.js"
        repo="chatopera/docs"
        issue-term="pathname"
        label="Comment"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
