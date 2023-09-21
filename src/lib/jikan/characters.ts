import { CacheOptions } from 'axios-cache-interceptor'
import {
    ICharacter,
    ICharacterFull,
    ICharacterPicture,
    ICharacterSearchConfig,
    IExtendedPagination,
    IItems
} from '../../types'
import { fetch, getURL, getQueryString, getTypeErrorMessage } from '../../utils'

export class Characters {
    #cacheConfig?: CacheOptions
    /**
     * Constructs an instance of the `characters` client
     * @param cacheOptions Cache options to make the requests. See https://axios-cache-interceptor.js.org/config
     */
    constructor(cacheOptions?: CacheOptions) {
        this.#cacheConfig = cacheOptions
    }

    /**
     * Gets the data of a character from its MyAnimeList ID
     * @param id MyAnimeList ID of the character
     * @returns The data of the character
     */
    public getCharacterById = async (id: string | number): Promise<ICharacter> => {
        if (typeof id !== 'string' && typeof id !== 'number')
            throw new TypeError(getTypeErrorMessage('id', 'string or number', typeof id))
        return (await fetch<{ data: ICharacter }>(getURL('characters', `${id}`), this.#cacheConfig)).data
    }

    /**
     * Gets the full data of a character from its MyAnimeList ID
     * @param id MyAnimeList ID of the character
     * @returns The full data of the character
     */
    public getCharacterFullById = async (id: string | number): Promise<ICharacterFull> => {
        if (typeof id !== 'string' && typeof id !== 'number')
            throw new TypeError(getTypeErrorMessage('id', 'string or number', typeof id))
        return (await fetch<{ data: ICharacterFull }>(getURL('characters', `${id}`, 'full'), this.#cacheConfig)).data
    }

    /**
     * Gets the list of anime appeared by a character from its MyAnimeList ID
     * @param id MyAnimeList ID of the character
     * @returns List of anime appeared by the character
     */
    public getCharacterAnime = async (id: string | number): Promise<ICharacterFull['anime']> => {
        if (typeof id !== 'string' && typeof id !== 'number')
            throw new TypeError(getTypeErrorMessage('id', 'string or number', typeof id))
        return (
            await fetch<{ data: ICharacterFull['anime'] }>(getURL('characters', `${id}`, 'anime'), this.#cacheConfig)
        ).data
    }

    /**
     * Gets the list of manga appeared by a character from its MyAnimeList ID
     * @param id MyAnimeList ID of the character
     * @returns List of manga appeared by the character
     */
    public getCharacterManga = async (id: string | number): Promise<ICharacterFull['manga']> => {
        if (typeof id !== 'string' && typeof id !== 'number')
            throw new TypeError(getTypeErrorMessage('id', 'string or number', typeof id))
        return (
            await fetch<{ data: ICharacterFull['manga'] }>(getURL('characters', `${id}`, 'manga'), this.#cacheConfig)
        ).data
    }

    /**
     * Gets the voice actors of a character from its MyAnimeList ID
     * @param id MyAnimeList ID of the character
     * @returns Voice actors of the character
     */
    public getCharacterVoiceActors = async (id: number | string): Promise<ICharacterFull['voices']> => {
        if (typeof id !== 'string' && typeof id !== 'number')
            throw new TypeError(getTypeErrorMessage('id', 'string or number', typeof id))
        return (
            await fetch<{ data: ICharacterFull['voices'] }>(getURL('characters', `${id}`, 'voices'), this.#cacheConfig)
        ).data
    }

    /**
     * Gets the pictures of a character from its MyAnimeList ID
     * @param id MyAnimeList ID of the character
     * @returns Pictures of the character
     */
    public getCharacterPictures = async (id: string | number): Promise<ICharacterPicture[]> => {
        if (typeof id !== 'string' && typeof id !== 'number')
            throw new TypeError(getTypeErrorMessage('id', 'string or number', typeof id))
        return (
            await fetch<{ data: ICharacterPicture[] }>(getURL('characters', `${id}`, 'pictures'), this.#cacheConfig)
        ).data
    }

    /**
     * Searches for a character in MyAnimeList
     * @param config Config to make the search
     * @returns The results of the search
     */
    public getCharactersSearch = async (
        config?: ICharacterSearchConfig
    ): Promise<{ data: ICharacter[]; pagination: IExtendedPagination; items: IItems }> =>
        await fetch<{ data: ICharacter[]; pagination: IExtendedPagination; items: IItems }>(
            getURL('characters').concat(getQueryString<keyof ICharacterSearchConfig>(config || {})),
            this.#cacheConfig
        )
}
