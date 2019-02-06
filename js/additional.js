$(function() {

  $(".bannerText h1").hover(
    function(){
      $(this).text("I'm Possible").animate({"font-size":"75px"},"slow");
    },
    function(){
      $(this).text("ImPossible").animate({"font-size":"50px"},"slow");;
    }
  );

});
