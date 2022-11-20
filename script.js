const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc?api_key=e92c562473a1b2811265d470e02c6b93&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_URL =
  "https://www.themoviedb.org/search/movie?api_key=e92c562473a1b2811265d470e02c6b93&query=''";

// get initial movies
getMovies(API_URL);

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data.results);
}
