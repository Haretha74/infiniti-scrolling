"use strict";

var offset = 0;
var count;

function getImage(url) {
  return fetch(url).then(function (response) {
    return response.json();
  }).then(function (data) {
    return data.sprites.front_default;
  });
}

function getNewPokemons(offset) {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=".concat(offset)).then(function (res) {
    return res.json();
  }).then(function (data) {
    var template = document.getElementById("template");
    var pokeList = document.querySelector(".pokeList");
    count = data.count;
    data.results.forEach(function (result) {
      var clone = template.content.cloneNode(true);
      var name = clone.querySelector(".pokeName");
      var img = clone.querySelector('.pokeImg');
      name.innerText = result.name;
      getImage(result.url).then(function (imageURL) {
        img.dataset.src = imageURL;
        imageObserver.observe(img);
      });
      pokeList.appendChild(clone);
    });
    var lastChiled = document.querySelector(".pokeList li:last-child");
    observer.observe(lastChiled);
  });
}

var observer = new IntersectionObserver(function (entries) {
  if (entries[0].intersectionRatio <= 0) return;
  observer.unobserve(entries[0].target);
  offset = offset + 10;
  if (offset > count) return;
  getNewPokemons(offset);
}, {
  threshold: 1
});
var imageObserver = new IntersectionObserver(function (entries) {
  if (entries[0].intersectionRatio <= 0) return;
  observer.unobserve(entries[0].target);
  entries[0].target.src = entries[0].target.dataset.src;
}, {
  threshold: 1
});
getNewPokemons(offset);
//# sourceMappingURL=app.js.map
