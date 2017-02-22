$(function(){
    console.log("page loaded");
    
    $('#heading1').click(function(){
        console.log("heading1 clicked");
    });
});
console.log("file loaded");

$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  3000);

