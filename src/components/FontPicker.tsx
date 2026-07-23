import { useState } from "react";
import { FONT_PRESETS } from "@/config/fontPresets";
import { useFontPreset } from "@/context/FontContext";

export const FontPicker = () => {
  const { presetId, setPresetId } = useFontPreset();
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-[9999] flex flex-col items-end gap-2">
      {open && (
        <div
          className="w-[min(280px,calc(100vw-2.5rem))] rounded-2xl border-2 border-stone-900 bg-white p-3 shadow-lg"
          role="dialog"
          aria-label="Selector de fuentes"
        >
          <p className="mb-2 px-1 text-xs font-semibold uppercase tracking-wider text-stone-500 font-site-body">
            Tipografía
          </p>
          <ul className="flex flex-col gap-1">
            {FONT_PRESETS.map((preset) => {
              const active = preset.id === presetId;
              return (
                <li key={preset.id}>
                  <button
                    type="button"
                    onClick={() => {
                      setPresetId(preset.id);
                      setOpen(false);
                    }}
                    className={`w-full rounded-xl border-2 px-3 py-2.5 text-left transition-colors ${
                      active
                        ? "border-stone-900 bg-yellow-300"
                        : "border-transparent bg-neutral-100 hover:border-stone-300"
                    }`}
                  >
                    <span
                      className="block text-sm font-bold text-stone-900"
                      style={{ fontFamily: preset.heading }}
                    >
                      {preset.label}
                    </span>
                    <span
                      className="block text-xs text-stone-600"
                      style={{ fontFamily: preset.body }}
                    >
                      {preset.description}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-stone-900 bg-yellow-300 text-lg font-bold text-stone-900 shadow-md transition-transform hover:scale-105 font-site-heading"
        aria-label={open ? "Cerrar selector de fuentes" : "Abrir selector de fuentes"}
        aria-expanded={open}
      >
        Aa
      </button>
    </div>
  );
};
