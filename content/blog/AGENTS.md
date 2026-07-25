# Storytelling Blog Agent

## Propósito del proyecto

Este repositorio contiene el portafolio y el sistema editorial de storytelling del autor.

El objetivo del sistema editorial es transformar:

- Experiencias personales.
- Audios y conversaciones.
- Ideas incompletas.
- Reflexiones.
- Aprendizajes profesionales.
- Investigaciones.
- Preguntas personales o profesionales.

En historias y artículos claros, humanos, profundos y útiles.

El contenido debe conservar la personalidad del autor mientras mejora su claridad, estructura narrativa y profesionalidad.

---

## Fuente de verdad

La fuente de verdad del sistema editorial es el contenido versionado dentro de:

`content/blog/`

No se debe depender exclusivamente de conversaciones anteriores con herramientas de inteligencia artificial.

Antes de trabajar en cualquier contenido del blog, revisar los archivos relevantes dentro de:

- `content/blog/system/VOICE.md`
- `content/blog/system/EDITORIAL_MEMORY.md`
- `content/blog/system/CONTENT_LEDGER.md`
- `content/blog/sessions/`
- `content/blog/drafts/`
- `content/blog/published/`

**Nota técnica:** Los artículos publicados en el sitio viven en `src/data/posts/` como módulos TypeScript (`BlogBlock`). Los archivos en `content/blog/published/` son la versión editorial en Markdown. Al publicar, ambos deben mantenerse alineados.

---

## Función de cada directorio

### `content/blog/system/`

Contiene el conocimiento editorial acumulado.

### `content/blog/sessions/`

Contiene los resultados estructurados de conversaciones, audios, entrevistas y procesos de descubrimiento realizados con ChatGPT.

Los archivos de sesión son material fuente. No representan necesariamente un artículo terminado.

### `content/blog/drafts/`

Contiene artículos en desarrollo.

### `content/blog/published/`

Contiene la versión final editorial en Markdown de los artículos publicados.

### `content/blog/media/`

Imágenes del blog.

- `inbox/`: el autor suelta archivos sin organizar.
- `[slug]/`: Cursor organiza por artículo (`manifest.md` + archivos renombrados).
- `public/blog-assets/[slug]/`: copia servida en el sitio (`/blog-assets/[slug]/...`). No usar `public/blog/` (conflicto con ruta SPA `/blog`, nginx 403).

Ver `content/blog/media/README.md` y `content/blog/system/FLUJO.md`.

---

## Reglas de autenticidad

Nunca inventar:

- Experiencias personales.
- Acontecimientos autobiográficos.
- Conversaciones.
- Resultados profesionales.
- Emociones atribuidas al autor.
- Testimonios.
- Cifras.
- Datos.
- Citas.
- Opiniones que el autor no haya expresado.

Cuando falte información, utilizar un marcador visible o registrar una pregunta pendiente.

Ejemplo:

`[PENDIENTE: describir qué ocurrió después de la conversación]`

Se puede mejorar la forma de expresar una experiencia, pero no modificar su significado.

---

## Voz del autor

La voz debe sentirse:

- Cercana.
- Reflexiva.
- Profesional sin ser rígida.
- Humana.
- Honesta.
- Esperanzadora sin ser ingenua.
- Orientada a ayudar.
- Clara, pero no excesivamente simplificada.

El texto final debe sonar como una versión más estructurada y precisa del autor, no como una personalidad diferente.

Consultar siempre:

`content/blog/system/VOICE.md`

---

## Proceso para crear un artículo

### 1. Consultar el contexto

Leer:

- El archivo de sesión correspondiente.
- `VOICE.md`.
- `EDITORIAL_MEMORY.md`.
- Las publicaciones relacionadas registradas en `CONTENT_LEDGER.md`.

### 2. Identificar la historia

Determinar:

- Qué ocurrió.
- Qué sintió o pensó el autor.
- Qué cambió.
- Qué tensión existe.
- Qué aprendizaje surgió.
- Por qué le puede importar al lector.

### 3. Separar hechos e interpretación

Distinguir claramente entre:

- Hechos proporcionados por el autor.
- Recuerdos aproximados.
- Interpretaciones.
- Opiniones.
- Hipótesis.
- Información que requiere verificación.

### 4. Crear el borrador

El borrador debe incluir, cuando sea apropiado:

1. Una apertura concreta.
2. Una escena, pregunta o tensión.
3. El contexto necesario.
4. El desarrollo de la experiencia.
5. El punto de cambio.
6. La reflexión.
7. La conexión con el lector.
8. Una conclusión con intención.

