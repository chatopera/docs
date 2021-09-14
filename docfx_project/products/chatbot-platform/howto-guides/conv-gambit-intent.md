# 在多轮对话中使用意图匹配器

<img width="800" src="../../../../images/products/platform/conversations/intents/image2021-9-1_16-47-24.png" alt="意图匹配器" />

也称为 Intent Gambit，在多轮对话脚本中使用[意图识别模块](/products/chatbot-platform/explanations/intent.html)实现任务型对话。

* [意图匹配器的设计初衷和背景知识](/products/chatbot-platform/explanations/gambit-intent.html)


## 意图匹配器语法

语法<font color="blue">（注意语法中存在的空格）</font>：

```
intent INTENT_NAME
- ^succHandlerFn()
- {x} ^loseHandlerFn()
```

在之前，不管是通配符匹配器，还是模糊匹配器，都是使用 "`+`" 开始，但是在意图匹配器中，开始必须是 "`intent`"，用来标志后面的内容是面向意图匹配器。

`intent INTENT_NAME` 就是意图匹配器，`INTENT_NAME` 是意图识别模块中，意图的名字，大小写不敏感，这意味着 `book_cab` 和 `BOOK_CAB` 是一样的。

<img width="800" src="../../../../images/products/platform/conversations/intents/image2021-9-1_19-29-33.png" alt="意图列表" />

然后，在下一行，使用 "`-`" 开始设定回复，因为需要处理意图识别信息，而该信息是传递给函数的，所以，回复设置为自定义的函数。在本文后面的部分，会详细说明在函数中取值。

在意图匹配器下，有两种类型的回复：

**1）识别到意图，并在对话交互中得到所有的必须的槽位信息，调用“`成功函数`”；**

**2）识别到意图，但是追问交互中，在限定的追问次数下，没有得到必须的槽位信息，在这种情况下，会使用对话用户最后的检索，从知识库和对话脚本中，继续检索，如果得到答案，则回复该答案；如果没有得到答案，则调用“`失败函数`”。**

“失败函数”有一个特殊的标记：`{x}`。即一对大括号内写入小写字母 `x`。**失败函数是选填的**，如果没有定义则会回复兜底回复。在失败函数内，也是可以取得当前意图识别的信息。

举例

```
intent book_cab
- ^orderCab()
- {x} ^loseOrderCab()
```

`成功函数`和`失败函数`的执行时刻的更多信息，参考 [多轮对话工作机制](/products/chatbot-platform/explanations/conversation.html)。

以上就是意图匹配器的脚本语法，接下来介绍函数中，使用意图识别信息、配置意图识别分支等更高级功能点。

## 意图会话生命周期

当一个意图被识别到，对话进入意图识别对话，就会创建一个**意图会话**。意图会话，在下面四种情况下会失效：

### 空闲时间太久而过期

对话用户在【会话回溯最大时长】时间下未发送请求，意图会话因为**空闲时间太久而过期**；

即【`会话回溯最大时长`】，当对话用户，超过一段时间不和机器人交互，那么会话状态被清空，包括意图会话。同样，进入 BOT 管理控制台的设置页面调整该值，默认为半个小时。

### 新识别到的意图覆盖意图会话

对话从意图识别模块识别新的意图，**就是又匹配上了新的意图**，旧的会话周期被覆盖；

### 意图识别调试分支重新训练

意图匹配器，通过在多轮对话脚本中的环境变量 `@SYS_INTENT_BRANCH` 的值来指定集成[意图识别的版本](/products/chatbot-platform/howto-guides/intent-releases.html)，即调试版本或生产版本，二者的值分别是`pro`和`dev`，默认为 `dev`。

调试版本，顾名思义，是开发测试时使用，每次重新训练，其对应的意图会话都会被删除，在使用意图匹配器时，就会造成多轮对话在上下文处理上的失败。所以，每次意图识别重新训练，如果多轮对话集成的是调试分支，则意图会话的逻辑就失败了。

因为意图匹配器默认就是使用调试分支，所以，对于生产环境的 BOT，有如下建议：

1）发布训练好的意图识别调试版本为生产版本，进入机器人意图管理页面，点击【版本管理】，点击【发布上线】。

