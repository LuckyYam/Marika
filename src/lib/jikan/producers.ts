import { CacheOptions } from 'axios-cache-interceptor'
import { getURL, fetch, getTypeErrorMessage, getQueryString } from '../../utils'
import { IExtendedPagination, IProducer, IProducerFull, IProducerSearchConfig } from '../../types'

export class Producers {
    #cacheConfig?: CacheOptions
    /**
     * Constructs an instance of the `producers` client
     * @param cacheOptions Cache options for the client to make requests. See https://axios-cache-interceptor.js.org/config
     */
    constructor(cacheOptions?: CacheOptions) {
        this.#cacheConfig = cacheOptions
    }

    /**
     * Gets the data of a producer from its MyAnimeList ID
     * @param id MyAnimeList ID of the producer
     * @returns Data of the producer
     */
    public getProducerById = async (id: string | number): Promise<IProducer> => {
        if (typeof id !== 'string' && typeof id !== 'number')
            throw new TypeError(getTypeErrorMessage('id', 'string or number', typeof id))
        return (await fetch<{ data: IProducer }>(getURL('producers', `${id}`), this.#cacheConfig)).data
    }

    /**
     * Gets the full data of a producer from its MyAnimeList ID
     * @param id MyAnimeList ID of the producer
     * @returns Full data of the producer
     */
    public getProducerFullById = async (id: string | number): Promise<IProducerFull> => {
        if (typeof id !== 'string' && typeof id !== 'number')
            throw new TypeError(getTypeErrorMessage('id', 'string or number', typeof id))
        return (await fetch<{ data: IProducerFull }>(getURL('producers', `${id}`, 'full'), this.#cacheConfig)).data
    }

    /**
     * Gets the external sites of a producer from its MyAnimeList ID
     * @param id MyAnimeList ID of the producer
     * @returns External sites of the producer
     */
    public getProducerExternal = async (id: string | number): Promise<IProducerFull['external']> => {
        if (typeof id !== 'string' && typeof id !== 'number')
            throw new TypeError(getTypeErrorMessage('id', 'string or number', typeof id))
        return (
            await fetch<{ data: IProducerFull['external'] }>(
                getURL('producers', `${id}`, 'external'),
                this.#cacheConfig
            )
        ).data
    }

    /**
     * Searches for producers in MyAnimeList
     * @param config Config to make the request
     * @returns Result of the search
     */
    public getProducers = async (
        config?: IProducerSearchConfig
    ): Promise<{ pagination: IExtendedPagination; data: IProducer[] }> =>
        await fetch<{ pagination: IExtendedPagination; data: IProducer[] }>(
            getURL('producers').concat(getQueryString<keyof IProducerSearchConfig>(config || {})),
            this.#cacheConfig
        )
}
