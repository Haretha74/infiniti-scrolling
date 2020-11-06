var imageObserver = new IntersectionObserver(function(entries) {

    if(entries[0].intersectionRatio <= 0) return; 
    observer.unobserve(entries[0].target);
    entries[0].target.src = entries[0].target.dataset.src;
    
}, {
    threshold: 1
});