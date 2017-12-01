$(document).ready(function() {

	//clock
	var tickSound = new Audio("sounds/tick.wav");
	tickSound.volume = 0.4;

	setClock();
	setInterval(setClock, 1000);

	function setClock(){
		var date = new Date();

		var secDeg = (date.getSeconds()/60)*360;
		var minDeg = (date.getMinutes()/60)*360;
		var hourDeg = (date.getHours()/12)*360;

		$('#sec').css('transform', 'rotate(' + secDeg + 'deg)');
		$('#min').css('transform', 'rotate(' + minDeg + 'deg)');
		$('#hour').css('transform', 'rotate(' + hourDeg +'deg)');
		tickSound.play();
	}

	//background parallax
	var movementStrength = 25;
	var height = movementStrength / $(window).height();
	var width = movementStrength / $(window).width();

	$(".page").mousemove(function(e){
	    var pageX = e.pageX - ($(window).width() / 2);
	    var pageY = e.pageY - ($(window).height() / 2);
	    var newvalueX = width * pageX * -1 - 25;
	    var newvalueY = height * pageY * -1 - 50;
	    $('.page').css("background-position", newvalueX+"px     "+newvalueY+"px");
	});
});


//old - without jquery (add defet to use)
/*
clock

var tickSound = new Audio("sounds/tick.wav");
tickSound.volume = 0.4;


setClock();
setInterval(setClock, 1000);

function setClock(){
	var date = new Date();

	var secDeg = (date.getSeconds()/60)*360;
	var minDeg = (date.getMinutes()/60)*360;
	var hourDeg = (date.getHours()/12)*360;


	document.querySelector('#sec').style.transform = 'rotate(' + secDeg + 'deg)';
	document.querySelector('#min').style.transform = 'rotate(' + minDeg + 'deg)';
	document.querySelector('#hour').style.transform = 'rotate(' + hourDeg + 'deg)';
	tickSound.play();
}
*/

