import {
    IExtendedImageResponse,
    IResource,
    ITimeResponse,
    IExtendedResource,
    IResponse,
    ICharacterFromSource,
    IScore,
    IReview,
    ISearchConfig,
    IRelation,
    IUserUpdate,
    ICommonPicture
} from '.'
import { AnimeSeasons, AnimeStatus, AnimeTypes, Ratings } from '../'

export interface IAnimeFull extends IAnime {
    /** Relations of the anime */
    relations: IRelation[]
    /** Theme for the anime */
    theme: {
        /** Openings of the anime */
        openings: string[]
        /** Endings of the anime */
        endings: string[]
    }
    /** External sites of the anime */
    external: IResource[]
    /** Streaming platforms of the anime with their site URL */
    streaming: IResource[]
}

export interface IAnimeReview extends IReview {
    /** Number of episodes watched by the reviewer */
    episodes_watched: number | null
}

export interface IAnime extends IResponse {
    /** Trailer of the anime (from YouTube) */
    trailer: IYouTube
    /** Type of the anime */
    type: AnimeTypes
    /** Source of the anime */
    source: string
    /** Total episodes of the anime */
    episodes: number
    /** Status of the anime */
    status: string
    /** Whether the anime is airing or not */
    airing: boolean
    /** Data of dates the anime aired */
    aired: ITimeResponse
    /** Duration of the anime */
    duration: string
    /** Rating of the anime */
    rating: string
    /** Season which the anime was aired */
    season: AnimeSeasons
    /** Year which anime was aired */
    year: number
    /** Broadcast data of the anime */
    broadcast: {
        /** The day which the anime is broadcasted */
        day: string
        /** The time which the anime is broadcasted */
        time: string
        /** The timezone of the time given */
        timezone: string
        /** Human readable string of the broadcast data */
        string: string
    }
    /** Producers of the anime */
    producers: IExtendedResource[]
    /** Licensors of the anime */
    licensors: IExtendedResource[]
    /** Stuidos of the anime */
    studios: IExtendedResource[]
}

export interface IAnimeSearchConfig extends ISearchConfig {
    /** Filter by anime type */
    type?: AnimeTypes
    /** Filter by rating */
    rating?: Ratings
    /** Filter by anime status */
    status?: AnimeStatus
    /** Get entries by order of a field */
    order_by?:
        | 'mal_id'
        | 'title'
        | 'start_date'
        | 'end_date'
        | 'episodes'
        | 'score'
        | 'scored_by'
        | 'rank'
        | 'popularity'
        | 'members'
        | 'favorites'
}

export interface IAnimeStaff {
    /** Data of the staff */
    person: {
        /** MAL ID of the staff */
        mal_id: number
        /** MAL URL to the staff */
        url: string
        /** Images of the staff */
        images: ICommonPicture
        /** Name of the staff */
        name: string
    }
    /** Positions of the staff in the source */
    positions: string[]
}

export interface IAnimeCharacter extends ICharacterFromSource {
    /** Favorites count of the character */
    favorites: number
    /** Voice actors of the character in the anime */
    voice_actors: IVoiceActor[]
}

export interface IAnimeUserUpdate extends IUserUpdate {
    /** Number of episodes seen */
    episodes_seen: number | null
    /** Total number of episodes to watch */
    episodes_total: number | null
}

export interface IYouTube {
    /** YouTube ID of the anime trailer video */
    youtube_id: string | null
    /** URL to the anime trailer video in YouTube */
    url: string | null
    /** YouTube embed URL to the anime trailer video */
    embed_url: string | null
    /** Image URLs of the video */
    images: IExtendedImageResponse
}

export interface IAnimeStatistics {
    /** Number of users who has been watching the anime */
    watching: number
    /** Number of users who have completed watching the anime */
    completed: number
    /** Number of users who have put the anime on hold */
    on_hold: number
    /** Number of users who have dropped the anime */
    dropped: number
    /** Number of users who have plans to watch the anime */
    plan_to_watch: number
    /** Total number of users who have set their status on the anime */
    total: number
    /** Scores of the anime given by the users */
    scores: IScore[]
}

export interface IEpisodeFromList extends IBaseEpisodeResponse {
    /** Score of the episode */
    score: number
    /** MAL forum URL of the episode */
    forum_url: string
}

export interface IAnimeVideo {
    /** Promos of the anime */
    promo: {
        /** Title of the promo */
        title: string
        /** Trailer of the promo */
        trailer: IYouTube
    }[]
    /** Episodes of the anime */
    episodes: IAnimeVideosEpisode[]
    /** Music videos of the anime */
    music_videos: {
        /** Title of the music video */
        title: string
        /** Video of the music video */
        video: IYouTube
        /** Data of the music video */
        meta: {
            /** Name of the music video */
            name: string
            /** Author of the music video */
            author: string
        }
    }[]
}

export interface IVoiceActor {
    /** Information of the voice actor */
    person: {
        /** MAL ID of the voice actor */
        mal_id: number
        /** MAL URL of the voice actor */
        url: string
        /** Images of the voice actor */
        images: ICommonPicture
        /** Name of the voice actor */
        name: string
    }
    /** Language of the voice actor */
    language: string
}

export interface IAnimeVideosEpisode {
    /** MAL ID of the anime's episode  */
    mal_id: number
    /** Title of the episode */
    title: string
    /** Episode of the anime in human readable string  */
    episode: string
    /** MAL URL of the episode */
    url: string
    /** Images of the episode */
    images: ICommonPicture
}

export interface IEpisodeResponse extends IBaseEpisodeResponse {
    /** Duration of the episode in seconds */
    duration: number
    /** Synopsis of the episode */
    synopsis: string | null
}

export interface IBaseEpisodeResponse {
    /** MAL ID of the episode */
    mal_id: number
    /** MAL URL of the episode */
    url: string
    /** Title of the episode */
    title: string
    /** Title of the episode in Japanses */
    title_japanese: string
    /** Title of the anime in Romanji */
    title_romanji: string
    /** The date which the episode aired */
    aired: string
    /** got no idea */
    filler: boolean
    /** got no idea */
    recap: false
}
