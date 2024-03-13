import { CacheOptions } from 'axios-cache-interceptor'
import { getURL, getQueryString, Fetch } from '../../utils'
import { IGenreConfig, ICommonResource } from '../../types'

export class Genres {
    #fetch: Fetch['get']
    /**
     * Constructs an instance of the [genres](https://docs.api.jikan.moe/#tag/genres) client
     * @param cacheOptions [Cache options](https://axios-cache-interceptor.js.org/config) for the client to make requests
     */
    constructor(cacheOptions?: CacheOptions) {
        this.#fetch = new Fetch(cacheOptions).get
    }

    /**
     * Gets the list of anime genres
     * @param config Config to make the request
     * @returns List of anime genres
     */
    public getAnimeGenres = async (config?: IGenreConfig): Promise<ICommonResource[]> =>
        (
            await this.#fetch<{ data: ICommonResource[] }>(
                getURL('genres', 'anime').concat(getQueryString<keyof IGenreConfig>(config || {}))
            )
        ).data

    /**
     * Gets the list of manga genres
     * @param config Config to make the request
     * @returns List of manga genres
     */
    public getMangaGenres = async (config?: IGenreConfig): Promise<ICommonResource[]> =>
        (
            await this.#fetch<{ data: ICommonResource[] }>(
                getURL('genres', 'manga').concat(getQueryString<keyof IGenreConfig>(config || {}))
            )
        ).data
}
