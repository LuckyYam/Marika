import {
    IManga,
    IMangaCharacters,
    IMangaNews,
    IMangaTopics,
    IMangaPictures,
    IMangaStats,
    IMangaMoreInfo,
    IMangaRecommendations,
    IMangaUserUpdates,
    IMangaReviews,
    IMangaRelations,
    IMangaExternals,
    IMangaSearch,
    ITopManga,
    IMangaSearchOptions,
    ISimpleOption
} from '../typings'
import { utils } from './'

export class Manga {
    constructor() {}

    /**
     * Method for getting random Manga with info
     *  @returns {IManga}
     */
    public getRandomManga = async (): Promise<IManga> => {
        let url = this.utils.getUrl('random')
        url += '/manga'
        return await this.utils
            .fetch<{ data: IManga }>(url)
            .then((res) => res.data)
            .catch((err) => {
                throw new Error(err)
            })
    }

    /**
     * Method for getting the info of the given Manga ID
     * @param {number} id ID of the Manga
     * @returns {IManga}
     */
    public getMangaById = async (id: number): Promise<IManga> => {
        if (!id) throw new TypeError('Provide ID of the Manga')
        let url = this.utils.getUrl('manga')
        url += `/${id}`
        return await this.utils
            .fetch<{ data: IManga }>(url)
            .then((res) => res.data)
            .catch((err) => {
                throw new Error(err)
            })
    }

    /**
     * Method for getting Manga characters
     * @param {number} id ID of the Manga
     * @returns {IMangaCharacters}
     */
    public getMangaCharacters = async (id: number): Promise<IMangaCharacters> => {
        if (!id) throw new TypeError('Provide the id of the Manga')
        let url = this.utils.getUrl('manga')
        url += `/${id}`
        return await this.utils.fetch<IMangaCharacters>(url).catch((err) => {
            throw new Error(err)
        })
    }

    /**
     * Method for getting news of the given Manga ID
     * @param {number} id ID of the Manga
     * @param {ISimpleOption} options The page of the news
     * @returns {IMangaNews}
     */
    public getMangaNews = async (id: number, options?: ISimpleOption): Promise<IMangaNews> => {
        if (!id) throw new TypeError(`Provide the id of the Manga`)
        let url = this.utils.getUrl('manga')
        url += `/${id}/news`
        const i = options?.query
        let q = 1
        if (i) q = i
        url += `?page=${q}`
        return await this.utils.fetch<IMangaNews>(url).catch((err) => {
            throw new Error(err)
        })
    }

    /**
     * Method for getting Manga topics
     * @param {number} id ID of the Manga
     * @returns {IMangaTopics}
     */
    public getMangaTopics = async (id: number): Promise<IMangaTopics> => {
        if (!id) throw new TypeError('Provide the id of the Manga')
        let url = this.utils.getUrl('manga')
        url += `/${id}/forum`
        return await this.utils.fetch<IMangaTopics>(url).catch((err) => {
            throw new Error(err)
        })
    }

    /**
     * Method for getting pictures of the given Manga ID
     * @param {number} id ID of the Manga
     * @returns {IMangaPictures}
     */
    public getMangaPictures = async (id: number): Promise<IMangaPictures> => {
        if (!id) throw new TypeError('Provide the id of the Manga')
        let url = this.utils.getUrl('manga')
        url += `/${id}/pictures`
        return await this.utils.fetch<IMangaPictures>(url).catch((err) => {
            throw new Error(err)
        })
    }

    /**
     * Method for getting the statistics of the given Manga ID
     * @param {number} id ID of the Manga
     * @returns {IMangaStats}
     */
    public getMangaStats = async (id: number): Promise<IMangaStats> => {
        if (!id) throw new TypeError('Provide the id of the Manga')
        let url = this.utils.getUrl('manga')
        url += `/${id}/statistics`
        return await this.utils
            .fetch<{ data: IMangaStats }>(url)
            .then((res) => res.data)
            .catch((err) => {
                throw new Error(err)
            })
    }

