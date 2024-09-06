$(document).ready(function(){
  $('.btn-menu_mobile').on('click', function(){
    $('.menu_mobile').toggleClass('active');
    $('.btn-menu_mobile').find('i').toggleClass('fa-x');
  });

  const sections = $('section');
  const navItems = $('.li');

  $(window).on('scroll', function(){
    const header = $('header');
    const scrollPosition = $(window).scrollTop() - header.outerHeight();

    let activeSectionIndex = 0;

    if (scrollPosition <= 0 ) {
      header.css('box-shadow', 'none');
    } else {
      header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
    }

    sections.each(function(i) {
      const section = $(this);
      const sectionTop = section.offset().top - 96;
      const sectionBottom = sectionTop+ section.outerHeight();
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        activeSectionIndex = i;
        return false;
      }
    })

    navItems.removeClass('active');
    $(navItems[activeSectionIndex]).addClass('active');
  });
  
  ScrollReveal().reveal('.cta', {
    origin: 'right',
    duration: 2500,
    distance: '50%',
  })

  ScrollReveal().reveal('.item', {
    origin: 'bottom',
    duration: 1000,
    distance: '10%',
  })

  ScrollReveal().reveal('#testimonial', {
    origin: 'right',
    duration: 1500,
    distance: '15%',
  })

  ScrollReveal().reveal('input, textarea', {
    origin: 'bottom',
    duration: 2000,
    distance: '20%',
  })

});
