import { CacheOptions } from 'axios-cache-interceptor'
import { IExtendedPagination, IReview, IReviewConfig } from '../../types'
import { fetch, getQueryString, getURL } from '../../utils'

export class Reviews {
    #cacheConfig?: CacheOptions
    /**
     * Constructs an instance of the `reviews` client
     * @param cacheOptions Cache options for the client to make requests. See {@link https://axios-cache-interceptor.js.org/config}
     */
    constructor(cacheOptions?: CacheOptions) {
        this.#cacheConfig = cacheOptions
    }

    /**
     * Gets the list of recent anime reviews in MyAnimeList
     * @param config Config to make the request
     * @returns List of recent anime reviews
     */
    public getRecentAnimeReviews = async (
        config?: IReviewConfig
    ): Promise<{ pagination: IExtendedPagination; data: IReview[] }> =>
        await fetch<{ pagination: IExtendedPagination; data: IReview[] }>(
            getURL('reviews', 'anime').concat(getQueryString<keyof IReviewConfig>(config || {})),
            this.#cacheConfig
        )

    /**
     * Gets the list of recent manga reviews in MyAnimeList
     * @param config Config to make the request
     * @returns List of recent manga reviews
     */
    public getRecentMangaReviews = async (
        config?: IReviewConfig
    ): Promise<{ pagination: IExtendedPagination; data: IReview[] }> =>
        await fetch<{ pagination: IExtendedPagination; data: IReview[] }>(
            getURL('reviews', 'manga').concat(getQueryString<keyof IReviewConfig>(config || {})),
            this.#cacheConfig
        )
}
