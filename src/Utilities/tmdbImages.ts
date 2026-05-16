type TmdbImageSize =
  | "w185"
  | "w342"
  | "w500"
  | "w780"
  | "w1280"
  | "original";

export function getTmdbImageUrl(
  path?: string | null,
  size: TmdbImageSize = "w780"
) {
  if (!path) return "";

  return `https://image.tmdb.org/t/p/${size}${path}`;
}
