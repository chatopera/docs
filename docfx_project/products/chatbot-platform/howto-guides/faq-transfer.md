# 导入和导出知识库问答对

导入和导出是对知识库的数据进行批量管理，导出的数据可以导入到其它机器人知识库中，导出的内容包括知识库分类信息、标准问、相似问和答案和启用状态。

## 应用场景

1）备份机器人知识库；
2）新建机器人快速导入。

本文以 Chatopera 机器人管理控制台为工具进行说明，如果想通过更自动化的方式，参考[使用 CLI 导入和导出对话语料](https://docs.chatopera.com/products/chatbot-platform/howto-guides/cli-export-import.html)。

## 批量导出

步骤：知识库页面点击「导出」

<table class="image">
    <caption align="bottom">导出知识库</caption>
    <tr>
        <td><img width="800" src="../../../images/products/faq/image2020-7-16_15-51-3.png" alt="" /></td>
    </tr>
</table>

文件导出格式为 json 格式，json 是一种节省空间、灵活的、方便用文本编辑器处理和代码处理的流行格式。

## 批量导入

注意事项：

- 导入的知识库仅支持 json 格式，内容定义参考**示例数据**
- 点击「下载示例数据」之后，可以对示例数据进行编辑保存，再导入到知识库
- 导入时可设置问题的状态，问题状态为「禁用」在测试知识库时检索不到

<table class="image">
    <caption align="bottom">导入知识库</caption>
    <tr>
        <td><img width="800" src="../../../images/products/faq/image2020-7-16_16-55-26.png" alt="" /></td>
    </tr>
</table>
