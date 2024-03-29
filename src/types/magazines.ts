import { ICommonConfig } from '.'
import { Sorting } from '../constants'

export interface IMagazineConfig extends ICommonConfig {
    /** Number of results that should be limited per page */
    limit?: number
    /** Search term */
    q?: string
    /** Get entries by order of a field */
    order_by?: 'mal_id' | 'name' | 'count'
    /** Search query sort direction */
    sort?: Sorting
    /** Return entries starting with the given letter */
    letter?: string
}
