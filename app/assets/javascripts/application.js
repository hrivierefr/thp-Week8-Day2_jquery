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
		if ($(this).hasClass('dropping-down')) {
			$(this).removeClass('dropping-down');
			$('.dropdown-menu').hide();
		}
		else {
			$('.dropdown-menu').show();
			$(this).addClass('dropping-down');
		}
	})

	//Au clic sur toggler
	$('.navbar-toggler').on('click',function(e) {
		e.preventDefault(); //Prevent from the page to refresh or any link to open
		if ($('.collapse').hasClass('dropping-down')) {
			$('.collapse').removeClass('dropping-down');
			$('.collapse').hide();
		}
		else {
			$('.collapse').show();
			$('.collapse').addClass('dropping-down');
		}
	})


    //Carousel-image
    $('.carousel-image').hide(); //Hide all images

	const imagesCount = Number($('.carousel-image:last').attr('id'));
	let activePosition ;

	function indexUpdate(position) {
		$('.active-image img').attr("src", 'https://png.pngtree.com/svg/20170826/carousel_dot_428068.png');
		$('.active-image').removeClass('active-image');
		$('.carousel-dot:eq('+position+')').addClass('active-image');
		$('.active-image img').attr("src", 'https://static.thenounproject.com/png/120101-200.png');
	}

	function newActiveImage(position) {
		if (position > imagesCount) {
			newActiveImage(0);
		}
		else if (position < 0) {
			newActiveImage(imagesCount);
		}
		else {
			indexUpdate(position);
			$('.carousel-image').hide(); //Hide all images
			$('#'+position+'.carousel-image').fadeIn();
			activePosition = Number(position);
		}
	}
	
	//A l'ouverture de la page
    newActiveImage(0);

    //Clic sur un dot
	$('.carousel-dot').click(function(e) {
		e.preventDefault(); //Prevent from the page to refresh or any link to open
    	newActiveImage(e.currentTarget.id);
	})

	//Clic sur previous
	$('#carousel-previous').click(function(e) {
		e.preventDefault(); //Prevent from the page to refresh or any link to open
		newActiveImage(activePosition-1);
	})

	//Clic sur next
	$('#carousel-next').click(function(e) {
		e.preventDefault(); //Prevent from the page to refresh or any link to open
		newActiveImage(activePosition+1);
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
	function displayMail(id) {
		$('.email-displayed').removeClass('email-displayed');
    	$('.email-view').hide();
    	$('.default-text').hide();
		$('#'+id+'.inbox-mail').addClass('email-displayed');
		$('#'+id+'.inbox-mail').removeClass('unread');
		$('#'+id+'.email-view').fadeIn();
	}

	displayMail($('.inbox-mail:first').attr('id'));

	$('.inbox-mail').click(function(e) {
		e.preventDefault(); //Prevent from the page to refresh or any link to open
    	displayMail(e.target.id);
    })

})