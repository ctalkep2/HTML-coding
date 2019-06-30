window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;

  if ( scrolled > 300 ) {
  	$( ".return_btn" ).removeClass( "hide" );
  } else if ( scrolled < 300 ) {
  	$( ".return_btn" ).addClass( "hide" );
  }

}

$("#toggle").click(function(){
	$(".nav_mobile").toggleClass("hidde_mnu");
});

function action() {
	window.open("#self", "_self");
}

function logo_act() {
	window.open("index.html", "_self");
}

function return_btn() {
	window.open("#head", "_self");
}