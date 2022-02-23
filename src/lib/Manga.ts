import {
  IManga,
  IMangaCharacters,
  IMangaNews,
  IMangaTopics,
  IMangaPictures,
  IMangaStats,
  IMangaMoreInfo,
  IMangaRecommendations,
  IMangaUserUpdates,
  IMangaReviews,
  IMangaRelations,
  IMangaExternals,
  IMangaSearch,
  ITopManga,
} from "../typings/manga";
import { IMangaSearchOptions, ISimpleOption } from "../typings/searchOptions";
import axios from "axios";
import { utils } from "./Utils";

export class Manga {
  public util: utils;
  constructor() {
    this.util = new utils();
  }

  /**
   * Method for getting random Manga with info
   *  @returns {IManga}
   */
  async getRandomManga(): Promise<IManga> {
    let url = this.util.getUrl("random");
    url += "/manga";
    let data;
    try {
      data = await (await axios.get(url)).data;
    } catch (error) {
      throw new TypeError(`An error occurred.  ${error}`);
    }
    return data.data;
  }

  /**
   * Method for getting the info of the given Manga ID
   * @param {number} id ID of the Manga
   * @returns {IManga}
   */
  async getMangaById(id: number): Promise<IManga> {
    if (!id) throw new TypeError("Provide ID of the Manga");
    let url = this.util.getUrl("manga");
    url += `/${id}`;
    let data;
    try {
      data = await (await axios.get(url)).data;
    } catch (error) {
      throw new TypeError(`An error occurred.  ${error}`);
    }
    return data.data;
  }

  /**
   * Method for getting Manga characters
   * @param {number} id ID of the Manga
   * @returns {IMangaCharacters}
   */
  async getMangaCharacters(id: number): Promise<IMangaCharacters> {
    if (!id) throw new TypeError("Provide the id of the Manga");
    let url = this.util.getUrl("manga");
    url += `/${id}`;
    let data;
    try {
      data = await (await axios.get(url)).data;
    } catch (error) {
      throw new TypeError(`An error occurred.  ${error}`);
    }
    return data;
  }

  /**
   * Method for getting news of the given Manga ID
   * @param {number} id ID of the Manga
   * @param {ISimpleOption} page The page of the news
   * @returns {IMangaNews}
   */
  async getMangaNews(id: number, options?: ISimpleOption): Promise<IMangaNews> {
    if (!id) throw new TypeError(`Provide the id of the Manga`);
    let url = this.util.getUrl("manga");
    url += `/${id}/news`;
    const i = options?.query;
    let q;
    if (!i) {
      q = 1;
    } else {
      q = i;
    }
    url += `?page=${q}`;
    let data;
    try {
      data = await (await axios.get(url)).data;
    } catch (error) {
      throw new TypeError(`An error occurred. ${error}`);
    }
    return data;
  }

  /**
   * Method for getting Manga topics
   * @param {number} id ID of the Manga
   * @returns {IMangaTopics}
   */
  async getMangaTopics(id: number): Promise<IMangaTopics> {
    if (!id) throw new TypeError("Provide the id of the Manga");
    let url = this.util.getUrl("manga");
    url += `/${id}/forum`;
    let data;
    try {
      data = await (await axios.get(url)).data;
    } catch (error) {
      throw new TypeError(`An error occurred. ${error}`);
    }
    return data;
  }

