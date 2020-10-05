// portfolio
$(".card ul li a").click(function () {
  var itemID = $(this).attr("href");
  $(".card ul").addClass("item_open");
  $(itemID).addClass("item_open");
  return false;
});
$(".close").click(function () {
  $(".port, .card ul").removeClass("item_open");
  return false;
});
