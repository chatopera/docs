# 系统初始化

完成[部署春松客服实例](/products/cskefu/deploy.html)后，还需要针对企业的组织架构和客服坐席进行配置才能使用，默认的账号 `admin` 是超级管理员，该账号做了特殊处理：可以使用坐席工作台，但是不具备接待访客会话的能力。

只有对系统进行初始化，才能开始处理客户咨询，所以初始化主要是针对坐席管理的，也请先详细阅读 [权限设计](/products/cskefu/accounting.html#%E6%9D%83%E9%99%90%E8%AE%BE%E8%AE%A1) 后继续阅读以下内容。

## 组织机构

参考[组织机构管理](/products/cskefu/accounting.html#组织机构管理)，为企业建设一个树形的组织架构。针对坐席小组，设定为 **技能组**。

## 角色

参考[角色管理](/products/cskefu/accounting.html#%E8%A7%92%E8%89%B2%E7%AE%A1%E7%90%86)，创建角色并授予相应的权限，客服人员主要需要的资源就是**坐席对话**，**全部客户** 和 **全部联系人**，此处**全部客户**和**全部联系人**是限定在该坐席所在的组织机构和下属组织机构而言的。

<p align="center">
<img width="500" src="../../images/products/cskefu/init-1.jpg" alt="" />
</p>

若果该角色需要能干预其他坐席人员的会话，则可授予**会话监控**，此处也是监控该坐席所在的组织机构和下属组织机构的。

一个春松客服登陆用户，具体有什么资源的访问，看到哪些数据，是通过其所在的组织机构及其下属组织机构，和该登陆用户的角色授予情况来判断的，因为一个资源，即有资源名称，又属于一个组织机构。

## 账号

参考[账号管理](/products/cskefu/accounting.html#%E8%B4%A6%E5%8F%B7%E7%AE%A1%E7%90%86)，创建账号后，将账号添加到组织机构和角色。

## 常见问题

- [#378](https://github.com/chatopera/cskefu/issues/378) 访客打开网页聊天控件，提示等待

没有坐席在线，需要按照上述建立有效的坐席人员，并有坐席人员登陆。春松客服部署好以后，默认只有`超级管理员`，这时直接建立网页渠道访问，超级管理员在线，就会出现提示等待。

## 评论

<script src="https://utteranc.es/client.js"
        repo="chatopera/docs"
        issue-term="pathname"
        label="Comment"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
