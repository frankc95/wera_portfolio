// portfolio
$('.card ul li a').click(function () {
  var itemID = $(this).attr('href');
  $('.card ul').addClass('item_open');
  $('.menu-btn').addClass('bt-none');
  $('.closee').addClass('item_open');
  $('body').addClass('scroll-none');
  $(itemID).addClass('item_open');
  return false;
});

$('.closee').click(function () {
  $('.port, .card ul, .closee').removeClass('item_open');
  $('.menu-btn').removeClass('bt-none');
  $('body').removeClass('scroll-none');
  return false;
});
