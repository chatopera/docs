## 使用进阶

以上是多轮对话设计器 v1.x 版本中支持的脚本语法，这些语法能够保证业务人员实现满足需求的聊天机器人，除了函数部分的有一点门槛外，其它内容是非常容易掌握的。对于函数，只需要一点 `JavaScript` 基础知识，就可以掌握。

本节介绍使用多轮对话设计器实现一个“聊天机器人”的具体过程。我们以实现天气问答机器人为例，我们选择这个场景并不是因为它简单，而是因为它容易理解，使用多轮对话设计器可以实现更复杂，更有价值的应用。我们先一睹为快，这个机器人是什么样子的。

<video controls="" style="width:480px;height:400px" poster="../../images/products/platform/weather-bot-demo-cover.jpg" >
  <source
    src="https://gitee.com/chatopera/cskefu/attach_files/821755/download/weather-bot-demo.mp4"
    type="video/mp4;codecs=&quot;avc1.42E01E, mp4a.40.2&quot;"
  >
</video>
</br>
</br>

是不是很实用？如果你掌握了多轮对话设计器，就可以实现聊天机器人。

## 需求分析

首先，我们需要梳理一下需求：

1. 我想知道任意城市的天气信息，比如“今天上海天气怎么样”；

2. 我还比较关心空气，我可以通过“今天上海空气怎么样”获得空气质量信息；

3. 我想知道今天适不适合户外运动，就问“今天上海适合运动么”；

4. 如果我问了一个城市的天气状况，我还想继续询问这个城市更多信息，这样我不用每次都告诉机器人城市名称。

当然，我的每个意图都有多种表述方式，机器人能支持一些变化的问法。如果我的问题不够严谨，机器人还应该提醒我合理的表达。

## 调研提供天气信息查询的 API

现在很多服务以 API 的形式提供，从搜索引擎中查找“天气查询服务 API”，我们就能得到一些供应商，经过一些比较，我选择了和风天气，它数据丰富，免费额度大方。

<table class="image">
<caption align="bottom">和风天气</caption>
<tr><td><img width="800" src="../../../images/products/cde/cde-18.png" alt="和风天气"/></td></tr>
</table>

## AI 音箱

目前，智能音箱及技能商店较多，本次以一个智能音箱产品为例。

## 第一条规则

第一次打开多轮对话设计器后，我们看到如下的面板，我们称之为主面板。

<table class="image">
<caption align="bottom">和风天气</caption>
<tr><td><img width="800" src="../../../images/products/cde/cde-20.png" alt="和风天气"/></td></tr>
</table>

点击新建按钮，弹出创建机器人的表单：

<table class="image">
<caption align="bottom">创建聊天机器人</caption>
<tr><td><img width="800" src="../../../images/products/cde/cde-21.png" alt="创建聊天机器人"/></td></tr>
</table>

填入“SampleAppAskWeather”，语言选择“zh_CN”（简体中文），点击“确认”。然后我们就得到了一个聊天机器人。

<table class="image">
<caption align="bottom">聊天机器人</caption>
<tr><td><img width="800" src="../../../images/products/cde/cde-22.png" alt="聊天机器人"/></td></tr>
</table>

在操作中，有几个按钮：

- 管理：管理聊天机器人的多轮对话。

- 版本管理：管理不同版本的机器人，导出机器人和在不同版本之间进行比对。

- 环境变量：机器人函数中依赖的全局变量，这些变量在“设计对话”的阶段和在 IT 人员“部署到生产环境”下的值是不同的，比如一些接口服务的认证键值对。

- 发布：发布当前机器人为最新版本。

- 删除：将机器人删除。

点击“管理”，进入多轮对话管理页面，点击“新建对话”，在弹出的窗口中，填写“对话名称”为“weather”，点击“确认”。这时，我们看到了新建的对话，我们将修改它的内容完成天气对话服务。

<table class="image">
<caption align="bottom">创建对话</caption>
<tr><td><img width="800" src="../../../images/products/cde/cde-23.png" alt="创建对话"/></td></tr>
</table>

点击“编辑”，进入**对话编辑窗口**。在左侧的“脚本区域”，写下第一条规则。

```
+ 今天 (*) 天气 [怎么样]
- {keep} &#60;cap1&#62;天气挺好的
```

