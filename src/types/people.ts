import { ICharacterFromSource, ICommonConfig, ICommonPicture } from '.'
import { CharacterSource } from './characters'
import { Sorting } from '../constants'

export interface IPersonFull extends IPerson {
    /** List of anime contributed by the person */
    anime: PersonSource<'anime'>[]
    /** List of manga contributed by the person */
    manga: PersonSource<'manga'>[]
    /** List of voices featured by the person */
    voices: IPersonVoice[]
}

export interface IPerson {
    /** MAL ID of the person */
    mal_id: number
    /** MAL URL of the person */
    url: string
    /** Website URL of the person */
    website_url: string | null
    /** Images of the person */
    images: ICommonPicture
    /** Name of the person */
    name: string
    /** Given name of the person */
    given_name: string
    /** Alternate names of the person */
    alternate_names: string[]
    /** Birthday of the character in string */
    birthday: string
    /** Favorites count of the person */
    favorites: number
    /** About (description) of the person */
    about: string
}

export interface IPersonVoice extends CharacterSource<'anime'> {
    /** Data of the character */
    character: ICharacterFromSource
}

export interface IPersonSearchConfig extends ICommonConfig {
    /** Search term */
    q?: string
    /** Number of results that should be limited per page */
    limit?: number
    /** Get entries by order of a field */
    order_by?: 'mal_id' | 'name' | 'favorites' | 'birthday'
    /** Search query sort direction */
    sort?: Sorting
    /** Return entries starting with the given letter */
    letter?: string
}

export type PersonSource<T extends 'anime' | 'manga'> = Omit<CharacterSource<T>, 'role'> & {
    /** Position of the person in the source */
    position: string
}
