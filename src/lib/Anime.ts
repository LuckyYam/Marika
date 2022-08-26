import { utils } from './'
import {
    IAnime,
    IAnimeFull,
    IAnimeCharacters,
    IAnimeStaff,
    IAnimeEpisodes,
    IAnimeEpisodeById,
    IAnimeNews,
    IAnimeForum,
    IAnimeVideos,
    IAnimePictures,
    IAnimeStats,
    IAnimeMoreInfo,
    IAnimeRecommendations,
    IAnimeUserUpdates,
    IAnimeReviews,
    IAnimeRelations,
    IAnimeThemes,
    IAnimeExternal,
    IAnimeSearch,
    ITopAnime,
    IAnimeSearchOptions,
    ISimpleOption,
    TAnimeFilter
} from '../typings'

export class Anime {
    constructor() {}

    /**
     * Method for getting the info of the given Anime ID
     * @param {number} id The ID of the Anime
     * @returns {IAnime}
     */
    public getAnimeById = async (id: number): Promise<IAnime> => {
        if (!id) throw new TypeError('Provide the id of the Anime.')
        let url = this.utils.getUrl('anime')
        url += `/${id}`
        return await this.utils
            .fetch<{ data: IAnime }>(url)
            .then((res) => res.data)
            .catch((err) => {
                throw new Error(err)
            })
    }

    /**
     * Method for getting the complete info of the given Anime ID
     * @param {number} id The ID of the Anime
     * @returns {IAnime}
     */
    public getAnimeFullById = async (id: number): Promise<IAnimeFull> => {
        if (!id) throw new TypeError('Provide the id of the Anime.')
        let url = this.utils.getUrl('anime')
        url += `/${id}/full`
        return await this.utils
            .fetch<{ data: IAnimeFull }>(url)
            .then((res) => res.data)
            .catch((err) => {
                throw new Error(err)
            })
    }

    /**
     * Method for getting the characters of the given Anime ID
     * @param {number} id The ID of the Anime
     * @returns {IAnimeCharacters}
     */
    public getAnimeCharacters = async (id: number): Promise<IAnimeCharacters> => {
        if (!id) throw new TypeError('Provide the id of the Anime.')
        let url = this.utils.getUrl('anime')
        url += `/${id}/characters`
        return await this.utils.fetch<IAnimeCharacters>(url).catch((err) => {
            throw new Error(err)
        })
    }

    /**
     * Method for getting the staffs of the given Anime ID
     * @param {number} id The ID of the Anime
     * @returns {IAnimeStaff}
     */
    public getAnimeStaff = async (id: number): Promise<IAnimeStaff> => {
        if (!id) throw new TypeError('Provide the id of the Anime.')
        let url = this.utils.getUrl('anime')
        url += `/${id}/staff`
        return await this.utils.fetch<IAnimeStaff>(url).catch((err) => {
            throw new Error(err)
        })
    }

    /**
     * Method for getting the list of episodes of the given Anime ID
     * @param {number} id The ID of the Anime
     * @param {ISimpleOption} page The page of the list
     * @returns {IAnimeEpisodes}
     */
    public getAnimeEpisodes = async (id: number, page?: ISimpleOption): Promise<IAnimeEpisodes> => {
        if (!id) throw new TypeError('Provide the id of the Anime.')
        let url = this.utils.getUrl('anime')
        url += `/${id}/episodes`
        const i = page?.query
        let q = 1
        if (i) q = i
        url += `?query=${q}`
        return await this.utils.fetch<IAnimeEpisodes>(url).catch((err) => {
            throw new Error(err)
        })
    }

    /**
     * Method for getting an episode of the given Anime ID
     * @param {number} id The ID of the Anime
     * @param {ISimpleOption} episode The episode of the Anime
     * @returns {IAnimeEpisodeById}
     */
    public getAnimeEpisodeById = async (id: number, episode: ISimpleOption): Promise<IAnimeEpisodeById> => {
        if (!id || !episode.query) throw new TypeError('Make sure you have provided the required fields')
        let url = this.utils.getUrl('anime')
        url += `/${id}/episodes/${episode.query}`
        return await this.utils
            .fetch<{ data: IAnimeEpisodeById }>(url)
            .then((res) => res.data)
            .catch((err) => {
                throw new Error(err)
            })
    }

