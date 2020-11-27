## 常见问题

### SDK / 返回错误 invalid appId

```
{"rc":1,"error":"invalid appId."}
```

这是因为`clientId`和`secret`配置不正确。

### SDK / 返回错误 invalid timestamp

```
{"rc":1,"error":"invalid timestamp."}
```

操作系统需要设置的时间同步为互联网时间，参考

[https://www.sysgeek.cn/manage-time-server-windows-10/](https://www.sysgeek.cn/manage-time-server-windows-10/)

也可以设置为阿里云时间同步器

[https://blog.csdn.net/qq_35448976/article/details/78977164](https://blog.csdn.net/qq_35448976/article/details/78977164)

### Java SDK / Maven 执行抛出异常

`mvn install`抛出异常，SunCertPathBuilderException

```
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
