## `Chatbot` 类接口规范

### 发送请求

`Chatbot`实例的核心接口是`command`，以下也使用`Chatbot#command`来指这个接口，该接口是对 RestAPI Request 的高级封装，内部完成**签名认证**，**RequestHeaders**和**RequestBody**等处理。

<h4><font color="purple">接口规范</font></h4>

```API
result = chatbot.command(method, path [, body])
```

> **提示：** result 返回在 Node.js 中使用`await`或`Promise`，参考[快速开始](/products/chatbot-platform/integration/quick-get-start.html)；其它语言直接用 `=` 便可获取。

<h4><font color="purple">参数说明</font></h4>

| name   | type           | required | description                                                                                  |
| ------ | -------------- | -------- | -------------------------------------------------------------------------------------------- |
| method | string         | &#10004; | 对于资源的具体操作类型，由 HTTP 动词表示。有效值包括`GET`，`POST`，`PUT`，`DELETE`和`HEAD`等 |
| path   | string         | &#10004; | 资源的执行路径，通常包含资源实体名称或唯一标识，也可能在 `path`中使用`queryString`传递参数   |
| body   | `JSON`数据结构 | &#10067; | `body` 是请求中的数据，对应 RestAPI 中的 Http Body                                           |

`method`不同动词代表的含义一般如下：

- GET - 从服务器取出一项或多项资源；
- POST - 在服务器创建一个资源；
- PUT - 在服务器更新一个资源；
- DELETE - 在服务器删除一个资源。

还有更多类型的`method`，没有上述几种常用，在此不进行赘述。

`queryString`是 URL 的一部分。典型的 URL 看起来像这样: <font color="green">http://server/resource?</font><font color="blue">foo=A&bar=B</font>。其中，<font color="blue">foo=A&bar=B</font>就是`queryString`，通常用来传递参数，这个例子中包含两个参数：`foo`值为`A`；`bar`值为`B`。在下文中，`path`参数中可能包含`queryString`，形式如<font color="blue">foo={{var1}}&bar={{var2}}</font>，需要把`{{var1}}`和`{{var2}}`替换为实际值。

`body`数据是 JSON 格式的，不同语言对于 JSON 格式支持方式不同。[JSON](https://www.json.org/json-en.html)是一种轻量级的数据交换格式，描述了使用键值对、数组、字符串、数字、日期和布尔类型等值存储对象。[JSON](https://www.json.org/json-en.html)在不同语言下，等价数据结构如下。

| 语言       | JSON Object                                                                            | JSON Array                                                                            |
| ---------- | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| JavaScript | `{...}`                                                                                | `[...]`                                                                               |
| Java       | [org.json.JSONObject](https://www.tutorialspoint.com/org_json/org_json_jsonobject.htm) | [org.json.JSONArray](https://www.tutorialspoint.com/org_json/org_json_jsonobject.htm) |
| PHP        | 基本类型`array`                                                                        | 基本类型`array`                                                                       |
| Python     | 基本类型`dict`                                                                         | 基本类型`list`                                                                        |
| Go         | `map[string]interface{}`                                                               | `[]map[string]interface{}`                                                            |

**下文表述时，统一使用`JSON`，`JSON Object`和`JSON Array`代表 JSON 数据结构和其不同语言下的等价数据结构。**

> **提示：** 相对而言，JSON 等价的数据结构，在获取`JSON Object`的键值或`JSON Array`的长度和成员时，语法不同，但都易于掌握。在使用时，参考不同 SDK 的[示例程序](/products/chatbot-platform/integration/index.html#下载-sdk)。

**`body`是否必填以及是`JSON Object`还是`JSON Array`，取决于`method`和`path`的值，不同`method`和`path`的组合对应了不同的接口功能，满足不同需求，下文将介绍满足各种需求的`method`和`path`，并各个说明`body`参数。**

### 返回值

**返回值**即请求结果，针对接口定义，`Chatbot#command`的返回值`result`是 `JSON Object`，并有以下属性。

| key            | type   | description                                                                                                           |
| -------------- | ------ | --------------------------------------------------------------------------------------------------------------------- |
| `rc`           | int    | response code，返回码，大于等于 0 的正整型。`0`代表服务器端按照请求描述，正常返回结果；`rc` 不等于 0 是代表异常返回。 |
| `data`         | JSON   | 数据资源。正常返回时，服务器端执行逻辑成功，比如查询时，`data`就是查询结果。                                          |
| `msg`          | string | 消息，当服务器端执行请求成功，并且不需要返回数据资源时，通过 `msg`代表文本信息，比如提示信息。                        |
| `error`        | string | 异常消息，当服务器端返回异常时，具体出错信息包含在`error`中。                                                         |
| `status`       | JSON   | 全局任务的状态信息。                                                                                                  |
| `total`        | int    | 分页，所有数据记录条数。                                                                                              |
| `current_page` | int    | 分页，当前页码，（分页从 1 开始）。                                                                                   |
| `total_page`   | int    | 分页，所有页数。                                                                                                      |

每次请求结果中，`rc`是必含有的属性，其它属性为可能含有。不同`rc`的正整数形代表不同的异常，`data`、`status`以及分页信息，则因`method`和`path`而异，以下进行详细介绍。

> **提示：** 不同语言对返回值可能进行了封装，但是不离其宗，都是基于以上定义，比如 Java SDK 中，定义`com.chatopera.bot.sdk.Response`作为`Chatbot#command`接口返回值，`Response`类提供`getRc`、`getData`和`toJSON`等方法，提升代码可读性。在使用时，参考不同 SDK 的[示例程序](/products/chatbot-platform/integration/index.html#下载-sdk)。

下文中使用的`method`，`path`，`body`和`result`等均代表以上介绍的概念。

