# 意图识别

## 服务概述

**意图识别**是语义理解的一个重要话题，我们可以认为：与机器人对话时，是需要机器首先理解人的意图的。然后，根据这个意图，机器人继续与人进行问答，得到了这个意图的相关信息，然后机器才去执行这个意图代表的任务。

### 创建和配置机器人

初次使用首先需要新建一个机器人，并对其进行配置。机器人的配置主要包括意图和词典的配置，分别对应【意图】和【词典管理】模块。

### 添加意图和词典

进入机器人配置页面，需要新建和编辑意图，意图的编辑包括用户说法和槽位。在添加意图的槽位时需要对词典进行相关配置，包括新建自定义词典或引用系统词典，并在意图配置完成后 为所需的自定义词典添加词条。

### 测试和发布机器人

机器人配置完成后必须先通过训练，才可以对机器人进行测试。测试无误后便可在【意图>>发布管理】模块对调试版本进行发布上线，发布后的线上版本可用于实际使用。

### 接入机器人

若机器人已存在生产版本，可通过 API 文档提供的接口进行接入。

## 快速开始

### 登录服务

访问 <a href="https://bot.chatopera.com" target="_blank">https://bot.chatopera.com</a> 从浏览器打开后，点击“立即使用”，跳转到登陆/注册页面，输入邮箱和密码，使用“回车键”【Enter】提交，即完成。

## 点餐机器人

下文以“餐饮机器人”为例介绍 机器人 的创建、配置和发布上线。

### 新建机器人

在 Chatopera 云服务首页单击“创建机器人”，根据提示信息新建后点击“确认”，即完成机器人的创建。

<table class="image">
<caption align="bottom">创建机器人</caption>
<tr><td><img width="600" src="../../images/intent/fast1.png" alt="创建机器人"/></td></tr>
</table>

<table class="image">
<caption align="bottom">创建机器人</caption>
<tr><td><img width="600" src="../../images/intent/fast2.png" alt="创建机器人"/></td></tr>
</table>

### 新建意图

切换至【意图】模块新建意图，以订外卖的意图为例，单击操作列的【新建意图】，在弹出的对话框中输入意图标识名，例如：Take_out，确定后即完成意图创建。

<table class="image">
<caption align="bottom">新建意图</caption>
<tr><td><img width="600" src="../../images/intent/fast3.png" alt="新建意图"/></td></tr>
</table>

### 编辑意图

单击操作列的 Take_out【编辑】，进入意图的配置页面，包括【用户说法】和【槽位】两个模块。

<table class="image">
<caption align="bottom">编辑意图</caption>
<tr><td><img width="600" src="../../images/intent/fast4.png" alt="编辑意图"/></td></tr>
</table>
<table class="image">
<caption align="bottom">编辑意图</caption>
<tr><td><img width="600" src="../../images/intent/fast5.png" alt="编辑意图"/></td></tr>
</table>

逐一添加各个模块，例如：【用户说法】添加带槽位和不带槽位的用户说法

<table class="image">
<caption align="bottom">用户说法</caption>
<tr><td><img width="600" src="../../images/intent/fast6.png" alt="用户说法"/></td></tr>
</table>

【槽位】添加槽位并进行相关设置

<table class="image">
<caption align="bottom">槽位</caption>
<tr><td><img width="600" src="../../images/intent/fast7.png" alt="槽位"/></td></tr>
</table>

### 新建和配置自定义词典

在配置意图的槽位时需要为各个槽位设置对应的词典，此时可在【槽位】配置模块选择词典时快速新建词典，或引用系统词典

<table class="image">
<caption align="bottom">选择词典</caption>
<tr><td><img width="600" src="../../images/intent/fast8.png" alt="选择词典"/></td></tr>
</table>

也可先保存意图配置后，切换到【词典管理】模块新建自定义词典

<table class="image">
<caption align="bottom">新建自定义词典</caption>
<tr><td><img width="600" src="../../images/intent/fast9.png" alt="新建自定义词典"/></td></tr>
</table>

无论通过哪种途径新建自定义词典，都需要在【词典管理】模块对自定义词典进行配置，添加词条

【词典管理】【自定义词典】列表点击“编辑”进入词典编辑页面

<table class="image">
<caption align="bottom">编辑词典</caption>
<tr><td><img width="600" src="../../images/intent/fast10.png" alt="编辑词典"/></td></tr>
</table>

词典详情页面可以添加多个同义词与近义词，添加后进行保存

<table class="image">
<caption align="bottom">编辑词条</caption>
<tr><td><img width="600" src="../../images/intent/fast11.png" alt="编辑词条"/></td></tr>
</table>

### 训练机器人

在意图详情页面，点击保存，提示：训练成功，可进行测试

<table class="image">
<caption align="bottom">保存</caption>
<tr><td><img width="600" src="../../images/intent/fast12.png" alt="保存"/></td></tr>
</table>

点击意图详情页面右上角“测试”按钮，进入测试对话页面

<table class="image">
<caption align="bottom">测试</caption>
<tr><td><img width="600" src="../../images/intent/fast13.png" alt="测试"/></td></tr>
</table>

<table class="image">
<caption align="bottom">测试</caption>
<tr><td><img width="600" src="../../images/intent/fast14.png" alt="测试"/></td></tr>
</table>

测试对话窗口输入意图中的用户说法对机器人进行训练，机器人识别到意图后会对该意图下添加的槽位进行追问

<table class="image">
<caption align="bottom">对话</caption>
<tr><td><img width="600" src="../../images/intent/fast15.png" alt="对话"/></td></tr>
</table>

机器人识别到所有槽位后会结束对话，建立新的会话

<table class="image">
<caption align="bottom">建立新的会话</caption>
<tr><td><img width="600" src="../../images/intent/fast16.png" alt="建立新的会话"/></td></tr>
</table>

### 发布机器人

每次机器人训练通过后，都会自动更新【版本管理】模块中的调试版本：

<table class="image">
<caption align="bottom">调试版本</caption>
<tr><td><img width="600" src="../../images/intent/fast17.png" alt="调试版本"/></td></tr>
</table>

机器人存在调试版本时，可进行测试，测试无误后可对当前调试版本进行发布上线

<table class="image">
<caption align="bottom">发布上线</caption>
<tr><td><img width="600" src="../../images/intent/fast18.png" alt="发布上线"/></td></tr>
</table>

## 词典管理

## 意图管理

## 版本管理

## 系统集成

## 查看使用情况

## 评论

<script src="https://utteranc.es/client.js"
        repo="chatopera/docs"
        issue-term="pathname"
        label="Comment"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
