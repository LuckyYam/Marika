import { CacheOptions } from 'axios-cache-interceptor'
import { ICharacter, ICharacterFull, ICommonPicture, ICharacterSearchConfig, IExtendedPagination } from '../../types'
import { Fetch, getURL, getQueryString, getTypeErrorMessage } from '../../utils'

export class Characters {
    #fetch: Fetch['get']
    /**
     * Constructs an instance of the [characters](https://docs.api.jikan.moe/#tag/characters) client
     * @param cacheOptions [Cache options](https://axios-cache-interceptor.js.org/config) for the client to make requests
     */
    constructor(cacheOptions?: CacheOptions) {
        this.#fetch = new Fetch(cacheOptions).get
    }

    /**
     * Gets the data of a character from its MyAnimeList ID
     * @param id MyAnimeList ID of the character
     * @returns The data of the character
     */
    public getCharacterById = async (id: string | number): Promise<ICharacter> => {
        if (typeof id !== 'string' && typeof id !== 'number')
            throw new TypeError(getTypeErrorMessage('id', 'string or number', typeof id))
        return (await this.#fetch<{ data: ICharacter }>(getURL('characters', `${id}`))).data
    }

    /**
     * Gets the full data of a character from its MyAnimeList ID
     * @param id MyAnimeList ID of the character
     * @returns The full data of the character
     */
    public getCharacterFullById = async (id: string | number): Promise<ICharacterFull> => {
        if (typeof id !== 'string' && typeof id !== 'number')
            throw new TypeError(getTypeErrorMessage('id', 'string or number', typeof id))
        return (await this.#fetch<{ data: ICharacterFull }>(getURL('characters', `${id}`, 'full'))).data
    }

    /**
     * Gets the list of anime appeared by a character from its MyAnimeList ID
     * @param id MyAnimeList ID of the character
     * @returns List of anime appeared by the character
     */
    public getCharacterAnime = async (id: string | number): Promise<ICharacterFull['anime']> => {
        if (typeof id !== 'string' && typeof id !== 'number')
            throw new TypeError(getTypeErrorMessage('id', 'string or number', typeof id))
        return (await this.#fetch<{ data: ICharacterFull['anime'] }>(getURL('characters', `${id}`, 'anime'))).data
    }

    /**
     * Gets the list of manga appeared by a character from its MyAnimeList ID
     * @param id MyAnimeList ID of the character
     * @returns List of manga appeared by the character
     */
    public getCharacterManga = async (id: string | number): Promise<ICharacterFull['manga']> => {
        if (typeof id !== 'string' && typeof id !== 'number')
            throw new TypeError(getTypeErrorMessage('id', 'string or number', typeof id))
        return (await this.#fetch<{ data: ICharacterFull['manga'] }>(getURL('characters', `${id}`, 'manga'))).data
    }

    /**
     * Gets the voice actors of a character from its MyAnimeList ID
     * @param id MyAnimeList ID of the character
     * @returns Voice actors of the character
     */
    public getCharacterVoiceActors = async (id: number | string): Promise<ICharacterFull['voices']> => {
        if (typeof id !== 'string' && typeof id !== 'number')
            throw new TypeError(getTypeErrorMessage('id', 'string or number', typeof id))
        return (await this.#fetch<{ data: ICharacterFull['voices'] }>(getURL('characters', `${id}`, 'voices'))).data
    }

    /**
     * Gets the pictures of a character from its MyAnimeList ID
     * @param id MyAnimeList ID of the character
     * @returns Pictures of the character
     */
    public getCharacterPictures = async (id: string | number): Promise<ICommonPicture[]> => {
        if (typeof id !== 'string' && typeof id !== 'number')
            throw new TypeError(getTypeErrorMessage('id', 'string or number', typeof id))
        return (await this.#fetch<{ data: ICommonPicture[] }>(getURL('characters', `${id}`, 'pictures'))).data
    }

    /**
     * Searches for a character in MyAnimeList
     * @param config Config to make the search
     * @returns The results of the search
     */
    public getCharactersSearch = async (
        config?: ICharacterSearchConfig
    ): Promise<{ data: ICharacter[]; pagination: IExtendedPagination }> =>
        await this.#fetch<{ data: ICharacter[]; pagination: IExtendedPagination }>(
            getURL('characters').concat(getQueryString<keyof ICharacterSearchConfig>(config || {}))
        )
}