点击“保存”，这时右侧的“逻辑区域”有了变化，出现了一个线条，在线条左右两端分别是问题和答案。在“对话区域”，我们输入“今天北京天气怎么样”，点击发送，这时机器人回复了。

<table class="image">
<caption align="bottom">对话编辑窗口</caption>
<tr><td><img width="800" src="../../../images/products/cde/cde-24.png" alt="对话编辑窗口"/></td></tr>
</table>

从我们需求上看，这没什么用，但是它工作了，我们就一点点优化它。对于在这条规则中，我们使用的语法，(\*)代表一个通配符，<cap1>代表在回复中取通配符的值，[怎么样]是可有的字符串，{keep}代表这条规则始终生效，keep 涉及到对话的状态管理，我们将在文档中提供更多规则的描述，现在，读者看懂本示例就可以了。

## 添加函数

在多轮对话设计器中，怎么请求和风天气的数据呢？使用函数。函数是多轮对话支持的使用 JavaScript 实现的程序。

我们在“对话编辑窗口”点击函数，粘贴如下代码：

```
var WForewast = function (apiKey) {

    if (!apiKey) throw new Error('Invalid token, get it from http://www.heweather.com/my/service');
    this.key = apiKey;
}


WForewast.prototype.getWeatherByCity = function (city) {
    return new Promise((resolve, reject)=>{
        let url =  "https://free-api.heweather.com/v5/weather?city=" + encodeURIComponent(city) + "&key=" + this.key
        http
            .get(url)
            .then((res)=>{
                resolve(res.data.HeWeather5[0].suggestion);
            })
            .catch(function (err) {
                if (err) return reject(err);
            });
    })
}

const wf = new WForewast('182f1b6826d94c6285a489d2414f3ad0');


exports.getWeatherByCity = function(city, cb){
    debug("getWeatherByCity: %s", city);
    wf.getWeatherByCity(city)
        .then((suggestions)=>{
            cb(null, {
                text: suggestions["comf"]["txt"]
            })
        }, (err)=>{
            debug("error:%j", err)
            cb(null, {
                text: `很抱歉，没有获得${city}的天气信息。`
            })
        })
}

exports.getAirByCity = function(city, cb){
    debug("getAirByCity: %s", city);
    wf.getWeatherByCity(city)
        .then((suggestions)=>{
            cb(null, {
                text: suggestions["air"]["txt"]
            })
        }, (err)=>{
            cb(null, {
                text: `很抱歉，没有获得${city}的空气信息。`
            })
        })
}


exports.getSportByCity = function(city, cb){
    debug("getSportByCity: %s", city);
    wf.getWeatherByCity(city)
        .then((suggestions)=>{
            cb(null, {
                text: suggestions["sport"]["txt"]
            })
        }, (err)=>{
            cb(null, {
                text: `很抱歉，没有获得${city}的信息。`
            })
        })
}

exports.getDresscodeByCity = function(city, cb){
    debug("getDresscodeByCity: %s", city);
    wf.getWeatherByCity(city)
        .then((suggestions)=>{
            cb(null, {
                text: suggestions["drsg"]["txt"]
            })
        }, (err)=>{
            cb(null, {
                text: `很抱歉，没有获得${city}的信息。`
            })
        })
}
```

在函数中，我们实现了根据城市请求天气、空气质量、着装建议和运动建议的接口，分别是`getWeatherByCity`，`getAirByCity`，`getDresscodeByCity`和`getSportByCity`。

细心的读者会发现，在函数中，多轮对话设计器直接支持了 http，debug 作为工具类，发起网络请求和输出日志信息。这两个接口极大的扩展了函数的能力，我们也会在函数中详细描述它们的使用。

然后，回到“脚本区域”，修改一下规则，更新如下：

```
+ 今天 (*) 天气 [怎么样]
- {keep} ^getWeatherByCity(&#60;cap1&#62;)
```

在回复中，我们调用了`getWeatherByCity`，并且传入了城市名称。
接着，在“对话区域”，输入“今天北京天气怎么样”，回复与上次不一样了。

<table class="image">
<caption align="bottom">测试对话</caption>
<tr><td><img width="800" src="../../../images/products/cde/cde-25.png" alt="测试对话"/></td></tr>
</table>

