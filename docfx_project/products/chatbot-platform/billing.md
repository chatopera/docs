# 计费及发票

## 计费类型

当前 Chatopera 云服务支持 **按天计费** 和 **按年付费** 两种形式。

| 类型     | 适用对象               | 业务量                                      |
| -------- | ---------------------- | ------------------------------------------- |
| 按天计费 | 小型企业，初创公司     | 在线客服量每天不超过 50 人次，咨询量小      |
| 按年计费 | 成长型企业，中大型公司 | 在线客服量每天超过 100 人次或更多，咨询量大 |

**提示：** 现有语音识别 API 仅有按天计费类型。即按年计费适用于机器人[对话检索 API](/products/chatbot-platform/integration.html#对话检索)，不适用于[语音识别 API](/products/chatbot-platform/integration.html#语音识别)；按天计费适用于[对话检索 API](/products/chatbot-platform/integration.html#对话检索)和[语音识别 API](/products/chatbot-platform/integration.html#语音识别)。

## 对话检索

对话检索 API 包括内容参考[系统集成文档](https://docs.chatopera.com/products/chatbot-platform/integration.html#%E5%AF%B9%E8%AF%9D%E6%A3%80%E7%B4%A2)。

### 按天计费

每日单个用户可以免费请求机器人对话 1000 次，单日>=1000 次的部分按照每条 1 分钱计算，多出的部分按量收费，按日结算，每天生成账单。

### 按年计费

包年，目前支持两种套餐。

| 套餐（条/年） | 费用    | 相对于按天计费的优惠 |
| ------------- | ------- | -------------------- |
| 100W/年       | 0.6W 元 | 350 元               |
| 500W/年       | 4W 元   | 6350 元              |

- **套餐** 是记录总量，包含**原免费额度**

- 超过**套餐**额度仍按照 1 分每条

- **套餐**按年度计算，没有用完的额度过期作废

- 可以从现有**套餐**升级到高级版本，但是不能从现有**套餐**降级

- *相对于按天计费的优惠*是相对于**按天计费**的情况，前 1000 条免费，超过后每条 1 分钱，购买套餐能省的钱

开启**按年计费**和购买套餐，请联系 info@chatopera.com。

## 语音识别

[语音识别 API](/products/chatbot-platform/integration.html#语音识别) 文档说明。

### 按天计费

每日单个用户可以免费请求语音识别 10 分钟，单日累积时长>=10 分钟的部分按照每秒 1 分钱计算，多出的部分按量收费，按日结算，每天生成账单。

## 账单

登陆后，选择右上角头像，弹出菜单，在菜单中打开“费用中心”。 在费用中心可看到按时间段生成的账单。

<table class="image">
<caption align="bottom">图：费用中心</caption>
<tr><td><img width="800" src="../../images/products/platform/billing-1.png" alt="费用中心"/></td></tr>
</table>

## 充值

Chatopera 云服务支持微信支付和企业银行账号汇款，在控制台右上角的导航栏进入“费用中心”进行相关操作。

## 发票

发票服务，在控制台右上角的导航栏进入“费用中心”进行申请，同时可发送邮件到 info@chatopera.com 中跟进发票开具状态。

## 私有部署

Chatopera 云服务是 Chatopera 机器人平台以“软件即服务(SaaS)”的方式提供给客户，同时企业可以获得 Chatopera 机器人平台以安装到企业的私有设备上，商定购买私有部署的版本，[联系我们](https://www.chatopera.com/mail.html)，私有部署版本只收取软件的商业授权证书费用，不按 API 请求量计费。

## 评论

<script src="https://utteranc.es/client.js"
        repo="chatopera/docs"
        issue-term="pathname"
        label="Comment"
        theme="github-light"
        crossorigin="anonymous"
        async>
</script>
