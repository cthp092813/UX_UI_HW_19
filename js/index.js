$(window).on("mousewheel", function() {
  var the_position = $(document).scrollTop();
  if (the_position > 400) 
    {
      $(".content").fadeTo("fast", 0, "linear");
    }
    else
    {
      $(".content").fadeTo("fast", 1, "linear");
    }
});
