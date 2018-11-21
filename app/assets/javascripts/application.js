// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
//= require jquery3
//= require popper

$(document).ready(function() {

	//A l'ouverture
	$('.category-todo').hide(); //Hide all tabs
	$('.tab-link:first').addClass('active'); //Activate the first tab
	$(".category-todo:first").fadeIn(); //Display first category
	
	//Au clic sur un tab
	$('.tab-link').on('click',function(e) {
		e.preventDefault(); //Prevent from the page to refresh or any link to open
		$('.active').removeClass('active'); //Desactivate the previous tab
 		$(this).addClass('active'); //Activate the right tab
		$('.category-todo').hide(); //Hide all tabs
	 	$("#category-todo-"+e.target.id).fadeIn(); //Display the right category
	})

	//Au clic sur l'avatar
	$('.avatar').on('click',function(e) {
		e.preventDefault(); //Prevent from the page to refresh or any link to open
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$('.dropdown-menu').hide();
		}
		else {
			$('.dropdown-menu').show();
			$(this).addClass('active');
		}
	})

	//Au clic sur toggler
	$('.navbar-toggler').on('click',function(e) {
		e.preventDefault(); //Prevent from the page to refresh or any link to open
		if ($('.collapse').hasClass('active')) {
			$('.collapse').removeClass('active');
			$('.collapse').hide();
		}
		else {
			$('.collapse').show();
			$('.collapse').addClass('active');
		}
	})


    //Carousel-image
    $('.carousel-image').hide(); //Hide all images

	function indexUpdate(position) {
		$('.active-image img').attr("src", 'https://png.pngtree.com/svg/20170826/carousel_dot_428068.png');
		$('.active-image').removeClass('active-image');
		$('.carousel-dot:eq('+position+')').addClass('active-image');
		$('.active-image img').attr("src", 'https://static.thenounproject.com/png/120101-200.png');
	}

	function newActiveImage(position) {
		indexUpdate(position);
		$('.carousel-image').hide(); //Hide all images
		$('#'+position+'.carousel-image').fadeIn();
	}
	
	//A l'ouverture de la page
    newActiveImage(0);

    //Clic sur un dot
	$('.carousel-dot').click(function(e) {
		e.preventDefault(); //Prevent from the page to refresh or any link to open
    	newActiveImage(e.currentTarget.id);
	})

	const imagesCount = Number($('.carousel-image:last').attr('id'));

	//Clic sur previous
	$('#carousel-previous').click(function(e) {
		const activePosition = Number($('.active-image').attr('id'));

		e.preventDefault(); //Prevent from the page to refresh or any link to open

		if (activePosition === 0 ) {
	    	newActiveImage(imagesCount);
		}
		else {
			newActiveImage(activePosition-1);
		}
	})

	//Clic sur next
	$('#carousel-next').click(function(e) {
		const activePosition = Number($('.active-image').attr('id'));

		e.preventDefault(); //Prevent from the page to refresh or any link to open

		if (activePosition === imagesCount ) {
	    	newActiveImage(0);
		}
		else {
			newActiveImage(activePosition+1);
		}
	})

	//Modale
/*   $("#signup-link").on('click',function(e) {
    	e.preventDefault();
      	$('#signup-modal').modal('show');
	});
    
    $("#login-link").on('click',function(e) {
    	e.preventDefault();
      	$('#login-modal').modal('show');
	});
    
    $("div:not('.modal')").on('click',function(e) {
    	e.preventDefault();
      	$('.modal').modal('hide');
    });
*/

})