# 语音识别

目前，Chatopera 机器人平台只支持中文简体 （zh_CN）机器人做中文语音识别。

语音文件格式：16k 采样率，单通道，PCM。

```说明
Channels       : 1
Sample Rate    : 16000
Precision      : 16-bit
Sample Encoding: 16-bit Signed Integer PCM
```

下载[音频示例](/images/products/platform/asr.sample.001.wav)。

语音识别接口可使用两种形式提交语音文件：1）文件路径；2）语音文件 base64 格式字符串。

## 提交文件路径识别

```API
Chatbot#command("POST", "/asr/recognize", body)
```

<h4><font color="purple">body / JSON Object</font></h4>

```JSON
{
	"filepath": "{{WAV_FILE_ABS_PATH}}",
	"nbest": 5,
	"pos": true
}
```

| key      | type    | required | description                                          |
| -------- | ------- | -------- | ---------------------------------------------------- |
| filepath | string  | &#10004; | 语音文件绝对路径，或当前应用启动路径(CWD) 的相对路径 |
| nbest    | int     | &#10008; | 语音识别可返回多个结果，方便查询关键词，默认 5       |
| pos      | boolean | &#10008; | 返回值是否分词，默认 false                           |

<h4><font color="purple">result/ JSON Object</font></h4>

```JSON
{
    "rc": 0,
    "data": {
        "duration": 6250,
        "predicts": [
            {
                "confidence": 0.960783,
                "text": "上海浦东机场入境房输入全闭环管理"
            },
            {
                "confidence": 0.960767,
                "text": "上海浦东机场入境防输入全闭环管理"
            },
            {
                "confidence": 0.960736,
                "text": "上海浦东机场入境坊输入全闭环管理"
            }
        ]
    }
}
```

| key          | type      | description                                                    |
| ------------ | --------- | -------------------------------------------------------------- |
| `duration`   | int       | 语音文件时间长度，单位 毫秒，比如 6250 代表 6.25 秒            |
| `predicts`   | JSONArray | 识别结果                                                       |
| `text`       | string    | 识别得到的文本                                                 |
| `confidence` | double    | 置信度，[0-1]，值越大越有可能，`predicts` 按 `confidence` 降序 |

## 提交 base64 字符串识别

```API
Chatbot#command("POST", "/asr/recognize", body)
```

<h4><font color="purple">body / JSON Object</font></h4>

```JSON
{
	"type": "base64",
	"data": "data:audio/wav;base64,{{BASE64_STRING}}",
	"nbest": 5,
	"pos": true
}
```

| key   | type    | required | description                                                                                                      |
| ----- | ------- | -------- | ---------------------------------------------------------------------------------------------------------------- |
| type  | string  | &#10004; | 固定值 `base64`                                                                                                  |
| data  | string  | &#10004; | 语音文件使用 base 编码的字符串，并且必须以 `data:audio/wav;base64,`作为前缀，比如 `data:audio/wav;base64,xyz...` |
| nbest | int     | &#10008; | 语音识别可返回多个结果，方便查询关键词，默认 5                                                                   |
| pos   | boolean | &#10008; | 返回值是否分词，默认 false                                                                                       |

此处，`nbest`和`pos` 与 **提交文件路径识别** API 一致。

<h4><font color="purple">result/ JSON Object</font></h4>

返回值与 **提交文件路径识别** API 一致。

```JSON
{
    "rc": 0,
    "data": {
        "duration": 6250,
        "predicts": [
            {
                "confidence": 0.960783,
                "text": "上海浦东机场入境房输入全闭环管理"
            },
            {
                "confidence": 0.960767,
                "text": "上海浦东机场入境防输入全闭环管理"
            },
            {
                "confidence": 0.960736,
                "text": "上海浦东机场入境坊输入全闭环管理"
            }
        ]
    }
}
```

| key          | type      | description                                                    |
| ------------ | --------- | -------------------------------------------------------------- |
| `duration`   | int       | 语音文件时间长度，单位 毫秒，比如 6250 代表 6.25 秒            |
| `predicts`   | JSONArray | 识别结果                                                       |
| `text`       | string    | 识别得到的文本                                                 |
| `confidence` | double    | 置信度，[0-1]，值越大越有可能，`predicts` 按 `confidence` 降序 |

