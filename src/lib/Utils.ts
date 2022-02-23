import {
  IAnimeSearchOptions,
  ICharacterSearchOptions,
  IMangaSearchOptions,
  TMethods,
} from "../typings/searchOptions";

export class utils {
  /**
   * Returns Anime query searching URL
   * @param {string} url The url of the API
   * @param {string} query The query of the Anime
   * @param {IAnimeSearchOptions} options The options to use for searching
   */
  getAnimeQuerySearchUrl(
    url: string,
    query: string,
    options?: IAnimeSearchOptions
  ) {
    let result = url;
    const i = options;
    result += `?q=${query}`;
    if (!options?.sfw) {
      result += "";
    } else {
      result += "&sfw";
    }
    if (i?.page === undefined) {
      result += "";
    } else {
      result += `&page=${i?.page}`;
    }
    if (i?.limit === undefined) {
      result += "";
    } else {
      result += `&limit=${i.limit}`;
    }
    if (i?.genres === undefined) {
      result += "";
    } else {
      result += `&genres=${i.genres}`;
    }
    if (i?.type === undefined) {
      result += "";
    } else {
      result += `&type=${i.type}`;
    }
    if (i?.score === undefined) {
      result += "";
    } else {
      result += `&score=${i.score}`;
    }
    if (i?.min_score === undefined) {
      result += "";
    } else {
      result += `&min_score=${i.min_score}`;
    }
    if (i?.max_score === undefined) {
      result += "";
    } else {
      result += `&max_score=${i.max_score}`;
    }
    if (i?.status === undefined) {
      result += "";
    } else {
      result += `&status=${i.status}`;
    }
    if (i?.rating === undefined) {
      result += "";
    } else {
      result += `&rating=${i.rating}`;
    }
    if (i?.genres_exclude === undefined) {
      result += "";
    } else {
      result += `&genres_exclude=${i.genres_exclude}`;
    }
    if (i?.order_by === undefined) {
      result += "";
    } else {
      result += `&order_by=${i.order_by}`;
    }
    if (i?.sort === undefined) {
      result += "";
    } else {
      result += `&sort=${i.sort}`;
    }
    if (i?.letter === undefined) {
      result += "";
    } else {
      result += `&letter=${i.letter}`;
    }
    if (i?.producer === undefined) {
      result += "";
    } else {
      result += `&producer=${i.producer}`;
    }
    return result;
  }

  /**
   * Returns Manga query searching URL
   * @param {string} url The url of the API
   * @param {string} query The query of the Manga
   * @param {IMangaSearchOptions} options The options to use for searching
   */
  getMangaQuerySearchUrl(
    url: string,
    query: string,
    options?: IMangaSearchOptions
  ) {
    let result = url;
    const i = options;
    result += `?q=${query}`;
    if (!options?.sfw) {
      result += "";
    } else {
      result += "&sfw";
    }
    if (i?.page === undefined) {
      result += "";
    } else {
      result += `&page=${i?.page}}`;
    }
    if (i?.limit === undefined) {
      result += "";
    } else {
      result += `&limit=${i.limit}`;
    }
    if (i?.genres === undefined) {
      result += "";
    } else {
      result += `&genres=${i.genres}`;
    }
    if (i?.type === undefined) {
      result += "";
    } else {
      result += `&type=${i.type}`;
    }
    if (i?.score === undefined) {
      result += "";
    } else {
      result += `&score=${i.score}`;
    }
    if (i?.min_score === undefined) {
      result += "";
    } else {
      result += `&min_score=${i.min_score}`;
    }
    if (i?.max_score === undefined) {
      result += "";
    } else {
      result += `&max_score=${i.max_score}`;
    }
    if (i?.status === undefined) {
      result += "";
    } else {
      result += `&status=${i.status}`;
    }
    if (i?.genres_exclude === undefined) {
      result += "";
    } else {
      result += `&genres_exclude=${i.genres_exclude}`;
    }
    if (i?.order_by === undefined) {
      result += "";
    } else {
      result += `&order_by=${i.order_by}`;
    }
    if (i?.sort === undefined) {
      result += "";
    } else {
      result += `&sort=${i.sort}`;
    }
    if (i?.letter === undefined) {
      result += "";
    } else {
      result += `&letter=${i.letter}`;
    }
    if (i?.magazine === undefined) {
      result += "";
    } else {
      result += `&magazine=${i.magazine}`;
    }
    return result;
  }

  /**
   * Returns Character query searching URL
   * @param {string} url The url of the API
   * @param {string} query The query of the Character
   * @param {IAnimeSearchOptions} options The options to use for searching
   */
  getCharacterQuerySearchUrl(
    url: string,
    query: string,
    options?: ICharacterSearchOptions
  ) {
    let result = url;
    const i = options;
    result += `?q=${query}`;
    if (i?.page === undefined) {
      result += "";
    } else {
      result += `&page=${i.page}`;
    }
    if (i?.limit === undefined) {
      result += "";
    } else {
      result += `&limit=${i.limit}`;
    }
    if (i?.order_by === undefined) {
      result += "";
    } else {
      result += `&order_by=${i.order_by}`;
    }
    if (i?.sort === undefined) {
      result += "";
    } else {
      result += `&sort=${i.sort}`;
    }
    if (i?.letter === undefined) {
      result += "";
    } else {
      result += `&letter=${i.letter}`;
    }
    return result;
  }

  /**
   * Returns URL of the API according to the method
   * @param {TMethods} method The method to be used
   */
  getUrl(method: TMethods) {
    let result = "https://api.jikan.moe/v4/";
    result += method;
    return result;
  }
}
