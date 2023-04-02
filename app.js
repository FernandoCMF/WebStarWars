window.onload = function () {
  fetch('https://swapi.dev/api/films')
    .then(async (response) => {
      response.json();
    })
    .then((data) => {
      // Para cada item do objeto JavaScript, cria um elemento HTML e adiciona-o à lista
      data.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item.title;
        lista.appendChild(li);
      });
    })
    .catch((error) => console.error(error));
};
