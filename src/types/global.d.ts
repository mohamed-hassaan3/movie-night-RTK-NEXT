export { }

declare global {
    interface Form extends React.FormHTMLAttributes<HTMLFormElement> {
        children: React.ReactNode,
        className: string,
    }
    interface ErrorResponse {
        message: string
    }
    interface RejectWithValue {
        rejectWithValue: Function
    }
    type ApiPath = string
    interface PrimaryButton {
        text: string
        className?: string;
        onClick?: (e: React.MouseEvent<HTMLElement>) => void;
        disabled?: boolean;
        value?: string;
        type?: "submit" | "button" | "reset";
    }
    interface CategoryButton {
        children: React.ReactNode
        className?: string;
        isActive?: boolean;
        onClick?: (e: React.MouseEvent<HTMLElement>) => void;
        disabled?: boolean;
        value?: string;
        type?: "submit" | "button" | "reset";
    }
    interface Cast {
        id: number
        name: string
        character: string
        profile_path: string | null
    }
    interface Keywords {
        id: number
        name: string
    }
    interface Video {
        iso_639_1: string;
        iso_3166_1: string;
        key: string;
        name: string;
        official: boolean;
        published_at: string;
        site: string;
        size: number;
        type: string;
    }
    interface Item {
        id?: number;
        [key: string]: any;
    }
    interface TrailerProps {
        videos: Video[];
    }
    interface Author {
        avatar_path: string
        rating: number
        name: string
    }
    interface VideosResults {
        id: number
        key: string
    }
    interface Recommendations {
        id: number
        name: string
        backdrop_path: string
        release_date: string
        first_air_date: string
        title: string
        vote_average: number
    }
    interface Reviews {
        id: number
        author: string
        content: string
        created_at: Date
        url: string
        author_details: Author
    }
    interface Parts {
        id: number;
        original_name: string;
        original_title: string;
        title: string;
        poster_path: string | undefined;
        overview: string | number;
        media_type: string;
        profile_path: string
        known_for_department: string
        known_for: []
        release_date: string
        name: string;
        release_date: Date;
        overview: string;
        original_title: string
    }
    interface MediaDetails {
        id: number
        media_type?: string;
        parts: Parts[]
        Video: Video[]
        homepage: string
        status: string
        original_language: string
        budget: number
        revenue: number
        recommendations: {
            results: Recommendations[]
        }
        videos: {
            results: VideosResults[]
        }
        reviews: {
            results: Reviews[]
        }
        keywords: {
            keywords: Keywords[]
        }
        external_ids?: {
            facebook_id: string
            instagram_id: string
            twitter_id: string
        }
        credits: {
            cast: Cast[]
            crew: Cast[]
        }
    }

    interface PersonDetails {
        id: number;
        biography: string;
        birthday: Date;
        also_known_as: [];
        homepage: string
        known_for_department: string;
        name: string;
        place_of_birth: string;
        profile_path: string;
        external_ids?: {
            facebook_id: string
            instagram_id: string
            twitter_id: string
        }
        credits: {
            cast: Cast[]
            crew: Cast[]
        }
    }
}