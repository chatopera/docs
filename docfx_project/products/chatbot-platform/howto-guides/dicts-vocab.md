# 管理词汇表词典

词汇表词典就是管理词条，一个词汇是否属于某词汇表词典，就是检查该词汇是否属于该词典的词条集合。

## 创建

命名规则：

- 词典标识名为字母、数字、下划线的组合，1-32 位，如：RailTypes
- 同一个机器人下的词典标识名不能重复
- 词典标识名一经确认后无法进行修改

在词典管理页面点击新建自定义词典，在弹出的对话框里输入正确的自定义词典名称，词典类型选择"词汇表"，点击确定

<table class="image">
<caption align="bottom">图：新建词汇表词典</caption>
<tr><td><img width="680" src="../../../images/intent/dict1.png" alt="新建词汇表词典"/></td></tr>
</table>

<table class="image">
<caption align="bottom">图：新建词汇表词典</caption>
<tr><td><img width="680" src="../../../images/intent/dict2.png" alt="新建词汇表词典"/></td></tr>
</table>

如果创建的自定义词典名称不符合要求，会有相应的提示

<table class="image">
<caption align="bottom">图：不符合要求</caption>
<tr><td><img width="680" src="../../../images/intent/dict3.png" alt="不符合要求"/></td></tr>
</table>

## 更新

对于已经创建的自定义词典可以修改中文名

<table class="image">
<caption align="bottom">图：修改中文名</caption>
<tr><td><img width="680" src="../../../images/intent/dict4.png" alt="修改中文名"/></td></tr>
</table>

## 删除

对于不需要的自定义词典点击删除按钮即可

<table class="image">
<caption align="bottom">图：删除自定义词典</caption>
<tr><td><img width="680" src="../../../images/intent/dict5.png" alt="删除自定义词典"/></td></tr>
</table>

<table class="image">
<caption align="bottom">图：删除自定义词典</caption>
<tr><td><img width="680" src="../../../images/intent/dict6.png" alt="删除自定义词典"/></td></tr>
</table>

对于已经绑定了槽位的自定义词典不可删除

<table class="image">
<caption align="bottom">图：不可删除</caption>
<tr><td><img width="680" src="../../../images/intent/dict7.png" alt="不可删除"/></td></tr>
</table>

## 添加词条

请使用分号；分隔词项，第一个词项将作为标准词，后面的词项将作为同义词。

## 词条的增删改查

添加词条：编辑完成后点击添加或者回车。

<table class="image">
<caption align="bottom">图：添加词条</caption>
<tr><td><img width="680" src="../../../images/intent/dict8.png" alt="添加词条"/></td></tr>
</table>

删除词条：点击删除按钮即可。

修改词条：一个词条的标准词一旦确定不可修改，但是同义词可以修改，点击编辑按钮，出现输入框，可以对同义词进行修改。

<table class="image">
<caption align="bottom">图：修改词条</caption>
<tr><td><img width="680" src="../../../images/intent/dict9.png" alt="修改词条"/></td></tr>
</table>

查找词条：对于词条较多对词典来说，可以快速搜索词条。在搜索框输入需要搜索的词条之后点击放大镜或者点击回车键即可搜索。搜索完成后搜索框中出现一个清除按钮，点击之后清除本次搜索。

<table class="image">
<caption align="bottom">图：查找词条</caption>
<tr><td><img width="680" src="../../../images/intent/dict10.png" alt="查找词条"/></td></tr>
</table>

## 保存

**在编辑完所有词条之后，需要进行保存，否则变更不生效。** 比如本页词条有变更的情况下进行翻页或者搜索，都需要先进行保存。保存成功后，会重新训练机器人。

<table class="image">
<caption align="bottom">图：保存</caption>
<tr><td><img width="680" src="../../../images/intent/dict11.png" alt="保存"/></td></tr>
</table>

<table class="image">
<caption align="bottom">图：保存</caption>
<tr><td><img width="680" src="../../../images/intent/dict12.png" alt="保存"/></td></tr>
</table>

## 维护

为了用户体验更好，需要对自定义词典进行维护与管理

创建时：在创建词典添加词条时，尽可能多的，全面的添加不同的词条和同义词，便于在槽位中被识别出来（如果用户说的词条在该自定义词典中没有，就会识别不出来）

使用时：在历史消息中可以查看所有机器人与用户的对话，如果发现用户说的词条在该自定义词典中没有，应该立即加上。

## 评论

<script src="https://utteranc.es/client.js"
        repo="chatopera/docs"
        issue-term="pathname"
        label="Comment"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