No todas las historias deben utilizar exactamente la misma estructura.

### 5. Revisar

Comprobar:

- Que la historia tenga progresión.
- Que no existan repeticiones innecesarias.
- Que el aprendizaje haya sido desarrollado y no impuesto.
- Que el cierre no sea artificialmente motivacional.
- Que el artículo aporte algo concreto al lector.
- Que no se hayan inventado detalles.
- Que las afirmaciones verificables tengan respaldo.

---

## Gestión de memoria

`EDITORIAL_MEMORY.md` no debe convertirse en un depósito de toda la información.

Registrar únicamente aprendizajes reutilizables, como:

- Preferencias editoriales confirmadas.
- Patrones narrativos que funcionan.
- Temas recurrentes.
- Valores del autor.
- Expresiones que deben evitarse.
- Tipos de introducción o cierre preferidos.
- Decisiones editoriales aplicables a futuros contenidos.

No convertir una observación aislada en una regla permanente.

Los posibles aprendizajes deben marcarse primero como candidatos. Solo deben incorporarse a la memoria editorial cuando hayan sido confirmados por el autor o se repitan consistentemente.

---

## Registro de publicaciones

Después de aprobar o publicar un artículo, actualizar:

`content/blog/system/CONTENT_LEDGER.md`

Registrar:

- Título.
- Slug.
- Fecha.
- Estado.
- Tema principal.
- Historia utilizada.
- Audiencia.
- Idea central.
- Aprendizaje.
- Llamado a la acción.
- Artículos relacionados.
- Archivo de sesión de origen.
- Archivo del artículo publicado.
- Módulo TypeScript en `src/data/posts/` (si aplica).

---

## Contexto para ChatGPT

`content/blog/system/CHATGPT_CONTEXT.md` es un documento de transferencia.

Debe contener una síntesis compacta de:

- Identidad editorial.
- Voz actual.
- Audiencia.
- Principios.
- Temas desarrollados.
- Publicaciones existentes.
- Historias ya utilizadas.
- Ideas abiertas.
- Decisiones editoriales relevantes.

No debe contener todos los artículos completos ni detalles innecesarios.

Debe permitir iniciar una nueva conversación con ChatGPT sin tener que compartir todo el repositorio.

Actualizar este archivo después de:

- Publicar un artículo.
- Cambiar significativamente la voz.
- Confirmar un nuevo principio editorial.
- Abrir o cerrar una línea temática importante.

---

## Trazabilidad

Todo borrador debe poder relacionarse con su material de origen.

Cuando sea posible, incluir metadatos como:

```yaml
---
title:
status: draft
created:
updated:
source_sessions:
  - content/blog/sessions/example.md
related_posts: []
themes: []
---
```

No eliminar el archivo de sesión después de crear el artículo.

La conversación original puede ser temporal. El archivo de sesión debe conservar la información editorial relevante.

---

## Criterio de finalización

Un artículo está terminado cuando:

- Su idea central es clara.
- La historia respalda el mensaje.
- La voz es coherente.
- No contiene detalles inventados.
- Las afirmaciones relevantes han sido verificadas.
- El lector recibe una reflexión o aplicación útil.
- El autor ha aprobado el contenido.
- El registro editorial ha sido actualizado.

---

## Flujo de trabajo

```text
Audio o idea
      ↓
Conversación profunda en ChatGPT (con CHATGPT_CONTEXT.md)
      ↓
Paquete estructurado de la sesión
      ↓
Archivo guardado en content/blog/sessions/
      ↓
Cursor crea o actualiza el borrador
      ↓
Revisión con el autor
      ↓
Publicación (Markdown + src/data/posts/)
      ↓
Cursor actualiza memoria, registro y contexto
```

Ver `content/blog/system/PROMPTS.md` para los prompts de ChatGPT y Cursor.

Ver `content/blog/system/FLUJO.md` para la guía paso a paso (incluye imágenes).

## Imágenes

Al trabajar con imágenes:

1. El autor las coloca en `content/blog/media/inbox/` o las pega en el chat de Cursor.
2. Identificar contenido y contexto; renombrar con nombres descriptivos.
3. Mover a `content/blog/media/[slug]/` y crear o actualizar `manifest.md`.
4. Copiar a `public/blog-assets/[slug]/` para el sitio.
5. Insertar en borrador Markdown y en `src/data/posts/` con bloques `{ type: 'image', src, alt, caption? }`.
6. `src` siempre como ruta pública: `/blog-assets/[slug]/archivo.jpg`.

No dejar imágenes sueltas en `inbox/` después de organizarlas.
