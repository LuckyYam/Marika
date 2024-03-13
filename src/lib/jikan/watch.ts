import { CacheOptions } from 'axios-cache-interceptor'
import { IWatchEpisode, IWatchPromo } from '../../types'
import { Fetch, getURL } from '../../utils'

export class Watch {
    #fetch: Fetch['get']
    /**
     * Constructs an instance of the [watch](https://docs.api.jikan.moe/#tag/watch) client
     * @param cacheOptions [Cache options](https://axios-cache-interceptor.js.org/config) for the client to make requests
     */
    constructor(cacheOptions?: CacheOptions) {
        this.#fetch = new Fetch(cacheOptions).get
    }

    /**
     * Gets the list of metadata of watching recent anime episodes
     * @returns The list of metadata of watching recent anime episodes
     */
    public getWatchRecentEpisodes = async (): Promise<IWatchEpisode[]> =>
        (await this.#fetch<{ data: IWatchEpisode[] }>(getURL('watch', 'episodes'))).data

    /**
     * Gets the list of metadata of watching popular anime episodes
     * @returns The list of metadata of watching popular anime episodes
     */
    public getWatchPopularEpisodes = async (): Promise<IWatchEpisode[]> =>
        (await this.#fetch<{ data: IWatchEpisode[] }>(getURL('watch', 'episodes', 'popular'))).data

    /**
     * Gets the list of metadata of watching recent anime promos
     * @returnsThe list of metadata of watching recent anime promos
     */
    public getWatchRecentPromos = async (): Promise<IWatchPromo[]> =>
        (await this.#fetch<{ data: IWatchPromo[] }>(getURL('watch', 'promos'))).data

    /**
     * Gets the list of metadata of watching popular anime promos
     * @returns The list of metadata of watching popular anime promos
     */
    public getWatchPopularPromos = async (): Promise<IWatchPromo[]> =>
        (await this.#fetch<{ data: IWatchPromo[] }>(getURL('watch', 'promos', 'popular'))).data
}
