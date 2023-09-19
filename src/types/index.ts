export interface IJikanError {
    status: 400 | 404 | 405 | 429 | 500
    type: string
    message: string
    error: string | null
    report_url?: string
}

export type Change<T, K extends keyof T, R extends string, N> = Omit<T, K> & { [key in R]: N }

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

export * from './pagination'
