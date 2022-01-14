<div align=center>
<a href="https://github.com/ShineiIchijo/Marika"><img src="https://wallpapermemory.com/uploads/816/marika-tachibana-wallpaper-hd-1920x1080-323797.jpg" alt="chitoge" border="0"></a>
[![NPM](https://img.shields.io/badge/Available%20On-NPM-lightgrey.svg?logo=npm&logoColor=339933&labelColor=white&style=flat-square)](https://npmjs.com/package/marika)

# Marika

A promise based API wrapper for the unofficial [MyAnimeList API](https://jikan.moe/)

</div>

---

## Installation

```sh
npm i marika

yarn add marika
```

## 🚀 Importing

```js
const marika = require("marika");
```

### 💙 Anime Methods

```js
await marika.getRandomAnime(); //will return random anime with info

await marika.getAnimeById(id); //will return the info for the given anime id

await marika.getAnimeCharacters(id); //will return an array of characters for the given anime id

await marika.getAnimeStaff(id); //will return staff list for the given anime id

await marika.getAnimeEpisodesById(id, episode); //will return the info for the given anime id and episode

await marika.getAnimeNews(id); //will return an array of anime news for the given id

await marika.getAnimePictures(id); //will return an array of pictures for the given anime id

await marika.getAnimeStatistics(id); //will return the stats for the given anime id

await marika.getAnimeRecommendations(id); //will return an array of recommendations for the given anime id

await marika.getAnimeMoreInfo(id); //will return more info for the given anime id

await marika.getTopAnime(); //will return an array for the ranking of anime in MyAnimeList
```

### 💚 Manga Methods

```js
await marika.getRandomManga(); //will return random manga with info

await marika.getMangaById(id); //will return the info of the given manga id

await marika.getMangaCharacters(id); //will return an array of characters for the given manga id

await marika.getMangaNews(id); //will return an array of manga news for the given id

await marika.getMangaPictures(id); //will return an array of pictures for the given manga id

await marika.getMangaStatistics(id); //will return the stats for the given manga id

await marika.getMangaMoreInfo(id); //will return more info for the given manga id

await marika.getMangaRecommendations(id); //will rerturn an array of recommendations for the given manga id

await marika.getTopManga(); //will return an array for ranking of manga in MyAnimeList
```

### 🤍 Character Methods

```js
await marika.getRandomCharacter(); //will return random anime character with info

await marika.getCharacterById(id); //will return the info for the given character id

await marika.getCharacterManga(id); //will return the manga for the given character id

await marika.getCharacterAnime(id); //will return the anime for the given character id

await marika.getCharacterVoiceActors(id); //will return an array of voice actors for the given character id

await marika.getCharacterPictures(id); //will return an array of pictures for the given character id

await marika.getTopCharacters(); //will return an array of ranking for characters in MyAnimeList
```
