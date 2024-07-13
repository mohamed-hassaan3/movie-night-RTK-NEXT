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
    interface TrailerProps {
        videos: Video[];
    }
    interface MediaDetails {
        Video: Video[]
        homepage: string
        status: string
        original_language: string
        budget: number
        revenue: number
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
        }
    }
}