这次，我们看到了期望的回复，正是从和风天气返回的北京今天的天气状况。

## 使用环境变量

在上面的函数中，我们有一个敏感的信息：和风天气的 API 密钥。在实际应用中，我们希望设**计阶段**和**部署阶段**，它的值是不同的。这时，就需要使用**环境变量**，环境变量正是为解决这个问题而设计的。

回到主面板，在“SampleAppAskWeather”操作中，点击环境变量，创建如下键值对：

<table class="image">
<caption align="bottom">设置环境变量</caption>
<tr><td><img width="800" src="../../../images/products/cde/cde-26.png" alt="设置环境变量"/></td></tr>
</table>

读者可以从和风天气获得该密钥，为验证用途，可以粘贴下面的值：

```
"HEWEATHER_URL": "https://free-api.heweather.com/v5",
"HEWEATHER_KEY": "182f1b6826d94c6285a489d2414f3ad0"
```

保存后，回到天气对话脚本的“对话编辑窗口”，在函数中，使用下面的脚本：

```
var WForewast = function (apiKey) {
    if (!apiKey) throw new Error('Invalid token, get it from http://www.heweather.com/my/service');
    this.key = apiKey;
}


WForewast.prototype.getWeatherByCity = function (city) {
    return new Promise((resolve, reject)=>{
        let url = config["HEWEATHER_URL"] + "/weather?city=" + encodeURIComponent(city) + "&key=" + this.key
        http
            .get(url)
            .then((res)=>{
                resolve(res.data.HeWeather5[0].suggestion);
            })
            .catch(function (err) {
                if (err) return reject(err);
            });
    })
}

const wf = new WForewast(config["HEWEATHER_KEY"]);


exports.getWeatherByCity = function(city, cb){
    debug("getWeatherByCity: %s", city);
    wf.getWeatherByCity(city)
        .then((suggestions)=>{
            cb(null, {
                text: suggestions["comf"]["txt"]
            })
        }, (err)=>{
            debug("error:%j", err)
            cb(null, {
                text: `很抱歉，没有获得${city}的天气信息。`
            })
        })
}



exports.getAirByCity = function(city, cb){
    debug("getAirByCity: %s", city);
    wf.getWeatherByCity(city)
        .then((suggestions)=>{
            cb(null, {
                text: suggestions["air"]["txt"]
            })
        }, (err)=>{
            cb(null, {
                text: `很抱歉，没有获得${city}的空气信息。`
            })
        })
}


exports.getSportByCity = function(city, cb){
    debug("getSportByCity: %s", city);
    wf.getWeatherByCity(city)
        .then((suggestions)=>{
            cb(null, {
                text: suggestions["sport"]["txt"]
            })
        }, (err)=>{
            cb(null, {
                text: `很抱歉，没有获得${city}的信息。`
            })
        })
}

exports.getDresscodeByCity = function(city, cb){
    debug("getDresscodeByCity: %s", city);
    wf.getWeatherByCity(city)
        .then((suggestions)=>{
            cb(null, {
                text: suggestions["drsg"]["txt"]
            })
        }, (err)=>{
            cb(null, {
                text: `很抱歉，没有获得${city}的信息。`
            })
        })
}
```

这次，代码内容和前一版本相比，使用了`config`对象，`config`是一个包含环境变量的 JSON 数据。所以，我们更加利于将来部署对话应用了。

## 支持更多对话

回想我们需要的几种天气信息，我们根据需求变更脚本，一个满足需求的脚本呈现如下：

