import { CacheOptions } from 'axios-cache-interceptor'
import { fetch, getQueryString, getURL, getTypeErrorMessage } from '../../utils'
import {
    IAnime,
    IAnimeCharacter,
    IAnimeFull,
    IAnimeStaff,
    IPagination,
    IEpisodeFromList,
    ICommonConfig,
    IEpisodeResponse,
    INewsResponse,
    IForumConfig,
    IForum,
    IAnimeVideo,
    IAnimeVideosEpisode,
    IPicture,
    IAnimeStatistics,
    IMoreInfo,
    IRecommendation,
    IAnimeUserUpdate,
    IAnimeReview,
    IReviewConfig,
    IRelation,
    IAnimeSearchConfig,
    IExtendedPagination
} from '../../types'

export class Anime {
    #cacheConfig?: CacheOptions
    /**
     * Constructs an instance of the `anime` client
     * @param cacheOptions Cache options to make the requests. See https://axios-cache-interceptor.js.org/config
     */
    constructor(cacheOptions?: CacheOptions) {
        this.#cacheConfig = cacheOptions
    }

    /**
     * Gets anime data by its MyAnimeList ID
     * @param id MyAnimeList ID of the anime
     * @returns The data of the anime
     */
    public getAnimeById = async (id: string | number): Promise<IAnime> => {
        if (typeof id !== 'string' && typeof id !== 'number')
            throw new TypeError(getTypeErrorMessage('id', 'string or number', typeof id))
        return (await fetch<{ data: IAnime }>(getURL('anime', `${id}`), this.#cacheConfig)).data
    }

    /**
     * Gets the full data of anime by its MyAnimeList ID
     * @param id MyAnimeList ID of the anime
     * @returns The full data of the anime
     */
    public getAnimeFullById = async (id: string | number): Promise<IAnimeFull> => {
        if (typeof id !== 'string' && typeof id !== 'number')
            throw new TypeError(getTypeErrorMessage('id', 'string or number', typeof id))
        return (await fetch<{ data: IAnimeFull }>(getURL('anime', `${id}`, 'full'), this.#cacheConfig)).data
    }

    /**
     * Gets the characters of the anime from its MyAnimeList ID
     * @param id MyAnimeList ID of the anime
     * @returns The characters of the given anime ID
     */
    public getAnimeCharacters = async (id: string | number): Promise<IAnimeCharacter[]> => {
        if (typeof id !== 'string' && typeof id !== 'number')
            throw new TypeError(getTypeErrorMessage('id', 'string or number', typeof id))
        return (await fetch<{ data: IAnimeCharacter[] }>(getURL('anime', `${id}`, 'characters'), this.#cacheConfig))
            .data
    }

    /**
     * Gets the staffs of the anime from its MyAnimeList ID
     * @param id MyAnimeList ID of the anime
     * @returns The staffs of given anime ID
     */
    public getAnimeStaff = async (id: string | number): Promise<IAnimeStaff[]> => {
        if (typeof id !== 'string' && typeof id !== 'number')
            throw new TypeError(getTypeErrorMessage('id', 'string or number', typeof id))
        return (await fetch<{ data: IAnimeStaff[] }>(getURL('anime', `${id}`, 'staff'), this.#cacheConfig)).data
    }

    /**
     * Gets the episodes of the anime from its MyAnimeList ID
     * @param id MyAnimeList ID of the anime
     * @param config Config to make the request
     * @returns List of episodes with the pagination
     */
    public getAnimeEpisodes = async (
        id: string | number,
        config?: ICommonConfig
    ): Promise<{ data: IEpisodeFromList[]; pagination: IPagination }> => {
        if (typeof id !== 'string' && typeof id !== 'number')
            throw new TypeError(getTypeErrorMessage('id', 'string or number', typeof id))
        return await fetch<{ data: IEpisodeFromList[]; pagination: IPagination }>(
            getURL('anime', `${id}`, 'episodes').concat(getQueryString<keyof ICommonConfig>(config || {})),
            this.#cacheConfig
        )
    }

    /**
     * Gets the data of an anime's episode by its anime & episode ID
     * @param id MyAnimeList ID of the anime
     * @param episode_id Episode ID of the anime
     * @returns Data of the required episode
     */
    public getAnimeEpisodeById = async (
        id: string | number,
        episode_id: string | number
    ): Promise<IEpisodeResponse> => {
        if (typeof id !== 'string' && typeof id !== 'number')
            throw new TypeError(getTypeErrorMessage('id', 'string or number', typeof id))
        if (typeof episode_id !== 'string' && typeof episode_id !== 'number')
            throw new TypeError(getTypeErrorMessage('episode_id', 'string or number', typeof id))
        return (
            await fetch<{ data: IEpisodeResponse }>(
                getURL('anime', `${id}`, 'episodes', `${episode_id}`),
                this.#cacheConfig
            )
        ).data
    }

    /**
     * Gets the list of news related to a anime from its MyAnimeList ID
     * @param id MyAnimeList ID of the anime
     * @param config Config to make the request
     * @returns List of news related to the anime
     */
    public getAnimeNews = async (
        id: string | number,
        config?: ICommonConfig
    ): Promise<{ data: INewsResponse[]; pagination: IPagination }> => {
        if (typeof id !== 'string' && typeof id !== 'number')
            throw new TypeError(getTypeErrorMessage('id', 'string or number', typeof id))
        return await fetch<{ data: INewsResponse[]; pagination: IPagination }>(
            getURL('anime', `${id}`, 'news').concat(getQueryString<keyof ICommonConfig>(config || {})),
            this.#cacheConfig
        )
    }

    /**
     * Gets the forums related to an anime from its MyAnimeList ID
     * @param id MyAnimeList ID of the anime
     * @param config Config to make the request
     * @returns List of the forums related to the anime
     */
    public getAnimeForum = async (id: string | number, config?: IForumConfig): Promise<IForum[]> => {
        if (typeof id !== 'string' && typeof id !== 'number')
            throw new TypeError(getTypeErrorMessage('id', 'string or number', typeof id))
        return (
            await fetch<{ data: IForum[] }>(
                getURL('anime', `${id}`, 'forum').concat(getQueryString<keyof IForumConfig>(config || {})),
                this.#cacheConfig
            )
        ).data
    }

    /**
     * Gets the anime videos of the given MyAnimeList ID
     * @param id MyAnimeList ID of the anime
     * @returns Videos of the anime
     */
    public getAnimeVideos = async (id: string | number): Promise<IAnimeVideo> => {
        if (typeof id !== 'string' && typeof id !== 'number')
            throw new TypeError(getTypeErrorMessage('id', 'string or number', typeof id))
        return (await fetch<{ data: IAnimeVideo }>(getURL('anime', `${id}`, 'videos'), this.#cacheConfig)).data
    }

    /**
     * Gets the episode videos of an anime from its MyAnimeList ID
     * @param id MyAnimeList ID of the anime
     * @param config Config to make the request
     * @returns Episode videos of the anime
     */
    public getAnimeVideosEpisodes = async (
        id: string | number,
        config?: ICommonConfig
    ): Promise<{ data: IAnimeVideosEpisode[]; pagination: IPagination }> => {
        if (typeof id !== 'string' && typeof id !== 'number')
            throw new TypeError(getTypeErrorMessage('id', 'string or number', typeof id))
        return await fetch<{ data: IAnimeVideosEpisode[]; pagination: IPagination }>(
            getURL('anime', `${id}`, 'videos', 'episodes').concat(getQueryString<keyof ICommonConfig>(config || {})),
            this.#cacheConfig
        )
    }

    /**
     * Gets the pictures of an anime from its MyAnimeList ID
     * @param id MyAnimeList ID of the anime
     * @returns List of images of the anime in different formats
     */
    public getAnimePictures = async (id: string | number): Promise<IPicture[]> => {
        if (typeof id !== 'string' && typeof id !== 'number')
            throw new TypeError(getTypeErrorMessage('id', 'string or number', typeof id))
        return (await fetch<{ data: IPicture[] }>(getURL('anime', `${id}`, 'pictures'), this.#cacheConfig)).data
    }

    /**
     * Gets the statistics of an anime from its MyAnimeList ID
     * @param id MyAnimeList ID of the anime
     * @returns Stats of the anime
     */
    public getAnimeStatistics = async (id: string | number): Promise<IAnimeStatistics> => {
        if (typeof id !== 'string' && typeof id !== 'number')
            throw new TypeError(getTypeErrorMessage('id', 'string or number', typeof id))
        return (await fetch<{ data: IAnimeStatistics }>(getURL('anime', `${id}`, 'statistics'), this.#cacheConfig)).data
    }

    /**
     * Gets more info of an anime from its MyAnimeList ID
     * @param id MyAnimeList ID of the anime
     * @returns More info of the anime
     */
    public getAnimeMoreInfo = async (id: string | number): Promise<IMoreInfo> => {
        if (typeof id !== 'string' && typeof id !== 'number')
            throw new TypeError(getTypeErrorMessage('id', 'string or number', typeof id))
        return (await fetch<{ data: IMoreInfo }>(getURL('anime', `${id}`, 'moreinfo'), this.#cacheConfig)).data
    }

    /**
     * Gets recommendations of an anime from its MyAnimeList ID
     * @param id MyAnimeList ID of the anime
     * @returns List of recommenedations from the anime
     */
    public getAnimeRecommendations = async (id: string | number): Promise<IRecommendation[]> => {
        if (typeof id !== 'string' && typeof id !== 'number')
            throw new TypeError(getTypeErrorMessage('id', 'string or number', typeof id))
        return (
            await fetch<{ data: IRecommendation[] }>(getURL('anime', `${id}`, 'recommendations'), this.#cacheConfig)
        ).data
    }

    /**
     * Gets the list of user updates of an anime from its MyAnimeList ID
     * @param id MyAnimeList ID of the anime
     * @param config Config to make the request
     * @returns List of user updates of the anime
     */
    public getAnimeUserUpdates = async (
        id: string | number,
        config?: ICommonConfig
    ): Promise<{ data: IAnimeUserUpdate[]; pagination: IPagination }> => {
        if (typeof id !== 'string' && typeof id !== 'number')
            throw new TypeError(getTypeErrorMessage('id', 'string or number', typeof id))
        return await fetch<{ data: IAnimeUserUpdate[]; pagination: IPagination }>(
            getURL('anime', `${id}`, 'userupdates').concat(getQueryString<keyof ICommonConfig>(config || {})),
            this.#cacheConfig
        )
    }

    /**
     * Gets the reviews of an anime by its MyAnimeList ID
     * @param id MyAnimeList ID of the anime
     * @param config Config to make the request
     * @returns Reviews of the anime
     */
    public getAnimeReviews = async (
        id: string | number,
        config?: IReviewConfig
    ): Promise<{ pagination: IPagination; data: IAnimeReview[] }> => {
        if (typeof id !== 'string' && typeof id !== 'number')
            throw new TypeError(getTypeErrorMessage('id', 'string or number', typeof id))
        return await fetch<{ pagination: IPagination; data: IAnimeReview[] }>(
            getURL('anime', `${id}`, 'reviews').concat(getQueryString<keyof IReviewConfig>(config || {})),
            this.#cacheConfig
        )
    }

    /**
     * Gets the relations of an anime by its MyAnimeList ID
     * @param id MyAnimeList ID of the anime
     * @returns Relations of the anime
     */
    public getAnimeRelations = async (id: string | number): Promise<IRelation[]> => {
        if (typeof id !== 'string' && typeof id !== 'number')
            throw new TypeError(getTypeErrorMessage('id', 'string or number', typeof id))
        return (await fetch<{ data: IRelation[] }>(getURL('anime', `${id}`, 'relations'), this.#cacheConfig)).data
    }

    /**
     * Gets the themes of an anime by its MyAnimeList ID
     * @param id MyAnimeList ID of the anime
     * @returns Themes of the anime
     */
    public getAnimeThemes = async (id: string | number): Promise<IAnime['themes']> => {
        if (typeof id !== 'string' && typeof id !== 'number')
            throw new TypeError(getTypeErrorMessage('id', 'string or number', typeof id))
        return (await fetch<{ data: IAnime['themes'] }>(getURL('anime', `${id}`, 'themes'), this.#cacheConfig)).data
    }

    /**
     * Gets the externals of an anime by its MyAnimeList ID
     * @param id MyAnimeList ID of the anime
     * @returns Externals of the anime
     */
    public getAnimeExternal = async (id: string | number): Promise<IAnimeFull['external']> => {
        if (typeof id !== 'string' && typeof id !== 'number')
            throw new TypeError(getTypeErrorMessage('id', 'string or number', typeof id))
        return (await fetch<{ data: IAnimeFull['external'] }>(getURL('anime', `${id}`, 'external'), this.#cacheConfig))
            .data
    }

    /**
     * Gets streaming platforms of an anime from its MyAnimeList ID
     * @param id MyAnimeList ID of the anime
     * @returns Streaming platforms of the anime with their URLs
     */
    public getAnimeStreaming = async (id: string | number): Promise<IAnimeFull['streaming']> => {
        if (typeof id !== 'string' && typeof id !== 'number')
            throw new TypeError(getTypeErrorMessage('id', 'string or number', typeof id))
        return (
            await fetch<{ data: IAnimeFull['streaming'] }>(getURL('anime', `${id}`, 'streaming'), this.#cacheConfig)
        ).data
    }

    /**
     * Searches for anime in MyAnimeList
     * @param config Config to make the search
     * @returns Results of the search
     */
    public getAnimeSearch = async (
        config?: IAnimeSearchConfig
    ): Promise<{ data: IAnime[]; pagination: IExtendedPagination }> =>
        await fetch<{ data: IAnime[]; pagination: IExtendedPagination }>(
            getURL('anime').concat(getQueryString<keyof IAnimeSearchConfig>(config || {})),
            this.#cacheConfig
        )
}
