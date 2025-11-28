# Configuración de Elipses con Blur

Este sistema te permite agregar y modificar fácilmente elipses con efecto blur en cualquier sección de tu sitio.

## 📁 Archivos del Sistema

- **`src/components/BlurEllipse.tsx`**: Componente reutilizable para crear un elipse con blur
- **`src/components/BlurEllipses.tsx`**: Helper para renderizar múltiples elipses
- **`src/config/blurEllipses.ts`**: Archivo de configuración centralizado

## 🚀 Uso Básico

### 1. Agregar elipses a una nueva sección

Edita `src/config/blurEllipses.ts` y agrega una nueva configuración:

```typescript
export const miNuevaSeccionEllipses: BlurEllipseConfig[] = [
  {
    color: "rgba(220, 255, 49, 0.4)", // Color en formato rgba
    blur: 100, // Intensidad del blur (opcional, por defecto 100)
    size: {
      mobile: {
        width: "377px",
        height: "340px",
        aspectRatio: "1.108_/_1",
      },
      desktop: {
        width: "377px",
        height: "340px",
        aspectRatio: "1.108_/_1",
      },
    },
    position: {
      mobile: {
        top: "50px",
        left: "50px",
      },
      desktop: {
        top: "100px",
        right: "100px",
      },
    },
  },
];
```

### 2. Usar en tu componente

```tsx
import { BlurEllipses } from "@/components/BlurEllipses";
import { miNuevaSeccionEllipses } from "@/config/blurEllipses";

export const MiComponente = () => {
  return (
    <div className="relative">
      <BlurEllipses ellipses={miNuevaSeccionEllipses} />
      {/* Tu contenido aquí */}
    </div>
  );
};
```

## 🎨 Parámetros Disponibles

### `color` (requerido)
Color del elipse en formato rgba:
- `"rgba(220, 255, 49, 0.4)"` - Amarillo-verde
- `"rgba(127, 230, 217, 0.4)"` - Cyan/turquesa
- Cualquier otro color rgba

### `blur` (opcional)
Intensidad del blur en píxeles. Por defecto: `100`

### `size` (opcional)
Tamaño del elipse:
```typescript
size: {
  mobile: {
    width: "377px",        // Ancho en mobile
    height: "340px",       // Alto en mobile
    aspectRatio: "1.108_/_1", // Ratio de aspecto (opcional)
  },
  desktop: {
    width: "377px",        // Ancho en desktop
    height: "340px",       // Alto en desktop
    aspectRatio: "1.108_/_1", // Ratio de aspecto (opcional)
  },
}
```

### `position` (opcional)
Posición del elipse:
```typescript
position: {
  mobile: {
    top: "-85px",          // Posición desde arriba
    right: "-221px",       // Posición desde la derecha
    bottom: "auto",        // Posición desde abajo
    left: "auto",         // Posición desde la izquierda
    transform: "transform-none", // Transformación CSS (opcional)
  },
  desktop: {
    top: "-116px",
    right: "-172px",
    bottom: "auto",
    left: "auto",
    transform: "translate-x-[-50.0%]", // Ejemplo de transformación
  },
}
```

**Nota sobre transformaciones:**
- `"transform-none"` - Sin transformación
- `"translate-x-[-50.0%]"` - Centrar horizontalmente

## 📝 Ejemplos

### Ejemplo 1: Elipse simple
```typescript
{
  color: "rgba(255, 0, 0, 0.3)",
  blur: 80,
  size: {
    mobile: { width: "300px", height: "300px" },
    desktop: { width: "400px", height: "400px" },
  },
  position: {
    mobile: { top: "0", left: "0" },
    desktop: { top: "50px", right: "50px" },
  },
}
```

### Ejemplo 2: Múltiples elipses
```typescript
export const misEllipses: BlurEllipseConfig[] = [
  {
    color: "rgba(220, 255, 49, 0.4)",
    blur: 100,
    // ... configuración
  },
  {
    color: "rgba(127, 230, 217, 0.4)",
    blur: 120,
    // ... configuración
  },
];
```

## 🔧 Modificar Elipses Existentes

Para modificar los elipses existentes (Hero, Services, etc.), simplemente edita el array correspondiente en `src/config/blurEllipses.ts`:

```typescript
export const heroEllipses: BlurEllipseConfig[] = [
  {
    color: "rgba(220, 255, 49, 0.4)", // Cambia el color aquí
    blur: 100, // Cambia la intensidad del blur aquí
    size: {
      mobile: {
        width: "377px", // Cambia el tamaño aquí
        // ...
      },
      // ...
    },
    position: {
      mobile: {
        bottom: "-85px", // Cambia la posición aquí
        // ...
      },
      // ...
    },
  },
];
```

## 💡 Tips

1. **Colores**: Usa valores rgba con opacidad baja (0.3-0.5) para un efecto sutil
2. **Posiciones negativas**: Usa valores negativos (ej: `-85px`) para posicionar fuera del contenedor
3. **Responsive**: Siempre define tanto `mobile` como `desktop` para un diseño responsive
4. **Blur**: Valores entre 80-120px suelen funcionar bien
5. **Múltiples elipses**: Puedes agregar tantos elipses como necesites en un array

