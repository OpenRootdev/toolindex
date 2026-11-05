<p align="center"><img src="../../../site/assets/mark.svg" width="104" alt="ToolIndex-Logo"></p>
<h1 align="center">ToolIndex</h1>
<p align="center">Ein kostenloses Verzeichnis nützlicher Werkzeuge, bei dem jeder Eintrag direkt auf seine Quelle verlinkt.<br><sub>Für alle, die Apps, Skills, MCP-Server, CLIs und mehr suchen, und für die Menschen, die sie bauen.</sub></p>
<p align="center"><a href="../../../README.md">English</a> · <a href="../es/README.md">Español</a> · <a href="../zh-CN/README.md">简体中文</a> · <a href="../fr/README.md">Français</a> · <a href="../ja/README.md">日本語</a> · <a href="../de/README.md">Deutsch</a> · <a href="../pt-BR/README.md">Português (Brasil)</a></p>

<p align="center"><img src="https://raw.githubusercontent.com/OpenRootdev/toolindex/assets/preview.gif" width="760" alt="Ein Werkzeug wird auf zwei Wegen bei ToolIndex eingereicht: über ein kurzes Formular oder per Auftrag an einen KI-Agenten. Ein Mensch prüft es, dann erscheint es im Verzeichnis."></p>

<p align="center"><a href="https://toolindex.org/"><b>Werkzeuge ansehen</b></a> · <a href="https://toolindex.org/submit/">Werkzeug einreichen</a> · <a href="https://toolindex.org/developers/">Für Agenten</a></p>

<p align="center"><sub>Dein Agent kann es per MCP für dich einreichen, zum Beispiel aus</sub><br><img src="https://raw.githubusercontent.com/OpenRootdev/toolindex/assets/brands/claude.svg" width="16" height="16" alt=""> Claude &nbsp; <picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/OpenRootdev/toolindex/assets/brands/openai-dark.svg"><img src="https://raw.githubusercontent.com/OpenRootdev/toolindex/assets/brands/openai.svg" width="16" height="16" alt=""></picture> Codex &nbsp; <picture><source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/OpenRootdev/toolindex/assets/brands/cursor-dark.svg"><img src="https://raw.githubusercontent.com/OpenRootdev/toolindex/assets/brands/cursor.svg" width="16" height="16" alt=""></picture> Cursor</p>

## Was es macht

ToolIndex listet Werkzeuge, die Menschen und KI-Agenten nutzen können, von Browser-Apps bis zu Agenten-Skills und Kommandozeilen-Tools. Jeder Eintrag erklärt die Einrichtung und verlinkt direkt auf die Quelle, damit du sie prüfen kannst, bevor du etwas installierst.

- **Schnell etwas Nützliches finden.** Suchen, nach Typ filtern oder zufällig, nach Beliebtheit oder nach Datum sortieren.
- **Wissen, was du bekommst.** Jede Seite zeigt die Einrichtungsschritte, die Lizenz und was bei der Prüfung tatsächlich kontrolliert wurde.
- **Dein eigenes Werkzeug zeigen.** Der Eintrag ist kostenlos, und ein Mensch prüft jedes Werkzeug, bevor es online geht.

## Reiche dein Werkzeug ein

1. [Erstelle ein kostenloses Konto](https://toolindex.org/account/) und wähle deinen Creator-Namen.
2. Fülle das kurze Formular aus: Name des Werkzeugs, Link zur Quelle und wie man es installiert. Klicke dann auf **Request review**.
3. Ein Mensch prüft es. Nach der Freigabe erscheint dein Werkzeug im Verzeichnis, mit einem Link zu deinem Repository.

Kein Fork und kein Pull Request nötig. Prüfung und Rückmeldungen verfolgst du in deinem Konto.

### Oder frag deinen Agenten

Verbinde deinen Agenten einmalig mit dieser Adresse:

```text
https://toolindex.org/mcp
```

Bitte ihn dann zum Beispiel: *„Füge mein Repository zu ToolIndex hinzu“*. Beim ersten Mal öffnet sich dein Browser, damit du dich anmeldest und den Zugriff erlaubst. Du fügst nie ein Passwort oder Token in den Chat ein. Dein Agent kann Entwürfe speichern und eine Prüfung anfragen, aber er kann seinen eigenen Eintrag nicht freigeben.

## Ohne Konto stöbern

Alles Öffentliche ist frei lesbar, für Menschen wie für Agenten: ohne Konto, ohne API-Schlüssel und ohne JavaScript.

[Website](https://toolindex.org/) · [Creator](https://toolindex.org/people/) · [JSON-Katalog](https://toolindex.org/catalog.json) · [API](https://toolindex.org/api/public/tools) · [llms.txt](https://toolindex.org/llms.txt)

## Was drin ist

- [`site/`](../../../site/) · Seiten, Styles und Logos der Website
- [`data/listings/`](../../../data/listings/) · eine Datei pro gelistetem Werkzeug
- [`backend/`](../../../backend/) · Konten, Einreichungen, Prüfung und die Agenten-Verbindung
- [`scripts/`](../../../scripts/) · baut den Katalog und prüft jeden Eintrag
- [`docs/`](../../../docs/) · wie Auffindbarkeit und das Community-Badge funktionieren

<sub>Das Vorschau-GIF und die Marken-Icons liegen im separaten Branch <code>assets</code>, ein Klon von <code>main</code> enthält also nur die Website und ihren Code.</sub>

## Selbst ausführen

```sh
python scripts/catalog.py build
npm ci --prefix backend
npm test --prefix backend
npm start --prefix backend
```

[Backend: Konten, Anmeldung und Hosting](../../../backend/README.md) · [Auffindbarkeit](docs/discovery.md) · [Mitwirken](CONTRIBUTING.md) · [Community-Badges](docs/badge-program.md)

## Schwesterprojekt

<img src="https://raw.githubusercontent.com/OpenRootdev/Harneloop/main/docs/assets/harneloop-mark.svg" width="40" align="left" alt="Harneloop-Logo">

**[Harneloop](https://github.com/OpenRootdev/Harneloop)**<br>
Hilft einem KI-Agenten, aus Fehlern zu lernen, und behält nur die Verbesserungen, die ein Test bestätigt.

<br clear="left">

---

<sub>MIT-Lizenz · OpenRootdev</sub>
