# 词典管理

## 什么是词典

词典就是机器人在对话中所掌握的概念，机器人凭借词典区分不同实体，词典通过不同形式约定了一个词汇的集合。

什么是实体呢？以一个例子说明，比如订一份外卖需要知道用户想定什么外卖，什么时候定，定多少，以及口味要求和地址。那么此时需要的实体就包括：food（食物）、time（时间）、num（数量）、taste（口味）、address（地址）。

Chatopera 机器人平台提供多种形式的词典。

## 词典类型

词典分为：**系统词典**和**自定义词典**两种类型。

系统词典是 Chatopera 机器人平台预置的词典，词典标识以"@"为前缀开头。
自定义词典，是用户创建和维护的词典，包括**词汇表词典**和**正则表达式词典**两种类型。

## 系统词典

### 现有系统词典

系统词典可以直接引用，无需配置词条。

已有的系统词典包括：地名(@LOC)，人名(@PER)、时间(@TIME)和组织机构(@ORG)。在引用系统词典页面中可以看到

<table class="image">
<caption align="bottom">图：系统词典</caption>
<tr><td><img width="680" src="../../images/intent/dict13.png" alt="系统词典"/></td></tr>
</table>

各个系统词典的作用

| 名称  | 描述     | 示例                     |
| ----- | -------- | ------------------------ |
| @LOC  | 地名     | 北京市、东京             |
| @PER  | 人名     | 郭德纲、于谦             |
| @TIME | 时间     | 今天、下午一时           |
| @ORG  | 组织机构 | 北京华夏春松科技有限公司 |

### 引用与取消引用

对于系统词典可以引用和取消引用。被引用了的系统词典可以在槽位配置时使用

<table class="image">
<caption align="bottom">图：引用与取消</caption>
<tr><td><img width="680" src="../../images/intent/dict14.png" alt="引用与取消"/></td></tr>
</table>

## 词汇表词典

词汇表词典就是管理词条，一个词汇是否属于某词汇表词典，就是检查该词汇是否属于该词典的词条集合。

### 创建

命名规则：

- 词典标识名为字母、数字、下划线的组合，1-32 位，如：RailTypes
- 同一个机器人下的词典标识名不能重复
- 词典标识名一经确认后无法进行修改

在词典管理页面点击新建自定义词典，在弹出的对话框里输入正确的自定义词典名称，词典类型选择"词汇表"，点击确定

<table class="image">
<caption align="bottom">图：新建词汇表词典</caption>
<tr><td><img width="680" src="../../images/intent/dict1.png" alt="新建词汇表词典"/></td></tr>
</table>

<table class="image">
<caption align="bottom">图：新建词汇表词典</caption>
<tr><td><img width="680" src="../../images/intent/dict2.png" alt="新建词汇表词典"/></td></tr>
</table>

如果创建的自定义词典名称不符合要求，会有相应的提示

<table class="image">
<caption align="bottom">图：不符合要求</caption>
<tr><td><img width="680" src="../../images/intent/dict3.png" alt="不符合要求"/></td></tr>
</table>

### 更新

对于已经创建的自定义词典可以修改中文名

<table class="image">
<caption align="bottom">图：修改中文名</caption>
<tr><td><img width="680" src="../../images/intent/dict4.png" alt="修改中文名"/></td></tr>
</table>

### 删除

对于不需要的自定义词典点击删除按钮即可

<table class="image">
<caption align="bottom">图：删除自定义词典</caption>
<tr><td><img width="680" src="../../images/intent/dict5.png" alt="删除自定义词典"/></td></tr>
</table>

<table class="image">
<caption align="bottom">图：删除自定义词典</caption>
<tr><td><img width="680" src="../../images/intent/dict6.png" alt="删除自定义词典"/></td></tr>
</table>

对于已经绑定了槽位的自定义词典不可删除

<table class="image">
<caption align="bottom">图：不可删除</caption>
<tr><td><img width="680" src="../../images/intent/dict7.png" alt="不可删除"/></td></tr>
</table>

### 添加词条

请使用分号；分隔词项，第一个词项将作为标准词，后面的词项将作为同义词。

### 词条的增删改查

添加词条：编辑完成后点击添加或者回车。

<table class="image">
<caption align="bottom">图：添加词条</caption>
<tr><td><img width="680" src="../../images/intent/dict8.png" alt="添加词条"/></td></tr>
</table>

删除词条：点击删除按钮即可。

修改词条：一个词条的标准词一旦确定不可修改，但是同义词可以修改，点击编辑按钮，出现输入框，可以对同义词进行修改。

<table class="image">
<caption align="bottom">图：修改词条</caption>
<tr><td><img width="680" src="../../images/intent/dict9.png" alt="修改词条"/></td></tr>
</table>

查找词条：对于词条较多对词典来说，可以快速搜索词条。在搜索框输入需要搜索的词条之后点击放大镜或者点击回车键即可搜索。搜索完成后搜索框中出现一个清除按钮，点击之后清除本次搜索。

<table class="image">
<caption align="bottom">图：查找词条</caption>
<tr><td><img width="680" src="../../images/intent/dict10.png" alt="查找词条"/></td></tr>
</table>

### 保存

**在编辑完所有词条之后，需要进行保存，否则变更不生效。** 比如本页词条有变更的情况下进行翻页或者搜索，都需要先进行保存。保存成功后，会重新训练机器人。

