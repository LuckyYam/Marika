import { ICommonConfig, ICommonPicture, IResource, ITitle } from '.'
import { Sorting } from '../constants'

export interface IProducerFull extends IProducer {
    /** External sites of the producer */
    external: IResource[]
}

export interface IProducer {
    /** MAL ID of the producer */
    mal_id: number
    /** MAL URL of the producer */
    url: string
    /** Titles of the producer */
    titles: ITitle[]
    /** Images of the producer */
    images: ICommonPicture
    /** Favortites count of the producer in MAL */
    favortites: number
    /** Count of works done by the producer */
    count: number
    /** Date in string which the producer was established  */
    established: string
    /** About (info) of the producer */
    about: string
}

export interface IProducerSearchConfig extends ICommonConfig {
    /** Search term */
    q?: string
    /** Number of results that should be limited per page */
    limit?: number
    /** Return entries starting with the given letter */
    letter?: string
    /** Search direction */
    sort?: Sorting
    /** Return entries by order of a field */
    order_by?: 'mal_id' | 'count' | 'favorites' | 'established'
}
