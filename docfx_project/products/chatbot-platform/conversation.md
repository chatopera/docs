# 多轮对话

多轮对话是 Chatopera 云服务的特色功能，聊天机器人开发者可以使用"多轮对话设计器"实现满足企业业务需求的聊天机器人。多轮对话基于规则，使用*对话脚本*，并结合 JavaScript*函数*实现固定话术和固定流程的聊天服务。

<table class="image">
    <caption align="bottom">多轮对话管理</caption>
    <tr>
        <td><img width="800" src="../../images/platform/1.png" alt="" /></td>
    </tr>
</table>

## 多轮对话设计器

**多轮对话设计器** (Conversation Designer）是以自然语言为输入，定义聊天机器人逻辑思维的工具。它可以很方便的通过 Chatopera 支持的脚本语法描述复杂的对话逻辑，并且通过函数的形式集成企业的其它服务。**企业的业务人员**可以很容易的学习脚本语法，制作满足企业业务需求的聊天机器人。

**多轮对话设计器**是设计满足业务需求的对话机器人的 PC 端应用程序，现已支持 Windows 和 Mac OSX 平台。多轮对话能力是聊天机器人模仿人的对话能里的一大挑战，在复杂的上下文和需要很多背景知识的前提下，现有的人工智能技术是无能为力的，在 Chatopera，我们相信在企业服务中，当话术或流程固定的情况下，依赖 Chatopera 的产品可以输出用对话完成任务的服务，比如用对话完成点餐、报销、请假。这些对话可以在企业的聊天工具中，也可以通过智能音箱的等其他客户端。

## 安装

仅支持 Mac OSX 和 Windows 操作系统。

### 下载地址

下载地址：

| 版本   | 操作系统 | 下载                                                                                                                                                               |
| ------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| v1.0.1 | Mac OSX  | <a href="http://cdndownload.chatopera.com/sw/product/%E5%A4%9A%E8%BD%AE%E5%AF%B9%E8%AF%9D%E8%AE%BE%E8%AE%A1%E5%99%A8-1.0.0.dmg" target="_blank">链接</a>           |
| v1.0.1 | Windows  | <a href="http://cdndownload.chatopera.com/sw/product/%E5%A4%9A%E8%BD%AE%E5%AF%B9%E8%AF%9D%E8%AE%BE%E8%AE%A1%E5%99%A8%20Setup%201.0.0.exe" target="_blank">链接</a> |

- MacOS：`dmg`为文件后缀的安装文件，双击打开，根据安装向导安装。

- Windows：`exe`为文件后缀可执行文件，双击打开，根据安装向导安装。

### 启动应用

- 安装完打开应用程序，如下图：

<table class="image">
<caption align="bottom">多轮对话设计器打开后页面</caption>
<tr><td><img width="800" src="../../images/products/cde/mac-homepage.png" alt="多轮对话设计器打开后页面"/></td></tr>
</table>

### 可能遇到的问题

**1. Macos 上首次启动警告**

<table class="image">
<caption align="bottom">MacOS权限问题</caption>
<tr><td><img width="800" src="../../images/products/cde/mac-install-0.png" alt="macos权限问题"/></td></tr>
</table>

**解决方案**

在应用中心，找到“多轮对话设计器”：

<table class="image">
<caption align="bottom">应用中心</caption>
<tr><td><img width="800" src="../../images/products/cde-launchpad-1.png" alt="应用中心"/></td></tr>
</table>

选择“多轮对话设计器”并且右键：

<table class="image">
<caption align="bottom">右键打开</caption>
<tr><td><img width="800" src="../../images/products/cde-launchpad-2.png" alt="右键打开"/></td></tr>
</table>

点击“打开”(“Open”)。

## 快速开始

下载安装包后，双击打开，进入安装向导。

安装完打开应用图标后进入主面板，如下图：

<table class="image">
<caption align="bottom">应用主面板</caption>
<tr><td><img width="800" src="../../images/products/cde/cde-1.png" alt="应用主面板"/></td></tr>
</table>

### 导入示例程序

下载示例程序包文件：小叮当-1.0.0-conversations.c66

<a href="https://github.com/chatopera/conversation-sampleapp/raw/master/%E5%B0%8F%E5%8F%AE%E5%BD%93-1.0.0-conversations.c66" target="_blank"> https://github.com/chatopera/conversation-sampleapp</a>

<table class="image">
<caption align="bottom">示例程序下载地址</caption>
<tr><td><img width="800" src="../../images/products/cde/cde-2.png" alt="示例程序下载地址"/></td></tr>
</table>

在主面板点击界面的右上方的“导入”按钮，选择刚才下载的示例程序*小叮当-1.0.0-conversations.c66*如图：

<table class="image">
<caption align="bottom">导入对话框</caption>
<tr><td><img width="800" src="../../images/products/cde/cde-3.png" alt="导入对话框"/></td></tr>
</table>

导入成功，可以看到在聊天机器人界面有一条数据显示，“名字 小叮当”等；点击小叮当的“管理”按钮，可以看到它的多轮对话列表，包括：chatopera，profile，weather。如下图：

<table class="image">
<caption align="bottom">多轮对话列表</caption>
<tr><td><img width="800" src="../../images/products/cde/cde-5.png" alt="多轮对话列表"/></td></tr>
</table>

| 对话      | 功能                      |
| --------- | ------------------------- |
| chatopera | 关于 Chatopera 的公司信息 |
| profile   | 机器人的画像              |
| weather   | 提供天气查询功能的对话    |

### 测试示例程序

可以针对上面的三个多轮对话，进行一番聊天测试，下面测试主要以“问天气”为例子。

选择 “weather” 对话的编辑按钮，进入 weather 对话的编辑窗口，包括：

| 概念     | 描述                                                       |
| -------- | ---------------------------------------------------------- |
| **脚本** | 按照多轮对话语法规则来描述机器人对话逻辑                   |
| **函数** | 执行 JavaScript 代码的环境，声明的接口可以直接从脚本中调用 |
| **日志** | 函数中*debug*方法的输出                                    |
| **逻辑** | 聊天机器人的思维逻辑导图，保存脚本后自动生成               |
| **对话** | 实时测试聊天机器人的窗口                                   |

在“对话”区域的下方输入框输入：_你知道哪些天气信息_

<table class="image">
<caption align="bottom">多轮对话编辑窗口</caption>
<tr><td><img width="800" src="../../images/products/cde/cde-6.png" alt="多轮对话编辑窗口"/></td></tr>
</table>

点击“发送”按钮，可以看到对话区域有了问答的信息流，并且“逻辑”区域也有了对话状态，对话路径显示“绿色”高亮。

<table class="image">
<caption align="bottom">测试对话</caption>
<tr><td><img width="800" src="../../images/products/cde/cde-7.png" alt="测试对话"/></td></tr>
</table>

在此界面可以进行多轮对话测试，如下截图：

<table class="image">
<caption align="bottom">多轮对话</caption>
<tr><td><img width="800" src="../../images/products/cde/cde-8.png" alt="多轮对话"/></td></tr>
</table>

### 增加新的对话

> 测试新对话

```
我：今天北京适合游玩么？
机器人：风清气爽，当然可以啊～
```

在脚本区域可以自行设计脚本，非常简单，例如增加：

<pre class="prettyprint">
+ 今天 (*) 适合游玩么？
- 风清气爽，当然可以啊～
</pre>

点击界面上方“保存”按钮，会使得刚才定义的对话生效，并且可以在聊天区域直接测试。

### 保存新版本

刚才点击“保存”按钮时，同时将 weather 的对话生成一个快照，我们随时可以回退到某个快照。

<table class="image">
<caption align="bottom">查看快照</caption>
<tr><td><img width="800" src="../../images/products/cde/cde-11.png" alt="查看快照"/></td></tr>
</table>

回到聊天机器人列表页面，可以点击“发布”按钮，可以将当前聊天机器人生成新版本，相关的信息如图：

<table class="image">
<caption align="bottom">发布新版本</caption>
<tr><td><img width="800" src="../../images/products/cde/cde-12.png" alt="发布新版本"/></td></tr>
</table>

点击上图的“确认”按钮，发布新版本成功，点击“版本管理”，看到刚才发布的 1.0.1 版本的信息。

### 各个版本之间比较

对于聊天机器人的发布的各个版本差异，可以使用版本比较工具，比较具体的差异，包括：脚本比较和函数比较。
点击上图 1.0.1 对应的“对比差异”，可以“对比变化”界面，其中分为三个部分，

<pre class="prettyprint">
    - “左上”为被对比的参考版本；本例子为:1.0.0

    - “右上”为要对比的目标版本，本例子为:1.0.1

    - “下方”为两版本数据的差异，具体：

        * 绿色：新增的内容；

        * 红色：删除的内容；

        * 灰色：没有变化的内容；
</pre>

刚进入“对比变化”界面，默认对比的是：函数，本例子请在选择“版本号”的右边切换“脚本”为“对话”，如图：

<table class="image">
<caption align="bottom">版本之间比较差异</caption>
<tr><td><img width="800" src="../../images/products/cde/cde-13.png" alt="版本之间比较差异"/></td></tr>
</table>

对比的差异部分为绿色，表示新增。

### 导出特定版本

多轮对话设计器属于设计阶段，在机器人满足需求后，可以导出为对话应用.c66 文件，方便分发和部署。在生产环境，导入到<a href="https://docs.chatopera.com/chatbot-engine.html" target="_blank">智能问答引擎</a>中，作为多轮对话应用的运行时。

在“版本管理”界面，选择刚才发布的“1.0.1”的“导出”，可以选择一个路径存储该导出的文件，如图：

<table class="image">
<caption align="bottom">导出文件</caption>
<tr><td><img width="800" src="../../images/products/cde/cde-14.png" alt="导出文件"/></td></tr>
</table>

## 脚本语法

### 术语

在正式介绍脚本语法前，我们先来认识下面的术语：

| 概念         | 描述                                                                                 |
| ------------ | ------------------------------------------------------------------------------------ |
| **对话**     | 满足设定需求的多轮对话                                                               |
| **输入**     | 用户向聊天机器人发送的消息的文字形式                                                 |
| **触发器**   | 匹配用户输入文字的字符串，可以声明槽位，当用户的输入发生时，会按照算法顺序匹配触发器 |
| **回复**     | 机器人回复用户输入的文字                                                             |
| **多轮对话** | 根据上一次回复的状态，声明下轮对话的优先匹配规则                                     |
| **函数**     | 可以从脚本中接受输入，并通过 JavaScript 执行任务返回结果的代码                       |

<table class="image">
<caption align="bottom">对话</caption>
<tr><td><img width="800" src="../../images/products/cde/cde-15.png" alt="对话"/></td></tr>
</table>

<pre class="prettyprint">
    

</pre>

### 触发器

触发器是对话的基础，当用户向聊天机器人发送一条消息时，机器人引擎会从所有定义的触发器中找到匹配的一个。在机器人引擎中，触发器用半角字符加号（ + ）表示。机器人的回答用半角字符减号（ - ）表示。

例如，我们可以这样定义一个对话：

<pre class="prettyprint">
+ 晚饭吃什么
- 北京烤鸭    
</pre>

**注意**：这里（ + ）和（ - ）和文字之间需要隔一个空格。

### 槽位

为了让触发器能适应复杂的需求，机器人引擎使用槽位规则，槽位既能让规则具有更好的匹配能力，也能让回复和函数中使用不同槽位的值。

**注意**：下面的某些槽位左右带有空格，这些空格是必须的。

#### 通用槽位

> 解释示例：通用槽位

```
匹配：客服你好
匹配：你好
匹配：你好吗
```

通用槽位会匹配零到无穷个字符、单词。此处的输入也会被系统捕获或者存储。

<pre class="prettyprint">
+ (*) 你好 (*)
- 欢迎光临
</pre>

#### 确定长度槽位

> 解释示例：确定长度槽位

```
匹配：早安北京
不匹配：早安乌鲁木齐
```

如果你知道你想要的字符长度，可以试试确定长度槽位。此处的槽位可以被系统捕获，而且可以在回答中使用

语法为：**\*n**, 其中 n 代表长度。

<pre class="prettyprint">
+ 早安 *2
- 早安
</pre>

#### 可控长度槽位

> 解释示例：可控长度槽位

```
匹配：早安
匹配：早安北京
匹配：早安哈尔滨
匹配：早安乌鲁木齐
不匹配：早安君士坦丁堡
```

如果只想匹配一些字符，可控长度的槽位是个不错的选择。语法为：**\*~n**, n 代表你想匹配的最大长度

<pre class="prettyprint">
+ 早安 *~4
- 早安
</pre>

#### 区间槽位

> 解释示例：区间槽位

```
匹配：早安北京
匹配：早安乌鲁木齐
不匹配：早安
```

如果想匹配一个确定的区间，比如 2 到 4 个字符之间，区间槽位绝对可以满足需要。语法为：**\*(最短-最长)**，此槽位可以被系统捕获和用在回复中。

<pre class="prettyprint">
+ 早安 *(2-4)
- 早安
</pre>

#### 必选项

> 解释示例：必选项

```
匹配：早安北京
不匹配：早安西安
不匹配：早安
```

必选项用在你有一系列可选项，但是必须有一个被匹配。输入中的可选项会被系统捕获和用在回复中

<pre class="prettyprint">
+ 早安(北京|上海|天津)
- 早安
</pre>

#### 可选项

> 解释示例：可选项

```
匹配：早安北京
匹配：早安美丽的北京
不匹配：早安热闹的北京
```

可选项用来确定一些额外的内容

<pre class="prettyprint">
+ 早安 [美丽的] 北京
- 早安
</pre>

### 回复

在触发器中，我们已经学到了怎么添加一个回答。事实上你可以添加任意数量的回答。这里还有一些高级功能可以帮助你完成更多的任务。

#### 简单形式

<pre class="prettyprint">
+ 在吗
- 你好，在的
</pre>

如果添加了多个回答，系统会从中随机挑选一个作为回复, 然后丢掉这个回答。

<pre class="prettyprint">
+ 在吗
- 亲，在的
- 亲，有什么需要帮助
- 你好，请问遇到什么问题了吗？
</pre>

所谓丢掉这个答案，是指机器人针对同一个用户，在半个小时内再次匹配上该触发器时，选择回复时，不考虑使用过的回复。
在一个**触发器**中声明多个回复后，保存，**逻辑**中将出现分支。

<table class="image">
<caption align="bottom">机器人对话逻辑</caption>
<tr><td><img width="800" src="../../images/products/cde/cde-16.png" alt="机器人对话逻辑"/></td></tr>
</table>

如果不想让系统丢掉使用过的回复，可以在回复前添加{keep}。

<pre class="prettyprint">
+ 在吗
- {keep} 亲，在的
- 亲，有什么需要帮助
- 你好，请问遇到什么问题了吗？
</pre>

也可以在触发器前添加*{keep}*，就不用在每个回答中都添加了

<pre class="prettyprint">
+ {keep} 在吗
- 亲，在的
- 亲，有什么需要帮助
- 你好，请问遇到什么问题了吗？
</pre>

如果回答很长，可以通过“^”分割以方便可读性。可以通过“\n”实现换行

<pre class="prettyprint">
+ 在吗
- 你好，这里是客服中心，\n
^ 请问遇到什么问题了吗？    
</pre>

它等价于

<pre class="prettyprint">
+ 在吗
- 你好，这里是客服中心，请问遇到什么问题了吗？
</pre>

#### 槽位取值

> 解释示例：槽位取值

```
匹配：小明比小红高
回答：你确定小明比小红高吗？
```

有些时候，在回答中需要使用输入中的槽位值，这时可以使用&#60;cap&#62;达到目的。

<pre class="prettyprint">
+ 我是 *~3
- 你好，&#60;cap&#62;
</pre>

如果用户输入，“我是张三”，那么系统将回复“你好，张三”，当有多个槽时，可以使用多个&#60;cap&#62;。

<pre class="prettyprint">
+ *2 比 *2 高
- 你确定&#60;cap1&#62;比&#60;cap2&#62;高吗？
</pre>

在对话中，我们有时候会需要以前的槽位值，看一下下面这个例子：

<pre class="prettyprint">
+ 我叫 *~3
- 你好，&#60;cap1&#62;

    + 你猜我叫什么？
    % 你好，&#60;cap1&#62;
    - 你刚说了，你叫&#60;p1cap1&#62;
</pre>

&#60;pNcapM&#62;代表了以前的槽位。其中*N*代表在在对话中之前的问答，*M*代表捕获的位移。

<table class="image">
<caption align="bottom">槽位取值</caption>
<tr><td><img width="800" src="../../images/products/cde/cde-16.png" alt="槽位取值"/></td></tr>
</table>

此处，还有一个重要语法：**%**。(%) 开头的句子代表触发器“你猜我叫什么？”只服务于“你好，&#60;cap1&#62;”作为回复时，它会被优先匹配。上一轮对话的回复通过(%)的方式指定了接下来的逻辑，形成多轮对话。 关于(%)的用法，后文还会进行详细介绍，此处，读者只需要掌握从上下文的槽位取值便可。

另外，(+, %, -) 前的空格不是必须的，在多轮对话中，空格可以增强脚本的可读性，但是系统是忽略的。

#### 重定向 {@\_\_reply\_\_}

有些时候，在问答对中重用一些回复能使编写脚本效率更高，这时可以定义一个问答对，并在脚本其它位置引用它。

<pre class="prettyprint">
+ 在吗
- {@__greeting__} 请问有什么能帮助您？

+ __greeting__
- 亲，在的。
- 你好，客服小美为您服务
- 亲亲，稍等，客服马上就到
</pre>

引用的方式就是 “{@触发器}”，触发器中的下划线不是必须的，但是它能增强脚本的可读性。

#### 多轮对话

在实际应用中，和机器人聊天时，很可能要通过多轮对话完成一个任务。我们用(%)来定位之前回复，声明新的触发器，(%)后的内容是和某个回复内容一样的字符串。

<pre class="prettyprint">
+ *
- 您身高多少

  + *(3-5)
  % 您身高多少
  - 我的身高也是&#60;cap&#62;
</pre>

让我们一起看看这个例子：

1. 当用户输入任何文字，我们用通用槽位触发回答,然后系统回复“您身高多少”。

2. 当用户继续输入时，系统会先从历史中查看之前的回复中是否有对应的上下文，在这里指的是“% 您身高多少”

3. 最后，如果用户输入 3 到 5 个字符，系统匹配触发器“+ \*(3-5)”, 并且回复“我也是&#60;cap&#62;”。“&#60;cap&#62;”代表的就是用户输入的内容。

### 函数

函数是一个强大而有趣的设计。在回复中，可以使用函数来获取整条消息对象，用户对象或者其它资源，比如数据库。把槽位值当做变量传给函数，例如下面这个例子：

<pre class="prettyprint">
+ 我的用户名是 *(2-10)
- ^getUserAccount(&#60;cap&#62;)
</pre>

所以，调用函数的方式就是使用“^”。在函数的编辑窗口中，可以这样定义：

<pre class="prettyprint">
exports.getUserAccount(account, cb) {
  cb(null, "对不起，系统没有找到" + account);
}
</pre>

函数的声明中，参数列表首先是槽位的值，可以传多个，然后最后一个参数始终是回调函数(cb)，cb 的参数列表为(error, text)。text 作为文本添加到回复中。

#### 复合函数

在回复中，可以添加任意多的函数，比如

<pre class="prettyprint">
+ ...
- 联合 ^callFunction1() 和 ^callFunction2(&#60;cap1&#62;)
</pre>

#### 嵌套函数

在函数的回调函数中，函数名会被解析成对应的函数，所以放心的在回复中添加任意合法的函数，比如在脚本中这样写：

<pre class="prettyprint">
+ ...
- ^nestedAFunction()
</pre>

然后，在函数中，定义如下：

<pre class="prettyprint">
exports.nestedAFunction = function(cb) {
  cb(null, "张三 ^nestedBFunction()");
}
exports.nestedBFunction = function(cb) {
  cb(null, "和李四");
}
</pre>

### 总结

以上是多轮对话设计器 v1.x 版本中支持的脚本语法，这些语法能够保证业务人员实现满足需求的聊天机器人，除了函数部分的有一点门槛外，其它内容是非常容易掌握的。对于函数，只需要一点 JavaScript 基础知识，就可以掌握。

## 示例应用

本节介绍使用多轮对话设计器实现一个“聊天机器人”的具体过程。我们以实现天气问答机器人为例，我们选择这个场景并不是因为它简单，而是因为它容易理解，使用多轮对话设计器可以实现更复杂，更有价值的应用。我们先一睹为快，这个机器人是什么样子的。

<table class="image">
<caption align="bottom">视频：天气查询机器人Demo</caption>
<tr><td><embed src="https://imgcache.qq.com/tencentvideo_v1/playerv3/TPout.swf?max_age=86400&v=20161117&vid=a0717l5z53k&auto=0" allowFullScreen="true" quality="high" width="480" height="400" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed></td></tr>
</table>

是不是很实用？如果你掌握了多轮对话设计器，就可以实现聊天机器人。

### 需求分析

首先，我们需要梳理一下需求：

1. 我想知道任意城市的天气信息，比如“今天上海天气怎么样”；

2. 我还比较关心空气，我可以通过“今天上海空气怎么样”获得空气质量信息；

3. 我想知道今天适不适合户外运动，就问“今天上海适合运动么”；

4. 如果我问了一个城市的天气状况，我还想继续询问这个城市更多信息，这样我不用每次都告诉机器人城市名称。

当然，我的每个意图都有多种表述方式，机器人能支持一些变化的问法。如果我的问题不够严谨，机器人还应该提醒我合理的表达。

### 调研提供天气信息查询的 API

现在很多服务以 API 的形式提供，从搜索引擎中查找“天气查询服务 API”，我们就能得到一些供应商，经过一些比较，我选择了和风天气，它数据丰富，免费额度大方。

<table class="image">
<caption align="bottom">和风天气</caption>
<tr><td><img width="800" src="../../images/products/cde/cde-18.png" alt="和风天气"/></td></tr>
</table>

### AI 音箱

Chatopera 与杭州任你说科技达成战略合作伙伴关系，所以，我们的对话系统产品与任你说音箱可以直接集成。

<table class="image">
<caption align="bottom">任你说官网</caption>
<tr><td><img width="800" src="../../images/products/cde/cde-19.png" alt="任你说官网"/></td></tr>
</table>

### 第一条规则

第一次打开多轮对话设计器后，我们看到如下的面板，我们称之为主面板。

<table class="image">
<caption align="bottom">和风天气</caption>
<tr><td><img width="800" src="../../images/products/cde/cde-20.png" alt="和风天气"/></td></tr>
</table>

点击新建按钮，弹出创建机器人的表单：

<table class="image">
<caption align="bottom">创建聊天机器人</caption>
<tr><td><img width="800" src="../../images/products/cde/cde-21.png" alt="创建聊天机器人"/></td></tr>
</table>

填入“小叮当”，当前多轮对话设计器支持中文(zh_CN)和英文(en_US)，我们选择“zh_CN”，点击“确认”。然后我们就得到了一个聊天机器人。

<table class="image">
<caption align="bottom">聊天机器人</caption>
<tr><td><img width="800" src="../../images/products/cde/cde-22.png" alt="聊天机器人"/></td></tr>
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
<tr><td><img width="800" src="../../images/products/cde/cde-23.png" alt="创建对话"/></td></tr>
</table>

点击“编辑”，进入**对话编辑窗口**。在左侧的“脚本区域”，写下第一条规则。

<pre class="prettyprint">
+ 今天 (*) 天气 [怎么样]
- {keep} &#60;cap1&#62;天气挺好的
</pre>

点击“保存”，这时右侧的“逻辑区域”有了变化，出现了一个线条，在线条左右两端分别是问题和答案。在“对话区域”，我们输入“今天北京天气怎么样”，点击发送，这时机器人回复了。

<table class="image">
<caption align="bottom">对话编辑窗口</caption>
<tr><td><img width="800" src="../../images/products/cde/cde-24.png" alt="对话编辑窗口"/></td></tr>
</table>

从我们需求上看，这没什么用，但是它工作了，我们就一点点优化它。对于在这条规则中，我们使用的语法，(\*)代表一个槽位，<cap1>代表在回复中取槽位的值，[怎么样]是可有的字符串，{keep}代表这条规则始终生效，keep 涉及到对话的状态管理，我们将在文档中提供更多规则的描述，现在，读者看懂本示例就可以了。

### 添加函数

在多轮对话设计器中，怎么请求和风天气的数据呢？使用函数。函数是多轮对话支持的使用 JavaScript 实现的程序。

我们在“对话编辑窗口”点击函数，粘贴如下代码：

<pre class="prettyprint">
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
</pre>

在函数中，我们实现了根据城市请求天气、空气质量、着装建议和运动建议的接口，分别是`getWeatherByCity`，`getAirByCity`，`getDresscodeByCity`和`getSportByCity`。

细心的读者会发现，在函数中，多轮对话设计器直接支持了 http，debug 作为工具类，发起网络请求和输出日志信息。这两个接口极大的扩展了函数的能力，我们也会在函数中详细描述它们的使用。

然后，回到“脚本区域”，修改一下规则，更新如下：

<pre class="prettyprint">
+ 今天 (*) 天气 [怎么样]
- {keep} ^getWeatherByCity(&#60;cap1&#62;)
</pre>

在回复中，我们调用了`getWeatherByCity`，并且传入了城市名称。
接着，在“对话区域”，输入“今天北京天气怎么样”，回复与上次不一样了。

<table class="image">
<caption align="bottom">测试对话</caption>
<tr><td><img width="800" src="../../images/products/cde/cde-25.png" alt="测试对话"/></td></tr>
</table>

这次，我们看到了期望的回复，正是从和风天气返回的北京今天的天气状况。

### 使用环境变量

在上面的函数中，我们有一个敏感的信息：和风天气的 API 密钥。在实际应用中，我们希望设**计阶段**和**部署阶段**，它的值是不同的。这时，就需要使用**环境变量**，环境变量正是为解决这个问题而设计的。

回到主面板，在“小叮当”操作中，点击环境变量，创建如下键值对：

<table class="image">
<caption align="bottom">设置环境变量</caption>
<tr><td><img width="800" src="../../images/products/cde/cde-26.png" alt="设置环境变量"/></td></tr>
</table>

读者可以从和风天气获得该密钥，为验证用途，可以粘贴下面的值：

<pre class="prettyprint">
"HEWEATHER_URL": "https://free-api.heweather.com/v5",
"HEWEATHER_KEY": "182f1b6826d94c6285a489d2414f3ad0"
</pre>

保存后，回到天气对话脚本的“对话编辑窗口”，在函数中，使用下面的脚本：

<pre class="prettyprint">
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
</pre>

这次，代码内容和前一版本相比，使用了`config`对象，`config`是一个包含环境变量的 JSON 数据。所以，我们更加利于将来部署对话应用了。

### 支持更多对话

回想我们需要的几种天气信息，我们根据需求变更脚本，一个满足需求的脚本呈现如下：

<pre class="prettyprint">
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
</pre>

这也就是我们在天气查询机器人 Demo 中看到的机器人的脚本，在设计过程中，我们通过对话区域来测试机器人的回复是否符合预期，我们通过逻辑窗口来查看当前机器人的思维逻辑导图，当前机器人对话的状态会被高量，被命中的规则呈现为路径。

<table class="image">
<caption align="bottom">机器人思维逻辑</caption>
<tr><td><img width="800" src="../../images/products/cde/cde-27.png" alt="机器人思维逻辑"/></td></tr>
</table>

另外，在设计过程中，每次保存自动为脚本和函数生成快照，使用快照下拉列表，我们能方便的回退。

<table class="image">
<caption align="bottom">快照管理</caption>
<tr><td><img width="800" src="../../images/products/cde/cde-28.png" alt="快照管理"/></td></tr>
</table>

在**多轮对话设计器**中，业务人员可以更专注于对话机器人的对话逻辑满足需求。

### 发布机器人

现在，有了可以工作的脚本，我们想发布一个版本，这时回到主面板，点击“发布”，填入如下信息，点击“确认”。

<table class="image">
<caption align="bottom">发布机器人</caption>
<tr><td><img width="800" src="../../images/products/cde/cde-29.png" alt="发布机器人"/></td></tr>
</table>

### 导出机器人

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
