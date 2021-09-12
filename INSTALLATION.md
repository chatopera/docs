# Chatopera Docs

文档中心 / Code as Docs.

## TL; DR

```
./admin/docker/serve.sh
```

依赖 `docfx`，在没有安装`docfx`的操作系统上，提供 docker 镜像支持编写。

当前基于版本：[https://github.com/dotnet/docfx/releases/tag/v2.56.7](https://github.com/dotnet/docfx/releases/tag/v2.56.7)


## 安装 Docfx


如果已经安装 docfx 二进制，再安装一下 Node.js。

### HTTP Server

```
./admin/serve.sh
```

### 编译


然后，自动 live load，使用 `./admin/live.sh`。

原理：基于 Nodemon 自动检测变动，然后构建。

## 使用 Docker

仅用于操作系统中没有 docfx 并不打算安装的用户。

```
cd docs
docker run -d --rm --name devdocs  -p 8080:8080 -v $PWD:/work chatopera/docfx:2.45 -c "tail -f /var/log/faillog"

# 进入docker容器
docker exec -it devdocs bash

# 启动 nginx
nginx

# 编译站点源文件
/work/admin/build.sh  && cd /work/dist/_site && tar cf - .|(cd /var/www/html;tar xf -)

# 使用浏览器访问
# http://YOUR_HOST_IP:8080

# 编辑结束，退出
docker stop devdocs
docker rm devdocs
```

### 编译

```
./admin/docker/build.sh
```

输出文件目录 `./dist/_site`.

### 实时编译

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