<img width="800" src="../../../../images/products/platform/screenshot-20210907-194649.png" alt="发布上线" />

2）在多轮对话设计器或 Chatopera 机器人平台管理控制台，进入环境变量设置。

修改`@SYS_INTENT_BRANCH` 的值为`pro`。

```
@SYS_INTENT_BRANCH=pro
```

这时，因为使用了意图识别生产版本，不会因为调试分支的变动而影响意图会话。

### 函数内处置意图会话

在多轮对话函数中，包括**成功函数、失败函数或其它的匹配到的脚本函数**，使用 **`this.intent.drop = true`** 设置后。

对于第三条，这意味着，需要 BOT 开发者在成功的处理了意图信息后，设置 `this.intent.drop = true`，就是放弃当前意图信息。

采用这个设计的原因是，**意图会话**的信息处理，这项权利尽量的保留给 BOT 开发者，在函数中实现，可以满足更多业务需求，让 BOT 更智能。

## 使用函数完成对话

意图识别可以在多轮对话设计器 v2.2.0+ 中使用，但是基于对多轮对话设计器用户体验的升级，建议使用 v2.3.0+ 版本的多轮对话设计器，最新版本[下载地址链接](/products/chatbot-platform/howto-guides/cde-install.html)。

编辑意图识别对话窗口如下：

<table class="image">
    <caption align="bottom">多轮对话设计器</caption>
    <tr>
        <td><img width="800" src="../../../../images/products/platform/conversations/intents/image2021-9-1_19-43-43.png" alt="多轮对话设计器" /></td>
    </tr>
</table>

在脚本和函数编辑区域，使用语法匹配意图识别和处理意图识别信息；对话窗口进行测试，在日志中查看日志和 `debug` 信息；在 SDK 中查看返回值 JSON 数据。

### 意图匹配器取值

如上文，有一个例子：

```
intent book_cab
- ^orderCab()
- {x} ^loseOrderCab()
```

当对话用户的发送文本匹配上了“book_cab”中的说法，比如“我想打车“。多轮对话即启用【book_cab】内的对话流程，意图识别对话在成功获得该意图的必须的槽位信息，或超过了设置的最大追问次数，则会进入多轮对话函数，前者会调用【成功函数】，后者会调用【失败函数】。前文，做过相关描述。那么，成功函数和失败函数的内，如何获得意图识别对话的信息呢？

### 成功函数

成功函数，比如上文例子中的 `orderCab` 不需要在对话脚本中设定任何参数，函数执行的时候，会将意图识别信息，加入该函数的 `this` 命名空间下，使用 `this.intent` 读取。

`this.intent` 是一个 JSON 数据，数据格式如下：

```

{
  "name": "{{INTENT_NAME}}",
  "topicName": "{{TOPIC_NAME}}",
  "branch": "{{INTENT_BRANCH}}",
  "entities": [
    {
      "name": "{{ENTITY_NAME}}",
      "val": "{{ENTITY_VALUE}}",
      "requires": true,
      "dictname": "{{DICT_NAME}}"
    },
  ],
  "state": "{{STATE}}"
}
```

_INTENT_NAME_: 意图识别的名字

_TOPIC_NAME_：对话脚本话题的名字

_INTENT_BRANCH_：集成意图识别的版本的分支，默认为 `dev`，如果使用意图识别生产版本分支，在多轮对话中设置环境变量 `@SYS_INTENT_BRANCH` 为 `pro`

`ENTITY_NAME`, `ENTITY_VALUE`, `DICT_NAME`：该意图下的关键的参数，槽位信息；`requires` 为 `true` 时，代表该槽位是必填的

`STATE`：状态，包括 `resovled`, `proactive`, `losed` 三个状态，分别代表意图全部必填参数识别完成，正在追问参数信息和追问超过最大次数

除了增加了 `this.intent`，其它成功函数的使用和多轮对话函数是一致的。比如，设定回复：

