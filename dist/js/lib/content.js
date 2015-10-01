/**
 * Created by thomascornyn on 9/29/15.
 */

var titleText = '';
var pathName = document.location.pathname;

Handlebars.registerHelper('title', function() {
    switch (pathName) {
        case '/reel.html':
            titleText = 'reel';
            break;
        case '/talk.html':
            titleText = 'talk';
            break;
        case '/home.html':
            titleText = 'home';
            break;
        case '/about.html':
            titleText = 'about';
            break;
        case '/main.html':
            titleText = 'main';
            break;
        default:
            break;
    }

    return new Handlebars.SafeString(titleText);
});

Handlebars.registerHelper('content', function() {
    var filename = document.location.pathname;
    filename = 'js/views' + filename;

    $.get(filename, function(template) {
        var rendered = Handlebars.compile(template);
        $('#myContent').html(rendered);
    });

    return new Handlebars.SafeString(template);
});

var contentEl = document.getElementById('content-template');

var template = Handlebars.compile(contentEl.innerHTML);

var myContent = document.getElementById('myContent');

myContent.innerHTML = template({content: "My New Content"});