  /**
   * Method for getting pictures of the given Manga ID
   * @param {number} id ID of the Manga
   * @returns {IMangaPictures}
   */
  async getMangaPictures(id: number): Promise<IMangaPictures> {
    if (!id) throw new TypeError("Provide the id of the Manga");
    let url = this.util.getUrl("manga");
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
   * Method for getting the statistics of the given Manga ID
   * @param {number} id ID of the Manga
   * @returns {IMangaStats}
   */
  async getMangaStats(id: number): Promise<IMangaStats> {
    if (!id) throw new TypeError("Provide the id of the Manga");
    let url = this.util.getUrl("manga");
    url += `/${id}/statistics`;
    let data;
    try {
      data = await (await axios.get(url)).data;
    } catch (error) {
      throw new TypeError(`An error occurred. ${error}`);
    }
    return data.data;
  }

  /**
   * Method for getting more info of the given Manga ID
   * @param {number} id ID of the Manga
   * @returns {IMangaMoreInfo}
   */
  async getMangaMoreInfo(id: number): Promise<IMangaMoreInfo> {
    if (!id) throw new TypeError("Provide the id of the Manga");
    let url = this.util.getUrl("manga");
    url += `/${id}/moreinfo`;
    let data;
    try {
      data = await (await axios.get(url)).data;
    } catch (error) {
      throw new TypeError(`An error occurred. ${error}`);
    }
    return data.data;
  }

  /**
   * Method for getting recommendations of the given Manga ID
   * @param {number} id ID of the Manga
   * @returns {IMangaRecommendations}
   */
  async getMangaRecommendations(id: number): Promise<IMangaRecommendations> {
    if (!id) throw new TypeError("Provide the id of the Manga");
    let url = this.util.getUrl("manga");
    url += `/${id}/recommendations`;
    let data;
    try {
      data = await (await axios.get(url)).data;
    } catch (error) {
      throw new TypeError(`An error occurred. ${error}`);
    }
    return data;
  }

  /**
   * Method for getting user updates of the given Manga ID
   * @param {number} id ID of the Manga
   * @param {ISimpleOption} page Page of the list
   * @returns {IMangaUserUpdates}
   */
  async getMangaUserUpdates(
    id: number,
    options?: ISimpleOption
  ): Promise<IMangaUserUpdates> {
    if (!id) throw new TypeError(`Provide the id of the Manga`);
    let url = this.util.getUrl("manga");
    url += `/${id}/userupdates`;
    const i = options?.query;
    let q;
    if (!i) {
      q = 1;
    } else {
      q = i;
    }
    url += `?page=${q}`;
    let data;
    try {
      data = await (await axios.get(url)).data;
    } catch (error) {
      throw new TypeError(`An error occurred. ${error}`);
    }
    return data;
  }

  /**
   * Method for getting reviews of the given Manga ID
   * @param {number} id ID of the Manga
   * @param {ISimpleOption} page Page of the list
   * @returns {IMangaReviews}
   */
  async getMangaReviews(
    id: number,
    options?: ISimpleOption
  ): Promise<IMangaReviews> {
    if (!id) throw new TypeError(`Provide the id of the Manga`);
    let url = this.util.getUrl("manga");
    url += `/${id}/reviews`;
    const i = options?.query;
    let q;
    if (!i) {
      q = 1;
    } else {
      q = i;
    }
    url += `?page=${q}`;
    let data;
    try {
      data = await (await axios.get(url)).data;
    } catch (error) {
      throw new TypeError(`An error occurred. ${error}`);
    }
    return data;
  }

  /**
   * Method for getting relations of the given Manga ID
   * @param {number} id ID of the Manga
   * @returns {IMangaRelations}
   */
  async getMangaRelations(id: number): Promise<IMangaRelations> {
    if (!id) throw new TypeError("Provide the id of the Manga");
    let url = this.util.getUrl("manga");
    url += `/${id}/relations`;
    let data;
    try {
      data = await (await axios.get(url)).data;
    } catch (error) {
      throw new TypeError(`An error occurred. ${error}`);
    }
    return data;
  }

  /**
   * Method for getting external of the given Manga ID
   * @param {number} id ID of the Manga
   * @returns {IMangaExternals}
   */
  async getMangaExternal(id: number): Promise<IMangaExternals> {
    if (!id) throw new TypeError("Provide the id of the Manga");
    let url = this.util.getUrl("manga");
    url += `/${id}/external`;
    let data;
    try {
      data = await (await axios.get(url)).data;
    } catch (error) {
      throw new TypeError(`An error occurred. ${error}`);
    }
    return data;
  }

  /**
   * Method for searching Manga
   * @param {string} Query of the Manga
   * @param {IMangaSearchOptions} options The options for searching
   * @returns {IMangaSearch}
   */
  async searchManga(
    query: string,
    options?: IMangaSearchOptions
  ): Promise<IMangaSearch> {
    if (!query) throw new TypeError("Provide the query of the Manga");
    const baseUrl = this.util.getUrl("manga");
    const url = this.util.getMangaQuerySearchUrl(baseUrl, query, options);
    let data;
    try {
      data = await (await axios.get(url)).data;
    } catch (error) {
      throw new TypeError(`An error occurred. ${error}`);
    }
    return data;
  }

  /**
   * Method for getting the list of top Manga
   * @param {ISimpleOption} page Page of the list
   * @returns {ITopManga}
   */
  async getTopManga(options?: ISimpleOption): Promise<ITopManga> {
    let url = this.util.getUrl("top");
    url += "/manga";
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
