$(document).ready(function(){
    $("h1").click(function(){
      $(this).hide();
    });
  });

 $("button").click(function(){
    $(this).parent("div").find("h1").show()
 })