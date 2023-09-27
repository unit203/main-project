$("#multiCarousel").carousel({
  interval: 10000,
});
$(".carousel .carousel-item").each(function () {
  let next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(":first");
  }
  next.children(":first-child").clone().appendTo($(this));

  for (let i = 0; i < 2; i++) {
    next = next.next();
    if (!next.length) {
      next = $(this).siblings(":first");
    }

    next.children(":first-child").clone().appendTo($(this));
  }
});











// $(document).ready(function(){
//   $('.your-class').slick({
//     setting-name: setting-value
//   });
// });