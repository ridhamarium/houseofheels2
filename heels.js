(function() {
 
 var introEl = $('div.intro'),
	introHeadingH = introEl.find('h1').height(),
	window = $(window).height();
 
 introEl.css('padding', (windowH - introHeadingH)/2 + 'px 0');
$(document).on('scroll', function() {
	introEl.slideUp(1000, function() { $(document).off('scroll'); });
}); })();

// Get the button, and when the user clicks on it, execute myFunction
document.getElementById("myBtn").onclick = function() {myFunction()};

/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}