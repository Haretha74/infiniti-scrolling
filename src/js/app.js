    let offset = 0;
    let count;
    function getNewPokemons(offset) {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`)
    .then(res => res.json())
    .then(data => {
        var template = document.getElementById("template");
        var pokeList = document.querySelector(".pokeList");
        count = data.count;

        data.results.forEach(function(result) {
            var clone = template.content.cloneNode(true);
            clone.querySelector("li").innerText = result.name;
            
            pokeList.appendChild(clone);
        });
        var lastChiled = document.querySelector(".pokeList li:last-child");
        observer.observe(lastChiled);
    });
}
var observer = new IntersectionObserver(function(entries) {

    if(entries[0].intersectionRatio <= 0) return; 
    observer.unobserve(entries[0].target);
    offset = offset + 10;
    if(offset > count) return;
    getNewPokemons(offset);
}, {
    threshold: 1
});
getNewPokemons(offset);
    