export type FontPresetId =
  | "abc-rom-mono"
  | "abc-rom"
  | "abc-rom-plus"
  | "dm-sans"
  | "system";

export type FontPreset = {
  id: FontPresetId;
  label: string;
  description: string;
  heading: string;
  body: string;
};

export const FONT_PRESETS: FontPreset[] = [
  {
    id: "abc-rom-mono",
    label: "ABC ROM Mono",
    description: "Monoespaciada técnica",
    heading: '"ABC ROM Mono", ui-monospace, monospace',
    body: '"ABC ROM Mono", ui-monospace, monospace',
  },
  {
    id: "abc-rom",
    label: "ABC ROM",
    description: "Sans geométrica",
    heading: '"ABC ROM", ui-sans-serif, system-ui, sans-serif',
    body: '"ABC ROM", ui-sans-serif, system-ui, sans-serif',
  },
  {
    id: "abc-rom-plus",
    label: "ABC ROM Plus",
    description: "Variable display",
    heading: '"ABC ROM Plus", ui-sans-serif, system-ui, sans-serif',
    body: '"ABC ROM", ui-sans-serif, system-ui, sans-serif',
  },
  {
    id: "dm-sans",
    label: "DM Sans",
    description: "Actual del sitio",
    heading: '"DM Sans", ui-sans-serif, system-ui, sans-serif',
    body: '"DM Sans", ui-sans-serif, system-ui, sans-serif',
  },
  {
    id: "system",
    label: "Sistema",
    description: "Fuente del dispositivo",
    heading: 'ui-sans-serif, system-ui, -apple-system, sans-serif',
    body: 'ui-sans-serif, system-ui, -apple-system, sans-serif',
  },
];

export const DEFAULT_FONT_PRESET_ID: FontPresetId = "abc-rom-mono";

export const FONT_STORAGE_KEY = "portfolio-font-preset";

export const getFontPreset = (id: FontPresetId): FontPreset =>
  FONT_PRESETS.find((p) => p.id === id) ?? FONT_PRESETS[0];
