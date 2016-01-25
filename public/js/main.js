(function(){
	$(document).ready(function() {  
        $("html").niceScroll({
			cursoropacitymin: .5,
			cursorwidth: ".5em",
			cursorcolor: "#2ecc71",
			cursorborder: "1px solid #27ae60",
		});
    });
	
	window.onload = orientacion;
	window.addEventListener("resize", orientacion, true);
	
	function orientacion(){
		var heightMax = window.innerHeight;
		document.getElementById("home").style.height = heightMax + 'px';
	}
}());