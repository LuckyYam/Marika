import { CacheOptions } from 'axios-cache-interceptor'
import { getTypeErrorMessage, getQueryString, getURL, fetch } from '../../utils'
import { ISeasonConfig, ISeasonList, ISeasonResponse } from '../../types'
import { AnimeSeasons } from '../../constants'

export class Seasons {
    #cacheConfig?: CacheOptions
    /**
     * Creates an instance of the `seasons` client
     * @param cacheOptions Cache options for the client to make requests. See https://axios-cache-interceptor.js.org/config
     */
    constructor(cacheOptions?: CacheOptions) {
        this.#cacheConfig = cacheOptions
    }

    /**
     * Gets the list of current season's anime
     * @param config Config to make the request
     * @returns List of current season's anime
     */
    public getSeasonNow = async (config?: ISeasonConfig): Promise<ISeasonResponse> =>
        await fetch<ISeasonResponse>(
            getURL('seasons', 'now').concat(getQueryString<keyof ISeasonConfig>(config || {})),
            this.#cacheConfig
        )

    /**
     * Gets the list for given season's anime of the given year
     * @param year Year of the anime
     * @param season Season of the anime
     * @param config Config to make the request
     * @returns The list for given season's anime of the given year
     */
    public getSeason = async (
        year: number | string,
        season: AnimeSeasons,
        config?: ISeasonConfig
    ): Promise<ISeasonResponse> => {
        if (typeof year !== 'string' && typeof year !== 'number')
            throw new TypeError(getTypeErrorMessage('year', 'string or number', typeof year))
        if (typeof season !== 'string') throw new TypeError(getTypeErrorMessage('season', 'string', typeof season))
        return await fetch<ISeasonResponse>(
            getURL('seasons', `${year}`, `${season}`).concat(getQueryString<keyof ISeasonConfig>(config || {})),
            this.#cacheConfig
        )
    }

    /**
     * Gets the list of available seasons of all the years
     * @returns List of available seasons of all the years
     */
    public getSeasonsList = async (): Promise<ISeasonList[]> =>
        (await fetch<{ data: ISeasonList[] }>(getURL('seasons'), this.#cacheConfig)).data

    /**
     * Gets the list of upcoming anime of the current season
     * @param config Config to make the request
     * @returns The list of upcoming anime of the current season
     */
    public getSeasonUpcoming = async (config?: ISeasonConfig): Promise<ISeasonResponse> =>
        await fetch<ISeasonResponse>(
            getURL('seasons', 'upcoming').concat(getQueryString<keyof ISeasonConfig>(config || {})),
            this.#cacheConfig
        )
}
