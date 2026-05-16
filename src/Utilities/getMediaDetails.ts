const appendToResponse =
  "credits,videos,reviews,keywords,watch/providers,external_ids,recommendations";

type MediaDetailsResult = {
  data?: any;
  error?: any;
  isError: boolean;
};
const DEFAULT_URL = "https://api.themoviedb.org/3"
const rawUrl = process.env.NEXT_PUBLIC_MOVIE_DB_API || DEFAULT_URL;

export async function getMediaDetailsFromApi(
  mediaType: string,
  mediaID: string | number
): Promise<MediaDetailsResult> {
  try {
    const parsedUrl = new URL(rawUrl);
    if (parsedUrl.protocol !== "https:") {
      throw new Error("Security Error: Insecure HTTP protocol blocked.");
    }
    const baseUrl = parsedUrl.href.replace(/\/$/, "");

    const response = await fetch(
      `${baseUrl}/${mediaType}/${mediaID}?language=en-US&append_to_response=${appendToResponse}`,
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_MOVIE_DB_ACCESS_TOKEN}`,
        },
        next: { revalidate: 3600 },
      }
    );
    const data = await response.json();

    if (!response.ok) {
      return { data: undefined, error: data, isError: true };
    }

    return {
      data: { ...data, media_type: mediaType },
      error: undefined,
      isError: false,
    };
  } catch (error) {
    return { data: undefined, error, isError: true };
  }
}