```
// 技能介绍

+ 你知道哪些天气信息
- 我知道今天的空气，着装建议和适不适合运动

// 天气

+ 今天 (*) 天气 [怎么样]
- {keep} ^getWeatherByCity(&#60;cap1&#62;)

+ [今天] (天气|气候) [怎么样]
- {@__wf_guide_}

+ (*) 今天天气 [怎么样]
- {keep} ^getWeatherByCity(&#60;cap1&#62;)

    + (*) 空气 (*)
    % ^getWeatherByCity(&#60;cap1&#62;)
    - {keep} ^getAirByCity(&#60;p1cap1&#62;)


+ __wf_guide_
- {keep} 添加城市名哦，比如“今天北京天气怎么样”或者“北京天气怎么样”
- 我需要知道城市名称，比如“今天北京天气怎么样”或者“北京天气怎么样”
- 要告诉我城市名，比如“今天北京天气怎么样”或者“北京天气怎么样”


// 空气

+ [今天] 空气 [怎么样]
- {@__wf_guide_air}

+ (*) 今天空气 [怎么样]
- {keep} ^getAirByCity(&#60;cap1&#62;)

+ 今天 (*) 空气 [怎么样]
- {keep} ^getAirByCity(&#60;cap1&#62;)

+ __wf_guide_air
- {keep} 添加城市名哦，比如“今天北京空气怎么样”或者“北京空气怎么样”
- 我需要知道城市名称，比如“今天北京空气怎么样”或者“北京空气怎么样”
- 要告诉我城市名，比如“今天北京空气怎么样”或者“北京空气怎么样”


// 运动

+ [今天] 适(合|宜)运动(么|吗)
- {@__wf_guide_sport}

+ (*) 今天适(合|宜)运动(么|吗)
- {keep} ^getSportByCity(&#60;cap1&#62;)

+ 今天 (*) 适(合|宜)运动(么|吗)
- {keep} ^getSportByCity(&#60;cap1&#62;)

+ __wf_guide_sport
- {keep} 添加城市名哦，比如“今天北京适合运动么”或者“北京今天适合运动么”
- 我需要知道城市名称，比如“今天北京适合运动么”或者“北京今天适合运动么”
- 要告诉我城市名，比如“今天北京适合运动么”或者“北京今天适合运动么”


// 衣着

+ [今天] 适(合|宜)穿什么
- {@__wf_guide_dresscode}

+ (*) 今天适(合|宜)穿什么
- {keep} ^getDresscodeByCity(&#60;cap1&#62;)

+ [今天] (*) 适(合|宜)穿什么
- {keep} ^getDresscodeByCity(&#60;cap1&#62;)


+ __wf_guide_dresscode
- {keep} 添加城市名哦，比如“今天北京适合穿什么”或者“北京今天适合穿什么”
- 我需要知道城市名称，比如“今天北京适合穿什么”或者“北京今天适合穿什么”
- 要告诉我城市名，比如“今天北京适合穿什么”或者“北京今天适合穿什么”
```

这也就是我们在天气查询机器人 Demo 中看到的机器人的脚本，在设计过程中，我们通过对话区域来测试机器人的回复是否符合预期，我们通过逻辑窗口来查看当前机器人的思维逻辑导图，当前机器人对话的状态会被高量，被命中的规则呈现为路径。

<table class="image">
<caption align="bottom">机器人思维逻辑</caption>
<tr><td><img width="800" src="../../../images/products/cde/cde-27.png" alt="机器人思维逻辑"/></td></tr>
</table>

另外，在设计过程中，每次保存自动为脚本和函数生成快照，使用快照下拉列表，我们能方便的回退。

<table class="image">
<caption align="bottom">快照管理</caption>
<tr><td><img width="800" src="../../../images/products/cde/cde-28.png" alt="快照管理"/></td></tr>
</table>

在**多轮对话设计器**中，业务人员可以更专注于聊天机器人的对话逻辑满足需求。

## 发布机器人

现在，有了可以工作的脚本，我们想发布一个版本，这时回到主面板，点击“发布”，填入如下信息，点击“确认”。

<table class="image">
<caption align="bottom">发布机器人</caption>
<tr><td><img width="800" src="../../../images/products/cde/cde-29.png" alt="发布机器人"/></td></tr>
</table>

## 导出机器人

最终，我们需要得到一个“服务”，它能时刻被访问，以及和 AI 音箱集成。我们需要将天气机器人导出为对话应用，然后部署到<a href="https://docs.chatopera.com/chatbot-engine.html" target="_blank">智能问答引擎</a>。在主面板，点击**版本管理**，我们看到操作中有三项。

- 对比差异:在多个版本中比较差异，包括脚本和函数。

- 导出：将机器人导出为对话应用文件。

- 覆盖：使用这个版本覆盖当前机器人，包括脚本和函数等。

多轮对话设计器支持导出机器人后，极大的方便了分发和部署。

## 评论

<script src="https://utteranc.es/client.js"
        repo="chatopera/docs"
        issue-term="pathname"
        label="Comment"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
