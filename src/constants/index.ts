export const API_URL = 'https://api.jikan.moe/v4'

export enum Sorting {
    DESCENDING = 'desc',
    ASCENDING = 'asc'
}

export enum Forums {
    ALL = 'all',
    EPISODE = 'episode',
    OTHER = 'other'
}

export * from './anime'
export * from './clubs'
export * from './genres'
export * from './manga'
