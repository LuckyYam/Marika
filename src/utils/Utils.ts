import { API_URL } from '../constants'
import { TMethods } from '../'

export const getQueryString = <T extends string>(data: {
    [key in T]?: string | number[] | number | boolean
}): string => {
    const result = {} as Record<string, string>
    for (const key of Object.keys(data)) {
        const value = data[key as T]
        if (value) {
            if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean')
                result[key] =
                    typeof value === 'number' ? value.toString() : typeof value === 'boolean' ? `${value}` : value
            else result[key] = value.join(',')
        }
    }
    if (!Object.keys(result).length) return ''
    const query = new URLSearchParams(result)
    return `?${query.toString()}`
}

export const getURL = (method: TMethods, ...routes: string[]): string =>
    API_URL.concat(`/${method}`, ...routes.map((route) => `/${route}`))

export const getTypeErrorMessage = (parameter: string, expectedType: string, got: string) =>
    `Expected type ${expectedType} for the parameter '${parameter}', but received type ${got}.`