    /**
     * Method for getting news of the given Anime ID
     * @param {number} id The ID of the Anime
     * @param {ISimpleOption} page The page of the news
     * @returns {IAnimeNews}
     */

    public getAnimeNews = async (id: number, options?: ISimpleOption): Promise<IAnimeNews> => {
        if (!id) throw new TypeError(`Provide the id of the Anime`)
        let url = this.utils.getUrl('anime')
        url += `/${id}/news`
        const i = options?.query
        let q = 1
        if (i) q = i
        url += `?page=${q}`
        return await this.utils.fetch<IAnimeNews>(url).catch((err) => {
            throw new Error(err)
        })
    }

    /**
     * Method for getting forum of the given Anime ID
     * @param {number} id The ID of the Anime
     * @param {TAnimeFilter} filter The filter for search
     * @returns {IAnimeForum}
     */
    public getAnimeForum = async (id: number, filter?: TAnimeFilter): Promise<IAnimeForum> => {
        if (!id) throw new TypeError('Provide the id of the Anime')
        let url = this.utils.getUrl('anime')
        url += `/${id}/forum`
        if (!filter) url += ''
        else url += `?filter=${filter}`
        return await this.utils.fetch<IAnimeForum>(url).catch((err) => {
            throw new Error(err)
        })
    }

    /**
     * Method for getting videos of the given Anime ID
     * @param {number} id The ID of the Anime
     * @returns {IAnimeVideos}
     */
    public getAnimeVideos = async (id: number): Promise<IAnimeVideos> => {
        if (!id) throw new TypeError('Provide the id of the Anime.')
        let url = this.utils.getUrl('anime')
        url += `/${id}/videos`
        return await this.utils
            .fetch<{ data: IAnimeVideos }>(url)
            .then((res) => res.data)
            .catch((err) => {
                throw new Error(err)
            })
    }

    /**
     * Method for getting pictures of the given Anime ID
     * @param {number} id The ID of the Anime
     * @returns {IAnimePictures}
     */
    public getAnimePictures = async (id: number): Promise<IAnimePictures> => {
        if (!id) throw new TypeError('Provide the id of the Anime')
        let url = this.utils.getUrl('anime')
        url += `/${id}/pictures`
        return await this.utils.fetch<IAnimePictures>(url).catch((err) => {
            throw new Error(err)
        })
    }

    /**
     * Method for getting statistics of the given Anime ID
     * @param {number} id The ID of the Anime
     * @returns {IAnimeStats}
     */
    public getAnimeStats = async (id: number): Promise<IAnimeStats> => {
        if (!id) throw new TypeError('Provide the id of the Anime')
        let url = this.utils.getUrl('anime')
        url += `/${id}/statistics`
        return await this.utils
            .fetch<{ data: IAnimeStats }>(url)
            .then((res) => res.data)
            .catch((err) => {
                throw new Error(err)
            })
    }

    /**
     * Method for getting more info of the given Anime ID
     * @param {number} id The ID of the Anime
     * @returns {IAnimeMoreInfo}
     */
    public getAnimeMoreInfo = async (id: number): Promise<IAnimeMoreInfo> => {
        if (!id) throw new TypeError('Provide the id of the Anime')
        let url = this.utils.getUrl('anime')
        url += `/${id}/moreinfo`
        return await this.utils
            .fetch<{ data: IAnimeMoreInfo }>(url)
            .then((res) => res.data)
            .catch((err) => {
                throw new Error(err)
            })
    }

    /**
     * Method for getting recommendations of the given Anime ID
     * @param {number} id The ID of the Anime
     * @returns {IAnimeRecommendations}
     */
    public getAnimeRecommendations = async (id: number): Promise<IAnimeRecommendations> => {
        if (!id) throw new TypeError('Provide the id of the Anime')
        let url = this.utils.getUrl('anime')
        url += `/${id}/recommendations`
        return await this.utils.fetch<IAnimeRecommendations>(url).catch((err) => {
            throw new Error(err)
        })
    }

