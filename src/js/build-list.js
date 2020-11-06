function buildList(result) {
    var clone = template.content.cloneNode(true);
    var name = clone.querySelector(".pokeName");
    var img = clone.querySelector('.pokeImg');
    name.innerText = result.name;

    getImage(result.url)
    .then(function(imageURL) {
        img.dataset.src = imageURL;
        imageObserver.observe(img);

    });
    
    pokeList.appendChild(clone);
}