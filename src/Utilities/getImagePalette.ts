import { unstable_cache } from "next/cache";
import { Vibrant } from "node-vibrant/node";

type Rgb = [number, number, number];

export type BannerPalette = {
  rgb: Rgb;
  hex: string;
  titleTextColor: string;
  bodyTextColor: string;
};

const fallbackPalette: BannerPalette = {
  rgb: [3, 37, 65],
  hex: "#032541",
  titleTextColor: "#ffffff",
  bodyTextColor: "#ffffff",
};

const getPaletteFromImage = unstable_cache(
  async (imageUrl: string): Promise<BannerPalette> => {
    if (!imageUrl) return fallbackPalette;

    try {
      const palette = await Vibrant.from(imageUrl).getPalette();
      const swatch =
        palette.DarkVibrant ||
        palette.DarkMuted ||
        palette.Vibrant ||
        palette.Muted ||
        palette.LightVibrant ||
        palette.LightMuted;

      if (!swatch) return fallbackPalette;

      return {
        rgb: swatch.rgb.map(Math.round) as Rgb,
        hex: swatch.hex,
        titleTextColor: swatch.titleTextColor,
        bodyTextColor: swatch.bodyTextColor,
      };
    } catch {
      return fallbackPalette;
    }
  },
  ["tmdb-image-palette"],
  { revalidate: 60 * 60 * 24 }
);

export async function getImagePalette(imageUrl?: string) {
  return getPaletteFromImage(imageUrl || "");
}

export function toRgba([r, g, b]: Rgb, alpha: number) {
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
