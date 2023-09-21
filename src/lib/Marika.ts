import { CacheOptions } from 'axios-cache-interceptor'
import { Anime, Characters, Clubs, Genres } from './jikan'

export class Marika {
    #cacheConfig?: CacheOptions
    /**
     * Constructs an instance of the `main (jikan)` client
     * @param cacheOptions Cache config to make the requests. See https://axios-cache-interceptor.js.org/config
     */
    constructor(cacheOptions?: CacheOptions) {
        this.#cacheConfig = cacheOptions
    }

    /** Client of the `anime` */
    public anime = new Anime(this.#cacheConfig)
    /** Client of the `characters` */
    public characters = new Characters(this.#cacheConfig)
    /** Client of the `clubs` */
    public clubs = new Clubs(this.#cacheConfig)
    /** Client of the `genres` */
    public genres = new Genres(this.#cacheConfig)
}
