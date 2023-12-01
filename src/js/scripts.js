var sliderGallery = new Swiper('.photos', {
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    slidesPerView: 1.1,
    spaceBetween: 20,
    centeredSlides: true,
    centerInsufficientSlides: true,
    initialSlide: 1,
    loop: true,
    speed: 500,
    autoplay: {
      delay: 3000,
    },
    observed: true,
    observedParents: true,
    observedChidren: true,
    breakpoints: {
      900: {
        slidesPerView: 2.5,
        spaceBetween: 40,
        centeredSlides: true,
        centeredSlides: true,
      },  
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
        centeredSlides: true,
        centeredSlides: true,
        
      }
    }

    });

  const sliderFeedback = new Swiper ('.feedbacks-swiper', {
    slidesPerView: 1,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
    },
    loop: true,
    
  })