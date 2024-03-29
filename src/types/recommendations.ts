import { IClubStaff, IRecommendation } from '.'

export interface IRandomRecommendation {
    /** MAL IDs of the compared sources for the recommendation separated by a "-"  */
    mal_id: string
    /** Entries of the recommendations */
    entry: IRecommendation['entry'][]
    /** Content of the recommendation post */
    content: string
    /** Date which the recommendation post was created */
    date: string
    /** Data of user who created the recommendation */
    user: IClubStaff
}
