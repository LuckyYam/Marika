import { CacheOptions } from 'axios-cache-interceptor'
import { Anime, Characters, Clubs, Genres, Magazines, Manga } from './jikan'

export class Marika {
    /**
     * Constructs an instance of the `main (jikan)` client
     * @param cacheOptions Cache config to make the requests. See https://axios-cache-interceptor.js.org/config
     */
    constructor(cacheOptions?: CacheOptions) {
        this.anime = new Anime(cacheOptions)
        this.characters = new Characters(cacheOptions)
        this.clubs = new Clubs(cacheOptions)
        this.genres = new Genres(cacheOptions)
        this.magazines = new Magazines(cacheOptions)
        this.manga = new Manga(cacheOptions)
    }

    /** Client of `anime` */
    public anime: Anime
    /** Client of `characters` */
    public characters: Characters
    /** Client of `clubs` */
    public clubs: Clubs
    /** Client of `genres` */
    public genres: Genres
    /** Client of `magazines` */
    public magazines: Magazines
    /** Client of `manga` */
    public manga: Manga
}
