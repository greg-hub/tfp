var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

// add image to overlay
$overlay.append($image);

//add overlay
$("body").append($overlay);


  // A caption
$overlay.append($caption);


//1. capture the click event on a link to an image
$("#imageGallery a").click(function(event){
  event.preventDefault();
 var imageLocation = $(this).attr("href");
  
  //1.2 update overlay with the image linked in the link

 $image.attr("src", imageLocation); 
  
  
  //1.1 show the overlay.
   $overlay.show();
 
  //1.3 get child's alt altbute and set caption
var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
  
  
  
  });

//3.when overlay clicked
$overlay.click(function(){
  //3.1 hide overlay
  $overlay.hide();
});