<table class="image">
<caption align="bottom">图：保存</caption>
<tr><td><img width="680" src="../../images/intent/dict11.png" alt="保存"/></td></tr>
</table>

<table class="image">
<caption align="bottom">图：保存</caption>
<tr><td><img width="680" src="../../images/intent/dict12.png" alt="保存"/></td></tr>
</table>

### 维护

为了用户体验更好，需要对自定义词典进行维护与管理

创建时：在创建词典添加词条时，尽可能多的，全面的添加不同的词条和同义词，便于在槽位中被识别出来（如果用户说的词条在该自定义词典中没有，就会识别不出来）

使用时：在历史消息中可以查看所有机器人与用户的对话，如果发现用户说的词条在该自定义词典中没有，应该立即加上。

## 正则表达式词典

正则表达式词典是通过正则表达式的形式约束一个词汇的集合，正则表达式是以一定语法作为规则的语法。

### 创建

命名规则：

- 词典标识名为字母、数字、下划线的组合，1-32 位，如：RailTypes
- 同一个机器人下的词典标识名不能重复
- 词典标识名一经确认后无法进行修改

在词典管理页面点击新建自定义词典，在弹出的对话框里输入正确的自定义词典名称，词典类型选择"正则表达式"，点击确定

<table class="image">
<caption align="bottom">图：新建正则表达式词典</caption>
<tr><td><img width="680" src="../../images/intent/dict1.png" alt="新建词汇表词典"/></td></tr>
</table>

<table class="image">
<caption align="bottom">图：新建正则表达式词典</caption>
<tr><td><img width="680" src="../../images/intent/intent-003.png" alt="新建词汇表词典"/></td></tr>
</table>

如果创建的自定义词典名称不符合要求，会有相应的提示

<table class="image">
<caption align="bottom">图：不符合要求</caption>
<tr><td><img width="680" src="../../images/intent/dict3.png" alt="不符合要求"/></td></tr>
</table>

### 编辑

Chatopera 机器人平台中，正则表达式词典支持的表达式规范为[PCRE 标准](https://www.pcre.org/original/doc/html/pcrepattern.html)，PCRE 是"Perl-compatible regular expressions"的缩写，广泛的被各种编程语言支持，虽然在不同语言支持时，会有微小的不同，实际使用中仍可参考 PCRE 的说明，Chatopera 机器人平台使用 C++开发，底层的正则表达式接口使用[Boost Regex 库](https://www.boost.org/doc/libs/1_70_0/libs/regex/doc/html/boost_regex/syntax/perl_syntax.html)。

添加正则表达式定义，进入【词典管理>>自定义词典】列表，选择正则表达式词典，点击"编辑"。

<table class="image">
<caption align="bottom">图：添加正则表达式定义</caption>
<tr><td><img width="680" src="../../images/intent/intent-004.png" alt="添加正则表达式定义"/></td></tr>
</table>

在"添加表达式"项目下，写入表达式，点击"添加"，然后点击"保存"。保存成功后会重新训练机器人，如果遇到错误会弹出提示消息，对于没有意图或意图中没有说法的情况，训练机器人会失败，这时候保存正则表达式词典是成功的，该错误可忽略，后续在添加了意图和说法后，就正常了。

正则表达式定义支持多个表达式，在使用正则表达式词典时，会按照正则表达式列表的顺序进行匹配，如果匹配到词汇，就跳过其它表达式，否则继续匹配，直到遍历表达式列表。

保存成功后，还需要确认表达式是能按照预期工作，这个验证的过程通过【验证表达式】完成，该项目在表达式列表的下面。

<table class="image">
<caption align="bottom">图：验证表达式</caption>
<tr><td><img width="680" src="../../images/intent/intent-005.png" alt="验证表达式"/></td></tr>
</table>

验证表达式过程就是输入一段测试文本，点击"验证"，验证结果将显示在下面。

### 表达式注意事项

上文提到了 Chatopera 机器人平台的正则表达式词典是基于 C++ Boost Regex 库的，并使用 PCRE 规范，实际上和 PCRE 有细微出入，以下内容进行介绍。

1. 如果在`[]`之间需要包含`-`，并且不代表区间，而是`-`代表本身，那么需要将`-`放在末尾或开头，否则会报错；
2. 在表达式使用中只取第一个匹配的值，如果一个表达式能匹配到输入语句的多个值，其它的值被忽略。

### 常用正则表达式

正则表达式是一个易学难精的技能，一方面是介绍材料众多，另一方面是网络上有很多写好的常用的表达式。以下定义三个常用的表达式。

| 项目     | 表达式                                                   |
| -------- | -------------------------------------------------------- |
| 邮箱     | `\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}` |
| 身份证号 | `\d{15}(\d\d[0-9xX])?`                                   |
| QQ 号    | `[1-9][0-9]{4,}`                                         |

正则表达式的基础知识参考[链接](https://www.runoob.com/regexp/regexp-tutorial.html)，更多关于正则表达式材料在网络上自行查找，**相关 Perl 正则表达式或 PCRE 正则表达式的适用于 Chatopera 机器人平台的正则表达式词典**。

## 评论

<script src="https://utteranc.es/client.js"
        repo="chatopera/docs"
        issue-term="pathname"
        label="Comment"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
