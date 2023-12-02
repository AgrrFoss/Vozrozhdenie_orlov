var sliderGallery = new Swiper('.photos', {
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    slidesPerView: 1.3,
    spaceBetween: 20,
    centeredSlides: true,
    centerInsufficientSlides: true,
    initialSlide: 2,
    loop: true,
    speed: 500,
    observed: true,
    observedParents: true,
    observedChidren: true,
    breakpoints: {
      900: {
        slidesPerView: 2.5,
        spaceBetween: 40,
        centeredSlides: true,
      },  
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
        centeredSlides: true,
        
      }
    }

    });

  const sliderFeedback = new Swiper ('.feedbacks-swiper', {
  
    slidesPerView: 1.1,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
    },
    
  })