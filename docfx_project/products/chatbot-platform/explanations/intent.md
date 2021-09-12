# 意图识别

在应用聊天机器人的场景中，有一大类是任务驱动型的问答，比如来访者说“我想购买车票”，那么接下来机器人围绕订票这个需求，询问出行时间、目的地等信息，并将收集到的信息返回给聊天机器人开发者，完成订单确认、支付和下单订票等。这就是一个典型的任务驱动的问答，或者说识别意图并根据意图收集相关信息为目的。该种类型对话，在 Chatopera 云服务中，就是通过**意图识别**模块支持。

**意图识别**是语义理解的一个重要话题：与机器人对话时，是需要机器首先理解人的意图的；然后，根据这个意图，机器人继续与人进行问答；得到了这个意图的相关信息，然后机器才去执行这个意图代表的任务。

<table class="image">
<caption align="bottom">图：意图识别模块工作机制</caption>
<tr><td><img width="800" src="../../../images/intent/intent-001.png" alt="意图识别模块工作机制"/></td></tr>
</table>

在 Chatopera 机器人平台，意图识别模块也是集成进入了多轮对话模块，参考使用[意图匹配器](/products/chatbot-platform/howto-guides/conv-gambits/intent.html)。

<!-- 待补充 -->
<!-- https://github.com/chatopera/clause/wiki/%E7%B3%BB%E7%BB%9F%E8%AE%BE%E8%AE%A1%E4%B8%8E%E5%AE%9E%E7%8E%B0 -->

## 评论

<script src="https://utteranc.es/client.js"
        repo="chatopera/docs"
        issue-term="pathname"
        label="Comment"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
