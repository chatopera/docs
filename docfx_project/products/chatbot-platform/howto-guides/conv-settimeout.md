# 在多轮对话中设置定时任务

## 应用场景

在多轮对话中，执行了`函数 A`，然后想在若干时间后执行`函数 B`。那么则可以使用 `setTimeout` 函数实现。

## 使用说明

比如有如下脚本：

```脚本
+ 你好
- {keep} ^fnA()
```

`fnA` 是一个函数，在 `函数`中定义如下：

```函数
async function B() {
    debug("Exec B")
}

exports.fnA = async () => {

    setTimeout(async () => {
        debug("Run fnB");
        await B()
    }, 5000)

    return "hello"
}
```

其中，`setTimeout` 的使用就是执行计时任务，`5000` 代表 5 秒后执行函数体:

```
async () => {
        debug("Run fnB");
        await B()
    }
```

执行结果：

```日志
2022-07-09 11:05:51   DEBUG   conversation  call fnA result: hello

2022-07-09 11:05:51   DEBUG   conversation  call fnA:

2022-07-09 11:05:55   DEBUG   conversation  Exec B

2022-07-09 11:05:55   DEBUG   conversation  Run fnB
```

关于 `setTimeout` 函数的进一步介绍，参考[文档](https://www.runoob.com/w3cnote/javascript-settimeout-usage.html)。
