const config = {
    type: 'carousel',
    perView: 5,
    gap: 10,
    autoplay: 3500,
    breakpoints:{
        800:{perView:3},
        500:{perView:2} 
    }
}

new Glide('.glide', config).mount()