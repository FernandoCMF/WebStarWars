window.onload = function () {
  async function fetchAPI(url) {
    const response = await fetch(url);
    const jsonBody = await response.json();
    return jsonBody;
  }

  const resquisicao = fetchAPI('https://swapi.dev/api/films');

  resquisicao.then((response) => {
    console.log(response.results);
    const filmesLista = document.getElementById('filmes-lista');

    response.results.map((data) => {
      const createLi = document.createElement('li');
      const createCard = document.createElement('div');

      createLi.innerHTML = data.title;
      createLi.setAttribute('class', 'filmesLista');

      createCard.setAttribute('class', 'cardFilme');

      createCard.appendChild(createLi);
      filmesLista.appendChild(createCard);
    });
  });
};
