# Chatopera InfoCenter

文档中心

Code as Docs.

https://dotnet.github.io/docfx/tutorial/docfx_getting_started.html

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