    /**
     * Method for getting more info of the given Manga ID
     * @param {number} id ID of the Manga
     * @returns {IMangaMoreInfo}
     */
    public getMangaMoreInfo = async (id: number): Promise<IMangaMoreInfo> => {
        if (!id) throw new TypeError('Provide the id of the Manga')
        let url = this.utils.getUrl('manga')
        url += `/${id}/moreinfo`
        return await this.utils
            .fetch<{ data: IMangaMoreInfo }>(url)
            .then((res) => res.data)
            .catch((err) => {
                throw new Error(err)
            })
    }

    /**
     * Method for getting recommendations of the given Manga ID
     * @param {number} id ID of the Manga
     * @returns {IMangaRecommendations}
     */
    public getMangaRecommendations = async (id: number): Promise<IMangaRecommendations> => {
        if (!id) throw new TypeError('Provide the id of the Manga')
        let url = this.utils.getUrl('manga')
        url += `/${id}/recommendations`
        return await this.utils.fetch<IMangaRecommendations>(url).catch((err) => {
            throw new Error(err)
        })
    }

    /**
     * Method for getting user updates of the given Manga ID
     * @param {number} id ID of the Manga
     * @param {ISimpleOption} page Page of the list
     * @returns {IMangaUserUpdates}
     */
    public getMangaUserUpdates = async (id: number, options?: ISimpleOption): Promise<IMangaUserUpdates> => {
        if (!id) throw new TypeError(`Provide the id of the Manga`)
        let url = this.utils.getUrl('manga')
        url += `/${id}/userupdates`
        const i = options?.query
        let q = 1
        if (i) q = i
        url += `?page=${q}`
        return await this.utils.fetch<IMangaUserUpdates>(url).catch((err) => {
            throw new Error(err)
        })
    }

    /**
     * Method for getting reviews of the given Manga ID
     * @param {number} id ID of the Manga
     * @param {ISimpleOption} options Page of the list
     * @returns {IMangaReviews}
     */
    public getMangaReviews = async (id: number, options?: ISimpleOption): Promise<IMangaReviews> => {
        if (!id) throw new TypeError(`Provide the id of the Manga`)
        let url = this.utils.getUrl('manga')
        url += `/${id}/reviews`
        const i = options?.query
        let q = 1
        if (i) q = i
        url += `?page=${q}`
        return await this.utils.fetch<IMangaReviews>(url).catch((err) => {
            throw new Error(err)
        })
    }

    /**
     * Method for getting relations of the given Manga ID
     * @param {number} id ID of the Manga
     * @returns {IMangaRelations}
     */
    public getMangaRelations = async (id: number): Promise<IMangaRelations> => {
        if (!id) throw new TypeError('Provide the id of the Manga')
        let url = this.utils.getUrl('manga')
        url += `/${id}/relations`
        return await this.utils.fetch<IMangaRelations>(url).catch((err) => {
            throw new Error(err)
        })
    }

    /**
     * Method for getting external of the given Manga ID
     * @param {number} id ID of the Manga
     * @returns {IMangaExternals}
     */
    public getMangaExternal = async (id: number): Promise<IMangaExternals> => {
        if (!id) throw new TypeError('Provide the id of the Manga')
        let url = this.utils.getUrl('manga')
        url += `/${id}/external`
        return await this.utils.fetch<IMangaExternals>(url).catch((err) => {
            throw new Error(err)
        })
    }

    /**
     * Method for searching Manga
     * @param {string} query of the Manga
     * @param {IMangaSearchOptions} options The options for searching
     * @returns {IMangaSearch}
     */
    public searchManga = async (query: string, options?: IMangaSearchOptions): Promise<IMangaSearch> => {
        if (!query) throw new TypeError('Provide the query of the Manga')
        const baseUrl = this.utils.getUrl('manga')
        const url = this.utils.getMangaQuerySearchUrl(baseUrl, query, options)
        return await this.utils.fetch<IMangaSearch>(url).catch((err) => {
            throw new Error(err)
        })
    }

    /**
     * Method for getting the list of top Manga
     * @param {ISimpleOption} page Page of the list
     * @returns {ITopManga}
     */
    async getTopManga(options?: ISimpleOption): Promise<ITopManga> {
        let url = this.utils.getUrl('top')
        url += '/manga'
        if (options?.query) url += `?page=${options?.query}`
        return await this.utils.fetch<ITopManga>(url).catch((err) => {
            throw new Error(err)
        })
    }

    private utils = new utils()
}
