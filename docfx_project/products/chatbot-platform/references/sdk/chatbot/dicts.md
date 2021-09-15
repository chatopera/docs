# 词典管理

## 创建自定义词典

```API
Chatbot#command("POST", "/clause/customdicts", body)
```

<h4><font color="purple">body / JSON Object</font></h4>

```JSON
{
	"name": "{{customDictName}}",
	"type": "vocab"
}
```

| key  | type   | required | description                                    |
| ---- | ------ | -------- | ---------------------------------------------- |
| name | string | &#10004; | 自定词典名称，使用`小写字母和数据`组成的字符串 |

<h4><font color="purple">result/ JSON Object</font></h4>

```JSON
{
    "rc": 0,
    "data": {
        "name": "{{customDictName}}",
        "description": "",
        "samples": null,
        "createdate": "2019-08-07 19:59:14",
        "updatedate": "2019-08-07 19:59:14"
    }
}
```

## 获取自定义词典列表

```API
Chatbot#command("GET", "/clause/customdicts?limit={{limit}}&page={{page}}")
```

<h4><font color="purple">result/ JSON Object</font></h4>

```JSON
{
    "rc": 0,
    "total": 3,
    "current_page": 1,
    "total_page": 3,
    "data": [
        {
            "name": "{{customDictName}}",
            "description": "",
            "samples": null,
            "createdate": "2019-08-07 19:58:08",
            "updatedate": "2019-08-07 19:58:08"
        }
    ]
}
```

## 更新自定义词典

```API
Chatbot#command("PUT", "/clause/customdicts/{{customDictName}}", body)
```

<h4><font color="purple">path</font></h4>

| key            | type   | default        | description    |
| -------------- | ------ | -------------- | -------------- |
| customDictName | string | 无默认值, 必填 | 自定义词典标识 |

<h4><font color="purple">body / JSON Object</font></h4>

```JSON
{
    "description": "高级轿车品牌"
}
```

<h4><font color="purple">result/ JSON Object</font></h4>

```JSON
{
    "rc": 0,
    "data": {
        "name": "pizza",
        "description": "",
        "samples": null,
        "createdate": "2020-07-20 20:52:00",
        "updatedate": "2020-07-20 20:51:59",
        "type": "vocab",
    }
}
```

## 删除自定义词典

```API
Chatbot#command("DELETE", "/clause/customdicts/{{customDictName}}")
```

<h4><font color="purple">path</font></h4>

| key            | type   | default        | description    |
| -------------- | ------ | -------------- | -------------- |
| customDictName | string | 无默认值, 必填 | 自定义词典标识 |

<h4><font color="purple">result/ JSON Object</font></h4>

```JSON
{
    "rc": 0,
    "msg": "success",
    "error": null,
    "data": {
        "status": {
            "needReindex": 2,
            "needRetrain": 2
        }
    }
}
```

## 评论

<script src="https://utteranc.es/client.js"
        repo="chatopera/docs"
        issue-term="pathname"
        label="Comment"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
