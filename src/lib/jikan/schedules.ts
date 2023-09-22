import { CacheOptions } from 'axios-cache-interceptor'
import { IScheduleConfig, IExtendedPagination, IAnime } from '../../types'
import { getURL, fetch, getQueryString } from '../../utils'

export class Schedules {
    #cacheConfig?: CacheOptions
    /**
     * Constructs an instance of the [schedules](https://docs.api.jikan.moe/#tag/schedules) client
     * @param cacheOptions [Cache options](https://axios-cache-interceptor.js.org/config) for the client to make requests
     */
    constructor(cacheOptions?: CacheOptions) {
        this.#cacheConfig = cacheOptions
    }

    /**
     * Gets the list of anime schedules
     * @param config Config to make the request
     * @returns List of anime schedules
     */
    public getSchedules = async (
        config?: IScheduleConfig
    ): Promise<{ pagination: IExtendedPagination; data: IAnime[] }> =>
        await fetch<{ pagination: IExtendedPagination; data: IAnime[] }>(
            getURL('schedules').concat(getQueryString<keyof IScheduleConfig>(config || {})),
            this.#cacheConfig
        )
}
