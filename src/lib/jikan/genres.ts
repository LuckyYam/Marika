import { CacheOptions } from 'axios-cache-interceptor'
import { getURL, getQueryString, fetch } from '../../utils'
import { IGenreConfig, ICommonResource } from '../../types'

export class Genres {
    #cacheConfig?: CacheOptions
    /**
     * Constructs an instance of the [genres](https://docs.api.jikan.moe/#tag/genres) client
     * @param cacheOptions [Cache options](https://axios-cache-interceptor.js.org/config) for the client to make requests
     */
    constructor(cacheOptions?: CacheOptions) {
        this.#cacheConfig = cacheOptions
    }

    /**
     * Gets the list of anime genres
     * @param config Config to make the request
     * @returns List of anime genres
     */
    public getAnimeGenres = async (config?: IGenreConfig): Promise<ICommonResource[]> =>
        (
            await fetch<{ data: ICommonResource[] }>(
                getURL('genres', 'anime').concat(getQueryString<keyof IGenreConfig>(config || {})),
                this.#cacheConfig
            )
        ).data

    /**
     * Gets the list of manga genres
     * @param config Config to make the request
     * @returns List of manga genres
     */
    public getMangaGenres = async (config?: IGenreConfig): Promise<ICommonResource[]> =>
        (
            await fetch<{ data: ICommonResource[] }>(
                getURL('genres', 'manga').concat(getQueryString<keyof IGenreConfig>(config || {})),
                this.#cacheConfig
            )
        ).data
}
