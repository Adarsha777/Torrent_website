import axios from "axios";

export function getMoviesByName(query) {
  console.log(query);
  return new Promise((resolve, reject) => {
    axios
      .get(`https://yts.mx/api/v2/list_movies.json?query_term=${query}`)
      .then((res) => {
        resolve(res?.data?.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
