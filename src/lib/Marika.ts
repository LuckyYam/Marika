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
    Random,
    Recommendations,
    Reviews,
    Schedules,
    Seasons,
    Users,
    Watch
} from './jikan'

export class Marika {
    /**
     * Constructs an instance of the [main](https://docs.api.jikan.moe/) client
     * @param cacheOptions [Cache options](https://axios-cache-interceptor.js.org/config) for the client to make requests
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
        this.users = new Users(cacheOptions)
        this.watch = new Watch(cacheOptions)
        this.random = new Random(cacheOptions)
    }

    /** Client of [anime](https://docs.api.jikan.moe/#tag/anime) */
    public anime: Anime
    /** Client of [characters](https://docs.api.jikan.moe/#tag/characters) */
    public characters: Characters
    /** Client of [clubs](https://docs.api.jikan.moe/#tag/clubs) */
    public clubs: Clubs
    /** Client of [genres](https://docs.api.jikan.moe/#tag/genres) */
    public genres: Genres
    /** Client of [magazines](https://docs.api.jikan.moe/#tag/magazines) */
    public magazines: Magazines
    /** Client of [manga](https://docs.api.jikan.moe/#tag/manga) */
    public manga: Manga
    /** Client of [people](https://docs.api.jikan.moe/#tag/people) */
    public people: People
    /** Client of [reviews](https://docs.api.jikan.moe/#tag/reviews) */
    public reviews: Reviews
    /** Client of [schedules](https://docs.api.jikan.moe/#tag/schedules) */
    public schedules: Schedules
    /** Client of [producers](https://docs.api.jikan.moe/#tag/producers) */
    public producers: Producers
    /** Client of [recommendations](https://docs.api.jikan.moe/#tag/recommendations) */
    public recommendations: Recommendations
    /** Client of [seasons](https://docs.api.jikan.moe/#tag/seasons) */
    public seasons: Seasons
    /** Client of [users](https://docs.api.jikan.moe/#tag/users) */
    public users: Users
    /** Client of [watch](https://docs.api.jikan.moe/#tag/watch) */
    public watch: Watch
    /** Client of [random](https://docs.api.jikan.moe/#tag/random) */
    public random: Random
}
