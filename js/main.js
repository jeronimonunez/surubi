// Main

$(document).ready(function($) {
	// Stuff to do as soon as the DOM is ready;
	$('.main').css('min-height', $('.main-menu').height());

	$('.open-panel').on('click', function(e) {
		e.preventDefault();

		$('.main').toggleClass('translate');
				
	});
});