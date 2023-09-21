import { Sorting } from '../constants'

export interface IJikanError {
    status: 400 | 404 | 405 | 429 | 500
    type: string
    message?: string
    error: string | null
    report_url?: string
    messages?: { [key in string]: string[] }
}

export type TMethods =
    | 'anime'
    | 'characters'
    | 'clubs'
    | 'genres'
    | 'magazines'
    | 'manga'
    | 'people'
    | 'producers'
    | 'random'
    | 'recommendations'
    | 'reviews'
    | 'schedules'
    | 'users'
    | 'seasons'
    | 'top'
    | 'watch'

export interface IExtendedImageResponse extends IImageResponse {
    /** Image url in maximum size */
    maximum_image_url: string | null
}

export interface IImageResponse extends ISimpleImageResponse {
    /** Image url in large size */
    large_image_url: string | null
}

export interface ISimpleImageResponse {
    /** Image url in normal size */
    image_url: string | null
    /** Image url in small size */
    small_image_url: string | null
}

export interface IExtendedResource {
    /** MAL ID of the resource */
    mal_id: number
    /** Type of the resource */
    type: string
}

export interface IUser {
    /** Username of the user */
    username: string
    /** URL of the user */
    url: string
    /** Images of the user */
    images: {
        /** Image of the user in the format jpg */
        jpg: {
            /** Image URL of the user in the format jpg */
            image_url: string | null
        }
        /** Image of the user in the format webp */
        webp: {
            /** Image URL of the user in the format webp */
            image_url: string | null
        }
    }
}

export interface ITitle {
    /** Type of the title */
    type: string
    /** Title of the source for the type given */
    title: string
}

export interface IResource {
    /** URL to the resource */
    url: string
    /** Name of the resource */
    name: string
}

export interface ISearchConfig extends ICommonConfig {
    /** Filter out Adult entries */
    sfw?: boolean
    /** When its value is true, it will include the unapproved entries */
    unapproved?: boolean
    /** Number of results that should be limited per page */
    limit?: number
    /** Search term */
    q?: string
    /** Filters out the results that doesn't match the score (exact) */
    score?: number
    /** Sets the minimum score of the results */
    min_score?: number
    /** Sets the maximum score of the results */
    max_score?: number
    /** Filter by genre(s) IDs */
    genres?: number[]
    /** Exclude genre(s) by IDs */
    genres_exclude?: number[]
    /** Search query sort direction */
    sort?: Sorting
    /** Return entries starting with the given letter */
    letter?: string
    /** Filter by starting date. Format: YYYY-MM-DD. e.g `2022`, `2005-05`, `2005-01-01` */
    start_date?: string
    /** Filter by ending date. Format: YYYY-MM-DD. e.g `2022`, `2005-05`, `2005-01-01` */
    end_date?: string
}

export interface IResponse {
    /** MAL ID of the source */
    mal_id: string
    /** URL of the source */
    url: string
    /** Image URLs of the source */
    images: IPicture
    /** Whether the source has aprroved entry or not */
    approved: boolean
    /** Data of titles (in different languages) for the source */
    titles: ITitle[]
    /** Title of the source */
    title: string
    /** Title of the source in English */
    title_english: string
    /** Title of the source in Japanese */
    title_japanese: string
    /** Synonyms of the title */
    title_synonyms: string[]
    /** Status of the source */
    status: string
    /** Score of the source (out of 10)*/
    score: number
    /** Number of people that scored the source */
    scored_by: number
    /** Rank of the source */
    rank: number
    /** Popularity rank of the source */
    populartiy: number
    /** Members count of the source */
    members: number
    /** Favorites count of the source */
    favortites: number
    /** Synopsis of the source */
    synopsis: string | null
    /** Background of the source */
    background: string | null
    /** Genres of the source */
    genres: IExtendedResource[]
    /** Explicit genres of the source */
    explicit_genres: IExtendedResource[]
    /** Themes of the source */
    themes: IExtendedResource[]
    /** Demographics of the source */
    demographics: IExtendedResource[]
}

export interface ITimeResponse {
    /** Starting  date of the source*/
    from: string | null
    /** Ending date of the source */
    to: string | null
    /** Objects of days, month & year for the starting & ending dates of the source */
    prop: {
        /** Objects of day, month & year the source started */
        from: IDate
        /** Objects of day, month & year the source started */
        to: IDate
    }
    /** Human readable string of the starting & finishing dates */
    string: string | null
}

export interface IDate {
    /** The day it happened */
    day: number | null
    /** The month it happened */
    month: number | null
    /** The year it happened */
    year: number | null
}

export interface ICharacterFromSource {
    /** MAL ID of the  character */
    mal_id: number
    /** MAL URL to the character */
    url: string
    /** Images of the character in the formats jpg & webp */
    images: {
        /** Images of the character in the format jpg */
        jpg: {
            /** Image URL of the character in normal size of format jpg */
            image_url: string | null
        }
        /** Images of the character in the format webp */
        webp: ISimpleImageResponse
    }
    /** Name of the character */
    name: string
}

export interface IReviewConfig extends ICommonConfig {
    /** Any reviews left during an ongoing anime/manga, those reviews are tagged as preliminary. */
    preliminary?: boolean
    /** Any reviews that are tagged as a spoiler. */
    spoiler?: boolean
}

export interface IReview {
    /** MAL ID of the review */
    mal_id: number
    /** URL of the review */
    url: string
    /** Type of the review */
    type: string
    /** Reactions for the review */
    reactions: {
        /** Total number of users that reacted the review  */
        overall: number
        /** Number of users who reacted the review as nice */
        nice: number
        /** Number of users who loved the review */
        love_it: number
        /** Number of users who found the review funny */
        funny: number
        /** Number of users who found the review confusing */
        confusing: number
        /** Number of users who found the review informative */
        informative: number
        /** Number of users who found the review as well written */
        well_written: number
        /** Number of users who found the review creative */
        creative: number
    }
    /** Date which the review was posted */
    date: string
    /** Message of the review */
    review: string
    /** Score given by the reviewer */
    score: number
    /** Tags of the review */
    tags: string[]
    /** Whether it is a spoiler review or not */
    is_spoiler: boolean
    /** Whether it is a preliminary review or not */
    is_preliminary: boolean
    /** Data of the reviewer */
    user: IUser
}

export interface ICommonConfig {
    /** Page of the results to go */
    page?: number
}

export interface IPicture {
    /** Images of the source in jpg format */
    jpg: IImageResponse
    /** Images of the source in webp format */
    webp: IImageResponse
}

export interface IScore {
    /** Ratable score of the source */
    score: number
    /** Votes of the score given */
    votes: number
    /** Percentage to the total number of votes from all the total ratable scores */
    percentage: number
}

export interface IMoreInfo {
    /** Just some additional info of the source */
    moreinfo: string | null
}

export interface INewsResponse {
    /** MAL ID of the news article */
    mal_id: number
    /** URL of the news article */
    url: string
    /** Title of the news article */
    title: string
    /** Date of the article uploaded */
    date: string
    /** Username of the news article's author */
    author_username: string
    /** URL of the news article's author */
    author_url: string
    /** Images of the news article */
    images: {
        /** Image of the news article in the format jpg */
        jpg: {
            /** Image URL of the news article in the format jpg */
            image_url: string | null
        }
    }
    /** Forum URL of the news article */
    forum_url: string
    /** Number of comments in the news article */
    comments: number
    /** Just a short content of the news article */
    excerpt: string
}

export * from './pagination'
export * from './anime'
export * from './characters'
