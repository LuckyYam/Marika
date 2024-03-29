import { IPicture, ISimpleImageResponse, IVoiceActor, ICommonConfig, ICommonPicture } from '.'
import { Sorting } from '../constants'

export interface ICharacterFull extends ICharacter {
    /** List of anime appeared by the character */
    anime: CharacterSource<'anime'>[]
    /** List of manga appeared by the character */
    manga: CharacterSource<'manga'>[]
    /** Voice actors of the character */
    voices: IVoiceActor[]
}

export interface ICharacter {
    /** MyAnimeList ID of the character */
    mal_id: number
    /** MyAnimeList URL of the character */
    url: string
    /** Images of the character */
    images: ICommonPicture & {
        /** Images of the character in the format webp */
        webp: ISimpleImageResponse
    }
    /** Name of the character */
    name: string
    /** Name of the character in Kanji */
    name_kanji: string
    /** Nicknames of the character */
    nicknames: string[]
    /** Favorites count of the character */
    favorites: number
    /** About (description) of the character */
    about: string | null
}

export interface ICharacterSearchConfig extends ICommonConfig {
    /** Search term */
    q?: string
    /** Number of results that should be limited per page */
    limit?: number
    /** Get entries by order of a field */
    order_by?: 'mal_id' | 'name' | 'favorites'
    /** Search query sort direction */
    sort?: Sorting
    /** Return entries starting with the given letter */
    letter?: string
}

export type CharacterSource<T extends 'anime' | 'manga'> = {
    [key in T]: {
        /** MAL ID of the source */
        mal_id: number
        /** MAL URL of the source */
        url: string
        /** Images of the source */
        images: IPicture
        /** Title of the source */
        title: string
    }
} & {
    /** Role of the character in the source */
    role: string
}
