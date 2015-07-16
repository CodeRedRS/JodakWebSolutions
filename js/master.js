/**
 * Created by dadler on 7/15/2015.
 */
// NAVBAR HTML
// ===========
var navHtml = "<nav class='navbar navbar-default navbar-fixed-top'><div class='container'><div class='navbar-header'>" +
    "<button type='button' class='navbar-toggle collapsed' data-toggle='collapse'data-target='#collapse' aria-expanded='false'>" +
    "<span class='sr-only'>Toggle navigation</span> <span class='icon-bar'></span><span class='icon-bar'></span>" +
    "<span class='icon-bar'></span></button><a class='navbar-brand' href=index.html>{{LOGO}}</a></div>" +
    "<div class='collapse navbar-collapse' id='collapse'><ul class='nav navbar-nav navbar-right navigation'><li>" +
    "<a href='index.html' class='color'>Home</a></li>" +
    "<li><a href='about.html' class='color'>About</a></li>" +
    "<li><a href='portfolio.html' class='color'>Portfolio</a></li>" +
    "<li><a href='services.html' class='color'>Services</a></li>" +
    "<li><a href='contact.html' class='color'>Contact</a></li>" +
    "</ul></div></div></nav>";

// FOOTER HTML
// ===========
var footerHtml = "<footer class='text-center navbar-default'>" +
    "<span class='navbar-brand text-center footer-text'>Jodak Web Solutions <i class='fa fa-copyright'></i> 2015</span>" +
    "</footer>";

// REPLACE NAV/FOOT
// ================
$('#nav').replaceWith(navHtml);
$('#footer').replaceWith(footerHtml);

// RANDOM COLOR
// ============
var rand = Math.floor((Math.random() * 4) + 1);
var color = $('.color');
switch (rand) {
    case 1:
        color.addClass('green');
        break;
    case 2:
    default:
        color.addClass('orange');
        break;
    case 3:
        color.addClass('blue');
        break;
    case 4:
        color.addClass('pink');
        break;

}