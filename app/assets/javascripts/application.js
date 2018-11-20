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


})