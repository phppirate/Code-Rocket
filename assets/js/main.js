/**
 * Created by sam on 8/27/15.
 */
$(document).ready(function () {
    runSetup();

    $('input.color').ColorPicker({
        onSubmit: function(hsb, hex, rgb, el) {

            var $swatch = $(el);
            var newColor = "#" + hex;

            $("." + $swatch.attr("data-color")).css("background", newColor).addClass("selected");
            $swatch.attr("value", newColor);
            curColor = newColor;

            $(this).hide();
        },
        onBeforeShow: function () {
            $(this).ColorPickerSetColor(this.value);
        }
    });

    $("#css").contextmenu(function(e){
        var pageX = e.pageX;
        var pageY = e.pageY;

        var offset = $("#html").width();

        var npageX = pageX - offset;

        //document.location = offset;

        var contextMenu = $(this).find(".context-menu");
        contextMenu.css({
            "position" : "absolute",
            "top" : pageY - 10 + "px",
            //"top" : "500px",
            //"left" : "500px",
            "left" : npageX - 10 + "px"
        }).addClass('active');

        e.preventDefault();

    });
    $(".context-menu").mouseleave(function(){
        $(this).removeClass('active');
    });

    $("*[data-target]").click(function () {
        $($(this).attr('data-target')).toggleClass('target');
    });


    // Dialog

    $(".trigger-dialog").click(function(e){
        e.preventDefault();

        $($(this).attr('href')).fadeIn(400, function(){
            $(this).addClass('open');
        });

        $(".overlay").fadeIn(400, function(){
            $(this).addClass('active');
        });
    });

    $(".dialog .close, .dialog .close-btn").click(function(e){
        e.preventDefault();

        $($(this).attr('href')).fadeOut(400, function(){
            $(this).removeClass('open');
        });

        $(".overlay").fadeOut(400, function(){
            $(this).removeClass('active');
        });

    });

});

