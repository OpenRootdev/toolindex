<p align="center"><img src="../../../site/assets/mark.svg" width="104" alt="Logotipo de ToolIndex"></p>
<h1 align="center">ToolIndex</h1>
<p align="center">Un directorio gratuito de herramientas útiles, donde cada ficha enlaza directamente a su código fuente.<br><sub>Para quien busca apps, skills, servidores MCP, CLIs y más, y para quienes las crean.</sub></p>
<p align="center"><a href="../../../README.md">English</a> · <a href="../es/README.md">Español</a> · <a href="../zh-CN/README.md">简体中文</a> · <a href="../fr/README.md">Français</a> · <a href="../ja/README.md">日本語</a> · <a href="../de/README.md">Deutsch</a> · <a href="../pt-BR/README.md">Português (Brasil)</a></p>

<p align="center"><img src="https://raw.githubusercontent.com/OpenRootdev/toolindex/assets/preview.gif" width="760" alt="Una herramienta se envía a ToolIndex de dos formas: con un formulario corto o pidiéndoselo a un agente de IA. Una persona la revisa y aparece en el directorio."></p>

<p align="center"><a href="https://toolindex.org/"><b>Ver herramientas</b></a> · <a href="https://toolindex.org/submit/">Enviar una herramienta</a> · <a href="https://toolindex.org/developers/">Para agentes</a></p>

<p align="center"><sub>Tu agente puede enviarla por ti mediante MCP, por ejemplo desde</sub><br><img src="https://raw.githubusercontent.com/OpenRootdev/toolindex/assets/brands/claude.svg" width="16" height="16" alt=""> Claude &nbsp; <picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/OpenRootdev/toolindex/assets/brands/openai-dark.svg"><img src="https://raw.githubusercontent.com/OpenRootdev/toolindex/assets/brands/openai.svg" width="16" height="16" alt=""></picture> Codex &nbsp; <picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/OpenRootdev/toolindex/assets/brands/cursor-dark.svg"><img src="https://raw.githubusercontent.com/OpenRootdev/toolindex/assets/brands/cursor.svg" width="16" height="16" alt=""></picture> Cursor</p>

## Qué hace

ToolIndex recoge herramientas que pueden usar personas y agentes de IA, desde apps para el navegador hasta skills para agentes y herramientas de línea de comandos. Cada ficha explica cómo configurar la herramienta y enlaza directamente a su código fuente, para que puedas revisarla antes de instalar nada.

- **Encuentra algo útil rápido.** Busca, filtra por tipo u ordena de forma aleatoria, por popularidad o por fecha.
- **Sabe lo que vas a usar.** Cada página muestra los pasos de instalación, la licencia y lo que comprobó realmente quien la revisó.
- **Da a conocer tu herramienta.** Publicar es gratis, y una persona revisa cada herramienta antes de que aparezca.

## Envía tu herramienta

1. [Crea una cuenta gratuita](https://toolindex.org/account/) y elige tu nombre de creador.
2. Rellena el formulario corto: el nombre de la herramienta, el enlace a su código y cómo instalarla. Después pulsa **Request review**.
3. Una persona la revisa. Cuando se aprueba, tu herramienta aparece en el directorio con un enlace a tu repositorio.

No hace falta fork ni pull request. Puedes seguir la revisión y los comentarios desde tu cuenta.

### O pídeselo a tu agente

Conecta tu agente a esta dirección una sola vez:

```text
https://toolindex.org/mcp
```

Después pídele algo como *«Añade mi repositorio a ToolIndex»*. La primera vez se abre tu navegador para que inicies sesión y des permiso. Nunca pegas una contraseña ni un token en el chat. Tu agente puede guardar borradores y pedir revisión, pero no puede aprobar su propia ficha.

## Explora sin cuenta

Todo lo público se puede leer libremente, tanto personas como agentes: sin cuenta, sin clave de API y sin JavaScript.

[Sitio web](https://toolindex.org/) · [Creadores](https://toolindex.org/people/) · [Catálogo JSON](https://toolindex.org/catalog.json) · [API](https://toolindex.org/api/public/tools) · [llms.txt](https://toolindex.org/llms.txt)

## Qué contiene

- [`site/`](../../../site/) · las páginas, estilos y logotipos del sitio
- [`data/listings/`](../../../data/listings/) · un archivo por cada herramienta publicada
- [`backend/`](../../../backend/) · cuentas, envíos, revisión y la conexión para agentes
- [`scripts/`](../../../scripts/) · genera el catálogo y comprueba cada ficha
- [`docs/`](../../../docs/) · cómo funcionan el descubrimiento y la insignia de la comunidad

<sub>El GIF de vista previa y los iconos de marca están en la rama aparte <code>assets</code>, así que un clon de <code>main</code> solo contiene el sitio y su código.</sub>

## Ejécutalo tú mismo

```sh
python scripts/catalog.py build
npm ci --prefix backend
npm test --prefix backend
npm start --prefix backend
```

[Backend: cuentas, inicio de sesión y alojamiento](../../../backend/README.md) · [Descubrimiento](docs/discovery.md) · [Cómo contribuir](CONTRIBUTING.md) · [Insignias de la comunidad](docs/badge-program.md)

## Proyecto hermano

<img src="https://raw.githubusercontent.com/OpenRootdev/Harneloop/main/docs/assets/harneloop-mark.svg" width="40" align="left" alt="Logotipo de Harneloop">

**[Harneloop](https://github.com/OpenRootdev/Harneloop)**<br>
Ayuda a un agente de IA a aprender de lo que salió mal y conserva solo las mejoras que respalda una prueba.

<br clear="left">

---

<sub>Licencia MIT · OpenRootdev</sub>
