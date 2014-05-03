/**
 * App
 */

var app = {
	fn: function() {

        $('.hero-head').bind('click', function() {
            $(this).text('');
        });
    }
};

$(document).ready(app.fn);
