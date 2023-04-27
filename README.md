<div align=right>

[主页](https://www.chatopera.com/)　|　[Chatopera 云服务](https://bot.chatopera.com/)　|　[文档中心](https://docs.chatopera.com)　|　[博客专栏](https://chatopera.blog.csdn.net/)　|　[更新日志](https://status.chatopera.com)　|　[帮助](https://github.com/chatopera/docs/issues/new/choose)

</div>

# Chatopera 文档中心

[![DIVIO documentation system](https://img.shields.io/badge/DIVIO-Documentation%20System-blue)](https://documentation.divio.com/) [![Docker Tags](https://raw.githubusercontent.com/hailiang-wang/Rishit-dagli/master/badges/docker.svg)](https://hub.docker.com/repository/docker/chatopera/docs/tags?page=1&ordering=last_updated "Get Latest Docker Images")

Chatopera: Chat as a Service. We believe Chatbot is the next application platform to deliver services.

Chatopera 为开发者提供上线智能对话机器人的工具，帮助企业提升智能化和业务流程自动化，在市场营销、售后服务和企业协作中，应用聊天机器人，在 Chatopera 我们相信，聊天即服务，聊天机器人是下一代服务发布方式。

![](docfx_project/images/chatopera_brand_20230209122156.png)

## 反馈建议

提交：

- 开发环境搭建、功能咨询和使用问题；
- 提交软件缺陷；
- 描述新需求、反馈建议；
- 瓶颈分析、性能优化建议和安全漏洞等.

地址：

[https://github.com/chatopera/docs/issues/new/choose](https://github.com/chatopera/docs/issues/new/choose)

## 撰写文档 

* 使用 Git 下载文档源文件
* 使用 [Obsidian](https://obsidian.md/) 撰写文档
* 使用 Git 更新源文件

```
git clone git@github.com:chatopera/docs.git
cd docs
rm -rf .obsidian
cp -rf templates/_obsidian .obsidian
# 在 Obsidian 中打开 vault 路径：docs
# 编辑完成后提交
git add --all
git commit -m "YOUR MSG"
git push origin master
```

## Preview site on Windows

依赖：1) [docfx](https://dotnet.github.io/docfx/) 2) [WSL](https://github.com/microsoft/WSL)

安装工具

```
dotnet tool update --global docfx --version 2.60.0 
```

需要使用 `2.60.0` 版本，更高级版本样式不兼容。

构建和托管站点，在 WSL 内，执行

```
cd docs
./admin/build.sh && ./admin/serve.sh
```

使用浏览器打开：http://localhost:8027/


## 文档中心助手机器人

Build with

<https://github.com/chatopera/docs.bot>

# Give credits to

## DocFX

An extensible and scalable static documentation generator, [https://dotnet.github.io/docfx/]( https://dotnet.github.io/docfx/).

[Installation Guide](./INSTALLATION.md).

## The Grand Unified Theory of Documentation

[What nobody tells you about documentation](https://documentation.divio.com/)

## License

Copyright (2019-2023) 北京华夏春松科技有限公司. <https://chatopera.com>. All rights reserved.
This software and related documentation are provided under a license agreement containing restrictions on use and disclosure and are protected by intellectual property laws.
Except as expressly permitted in your license agreement or allowed by law, you may not use, copy, reproduce, translate, broadcast, modify, license, transmit, distribute, exhibit, perform, publish, or display any part, in any form, or by any means. Reverse engineering, disassembly, or decompilation of this software, unless required by law for interoperability, is prohibited.

[![chatoper banner][co-banner-image]][co-url]

[co-banner-image]: https://user-images.githubusercontent.com/3538629/42383104-da925942-8168-11e8-8195-868d5fcec170.png
[co-url]: https://www.chatopera.com
