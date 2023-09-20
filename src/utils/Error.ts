import { IJikanError } from '../'

export class MarikaError extends Error implements IJikanError {
    constructor(
        public status: 400 | 404 | 405 | 429 | 500,
        public type: string,
        public error: string | null,
        public jikanMessage?: IJikanError['message'] | IJikanError['messages'],
        public report_url?: string
    ) {
        super('')
        this.#assignErrorMessage()
    }

    #assignErrorMessage = () => {
        const message =
            typeof this.jikanMessage === 'string'
                ? this.jikanMessage
                : this.jikanMessage !== undefined
                ? this.jikanMessage[Object.keys(this.jikanMessage)[0]][0]
                : ''
        this.message = `An error occurred while making the request (Status: ${this.status} - ${this.type}). Message: ${message}`
    }
}
