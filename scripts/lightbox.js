$.fn.lightbox = function(){
	$(this).click(function(e){

		//Stop default action
		e.preventDefault();
	
		var image_href = $(this).attr('href');

		var text = $(this).attr("data-title");

		var lightbox = 
			'<div id="lightbox">' +
				'<div id="content">' +
					'<img src="' + image_href +'" class="active">' +
					'<p id="title">' + text + '</p>' +
				'</div>' +
			'</div>';

		$(lightbox).hide().appendTo('body').fadeIn(200);
		var lightbg = $('#lightbox');
		lightbg.click(function(){
			$(this).fadeOut(300, function(){
				$(this).remove();
			});

		}); // this makes the lightbox disappear when click background
	
		$(document).keyup(function(e){
			if (e.keyCode == 27) {
				lightbg.fadeOut(300, function(){
					$(this).remove();
				});
			}
		});

	});

}



