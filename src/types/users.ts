import {
    ICommonPicture,
    IPicture,
    IResource,
    IUser,
    IRecommendation,
    IAnimeUserUpdate,
    IMangaUserUpdate,
    IExtendedResource,
    IReview,
    ICommonConfig
} from '.'
import { AnimeTypes, Genders, MangaTypes } from '../constants'

export interface IUserFavorites {
    /** List of favorites of the user for anime */
    anime: (IUserSource & {
        /** Type of the anime */
        type: AnimeTypes
    })[]
    /** List of favorites of the user for anime */
    manga: (IUserSource & {
        /** Type of the manga */
        type: MangaTypes
    })[]
    /** List of favorites of the user for characters */
    characters: ISourceForUser[]
    /** List of favorites of the user for people */
    people: ISourceForUser[]
}

export interface IUserFull extends IUserProfile {
    /** Statistics of user for anime & manga */
    statistics: {
        /** Statistics of anime for the user */
        anime: IUserStatistics & {
            /** Number of days watched by the user for anime */
            days_watched: number
            /** Count of anime the user is currently watching */
            watching: number
            /** Count of anime the user is planning to watch */
            plan_to_watch: number
            /** Count of anime rewatched by the user */
            rewatched: number
            /** Count of total anime episodes watched by the user */
            episodes_watched: number
        }
        /** Statistics of manga for the user */
        manga: IUserStatistics & {
            /** Number of days read by the user for manga */
            days_read: number
            /** Count of manga reading by the user */
            reading: number
            /** Count of manga the user is planning to read */
            plan_to_read: number
            /** Count of manga reread by the user */
            reread: number
            /** Count of manga chapters read by the user */
            chapters_read: number
            /** Count of manga volumes read by the user */
            volumes_read: number
        }
    }
    /** External sites of the user */
    external: IResource[]
}

export interface IUserProfile extends IUserBaseRes {
    /** Gender of the user */
    gender: Genders | null
    /** Birthday of the user */
    birthday: string
    /** Location of the user */
    location: string
    /** Date & time in string which the user joined MAL */
    joined: string
}

export interface IUserBaseRes extends IUser {
    /** Date & time in string which the user was last online in MAL */
    last_online: string
}

export interface IUserStatistics {
    /** Mean score of the user for a source */
    mean_score: number
    /** Count of completed sources by the user */
    completed: number
    /** Count of sources put by the user on hold */
    on_hold: number
    /** Count of dropped sources by the user */
    dropped: number
    /** Total count of the sources which the user put a status */
    total_entries: number
}

export interface IUserById extends Omit<IUser, 'images'> {}

export interface IUserUpdatesResponse {
    /** Anime updates of the user */
    anime: IAnimeUserUpdates[]
    /** Manga updates of the user */
    manga: IMangaUserUpdates[]
}

export interface IAnimeUserUpdates extends Omit<IAnimeUserUpdate, 'user'> {
    /** Entry (data) of the anime */
    entry: IRecommendation['entry']
}

export interface IMangaUserUpdates extends Omit<IMangaUserUpdate, 'user'> {
    /** Entry (data) of the manga */
    entry: IRecommendation['entry']
}

export interface IUserAbout {
    /** About (info) of the user */
    about: string
}

export interface IUserFriend {
    /** Data of the friend */
    user: IUser
    /** Date & the time which the friend was online */
    last_online: string
    /** Date & time in string which the friend were friends with the user  */
    friends_since: string
}

export interface IUserHistory {
    /** Entry (data) of the source */
    entry: IExtendedResource
    /** Increment of the source from the user */
    increment: number
    /** Date & time which the user accessed the source */
    date: string
}

export interface IUserSource {
    /** Title of the source */
    title: string
    /** MAL ID of the source */
    mal_id: number
    /** MAL URL of the source */
    url: string
    /** Images of the source */
    images: IPicture
    /** Starting year of the source */
    start_year: number
}

export interface IUserReview extends IReview {
    /** Count of episodes watched by the user
     * @description This value will be undefined if the type of review is not anime
     */
    episodes_watched?: number | null
    /** Count of chapters read by the user
     * @description This value will be undefined if the type of review is not manga
     */
    chapters_read?: number | null
    /** Entry of the source */
    entry: Omit<IUserSource, 'start_year'>
}

export interface ISourceForUser extends IResource {
    /** MAL ID of the source */
    mal_id: number
    /** Images of the source */
    images: ICommonPicture
}

export interface IUserClub extends IResource {
    /** MAL ID of the club */
    mal_id: number
}

export interface IUserHistoryConfig {
    /** Filter the entries by type of the review */
    type?: 'anime' | 'manga'
}

export interface IUserSearchConfig extends ICommonConfig {
    /** Number of results that should be limited per page */
    limit?: number
    /** Search term */
    q?: string
    /** Filter entries by gender */
    gender?: Genders
    /** Filter entries by loacation */
    location?: string
    /** Filter entries by maximum age */
    maxAge?: number
    /** Filter entries by minimum age */
    minAge?: number
}
