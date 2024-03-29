import { ICommonConfig, IReviewConfig } from '.'
import { AnimeFilters, AnimeTypes, MangaFilters, MangaTypes, Ratings } from '../constants'

export interface ITopAnimeConfig extends ITopCommonConfig {
    /** Filter the entries by an anime type */
    type?: AnimeTypes
    /** Filter the top list */
    filter?: AnimeFilters
    /** Filter entries by the ratings */
    rating?: Ratings
    /** Filter out adult entries */
    sfw?: boolean
}

export interface ITopMangaConfig extends ITopCommonConfig {
    /** Filter the entries by a manga type */
    type?: MangaTypes
    /** Filter the top list */
    filter?: MangaFilters
}

export interface ITopCommonConfig extends ICommonConfig {
    /** Number of results that should be limited per page */
    limit?: number
}

export interface ITopReviewConfig extends IReviewConfig {
    /** Filter the reviews by type */
    type: 'anime' | 'manga'
}
