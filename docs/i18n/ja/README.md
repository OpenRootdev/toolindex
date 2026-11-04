<p align="center"><img src="../../../site/assets/mark.svg" width="104" alt="ToolIndex のロゴ"></p>
<h1 align="center">ToolIndex</h1>
<p align="center">便利なツールを集めた無料のディレクトリ。どの掲載ページもソースへ直接リンクしています。<br><sub>アプリ、スキル、MCP サーバー、CLI などを探している人と、それを作っている人のために。</sub></p>
<p align="center"><a href="../../../README.md">English</a> · <a href="../es/README.md">Español</a> · <a href="../zh-CN/README.md">简体中文</a> · <a href="../fr/README.md">Français</a> · <a href="../ja/README.md">日本語</a> · <a href="../de/README.md">Deutsch</a> · <a href="../pt-BR/README.md">Português (Brasil)</a></p>

<p align="center"><img src="https://raw.githubusercontent.com/OpenRootdev/toolindex/assets/preview.gif" width="760" alt="ToolIndex へのツールの登録方法は 2 つ。短いフォームに入力するか、AI エージェントに頼むだけです。人がレビューしたあと、ディレクトリに掲載されます。"></p>

<p align="center"><a href="https://toolindex.org/"><b>ツールを探す</b></a> · <a href="https://toolindex.org/submit/">ツールを登録する</a> · <a href="https://toolindex.org/developers/">エージェント向け</a></p>

<p align="center"><sub>エージェントが MCP 経由で代わりに登録できます。例えば次のツールから</sub><br><img src="https://raw.githubusercontent.com/OpenRootdev/toolindex/assets/brands/claude.svg" width="16" height="16" alt=""> Claude &nbsp; <picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/OpenRootdev/toolindex/assets/brands/openai-dark.svg"><img src="https://raw.githubusercontent.com/OpenRootdev/toolindex/assets/brands/openai.svg" width="16" height="16" alt=""></picture> Codex &nbsp; <picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/OpenRootdev/toolindex/assets/brands/cursor-dark.svg"><img src="https://raw.githubusercontent.com/OpenRootdev/toolindex/assets/brands/cursor.svg" width="16" height="16" alt=""></picture> Cursor</p>

## できること

ToolIndex は、人と AI エージェントが使えるツールを掲載しています。ブラウザーで動くアプリから、エージェント用のスキルやコマンドラインツールまで。どの掲載ページにもセットアップ方法とソースへの直接リンクがあるので、インストールする前に中身を確認できます。

- **役立つものがすぐ見つかる。** 検索、種類での絞り込み、ランダム・人気順・新着順での並べ替えができます。
- **中身がわかる。** 各ページにセットアップ手順、ライセンス、そしてレビュー担当者が実際に確認した内容が載っています。
- **自分のツールを見てもらえる。** 掲載は無料で、公開前にすべてのツールを人がレビューします。

## ツールを登録する

1. [無料アカウントを作成](https://toolindex.org/account/)し、クリエイター名を決めます。
2. 短いフォームに入力します：ツール名、ソースへのリンク、インストール方法。そして **Request review** を押します。
3. 人がレビューします。承認されると、リポジトリへのリンク付きでディレクトリに掲載されます。

フォークもプルリクエストも不要です。レビューの状況やフィードバックはアカウントで確認できます。

### またはエージェントに頼む

エージェントをこのアドレスに一度だけ接続します：

```text
https://toolindex.org/mcp
```

あとは *「私のリポジトリを ToolIndex に追加して」* のように頼むだけです。初回はブラウザーが開くので、サインインしてアクセスを許可します。パスワードやトークンをチャットに貼り付けることはありません。エージェントは下書きの保存とレビュー依頼はできますが、自分の掲載を承認することはできません。

## アカウントなしで閲覧

公開されている情報は、人もエージェントも自由に読めます。アカウントも API キーも JavaScript も不要です。

[ウェブサイト](https://toolindex.org/) · [クリエイター](https://toolindex.org/people/) · [JSON カタログ](https://toolindex.org/catalog.json) · [API](https://toolindex.org/api/public/tools) · [llms.txt](https://toolindex.org/llms.txt)

## 中身

- [`site/`](../../../site/) · サイトのページ、スタイル、ロゴ
- [`data/listings/`](../../../data/listings/) · 掲載ツールごとに 1 つのファイル
- [`backend/`](../../../backend/) · アカウント、登録、レビュー、エージェント接続
- [`scripts/`](../../../scripts/) · カタログを生成し、各掲載をチェックする
- [`docs/`](../../../docs/) · 見つけてもらう仕組みとコミュニティバッジの説明

<sub>プレビュー GIF とブランドアイコンは別の <code>assets</code> ブランチにあるので、<code>main</code> をクローンするとサイトとそのコードだけが手に入ります。</sub>

## 自分で動かす

```sh
python scripts/catalog.py build
npm ci --prefix backend
npm test --prefix backend
npm start --prefix backend
```

[バックエンド：アカウント、サインイン、ホスティング](../../../backend/README.md) · [見つけてもらう仕組み](docs/discovery.md) · [コントリビュート](CONTRIBUTING.md) · [コミュニティバッジ](docs/badge-program.md)

## 姉妹プロジェクト

<img src="https://raw.githubusercontent.com/OpenRootdev/Harneloop/main/docs/assets/harneloop-mark.svg" width="40" align="left" alt="Harneloop のロゴ">

**[Harneloop](https://github.com/OpenRootdev/Harneloop)**<br>
AI エージェントが失敗から学べるようにし、テストで裏付けられた改善だけを残します。

<br clear="left">

---

<sub>MIT ライセンス · OpenRootdev</sub>
