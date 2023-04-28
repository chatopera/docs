# 客户管理

客户是指通过购买你的产品或服务满足其某种需求、产生直接经济关系的个人、团体或企业，可以通过线索转化而来，或是销售挖掘等多种渠道获取。

客户管理即客户关系管理是指企业为提高核心竞争力，利用相应的信息技术以及互联网技术协调企业与顾客间在销售、营销和服务上的交互，从而提升其管理方式，向客户提供创新式的个性化的客户交互和服务的过程。其最终目标是吸引新客户、保留老客户以及将已有客户转为忠实客户，增加市场。

在大盛 CRM 系统中对客户管理的功能非常实用，非常多。

下面的教程以销售人员张三为例登陆系统，对自己有权限的客户进行一些最常规的操作。

## 客户列表

步骤：顶部菜单->「全部」→「客户」→ 默认看到所有客户 或者 左边菜单中「查看客户」

在「客户列表」页面可以看到每个客户的很多属性，比如「客户名称」、「城市」、「电话」、销售人员「负责人」名字等等。

<p align="center">
    <img width="800" src="../../images/products/dscrm/93.png" alt="" />
</p>

<p align="center">
    <img width="800" src="../../images/products/dscrm/94.png" alt="" />
</p>

## 创建客户

步骤：客户模块（参考上文，进入客户模块）→「创建客户」

<p align="center">
    <img width="800" src="../../images/products/dscrm/95.png" alt="" />
</p>

可以在此将客户的很多信息录入，比如「客户名称」、「城市」、「电话」、销售人员「负责人」名字等等。

<p align="center">
    <img width="800" src="../../images/products/dscrm/96.png" alt="" />
</p>

## 客户详情

步骤：客户模块->查看客户->选中一个客户->点击客户名称->进入客户详情页面

<p align="center">
    <img width="800" src="../../images/products/dscrm/97.png" alt="" />
</p>

在客户详情中会显示所有与客户相关的数据。

在大盛 CRM 客户详情中，员工可以随时添加与此客户的所有活动记录。活动记录支持选择写跟进，跟进记录支持选择不同的跟进方式（电话、邮件、上门拜访、短信、活动等）。员工可以根据沟通的情况，设置下次联系时间并添加到自己的日程当中。还可以创建任务、联系人、商机、合同、回款等活动记录。（跟进记录添加的图片和附件可在附件模块展示，但不能编辑、删除，只能预览）下方还可以根据活动状态查看相应的活动记录。

<p align="center">
    <img width="800" src="../../images/products/dscrm/98.png" alt="" />
</p>

## 客户编辑

步骤：查看客户->点击「编辑」→ 进入客户编辑页面
在客户编辑页面可以对客户的信息逐一编辑更新。

<p align="center">
    <img width="800" src="../../images/products/dscrm/99.png" alt="" />
</p>

<p align="center">
    <img width="800" src="../../images/products/dscrm/100.png" alt="" />
</p>

步骤：客户详情页面->动作->编辑 → 进入客户编辑页面

<p align="center">
    <img width="800" src="../../images/products/dscrm/101.png" alt="" />
</p>

<p align="center">
    <img width="800" src="../../images/products/dscrm/102.png" alt="" />
</p>

## 客户移除

大盛 CRM 的删除有两种，即「单个删除」、「批量删除」

步骤：「查看客户」->选择特定客户 →「批量操作」→「删除」
这里可以「单个删除」与「批量删除」都可以执行。

<p align="center">
    <img width="800" src="../../images/products/dscrm/103.png" alt="" />
</p>

步骤：「客户详情」→「动作」→「删除」
这里只能执行「单个删除」

<p align="center">
    <img width="800" src="../../images/products/dscrm/104.png" alt="" />
</p>

## 客户导入

在大盛 CRM 系统「客户」模块的左边菜单点击「导入客户」按钮，则会出现导入页面。分为两种导入类型：

仅创建新记录
创建并且更新现有数据
在此页面执行下面步骤即可完成批量导入客户。

<p align="center">
    <img width="800" src="../../images/products/dscrm/105.png" alt="" />
</p>

### 导入类型：仅创建新记录

- 上传数据文件

导入文件准备或者模板下载
准备要导入的数据文件，或者下载一个数据模板文件参考并创建一个数据文件。导入文件默认是「CSV」格式的文件。建议在导入之前最好是下载大盛 CRM 官方提供的模版，即点击：“下载数据文件模版”，可以获取，用自己的电脑编辑工具打开，内容大体如下，每个人的不完全一样。请按照模版的说明操作，填入客户的数据。

<p align="center">
    <img width="800" src="../../images/products/dscrm/106.png" alt="" />
</p>

选择导入文件
下面是测试数据，可以直接复制到编辑器，保存为 CSV 文件。

