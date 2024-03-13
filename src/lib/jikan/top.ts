import { CacheOptions } from 'axios-cache-interceptor'
import {
    IAnime,
    IExtendedPagination,
    IManga,
    ITopAnimeConfig,
    ITopMangaConfig,
    ITopCommonConfig,
    IPerson,
    ICharacter,
    ITopReviewConfig,
    IMangaReview,
    IAnimeReview
} from '../../types'
import { Fetch, getQueryString, getURL } from '../../utils'

export class Top {
    #fetch: Fetch['get']
    /**
     * Constructs an instance of the [top](https://docs.api.jikan.moe/#tag/top) client
     * @param cacheOptions [Cache options](https://axios-cache-interceptor.js.org/config) for the client to make requests
     */
    constructor(cacheOptions?: CacheOptions) {
        this.#fetch = new Fetch(cacheOptions).get
    }

    /**
     * Gets the top list of anime in MyAnimeList
     * @param config Config to get the top list
     * @returns The top list of the anime in MyAnimeList
     */
    public getTopAnime = async (
        config?: ITopAnimeConfig
    ): Promise<{ pagination: IExtendedPagination; data: IAnime[] }> =>
        await this.#fetch<{ pagination: IExtendedPagination; data: IAnime[] }>(
            getURL('top', 'anime').concat(getQueryString<keyof ITopAnimeConfig>(config || {}))
        )

    /**
     * Gets the top list of manga in MyAnimeList
     * @param config Config to get the top list
     * @returns The top list of the manga in MyAnimeList
     */
    public getTopManga = async (
        config?: ITopMangaConfig
    ): Promise<{ pagination: IExtendedPagination; data: IManga[] }> =>
        await this.#fetch<{ pagination: IExtendedPagination; data: IManga[] }>(
            getURL('top', 'manga').concat(getQueryString<keyof ITopMangaConfig>(config || {}))
        )

    /**
     * Gets the top list of people in MyAnimeList
     * @param config Config to get the top list
     * @returns The top list of people in MyAnimeList
     */
    public getTopPeople = async (
        config?: ITopCommonConfig
    ): Promise<{ pagination: IExtendedPagination; data: IPerson[] }> =>
        await this.#fetch<{ pagination: IExtendedPagination; data: IPerson[] }>(
            getURL('top', 'people').concat(getQueryString<keyof ITopCommonConfig>(config || {}))
        )

    /**
     * Gets the top list of characters in MyAnimeList
     * @param config Config to get the top list
     * @returns The top list of characters in MyAnimeList
     */
    public getTopCharacters = async (
        config?: ITopCommonConfig
    ): Promise<{ pagination: IExtendedPagination; data: ICharacter[] }> =>
        await this.#fetch<{ pagination: IExtendedPagination; data: ICharacter[] }>(
            getURL('top', 'characters').concat(getQueryString<keyof ITopCommonConfig>(config || {}))
        )

    /**
     * Gets the top list of reviews in MyAnimeList
     * @param config Config to get the top list
     * @returns The top list of reviews in MyAnimeList
     */
    public getTopReviews = async (
        config?: ITopReviewConfig
    ): Promise<{ pagination: IExtendedPagination; data: (IAnimeReview | IMangaReview)[] }> =>
        await this.#fetch<{ pagination: IExtendedPagination; data: (IAnimeReview | IMangaReview)[] }>(
            getURL('top', 'reviews').concat(getQueryString<keyof ITopReviewConfig>(config || {}))
        )
}
