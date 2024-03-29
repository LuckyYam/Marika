<div align=center>
<a href="https://github.com/LuckyYam/Marika"><img src="https://wallpapermemory.com/uploads/816/marika-tachibana-wallpaper-hd-1920x1080-323797.jpg" alt="I Love Chitoge more tbh" border="0"></a>

# Marika

[![NPM](https://img.shields.io/badge/Available%20On-NPM-lightgrey.svg?logo=npm&logoColor=339933&labelColor=white&style=flat-square)](https://www.npmjs.com/package/@shineiichijo/marika)

A promise based API wrapper for the unofficial [MyAnimeList API](https://docs.api.jikan.moe/)

[Documentation](https://luckyyam.github.io/Marika/)

</div>

---

## Installation

```sh
npm i @shineiichijo/marika

yarn add @shineiichijo/marika
```

## 🚀 Usage Examples

```ts
import { Marika } from '@shineiichijo/marika'

;(async () => {
    const { anime } = new Marika()
    await anime.getAnimeById(1)
    .then(console.log)
    .catch(console.error)
})()
```

```ts
import { Manga } from '@shineiichijo/marika'

;(async () => {
    const manga = new Manga()
    await manga.getMangaSearch({ q: 'Nisekoi', page: 1, genres: [22, 4], limit: 1 })
    .then(console.log)
    .catch(console.error)
})()
```

```ts
import { Marika, AnimeSeasons, AnimeTypes } from '@shineiichijo/marika'

;(async () => {
    const { seasons } = new Marika()
    await seasons.getSeason(2023, AnimeSeasons['FALL'], { sfw: true, filter: AnimeTypes['TV'] })
    .then(console.log)
    .catch(console.error)
})()
```

```ts
import { Characters } from '@shineiichijo/marika'

;(async () => {
    const characters = new Characters()
    await characters.getCharacterFullById(66597)
    .then(console.log)
    .catch(console.error)
})()
```

```ts
import { Marika, Days } from '@shineiichijo/marika'

;(async () => {
    const { schedules } = new Marika()
    await schedules.getSchedules({ filter: Days['MONDAY'] })
    .then(console.log)
    .catch(console.error)
})()
```