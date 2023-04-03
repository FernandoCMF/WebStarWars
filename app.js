window.onload = function () {
  async function fetchAPI(url) {
    const response = await fetch(url);
    const jsonBody = await response.json();
    return jsonBody;
  }

  const resquisicao = fetchAPI('https://swapi.dev/api/films');

  resquisicao.then((response) => {
    let filmesLista = document.querySelector('#filmes-lista');
    console.log(response.results.title);

    response.map((item) => {
      const lista = document.createElement('li');

      lista.innerHTML = item.results.title;
      filmesLista.appendChild(lista);
    });
  });
};