```
// 回复只有文本
exports.orderCab = async function() {
    debug("[orderCab] intent %s", JSON.stringify(this.intent));
    // 处理下单信息
    // ...
    this.intent.drop = true; // 成功下单，设置当前意图会话过期
    return "下单成功，订单编号：SE111."; // 设定回复

}


// 回复包含自定义业务字段
exports.orderCabExt = async function() {
    debug("[orderCab] intent %s", JSON.stringify(this.intent));
    // 处理下单信息
    // ...
    this.intent.drop = true; // 成功下单，设置当前意图会话过期
    return {text:"下单成功，订单编号：SE111."; // 设定回复,
            params: { YOUR_KEY: YOUR_VALUE}}   // 自定义业务字段

}
```

`this.intent` 的一个实际数据示例：

```

{
  "name": "book_cab",
  "topicName": "greetings",
  "branch": "dev",
  "entities": [
    {
      "name": "originLoc",
      "val": "天津",
      "requires": true,
      "dictname": "@LOC"
    },
    {
      "name": "date",
      "val": "明天下午四点",
      "requires": true,
      "dictname": "@TIME"
    },
    {
      "name": "destLoc",
      "val": "北京",
      "requires": true,
      "dictname": "@LOC"
    }
  ],
  "state": "resolved"
}
```

### 失败函数

失败函数中，`this.intent` 的信息和使用，和成功函数是一致的，这是调用的实际不一致，同时它是可选的。



### 快速读取 intent.entities

默认情况下，`intent.entities` 是一个数组，如果需要用槽位的名称去取值，要便利，不方便，使用以下方法快速使用 `intent.entities` 生成一个 JSON Object，然后使用槽位名称取值。

```
let entities = _.keyBy(this.intent.entities, 'name');
```

比如，有一个槽位名字为 `date`，则接下来获得这个槽位的值：

```
let dateRawString = entities["date"]["val"];
```

### 转化相对时间为绝对时间

加入一个日期槽位 `dateRawString` 值为“明天下午 5 点”，那么如何从这个字符串提取出时间“2021-09-03 17:00”呢？

```
let extractedDates = await this.maestro.extractTime(dateRawString);
debug("extracted date", extractedDates);
if(extractedDates.length > 0){
    // 目标时间就是：extractedDates[0]  '2021/09/03 17:00'
    debug("Target date", extractedDates[0]);
}
```

