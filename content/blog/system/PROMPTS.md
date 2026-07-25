# Prompts del flujo editorial

Guía paso a paso en `FLUJO.md`. Resumen: en ChatGPT va **un solo chat**; el primer mensaje incluye contexto + prompt + tu idea.

## Iniciar sesión editorial en ChatGPT

**Un mensaje, no tres.** En un chat nuevo, pega en este orden:

1. Todo el contenido de `CHATGPT_CONTEXT.md`
2. Una línea en blanco y `---`
3. El prompt de abajo
4. Otra línea en blanco y `---`
5. Tu idea, transcripción de audio, o notas

ChatGPT empezará a hacerte preguntas en la **misma conversación**. No necesitas otro prompt para eso.

```
Quiero desarrollar una idea para mi blog mediante una sesión de descubrimiento editorial.

Por ahora, no escribas el artículo final.

Voy a compartir audios, transcripciones, experiencias, pensamientos y preguntas. Tu función durante esta etapa es ayudarme a pensar con mayor profundidad y descubrir la historia que existe detrás de lo que estoy expresando.

Durante la conversación:

1. Identifica los hechos y experiencias concretas que comparto.
2. Separa los hechos de mis interpretaciones, opiniones e hipótesis.
3. Detecta las emociones, tensiones, contradicciones y cambios de perspectiva.
4. Ayúdame a reconocer qué aprendizaje o sabiduría existe en la experiencia.
5. Haz preguntas que permitan recuperar escenas, decisiones, conversaciones o detalles relevantes.
6. Identifica a qué tipo de persona podría ayudarle esta historia.
7. Señala lugares comunes, conclusiones débiles o afirmaciones que todavía no estén suficientemente desarrolladas.
8. Propón diferentes interpretaciones cuando puedan enriquecer mi reflexión.
9. Identifica datos, conceptos o afirmaciones que deban investigarse o verificarse.
10. No inventes detalles para completar la historia.

No conviertas automáticamente todo lo que diga en una verdad definitiva. Ayúdame también a cuestionar mis propias conclusiones de forma respetuosa.

Cuando diga exactamente:

"Cierra la sesión editorial"

crea un documento Markdown listo para guardar dentro de:

`content/blog/sessions/`

Utiliza esta estructura:

---
title:
date:
status: discovered
possible_slug:
themes: []
related_posts: []
---

# Sesión editorial

## Idea inicial

## Experiencia o historia de origen

## Escenas y momentos concretos

## Hechos proporcionados

## Recuerdos aproximados

## Interpretaciones del autor

## Emociones y tensiones

## Conflicto central

## Cambio de perspectiva

## Aprendizajes descubiertos

## Sabiduría práctica

## Persona a quien puede ayudar

## Problema del lector

## Posibles ideas centrales

## Posibles enfoques narrativos

## Frases o expresiones auténticas del autor

## Afirmaciones que requieren verificación

## Preguntas todavía abiertas

## Conexiones con otros temas

## Posible estructura del artículo

## Candidatos de aprendizaje sobre la voz

Estos candidatos no deben tratarse todavía como reglas permanentes.

## Recomendación para el siguiente paso

El documento debe conservar la riqueza de la conversación, pero eliminar repeticiones, muletillas innecesarias y contenido que no aporte al desarrollo editorial.

No redactes todavía el artículo completo, salvo que lo solicite explícitamente después de cerrar la sesión.
```

---

## Continuar sesión editorial en Cursor

Imágenes: el autor puede dejarlas en `content/blog/media/inbox/` o pegarlas en este chat. Organízalas en `content/blog/media/[slug]/`, copia a `public/blog-assets/[slug]/`, actualiza `manifest.md` e insértalas en el borrador y en el post.

```
Trabaja con el sistema editorial definido en `content/blog/AGENTS.md` y con las reglas de `.cursor/rules/storytelling-blog.mdc`.

El material fuente principal para esta tarea es:

`content/blog/sessions/[RUTA-DEL-ARCHIVO-DE-SESION].md`

Antes de redactar:

1. Lee `content/blog/AGENTS.md`.
2. Lee el archivo de sesión.
3. Lee `content/blog/system/VOICE.md`.
4. Lee `content/blog/system/EDITORIAL_MEMORY.md`.
5. Consulta `content/blog/system/CONTENT_LEDGER.md` para identificar publicaciones, historias o ideas relacionadas.
6. Determina qué información está confirmada y qué información continúa pendiente.
7. No inventes experiencias, escenas, datos, emociones ni resultados.

Después:

1. Propón una tesis principal para el artículo.
2. Identifica la transformación narrativa.
3. Propón una estructura breve.
4. Crea el borrador dentro de:

`content/blog/drafts/[SLUG].md`

Incluye metadatos que relacionen el borrador con el archivo de sesión.

El borrador debe conservar la voz del autor y mejorar:

- Claridad.
- Progresión narrativa.
- Precisión.
- Ritmo.
- Profundidad.
- Utilidad para el lector.

Cuando falte información importante, utiliza marcadores visibles:

`[PENDIENTE: ...]`

No marques el artículo como publicado.

No actualices todavía `VOICE.md` con observaciones no confirmadas.

Al finalizar, presenta:

- El archivo creado.
- La tesis utilizada.
- Las principales decisiones editoriales.
- Las preguntas o verificaciones pendientes.
- Los posibles aprendizajes de voz, identificados únicamente como candidatos.

Cuando el artículo sea aprobado y se indique expresamente que fue publicado:

1. Mueve o copia la versión final a `content/blog/published/`.
2. Actualiza `CONTENT_LEDGER.md`.
3. Actualiza `EDITORIAL_MEMORY.md` únicamente con aprendizajes confirmados.
4. Regenera `CHATGPT_CONTEXT.md`.
```
