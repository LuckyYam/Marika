import { IAnime, ICommonConfig, IExtendedPagination } from '.'
import { AnimeSeasons, AnimeTypes } from '../constants'

export interface ISeasonResponse {
    /** Data of the anime */
    data: IAnime[]
    /** Pagination of the results */
    pagination: IExtendedPagination
}

export interface ISeasonConfig extends ICommonConfig {
    /** Filter by anime type */
    filter?: AnimeTypes
    /** Filter out Adult entries */
    sfw?: boolean
    /** When its value is true, it will include the unapproved entries */
    unapproved?: boolean
    /** Number of results that should be limited per page */
    limit?: number
}

export interface ISeasonList {
    /** Year of the list */
    year: number
    /** Available seasons of the list */
    seasons: AnimeSeasons[]
}
