## 函数

函数是一个强大而有趣的设计。在回复中，可以使用函数来获取整条消息对象，用户对象或者其它资源，比如数据库。

### 函数定义

把通配符值当做变量传给函数，例如下面这个例子：

```
+ 我的用户名是 *(2-10)
- ^getUserAccount(<cap>)
```

所以，调用函数的方式就是使用“^”。在函数的编辑窗口中，可以这样定义：

```
exports.getUserAccount = function(account, cb) {
  cb(null, "对不起，系统没有找到" + account);
}
```

函数的声明中，参数列表首先是通配符的值，可以传多个，然后最后一个参数始终是回调函数(cb)，cb 的参数列表为`(error, text)`，`text` 作为文本添加到回复中，`error`是指处理中发生异常。

函数的定义也同样支持`async/await`语法，例子如下：

```
exports.getUserAccount = async function(account) {
    return "对不起，系统没有找到" + account;
}
```

使用`async/await`时，需要抛出异常时，通过 `throw new Error("ERROR MESSAGE")` 完成。

在系统集成时，业务系统的需求千差万别，为了灵活的支持各种需求，在函数中也可以自定义返回值。

```
exports.getUserAccount = function(account, cb) {
  cb(null, {
      text: "对不起，系统没有找到" + account,
      params: {
          resetPasswd: "http://example.com/reset-account"
      }
  });
}
```

其中，`params`可定义为`[]`或`{}`对象，该用法同样适用于`async/await`函数。

```
exports.getUserAccount = async function(account) {
    return {
      text: "对不起，系统没有找到" + account,
      params: {
          resetPasswd: "http://example.com/reset-account"
      }
}
```

