import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  DEFAULT_FONT_PRESET_ID,
  FONT_STORAGE_KEY,
  getFontPreset,
  type FontPreset,
  type FontPresetId,
} from "@/config/fontPresets";

type FontContextValue = {
  presetId: FontPresetId;
  preset: FontPreset;
  setPresetId: (id: FontPresetId) => void;
};

const FontContext = createContext<FontContextValue | null>(null);

const applyFontPreset = (preset: FontPreset) => {
  const root = document.documentElement;
  root.style.setProperty("--font-site-heading", preset.heading);
  root.style.setProperty("--font-site-body", preset.body);
  root.dataset.fontPreset = preset.id;
};

export const FontProvider = ({ children }: { children: ReactNode }) => {
  const [presetId, setPresetIdState] = useState<FontPresetId>(() => {
    if (typeof window === "undefined") return DEFAULT_FONT_PRESET_ID;
    const stored = localStorage.getItem(FONT_STORAGE_KEY) as FontPresetId | null;
    return stored && getFontPreset(stored) ? stored : DEFAULT_FONT_PRESET_ID;
  });

  const preset = useMemo(() => getFontPreset(presetId), [presetId]);

  const setPresetId = useCallback((id: FontPresetId) => {
    setPresetIdState(id);
    localStorage.setItem(FONT_STORAGE_KEY, id);
    applyFontPreset(getFontPreset(id));
  }, []);

  useEffect(() => {
    applyFontPreset(preset);
  }, [preset]);

  const value = useMemo(
    () => ({ presetId, preset, setPresetId }),
    [presetId, preset, setPresetId],
  );

  return <FontContext.Provider value={value}>{children}</FontContext.Provider>;
};

export const useFontPreset = () => {
  const ctx = useContext(FontContext);
  if (!ctx) {
    throw new Error("useFontPreset must be used within FontProvider");
  }
  return ctx;
};
