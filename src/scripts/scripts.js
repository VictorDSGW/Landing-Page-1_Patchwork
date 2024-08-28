$(document).ready(function(){
  $('.btn-menu_mobile').on('click', function(){
    $('.menu_mobile').toggleClass('active');
    $('.btn-menu_mobile').find('i').toggleClass('fa-x');
  });
});
