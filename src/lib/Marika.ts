import { CacheOptions } from 'axios-cache-interceptor'
import {
    Anime,
    Characters,
    Clubs,
    Genres,
    Magazines,
    Manga,
    People,
    Producers,
    Recommendations,
    Reviews,
    Schedules,
    Seasons
} from './jikan'

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
        this.people = new People(cacheOptions)
        this.reviews = new Reviews(cacheOptions)
        this.schedules = new Schedules(cacheOptions)
        this.producers = new Producers(cacheOptions)
        this.recommendations = new Recommendations(cacheOptions)
        this.seasons = new Seasons(cacheOptions)
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
    /** Client of `people` */
    public people: People
    /** Client of `reviews` */
    public reviews: Reviews
    /** Client of `schedules` */
    public schedules: Schedules
    /** Client of `producers` */
    public producers: Producers
    /** Client of `recommendations` */
    public recommendations: Recommendations
    /** Client of `seasons` */
    public seasons: Seasons
}
