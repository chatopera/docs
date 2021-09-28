# 内置函数库

在开发中，进一步提供系统灵活性，在`函数`定义中，系统预置了以下几个工具对象，方便聊天机器人开发者实现各种功能的聊天机器人。以下内容假设读者已经掌握了`JavaScript`编程语言。

> 提示：以下使用 `this` 前缀的变量代表该变量依赖于在函数内部的 `this` 对象。比如：

```函数
exports.customFn = async function(){
    debug(this.user.id); // this.user is available here inside an exports function
}
```

函数库：

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
