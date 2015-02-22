impress-autoadv
===============

Auto advanced selected slides in impress.js presentations.

Usage
-----

Include the script

	<script src="js/impressAutoAdv.js"></script>
	
just after including impress.js. To enable auto advance on a slide you
need to add a _data-autoadv_ attribute:

	<div class="step" data-x="1000" data-y="1000" data-autoadv="2">

The value is used as a timeout in seconds after which the slide will be
auto advanced. To advance immediately just use a not zero small value.
