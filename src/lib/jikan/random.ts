import { CacheOptions } from 'axios-cache-interceptor'
import { IAnime, ICharacter, IManga, IPerson, IUserProfile } from '../../types'
import { fetch, getURL } from '../../utils'

export class Random {
    #cacheConfig?: CacheOptions
    /**
     * Constructs an instance of the [random](https://docs.api.jikan.moe/#tag/random) client
     * @param cacheOptions [Cache options](https://axios-cache-interceptor.js.org/config) for the client to make requests
     */
    constructor(cacheOptions?: CacheOptions) {
        this.#cacheConfig = cacheOptions
    }

    /**
     * Gets the data of a random anime
     * @returns Data of the random anime
     */
    public getRandomAnime = async (): Promise<IAnime> =>
        (await fetch<{ data: IAnime }>(getURL('random', 'anime'), this.#cacheConfig)).data

    /**
     * Gets the data of a random manga
     * @returns Data of the random manga
     */
    public getRandomManga = async (): Promise<IManga> =>
        (await fetch<{ data: IManga }>(getURL('random', 'manga'), this.#cacheConfig)).data

    /**
     * Gets the data of a random character
     * @returns Data of the random character
     */
    public getRandomCharacters = async (): Promise<ICharacter> =>
        (await fetch<{ data: ICharacter }>(getURL('random', 'characters'), this.#cacheConfig)).data

    /**
     * Gets the data of a random person
     * @returns Data of the random person
     */
    public getRandomPeople = async (): Promise<IPerson> =>
        (await fetch<{ data: IPerson }>(getURL('random', 'people'), this.#cacheConfig)).data

    /**
     * Gets the profile of a random MyAnimeList user
     * @returns Profile of the random MyAnimeList user
     */
    public getRandomUsers = async (): Promise<IUserProfile> =>
        (await fetch<{ data: IUserProfile }>(getURL('random', 'users'), this.#cacheConfig)).data
}
