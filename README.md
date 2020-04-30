# Chatopera Docs

文档中心

Code as Docs.

## 编译

```
./admin/docker/build.sh
```

输出文件目录 `./dist/_site`.

## 实时编译

```
./admin/docker/serve.sh
```

查看编译日志。

```
tail -f ./tmp/build.log
```

使用浏览器查看最新版本 `https://0.0.0.0:8027`.

```
open https://0.0.0.0:8027
```

## 项目基于

https://github.com/chatopera/docfx-get-started

## 发布

构建文档中心镜像

```
./admin/docker/image.sh
```

运行镜像

```
docker run -it --rm -p 8000:80 chatopera/docs:latest
```

## 工具

https://dotnet.github.io/docfx/tutorial/docfx_getting_started.html

## 撰写文档

For Mac users.

```
brew install docfx
npm i
npm start
# input `rs` for restart
```

## 许可协议

Copyright (2019-2020) Chatopera Inc. <https://chatopera.com>. All rights reserved.
This software and related documentation are provided under a license agreement containing restrictions on use and disclosure and are protected by intellectual property laws.
Except as expressly permitted in your license agreement or allowed by law, you may not use, copy, reproduce, translate, broadcast, modify, license, transmit, distribute, exhibit, perform, publish, or display any part, in any form, or by any means. Reverse engineering, disassembly, or decompilation of this software, unless required by law for interoperability, is prohibited.

[![chatoper banner][co-banner-image]][co-url]

[co-banner-image]: https://user-images.githubusercontent.com/3538629/42383104-da925942-8168-11e8-8195-868d5fcec170.png
[co-url]: https://www.chatopera.com
