export interface IPagination {
    /** Last page of the data */
    last_visible_page: number
    /** This value will be true if a next page exists for the data & vice versa  */
    has_next_page: boolean
    /** Current page of the data */
    current_page: number
}

export interface IItems {
    /** Number of results shown in the data */
    count: number
    /** Total number of all the results */
    total: number
    /** Number of data per page */
    per_page: number
}
