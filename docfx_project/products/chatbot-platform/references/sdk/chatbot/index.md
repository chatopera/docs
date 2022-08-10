# `Chatbot` 类构造函数 <!-- markup:skip-line -->

## 构造函数

<h4><font color="purple">构造函数</font></h4>

```API
Chatbot(clientId, secret [, botProvider])
```

<h4><font color="purple">参数说明</font></h4>

| name        | type   | required | description                                                                                                                      |
| ----------- | ------ | -------- | -------------------------------------------------------------------------------------------------------------------------------- |
| clientId    | string | &#10004; | 在[机器人控制台/机器人/设置](https://bot.chatopera.com/dashboard)中获取                                                          |
| secret      | string | &#10004; | 获取办法同上                                                                                                                     |
| botProvider | string | &#10008; | Chatopera 机器人平台地址，<br><font color="green">当使用 Chatopera 云服务时，该值为 <https://bot.chatopera.com>，也是默认值</font> |

## 更多实例化例子

不同语言下，`Chatbot`类的包名或引用方式不同，Node.js SDK 的实例化上文已经表述，以下再介绍其它语言。

<h5><font color="purple">Java</font></h5>

```Java
import com.chatopera.bot.sdk.Chatbot;
...
Chatbot chatbot = new Chatbot(clientId, secret);
```

<h5><font color="purple">Python</font></h5>

```Python
from chatopera import Chatbot
bot = Chatbot(clientId, secret)
```

<h5><font color="purple">PHP</font></h5>

假设使用[composer](https://getcomposer.org/)作为包管理工具，其它安装方式参考[chatopera-php-sdk](https://github.com/chatopera/chatopera-php-sdk)。

```PHP
<?php

include_once **DIR** . "/vendor/autoload.php";
$chatbot = new Chatopera\SDK\Chatbot($appId, \$secret);

```

<h5><font color="purple">Go</font></h5>

```Go
import (
 "github.com/chatopera/chatopera-go-sdk"
)
...
var chatbot = chatopera.Chatbot(clientId, secret)
```
