import {
  ICharacter,
  ICharacterAnime,
  ICharacterManga,
  ICharacterVoices,
  ICharacterPictures,
  ICharacterSearch,
  ITopCharacter,
} from "../typings/character";
import axios from "axios";
import { utils } from "./Utils";
import {
  ICharacterSearchOptions,
  ISimpleOption,
} from "../typings/searchOptions";

export class Character {
  public util: utils;
  constructor() {
    this.util = new utils();
  }

  /**
   * Method for getting random Character with info
   * @returns {ICharacter}
   */
  async getRandomCharacter(): Promise<ICharacter> {
    let url = this.util.getUrl("random");
    url += "/characters";
    let data;
    try {
      data = await (await axios.get(url)).data;
    } catch (error) {
      throw new TypeError(`An error occurred. ${error}`);
    }
    return data.data;
  }

  /**
   * Method for getting the info of the given Character ID
   * @param {number} id the ID of the Character
   * @returns {ICharacter}
   */
  async getCharacterById(id: number): Promise<ICharacter> {
    if (!id) throw new TypeError("Provide the id of the Character.");
    let url = this.util.getUrl("characters");
    url += `/${id}`;
    let data;
    try {
      data = await (await axios.get(url)).data;
    } catch (error) {
      throw new TypeError(`An error occurred. ${error}`);
    }
    return data.data;
  }

  /**
   * Method for getting the Anime of the given Character ID
   * @param {number} id The ID of the Character
   * @returns {ICharacterAnime}
   */
  async getCharacterAnime(id: number): Promise<ICharacterAnime> {
    if (!id) throw new TypeError("Provide the id of the Character.");
    let url = this.util.getUrl("characters");
    url += `/${id}/anime`;
    let data;
    try {
      data = await (await axios.get(url)).data;
    } catch (error) {
      throw new TypeError(`An error occurred. ${error}`);
    }
    return data;
  }

  /**
   * Method for getting the Manga of the given Character ID
   * @param {number} id The ID of the Character
   * @returns {ICharacterManga}
   */
  async getCharacterManga(id: string): Promise<ICharacterManga> {
    if (!id) throw new TypeError("Provide the id of the Character.");
    let url = this.util.getUrl("characters");
    url += `/${id}/manga`;
    let data;
    try {
      data = await (await axios.get(url)).data;
    } catch (error) {
      throw new TypeError(`An error occurred. ${error}`);
    }
    return data;
  }

  /**
   * Method for getting the Voice Actors of the given Character ID
   * @param {number} id The ID of the Character
   * @returns {ICharacterVoices}
   */
  async getCharacterVoiceActors(id: number): Promise<ICharacterVoices> {
    if (!id) throw new TypeError("Provide the id of the Character.");
    let url = this.util.getUrl("characters");
    url += `/${id}/voices`;
    let data;
    try {
      data = await (await axios.get(url)).data;
    } catch (error) {
      throw new TypeError(`An error occurred. ${error}`);
    }
    return data;
  }

  /**
   * Method for getting pictures of the given Character ID
   * @param {number} id The ID of the Character
   * @returns {ICharacterPictures}
   */
  async getCharacterPictures(id: number): Promise<ICharacterPictures> {
    if (!id) throw new TypeError("Provide the id of the Character.");
    let url = this.util.getUrl("characters");
    url += `/${id}/pictures`;
    let data;
    try {
      data = await (await axios.get(url)).data;
    } catch (error) {
      throw new TypeError(`An error occurred. ${error}`);
    }
    return data;
  }

  /**
   * Method for searching Character
   * @param {string} query The Character name that you wanna search
   * @param {ICharacterSearchOptions} options The options for searching
   * @returns {ICharacterSearch}
   */
  async searchCharacter(
    query: string,
    options?: ICharacterSearchOptions
  ): Promise<ICharacterSearch> {
    if (!query) throw new TypeError("Provide the query of the Character");
    const baseUrl = this.util.getUrl("characters");
    const url = this.util.getCharacterQuerySearchUrl(baseUrl, query, options);
    let data;
    try {
      data = await (await axios.get(url)).data;
    } catch (error) {
      throw new TypeError(`An error occurred. ${error}`);
    }
    return data;
  }

  /**
   * Method for getting top Characters in MyAnimeList
   * @param {ISimpleOption} page The page of the list
   * @returns {ITopCharacter}
   */
  async getTopCharacters(options?: ISimpleOption): Promise<ITopCharacter> {
    let url = this.util.getUrl("top");
    url += "/characters";
    if (options?.query === undefined) {
      url += "";
    } else {
      url += `?page=${options?.query}`;
    }
    let data;
    try {
      data = await (await axios.get(url)).data;
    } catch (error) {
      throw new TypeError(`An error occurred. ${error}`);
    }
    return data;
  }
}
