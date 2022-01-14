const { get } = require("axios");
const url = "https://api.jikan.moe/v4";

module.exports = {
  getRandomCharacter,
  getRandomAnime,
  getRandomManga,
  getAnimeById,
  getAnimeCharacters,
  getAnimeStaff,
  getAnimeEpisodesById,
  getAnimeNews,
  getAnimePictures,
  getAnimeStatistics,
  getAnimeRecommendations,
  getAnimeMoreInfo,
  getCharacterById,
  getCharacterManga,
  getCharacterAnime,
  getCharacterVoiceActors,
  getCharacterPictures,
  getMangaById,
  getMangaCharacters,
  getMangaNews,
  getMangaPictures,
  getMangaStatistics,
  getMangaMoreInfo,
  getMangaRecommendations,
  getTopAnime,
  getTopManga,
  getTopCharacters,
};

async function getRandomCharacter() {
  try {
    const { data } = await get(`${url}/random/characters`);
    return data.data;
  } catch (error) {
    return error;
  }
}

async function getRandomAnime() {
  try {
    const { data } = await get(`${url}/random/anime`);
    return data.data;
  } catch (error) {
    return error;
  }
}

async function getRandomManga() {
  try {
    const { data } = await get(`${url}/random/manga`);
    return data.data;
  } catch (error) {
    return error;
  }
}

async function getAnimeById(id) {
  try {
    const { data } = await get(`${url}/anime/${id}`);
    return data.data;
  } catch (error) {
    throw new Error(`Make sure you have entered a valid id`);
  }
}

async function getAnimeCharacters(id) {
  try {
    const { data } = await get(`${url}/anime/${id}/characters`);
    return data.data;
  } catch (error) {
    throw new Error(`Make sure you have entered a valid id`);
  }
}
async function getAnimeStaff(id) {
  try {
    const { data } = await get(`${url}/anime/${id}/staff`);
    return data.data;
  } catch (error) {
    throw new Error(`Make sure you have entered a valid id`);
  }
}
async function getAnimeEpisodesById(id, episode) {
  try {
    const { data } = await get(`${url}/anime/${id}/episodes/${episode}`);
    return data.data;
  } catch (error) {
    throw new Error(
      `Make sure you have entered a valid id and episode of the anime`
    );
  }
}
async function getAnimeNews(id) {
  try {
    const { data } = await get(`${url}/anime/${id}/news`);
    return data.data;
  } catch (error) {
    throw new Error(`Make sure you have entered a valid id`);
  }
}

async function getAnimePictures(id) {
  try {
    const { data } = await get(`${url}/anime/${id}/pictures`);
    return data.data;
  } catch (error) {
    throw new Error(`Make sure you have entered a valid id`);
  }
}

async function getAnimeStatistics(id) {
  try {
    const { data } = await get(`${url}/anime/${id}/statistics`);
    return data.data;
  } catch (error) {
    throw new Error(`Make sure you have entered a valid id`);
  }
}

async function getAnimeRecommendations(id) {
  try {
    const { data } = await get(`${url}/anime/${id}/recommendations`);
    return data.data;
  } catch (error) {
    throw new Error(`Make sure you have entered a valid id`);
  }
}

async function getAnimeMoreInfo(id) {
  try {
    const { data } = await get(`${url}/anime/${id}/moreinfo`);
    return data.data;
  } catch (error) {
    throw new Error(`Make sure you have entered a valid id`);
  }
}

async function getCharacterById(id) {
  try {
    const { data } = await get(`${url}/characters/${id}`);
    return data.data;
  } catch (error) {
    throw new Error(`Make sure you have entered a valid id`);
  }
}

async function getCharacterManga(id) {
  try {
    const { data } = await get(`${url}/characters/${id}/manga`);
    return data.data;
  } catch (error) {
    throw new Error(`Make sure you have entered a valid id`);
  }
}

async function getCharacterAnime(id) {
  try {
    const { data } = await get(`${url}/characters/${id}/anime`);
    return data.data;
  } catch (error) {
    throw new Error(`Make sure you have entered a valid id`);
  }
}

async function getCharacterVoiceActors(id) {
  try {
    const { data } = await get(`${url}/characters/${id}/voices`);
    return data.data;
  } catch (error) {
    throw new Error(`Make sure you have entered a valid id`);
  }
}

async function getCharacterPictures(id) {
  try {
    const { data } = await get(`${url}/characters/${id}/pictures`);
    return data.data;
  } catch (error) {
    throw new Error(`Make sure you have entered a valid id`);
  }
}

async function getMangaById(id) {
  try {
    const { data } = await get(`${url}/manga/${id}`);
    return data.data;
  } catch (error) {
    throw new Error(`Make sure you have entered a valid id`);
  }
}
async function getMangaCharacters(id) {
  try {
    const { data } = await get(`${url}/manga/${id}/characters`);
    return data.data;
  } catch (error) {
    throw new Error(`Make sure you have entered a valid id`);
  }
}

async function getMangaNews(id) {
  try {
    const { data } = await get(`${url}/manga/${id}/news`);
    return data.data;
  } catch (error) {
    throw new Error(`Make sure you have entered a valid id`);
  }
}

async function getMangaPictures(id) {
  try {
    const { data } = await get(`${url}/manga/${id}/pictures`);
    return data.data;
  } catch (error) {
    throw new Error(`Make sure you have entered a valid id`);
  }
}

async function getMangaStatistics(id) {
  try {
    const { data } = await get(`${url}/manga/${id}/statistics`);
    return data.data;
  } catch (error) {
    throw new Error(`Make sure you have entered a valid id`);
  }
}

async function getMangaMoreInfo(id) {
  try {
    const { data } = await get(`${url}/manga/${id}/moreinfo`);
    return data.data;
  } catch (error) {
    throw new Error(`Make sure you have entered a valid id`);
  }
}

async function getMangaRecommendations(id) {
  try {
    const { data } = await get(`${url}/manga/${id}/recommendations`);
    return data.data;
  } catch (error) {
    throw new Error(`Make sure you have entered a valid id`);
  }
}

async function getTopAnime() {
  try {
    const { data } = await get(`${url}/top/anime`);
    return data.data;
  } catch (error) {
    return error;
  }
}

async function getTopManga() {
  try {
    const { data } = await get(`${url}/top/manga`);
    return data.data;
  } catch (error) {
    return error;
  }
}

async function getTopCharacters() {
  try {
    const { data } = await get(`${url}/top/characters`);
    return data.data;
  } catch (error) {
    return error;
  }
}
