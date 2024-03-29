import {
    IExtendedResource,
    IRelation,
    IResponse,
    ITimeResponse,
    IResource,
    IScore,
    IReview,
    IUserUpdate,
    ISearchConfig
} from '.'
import { MangaStatus, MangaTypes } from '../constants'

export interface IMangaStatistics {
    /** Count of users who have been reading the manga */
    reading: number
    /** Count of users who have completed reading the manga */
    completed: number
    /** Count of users who have put the manga on hold */
    on_hold: number
    /** Count of users who have dropped the manga */
    dropped: number
    /** Count of users who have plans to read the manga */
    plan_to_read: number
    /** Total number of users who have set their status on the manga */
    total: number
    /** Scores of the manga given by the users */
    scores: IScore[]
}

export interface IMangaReview extends IReview {
    /** Number of chapters read by the reviewer */
    chapters_read: number | null
}

export interface IMangaUserUpdate extends IUserUpdate {
    /** Number of volumes read by the user */
    volumes_read: number | null
    /** Total volumes of the manga to read */
    volumes_total: number | null
    /** Number of chapters read by the user */
    chapters_read: number | null
    /** Total chapters of the manga to read */
    chapters_total: number | null
}

export interface IMangaFull extends IManga {
    /** Relations of the manga */
    relations: IRelation[]
    /** External sites of the manga */
    external: IResource[]
}

export interface IManga extends IResponse {
    /** Type of the manga */
    type: keyof typeof MangaTypes
    /** Chapters count of the manga */
    chapters: number | null
    /** Volumes count of the manga */
    volumes: number | null
    /** Whether the manga is publishing or not */
    publishing: boolean
    /** Data of dates the manga published */
    published: ITimeResponse
    /** Authors of the manga */
    authors: IExtendedResource[]
    /** Serializations of the manga */
    serializations: IExtendedResource[]
}

export interface IMangaSearchConfig extends ISearchConfig {
    /** Type of the manga */
    type?: MangaTypes
    /** Status of the manga */
    status?: MangaStatus
    /** Get entries by order of a field */
    order_by?:
        | 'mal_id'
        | 'title'
        | 'start_date'
        | 'end_date'
        | 'chapters'
        | 'volumes'
        | 'score'
        | 'scored_by'
        | 'rank'
        | 'popularity'
        | 'members'
        | 'favorites'
    /** Filter by magazine(s) IDs */
    magazines?: number[]
}
