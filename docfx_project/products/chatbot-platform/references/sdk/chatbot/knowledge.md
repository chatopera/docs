## 知识库管理

### 创建知识库分类

```API
Chatbot#command("POST", "/faq/categories", body)
```

<h4><font color="purple">body / JSON Object</font></h4>

```JSON
{
 "label": "{{categoryText}}"
}
```

<h4><font color="purple">result/ JSON Object</font></h4>

```JSON
{
    "rc": 0,
    "data": {
        "value": "{{categoryId}}",
        "categories": [
            {
                "value": "{{categoryId}}",
                "label": "{{categoryText}}",
                "children": [
                    {
                        "value": "I7vfx47i5I",
                        "label": "二级分类名"
                    }
                ]
            },
            {
                "value": "{{categoryId}}",
                "label": "x2"
            }
        ]
    }
}
```

### 获取知识库分类信息

```API
Chatbot#command("GET", "/faq/categories")
```

<h4><font color="purple">result / JSON Object</font></h4>

```JSON
{
    "rc": 0,
    "data": [
        {
            "value": "{{categoryId}}",
            "label": "{{categoryText}}",
            "children": [
                {
                    "value": "{{categoryId}}",
                    "label": "{{categoryText}}"
                }
            ]
        }
    ]
}
```

### 更新知识库分类

```API
Chatbot#command("", "/faq/categories", body)
```

<h4><font color="purple">body / JSON Object</font></h4>

```JSON
{
 "value": "{{categoryId}}",
 "label": "新的名字"
}
```

<h4><font color="purple">result/ JSON Object</font></h4>

```JSON
{
    "rc": 0,
    "data": [
        {
            "value": "wwQyjS310",
            "label": "一级分类名",
            "children": [
                {
                    "value": "{{categoryId}}",
                    "label": "新的名字"
                }
            ]
        }
    ]
}
```

### 删除知识库分类

```API
Chatbot#command("DELETE", "/faq/categories/{{categoryId}}")
```

<h4><font color="purple">path</font></h4>

| key        | type   | default        | description  |
| ---------- | ------ | -------------- | ------------ |
| categoryId | string | 无默认值，必填 | 分类唯一标识 |

<h4><font color="purple">result/ JSON Object</font></h4>

```JSON
{
    "rc": 0,
    "data": [
        {
            "value": "TSDD-W6T9",
            "label": "x2"
        }
    ]
}
```

### 创建问答对

```API
Chatbot#command("post", "/faq/database", body)
```

<h4><font color="purple">body / JSON Object</font></h4>

```JSON
{
 "post": "如何查看快递单号",
 "replies": [
  {
   "rtype": "plain",
   "content": "foo",
   "enabled": true
  },
  {
   "rtype": "plain",
   "content": "bar",
   "enabled": true
  }
 ],
 "enabled": true,
 "categoryTexts": [
  "一级分类名",
  "二级分类名"
 ]
}
```

<h4><font color="purple">result / JSON Object</font></h4>

```JSON
{
 "rc": 0,
 "data": {
  "id": "{docId}",
  "replyLastUpdate": "{{replyLastUpdate}}"
 }
}
```

### 更新知识库问答对

```API
Chatbot#command("PUT", "/faq/database/{{docId}}", body)
```

<h4><font color="purple">path</font></h4>

| key   | type   | default        | description |
| ----- | ------ | -------------- | ----------- |
| docId | string | 无默认值, 必填 | 问答对标识  |

<h4><font color="purple">body / JSON Object</font></h4>

```JSON
{
 "post": "怎么开通微信支付?",
 "replyLastUpdate": "{{replyLastUpdate}}",
 "replies": [
  {
   "rtype": "plain",
   "content": "foo2",
   "enabled": true
  },
  {
   "rtype": "plain",
   "content": "bar2",
   "enabled": true
  }
 ],
 "enabled": true
}
```

<h4><font color="purple">result / JSON Object</font></h4>

```JSON
{
    "rc": 0,
    "data": {
        "id": "{{docId}}",
        "replyLastUpdate": "{{replyLastUpdate}}"
    }
}
```

### 获取问答对列表

```API
Chatbot#command("GET", "/faq/database?limit={{limit}}&page={{page}}&q={{q}}")
```

<h4><font color="purple">path</font></h4>