在[系统集成/多轮对话检索](/products/chatbot-platform/integration/api.html#检索多轮对话)时，返回值`data`内将增加`params`属性，与以上设定的值相同。

### 复合函数

在回复中，可以添加任意多的函数，比如

```
+ ...
- 联合 ^callFunction1() 和 ^callFunction2(<cap1>)
```

### 嵌套函数

在函数的回调函数中，函数名会被解析成对应的函数，所以放心的在回复中添加任意合法的函数，比如在脚本中这样写：

```
+ ...
- ^nestedAFunction()
```

然后，在函数中，定义如下：

```
exports.nestedAFunction = function(cb) {
  cb(null, "张三 ^nestedBFunction()");
}
exports.nestedBFunction = function(cb) {
  cb(null, "和李四");
}
```

### 消息形式

在多轮对话中，回复除纯文本外，还可以支持多媒体消息，这样用户交互的体验更佳。不同消息的类型还需要渠道能够兼容，或在业务系统中进行适配，以下各消息类型在 **[春松客服](/products/cskefu/index.html)** 和 **多轮对话设计器** 中已经支持。

#### 列表消息

函数返回值中，`params`数组中每个元素约定如下：

```
// 问候语中关联常见问题
exports.get_greetings = async function() {
    return {
        text: "请问有什么可以帮到您？",
        params: [{
            label: "1. 产品列表",
            type: "qlist",
            text: "产品列表"
        }, {
            label: "2. 当季热销产品",
            type: "qlist",
            text: "当季热销产品"
        }, {
            label: "3. 退换货咨询",
            type: "qlist",
            text: "退换货咨询"
        }]
    };
}
```

其中，`label`是显示文字，`type`为固定值`qlist`，`text` 是点击该问题时发送给机器人的文本内容。

#### 按钮消息

```
// 按钮选择消息
exports.get_products = async function() {
    return {
        text: "您对下面哪个产品感兴趣",
        params: [{
                label: "上衣",
                type: "button",
                text: "介绍一下上衣"
            },
            {
                label: "服装",
                type: "button",
                text: "介绍一下鞋帽"
            }
        ]
    }
}
```

类似图文消息，不同的是：1）`type`值为`button`；2）业务上一般会设定一组按钮消息只能有一个按钮被点击一次。

#### 图文消息

```
// 图文消息
exports.get_shangyi = async function() {
    return {
        text: "{CLEAR} 图文消息",
        params: [{
            type: 'card',
            title: "秋冬上衣优选",
            thumbnail: "https://ss0.bdstatic.com/xx.jpg",
            summary: "秋冬上衣优选秋冬上衣优选秋",
            hyperlink: "https://www.1688.com/B6AC.html"
        }]
    }
}
```

此处，因为显示图文消息以包含文字，`text`需要使用固定值 `{CLEAR} 图文消息`，`type`为固定值 `card`；`title`，`thumbnail`，`summary`和`hyperlink`分别是图文消息的标题，缩略图，描述和超链接地址。

**提示：** `{CLEAR} ` 作为前缀代表机器人本轮清除多轮对话状态。

### 自定义业务字段

从以上的**消息形式**的实现，就是借助函数返回值中 `params` 这个属性，在实现聊天机器人时，函数中可在 `params` 自定义的业务字段，都会被 SDK/API 返回。

```
// 自定义业务字段
exports.get_shangyi = async function() {
    return {
        text: "以帮助您下单了。",
        params: {
            orderId: "BIL-001"
        }
    }
}
```

通常是在业务系统内，使用业务字段完成更多工作。

### 函数工具

在开发中，进一步提供系统灵活性，在`函数`定义中，系统预置了以下几个工具对象，方便聊天机器人开发者实现各种功能的聊天机器人。以下内容假设读者已经掌握了`JavaScript`编程语言。

> 提示：以下使用 `this` 前缀的变量代表该变量依赖于在函数内部的 `this` 对象。

#### this.user.id

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

#### this.user.history

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

#### config

获取**环境变量**，环境变量在**多轮对话设计器**和**聊天机器人多轮对话控制台**都可以定义，目的是在设计阶段和运行阶段，多轮对话使用不同的配置。

<table class="image">
<caption align="bottom">配置环境变量</caption>
<tr><td><img width="800" src="../../../images/products/platform/bot-console-define-config.jpg" alt="配置环境变量"/></td></tr>
</table>

`config`作为函数中的全局常量，不需要用户定义，不支持改变该值，只能作为读取用途，并且`config`只是键值对，值只是`string`类型。

```
exports.print_key_value = function(key, cb){
    // 通过通配符获得key, 查看其在环境变量中对应对值
    cb(null, "Ok, value is " + config[key]);
}
```

`环境变量`常用来配置一些生产环境对应的信息。

#### http

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

Chatopera 机器人平台中，函数内置`http`常量使用[axios](https://www.npmjs.com/package/axios)包实例化，`http`即`axios`，详细使用文档参考

[https://github.com/axios/axios](https://github.com/axios/axios)

#### debug

打印调试日志。

`debug`作为函数中的全局常量，不需要用户定义。

```
debug("hello")
debug("hello %s", stringVar)
debug("hello %s, %j", stringVar, jsonVar)
debug("hello %s, %o", stringVar, objVar)
```

#### this.maestro

maestro 是管理对话状态存储和自然语言处理的高级接口，在函数中，使用 this.maestro 来引用。

**注意事项：**

1. 对于返回值是 Promise 的接口，使用 try catch, await 进行调用可读性更好。

2. 该对象不是全局函数，作用域在函数内部，使用时依赖于函数内`this`变量。

- 存储键值对

```
this.maestro.set(KEY, VALUE [, EXPIRES]) 返回值: Promise
```

存储键值对，支持过期时间，过期时间以秒为单位。VALUE 可以是时间，字符串，数字。

该命令也可以用于更新键值对，或者更新 EXPIRES 时间，让该信息不过期。

- 获得键值对有效时间

键值对是存储在 Redis 服务中，如果设定键值对时同时对`EXPIRES`赋值，那么到达过期时刻，该键值对将被删除。使用`ttl`接口获得一个键值对有效存在时间，返回值是有效的秒数，如果返回值为`-1`则代表该值不存在。

```
this.maestro.ttl(KEY) 返回值: Promise(number)
```

- 增加键的值

```
this.maestro.incrby(KEY, NUMBER) 返回值: Promise
```

对于 Number 类型的键，增加一定值。

- 获得一个键的值

```
this.maestro.get(KEY) 返回值: Promise
```

获得一个键的值。

- 删除一个键和其值

```
this.maestro.del(KEY) 返回值：Promise
```

删除一个键和其值。

- 获得绝对时间

获得绝对时间，比如 来访者提到 “明天”，“后天”，“下周一”等相对时间，会被计算出正确的绝对时间，时区为北京时间。

```
let time = await this.maestro.extractTime(cap1)
this.maestro.formatTime(time[0].toString(), "YYYY年MM月DD日") # 从返回值中格式化日期，formatTime返回值 String
```

- 发送邮件

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

- 设置用户画像

```
await this.maestro.profile(userId, property, value) 返回值 Promise
```

_userId_: 用户唯一标识

_property_: 用户的属性

_value_: 属性值

该接口用于持久化一个用户的信息，此处 userId 可以使用当前用户的信息`this.user.id`；`property`和`value`是根据业务灵活定义。

该信息被持久化到数据库里，该接口的目的是设置用户画像，比如用户对一个产品是否有兴趣。

用户画像可以通过[系统集成/用户管理/获取用户画像信息 API](/products/chatbot-platform/integration/api.html#获取用户画像信息)获得。

## 评论

<script src="https://utteranc.es/client.js"
        repo="chatopera/docs"
        issue-term="pathname"
        label="Comment"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
