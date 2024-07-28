
const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: 
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZDNjYjM2MzlhMDUzZWY2YzBjZDZiODQyMGY5MTc2MSIsIm5iZiI6MTcyMjEzNzk1Mi45NTExNjUsInN1YiI6IjY2YTViYWVlOWMyZGZiZWM5MzMwMjIzZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-ViB8sOJGi2FNCe45N4I4jWvQV5Z147MwjuJ_QwsU1M"
    }
  };
  
  fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

    function hey() {
      alert('영화id : ')
    }