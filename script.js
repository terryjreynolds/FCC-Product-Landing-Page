$("#contact").click(function() {
  $("html, body").animate({ scrollTop: $("#form").offset().top }, 800);
});

$("#whatWeDo").click(function() {
  const windowHeight = window.innerHeight;
  const height = 0.08 * windowHeight;
  $("html, body").animate(
    { scrollTop: $("#list-wrapper").offset().top - height },
    800
  );
});

$("#videoYouTube").click(function() {
  const windowHeight = window.innerHeight;
  const height = 0.08 * windowHeight;

  $("html, body").animate(
    { scrollTop: $("#video").offset().top - height },
    800
  );
});

$("#pricing").click(function() {
  const windowHeight = window.innerHeight;
  const height = 0.08 * windowHeight;

  $("html, body").animate({ scrollTop: $("#shop").offset().top - height }, 800);
});

$("#scrollToTop").click(function() {
  $("html, body").animate({ scrollTop: $("#form").offset().top }, 800);
});
