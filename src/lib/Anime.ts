import axios from "axios";
import { utils } from "./Utils";
import {
  IAnime,
  IAnimeCharacters,
  IAnimeStaff,
  IAnimeEpisodes,
  IAnimeEpisodeById,
  IAnimeNews,
  IAnimeForum,
  IAnimeVideos,
  IAnimePictures,
  IAnimeStats,
  IAnimeMoreInfo,
  IAnimeRecommendations,
  IAnimeUserUpdates,
  IAnimeReviews,
  IAnimeRelations,
  IAnimeThemes,
  IAnimeExternal,
  IAnimeSearch,
  ITopAnime,
} from "../typings/anime";
import {
  IAnimeSearchOptions,
  ISimpleOption,
  TAnimeFilter,
} from "../typings/searchOptions";

export class Anime {
  public util: utils;
  constructor() {
    this.util = new utils();
  }

  /**
   * Method for getting the info of the given Anime ID
   * @param {number} id The ID of the Anime
   * @returns {IAnime}
   */
  async getAnimeById(id: number): Promise<IAnime> {
    if (!id) throw new TypeError("Provide the id of the Anime.");
    let url = this.util.getUrl("anime");
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
   * Method for getting the characters of the given Anime ID
   * @param {number} id The ID of the Anime
   * @returns {IAnimeCharacters}
   */
  async getAnimeCharacters(id: number): Promise<IAnimeCharacters> {
    if (!id) throw new TypeError("Provide the id of the Anime.");
    let url = this.util.getUrl("anime");
    url += `/${id}/characters`;
    let data;
    try {
      data = await (await axios.get(url)).data;
    } catch (error) {
      throw new TypeError(`An error occurred. ${error}`);
    }
    return data;
  }

  /**
   * Method for getting the staffs of the given Anime ID
   * @param {number} id The ID of the Anime
   * @returns {IAnimeStaff}
   */
  async getAnimeStaff(id: number): Promise<IAnimeStaff> {
    if (!id) throw new TypeError("Provide the id of the Anime.");
    let url = this.util.getUrl("anime");
    url += `/${id}/staff`;
    let data;
    try {
      data = await (await axios.get(url)).data;
    } catch (error) {
      throw new TypeError(`An error occurred. ${error}`);
    }
    return data;
  }

  /**
   * Method for getting the list of episodes of the given Anime ID
   * @param {number} id The ID of the Anime
   * @param {ISimpleOption} page The page of the list
   * @returns {IAnimeEpisodes}
   */
  async getAnimeEpisodes(
    id: number,
    page?: ISimpleOption
  ): Promise<IAnimeEpisodes> {
    if (!id) throw new TypeError("Provide the id of the Anime.");
    let url = this.util.getUrl("anime");
    url += `/${id}/episodes`;
    const i = page?.query;
    let q;
    if (!i) {
      q = 1;
    } else {
      q = i;
    }
    url += `?query=${q}`;
    let data;
    try {
      data = await (await axios.get(url)).data;
    } catch (error) {
      throw new TypeError(`An error occurred. ${error}`);
    }
    return data;
  }

  /**
   * Method for getting an episode of the given Anime ID
   * @param {number} id The ID of the Anime
   * @param {ISimpleOption} episode The episode of the Anime
   * @returns {IAnimeEpisodeById}
   */
  async getAnimeEpisodeById(
    id: number,
    episode: ISimpleOption
  ): Promise<IAnimeEpisodeById> {
    if (!id || !episode.query)
      throw new TypeError("Make sure you have provided the required fields");
    let url = this.util.getUrl("anime");
    url += `/${id}/episodes/${episode.query}`;
    let data;
    try {
      data = await (await axios.get(url)).data;
    } catch (error) {
      throw new TypeError(`An error occurred. ${error}`);
    }
    return data.data;
  }

  /**
   * Method for getting news of the given Anime ID
   * @param {number} id The ID of the Anime
   * @param {ISimpleOption} page The page of the news
   * @returns {IAnimeNews}
   */

  async getAnimeNews(id: number, options?: ISimpleOption): Promise<IAnimeNews> {
    if (!id) throw new TypeError(`Provide the id of the Anime`);
    let url = this.util.getUrl("anime");
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
   * Method for getting forum of the given Anime ID
   * @param {number} id The ID of the Anime
   * @param {TAnimeFilter} filter The filter for search
   * @returns {IAnimeForum}
   */
  async getAnimeForum(id: number, filter?: TAnimeFilter): Promise<IAnimeForum> {
    if (!id) throw new TypeError("Provide the id of the Anime");
    let url = this.util.getUrl("anime");
    url += `/${id}/forum`;
    if (!filter) {
      url += "";
    } else {
      url += `?filter=${filter}`;
    }
    let data;
    try {
      data = await (await axios.get(url)).data;
    } catch (error) {
      throw new TypeError(`An error occurred. ${error}`);
    }
    return data;
  }

  /**
   * Method for getting videos of the given Anime ID
   * @param {number} id The ID of the Anime
   * @returns {IAnimeVideos}
   */
  async getAnimeVideos(id: number): Promise<IAnimeVideos> {
    if (!id) throw new TypeError("Provide the id of the Anime.");
    let url = this.util.getUrl("anime");
    url += `/${id}/videos`;
    let data;
    try {
      data = await (await axios.get(url)).data;
    } catch (error) {
      throw new TypeError(`An error occurred. ${error}`);
    }
    return data.data;
  }

  /**
   * Method for getting pictures of the given Anime ID
   * @param {number} id The ID of the Anime
   * @returns {IAnimePictures}
   */
  async getAnimePictures(id: number): Promise<IAnimePictures> {
    if (!id) throw new TypeError("Provide the id of the Anime");
    let url = this.util.getUrl("anime");
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
   * Method for getting statistics of the given Anime ID
   * @param {number} id The ID of the Anime
   * @returns {IAnimeStats}
   */
  async getAnimeStats(id: number): Promise<IAnimeStats> {
    if (!id) throw new TypeError("Provide the id of the Anime");
    let url = this.util.getUrl("anime");
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
   * Method for getting more info of the given Anime ID
   * @param {number} id The ID of the Anime
   * @returns {IAnimeMoreInfo}
   */
  async getAnimeMoreInfo(id: number): Promise<IAnimeMoreInfo> {
    if (!id) throw new TypeError("Provide the id of the Anime");
    let url = this.util.getUrl("anime");
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
   * Method for getting recommendations of the given Anime ID
   * @param {number} id The ID of the Anime
   * @returns {IAnimeRecommendations}
   */
  async getAnimeRecommendations(id: number): Promise<IAnimeRecommendations> {
    if (!id) throw new TypeError("Provide the id of the Anime");
    let url = this.util.getUrl("anime");
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
   * Method for getting user updates of the given Anime ID
   * @param {number} id The ID of the Anime
   * @param {ISimpleOption} page The page of the updates
   * @returns {IAnimeUserUpdates}
   */
  async getAnimeUserUpdates(
    id: number,
    options?: ISimpleOption
  ): Promise<IAnimeUserUpdates> {
    if (!id) throw new TypeError("Provide the id of the Anime");
    let url = this.util.getUrl("anime");
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
   * Method for getting reviews of the given Anime ID
   * @param {number} id The ID of the Anime
   * @param {ISimpleOption} page The page of the reviews
   * @returns {IAnimeReviews}
   */
  async getAnimeReviews(
    id: number,
    options?: ISimpleOption
  ): Promise<IAnimeReviews> {
    if (!id) throw new TypeError("Provide the id of the Anime");
    let url = this.util.getUrl("anime");
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
   * Method for getting relations of the given Anime ID
   * @param {number} id The ID of the Anime
   * @returns {IAnimeRelations}
   */
  async getAnimeRelations(id: number): Promise<IAnimeRelations> {
    if (!id) throw new TypeError("Provide the id of the Anime");
    let url = this.util.getUrl("anime");
    url += `/${id}/relations`;
    let data;
    try {
      data = await (await axios.get(url)).data;
    } catch (error) {
      throw new TypeError(`An error occurred. ${error}`);
    }
    return data.data;
  }

  /**
   * Method for getting themes of the given Anime ID
   * @param {number} id The ID of the Anime
   * @returns {IAnimeThemes}
   */
  async getAnimeThemes(id: number): Promise<IAnimeThemes> {
    if (!id) throw new TypeError("Provide the id of the Anime");
    let url = this.util.getUrl("anime");
    url += `/${id}/themes`;
    let data;
    try {
      data = await (await axios.get(url)).data;
    } catch (error) {
      throw new TypeError(`An error occurred. ${error}`);
    }
    return data.data;
  }

  /**
   * Method for getting externals of the given Anime ID
   * @param {number} id The ID of the Anime
   * @returns {IAnimeExternal}
   */
  async getAnimeExternals(id: number): Promise<IAnimeExternal> {
    if (!id) throw new TypeError("Provide the id of the Anime");
    let url = this.util.getUrl("anime");
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
   * Method for searching Anime
   * @param {string} query The Anime title that you wanna search
   * @param {IAnimeSearchOptions} options The options for searching
   * @returns {IAnimeSearch}
   */
  async searchAnime(
    query: string,
    options?: IAnimeSearchOptions
  ): Promise<IAnimeSearch> {
    if (!query) throw new TypeError("Provide the query of the Anime");
    const baseUrl = this.util.getUrl("anime");
    const url = this.util.getAnimeQuerySearchUrl(baseUrl, query, options);
    let data;
    try {
      data = await (await axios.get(url)).data;
    } catch (error) {
      throw new TypeError(`An error occurred. ${error}`);
    }
    return data;
  }

  /**
   * Method for getting top Anime list
   * @param {ISimpleOption} page The page of the list
   * @returns {ITopAnime}
   */
  async getTopAnime(options?: ISimpleOption): Promise<ITopAnime> {
    let url = this.util.getUrl("top");
    url += "/anime";
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

  /**
   * Method for getting random Anime with info
   * @returns {IAnime}
   */
  async getRandomAnime(): Promise<IAnime> {
    let url = this.util.getUrl("random");
    url += "/anime";
    let data;
    try {
      data = await (await axios.get(url)).data;
    } catch (error) {
      throw new TypeError(`An error occurred. ${error}`);
    }
    return data.data;
  }
}
