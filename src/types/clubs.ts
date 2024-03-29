import { IExtendedResource, ICommonConfig, ICommonPicture } from '.'
import { ClubAccess, ClubCategories, Sorting } from '../constants'

export interface IClub {
    /** MyAnimeList ID of the club */
    mal_id: number
    /**MyAnimeList URL of the club */
    url: string
    /** Images of the club */
    images: ICommonPicture
    /** Name of the club */
    name: string
    /** Members count of the club */
    members: number
    /** Catrgory of the club */
    category: string
    /** Date which the club was created */
    created: string
    /** Access type of the club */
    access: ClubAccess
}

export interface IClubMember extends IClubStaff {
    /** Images of the member */
    images: ICommonPicture & {
        webp: {
            /** Image URL of the member in the format webp */
            image_url: string
        }
    }
}

export interface IClubStaff {
    /** Username of the user */
    username: string
    /** MAL URL of the user */
    url: string
}

export interface IClubRelations {
    /** List of anime relations for the club */
    anime: IExtendedResource[]
    /** List of manga relations for the club */
    manga: IExtendedResource[]
    /** List of character relations for the club */
    characters: IExtendedResource[]
}

export interface IClubSearchConfig extends ICommonConfig {
    /** Number of results that should be limited per page */
    limit?: number
    /** Search term */
    q?: string
    /** Access type of the club */
    type?: ClubAccess
    /** Get entries by order of a field */
    order_by?: 'mal_id' | 'name' | 'members_count' | 'created'
    /** Search query sort direction */
    sort?: Sorting
    /** Return entries starting with the given letter */
    letter?: string
    /** Filter the entries by a category */
    cattegories?: ClubCategories
}
