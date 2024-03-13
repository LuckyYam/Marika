import { CacheOptions } from 'axios-cache-interceptor'
import { ICommonPicture, IExtendedPagination, IPerson, IPersonFull, IPersonSearchConfig } from '../../types'
import { Fetch, getQueryString, getTypeErrorMessage, getURL } from '../../utils'

export class People {
    #fetch: Fetch['get']
    /**
     * Constructs an instance of the [people](https://docs.api.jikan.moe/#tag/people) client
     * @param cacheOptions [Cache options](https://axios-cache-interceptor.js.org/config) for the client to make requests
     */
    constructor(cacheOptions?: CacheOptions) {
        this.#fetch = new Fetch(cacheOptions).get
    }

    /**
     * Gets the data of a person from its MyAnimeList ID
     * @param id MyAnimeList ID of the person
     * @returns Data of the person
     */
    public getPersonById = async (id: string | number): Promise<IPerson> => {
        if (typeof id !== 'string' && typeof id !== 'number')
            throw new TypeError(getTypeErrorMessage('id', 'string or number', typeof id))
        return (await this.#fetch<{ data: IPerson }>(getURL('people', `${id}`))).data
    }

    /**
     * Gets the full data of a person from its MyAnimeList ID
     * @param id MyAnimeList ID of the person
     * @returns Full data of the person
     */
    public getPersonByIdFull = async (id: string | number): Promise<IPersonFull> => {
        if (typeof id !== 'string' && typeof id !== 'number')
            throw new TypeError(getTypeErrorMessage('id', 'string or number', typeof id))
        return (await this.#fetch<{ data: IPersonFull }>(getURL('people', `${id}`, 'full'))).data
    }

    /**
     * Gets list of the anime contributed by a person from its MyAnimeList ID
     * @param id MyAnimeList ID of the person
     * @returns List of anime contributed by the person
     */
    public getPersonAnime = async (id: string | number): Promise<IPersonFull['anime']> => {
        if (typeof id !== 'string' && typeof id !== 'number')
            throw new TypeError(getTypeErrorMessage('id', 'string or number', typeof id))
        return (await this.#fetch<{ data: IPersonFull['anime'] }>(getURL('people', `${id}`, 'anime'))).data
    }

    /**
     * Gets list of the voices featured by a person from its MyAnimeList ID
     * @param id MyAnimeList ID of the person
     * @returns List of voices featured by the person
     */
    public getPersonVoices = async (id: string | number): Promise<IPersonFull['voices']> => {
        if (typeof id !== 'string' && typeof id !== 'number')
            throw new TypeError(getTypeErrorMessage('id', 'string or number', typeof id))
        return (await this.#fetch<{ data: IPersonFull['voices'] }>(getURL('people', `${id}`, 'voices'))).data
    }

    /**
     * Gets list of the manga contributed by a person from its MyAnimeList ID
     * @param id MyAnimeList ID of the person
     * @returns List of manga contributed by the person
     */
    public getPersonManga = async (id: string | number): Promise<IPersonFull['manga']> => {
        if (typeof id !== 'string' && typeof id !== 'number')
            throw new TypeError(getTypeErrorMessage('id', 'string or number', typeof id))
        return (await this.#fetch<{ data: IPersonFull['manga'] }>(getURL('people', `${id}`, 'manga'))).data
    }

    /**
     * Gets the pictures of a person from its MyAnimeList ID
     * @param id MyAnimeList ID of the person
     * @returns Pictures of the person
     */
    public getPersonPictures = async (id: string | number): Promise<ICommonPicture[]> => {
        if (typeof id !== 'string' && typeof id !== 'number')
            throw new TypeError(getTypeErrorMessage('id', 'string or number', typeof id))
        return (await this.#fetch<{ data: ICommonPicture[] }>(getURL('people', `${id}`, 'pictures'))).data
    }

    /**
     * Searches for person in MyAnimeList
     * @param config Config to make the search
     * @returns Results of the search
     */
    public getPeopleSearch = async (
        config?: IPersonSearchConfig
    ): Promise<{ pagination: IExtendedPagination; data: IPerson[] }> =>
        await this.#fetch<{ pagination: IExtendedPagination; data: IPerson[] }>(
            getURL('people').concat(getQueryString<keyof IPersonSearchConfig>(config || {}))
        )
}
