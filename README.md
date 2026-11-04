<p align="center"><img src="site/assets/mark.svg" width="104" alt="ToolIndex logo"></p>
<h1 align="center">ToolIndex</h1>
<p align="center">A free directory of useful tools, where every listing links straight to its source.<br><sub>For anyone looking for apps, skills, MCP servers, CLIs and more, and for the people who make them.</sub></p>
<p align="center"><a href="README.md">English</a> · <a href="docs/i18n/es/README.md">Español</a> · <a href="docs/i18n/zh-CN/README.md">简体中文</a> · <a href="docs/i18n/fr/README.md">Français</a> · <a href="docs/i18n/ja/README.md">日本語</a> · <a href="docs/i18n/de/README.md">Deutsch</a> · <a href="docs/i18n/pt-BR/README.md">Português (Brasil)</a></p>

<p align="center"><img src="https://raw.githubusercontent.com/OpenRootdev/toolindex/assets/preview.gif" width="760" alt="A tool is submitted to ToolIndex two ways: by filling in a short form, and by asking an AI agent. A person reviews it and it appears in the directory."></p>

<p align="center"><a href="https://toolindex.org/"><b>Browse tools</b></a> · <a href="https://toolindex.org/submit/">Submit a tool</a> · <a href="https://toolindex.org/developers/">For agents</a></p>

<p align="center"><sub>Your agent can submit for you through MCP, for example from</sub><br><img src="https://raw.githubusercontent.com/OpenRootdev/toolindex/assets/brands/claude.svg" width="16" height="16" alt=""> Claude &nbsp; <picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/OpenRootdev/toolindex/assets/brands/openai-dark.svg"><img src="https://raw.githubusercontent.com/OpenRootdev/toolindex/assets/brands/openai.svg" width="16" height="16" alt=""></picture> Codex &nbsp; <picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/OpenRootdev/toolindex/assets/brands/cursor-dark.svg"><img src="https://raw.githubusercontent.com/OpenRootdev/toolindex/assets/brands/cursor.svg" width="16" height="16" alt=""></picture> Cursor</p>

## What it does

ToolIndex lists tools that people and AI agents can use, from browser apps to agent skills and command-line tools. Every listing explains how to set the tool up and links directly to its source, so you can check it before you install anything.

- **Find something useful fast.** Search, filter by type, or sort by random, popular or recent.
- **Know what you're getting.** Each page shows the setup steps, the licence and what a reviewer actually checked.
- **Get your own tool seen.** Listing is free, and a person reviews every tool before it goes live.

## Submit your tool

1. [Create a free account](https://toolindex.org/account/) and choose your creator name.
2. Fill in the short form: the tool's name, its source link and how to install it. Then press **Request review**.
3. A person reviews it. Once it's approved, your tool appears in the directory with a link to your repository.

No fork and no pull request needed. You can follow the review and any feedback from your account.

### Or ask your agent

Connect your agent to this address once:

```text
https://toolindex.org/mcp
```

Then ask it something like *"Add my repository to ToolIndex"*. The first time, your browser opens so you can sign in and allow access. You never paste a password or token into the chat. Your agent can save drafts and request review, but it can't approve its own listing.

## Browse without an account

Everything public is open to read, for people and agents alike: no account, no API key and no JavaScript needed.

[Website](https://toolindex.org/) · [Creators](https://toolindex.org/people/) · [JSON catalog](https://toolindex.org/catalog.json) · [API](https://toolindex.org/api/public/tools) · [llms.txt](https://toolindex.org/llms.txt)

## What's inside

- [`site/`](site/) · the website's pages, styles and logos
- [`data/listings/`](data/listings/) · one file per listed tool
- [`backend/`](backend/) · accounts, submissions, review and the agent connection
- [`scripts/`](scripts/) · builds the catalog and checks every listing
- [`docs/`](docs/) · how discovery and the community badge work

<sub>The preview GIF and brand icons live on the separate <code>assets</code> branch, so a clone of <code>main</code> holds only the site and its code.</sub>

## Run it yourself

```sh
python scripts/catalog.py build
npm ci --prefix backend
npm test --prefix backend
npm start --prefix backend
```

[Backend: accounts, sign-in and hosting](backend/README.md) · [Discovery](docs/discovery.md) · [Contributing](CONTRIBUTING.md) · [Community badges](docs/badge-program.md)

## Sister project

<img src="https://raw.githubusercontent.com/OpenRootdev/Harneloop/main/docs/assets/harneloop-mark.svg" width="40" align="left" alt="Harneloop logo">

**[Harneloop](https://github.com/OpenRootdev/Harneloop)**<br>
Helps an AI agent learn from what went wrong, and keeps only the improvements a test supports.

<br clear="left">

---

<sub>MIT licence · OpenRootdev</sub>
