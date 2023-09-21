import { CacheOptions } from 'axios-cache-interceptor'
import { Anime, Characters } from './jikan'

export class Marika {
    #cacheConfig?: CacheOptions
    /**
     * Constructs an instance of the `main (jikan)` client
     * @param cacheOptions Cache config to make the requests
     */
    constructor(cacheOptions?: CacheOptions) {
        this.#cacheConfig = cacheOptions
    }

    /** Client of the anime */
    public anime = new Anime(this.#cacheConfig)
    /** Client of the characters */
    public characters = new Characters(this.#cacheConfig)
}
