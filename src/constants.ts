export const API_URL = 'https://api.jikan.moe/v4'

export enum AnimeTypes {
    TV = 'TV',
    MOVIE = 'Movie',
    SPECIAL = 'Special',
    OVA = 'OVA',
    ONA = 'ONA',
    MUSIC = 'Music'
}

export enum AnimeForums {
    ALL = 'all',
    EPISODE = 'episode',
    OTHER = 'other'
}

export enum Sorting {
    DESCENDING = 'desc',
    ASCENDING = 'asc'
}

export enum Ratings {
    /** G - All Ages */
    G = 'g',
    /** PG - Children */
    PG = 'pg',
    /** PG-13 - Teens 13 or older */
    PG_13 = 'pg13',
    /** R - 17+ (violence & profanity) */
    R_17 = 'r17',
    /** R+ - Mild Nudity */
    R = 'r',
    /** Rx - Hentai */
    RX = 'rx'
}

export enum AnimeStatus {
    AIRING = 'airing',
    COMPLETE = 'complete',
    UPCOMING = 'upcoming'
}
