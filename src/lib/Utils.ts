import { IAnimeSearchOptions, ICharacterSearchOptions, IMangaSearchOptions, TMethods } from '../typings/searchOptions'
import axios from 'axios'

export class utils {
    /**
     * Returns Anime query searching URL
     * @param {string} url The url of the API
     * @param {string} query The query of the Anime
     * @param {IAnimeSearchOptions} options The options to use for searching
     */
    public getAnimeQuerySearchUrl = (url: string, query: string, options?: IAnimeSearchOptions): string => {
        let result = url
        const i = options
        result += `?q=${query}`
        if (options?.sfw) result += '&sfw'
        if (i?.page) result += `&page=${i.page}`
        if (i?.limit) result += `&limit=${i.limit}`
        if (i?.genres) result += `&genres=${i.genres}`
        if (i?.type) result += `&type=${i.type}`
        if (i?.score) result += `&score=${i.score}`
        if (i?.min_score) result += `&min_score=${i.min_score}`
        if (i?.max_score) result += `&max_score=${i.max_score}`
        if (i?.status) result += `&status=${i.status}`
        if (i?.rating) result += `&rating=${i.rating}`
        if (i?.genres_exclude) result += `&genres_exclude=${i.genres_exclude}`
        if (i?.order_by) result += `&order_by=${i.order_by}`
        if (i?.sort) result += `&sort=${i.sort}`
        if (i?.letter) result += `&letter=${i.letter}`
        if (i?.producer) result += `&producer=${i.producer}`
        return result
    }

    /**
     * Returns Manga query searching URL
     * @param {string} url The url of the API
     * @param {string} query The query of the Manga
     * @param {IMangaSearchOptions} options The options to use for searching
     */
    public getMangaQuerySearchUrl = (url: string, query: string, options?: IMangaSearchOptions): string => {
        let result = url
        const i = options
        result += `?q=${query}`
        if (options?.sfw) result += '&sfw'
        if (i?.page) result += `&page=${i?.page}}`
        if (i?.limit) result += `&limit=${i.limit}`
        if (i?.genres) result += `&genres=${i.genres}`
        if (i?.type) result += `&type=${i.type}`
        if (i?.score) result += `&score=${i.score}`
        if (i?.min_score) result += `&min_score=${i.min_score}`
        if (i?.max_score) result += `&max_score=${i.max_score}`
        if (i?.status) result += `&status=${i.status}`
        if (i?.genres_exclude) result += `&genres_exclude=${i.genres_exclude}`
        if (i?.order_by) result += `&order_by=${i.order_by}`
        if (i?.sort) result += `&sort=${i.sort}`
        if (i?.letter) result += `&letter=${i.letter}`
        if (i?.magazine) result += `&magazine=${i.magazine}`
        return result
    }

    /**
     * Returns Character query searching URL
     * @param {string} url The url of the API
     * @param {string} query The query of the Character
     * @param {IAnimeSearchOptions} options The options to use for searching
     */
    public getCharacterQuerySearchUrl = (url: string, query: string, options?: ICharacterSearchOptions): string => {
        let result = url
        const i = options
        result += `?q=${query}`
        if (i?.page) result += `&page=${i.page}`
        if (i?.limit) result += `&limit=${i.limit}`
        if (i?.order_by) result += `&order_by=${i.order_by}`
        if (i?.sort) result += `&sort=${i.sort}`
        if (i?.letter) result += `&letter=${i.letter}`
        return result
    }

    /**
     * Returns URL of the API according to the method
     * @param {TMethods} method The method to be used
     */
    public getUrl = (method: TMethods): string => {
        let result = 'https://api.jikan.moe/v4/'
        result += method
        return result
    }

    public fetch = async <T>(url: string): Promise<T> => await (await axios.get(url)).data
}
