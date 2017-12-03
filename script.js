 
$(function(){
   
  $(window).on('beforeunload', function(){
    
    $(window).scrollTop(0);
  });
  
  
  $(window).scroll(function() {
   if($(document).scrollTop() > 200){
/*$("#header").animate({'background-color': '#A5243D'});
     $("#site-name").animate({'color': "white"});
          $(".nav-menu a").animate({'color': "white"});
          */ 
     
$("#header").addClass("testings");
      
  $(".nav-menu").addClass("nav-menu1");
 $("ul.sub-menu a").css("color", "black");
   }else{
     $("#header").removeClass("testings");
     $(".nav-menu").removeClass("nav-menu1");
   }
    
    
  });
  
  
  
  
 $("#header").load("header.html"); 
  $("footer").load("footer.html"); 

});



 