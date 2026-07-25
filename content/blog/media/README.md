# Imágenes del blog

## inbox/ (tú)

Suelta aquí fotos, capturas o ilustraciones **sin renombrar**. Pueden venir del teléfono (`IMG_1234.jpg`) o de capturas de pantalla.

Cuando trabajes en Cursor, indica para qué artículo son (o Cursor inferirá desde la sesión/borrador activo).

## [slug]/ (Cursor)

Por cada artículo, una carpeta con el mismo slug que el post:

```text
content/blog/media/como-conseguir-tu-primer-empleo-en-software-sin-experiencia/
├── manifest.md
├── computador-desarmado.jpg
└── semillero-programacion.jpg
```

### manifest.md

Inventario editorial. Cursor lo mantiene al organizar imágenes.

```markdown
# Manifest: [título del artículo]

| Archivo | Alt | Caption | Usado en |
| --- | --- | --- | --- |
| computador-desarmado.jpg | Computador desarmado en la habitación | Mi primer contacto con el hardware | Apertura |
```

## public/blog-assets/[slug]/ (sitio)

Copia servida en producción. URL: `/blog-assets/[slug]/nombre-archivo.jpg`

No usar `public/blog/`: choca con la ruta SPA `/blog` y nginx devuelve 403.

No editar a mano salvo emergencia. Cursor sincroniza desde `content/blog/media/[slug]/`.

## En el chat de Cursor

Si pegas imágenes en el chat en lugar de usar `inbox/`:

1. Describe brevemente qué muestra cada una (opcional pero ayuda).
2. Cursor las guardará en `media/[slug]/` y `public/blog-assets/[slug]/`.
3. Pide explícitamente dónde quieres cada imagen en el texto si tienes preferencia.
