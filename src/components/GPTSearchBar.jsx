import React, { useRef } from "react";
import { BG_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/langconstant";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constant";
import { addGPTMovieResult } from "../slice/gptSlice";
const GPTSearchBar = () => {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.gpt.MovieNames);
  console.log("Name", data);
  const userLang = useSelector((store) => store.config?.lang);
  const searchText = useRef(null);
  //search movie in TMDB
  const searchMovieTMDB = async (movieName) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`,
        API_OPTIONS,
      );
      const data = await response.json();
      return data.results;
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(searchText.current.value);
    // Make an API Call
    const getQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query" +
      searchText.current.value +
      " only give me name of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Prince, Dilwale";
    try {
      // const gptResults = await openai.chat.completions.create({
      //   model: "gpt-3.5-turbo",
      //   messages: [{ role: "user", content: getQuery }],
      // });
      const mockGPTResults = [
        {
          index: 0,
          message: {
            role: "assistant",
            content:
              "Fury Road, John Wick, Die Hard, The Dark Knight, Gladiator",
          },
          finish_reason: "stop",
        },
      ];
      const gptMovies = mockGPTResults[0]?.message?.content
        .split(",")
        .map((movie) => movie.trim());
      //for each moive it will search TMDB API
      const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
      //[Promise,Promise,Promise,Promise,Promise] // Promise will take some time to fetch data.result so we put await
      // Once all promise get settled and resolved then only we will get data
      const tmdbResults = await Promise.all(promiseArray);
      console.log(tmdbResults);
      dispatch(
        addGPTMovieResult({ movieResults: tmdbResults, movieNames: gptMovies }),
      );
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src={BG_URL}
        alt="Background"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 w-full">
        {/* Heading */}
        <h1 className="text-white text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
          Unlimited Movies, TV Shows & More
        </h1>

        <p className="text-gray-300 text-lg md:text-xl mb-8">
          Discover your next favorite movie with AI search
        </p>

        {/* Search Form */}
        <form
          onSubmit={handleSubmit}
          className="mx-auto w-full md:w-2/3 lg:w-1/2 bg-black/60 backdrop-blur-xl border border-gray-700 rounded-2xl p-3 md:p-4 shadow-[0_8px_32px_rgba(0,0,0,0.7)] flex flex-col md:flex-row gap-4"
        >
          <input
            ref={searchText}
            type="text"
            placeholder={lang[userLang].gptSearchPlaceholder}
            className="flex-1 px-5 py-4 rounded-xl bg-gray-900/80 text-white placeholder-gray-400 border border-gray-700 outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition duration-300"
          />

          <button className="px-8 py-4 bg-red-600 hover:bg-red-700 active:scale-95 text-white font-bold rounded-xl transition duration-300 shadow-lg">
            {lang[userLang].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GPTSearchBar;

/*
Yes 👍

Here:

```js id="wk9vxg"
en: {
  search: "Search",
  gptSearchPlaceholder: "What would you like to watch today?",
}
```

`en` is the **key** of the object.

---

## Full Object

```js id="0td7uu"
const lang = {
  en: {
    search: "Search",
    gptSearchPlaceholder: "What would you like to watch today?",
  },

  hindi: {
    search: "खोजें",
  },
};
```

---

## Structure

```js id="stj9dx"
lang = {
   key : value
}
```

So:

| Key       | Value                      |
| --------- | -------------------------- |
| `"en"`    | `{ search: "Search" ... }` |
| `"hindi"` | `{ search: "खोजें" }`      |

---

## Accessing Static Key

```js id="56ebn5"
lang.en.search
```

Output:

```js id="u0f0uk"
"Search"
```

Because:

```js id="uhg0cf"
lang.en
```

returns:

```js id="0tvht4"
{
  search: "Search",
  gptSearchPlaceholder: "What would you like to watch today?"
}
```

---

## Accessing Dynamic Key

If:

```js id="ehcbm5"
const userLang = "en";
```

then:

```js id="2pdd68"
lang[userLang]
```

becomes:

```js id="jzn9hh"
lang["en"]
```

So output is:

```js id="8t95mx"
{
  search: "Search",
  gptSearchPlaceholder: "What would you like to watch today?"
}
```

---

## Why `lang.userLang` Doesn't Work?

```js id="s0wdce"
lang.userLang
```

JavaScript looks for:

```js id="wzmnv9"
lang = {
  userLang: ...
}
```

But there is NO key called `"userLang"`.

Only:

```js id="7o4mga"
"en"
"hindi"
"spanish"
```

exist.

So we use:

```js id="2dqdk8"
lang[userLang]
```

to dynamically access keys.
*/
