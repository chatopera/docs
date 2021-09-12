# 快速开始

## 登录服务

访问 <a href="https://bot.chatopera.com" target="_blank">https://bot.chatopera.com</a> 从浏览器打开后，点击“立即使用”，跳转到登陆/注册页面，输入邮箱和密码，使用“回车键”【Enter】提交，即完成。

下文以“餐饮机器人”为例介绍意图识别聊天机器人的创建、配置和发布上线。

## 新建机器人

在 Chatopera 云服务首页单击“创建机器人”，根据提示信息新建后点击“确认”，即完成机器人的创建。

<table class="image">
<caption align="bottom">图：创建机器人</caption>
<tr><td><img width="680" src="../../../images/intent/fast1.png" alt="创建机器人"/></td></tr>
</table>

<table class="image">
<caption align="bottom">图：创建机器人</caption>
<tr><td><img width="680" src="../../../images/intent/fast2.png" alt="创建机器人"/></td></tr>
</table>

## 新建意图

切换至【意图】模块新建意图，以订外卖的意图为例，单击操作列的【新建意图】，在弹出的对话框中输入意图标识名，例如：Take_out，确定后即完成意图创建。

<table class="image">
<caption align="bottom">图：新建意图</caption>
<tr><td><img width="680" src="../../../images/intent/fast3.png" alt="新建意图"/></td></tr>
</table>

## 编辑意图

单击操作列的 Take_out【编辑】，进入意图的配置页面，包括【用户说法】和【槽位】两个模块。

<table class="image">
<caption align="bottom">图：编辑意图</caption>
<tr><td><img width="680" src="../../../images/intent/fast4.png" alt="编辑意图"/></td></tr>
</table>
<table class="image">
<caption align="bottom">图：编辑意图</caption>
<tr><td><img width="680" src="../../../images/intent/fast5.png" alt="编辑意图"/></td></tr>
</table>

逐一添加数据，例如：【用户说法】添加带槽位和不带槽位的用户说法。

<table class="image">
<caption align="bottom">图：用户说法</caption>
<tr><td><img width="680" src="../../../images/intent/fast6.png" alt="用户说法"/></td></tr>
</table>

添加【槽位】并进行相关设置。

<table class="image">
<caption align="bottom">图：槽位</caption>
<tr><td><img width="680" src="../../../images/intent/fast7.png" alt="槽位"/></td></tr>
</table>

## 配置词典

在配置意图的槽位时需要为各个槽位设置对应的词典，此时可在【槽位】配置模块选择词典时快速新建词典，或引用系统词典。

<table class="image">
<caption align="bottom">图：选择词典</caption>
<tr><td><img width="680" src="../../../images/intent/fast8.png" alt="选择词典"/></td></tr>
</table>

也可先保存意图配置后，切换到【词典管理】模块新建自定义词典。

<table class="image">
<caption align="bottom">图：新建自定义词典</caption>
<tr><td><img width="680" src="../../../images/intent/fast9.png" alt="新建自定义词典"/></td></tr>
</table>

无论通过哪种途径新建自定义词典，都需要在【词典管理】模块对自定义词典进行配置，添加词条。导航【词典管理>>自定义词典】，在列表页点击“编辑”进入词典编辑页面。

<table class="image">
<caption align="bottom">图：编辑词典</caption>
<tr><td><img width="680" src="../../../images/intent/fast10.png" alt="编辑词典"/></td></tr>
</table>

词典详情页面可以添加多个近义词，添加后进行保存。

<table class="image">
<caption align="bottom">图：编辑词条</caption>
<tr><td><img width="680" src="../../../images/intent/fast11.png" alt="编辑词条"/></td></tr>
</table>

## 训练机器人

在意图详情页面，点击保存，提示：训练成功，可进行测试。

<table class="image">
<caption align="bottom">图：保存</caption>
<tr><td><img width="680" src="../../../images/intent/fast12.png" alt="保存"/></td></tr>
</table>

点击意图详情页面右上角“测试”按钮，进入测试对话页面。

<table class="image">
<caption align="bottom">图：测试</caption>
<tr><td><img width="680" src="../../../images/intent/fast13.png" alt="测试"/></td></tr>
</table>

<table class="image">
<caption align="bottom">图：测试</caption>
<tr><td><img width="680" src="../../../images/intent/fast14.png" alt="测试"/></td></tr>
</table>

测试对话窗口输入意图中的用户说法对机器人进行训练，机器人识别到意图后会对该意图下添加的槽位进行追问。

<table class="image">
<caption align="bottom">图：对话</caption>
<tr><td><img width="680" src="../../../images/intent/fast15.png" alt="对话"/></td></tr>
</table>

机器人识别到所有槽位后会结束对话，建立新的会话。

<table class="image">
<caption align="bottom">图：建立新的会话</caption>
<tr><td><img width="680" src="../../../images/intent/fast16.png" alt="建立新的会话"/></td></tr>
</table>

## 发布机器人

每次机器人训练通过后，都会自动更新【版本管理】模块中的调试版本：

<table class="image">
<caption align="bottom">图：调试版本</caption>
<tr><td><img width="680" src="../../../images/intent/fast17.png" alt="调试版本"/></td></tr>
</table>

机器人存在调试版本时，可进行测试，测试无误后可对当前调试版本进行发布上线。

<table class="image">
<caption align="bottom">图：发布上线</caption>
<tr><td><img width="680" src="../../../images/intent/fast18.png" alt="发布上线"/></td></tr>
</table>

## 评论

<script src="https://utteranc.es/client.js"
        repo="chatopera/docs"
        issue-term="pathname"
        label="Comment"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
