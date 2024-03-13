import { CacheOptions } from 'axios-cache-interceptor'
import { getTypeErrorMessage, getQueryString, getURL, Fetch } from '../../utils'
import { ISeasonConfig, ISeasonList, ISeasonResponse } from '../../types'
import { AnimeSeasons } from '../../constants'

export class Seasons {
    #fetch: Fetch['get']
    /**
     * Constructs an instance of the [seasons](https://docs.api.jikan.moe/#tag/seasons) client
     * @param cacheOptions [Cache options](https://axios-cache-interceptor.js.org/config) for the client to make requests
     */
    constructor(cacheOptions?: CacheOptions) {
        this.#fetch = new Fetch(cacheOptions).get
    }

    /**
     * Gets the list of current season's anime
     * @param config Config to make the request
     * @returns List of current season's anime
     */
    public getSeasonNow = async (config?: ISeasonConfig): Promise<ISeasonResponse> =>
        await this.#fetch<ISeasonResponse>(
            getURL('seasons', 'now').concat(getQueryString<keyof ISeasonConfig>(config || {}))
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
        return await this.#fetch<ISeasonResponse>(
            getURL('seasons', `${year}`, `${season}`).concat(getQueryString<keyof ISeasonConfig>(config || {}))
        )
    }

    /**
     * Gets the list of available seasons of all the years
     * @returns List of available seasons of all the years
     */
    public getSeasonsList = async (): Promise<ISeasonList[]> =>
        (await this.#fetch<{ data: ISeasonList[] }>(getURL('seasons'))).data

    /**
     * Gets the list of upcoming anime of the current season
     * @param config Config to make the request
     * @returns The list of upcoming anime of the current season
     */
    public getSeasonUpcoming = async (config?: ISeasonConfig): Promise<ISeasonResponse> =>
        await this.#fetch<ISeasonResponse>(
            getURL('seasons', 'upcoming').concat(getQueryString<keyof ISeasonConfig>(config || {}))
        )
}
