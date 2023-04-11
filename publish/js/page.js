$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
        keyboardScrolling:true,
        sectionsColor: ['ransparent','#fff', '#ccc','#fff'],
        scrollingSpeed: 500,
        easingcss3: 'ease',
	});

	//methods
	$.fn.fullpage.setAllowScrolling(true);
});