| key   | type   | default | description                      |
| ----- | ------ | ------- | -------------------------------- |
| limit | int    | 20       | 返回最多多少条数据               |
| page  | int    | 1      | 返回第多少页                     |
| q     | string | 空      | 问答对匹配时，问题应包含的关键字 |

<h4><font color="purple">result / JSON Object</font></h4>

```JSON
{
    "total": 3,
    "current_page": 1,
    "total_page": 1,
    "data": [
        {
            "post": "如何查看快递单号",
            "categories": [
                "wwQyjS310",
                "I7vfx47i5I"
            ],
            "enabled": true,
            "id": "{{docId}}"
        }
    ],
    "rc": 0,
    "status": {
        "reindex": 0,
        "retrain": 0
    }
}
```

### 创建问答对相似问

```API
Chatbot#command("POST", "/faq/database/{{docId}}/extend", body)
```

<h4><font color="purple">path</font></h4>

| key   | type   | default        | description |
| ----- | ------ | -------------- | ----------- |
| docId | string | 无默认值, 必填 | 问答对标识  |

<h4><font color="purple">body / JSON Object</font></h4>

```JSON
{
 "post": "怎样支持微信支付?"
}
```

<h4><font color="purple">result / JSON Object</font></h4>

```JSON
{
    "rc": 0,
    "data": {
        "id": "{{extendId}}"
    }
}
```

### 获取问答对相似问列表

```API
Chatbot#command("GET", "/faq/database/{{docId}}/extend")
```

<h4><font color="purple">path</font></h4>

| key   | type   | default        | description |
| ----- | ------ | -------------- | ----------- |
| docId | string | 无默认值, 必填 | 问答对标识  |

<h4><font color="purple">result / JSON Object</font></h4>

```JSON
{
    "total": 1,
    "current_page": 1,
    "total_page": 1,
    "data": [
        {
            "post": "怎样支持微信支付?",
            "postId": "{{docId}}",
            "enabled": true,
            "id": "{{extendId}}"
        }
    ],
    "rc": 0
}
```

### 更新问答对相似问

```API
Chatbot#command("PUT", "/faq/database/{{docId}}/extend/{{extendId}}", body)
```

<h4><font color="purple">path</font></h4>

| key      | type   | default        | description |
| -------- | ------ | -------------- | ----------- |
| docId    | string | 无默认值, 必填 | 问答对标识  |
| extendId | string | 无默认值, 必填 | 扩展问标识  |

<h4><font color="purple">body / JSON Object</font></h4>

```JSON
{
 "post": "怎样支持微信支付?"
}
```

<h4><font color="purple">result / JSON Object</font></h4>

```JSON
{
    "rc": 0,
    "data": {
        "id": "{{extendId}}"
    }
}
```

### 删除问答对相似问

```API
Chatbot#command("DELETE", "/faq/database/{{docId}}/extend/{{extendId}}")
```

<h4><font color="purple">path</font></h4>

| key      | type   | default        | description |
| -------- | ------ | -------------- | ----------- |
| docId    | string | 无默认值, 必填 | 问答对标识  |
| extendId | string | 无默认值, 必填 | 扩展问标识  |

<h4><font color="purple">result / JSON Object</font></h4>

```JSON
{
    "rc": 0,
    "msg": "done"
}
```

### 删除问答对

```API
Chatbot#command("DELETE", "/faq/database/{{docId}}")
```

<h4><font color="purple">result / JSON Object</font></h4>

```JSON
{
    "rc": 0,
    "msg": "done"
}
```

### 获取知识库热门问题

```API
Chatbot#command("GET", "/faq/database/inquiryrank?topN={{topN}}")
```

<h4><font color="purple">path</font></h4>

| key  | type | default | description                          |
| ---- | ---- | ------- | ------------------------------------ |
| topN | int  | 10      | 获得热门问题的条数，即导出数据的条数 |

<h4><font color="purple">result / JSON Object</font></h4>

```JSON
{
    "rc": 0,
    "data": [
        {
            "docId": "{{docId}}",
            "inquiryscore": "13",
            "post": "{{post}}",
            "enabled": true,
            "categories": [
                "s1",
                "s2"
            ]
        },
        {
            "docId": "{{docId}}",
            "inquiryscore": "0",
            "post": "{{post}}",
            "enabled": true,
            "categories": []
        },
        ...
    ]
}
```

