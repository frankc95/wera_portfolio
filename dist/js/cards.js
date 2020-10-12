// portfolio
$(".card ul li a").click(function () {
  var itemID = $(this).attr("href");
  $(".card ul").addClass("item_open");
  $(".closee").addClass("item_open");
  $(itemID).addClass("item_open");
  return false;
});
$(".closee").click(function () {
  $(".port, .card ul, .closee").removeClass("item_open");
  return false;
});