function runSetup(){
    console.log("Running Setup...");

    var baseHtml = "<!--\n    Welcome to Code Rocket v1 Beta\n    please feel free to look around.\n    \n\n\n\n\n\n\n\n\n\n\n\n\n\t\t\t\tCODE IS DOWN\n                     |\n\t\t\t\t\t\\/\n-->\n<div id=\"home\">\n\n    <div class=\"title hide\">\n        Welcome to Code Rocket\n    </div>\n    <div class=\"subtitle hide\">\n        Just jump right in an do some Coding.\n    </div>\n\n    <!-- Generator: Adobe Illustrator 19.1.0, SVG Export Plug-In  -->\n    <svg id=\"logo\" class=\"hide\" version=\"1.1\"\n\t xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:a=\"http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/\"\n\t x=\"0px\" y=\"0px\" width=\"82.1px\" height=\"356.4px\" viewBox=\"0 0 82.1 356.4\" enable-background=\"new 0 0 82.1 356.4\"\n\t xml:space=\"preserve\">\n<defs>\n</defs>\n<g>\n\t<g>\n\t\t<g>\n\t\t\t<path fill=\"#F26822\" d=\"M57.6,238c0,0-5.8-59.2-12.6-68.3h-3.9h-3.9c-6.7,9-12.6,68.3-12.6,68.3s6.7-25.1,10.1-25.5\n\t\t\t\tc0,0-7.9,32.7-4.6,52.8c0,0,3.6-31,6.4-29.4c0,0,4.6-5.2,4.6,120.4c0-125.7,4.6-120.4,4.6-120.4c2.8-1.7,6.4,29.4,6.4,29.4\n\t\t\t\tc3.4-20.2-4.6-52.8-4.6-52.8C50.9,212.8,57.6,238,57.6,238z\"/>\n\t\t\t<g>\n\t\t\t\t<path fill=\"#F7901E\" d=\"M36.4,221.8c-0.2,1.2-0.4,2-0.4,2C36.2,223.2,36.3,222.5,36.4,221.8z\"/>\n\t\t\t\t<path fill=\"#F7901E\" d=\"M45.7,221.8c0.1,0.7,0.2,1.3,0.4,2C46.1,223.8,46,223,45.7,221.8z\"/>\n\t\t\t\t<path fill=\"#F7901E\" d=\"M45,169.7h-3.9h-3.9c-5.6,18.3-6,27.5-6.9,40.2c0,0,3.2-6.9,4.4-3.1c1.1,3.4,2.5,9.6,1.8,15\n\t\t\t\t\tc0.7-3.6,2.1-10.9,2.5-10.6c0.7,0.5,0.8,18.3,2.2,25.8c1.4-7.4,1.5-25.3,2.2-25.8c0.4-0.3,1.8,7,2.5,10.6\n\t\t\t\t\tc-0.7-5.3,0.7-11.5,1.8-15c1.3-3.9,4.4,3.1,4.4,3.1C51,197.2,50.6,188,45,169.7z\"/>\n\t\t\t</g>\n\t\t\t<path fill=\"#FEBC12\" d=\"M45,169.7h-3.9h-3.9c-2.1,7.3-3.7,14.4-3.7,22.9c0,8.5,0.8,12.8,0.8,12.8s0.3-13.5,1.1-13.4\n\t\t\t\tc0.8,0.1-0.7,15.1,2,19.9c0,0,0.3-17.4,1.1-16.6c1.3,1.2,2.7,30.7,2.7,30.7s1.4-29.4,2.7-30.7c0.9-0.8,1.1,16.6,1.1,16.6\n\t\t\t\tc2.6-4.8,1.2-19.8,2-19.9c0.8-0.1,1.1,13.4,1.1,13.4s0.8-4.4,0.8-12.8C48.7,184.1,47.2,177,45,169.7z\"/>\n\t\t</g>\n\t\t<path fill=\"#FCEE22\" d=\"M45,169.7h-3.9h-3.9c-3.2,17.3,0,29.1,0,29.1s-0.1-19.6,1.3-19.5c1.5,0.1,2.6,29.7,2.6,29.7\n\t\t\ts1.2-29.6,2.6-29.7c1.5-0.1,1.3,19.5,1.3,19.5S48.2,187.1,45,169.7z\"/>\n\t</g>\n\t<g>\n\t\t<polygon fill=\"#FAA31A\" points=\"17.8,109.7 0,119.9 0,190 7.3,152.7 14.2,146 32.8,154.6 \t\t\"/>\n\t\t<polygon opacity=\"0.5\" fill=\"#FFFFFF\" points=\"16.4,116.1 2.7,121.7 4.3,148.1 10.2,133.2 14.5,136.2 16.5,122.9 \t\t\"/>\n\t\t<polygon opacity=\"0.5\" fill=\"#FFFFFF\" points=\"13.6,123.4 5.5,123.4 6.6,132.1 7.8,126.2 \t\t\"/>\n\t\t<polygon opacity=\"0.5\" points=\"17.8,109.7 15,111.3 32.8,154.6 \t\t\"/>\n\t\t<path fill=\"#415BA9\" d=\"M41.1,0L41.1,0C41.1,0,41.1,0,41.1,0C41.1,0,41.1,0,41.1,0L41.1,0c-0.1,0.1-24.6,25.8-24.6,100\n\t\t\tc-0.2,14.2,20.8,69.7,20.8,69.7h3.8h3.8c0,0,21-55.5,20.8-69.7C65.7,25.8,41.2,0.1,41.1,0z\"/>\n\t\t<polygon fill=\"#FAA31A\" points=\"64.3,109.7 82.1,119.9 82.1,190 74.8,152.7 67.9,146 49.4,154.6 \t\t\"/>\n\t\t<polygon opacity=\"0.5\" fill=\"#FFFFFF\" points=\"65.7,116.1 79.4,121.7 77.8,148.1 71.9,133.2 67.6,136.2 65.7,122.9 \t\t\"/>\n\t\t<polygon opacity=\"0.5\" fill=\"#FFFFFF\" points=\"68.5,123.4 76.7,123.4 75.5,132.1 74.4,126.2 \t\t\"/>\n\t\t<polygon opacity=\"0.5\" points=\"64.3,109.7 67.1,111.3 49.4,154.6 \t\t\"/>\n\t\t<path fill=\"#FAA31A\" d=\"M41.1,38.8c4.4,0,11.6-0.5,16.6-4c-0.1-0.2-0.1-0.4-0.2-0.6c-0.1-0.5-0.3-1-0.4-1.4\n\t\t\tc-0.1-0.2-0.1-0.5-0.2-0.7c-0.2-0.8-0.5-1.5-0.7-2.3c0,0,0,0,0,0c-4.4,3.5-11.4,3.7-15.1,3.7c-3.7,0-10.7-0.2-15.1-3.7\n\t\t\tc0,0,0,0,0,0c-0.2,0.7-0.5,1.5-0.7,2.3c-0.1,0.2-0.1,0.5-0.2,0.7c-0.1,0.5-0.3,0.9-0.4,1.4c-0.1,0.2-0.1,0.4-0.2,0.6\n\t\t\tC29.4,38.3,36.7,38.8,41.1,38.8L41.1,38.8C41.1,38.8,41.1,38.8,41.1,38.8C41.1,38.8,41.1,38.8,41.1,38.8L41.1,38.8z\"/>\n\t\t<path d=\"M41.1,33.5c3.7,0,10.7-0.2,15.1-3.7c-0.2-0.6-0.4-1.3-0.6-1.9c0-0.1,0-0.1-0.1-0.2c-0.2-0.6-0.4-1.1-0.6-1.7\n\t\t\tc0-0.1,0-0.1-0.1-0.2c-0.2-0.6-0.4-1.1-0.6-1.7c0,0,0-0.1,0-0.1c-1.1-2.9-2.2-5.6-3.3-7.9c0,0,0,0,0,0c-0.2-0.5-0.4-0.9-0.6-1.4\n\t\t\tc0,0,0,0,0,0c-2.6-5.4-4.9-9.2-6.6-11.6c0,0,0,0,0,0c-0.1-0.2-0.3-0.4-0.4-0.5c0,0,0,0,0,0c-0.1-0.2-0.2-0.3-0.4-0.5c0,0,0,0,0,0\n\t\t\tc-0.5-0.6-0.9-1.1-1.2-1.5c0,0,0,0,0,0c-0.1-0.1-0.1-0.1-0.2-0.2c0,0,0,0,0,0c0-0.1-0.1-0.1-0.1-0.1c0,0,0,0,0,0\n\t\t\tc0,0-0.1-0.1-0.1-0.1c0,0,0,0,0,0c0,0,0,0-0.1-0.1c0,0,0,0,0,0c0,0,0,0,0,0v0c0,0,0,0,0,0c0,0,0,0,0,0v0c0,0,0,0,0,0c0,0,0,0,0,0\n\t\t\tc0,0,0,0-0.1,0.1c0,0,0,0,0,0c0,0-0.1,0.1-0.1,0.1c0,0,0,0,0,0c0,0-0.1,0.1-0.1,0.1c0,0,0,0,0,0c-0.1,0.1-0.1,0.1-0.2,0.2\n\t\t\tc0,0,0,0,0,0c-0.3,0.3-0.7,0.8-1.2,1.5c0,0,0,0,0,0c-0.1,0.2-0.2,0.3-0.4,0.5c0,0,0,0,0,0c-0.1,0.2-0.3,0.4-0.4,0.5c0,0,0,0,0,0\n\t\t\tc-1.7,2.4-4.1,6.2-6.6,11.6c0,0,0,0,0,0c-0.2,0.4-0.4,0.9-0.6,1.4c0,0,0,0,0,0c-1.1,2.4-2.2,5-3.3,7.9c0,0,0,0.1,0,0.1\n\t\t\tc-0.2,0.5-0.4,1.1-0.6,1.7c0,0.1,0,0.1-0.1,0.2c-0.2,0.6-0.4,1.1-0.6,1.7c0,0.1,0,0.1-0.1,0.2c-0.2,0.6-0.4,1.3-0.6,1.9\n\t\t\tC30.4,33.3,37.4,33.5,41.1,33.5L41.1,33.5C41.1,33.5,41.1,33.5,41.1,33.5C41.1,33.5,41.1,33.5,41.1,33.5L41.1,33.5z\"/>\n\t\t<path opacity=\"0.5\" fill=\"#FFFFFF\" d=\"M39.4,5.3C22.4,48.5,21.1,93.9,21.7,100c0.6,6.1,11.8,48.9,11.8,48.9S19.8,89.5,39.4,5.3z\"\n\t\t\t/>\n\t</g>\n\t<g>\n\t\t<path fill=\"#FAA31A\" d=\"M34.7,78.8c0-0.1,0-0.2,0-0.3c0-0.1,0-0.2,0.1-0.3l4.4-8.8c0.2-0.4,0.5-0.8,0.9-1c0.4-0.3,0.8-0.4,1.3-0.4\n\t\t\tc0.5,0,1,0.2,1.3,0.5c0.4,0.3,0.7,0.7,0.9,1.1l4.3,8.5c0.1,0.1,0.1,0.3,0.2,0.4s0.1,0.2,0.1,0.4c0,0.4-0.1,0.7-0.4,0.9\n\t\t\tc-0.3,0.3-0.6,0.4-0.9,0.4c-0.6,0-1-0.2-1.2-0.7l-4.2-8.4l-4.1,8.2c-0.1,0.2-0.3,0.5-0.5,0.6c-0.2,0.2-0.5,0.3-0.8,0.3\n\t\t\tc-0.4,0-0.7-0.1-0.9-0.4C34.8,79.5,34.7,79.1,34.7,78.8z\"/>\n\t\t<path fill=\"#FAA31A\" d=\"M35.5,84.9c-0.1-0.2-0.2-0.4-0.2-0.7c0-0.4,0.1-0.7,0.4-0.9c0.3-0.3,0.6-0.4,0.9-0.4\n\t\t\tc0.2,0,0.5,0.1,0.7,0.2l9.5,5.6c0.2,0.1,0.4,0.3,0.5,0.5c0.1,0.2,0.2,0.4,0.2,0.7c0,0.4-0.1,0.7-0.4,0.9c-0.3,0.3-0.6,0.4-0.9,0.4\n\t\t\tc-0.3,0-0.5-0.1-0.7-0.2L36,85.4C35.8,85.3,35.6,85.1,35.5,84.9z\"/>\n\t\t<path fill=\"#FAA31A\" d=\"M48.1,95.3c0,0.1,0,0.2,0,0.3c0,0.1,0,0.2-0.1,0.3l-4.4,8.8c-0.2,0.4-0.5,0.8-0.9,1\n\t\t\tc-0.4,0.3-0.8,0.4-1.3,0.4c-0.5,0-1-0.2-1.3-0.5c-0.4-0.3-0.7-0.7-0.9-1.1L34.9,96c-0.1-0.1-0.1-0.3-0.2-0.4s-0.1-0.2-0.1-0.4\n\t\t\tc0-0.4,0.1-0.7,0.4-0.9c0.3-0.3,0.6-0.4,0.9-0.4c0.6,0,1,0.2,1.2,0.7l4.2,8.4l4.1-8.2c0.1-0.2,0.3-0.5,0.5-0.6\n\t\t\tc0.2-0.2,0.5-0.3,0.8-0.3c0.4,0,0.7,0.1,0.9,0.4C48,94.6,48.1,94.9,48.1,95.3z\"/>\n\t</g>\n</g>\n</svg>\n    <a href=\"#section1\"><!-- Generator: Adobe Illustrator 19.1.0, SVG Export Plug-In  -->\n        <svg id=\"scrollDown\" version=\"1.1\"\n\t xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:a=\"http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/\"\n\t x=\"0px\" y=\"0px\" width=\"207.4px\" height=\"207.4px\" viewBox=\"0 0 207.4 207.4\" enable-background=\"new 0 0 207.4 207.4\"\n\t xml:space=\"preserve\">\n<defs>\n</defs>\n<circle fill=\"none\" stroke=\"#fff\" stroke-width=\"10\" stroke-miterlimit=\"10\" cx=\"103.7\" cy=\"103.7\" r=\"98.7\"/>\n<line fill=\"none\" stroke=\"#fff\" stroke-width=\"10\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" x1=\"103.7\" y1=\"36.8\" x2=\"103.7\" y2=\"168.8\"/>\n<polyline fill=\"none\" stroke=\"#fff\" stroke-width=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" points=\"\n\t48.1,112.9 103.9,168.7 159.4,113.3 \"/>\n</svg></a>\n\n\n</div>\n\n<div id=\"section1\" class=\"section\">\n    <h1>\n        Code Rocket is an IDE developed by Mission-4 Creative\n    </h1>\n    <div class=\"content\">\n        Code Rocket was designed as a downloadable version of Codepen or JsBin<br>\n        It has the complete set of controls that are <u>needed</u> for web design and development.\n        <br>\n        <strong>Some of the main features are...</strong>\n        <ul>\n            <li>Html, Css, and JavaScript windows</li>\n            <li>Automaticly updating preview window</li>\n            <li>Code hints</li>\n            <li>Syntax Highlighting</li>\n            <li>And Code Search</li>\n            <li>More Coming in the future</li>\n        </ul>\n    </div>\n    <a href=\"#section2\"><!-- Generator: Adobe Illustrator 19.1.0, SVG Export Plug-In  -->\n        <svg id=\"scrollDown\" version=\"1.1\"\n         xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:a=\"http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/\"\n         x=\"0px\" y=\"0px\" width=\"207.4px\" height=\"207.4px\" viewBox=\"0 0 207.4 207.4\" enable-background=\"new 0 0 207.4 207.4\"\n         xml:space=\"preserve\">\n    <defs>\n    </defs>\n    <circle fill=\"none\" stroke=\"#fff\" stroke-width=\"10\" stroke-miterlimit=\"10\" cx=\"103.7\" cy=\"103.7\" r=\"98.7\"/>\n    <line fill=\"none\" stroke=\"#fff\" stroke-width=\"10\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" x1=\"103.7\" y1=\"36.8\" x2=\"103.7\" y2=\"168.8\"/>\n    <polyline fill=\"none\" stroke=\"#fff\" stroke-width=\"10\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" points=\"\n        48.1,112.9 103.9,168.7 159.4,113.3 \"/>\n    </svg></a>\n</div>\n<div id=\"section2\" class=\"section\">\n    <h1>\n        Code Rocket also has some relativly familiar keyboard shortcuts\n    </h1>\n    <div class=\"content\">\n\n        <p>\n        <ul>\n            <li>Cut <code>Ctrl/Cmd X</code></li>\n            <li>Copy <code>Ctrl/Cmd C</code></li>\n            <li>Paste <code>Ctrl/Cmd V</code></li>\n            <li>Fullscreen Editor <code>Ctrl-ALT F</code></li>\n            <li>Search <code>Cmd/Ctrl F</code></li>\n            <li>Find Next <code>Ctrl/Cmd G</code></li>\n            <li>More Coming Soon</li>\n        </ul>\n        </p>\n    </div>\n</div>";
    var baseCss = "/* CSS */\nbody, html{\n    padding: 0px;\n    margin: 0px;\n    height: 100%;\n    width: 100%;\n\n    font-family: helvetica, sans-serif;\n}\n\n/* Show */\n@keyframes show{\n    0%{\n        top: 100%;\n        left: -150px;\n    }\n    30%{\n        top: 0%;\n        left: calc(50% - 150px);\n    }\n    75%{\n        top: 0%;\n        left: calc(50% - 150px);\n    }\n    100%{\n        top: -100%;\n        left: calc(100% - 150px);\n    }\n}\n\n@-webkit-keyframes show{\n    0%{\n        top: 100%;\n        left: -150px;\n    }\n    30%{\n        top: 0%;\n        left: calc(50% - 150px);\n    }\n    75%{\n        top: 0%;\n        left: calc(50% - 150px);\n    }\n    100%{\n        top: -100%;\n        left: calc(100% - 150px);\n    }\n\n}\n@-moz-keyframes show{\n    0%{\n        top: 100%;\n        left: -150px;\n    }\n    30%{\n        top: 0%;\n        left: calc(50% - 150px);\n    }\n    75%{\n        top: 0%;\n        left: calc(50% - 150px);\n    }\n    100%{\n        top: -100%;\n        left: calc(100% - 150px);\n    }\n\n}\n@-o-keyframes show{\n    0%{\n        top: 100%;\n        left: -150px;\n    }\n    30%{\n        top: 0%;\n        left: calc(50% - 150px);\n    }\n    75%{\n        top: 0%;\n        left: calc(50% - 150px);\n    }\n    100%{\n        top: -100%;\n        left: calc(100% - 150px);\n    }\n\n}\n@-ms-keyframes show{\n    0%{\n        top: 100%;\n        left: -150px;\n    }\n    30%{\n        top: 0%;\n        left: calc(50% - 150px);\n    }\n    75%{\n        top: 0%;\n        left: calc(50% - 150px);\n    }\n    100%{\n        top: -100%;\n        left: calc(100% - 150px);\n    }\n\n}\n\n/* Move */\n@keyframes move{\n    0%{\n    //top: 0%;\n    //left: -150px;\n        -webkit-transform: rotateZ(45deg) translateX(0px);\n    }\n    50%{\n        -webkit-transform: rotateZ(45deg) translateX(-2px);\n\n    }\n    100%{\n        -webkit-transform: rotateZ(45deg) translateX(0px);\n    }\n}\n@-webkit-keyframes move{\n    0%{\n    //top: 0%;\n    //left: -150px;\n        -webkit-transform: rotateZ(45deg) translateX(0px);\n    }\n    50%{\n        -webkit-transform: rotateZ(45deg) translateX(-2px);\n\n    }\n    100%{\n        -webkit-transform: rotateZ(45deg) translateX(0px);\n    }\n}\n@-moz-keyframes move{\n    0%{\n    //top: 0%;\n    //left: -150px;\n        -webkit-transform: rotateZ(45deg) translateX(0px);\n    }\n    50%{\n        -webkit-transform: rotateZ(45deg) translateX(-2px);\n\n    }\n    100%{\n        -webkit-transform: rotateZ(45deg) translateX(0px);\n    }\n}\n@-o-keyframes move{\n    0%{\n    //top: 0%;\n    //left: -150px;\n        -webkit-transform: rotateZ(45deg) translateX(0px);\n    }\n    50%{\n        -webkit-transform: rotateZ(45deg) translateX(-2px);\n\n    }\n    100%{\n        -webkit-transform: rotateZ(45deg) translateX(0px);\n    }\n}\n@-ms-keyframes move{\n    0%{\n    //top: 0%;\n    //left: -150px;\n        -webkit-transform: rotateZ(45deg) translateX(0px);\n    }\n    50%{\n        -webkit-transform: rotateZ(45deg) translateX(-2px);\n\n    }\n    100%{\n        -webkit-transform: rotateZ(45deg) translateX(0px);\n    }\n}\n\n#home{\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    background: #000533 url(assets/img/stars.png) center center;\n    background-size: 80px;\n}\n\n#logo{\n    width: 150px;\n    height: 500px;\n    display: block;\n\n    position: relative;\n    top: 100%;\n    left: -150px;\n    background: none;\n    transform: rotateZ(45deg);\n    -webkit-transform: rotateZ(45deg);\n    -moz-transform: rotateZ(45deg);\n    -ms-transform: rotateZ(45deg);\n    -o-transform: rotateZ(45deg);\n    animation: show 5s infinite, move .2s infinite;\n    -webkit-animation: show 2s infinite, move .2s infinite;\n    -moz-animation: show 5s infinite, move .2s infinite;\n    -ms-animation: show 5s infinite, move .2s infinite;\n    -o-animation: show 5s infinite, move .2s infinite;\n\n}\n#logo.hide{\n    -webkit-animation: none;\n}\n\n#scrollDown{\n    width: 70px;\n    height: 70px;\n    opacity: .5;\n    fill: none;\n    cursor: pointer;\n    position: absolute;\n    left: calc(50% - 35px);\n    bottom: 20px;\n    transition: opacity .2s;\n    -webkit-transition: opacity .2s;\n    -moz-transition: opacity .2s;\n    -ms-transition: opacity .2s;\n    -o-transition: opacity .2s;\n}\n#scrollDown:hover{\n    opacity: 1;\n}\n\n.title{\n    color: #fff;\n    font-size: 3em;\n    font-family: helvetica, sans-serif;\n    text-align: center;\n    text-shadow: 0px 0px 10px #ffa400;\n    position: absolute;\n    top: 100px;\n    left: 90px;\n    transition: all .3s cubic-bezier(0.31,-0.96, 0.58, 1.71);\n    -webkit-transition: all .3s cubic-bezier(0.31,-0.96, 0.58, 1.71);\n    -moz-transition: all .3s cubic-bezier(0.31,-0.96, 0.58, 1.71);\n    -ms-transition: all .3s cubic-bezier(0.31,-0.96, 0.58, 1.71);\n    -o-transition: all .3s cubic-bezier(0.31,-0.96, 0.58, 1.71);\n}\n.title.hide{\n    top: -100px;\n}\n\n.subtitle{\n    color: #fff;\n    font-size: 1.5em;\n    font-family: helvetica, sans-serif;\n    text-align: center;\n    text-shadow: 0px 0px 20px #000;\n    position: absolute;\n    top: 180px;\n    left: 90px;\n    transition: all .5s cubic-bezier(0.31,-0.96, 0.58, 1.71) 1s;\n    -webkit-transition: all .5s cubic-bezier(0.31,-0.96, 0.58, 1.71) 1s;\n    -moz-transition: all .5s cubic-bezier(0.31,-0.96, 0.58, 1.71) 1s;\n    -ms-transition: all .5s cubic-bezier(0.31,-0.96, 0.58, 1.71) 1s;\n    -o-transition: all .5s cubic-bezier(0.31,-0.96, 0.58, 1.71) 1s;\n}\n.subtitle.hide{\n    top: -100px;\n}\n\n\n.section{\n    width: 100%;\n    height: 100%;\n    position: relative;\n    overflow: hidden;\n    background: #000 url(assets/img/stars.png) center center;\n    background-attachment: scroll;\n}\n.section h1{\n    text-align: center;\n    margin: 30px 0 10px 0;\n    color: #fff;\n}\n.section .content{\n    width: 80%;\n    margin: auto;\n    background: rgba(0,0,150,.5);\n    padding: 20px;\n    border-radius: 20px 50px;\n    color: #fff;\n    font-weight: lighter;\n    font-size: xx-large;\n\n}\n#section1{\n}\n\n.section code{\n\n    border: 1px solid red;\n    padding: 0 5px 0 5px;\n    border-radius: 5px;\n    background: rgba(200,200,200,.8);\n    color: #000;\n    font-weight: lighter;\n}\n";
    var baseJs = "// JavaScript\n$(document).ready(function(){\n    $(\"svg#logo\").removeAttr(\'class\');\n\n    $(\".title\").removeClass(\'hide\');\n\n    $(\".subtitle\").removeClass(\'hide\');\n\n});\n\n$(\'a[href*=#]:not([href=#])\').click(function(e) {\n    e.preventDefault();\n\n    if ( location.pathname.replace(/^\\//,\"\") === this.pathname.replace(/^\\//,\"\") && location.hostname === this.hostname) {\n        var target = $(this.hash);\n        target = target.length ? target : $(\'[name=\' + this.hash.slice(1) + \']\');\n        if (target.length) {\n            $(\'html,body\').animate({\n                scrollTop: target.offset().top\n            }, 1000);\n        }\n    }\n});";

    if(localStorage.getItem("htmlCode") != null){
        $("#html #htmlCode").text(localStorage.getItem("htmlCode"));
        console.log("Loading Html...");
    } else {
        localStorage.setItem("htmlCode", baseHtml);
        $("#html #htmlCode").text(baseHtml);
        console.log("Setting Base Html...");
    }
    if(localStorage.getItem("cssCode") != null) {
        $("#css #cssCode").text(localStorage.getItem("cssCode"));
        console.log("Loading CSS...");
    }else {
        localStorage.setItem("cssCode", baseCss);
        $("#css #cssCode").text(baseCss);
        console.log("Setting Base CSS...");
    }
    if(localStorage.getItem("jsCode") != null) {
        $("#javascript #jsCode").text(localStorage.getItem("jsCode"));
        console.log("Loading JavaScript...");
    } else {
        localStorage.setItem("jsCode", baseJs);
        $("#javascript #jsCode").text(baseJs);

        console.log("Setting Base JavaScript...");
    }
    if(localStorage.getItem('linkedCss') != null){
        $("#addCss").val(localStorage.getItem('linkedCss'));
        saveAddedCss();
    } else{
        localStorage.setItem('linkedCss', "");
        $("#addCss").val(localStorage.getItem('linkedCss'));
        saveAddedCss();
    }
    if(localStorage.getItem('linkedJs') != null){
        $("#addJs").val(localStorage.getItem('linkedJs'));
        saveAddedJs();
    } else{
        localStorage.setItem('linkedJs', "<script src='assets/js/jquery.min.js'></script>");
        $("#addJs").val(localStorage.getItem('linkedJs'));
        saveAddedJs();
    }

    console.log("Setup Complete!");

};