```
"名称","ID","网址","Email 地址","非主邮件地址","办公电话","其他电话","传真","[账单地址]街道","[账单地址]城市","[账单地址]省份","[账单地址]邮编","[账单地址]国家","[送货地址]街道","[送货地址]城市","[送货地址]省份","[送货地址]邮编","[送货地址]国家","说明","类型","行业","年收入","员工","标准行业代码","股票代码","上级客户 ID","所有权","营销活动 ID","评分","负责人","负责人 ID","创建日期","修改日期","修改人","创建人","已删除","地址","地理编码状态","纬度","经度"
"深圳九洲数据科技有限公司","1572b625-a2cf-86ae-b6d5-5eca0560d891","http://www.bigdata-jz.com.cn","info@bigdata-jz.com.cn","","025-12345678","","","数据大道12-9","深圳","广东","","中国","","","","","","","目标对象","文化","100000000","200","","","","","","","user1","eb3601b4-2218-8e97-0ff5-5ec8e34f467b","05/24/2020 01:24 pm","05/24/2020 01:24 pm","eb3601b4-2218-8e97-0ff5-5ec8e34f467b","eb3601b4-2218-8e97-0ff5-5ec8e34f467b","0","","","0.00000000","0.00000000"
"四川大熊猫旅游信息咨询有限公司","72b7d73d-8321-9ab4-957b-5ec94beb29ef","https://www.pandainfo.com","test1@pandainfo.com","","010-12345678","","","","","","","","","","","","","","","","","","","","","","","","user1","eb3601b4-2218-8e97-0ff5-5ec8e34f467b","05/24/2020 12:12 am","05/24/2020 12:12 am","eb3601b4-2218-8e97-0ff5-5ec8e34f467b","eb3601b4-2218-8e97-0ff5-5ec8e34f467b","0","","","0.00000000","0.00000000"
导入前所有的客户
```

<p align="center">
    <img width="800" src="../../images/products/dscrm/107.png" alt="" />
</p>

<p align="center">
    <img width="800" src="../../images/products/dscrm/108.png" alt="" />
</p>

<p align="center">
    <img width="800" src="../../images/products/dscrm/109.png" alt="" />
</p>

- 确认导入文件属性

<p align="center">
    <img width="800" src="../../images/products/dscrm/110.png" alt="" />
</p>

- 确认字段映射

下列表格包含该模块的所有字段，可以把导入数据文件里的数据与这些字段映射。如果文件包含一个标题行，将使用标题映射字段。请检查映射关系， 确定是您期望的结果，如果不是请进行调整。为帮助您检查映射关系，数据文件里第一行已经显示出来。请确保映射了所有必选字段（\* 表示必选字段）。

<p align="center">
    <img width="800" src="../../images/products/dscrm/111.png" alt="" />
</p>

- 检查重复数据

为避免创建重复记录，选择在导入时用来检测重复记录的字段。已有记录里如果已有这些值，将视为重复记录。重复记录将现在出来(下一页)。然后你就可以选择这些记录觉得是否进行导入。

<p align="center">
    <img width="800" src="../../images/products/dscrm/112.png" alt="" />
</p>

如果没有问题，点击「现在导入」按钮

- 查看导入结果

如果数据没有问题，会一次性导出成功，就不需要做下面的重新导入了。

<p align="center">
    <img width="800" src="../../images/products/dscrm/113.png" alt="" />
</p>

<p align="center">
    <img width="800" src="../../images/products/dscrm/114.png" alt="" />
</p>

如果 csv 文件数据有问题，大盛 CRM 系统在页面给出具体是哪个字段出错，也可以点击「下载错误列表」错误数据的整理文件，按照要求修改之后再次从第一步开始上传。

### 导入类型：创建并且更新现有数据

- 上传数据文件

导入文件准备或者模板下载
准备要导入的数据文件，或者下载一个数据模板文件参考并创建一个数据文件。导入文件默认是「CSV」格式的文件。建议在导入之前最好是下载大盛 CRM 官方提供的模版，即点击：“下载数据文件模版”，可以获取，用自己的电脑编辑工具打开，内容大体如下，每个人的不完全一样。请按照模版的说明操作，填入客户的数据。

选择导入文件
下面是测试数据，修改一条，添加一条。

<p align="center">
    <img width="800" src="../../images/products/dscrm/115.png" alt="" />
</p>

导入前所有的客户

<p align="center">
    <img width="800" src="../../images/products/dscrm/116.png" alt="" />
</p>

<p align="center">
    <img width="800" src="../../images/products/dscrm/117.png" alt="" />
</p>

<p align="center">
    <img width="800" src="../../images/products/dscrm/118.png" alt="" />
</p>

- 确认导入文件属性

<p align="center">
    <img width="800" src="../../images/products/dscrm/119.png" alt="" />
</p>

- 确认字段映射

