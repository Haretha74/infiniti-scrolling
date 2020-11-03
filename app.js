
    fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
    .then(res => res.json())
    .then(data => {
        var pokeList = document.querySelector(".pokeList");
        data.results.forEach(function(result) {
            var li = document.createElement("li");
            li.innerText = result.name;
            pokeList.appendChild(li);
        })
    })
    var options = {
        threshold: [0.9]
    };
     function getNextTen(entries) {
         var {target, intersectionRatio, isIntersecting} = entries[0];
    
        if (intersectionRatio) {
             target.querySelector(".pokeList").style.opacity = "0";
            target.querySelector(".pokeList").style.transform = "translateX(-50%)";
         
    
    }   
  }
        
     var intObs = new IntersectionObserver(callback, options);
     intObs.observe(document.querySelector('body'));
        
        
    
