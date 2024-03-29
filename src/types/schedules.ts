import { ICommonConfig } from '.'
import { Days } from '../constants'

export interface IScheduleConfig extends ICommonConfig {
    /** Filter the entries by day */
    filter?: Days
    /** When the value is true, it will return only Kid entries */
    kids?: boolean
    /** Filter out Adult entries */
    sfw?: boolean
    /** When its value is true, it will include the unapproved entries */
    unapproved?: boolean
    /** Limit of the entries per page */
    limit?: number
}
