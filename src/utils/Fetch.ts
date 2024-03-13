import Axios, { AxiosInstance, AxiosResponse } from 'axios'
import { setupCache, CacheOptions, AxiosCacheInstance } from 'axios-cache-interceptor'
import { MarikaError } from './Error'
import { IJikanError } from '../types'

export class Fetch {
    #axios: AxiosCacheInstance | AxiosInstance
    constructor(cacheOptions?: CacheOptions) {
        this.#axios = cacheOptions
            ? (Axios as unknown as AxiosCacheInstance).defaults.cache
                ? (Axios as unknown as AxiosCacheInstance)
                : setupCache(Axios, cacheOptions)
            : Axios
    }
    public get = async <T>(url: string): Promise<T> => {
        const throwError = (error: Error & { response: AxiosResponse<IJikanError> }) => {
            throw new MarikaError(
                error.response.status as 400,
                error.response.data.type,
                error.response.data.error,
                error.response.data.message || error.response.data.messages
            )
        }
        return await this.#axios
            .get<T>(url)
            .then((res) => {
                if (res.status !== 200 || (res.data as unknown as IJikanError).error !== undefined) throw new Error('')
                return res.data
            })
            .catch((err: Error & { response: AxiosResponse<IJikanError> }) => throwError(err))
    }
}
