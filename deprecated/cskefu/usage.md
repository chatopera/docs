# 访问统计

页面统计是针对坐席控制台的 Web 页面的使用情况进行统计，按照页面打开次数、登录地址和入口页面等内容进行计数。目前只支持接入[百度统计](https://tongji.baidu.com/)，请注册百度统计帐号【百度统计-站长版】使用。

## 获得百度统计 Key

登录，新增网站，<https://tongji.baidu.com/>

![新增网站](../../images/products/cosin/g23.jpg)

- 网站域名：春松客服系统域名，必须是你安装的实际地址（假设你安装在 cc.example.com，则填写 cc.example.com）

- 网站首页：春松客服首页 (<https://cc.example.com>)

拷贝 `YOUR_SITE_KEY`: **登录 -> 管理 -> 新增网站 -> 代码获取 -> 拷贝 SiteKey**。

```说明
hm.src = "https://hm.baidu.com/hm.js?YOUR_SITE_KEY";
```

![统计代码获取](../../images/products/cosin/g25.jpg)

得到`YOUR_SITE_KEY`后继续`设置环境变量`。

## 设置环境变量

设置环境变量 `TONGJI_BAIDU_SITEKEY`，可以在 `.env` 文件或 `docker-compose.yml` 文件中添加，参考部署文档：

<https://docs.chatopera.com/products/cskefu/deploy.html>

```环境变量
TONGJI_BAIDU_SITEKEY=YOUR_SITE_KEY
```

示例

```环境变量
TONGJI_BAIDU_SITEKEY=585cbac007x12es81b517031e9ec29c56e
```

重启服务

```Bash
docker-compose restart contact-center
```

重启完成后，回到百度统计站点，在网站栏内，点击：**代码安装检查**，代码检查成功表示安装成功；注意网站域名等一致，数据收集有延迟。

## 报告

进入百度统计主页，选择站点“查看报告”

示例：

![示例代码](../../images/products/cosin/g24.jpg)

## 注意事项

- 该功能开发者/企业自行设置

- 开源代码中没有后门、追踪程序、统计等

- 不设置环境变量不进行统计，该统计报告只开发者/企业在百度网站内能查看

- 开发者/企业自行衡量和保护百度统计账号，因百度账号泄漏等原因造成企业/开发者财产损失，春松客服不承担任何责任，见[服务水平协议](https://docs.chatopera.com/products/cskefu/sla.html)。
