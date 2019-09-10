# 权限管理

根据角色和部门进行权限检查：

- 管理员可以管理所有资源
- 管理员可以创建部门/角色/人员，人员可设置为是否是“管理员”。
- 每个人最多在一个部门中
- 组织机构支持层级的树状结构
- 角色包含对不同资源的读写权限
- 资源如联系人，客户等是根据部门进行隔离的
- 资源如系统配置，组织机构管理等是不隔离的

假设组织机构如下：

<table class="image">
    <caption align="bottom"></caption>
    <tr>
        <td><img width="800" src="../../images/products/cosin/Picture23.png" alt="" /></td>
    </tr>
</table>

- 联系人

联系人是被隔离的资源。

- 李四所能看到的联系人全集是 A 部门及其附属部门所创建的全部联系人；但是李四究竟能不能看到则取决于他被赋与的角色有没有看到联系人的权限

<pre class="prettyprint">
联系人的权限包括：我的联系人，全部联系人，今日新增，本周新增，等.
假如李四被赋予“全部联系人”权限，那么他能看到A部门及其附属部门所创建联系人。    
</pre>

- 李四看不到 B 部门的联系人，张三看不到 A 部门的联系人。
- 李四能看到刘一创建的联系人，刘一看不到李四创建的联系人。

- 系统设置

系统设置是不被隔离的资源。
如果李四和张三都被赋予了"系统管理"的权限，二者看到的系统管理面板是一致的。

## 评论

<script src="https://utteranc.es/client.js"
        repo="chatopera/docs"
        issue-term="pathname"
        label="Comment"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
