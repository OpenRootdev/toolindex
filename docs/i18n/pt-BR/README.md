<p align="center"><img src="../../../site/assets/mark.svg" width="104" alt="Logo do ToolIndex"></p>
<h1 align="center">ToolIndex</h1>
<p align="center">Um diretório gratuito de ferramentas úteis, em que cada página leva direto ao código-fonte.<br><sub>Para quem procura apps, skills, servidores MCP, CLIs e mais, e para quem cria essas ferramentas.</sub></p>
<p align="center"><a href="../../../README.md">English</a> · <a href="../es/README.md">Español</a> · <a href="../zh-CN/README.md">简体中文</a> · <a href="../fr/README.md">Français</a> · <a href="../ja/README.md">日本語</a> · <a href="../de/README.md">Deutsch</a> · <a href="../pt-BR/README.md">Português (Brasil)</a></p>

<p align="center"><img src="https://raw.githubusercontent.com/OpenRootdev/toolindex/assets/preview.gif" width="760" alt="Uma ferramenta é enviada ao ToolIndex de duas formas: preenchendo um formulário curto ou pedindo a um agente de IA. Uma pessoa revisa e ela aparece no diretório."></p>

<p align="center"><a href="https://toolindex.org/"><b>Ver ferramentas</b></a> · <a href="https://toolindex.org/submit/">Enviar uma ferramenta</a> · <a href="https://toolindex.org/developers/">Para agentes</a></p>

<p align="center"><sub>Seu agente pode enviar por você via MCP, por exemplo a partir do</sub><br><img src="https://raw.githubusercontent.com/OpenRootdev/toolindex/assets/brands/claude.svg" width="16" height="16" alt=""> Claude &nbsp; <picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/OpenRootdev/toolindex/assets/brands/openai-dark.svg"><img src="https://raw.githubusercontent.com/OpenRootdev/toolindex/assets/brands/openai.svg" width="16" height="16" alt=""></picture> Codex &nbsp; <picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/OpenRootdev/toolindex/assets/brands/cursor-dark.svg"><img src="https://raw.githubusercontent.com/OpenRootdev/toolindex/assets/brands/cursor.svg" width="16" height="16" alt=""></picture> Cursor</p>

## O que ele faz

O ToolIndex lista ferramentas que pessoas e agentes de IA podem usar, de apps para o navegador a skills para agentes e ferramentas de linha de comando. Cada página explica como configurar a ferramenta e leva direto ao código-fonte, para você conferir antes de instalar qualquer coisa.

- **Encontre algo útil rápido.** Pesquise, filtre por tipo ou ordene de forma aleatória, por popularidade ou por data.
- **Saiba o que você está levando.** Cada página mostra os passos de instalação, a licença e o que a revisão realmente verificou.
- **Mostre a sua ferramenta.** Publicar é grátis, e uma pessoa revisa cada ferramenta antes de ela entrar no ar.

## Envie sua ferramenta

1. [Crie uma conta gratuita](https://toolindex.org/account/) e escolha seu nome de criador.
2. Preencha o formulário curto: o nome da ferramenta, o link para o código e como instalá-la. Depois clique em **Request review**.
3. Uma pessoa revisa. Depois de aprovada, sua ferramenta aparece no diretório com um link para o seu repositório.

Não precisa de fork nem de pull request. Você acompanha a revisão e os comentários pela sua conta.

### Ou peça ao seu agente

Conecte seu agente a este endereço uma única vez:

```text
https://toolindex.org/mcp
```

Depois peça algo como *“Adicione meu repositório ao ToolIndex”*. Na primeira vez, seu navegador abre para você entrar e permitir o acesso. Você nunca cola senha nem token no chat. Seu agente pode salvar rascunhos e pedir revisão, mas não pode aprovar a própria página.

## Navegue sem conta

Tudo o que é público pode ser lido livremente, por pessoas e agentes: sem conta, sem chave de API e sem JavaScript.

[Site](https://toolindex.org/) · [Criadores](https://toolindex.org/people/) · [Catálogo JSON](https://toolindex.org/catalog.json) · [API](https://toolindex.org/api/public/tools) · [llms.txt](https://toolindex.org/llms.txt)

## O que tem aqui

- [`site/`](../../../site/) · as páginas, estilos e logos do site
- [`data/listings/`](../../../data/listings/) · um arquivo por ferramenta listada
- [`backend/`](../../../backend/) · contas, envios, revisão e a conexão para agentes
- [`scripts/`](../../../scripts/) · gera o catálogo e verifica cada página
- [`docs/`](../../../docs/) · como funcionam a descoberta e o selo da comunidade

<sub>O GIF de prévia e os ícones de marca ficam na branch separada <code>assets</code>, então um clone de <code>main</code> traz só o site e o código dele.</sub>

## Rode você mesmo

```sh
python scripts/catalog.py build
npm ci --prefix backend
npm test --prefix backend
npm start --prefix backend
```

[Backend: contas, login e hospedagem](../../../backend/README.md) · [Descoberta](docs/discovery.md) · [Como contribuir](CONTRIBUTING.md) · [Selos da comunidade](docs/badge-program.md)

## Projeto irmão

<img src="https://raw.githubusercontent.com/OpenRootdev/Harneloop/main/docs/assets/harneloop-mark.svg" width="40" align="left" alt="Logo do Harneloop">

**[Harneloop](https://github.com/OpenRootdev/Harneloop)**<br>
Ajuda um agente de IA a aprender com o que deu errado e mantém só as melhorias confirmadas por um teste.

<br clear="left">

---

<sub>Licença MIT · OpenRootdev</sub>
