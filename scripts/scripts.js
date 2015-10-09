var loaded = "home";


$(document).ready(function (){
    $('#content').load("pages/home.html", function(){
        $(this).clone().appendTo('body').remove();
    });
    $('#home-button').addClass('active');
});

$('a#home').click(function(){
    if (loaded != "home")
    {
        $('#content').fadeOut(400, function(){
            $('<div/>', {
                id: 'content'
            });
            $('#content').load("pages/home.html", function(){
                $(this).clone().appendTo("body").remove();
            });
            $('#content').fadeIn(400);
        });
		removeClassActive();
		menuOptions[0].addClass('active');
    }
	loaded = "home";
});

$('a#about-us').click(function(){
    if (loaded != "about-us")
    {
        $('#content').fadeOut(400, function(){
            $('<div/>', {
                id: 'content'
            });
            $('#content').load("pages/about-us.html", function(){
                $(this).clone().appendTo("body").remove();
            });
            $('#content').fadeIn(400);
        });
		removeClassActive();
		menuOptions[1].addClass('active');
    }
	loaded = "about-us";
});

$('a#contact-us').click(function(){
    if (loaded != "contact-us")
    {
        $('#content').fadeOut(400, function(){
            $('<div/>', {
                id: 'content'
            });
            $('#content').load("pages/contact-us.html", function(){
                $(this).clone().appendTo("body").remove();
            });
            $('#content').fadeIn(400);
        });
		removeClassActive();
		menuOptions[3].addClass('active');
    }
	loaded = "contact-us";
});

$('a#reports').click(function(){
    if (loaded != "reports")
    {
        $('#content').fadeOut(400, function(){
            $('<div/>', {
                id: 'content'
            });
            $('#content').load("pages/reports.html", function(){
                $(this).clone().appendTo("body").remove();
            });
            $('#content').fadeIn(400);
        });
		removeClassActive();
		menuOptions[4].addClass('active');
    }
	loaded = "reports";
});

var menuOptions = [$('li#home-button'), $('li#about-us-button'), $('li#news-button'), $('li#contact-us-button'), $('li#reports-button')];

function removeClassActive()
{
	for (var i = 0; i < 4; i++)
	{
		$(menuOptions[i].removeClass('active'));
	}
}