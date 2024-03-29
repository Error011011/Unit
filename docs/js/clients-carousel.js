$(document).ready(function(){
    // находим блок с слайдерами
    const owl = $('#clients-slider');
    // запускаем карусель
    owl.owlCarousel({ 
        items: 1,
        loop: true
    });

    // подключаем кнопки влево-вправо
    const prev = $('#sliderPrev');
    const next = $('#sliderNext');

    prev.click(function() {
        owl.trigger('prev.owl.carousel');
    })

    next.click(function() {
        owl.trigger('next.owl.carousel');
    })
  });
