# 常见问题

## 基本问题

### 注册时为什么需要手机号和邮箱？

Chatopera 作为云服务提供商，应数据监管要求，进行实名制登记方可提供服务。同时为像您提供更好的服务，Chatopera 平台使用您的联系方式对与您和 Chatopera 利益相关的事情进行沟通。Chatopera 不会以任何方式和理由将您的数据分享给第三方。


### Chatopera 云服务是否支持私有部署？

支持，参考[文档](/products/chatbot-platform/contract/on-premise.html)。

## SDK

### 返回错误 invalid appId

```JSON
{"rc":1,"error":"invalid appId."}
```

这是因为`clientId`和`secret`配置不正确。

### 返回错误 invalid timestamp

```JSON
{"rc":1,"error":"invalid timestamp."}
```

操作系统需要设置的时间同步为互联网时间，参考

[https://www.sysgeek.cn/manage-time-server-windows-10/](https://www.sysgeek.cn/manage-time-server-windows-10/)

也可以设置为阿里云时间同步器

[https://blog.csdn.net/qq_35448976/article/details/78977164](https://blog.csdn.net/qq_35448976/article/details/78977164)

### Java SDK / Maven 执行抛出异常

`mvn install`抛出异常，SunCertPathBuilderException

```日志
sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target
```

[解决方案](https://github.com/chatopera/chatopera-sample-java/issues/1)

## 评论

<script src="https://utteranc.es/client.js"
        repo="chatopera/docs"
        issue-term="pathname"
        label="Comment"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
