// DOM에 있는 요소를 가지고 와서 이벤트를 넣어주기

document.getElementById('movie-container').appendChild(card);
document.querySelector('#search-button').addEventListener('click', handleSearch);

// element 생성 후, 이벤트를 넣어주고 DOM 에 넣어주기

const card = document.createElement('div');
card.className = 'movie-card';
card.innerHTML = `
  <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
  <h3>${movie.title}</h3>
  <p>${movie.overview}</p>
  <span>Rating: ${movie.vote_average}</span>
`;
card.addEventListener('click', () => alert(`Movie ID: ${movie.id}`));
// 해당 카드는 이 시점부터 click 이벤트를 가지고 있습니다. 즉, 이 카드를 DOM 에 붙여넣어도 이벤트가 작동을 합니다. 
// 5주차까지 듣고 dom관련해서 알게되면 한번 해보기