# Flujo editorial (guía simple)

Dos herramientas, dos momentos. No mezcles los pasos.

| Momento | Herramienta | Qué haces |
| --- | --- | --- |
| 1. Descubrir la historia | **ChatGPT** | Hablas, respondes preguntas, profundizas |
| 2. Escribir e implementar | **Cursor** | Borrador, imágenes, publicación en el sitio |

---

## Fase 1: ChatGPT (una sola conversación)

### Qué NO es

- No son tres chats distintos.
- No pegas un prompt, cierras, y abres otro chat para la idea.
- ChatGPT no escribe el artículo final en esta fase (salvo que lo pidas después).

### Qué SÍ es

**Un chat nuevo** donde el **primer mensaje** lleva todo junto:

1. El contenido de `CHATGPT_CONTEXT.md` (copiado y pegado).
2. El prompt de inicio (el de `PROMPTS.md`, sección "Iniciar sesión editorial").
3. Tu idea, audio transcrito, o notas sueltas.

Ejemplo de primer mensaje:

```text
[PEGAS AQUÍ TODO EL CONTENIDO DE CHATGPT_CONTEXT.md]

---

[PEGAS AQUÍ EL PROMPT DE INICIO DE SESIÓN EDITORIAL]

---

Mi idea para hoy:
[audio transcrito, o párrafo con lo que quieras explorar]
```

### Qué pasa después

ChatGPT **ya sabe** que debe hacerte preguntas (eso dice el prompt). Tú respondes con naturalidad. Puede durar 10 mensajes o 50.

Cuando sientas que la historia está clara, escribes exactamente:

```text
Cierra la sesión editorial
```

ChatGPT te devuelve un Markdown estructurado. Lo guardas en:

```text
content/blog/sessions/2026-07-25-nombre-del-tema.md
```

Eso termina ChatGPT por ahora.

---

## Fase 2: Cursor (implementación)

Abres Cursor en este repositorio y escribes algo como:

```text
Trabaja con la sesión content/blog/sessions/2026-07-25-nombre-del-tema.md
y crea el borrador según content/blog/system/PROMPTS.md
```

Cursor:

1. Lee la sesión, la voz, la memoria editorial.
2. Propone tesis y estructura.
3. Crea el borrador en `content/blog/drafts/`.
4. Si hay imágenes, las organiza (ver sección Imágenes abajo).

Tú revisas el borrador. Cuando apruebas y dices que se publique, Cursor mueve a `published/`, actualiza el sitio (`src/data/posts/`) y el registro editorial.

---

## Imágenes

### Dónde las pones tú

**Opción A (recomendada):** arrastra archivos a:

```text
content/blog/media/inbox/
```

**Opción B:** pégalas directamente en el chat de Cursor al pedir el borrador o la publicación.

### Qué hace Cursor

1. Identifica cada imagen (contenido, contexto del artículo, tu descripción).
2. Renombra con nombres claros (`semillero-grupo.jpg`, no `IMG_4521.png`).
3. Mueve a `content/blog/media/[slug-del-articulo]/`.
4. Copia a `public/blog-assets/[slug-del-articulo]/` (lo que ve el sitio en `/blog-assets/...`).
5. Registra en `content/blog/media/[slug]/manifest.md` (qué es cada imagen, dónde va en el texto).
6. Inserta en el borrador y en el post del sitio.

### Carpetas de imágenes

```text
content/blog/media/
├── inbox/              ← tú sueltas imágenes nuevas aquí
├── [slug-articulo]/    ← Cursor organiza por artículo
│   ├── manifest.md     ← inventario: archivo, alt, caption, uso
│   └── *.jpg/png/webp

public/blog-assets/
└── [slug-articulo]/    ← copia servida por el sitio (/blog-assets/...)
```

---

## Resumen en 6 pasos

```text
1. ChatGPT (mensaje 1):  CHATGPT_CONTEXT + prompt + tu idea
2. ChatGPT (mensaje 2…N):  conversación, responde preguntas
3. ChatGPT (cierre):       "Cierra la sesión editorial" → guardas en sessions/
4. Cursor:                 pide borrador desde la sesión (+ imágenes en inbox o chat)
5. Tú:                     revisas y apruebas
6. Cursor:                 publica, organiza imágenes, actualiza registro
```

---

## Qué archivo usar en cada momento

| Necesitas… | Archivo |
| --- | --- |
| Empezar en ChatGPT | `system/CHATGPT_CONTEXT.md` + `system/PROMPTS.md` (primer mensaje) |
| Entender el flujo | Este archivo (`system/FLUJO.md`) |
| Pedir borrador en Cursor | `system/PROMPTS.md` (segunda sección) |
| Reglas completas para el agente | `content/blog/AGENTS.md` |
| Soltar imágenes sin organizar | `media/inbox/` |
