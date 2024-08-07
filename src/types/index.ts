export type CurrentPage = number

export type Category = string

export interface InitialStateSearch {
    searchTerm: string;
    category: string;
    currentPage: Number;
    searchData: any[];
    isLoading: boolean;
    isError: any
}

export interface InitialMediaIDState {
    mediaDetails: {};
    isLoading: boolean;
    isError: any;
}

export interface SearchItem {
    id: number;
    name: string;
    original_name: string;
    original_title: string;
    poster_path: string | undefined;
    overview: string | number;
    media_type: string;
    profile_path: string
    known_for_department: string
    known_for: []
    release_date: string
}

export interface DetailsItem {
    id: number;
    original_name: string;
    adult?: boolean;
    poster_path: string | null;
    vote_average: number;
    vote_count: number;
    overview: string;
    popularity: number;
    media_type: string;
    release_date: Date
}

export interface CharProps {
    name?: string;
    id: string | number;
    original_title?: string;
  }

