<!-- markup:blank-line -->
# <3/5> 设置热门问题
<< 上一步：[<2/5> 自动生成知识库](/products/chatbot-platform/tutorials/2-answer-faq.html) | <i class="glyphicon glyphicon-time"></i>阅读本节内容大约需要 15 mins 

> 当您在新手任务中，遇到任何问题，欢迎[联系 Chatopera 工程师](https://dwz.chatopera.com/s99784)获得帮助支持~

欢迎语就是访客与机器人建立连接后，机器人发送的欢迎信息。在欢迎信息中，可以有问题，以及热门问题列表。本节，就是介绍如何通过多轮对话设计器，实现自定义的热门问题~

> 我们为什么通过多轮对话设计器来完成这个任务？其实是为了向您展示多轮对话设计器低代码定制对话技能的能力，以后，您可以灵活的使用多轮对话设计器实现更强大的对话技能。

## 安装多轮对话设计器

| 版本   | 下载地址                                                                                                                                                                         |
| -----  | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| v2.5.7 | [macOS](https://dwz.chatopera.com/87TR10) \| [Windows](https://dwz.chatopera.com/8Q1l8g) |
<!-- markup:table-caption 多轮对话设计器下载地址 -->

提示：

* 如果遇到浏览器提醒安全问题，就需要继续进行：选择忽略、保留下载等选项跳过
* 点击下载地址未能开始下载时，将下载地址拖拽到新的 Tab 页，启动下载
* 下载后，得到应用安装包，双击后根据提示进行安装[^install-cde]

## 添加机器人

安装完成后，在电脑应用中心，启动【多轮对话设计器】。

![安装和启动多轮对话设计器](../../../images/products/platform/screenshot-20210913-192350.png)

在多轮对话设计器一级菜单中，点击【添加】，这时会弹出表单。

此处需要 `阿Q` 的 `Client Id` 和 `Secret`，这些信息来自与机器人控制台。

![添加机器人](../../../images/products/platform/screenshot-20210913-192631.png)

回到浏览器，进入机器人控制台： `阿Q`的设置页。

![设置机器人](../../../images/assets/screenshot_20230503095620.png)

复制 `Client Id` 和 `Secret` 到多轮对话设计器【添加表单】，点击【确认】[^help1]。

回到列表后，找到`阿Q`，点击右侧操作中的【打开】，进入阿Q的话题列表页。

![](../../../images/assets/screenshot_20240626144657.png)

这时，可以看到默认的话题：`greetings`。

![初始话题](../../../images/assets/screenshot_20230503100156.png)

## 和机器人进行对话

点击 `greetings` 话题的右侧的【编辑】按钮，进入 `阿Q`的`greetings` 脚本编辑窗口。

![脚本编辑](../../../images/products/platform/screenshot-20210913-195806.png)

在脚本编辑窗口中间，有对话框，在文本发送区域，输入`你好`，然后点击【发送】。

当你看到机器人回复了`你好！`，那么本步骤就完成了！

接下来，我们为 `阿Q`添加个性化的问候语。

## 设置热门问题

假如还是在上文的`greetings`脚本编辑页面上，点击【脚本】旁边的【函数】，进入函数编辑窗口。

![](../../../images/assets/screenshot_20240624182735.png)

### 删除当前函数中的全部内容

首先，删除函数编辑窗口中全部内容，比如在 Windows 上，在函数编辑区域，选择全部（Ctrl + A），然后按【Delete】或【Backspace】键。

删除后，您看到的函数如下图：

![](../../../images/assets/screenshot_20240626144926.png)

### 粘贴函数内容

然后，复制下面的内容，再粘贴到函数编辑区域。

```函数
// 问候语中关联常见问题
// 更多消息格式，参考 https://dwz.chatopera.com/jQ0F9G
exports.getGreetings = async function() {
    let data = [
	    // 编辑数组，调整问候语热门问题
        "海口有几个机场",
        "美兰国际机场有没有国际航班",
    ];

    if (data.length > 0) {
        let params = [];
        let postIndex = 0;
        for (let x of data) {
            params.push({
                // 展示的文本
                label: (++postIndex).toString() + ". " + x,
                type: "qlist",
                // 点击后，发送给机器人的文本
                text: x
            });
        }

        if (params.length > 0) {
            return {
                text: "请问有什么可以帮到您？",
                params: params
            };
        } else {
            return {
                string: ""
            };
        }
    } else {
        return {
            string: ""
        };
    }
}
```

添加后，函数编辑区域看起来是这样。

![](../../../images/assets/screenshot_20240624182921.png)

最后，点击【保存】，此时，得到提示信息: `上传数据成功`。

![上传数据](../../../images/products/platform/screenshot-20210913-203144.png)

## 测试对话

在聊天对话框，输入：

```文本
__faq_hot_list
```

机器人回复：

```文本
请问有什么可以帮到您？
1. 海口有几个机场
2. 美兰国际机场有没有国际航班
```

![测试对话](../../../images/products/platform/screenshot-20210913-203616.png)

当你看到了这样的回答，那么本步骤就完成了！恭喜你完成本节任务！

![恭喜完成任务](../../../images/products/platform/congr-20210913-195053.png) 

<< 上一步：[<2/5> 自动生成知识库](/products/chatbot-platform/tutorials/2-answer-faq.html) | >> 下一步：[<4/5> 识别订票意图](/products/chatbot-platform/tutorials/4-add-intent.html)


## 可能遇到的问题

### 信息不匹配，请确认机器人信息

提示如下：
![错误提示](../../../images/products/platform/screenshot-20210913-193815.png)

如果经过验证，你填写的信息没有错误，那么可能是电脑的时间日期与互联网标准时间之间有很大误差，需要先在操作系统上同步互联网时间，以下是 Windows 上同步互联网时间的方法，你也可以手动设置，其它操作系统，都有类似的操作。

![解决方法](../../../images/products/platform/screenshot-20210913-193617.png)

[^help1]: 可能遇到问题，比如提示[【信息不匹配，请确认机器人信息】](#信息不匹配请确认机器人信息)，参考本文后面的[《可能遇到的问题》](#可能遇到的问题)获得解决方案。
[^install-cde]: 安装过程中遇到问题查看[可能遇到的问题](https://docs.chatopera.com/products/chatbot-platform/howto-guides/convs/cde-install.html#%E5%8F%AF%E8%83%BD%E9%81%87%E5%88%B0%E7%9A%84%E9%97%AE%E9%A2%98)，如遇新问题[创建工单](https://github.com/chatopera/docs/issues)

[^function-js]: 这是一段 JavaScript 代码，JavaScript 是非常容易掌握的编程语言。
