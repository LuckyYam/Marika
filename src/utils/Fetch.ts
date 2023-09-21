import Axios, { AxiosResponse } from 'axios'
import { setupCache, CacheOptions } from 'axios-cache-interceptor'
import { MarikaError } from './Error'
import { IJikanError } from '../types'

export const fetch = async <T>(url: string, cacheOptions?: CacheOptions): Promise<T> => {
    const throwError = (error: Error & { response: AxiosResponse<IJikanError> }) => {
        throw new MarikaError(
            error.response.status as 400,
            error.response.data.type,
            error.response.data.error,
            error.response.data.message || error.response.data.messages
        )
    }
    const axios = setupCache(Axios, cacheOptions)
    return await axios
        .get<T>(url)
        .then((res) => {
            if (res.status !== 200 || (res.data as unknown as IJikanError).error !== undefined) throw new Error('')
            return res.data
        })
        .catch((err: Error & { response: AxiosResponse<IJikanError> }) => throwError(err))
}
