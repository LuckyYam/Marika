import { IRecommendation, IYouTube } from '.'

export interface IWatchEpisode extends ICommonWatchResponse {
    /** Episodes of the anime */
    episodes: IWatchEpisodeResponse[]
}

export interface IWatchPromo extends ICommonWatchResponse {
    /** Title of the promo */
    title: string
    /** Data of the promo video in YouTube */
    trailer: IYouTube
}

export interface IWatchEpisodeResponse {
    /** MAL ID of the episode */
    mal_id: number
    /** MAL URL of the episode */
    url: string
    /** Title of the episode. e.g `Episode 12` */
    title: string
    /** The value will be if premiumship is required to watch the episode */
    premium: boolean
}

export interface ICommonWatchResponse {
    /** Entry (data) of the anime */
    entry: IRecommendation['entry']
    /** Whether the source is locked in the region or not */
    region_locked: boolean
}