更多关于 `extractTime` 的介绍[参考链接](/products/chatbot-platform/references/func-builtin.html#extracttime)。

### 保存变量信息到意图会话

函数执行的时候，如果有意图会话存在，就会被加载到函数的 `this.intent` 中。在两个或多个连续的多轮对话中，可以通过 `this.intent.extras` (JSON Object) 来保存变量。该信息会和该意图会话周期一致。比如：

```
/**
 * 提取时间实体
 */
async function extractTimeEntity(maestro, entities, property) {
    let dates = await maestro.extractTime(entities[property]["val"], "YYYY年MM月DD日 HH:mm");
    return dates.length > 0 ? dates[0] : "";
}

exports.handleAirplaneTicketOrder = async function() {

    debug("[handleAirplaneTicketOrder] this.intent", JSON.stringify(this.intent))

    let entities = _.keyBy(this.intent.entities, 'name');
    // 获得信息
    let date = await extractTimeEntity(this.maestro, entities, "date");
    // 保存到 this.intent.extras
    this.intent.extras = {
        date: date
    }

  ...
}

```

`handleAirplaneTicketOrder` 函数保存了一个变量到 `this.intent.extras` 中，稍后另外一次对话时，调用了另外一个函数 `placeAirplaneTicketOrder`，就可以直接用这个变量。

```
exports.placeAirplaneTicketOrder = async function() {
    // 直接取值
    // this.intent.extras.date

    ...
```

## 设置最大追问次数

匹配意图识别对话之后，机器人会根据槽位信息情况，必填的槽位是否都获取到，进行追问，这个追问可以设定一个最大次数，当达到最多的追问时，机器人就放弃检索意图识别，而是继续从知识库和对话脚本中查询回复。

对于每个机器人，BOT 开发者可以自定义设置，进入 BOT 设置页面，找到【`多轮对话意图对话最多追问次数`】，默认为 2。

<table class="image">
    <caption align="bottom">多轮对话意图对话最多追问次数</caption>
    <tr>
        <td><img width="800" src="../../../../images/products/platform/conversations/intents/image2021-9-3_11-49-51.png" alt="多轮对话意图对话最多追问次数" /></td>
    </tr>
</table>

## 设置集成意图识别分支

在意图识别模块，包括两个分支：调试分支；生产分支。生产分支，就是指发布到生产环境，实际上线的 BOT 服务。

设计两个分支，主要是考虑到，一个机器人的意图识别数据可以不断的优化，那么每个阶段优化好以后再选择上线到生产分支，这样在调试和优化的时候不影响生产分支的对话。

该设置为，在多轮对话设计器或 BOT 管理控制台的多轮对话页面，设置【`环境变量`】来调整，默认为调试分支，设置参数为：`@SYS_INTENT_BRANCH`，使用 `dev` 代表集成调试分支，使用 `pro` 代表集成生产分支；默认为调试分支。

## 升级生产环境的多轮对话脚本

<font color="blue">通过多轮对话设计器，或 Chatopera 机器人平台的机器人多轮对话管理页面，上传多轮对话脚本，因为刷新的缘故，正在进行中的意图会话失效，这会给对话用户造成体验上的困扰，所以，对于生产环境的更新，建议在业务低分时间进行！</font>

## 其它使用说明

### SDK 返回意图识别信息

当对话用户，有匹配到意图，正在进行意图识别的对话时，使用多轮对话检索 API，返回值中，`service.provider` 的值是 `intent`，并且 `service.intent` 是当前意图信息。示例数据如下：

```
{
  "string": "您想从哪里出发？",
  "topicName": "greetings",
  "subReplies": [],
  "service": {
    "provider": "intent",
    "intent": {
      "name": "book_cab",
      "threshold": 0.9,
      "branch": "dev",
      "state": "proactive",
      "entities": [
        {
          "name": "originLoc",
          "val": "",
          "requires": true,
          "dictname": "@LOC"
        },
        {
          "name": "date",
          "val": "",
          "requires": true,
          "dictname": "@TIME"
        },
        {
          "name": "destLoc",
          "val": "",
          "requires": true,
          "dictname": "@LOC"
        }
      ]
    }
  },
  "logic_is_unexpected": false,
  "logic_is_fallback": false,
  "botName": "dev1078",
  "faq": [],
  "profile": {}
}
```

可见，`service.intent` 的数据与函数中的 `this.intent` 是一致的。


### 在回复中跳转到指定意图

**假设在多轮对话脚本中，已经设定了一个意图的意图匹配器。** 然后在多轮对话中，还可这样开始该意图的对话：使用 [`topicRedirect`](/products/chatbot-platform/howto-guides/conv-state.html#切换话题) 切换话题。

#### 文本回复

```
+ ${0.5}{自定义的文本}
- ^topicRedirect("intents", "book_airplane_ticket", true)
```

注意：此处 `topicRedirect` 的第三个参数设置为 `true`，代表目标匹配器是一个意图匹配器。

#### 函数回复

文本中，定义了函数

```
+ ${0.5}{自定义的文本}
- ^handleXXFn()
```

函数 `handleXXFn`:

```
exports.handleXXFn = async function() {
    // do your magic
    return "^topicRedirect(\"intents\", \"book_airplane_ticket\", true)"
}
```

## 下一步

- [函数：使用 http 模块请求外部系统 API 服务](/products/chatbot-platform/references/func-builtin.html#http)

- [理解多轮对话工作机制](/products/chatbot-platform/explanations/query.html)

- [查看示例程序：预约机票](https://github.com/chatopera/chatbot-samples/blob/master/projects/%E9%A2%84%E5%AE%9A%E6%9C%BA%E7%A5%A8)

- [通配符匹配器：使用语法建立规则](/products/chatbot-platform/references/gambit-star.html)

- [模糊匹配器：容错能力更强和智能的匹配器](/products/chatbot-platform/howto-guides/conv-gambit-like.html)

## 评论

<script src="https://utteranc.es/client.js"
        repo="chatopera/docs"
        issue-term="pathname"
        label="Comment"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
