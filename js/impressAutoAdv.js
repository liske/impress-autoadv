(function ( document, window ) {
    'use strict';
    
    document.addEventListener("impress:stepenter", function (event) {
	updateProgressbar(event);
    });

    function updateProgressbar(e) {
	console.log(e.target.id);
	console.log(e);
	var t = e.target.dataset["autoadv"] * 1000;
	if(t) {
	    window.setTimeout(function() {
		window.impress().next();
	    }, t);
	}
    }
})(document, window);
