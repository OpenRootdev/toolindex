<p align="center"><img src="../../../site/assets/mark.svg" width="104" alt="ToolIndex 标志"></p>
<h1 align="center">ToolIndex</h1>
<p align="center">一个免费的实用工具目录，每个条目都直接链接到它的源代码。<br><sub>适合想找应用、skill、MCP 服务器、CLI 等工具的人，也适合开发这些工具的人。</sub></p>
<p align="center"><a href="../../../README.md">English</a> · <a href="../es/README.md">Español</a> · <a href="../zh-CN/README.md">简体中文</a> · <a href="../fr/README.md">Français</a> · <a href="../ja/README.md">日本語</a> · <a href="../de/README.md">Deutsch</a> · <a href="../pt-BR/README.md">Português (Brasil)</a></p>

<p align="center"><img src="https://raw.githubusercontent.com/OpenRootdev/toolindex/assets/preview.gif" width="760" alt="提交工具到 ToolIndex 有两种方式：填写一个简短的表单，或者让 AI 智能体代你提交。经过人工审核后，它就会出现在目录中。"></p>

<p align="center"><a href="https://toolindex.org/"><b>浏览工具</b></a> · <a href="https://toolindex.org/submit/">提交工具</a> · <a href="https://toolindex.org/developers/">面向智能体</a></p>

<p align="center"><sub>你的智能体可以通过 MCP 替你提交，例如在以下工具中</sub><br><img src="https://raw.githubusercontent.com/OpenRootdev/toolindex/assets/brands/claude.svg" width="16" height="16" alt=""> Claude &nbsp; <picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/OpenRootdev/toolindex/assets/brands/openai-dark.svg"><img src="https://raw.githubusercontent.com/OpenRootdev/toolindex/assets/brands/openai.svg" width="16" height="16" alt=""></picture> Codex &nbsp; <picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/OpenRootdev/toolindex/assets/brands/cursor-dark.svg"><img src="https://raw.githubusercontent.com/OpenRootdev/toolindex/assets/brands/cursor.svg" width="16" height="16" alt=""></picture> Cursor</p>

## 它能做什么

ToolIndex 收录人和 AI 智能体都能使用的工具，从浏览器应用到智能体 skill 和命令行工具。每个条目都说明如何安装配置，并直接链接到源代码，让你在安装之前就能先看一看。

- **快速找到有用的东西。** 搜索、按类型筛选，或按随机、热门、最新排序。
- **清楚知道你拿到的是什么。** 每个页面都列出安装步骤、许可证，以及审核者实际检查了什么。
- **让更多人看到你的工具。** 上架免费，每个工具在上线前都由人工审核。

## 提交你的工具

1. [创建一个免费账户](https://toolindex.org/account/)，并选择你的创作者名称。
2. 填写简短的表单：工具名称、源代码链接以及安装方法。然后点击 **Request review**。
3. 由人工进行审核。通过后，你的工具就会出现在目录中，并附上你的仓库链接。

不需要 fork，也不需要 pull request。你可以在账户中查看审核进度和反馈。

### 或者让你的智能体来做

只需把你的智能体连接到这个地址一次：

```text
https://toolindex.org/mcp
```

然后对它说类似 *“把我的仓库添加到 ToolIndex”* 这样的话。第一次使用时，浏览器会打开，让你登录并授权。你永远不需要把密码或令牌粘贴到聊天中。智能体可以保存草稿并申请审核，但不能批准自己的条目。

## 无需账户即可浏览

所有公开内容都可以自由读取，无论是人还是智能体：不需要账户、API 密钥或 JavaScript。

[网站](https://toolindex.org/) · [创作者](https://toolindex.org/people/) · [JSON 目录](https://toolindex.org/catalog.json) · [API](https://toolindex.org/api/public/tools) · [llms.txt](https://toolindex.org/llms.txt)

## 仓库内容

- [`site/`](../../../site/) · 网站的页面、样式和标志
- [`data/listings/`](../../../data/listings/) · 每个上架工具对应一个文件
- [`backend/`](../../../backend/) · 账户、提交、审核以及智能体连接
- [`scripts/`](../../../scripts/) · 生成目录并检查每个条目
- [`docs/`](../../../docs/) · 发现机制和社区徽章的工作方式

<sub>预览 GIF 和品牌图标放在单独的 <code>assets</code> 分支中，因此克隆 <code>main</code> 只会得到网站和它的代码。</sub>

## 自己运行

```sh
python scripts/catalog.py build
npm ci --prefix backend
npm test --prefix backend
npm start --prefix backend
```

[后端：账户、登录和托管](../../../backend/README.md) · [发现机制](docs/discovery.md) · [参与贡献](CONTRIBUTING.md) · [社区徽章](docs/badge-program.md)

## 姊妹项目

<img src="https://raw.githubusercontent.com/OpenRootdev/Harneloop/main/docs/assets/harneloop-mark.svg" width="40" align="left" alt="Harneloop 标志">

**[Harneloop](https://github.com/OpenRootdev/Harneloop)**<br>
帮助 AI 智能体从出错的地方学习，并且只保留经过测试验证的改进。

<br clear="left">

---

<sub>MIT 许可证 · OpenRootdev</sub>
