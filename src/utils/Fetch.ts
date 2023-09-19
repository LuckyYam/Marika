import axios, { AxiosResponse } from 'axios'
import { MarikaError } from './Error'
import { API_URL } from '../constants'
import { IJikanError, TMethods } from '../types'

export const fetch = async <T>(url: `${typeof API_URL}/${TMethods}/${string}`): Promise<T> => {
    const throwError = (error: Error & { response: AxiosResponse<IJikanError> }) => {
        throw new MarikaError(
            error.response.status as 400,
            error.response.data.type,
            error.response.data.message,
            error.response.data.error
        )
    }
    return await axios
        .get<T>(url)
        .then((res) => {
            if (res.status !== 200) throw new Error('')
            return res.data
        })
        .catch((err: Error & { response: AxiosResponse<IJikanError> }) => throwError(err))
}
