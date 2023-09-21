import { CacheOptions } from 'axios-cache-interceptor'
import { fetch, getURL, getQueryString } from '../../utils'
import { ICommonResource, IMagazineConfig, IPagination } from '../../types'

export class Magazines {
    #cacheConfig?: CacheOptions
    /**
     * Constructs an instance of the `magazines` client
     * @param cacheOptions Cache options for the client to make requests. See https://axios-cache-interceptor.js.org/config
     */
    constructor(cacheOptions?: CacheOptions) {
        this.#cacheConfig = cacheOptions
    }

    /**
     * Searches for magazines in MyAnimeList
     * @param config Config to make the search
     * @returns Results of the magazine search
     */
    public getMagazines = async (
        config?: IMagazineConfig
    ): Promise<{ data: ICommonResource[]; pagination: IPagination }> =>
        await fetch<{ data: ICommonResource[]; pagination: IPagination }>(
            getURL('magazines').concat(getQueryString<keyof IMagazineConfig>(config || {})),
            this.#cacheConfig
        )
}
