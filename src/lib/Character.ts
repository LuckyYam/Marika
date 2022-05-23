import {
    ICharacter,
    ICharacterAnime,
    ICharacterManga,
    ICharacterVoices,
    ICharacterPictures,
    ICharacterSearch,
    ITopCharacter,
    ICharacterSearchOptions,
    ISimpleOption
} from '../typings'
import { utils } from './'

export class Character {
    constructor() {}

    /**
     * Method for getting random Character with info
     * @returns {ICharacter}
     */
    public getRandomCharacter = async (): Promise<ICharacter> => {
        let url = this.utils.getUrl('random')
        url += '/characters'
        return await this.utils
            .fetch<{ data: ICharacter }>(url)
            .then((res) => res.data)
            .catch((err) => {
                throw new Error(err)
            })
    }

    /**
     * Method for getting the info of the given Character ID
     * @param {number} id the ID of the Character
     * @returns {ICharacter}
     */
    public getCharacterById = async (id: number): Promise<ICharacter> => {
        if (!id) throw new TypeError('Provide the id of the Character.')
        let url = this.utils.getUrl('characters')
        url += `/${id}`
        return await this.utils
            .fetch<{ data: ICharacter }>(url)
            .then((res) => res.data)
            .catch((err) => {
                throw new Error(err)
            })
    }

    /**
     * Method for getting the Anime of the given Character ID
     * @param {number} id The ID of the Character
     * @returns {ICharacterAnime}
     */
    public getCharacterAnime = async (id: number): Promise<ICharacterAnime> => {
        if (!id) throw new TypeError('Provide the id of the Character.')
        let url = this.utils.getUrl('characters')
        url += `/${id}/anime`
        return await this.utils.fetch<ICharacterAnime>(url).catch((err) => {
            throw new Error(err)
        })
    }

    /**
     * Method for getting the Manga of the given Character ID
     * @param {number} id The ID of the Character
     * @returns {ICharacterManga}
     */
    public getCharacterManga = async (id: string): Promise<ICharacterManga> => {
        if (!id) throw new TypeError('Provide the id of the Character.')
        let url = this.utils.getUrl('characters')
        url += `/${id}/manga`
        return await this.utils.fetch<ICharacterManga>(url).catch((err) => {
            throw new Error(err)
        })
    }

    /**
     * Method for getting the Voice Actors of the given Character ID
     * @param {number} id The ID of the Character
     * @returns {ICharacterVoices}
     */
    public getCharacterVoiceActors = async (id: number): Promise<ICharacterVoices> => {
        if (!id) throw new TypeError('Provide the id of the Character.')
        let url = this.utils.getUrl('characters')
        url += `/${id}/voices`
        return await this.utils.fetch<ICharacterVoices>(url).catch((err) => {
            throw new Error(err)
        })
    }

    /**
     * Method for getting pictures of the given Character ID
     * @param {number} id The ID of the Character
     * @returns {ICharacterPictures}
     */
    public getCharacterPictures = async (id: number): Promise<ICharacterPictures> => {
        if (!id) throw new TypeError('Provide the id of the Character.')
        let url = this.utils.getUrl('characters')
        url += `/${id}/pictures`
        return await this.utils.fetch<ICharacterPictures>(url).catch((err) => {
            throw new Error(err)
        })
    }

    /**
     * Method for searching Character
     * @param {string} query The Character name that you wanna search
     * @param {ICharacterSearchOptions} options The options for searching
     * @returns {ICharacterSearch}
     */
    public searchCharacter = async (query: string, options?: ICharacterSearchOptions): Promise<ICharacterSearch> => {
        if (!query) throw new TypeError('Provide the query of the Character')
        const baseUrl = this.utils.getUrl('characters')
        const url = this.utils.getCharacterQuerySearchUrl(baseUrl, query, options)
        return await this.utils.fetch<ICharacterSearch>(url).catch((err) => {
            throw new Error(err)
        })
    }

    /**
     * Method for getting top Characters in MyAnimeList
     * @param {ISimpleOption} page The page of the list
     * @returns {ITopCharacter}
     */
    public getTopCharacters = async (options?: ISimpleOption): Promise<ITopCharacter> => {
        let url = this.utils.getUrl('top')
        url += '/characters'
        if (options?.query) url += `?page=${options?.query}`
        return await this.utils.fetch<ITopCharacter>(url).catch((err) => {
            throw new Error(err)
        })
    }

    private utils = new utils()
}
