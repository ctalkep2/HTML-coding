$( document ).ready(function (){

	$( ".project" ).addClass( "visible" );

	$( "[data-btn]" ).click(function() {
	var state_class = "." + this.getAttribute("data-btn");
	var state_class_not = ".project:not(" + state_class + ")";

		$( ".project" ).removeClass( "proj_hide" );

	if ( $( state_class_not ).css( "display" ) !== "none" ) {
	  $( state_class_not ).removeClass( "visible" );
	  $( state_class_not ).addClass( "proj_hide" );
	  $( state_class ).addClass( "visible" );
	} else if ( $( state_class ).css( "display" ) === "none" ) {
	  $( state_class_not ).removeClass( "visible" );
	  $( state_class_not ).addClass( "proj_hide" );
	  $( state_class ).addClass( "visible" );
	}   
	});

	$( "[data-all]" ).click(function() {
		$( ".project" ).removeClass( "proj_hide" ); 
	$( ".project" ).addClass( "visible" );
	});

	$( "[data-hide]" ).click(function() {
	$( ".project" ).removeClass( "visible" ); 
	$( ".project" ).addClass( "proj_hide" );  
	});

	$( ".button_project" ).click(function () {
	if ( $( ".button_project" ).hasClass( "active" ) ) {
	  $( ".button_project" ).removeClass( "active" );
	}
	$( this ).toggleClass( "active" );
  });
  
});