    /**
     * Method for getting user updates of the given Anime ID
     * @param {number} id The ID of the Anime
     * @param {ISimpleOption} page The page of the updates
     * @returns {IAnimeUserUpdates}
     */
    public getAnimeUserUpdates = async (id: number, options?: ISimpleOption): Promise<IAnimeUserUpdates> => {
        if (!id) throw new TypeError('Provide the id of the Anime')
        let url = this.utils.getUrl('anime')
        url += `/${id}/userupdates`
        const i = options?.query
        let q = 1
        if (i) q = i
        url += `?page=${q}`
        return await this.utils.fetch<IAnimeUserUpdates>(url).catch((err) => {
            throw new Error(err)
        })
    }

    /**
     * Method for getting reviews of the given Anime ID
     * @param {number} id The ID of the Anime
     * @param {ISimpleOption} page The page of the reviews
     * @returns {IAnimeReviews}
     */
    public getAnimeReviews = async (id: number, options?: ISimpleOption): Promise<IAnimeReviews> => {
        if (!id) throw new TypeError('Provide the id of the Anime')
        let url = this.utils.getUrl('anime')
        url += `/${id}/reviews`
        const i = options?.query
        let q = 1
        if (i) q = i
        url += `?page=${q}`
        return await this.utils.fetch<IAnimeReviews>(url).catch((err) => {
            throw new Error(err)
        })
    }

    /**
     * Method for getting relations of the given Anime ID
     * @param {number} id The ID of the Anime
     * @returns {IAnimeRelations}
     */
    public getAnimeRelations = async (id: number): Promise<IAnimeRelations> => {
        if (!id) throw new TypeError('Provide the id of the Anime')
        let url = this.utils.getUrl('anime')
        url += `/${id}/relations`
        return await this.utils
            .fetch<{ data: IAnimeRelations }>(url)
            .then((res) => res.data)
            .catch((err) => {
                throw new Error(err)
            })
    }

    /**
     * Method for getting themes of the given Anime ID
     * @param {number} id The ID of the Anime
     * @returns {IAnimeThemes}
     */
    public getAnimeThemes = async (id: number): Promise<IAnimeThemes> => {
        if (!id) throw new TypeError('Provide the id of the Anime')
        let url = this.utils.getUrl('anime')
        url += `/${id}/themes`
        return await this.utils
            .fetch<{ data: IAnimeThemes }>(url)
            .then((res) => res.data)
            .catch((err) => {
                throw new Error(err)
            })
    }

    /**
     * Method for getting externals of the given Anime ID
     * @param {number} id The ID of the Anime
     * @returns {IAnimeExternal}
     */
    public getAnimeExternals = async (id: number): Promise<IAnimeExternal> => {
        if (!id) throw new TypeError('Provide the id of the Anime')
        let url = this.utils.getUrl('anime')
        url += `/${id}/external`
        return await this.utils.fetch<IAnimeExternal>(url).catch((err) => {
            throw new Error(err)
        })
    }

    /**
     * Method for searching Anime
     * @param {string} query The Anime title that you wanna search
     * @param {IAnimeSearchOptions} options The options for searching
     * @returns {IAnimeSearch}
     */
    public searchAnime = async (query: string, options?: IAnimeSearchOptions): Promise<IAnimeSearch> => {
        if (!query) throw new TypeError('Provide the query of the Anime')
        const baseUrl = this.utils.getUrl('anime')
        const url = this.utils.getAnimeQuerySearchUrl(baseUrl, query, options)
        return await this.utils.fetch<IAnimeSearch>(url).catch((err) => {
            throw new Error(err)
        })
    }

    /**
     * Method for getting top Anime list
     * @param {ISimpleOption} page The page of the list
     * @returns {ITopAnime}
     */
    public getTopAnime = async (options?: ISimpleOption): Promise<ITopAnime> => {
        let url = this.utils.getUrl('top')
        url += '/anime'
        if (!options?.query) url += ''
        else url += `?page=${options?.query}`

        return await this.utils.fetch<ITopAnime>(url).catch((err) => {
            throw new Error(err)
        })
    }

    /**
     * Method for getting random Anime with info
     * @returns {IAnime}
     */
    public getRandomAnime = async (): Promise<IAnime> => {
        let url = this.utils.getUrl('random')
        url += '/anime'
        return await this.utils.fetch<IAnime>(url).catch((err) => {
            throw new Error(err)
        })
    }

    private utils = new utils()
}
