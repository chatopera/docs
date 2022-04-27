# 3rd-party

其他第三方函数库。

## Octokit

[Octokit](https://github.com/octokit/octokit.js/) 是 GitHub 官方推出的 RestAPIs Toolkit，可以方便的使用 JavaScript 管理 GitHub 资源，请求服务。

在 Chatopera 机器人平台内置函数库中，包含了 Octokit 类，可以直接在函数中，完成 GitHub Issue 创建，查询等任务，使用举例如下：

```函数
const octokit = new Octokit({
    auth: "YOUR_GITHUB_PERSONAL_ACCESS_TOKEN"
});
exports.handleOpenGithubIssue = async function() {
    await octokit.request(`POST /repos/chatopera/cskefu/issues`, {
            owner: "chatopera",
            repo: "cskefu",
            title: "YOUR TITLE",
            body: "YOUR BODY",
            labels: ["label1" "label2"]
        });
}
```

其中，`YOUR_GITHUB_PERSONAL_ACCESS_TOKEN` 是每位 GitHub 注册用户自己创建的 Personal Access Token，字符串类似于：`ghp_i75Hmkglxxx`。

更多关于 `Octokit` 以及 `Octokit#request` 的介绍，[参考链接](https://github.com/octokit/octokit.js/)，更多 `GitHub RestAPIs` 的介绍，[参考链接](https://docs.github.com/en/rest/reference)。

- 在函数中使用 Octokit 更多使用示例代码：[https://github.com/chatopera/chatbot-samples/search?q=Octokit](https://github.com/chatopera/chatbot-samples/search?q=Octokit)
