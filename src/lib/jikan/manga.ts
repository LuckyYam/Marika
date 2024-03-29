import { CacheOptions } from 'axios-cache-interceptor'
import { Fetch, getURL, getTypeErrorMessage, getQueryString } from '../../utils'
import {
    ICharacterFromSource,
    ICommonConfig,
    IForum,
    IManga,
    IMangaFull,
    IMangaStatistics,
    IMangaUserUpdate,
    IMoreInfo,
    INewsResponse,
    IPagination,
    IPicture,
    IRecommendation,
    IMangaReview,
    IReviewConfig,
    IExtendedPagination,
    IMangaSearchConfig,
    IForumConfig
} from '../../types'

export class Manga {
    #fetch: Fetch['get']
    /**
     * Constructs an instance of the [manga](https://docs.api.jikan.moe/#tag/manga) client
     * @param cacheOptions [Cache options](https://axios-cache-interceptor.js.org/config) for the client to make requests
     */
    constructor(cacheOptions?: CacheOptions) {
        this.#fetch = new Fetch(cacheOptions).get
    }

    /**
     * Gets the data of a manga from its MyAnimeList ID
     * @param id MyAnimeList ID of the manga
     * @returns The data of the manga
     */
    public getMangaById = async (id: string | number): Promise<IManga> => {
        if (typeof id !== 'string' && typeof id !== 'number')
            throw new TypeError(getTypeErrorMessage('id', 'string or number', typeof id))
        return (await this.#fetch<{ data: IManga }>(getURL('manga', `${id}`))).data
    }

    /**
     * Gets the full data of a manga from its MyAnimeList ID
     * @param id MyAnimeList ID of the manga
     * @returns The full data of the manga
     */
    public getMangaFullById = async (id: string | number): Promise<IMangaFull> => {
        if (typeof id !== 'string' && typeof id !== 'number')
            throw new TypeError(getTypeErrorMessage('id', 'string or number', typeof id))
        return (await this.#fetch<{ data: IMangaFull }>(getURL('manga', `${id}`, 'full'))).data
    }

    /**
     * Gets the list of characters of a manga from its MyAnimeList ID
     * @param id MyAnimeList ID of the manga
     * @returns List of characters of the manga
     */
    public getMangaCharacters = async (id: string | number): Promise<ICharacterFromSource[]> => {
        if (typeof id !== 'string' && typeof id !== 'number')
            throw new TypeError(getTypeErrorMessage('id', 'string or number', typeof id))
        return (await this.#fetch<{ data: ICharacterFromSource[] }>(getURL('manga', `${id}`, 'characters'))).data
    }

    /**
     * Gets the list of news related to a manga from its MyAnimeList ID
     * @param id MyAnimeList ID of the manga
     * @param config Config to make the request
     * @returns List of news related to the manga
     */
    public getMangaNews = async (
        id: string | number,
        config?: ICommonConfig
    ): Promise<{ data: INewsResponse[]; pagination: IPagination }> => {
        if (typeof id !== 'string' && typeof id !== 'number')
            throw new TypeError(getTypeErrorMessage('id', 'string or number', typeof id))
        return await this.#fetch<{ data: INewsResponse[]; pagination: IPagination }>(
            getURL('manga', `${id}`, 'news').concat(getQueryString<keyof ICommonConfig>(config || {}))
        )
    }

    /**
     * Gets the topics related to a manga from its MyAnimeList ID
     * @param id MyAnimeList ID of the manga
     * @returns List of topics related to the manga
     */
    public getMangaTopics = async (id: string | number, config?: IForumConfig): Promise<IForum[]> => {
        if (typeof id !== 'string' && typeof id !== 'number')
            throw new TypeError(getTypeErrorMessage('id', 'string or number', typeof id))
        return (
            await this.#fetch<{ data: IForum[] }>(
                getURL('manga', `${id}`, 'forum').concat(getQueryString<keyof IForumConfig>(config || {}))
            )
        ).data
    }

    /**
     * Gets the pictures of a manga from its MyAnimeList ID
     * @param id MyAnimeList ID of the manga
     * @returns Pictures of the manga
     */
    public getMangaPictures = async (id: string | number): Promise<IPicture[]> => {
        if (typeof id !== 'string' && typeof id !== 'number')
            throw new TypeError(getTypeErrorMessage('id', 'string or number', typeof id))
        return (await this.#fetch<{ data: IPicture[] }>(getURL('manga', `${id}`, 'pictures'))).data
    }

    /**
     * Gets the statistics of a manga from its MyAnimeList ID
     * @param id MyAnimeList ID of the manga
     * @returns Statistics of the manga
     */
    public getMangaStatistics = async (id: string | number): Promise<IMangaStatistics> => {
        if (typeof id !== 'string' && typeof id !== 'number')
            throw new TypeError(getTypeErrorMessage('id', 'string or number', typeof id))
        return (await this.#fetch<{ data: IMangaStatistics }>(getURL('manga', `${id}`, 'statistics'))).data
    }

    /**
     * Gets more info of a manga from its MyAnimeList ID
     * @param id MyAnimeList ID of the manga
     * @returns More info of the manga
     */
    public getMangaMoreInfo = async (id: string | number): Promise<IMoreInfo> => {
        if (typeof id !== 'string' && typeof id !== 'number')
            throw new TypeError(getTypeErrorMessage('id', 'string or number', typeof id))
        return (await this.#fetch<{ data: IMoreInfo }>(getURL('manga', `${id}`, 'moreinfo'))).data
    }

    /**
     * Gets recommendations of a manga from its MyAnimeList ID
     * @param id MyAnimeList ID of the manga
     * @returns List of recommendations from the manga
     */
    public getMangaRecommendations = async (id: string | number): Promise<IRecommendation[]> => {
        if (typeof id !== 'string' && typeof id !== 'number')
            throw new TypeError(getTypeErrorMessage('id', 'string or number', typeof id))
        return (await this.#fetch<{ data: IRecommendation[] }>(getURL('manga', `${id}`, 'recommendations'))).data
    }

    /**
     * Gets user updates of a manga from its MyAnimeList ID
     * @param id MyAnimeList ID of the manga
     * @param config Config to make the request
     * @returns List of user updates of the manga
     */
    public getMangaUserUpdates = async (
        id: string | number,
        config?: ICommonConfig
    ): Promise<{ data: IMangaUserUpdate[]; pagination: IPagination }> => {
        if (typeof id !== 'string' && typeof id !== 'number')
            throw new TypeError(getTypeErrorMessage('id', 'string or number', typeof id))
        return await this.#fetch<{ data: IMangaUserUpdate[]; pagination: IPagination }>(
            getURL('manga', `${id}`, 'userupdates').concat(getQueryString<keyof ICommonConfig>(config || {}))
        )
    }

    /**
     * Gets the reviews of a manga from its MyAnimeList ID
     * @param id MyAnimeList ID of the manga
     * @param config Config to make the request
     * @returns
     */
    public getMangaReviews = async (
        id: string | number,
        config?: IReviewConfig
    ): Promise<{ data: IMangaReview[]; pagination: IPagination }> => {
        if (typeof id !== 'string' && typeof id !== 'number')
            throw new TypeError(getTypeErrorMessage('id', 'string or number', typeof id))
        return await this.#fetch<{ pagination: IPagination; data: IMangaReview[] }>(
            getURL('manga', `${id}`, 'reviews').concat(getQueryString<keyof IReviewConfig>(config || {}))
        )
    }

    /**
     * Gets relation of a manga from its MyAnimeList ID
     * @param id MyAnimeList ID of the manga
     * @returns Relations of the manga
     */
    public getMangaRelations = async (id: string | number): Promise<IMangaFull['relations']> => {
        if (typeof id !== 'string' && typeof id !== 'number')
            throw new TypeError(getTypeErrorMessage('id', 'string or number', typeof id))
        return (await this.#fetch<{ data: IMangaFull['relations'] }>(getURL('manga', `${id}`, 'relations'))).data
    }

    /**
     * Get external sites of a manga from its MyAnimeList ID
     * @param id MyAnimeList ID of the manga
     * @returns External sites of the manga
     */
    public getMangaExternal = async (id: string | number): Promise<IMangaFull['external']> => {
        if (typeof id !== 'string' && typeof id !== 'number')
            throw new TypeError(getTypeErrorMessage('id', 'string or number', typeof id))
        return (await this.#fetch<{ data: IMangaFull['external'] }>(getURL('manga', `${id}`, 'external'))).data
    }

    /**
     * Searches for manga in MyAnimeList
     * @param config Config to make the search
     * @returns Search results of the manga
     */
    public getMangaSearch = async (
        config?: IMangaSearchConfig
    ): Promise<{ data: IManga[]; pagination: IExtendedPagination }> =>
        await this.#fetch<{ data: IManga[]; pagination: IExtendedPagination }>(
            getURL('manga').concat(getQueryString<keyof IMangaSearchConfig>(config || {}))
        )
}
