import { CacheOptions } from 'axios-cache-interceptor'
import { getURL, Fetch, getTypeErrorMessage, getQueryString } from '../../utils'
import { IExtendedPagination, IProducer, IProducerFull, IProducerSearchConfig } from '../../types'

export class Producers {
    #fetch: Fetch['get']
    /**
     * Constructs an instance of the [producers](https://docs.api.jikan.moe/#tag/producers) client
     * @param cacheOptions [Cache options](https://axios-cache-interceptor.js.org/config) for the client to make requests
     */
    constructor(cacheOptions?: CacheOptions) {
        this.#fetch = new Fetch(cacheOptions).get
    }

    /**
     * Gets the data of a producer from its MyAnimeList ID
     * @param id MyAnimeList ID of the producer
     * @returns Data of the producer
     */
    public getProducerById = async (id: string | number): Promise<IProducer> => {
        if (typeof id !== 'string' && typeof id !== 'number')
            throw new TypeError(getTypeErrorMessage('id', 'string or number', typeof id))
        return (await this.#fetch<{ data: IProducer }>(getURL('producers', `${id}`))).data
    }

    /**
     * Gets the full data of a producer from its MyAnimeList ID
     * @param id MyAnimeList ID of the producer
     * @returns Full data of the producer
     */
    public getProducerFullById = async (id: string | number): Promise<IProducerFull> => {
        if (typeof id !== 'string' && typeof id !== 'number')
            throw new TypeError(getTypeErrorMessage('id', 'string or number', typeof id))
        return (await this.#fetch<{ data: IProducerFull }>(getURL('producers', `${id}`, 'full'))).data
    }

    /**
     * Gets the external sites of a producer from its MyAnimeList ID
     * @param id MyAnimeList ID of the producer
     * @returns External sites of the producer
     */
    public getProducerExternal = async (id: string | number): Promise<IProducerFull['external']> => {
        if (typeof id !== 'string' && typeof id !== 'number')
            throw new TypeError(getTypeErrorMessage('id', 'string or number', typeof id))
        return (await this.#fetch<{ data: IProducerFull['external'] }>(getURL('producers', `${id}`, 'external'))).data
    }

    /**
     * Searches for producers in MyAnimeList
     * @param config Config to make the request
     * @returns Result of the search
     */
    public getProducers = async (
        config?: IProducerSearchConfig
    ): Promise<{ pagination: IExtendedPagination; data: IProducer[] }> =>
        await this.#fetch<{ pagination: IExtendedPagination; data: IProducer[] }>(
            getURL('producers').concat(getQueryString<keyof IProducerSearchConfig>(config || {}))
        )
}
