
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
dotnet tool update --global docfx --version 2.61.0
```

需要使用 `2.61.0` 版本，更高级版本样式不兼容，[维护 docfx 工具版本](https://github.com/chatopera/docs/issues/71)。

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
