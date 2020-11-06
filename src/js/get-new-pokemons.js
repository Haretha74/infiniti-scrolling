function getNewPokemons(offset) {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`)
        .then(res => res.json())
        .then(data => {
            
            count = data.count;
    
            data.results.forEach(buildList);
            var lastChiled = document.querySelector(".pokeList li:last-child");
            observer.observe(lastChiled);
        });
    }