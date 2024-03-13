import { CacheOptions } from 'axios-cache-interceptor'
import { IExtendedPagination, IReview, IReviewConfig } from '../../types'
import { Fetch, getQueryString, getURL } from '../../utils'

export class Reviews {
    #fetch: Fetch['get']
    /**
     * Constructs an instance of the [reviews](https://docs.api.jikan.moe/#tag/reviews) client
     * @param cacheOptions [Cache options](https://axios-cache-interceptor.js.org/config) for the client to make requests
     */
    constructor(cacheOptions?: CacheOptions) {
        this.#fetch = new Fetch(cacheOptions).get
    }

    /**
     * Gets the list of recent anime reviews in MyAnimeList
     * @param config Config to make the request
     * @returns List of recent anime reviews
     */
    public getRecentAnimeReviews = async (
        config?: IReviewConfig
    ): Promise<{ pagination: IExtendedPagination; data: IReview[] }> =>
        await this.#fetch<{ pagination: IExtendedPagination; data: IReview[] }>(
            getURL('reviews', 'anime').concat(getQueryString<keyof IReviewConfig>(config || {}))
        )

    /**
     * Gets the list of recent manga reviews in MyAnimeList
     * @param config Config to make the request
     * @returns List of recent manga reviews
     */
    public getRecentMangaReviews = async (
        config?: IReviewConfig
    ): Promise<{ pagination: IExtendedPagination; data: IReview[] }> =>
        await this.#fetch<{ pagination: IExtendedPagination; data: IReview[] }>(
            getURL('reviews', 'manga').concat(getQueryString<keyof IReviewConfig>(config || {}))
        )
}
