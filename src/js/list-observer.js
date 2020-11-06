var observer = new IntersectionObserver(function(entries) {

    if(entries[0].intersectionRatio <= 0) return; 
    observer.unobserve(entries[0].target);
    offset = offset + 10;
    if(offset > count) return;
    getNewPokemons(offset);
}, {
    threshold: 1
});