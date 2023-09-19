import { Change, IJikanError } from '../'

export class MarikaError extends Error implements Change<IJikanError, 'message', 'jikanMessage', string> {
    constructor(
        public status: 400 | 404 | 405 | 429 | 500,
        public type: string,
        public jikanMessage: string,
        public error: string | null,
        public report_url?: string
    ) {
        super(`An error occurred while making the request (Status: ${status} - ${type}). Message: ${jikanMessage}`)
    }
}
