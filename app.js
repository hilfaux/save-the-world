const sr = ScrollReveal({
    origin:'top',
    distance:'30px',
    duration:2000,
    reset:true
});

sr.reveal(`.hero-text-content, .content, .image, .content-container`, {
    interval:200
})