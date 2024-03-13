import { CacheOptions } from 'axios-cache-interceptor'
import {
    ICommonConfig,
    IPagination,
    IRandomRecommendation,
    IUserAbout,
    IUserBaseRes,
    IUserById,
    IUserClub,
    IUserFavorites,
    IUserFriend,
    IUserFull,
    IUserHistory,
    IUserHistoryConfig,
    IUserProfile,
    IUserReview,
    IUserSearchConfig,
    IUserUpdatesResponse
} from '../../types'
import { Fetch, getQueryString, getTypeErrorMessage, getURL } from '../../utils'

export class Users {
    #fetch: Fetch['get']
    /**
     * Constructs an instance of the [users](https://docs.api.jikan.moe/#tag/users) client
     * @param cacheOptions [Cache options](https://axios-cache-interceptor.js.org/config) for the client to make requests
     */
    constructor(cacheOptions?: CacheOptions) {
        this.#fetch = new Fetch(cacheOptions).get
    }

    /**
     * Searches for user in MyAnimeList
     * @param config Config to make the search
     * @returns Results of the user search
     */
    public getUsersSearch = async (
        config?: IUserSearchConfig
    ): Promise<{ data: IUserBaseRes[]; pagination: IPagination }> =>
        await this.#fetch<{ data: IUserBaseRes[]; pagination: IPagination }>(
            getURL('users').concat(getQueryString<keyof IUserSearchConfig>(config || {}))
        )

    /**
     * Gets the URL & username of a user from its MyAnimeList ID
     * @param id MyAnimeList ID of the user
     * @returns The URL & username of the user
     */
    public getUserById = async (id: string | number): Promise<IUserById> => {
        if (typeof id !== 'string' && typeof id !== 'number')
            throw new TypeError(getTypeErrorMessage('id', 'string or number', typeof id))
        return (await this.#fetch<{ data: IUserById }>(getURL('users', 'userbyid', `${id}`))).data
    }

    /**
     * Gets the full profile of a user from its MyAnimeList username
     * @param username Username of the user
     * @returns The full profile of the user
     */
    public getUserFullProfile = async (username: string): Promise<IUserFull> => {
        if (typeof username !== 'string')
            throw new TypeError(getTypeErrorMessage('username', 'string', typeof username))
        return (await this.#fetch<{ data: IUserFull }>(getURL('users', username, 'full'))).data
    }

    /**
     * Gets the profile of a user from its MyAnimeList username
     * @param username Username of the user
     * @returns The profile of the user
     */
    public getUserProfile = async (username: string): Promise<IUserProfile> => {
        if (typeof username !== 'string')
            throw new TypeError(getTypeErrorMessage('username', 'string', typeof username))
        return (await this.#fetch<{ data: IUserProfile }>(getURL('users', username))).data
    }

    /**
     * Gets the statistics of a user from its MyAnimeList username
     * @param username Username of the user
     * @returns The statistics of the user
     */
    public getUserStatistics = async (username: string): Promise<IUserFull['statistics']> => {
        if (typeof username !== 'string')
            throw new TypeError(getTypeErrorMessage('username', 'string', typeof username))
        return (await this.#fetch<{ data: IUserFull['statistics'] }>(getURL('users', username, 'statistics'))).data
    }

    /**
     * Gets the list of favorites of a user from its MyAnimeList username
     * @param username Username of the user
     * @returns List of favorites of the user
     */
    public getUserFavorites = async (username: string): Promise<IUserFavorites> => {
        if (typeof username !== 'string')
            throw new TypeError(getTypeErrorMessage('username', 'string', typeof username))
        return (await this.#fetch<{ data: IUserFavorites }>(getURL('users', username, 'favorites'))).data
    }

    /**
     * Gets the updates of a user from its MyAnimeList username
     * @param username Username of the user
     * @returns The updates of the user
     */
    public getUserUpdates = async (username: string): Promise<IUserUpdatesResponse> => {
        if (typeof username !== 'string')
            throw new TypeError(getTypeErrorMessage('username', 'string', typeof username))
        return (await this.#fetch<{ data: IUserUpdatesResponse }>(getURL('users', username, 'userupdates'))).data
    }

    /**
     * Gets the about of a user from its MyAnimeList username
     * @param username Username of the user
     * @returns About of the user
     */
    public getUserAbout = async (username: string): Promise<IUserAbout> => {
        if (typeof username !== 'string')
            throw new TypeError(getTypeErrorMessage('username', 'string', typeof username))
        return (await this.#fetch<{ data: IUserAbout }>(getURL('users', username, 'about'))).data
    }

    /**
     * Gets the list of histories of a user from its MyAnimeList username
     * @param username Username of the user
     * @param config Config to make the request
     * @returns The list of histories of the user
     */
    public getUserHistory = async (username: string, config?: IUserHistoryConfig): Promise<IUserHistory[]> => {
        if (typeof username !== 'string')
            throw new TypeError(getTypeErrorMessage('username', 'string', typeof username))
        return (
            await this.#fetch<{ data: IUserHistory[] }>(
                getURL('users', username, 'history').concat(getQueryString<keyof IUserHistoryConfig>(config || {}))
            )
        ).data
    }

    /**
     * Gets the list of friends of a user from its MyAnimeList username
     * @param username Username of the user
     * @param config Config to make the request
     * @returns The list of friends of the user
     */
    public getUserFriends = async (
        username: string,
        config?: ICommonConfig
    ): Promise<{ data: IUserFriend[]; pagination: IPagination }> => {
        if (typeof username !== 'string')
            throw new TypeError(getTypeErrorMessage('username', 'string', typeof username))
        return await this.#fetch<{ data: IUserFriend[]; pagination: IPagination }>(
            getURL('users', username, 'friends').concat(getQueryString<keyof ICommonConfig>(config || {}))
        )
    }

    /**
     * Gets the list of reviews posted by a user from its MyAnimeList username
     * @param username Username of the user
     * @param config Config to make the request
     * @returns The list of reviews posted by the user
     */
    public getUserReviews = async (
        username: string,
        config?: ICommonConfig
    ): Promise<{ data: IUserReview[]; pagination: IPagination }> => {
        if (typeof username !== 'string')
            throw new TypeError(getTypeErrorMessage('username', 'string', typeof username))
        return await this.#fetch<{ data: IUserReview[]; pagination: IPagination }>(
            getURL('users', username, 'reviews').concat(getQueryString<keyof ICommonConfig>(config || {}))
        )
    }

    /**
     * Gets the list of recommendations posted by a user from its MyAnimeList username
     * @param username Username of the user
     * @param config Config to make the request
     * @returns The list of recommendations posted by the user
     */
    public getUserRecommendations = async (
        username: string,
        config?: ICommonConfig
    ): Promise<{ data: IRandomRecommendation[]; pagination: IPagination }> => {
        if (typeof username !== 'string')
            throw new TypeError(getTypeErrorMessage('username', 'string', typeof username))
        return await this.#fetch<{ data: IRandomRecommendation[]; pagination: IPagination }>(
            getURL('users', username, 'recommendations').concat(getQueryString<keyof ICommonConfig>(config || {}))
        )
    }

    /**
     * Gets the list of clubs of a user from its MyAnimeList username
     * @param username Username of the user
     * @param config Config to make the request
     * @returns The list of clubs of the user
     */
    public getUserClubs = async (
        username: string,
        config?: ICommonConfig
    ): Promise<{ data: IUserClub[]; pagination: IPagination }> => {
        if (typeof username !== 'string')
            throw new TypeError(getTypeErrorMessage('username', 'string', typeof username))
        return await this.#fetch<{ data: IUserClub[]; pagination: IPagination }>(
            getURL('users', username, 'clubs').concat(getQueryString<keyof ICommonConfig>(config || {}))
        )
    }

    /**
     * Gets the external sites of a user from its MyAnimeList username
     * @param username Username of the user
     * @returns The external sites of the user
     */
    public getUserExternal = async (username: string): Promise<IUserFull['external']> => {
        if (typeof username !== 'string')
            throw new TypeError(getTypeErrorMessage('username', 'string', typeof username))
        return (await this.#fetch<{ data: IUserFull['external'] }>(getURL('users', username, 'external'))).data
    }
}