下列表格包含该模块的所有字段，可以把导入数据文件里的数据与这些字段映射。如果文件包含一个标题行，将使用标题映射字段。请检查映射关系， 确定是您期望的结果，如果不是请进行调整。为帮助您检查映射关系，数据文件里第一行已经显示出来。请确保映射了所有必选字段（\* 表示必选字段）。

<p align="center">
    <img width="800" src="../../images/products/dscrm/120.png" alt="" />
</p>

- 检查重复数据

为避免创建重复记录，选择在导入时用来检测重复记录的字段。已有记录里如果已有这些值，将视为重复记录。重复记录将现在出来(下一页)。然后你就可以选择这些记录觉得是否进行导入。

<p align="center">
    <img width="800" src="../../images/products/dscrm/121.png" alt="" />
</p>

- 查看导入结果

<p align="center">
    <img width="800" src="../../images/products/dscrm/122.png" alt="" />
</p>

<p align="center">
    <img width="800" src="../../images/products/dscrm/123.png" alt="" />
</p>

如果数据没有问题，会一次性导出成功，就不需要做下面的重新导入了。

## 客户转移

### 只转移客户

在大盛 CRM 中，很多资源都可以转移，最少一个客户资源可以转移给其他成员进行跟进，选中某一条或者某几条客户，对「负责人」进行更换。

### 转移前客户数据

<p align="center">
    <img width="800" src="../../images/products/dscrm/124.png" alt="" />
</p>

转移：将客户「江苏大话西游文化传媒公司」的负责人 user1 即张三，替换为 user2 李四。
步骤：选中或者直接点击「负责人」旁边的 ico

<p align="center">
    <img width="800" src="../../images/products/dscrm/125.png" alt="" />
</p>

李四登陆系统就可以看到客户「江苏大话西游文化传媒公司」的负责人是自己。

<p align="center">
    <img width="800" src="../../images/products/dscrm/126.png" alt="" />
</p>

### 转移和客户关联的其他资源

转移可以选择是否同时将此客户下的联系人、合同、商机负责人同时转移给所选择的负责人。转移后，可将原负责人转换为团队成员（赋予只读或读写权限）和移出（原负责人不在对该合同进行维护）。

需要将客户「北京华夏春松科技有限公司」从`张三user1`转移到`李四user2`，并且将此客户下的关联的其他资源也全部转移给李四。
转移前数据

<p align="center">
    <img width="800" src="../../images/products/dscrm/127.png" alt="" />
</p>

转移：将客户`基本信息`、`历史记录备忘录`、`联系人`、`商业机会`都转移给李四。
`基本信息`转移

<p align="center">
    <img width="800" src="../../images/products/dscrm/128.png" alt="" />
</p>

`历史备忘录`转移

<p align="center">
    <img width="800" src="../../images/products/dscrm/129.png" alt="" />
</p>

截止目前李四只能看到 `基本信息`与其中一个`历史备忘录`

<p align="center">
    <img width="800" src="../../images/products/dscrm/130.png" alt="" />
</p>

`联系人`转移

<p align="center">
    <img width="800" src="../../images/products/dscrm/131.png" alt="" />
</p>

截止目前李四只能看到 `基本信息`、其中一个`历史备忘录`与`联系人`信息

<p align="center">
    <img width="800" src="../../images/products/dscrm/132.png" alt="" />
</p>

`商业机会`转移

<p align="center">
    <img width="800" src="../../images/products/dscrm/133.png" alt="" />
</p>

李四此时也拥有了商业机会

<p align="center">
    <img width="800" src="../../images/products/dscrm/134.png" alt="" />
</p>

## 团队协作维护客户关系

同一个团队的员工可以共同维护一个或者多个客户，「同一」指员工在相同的「用户组」中。

如：张三与李四 都属于「销售」组。那么他们都看到属于「销售」组的客户数据。

张三与李四同时在「销售」组中。

<p align="center">
    <img width="800" src="../../images/products/dscrm/135.png" alt="" />
</p>

张三可以看到的「销售」组的客户数据

<p align="center">
    <img width="800" src="../../images/products/dscrm/136.png" alt="" />
</p>

李四可以看到的「销售」组的客户数据

<p align="center">
    <img width="800" src="../../images/products/dscrm/137.png" alt="" />
</p>

## 客户合并重复

合并重复即合并重复数据，也称之为「去重」，是查找客户名称，电话及联系人等 CRM 的重要信息，排除重复信息。

比如客户名称为“北京华夏春松科技有限公司”，有的用户可能会录入“华夏春松”、“华夏春松科技有限公司”、“春松”或者“Chatopera”，就会导致同一个客户被记录多条数据。为了保证数据的正确性和有效唯一性，用户在记录新的数据或查找相关数据时可通过查重查找相关数据或者合并重复数据。

<p align="center">
    <img width="800" src="../../images/products/dscrm/138.png" alt="" />
</p>

<p align="center">
    <img width="800" src="../../images/products/dscrm/139.png" alt="" />
</p>

