$(window).on("mousewheel", function() {
    var the_position = $(document).scrollTop();
    if (the_position > 400) 
      {
        $(".content").fadeTo("fast", 0, "swing");
      }
      else
      {
        $(".content").fadeTo("fast", 1, "swing");
      }
});