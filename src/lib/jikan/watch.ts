import { CacheOptions } from 'axios-cache-interceptor'
import { IWatchEpisode, IWatchPromo } from '../../types'
import { fetch, getURL } from '../../utils'

export class Watch {
    #cacheConfig?: CacheOptions
    /**
     * Constructs an instance of the [watch](https://docs.api.jikan.moe/#tag/watch) client
     * @param cacheOptions [Cache options](https://axios-cache-interceptor.js.org/config) for the client to make requests
     */
    constructor(cacheOptions?: CacheOptions) {
        this.#cacheConfig = cacheOptions
    }

    /**
     * Gets the list of metadata of watching recent anime episodes
     * @returns The list of metadata of watching recent anime episodes
     */
    public getWatchRecentEpisodes = async (): Promise<IWatchEpisode[]> =>
        (await fetch<{ data: IWatchEpisode[] }>(getURL('watch', 'episodes'), this.#cacheConfig)).data

    /**
     * Gets the list of metadata of watching popular anime episodes
     * @returns The list of metadata of watching popular anime episodes
     */
    public getWatchPopularEpisodes = async (): Promise<IWatchEpisode[]> =>
        (await fetch<{ data: IWatchEpisode[] }>(getURL('watch', 'episodes', 'popular'), this.#cacheConfig)).data

    /**
     * Gets the list of metadata of watching recent anime promos
     * @returnsThe list of metadata of watching recent anime promos
     */
    public getWatchRecentPromos = async (): Promise<IWatchPromo[]> =>
        (await fetch<{ data: IWatchPromo[] }>(getURL('watch', 'promos'))).data

    /**
     * Gets the list of metadata of watching popular anime promos
     * @returns The list of metadata of watching popular anime promos
     */
    public getWatchPopularPromos = async (): Promise<IWatchPromo[]> =>
        (await fetch<{ data: IWatchPromo[] }>(getURL('watch', 'promos', 'popular'))).data
}
