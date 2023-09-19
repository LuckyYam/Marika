import { API_URL } from '../constants'
import { TMethods } from '../'

export const getQueries = <T extends string>(data: { [key in T]?: string }): string => {
    const result = {} as Record<T, string>
    for (const key of Object.keys(data)) {
        if (data[key]) result[key] = data[key]
    }
    if (!Object.keys(result).length) return ''
    const query = new URLSearchParams(result)
    return `?${query.toString()}`
}

export const getURL = (method: TMethods, ...routes: string[]): string =>
    API_URL.concat(method, ...routes.map((route) => `/${route}`))
