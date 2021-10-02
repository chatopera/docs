# 内置函数库

在开发中，进一步提供系统灵活性，在`函数`定义中，系统预置了以下几个工具对象，方便聊天机器人开发者实现各种功能的聊天机器人。以下内容假设读者已经掌握了`JavaScript`编程语言。

## 要点提示

### 注意 this 的使用

一些 builtin 的函数只在 `exports` 的函数内可用，注意在这些函数前的 `this`，它们是必须的。使用 `this` 前缀的变量代表该变量依赖于在函数内部的 `this` 对象。比如：

```函数
exports.customFn = async function(){
    debug(this.user.id); // this.user is available here inside an exports function
}
```

### JavaScript 运行时

目前，Chatopera 机器人平台为函数提供的 JavaScript 运行时是 [`node:10.21.0`](https://nodejs.org/fr/blog/release/v10.21.0/)，发布于 2020-06-02。一些微小的[最新的 Node.js](https://nodejs.org/fr/) 的 LTS 上的功能可能并不支持，`v10.21.0` 目前是应用最多的 LTS 版本，更稳定和兼容广泛。

## 函数库

- [basics](basics.md)
- [message](message.md)
- [user](user.md)
- [maestro](maestro.md)
- [3rd-party](3rd-party.md)

## 评论

<script src="https://utteranc.es/client.js"
        repo="chatopera/docs"
        issue-term="pathname"
        label="Comment"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
