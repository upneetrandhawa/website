$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 700, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
// 	$(function() {
// 		$(window).scroll(function(){
//      var pgurl = window.location.href.substr(window.location.href
// .lastIndexOf("#")+0);
//      $("li a").each(function(){
//           if($(this).attr("href") == pgurl || $(this).attr("href") == '' )
//           $(this).addClass("active");
//      });
//  });
// });
$(document).ready(function(){
	var pgurl = '';
	$(window).scroll(function(){
		 pgurl = window.location.href.substr(window.location.href
.lastIndexOf("#")+0);
		if (pgurl == '#Home' || pgurl == '#Projects' || pgurl == '#Contact')
		$('.nav').css('background-color', 'black');
	});
});
// 	(document).ready(function(){       
//    // var current_color = "rgb(220, 20, 60)";
//    $(document).scroll(function() { 
//    // var current_color = $(this).css('background-color');
//    if ($(this).attr('href') == '#Home' || $(this).attr('href') == '#Projects' || $(this).attr('href') == '#Contact')
//         $('.nav').css('background-color', 'white'); //go
//     else {
//     	$('.nav').css('background-color', 'black');
//     }
//       // if(current_color == 'white' || current_color == 'rgb(255, 255, 255)') {
//       //     $('.nav').css('background-color', 'black');
//       //  } else {
//       //     $('.nav').css('background-color', 'white');
//       //  }
//    });
// });
