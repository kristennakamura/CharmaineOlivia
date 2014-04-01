$(document).ready(function() {

	$("#navbutton").click(function() {
		$("nav ul").slideToggle();
	});
	
	$('.lightbox_trigger').lightbox();
});