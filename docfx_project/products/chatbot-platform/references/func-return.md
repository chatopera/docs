# 函数返回值

**函数的返回值，可以用于自定回复消息内容或状态跳转等。** 在多轮对话中，回复除纯文本外，还可以支持多媒体消息，这样用户交互的体验更佳。不同消息的类型还需要渠道能够兼容，或在业务系统中进行适配，以下各消息类型在 **[春松客服](/products/cskefu/index.html)** 和 **多轮对话设计器** 中已经支持。

## 列表消息

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

## 按钮消息

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

## 图文消息

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

## 自定义业务字段

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

## 评论

<script src="https://utteranc.es/client.js"
        repo="chatopera/docs"
        issue-term="pathname"
        label="Comment"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
