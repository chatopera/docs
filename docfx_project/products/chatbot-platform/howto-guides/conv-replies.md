# 在多轮对话中设置回复

在**匹配器**中，我们已经学到了怎么添加一个回答。事实上你可以添加任意数量的回答。这里还有一些高级功能可以帮助你完成更多的任务。

## 文本形式

最直接的设置文本答案的方法。

```脚本
+ 在吗
- 你好，在的
```

如果添加了多个回答，系统会从中随机挑选一个作为回复, 然后丢掉这个回答。

```脚本
+ 在吗
- 亲，在的
- 亲，有什么需要帮助
- 你好，请问遇到什么问题了吗？
```

所谓丢掉这个答案，是指机器人针对同一个用户，在【会话回溯最大时长】内再次匹配上该**匹配器**时，选择回复时，不考虑使用过的回复。

如果不想让系统丢掉使用过的回复，可以在回复前添加{keep}。

```脚本
+ 在吗
- {keep} 亲，在的
- 亲，有什么需要帮助
- 你好，请问遇到什么问题了吗？
```

也可以在匹配器前添加*{keep}*，就不用在每个回答中都添加了

```脚本
+ {keep} 在吗
- 亲，在的
- 亲，有什么需要帮助
- 你好，请问遇到什么问题了吗？
```

如果回答很长，可以通过“^”分割以方便可读性。可以通过“\n”实现换行

```脚本
+ 在吗
- 你好，这里是客服中心，\n
^ 请问遇到什么问题了吗？
```

它等价于

```脚本
+ 在吗
- 你好，这里是客服中心，请问遇到什么问题了吗？
```

## 引用回复

有些时候，在问答对中重用一些回复能使编写脚本效率更高，这时可以定义一个问答对，并在脚本其它位置引用它。

```脚本
+ 在吗
- {@__greeting__} 请问有什么能帮助您？

+ __greeting__
- 亲，在的。
- 你好，客服小美为您服务
- 亲亲，稍等，客服马上就到
```

引用的方式就是 `{@匹配器}`，匹配器中的下划线不是必须的，上面例子中的匹配器`__greeting__`的命名是为了增强脚本的可读性。

将一些常用的回复以约定的匹配器命名方式命名，不但方便复用回复，使脚本可读性好，方便维护，而且更方便使用[**上下轮钩子**](/products/chatbot-platform/howto-guides/conv-hooks.html)实现多轮对话。

```脚本
+ 在吗
- {@__greeting__}

    + (*) 问路 (*)
    % {@__greeting__}
    - 请使用地图APP

    + (*) 打车 (*)
    % {@__greeting__}
    - 出租车在门口挥手示意停车

    + (*)
    % {@__greeting__}
    - {@__greeting__}

+ __greeting__
- 亲，在的。请问有什么能帮助您？
- 你好，客服小美为您服务
- 亲亲，稍等，客服马上就到
```

## 通配符取值

通配符取值是针对[通配符匹配器](/products/chatbot-platform/references/gambit-star.html)的，匹配成功后，可以读取匹配到的词汇。在回答中需要使用输入中的通配符值，这时可以使用&#60;cap&#62;达到目的。

```脚本
+ 我是 *~3
- 你好，<cap>
```

```
匹配：小明比小红高
回答：你确定小明比小红高吗？
```

如果用户输入，“我是张三”，那么系统将回复“你好，张三”，当有多个槽时，可以使用多个&#60;cap&#62;。

```说明
+ *2 比 *2 高
- 你确定<cap1>比<cap2>高吗？
```

在对话中，我们有时候会需要以前的通配符值，看一下下面这个例子：

```脚本
+ 我叫 *~3
- 你好，<cap1>

    + 你猜我叫什么？
    % 你好，<cap1>
    - 你刚说了，你叫<p1cap1>
```

&#60;pNcapM&#62;代表了以前的通配符。其中*N*代表在在对话中之前的问答，*M*代表捕获的位移。

此处，上下轮钩子，即`%`开头的句子，代表匹配器“你猜我叫什么？”只服务于“你好，&#60;cap1&#62;”作为回复时，它会被优先匹配。上一轮对话的回复通过(%)的方式指定了接下来的逻辑，形成多轮对话。

关于上下文钩子的[详细介绍文档](/products/chatbot-platform/howto-guides/conv-hooks.html)。

**提示：**
**1) +/%/- 前的空格不是必须的，在多轮对话中，空格可以增强脚本的可读性，比如使用上下轮钩子中的段首缩进。**
**2) 通配符取值适用于通配符匹配器，其它形式的匹配器，有不同的值传递方式，参考它们的详细说明。**

## 函数

函数就是通过写 JavaScript 脚本，处理回复，在脚本中，可以实现各种逻辑，做外部系统集成等。

```脚本
+ 我叫 *~3
- ^getGreetings(<cap1>)
```

那么，在多轮对话设计器内，通过 `exports.getGreetings = async function(){ // do your magic}` 来定制化回复内容。

函数的详细使用[参考文档](/products/chatbot-platform/howto-guides/conv-func.html)。

## 下一步

- [上下轮钩子](/products/chatbot-platform/howto-guides/conv-hooks.html)

- [函数](/products/chatbot-platform/howto-guides/conv-func.html)

## 评论

<script src="https://utteranc.es/client.js"
        repo="chatopera/docs"
        issue-term="pathname"
        label="Comment"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>