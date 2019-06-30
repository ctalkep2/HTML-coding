var slides = document.querySelectorAll('.slides .slide');
var dots = document.querySelectorAll('.one_dot');
var prevButton = document.getElementById('prev');
var nextButton = document.getElementById('next');
var dot_1 = document.getElementById('dot_1');
var dot_2 = document.getElementById('dot_2');
var dot_3 = document.getElementById('dot_3');
var currentSlide = 0;
var timeContr = true;

function nextSlide(b) {

	if (timeContr === true) {
	
		direction(b);

		if (slides[currentSlide-1] === undefined) {
	  		slides[currentSlide+1].className = 'slide left';  		
	  		slides[slides.length-1].className = 'slide right';

	  	} else if (slides[currentSlide+1] !== undefined) {
			slides[currentSlide+1].className = 'slide left';
			slides[currentSlide-1].className = 'slide right';
			
	  	} else {
	  		slides[0].className = 'slide left';  		
	  		slides[currentSlide-1].className = 'slide right';
	  	} 

		for (var i = 0; i < dots.length; i++) {
			if (currentSlide !== i) {
				dots[i].className = 'one_dot';
			}
		}

		dots[currentSlide].className = 'one_dot dot_active';
	  	slides[currentSlide].className = 'slide showing';

	  	timeContr = false;

	  	setTimeout(timer, 1000);

  	}

}

function direction(b){
	var bool = b;

	if (bool === undefined) {
		bool = true;
	}

	if (bool === true) {
		currentSlide = (currentSlide + 1)%slides.length;
	} else {
		if (currentSlide <= 0) {
		    currentSlide = slides.length - 1;
		} else {
		  currentSlide = (currentSlide - 1)%slides.length;
		}    
	}

}

function change_slide_dots(dot) {

	if (currentSlide === slides.length-1 && dot === 0) {

		change_slide(true);

	} else if (currentSlide === 0 && dot === 2) {

		change_slide(false);

	} else if (currentSlide < dot) {

		change_slide(true);

	}else if (currentSlide > dot) {

		change_slide(false);

	}

}

function change_slide(bool) {

	if (bool === true) {
		var left = document.getElementsByClassName('left');
		left[0].className = "slide left";

		nextSlide(true);

		left = document.getElementsByClassName('left');
		left[0].className = "slide left hide";
	} else {
		var right = document.getElementsByClassName('right');
		right[0].className = "slide right";

		nextSlide(false);

		right = document.getElementsByClassName('right');
		right[0].className = "slide right hide";
	}

}

function timer() {

	timeContr = true;

}

nextButton.onclick = function() {
	
	change_slide(true);

};

prevButton.onclick = function() {

	change_slide(false);

};

dot_1.onclick = function() {

	change_slide_dots(0);

};

dot_2.onclick = function() {

	change_slide_dots(1);

};

dot_3.onclick = function() {

	change_slide_dots(2);

};