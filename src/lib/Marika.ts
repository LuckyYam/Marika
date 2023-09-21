import { Anime, Characters } from './jikan'

export class Marika {
    /** Client of the anime */
    public anime = new Anime()
    /** Client of the characters */
    public characters = new Characters()
}
