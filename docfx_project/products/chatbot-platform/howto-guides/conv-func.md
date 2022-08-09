# 在多轮对话中使用 JavaScript 函数

函数是一个强大而有趣的设计。在回复中，可以使用函数来获取整条消息对象，用户对象或者其它资源，比如数据库。Chatopera 机器人平台的函数，就是内置的 JavaScript / Node.js 运行环境，基于安全和性能的考虑，这个 JavaScript 运行时是经过特殊处理的 Node.js 执行时。

## 函数定义

把通配符值当做变量传给函数，例如下面这个例子：

```函数
+ 我的用户名是 *(2-10)
- ^getUserAccount(<cap>)
```

所以，调用函数的方式就是使用“^”。在函数的编辑窗口中，可以这样定义：

```函数
exports.getUserAccount = function(account, cb) {
  cb(null, "对不起，系统没有找到" + account);
}
```

函数的声明中，参数列表首先是通配符的值，可以传多个，然后最后一个参数始终是回调函数(cb)，cb 的参数列表为`(error, text)`，`text` 作为文本添加到回复中，`error`是指处理中发生异常。

函数的定义也同样支持`async/await`语法，例子如下：

```函数
exports.getUserAccount = async function(account) {
    return "对不起，系统没有找到" + account;
}
```

使用`async/await`时，需要抛出异常时，通过 `throw new Error("ERROR MESSAGE")` 完成。

在系统集成时，业务系统的需求千差万别，为了灵活的支持各种需求，在函数中也可以自定义返回值。

```函数
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

```函数
exports.getUserAccount = async function(account) {
    return {
      text: "对不起，系统没有找到" + account,
      params: {
          resetPasswd: "http://example.com/reset-account"
      }
}
```

在[系统集成/多轮对话检索](https://docs.chatopera.com/products/chatbot-platform/references/sdk/chatbot/chat.html#检索多轮对话)时，返回值`data`内将增加`params`属性，与以上设定的值相同。

## 复合函数

在回复中，可以添加任意多的函数，比如

```函数
+ ...
- 联合 ^callFunction1() 和 ^callFunction2(<cap1>)
```

## 嵌套函数

在函数的回调函数中，函数名会被解析成对应的函数，所以放心的在回复中添加任意合法的函数，比如在脚本中这样写：

```函数
+ ...
- ^nestedAFunction()
```

然后，在函数中，定义如下：

```函数
exports.nestedAFunction = function(cb) {
  cb(null, "张三 ^nestedBFunction()");
}
exports.nestedBFunction = function(cb) {
  cb(null, "和李四");
}
```

## 下一步

- [内置函数库](https://docs.chatopera.com/products/chatbot-platform/references/func-builtin/index.html)

- [函数返回值](https://docs.chatopera.com/products/chatbot-platform/references/func-return.html)
