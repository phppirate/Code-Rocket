/**
 * Created by sam on 8/27/15.
 */

var htmlEditor;
var cssEditor;
var javaScriptEditor;

window.onload = function () {
    var file;


    htmlEditor = CodeMirror.fromTextArea(document.getElementById("htmlCode"), {
        mode: {name: "text/html", globalVars: true},
        lineNumbers: true,
        theme: 'ambiance',
        height: "500px",
        keyMap: 'sublime',
        scrollbarStyle: "simple",
        extraKeys: {
            "Ctrl-Space": "autocomplete",
            "Ctrl-Alt-F": function (cm) {
                cm.setOption("fullScreen", !cm.getOption("fullScreen"));
            },
            "Esc": function (cm) {
                if (cm.getOption("fullScreen")) cm.setOption("fullScreen", false);
            }
        },
        autoCloseTags: true,
        tabSize: 4,
        indentUnit: 4,
        cursorHeight: .85,
        profile: 'xhtml',
        //highlightSelectionMatches: {showToken: /\w/}

        foldGutter: true,
        gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"]
    });
    cssEditor = CodeMirror.fromTextArea(document.getElementById("cssCode"), {
        mode: {name: "css", globalVars: true},
        lineNumbers: true,
        theme: 'ambiance',
        height: '400px',
        keyMap: 'sublime',
        scrollbarStyle: "simple",
        profile: 'css',
        extraKeys: {
            "Ctrl-Space": "autocomplete",
            "Ctrl-Alt-F": function (cm) {
                cm.setOption("fullScreen", !cm.getOption("fullScreen"));
            },
            "Esc": function (cm) {
                if (cm.getOption("fullScreen")) cm.setOption("fullScreen", false);
            }
        },
        autoCloseBrackets: true,
        tabSize: 4,
        indentUnit: 4,
        cursorHeight: .85,
        foldGutter: true,
        gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"]
    });
    javaScriptEditor = CodeMirror.fromTextArea(document.getElementById("jsCode"), {
        mode: "text/javascript",
        lineNumbers: true,
        theme: 'ambiance',
        height: '400px',
        keyMap: 'sublime',
        scrollbarStyle: "simple",
        profile: 'javascript',
        extraKeys: {
            "Ctrl-Space": "autocomplete",
            "Ctrl-Alt-F": function (cm) {
                cm.setOption("fullScreen", !cm.getOption("fullScreen"));
            },
            "Esc": function (cm) {
                if (cm.getOption("fullScreen")) cm.setOption("fullScreen", false);
            }
        },
        tabSize: 4,
        indentUnit: 4,
        cursorHeight: .85,

        foldGutter: true,
        gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"]
    });

    emmetCodeMirror(htmlEditor);
    emmetCodeMirror(cssEditor);
    emmetCodeMirror(javaScriptEditor);


    updatePreview();

    htmlEditor.on("keyup", function(){
        updatePreview();
    });

    cssEditor.on("keyup", function(){
        updatePreview();
    });

    javaScriptEditor.on("keyup", function(){
        updatePreview();
    });


    function updatePreview() {
        var previewFrame = document.getElementById('preview');
        var preview =  previewFrame.contentDocument ||  previewFrame.contentWindow.document;

        file = "<html>\n<head>\n<title>Code Rocket</title>\n"

            + localStorage.getItem('linkedCss')

            + "\n<style>\n" + cssEditor.getValue()

            + "\n</style>\n</head>"

            + htmlEditor.getValue() + localStorage.getItem('linkedJs')

            + "<script>\n" + javaScriptEditor.getValue() + "\n</script>\n</html>";



        preview.open();
        preview.write(file);
        preview.close();

        console.log("Updated Preview");
        setDownload(file);
        localStorage.setItem("htmlCode", htmlEditor.getValue());
        localStorage.setItem("cssCode", cssEditor.getValue());
        localStorage.setItem("jsCode", javaScriptEditor.getValue());

    }

    function setEditorsByLocalStorage(){
        htmlEditor.setValue(localStorage.getItem('htmlCode'));
        cssEditor.setValue(localStorage.getItem('cssCode'));
        javaScriptEditor.setValue(localStorage.getItem('jsCode'));
    }

    // Jquery

    $('.updatePreview').click(function(){updatePreview();});

    $("#html").resizable({handles: "all"}).resize(function(){

        var fullWidth = $("body").width();
        var fullheight = $("body").height();
        $("#css").width((fullWidth - $(this).width()) / 2).height($(this).height());
        $("#javascript").width((fullWidth - $(this).width()) / 2).height($(this).height());
        $("#preview").height(fullheight - $(this).height()).css('display', 'none');

    }).mouseup(function () {
        $("#preview").css('display', 'block');
        //updatePreview();
    });
    $("#css").resizable().resize(function(){
        var fullWidth = $("body").width();
        var fullheight = $("body").height();

        $("#html").width((fullWidth - $(this).width()) / 2).height($(this).height());
        $("#javascript").width((fullWidth - $(this).width()) / 2).height($(this).height());
        $("#preview").height(fullheight - $(this).height()).css('display', 'none');
    }).mouseup(function () {
        $("#preview").css('display', 'block');
        //updatePreview();
    });
    $("#javascript").resizable().resize(function(){
        var fullWidth = $("body").width();
        var fullheight = $("body").height();

        $("#css").width((fullWidth - $(this).width()) / 2).height($(this).height());
        $("#html").width((fullWidth - $(this).width()) / 2).height($(this).height());
        $("#preview").height(fullheight - $(this).height()).css('display', 'none');
    }).mouseup(function () {
        $("#preview").css('display', 'block');
        //updatePreview();
    });


    $(".reset-code-rocket").click(function(e){

        localStorage.clear();

        runSetup();

        setEditorsByLocalStorage();

        updatePreview();
        e.preventDefault();
    });

    $(".clear-cache").click(function(e){
        e.preventDefault();

        localStorage.clear();

        localStorage.setItem('htmlCode', '<!-- HTML -->');
        localStorage.setItem('cssCode', '/* CSS */');
        localStorage.setItem('jsCode', '// JavaScript');

        runSetup();

        setEditorsByLocalStorage();

        updatePreview();
    });


    function setDownload(content){
        $("#page-content").val(content);
    }


    $('#addCss').blur(function(){
        saveAddedCss();
        updatePreview();
    });

    $('#addJs').blur(function(){
        saveAddedJs();
        updatePreview();
    });


};


function logCodeValues(){
    console.log("HTML");
    console.log(localStorage.getItem('htmlCode'));
    console.log("–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––");
    console.log("–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––");
    console.log("–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––");
    console.log("CSS");
    console.log(localStorage.getItem('cssCode'));
    console.log("–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––");
    console.log("–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––");
    console.log("–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––");
    console.log("JAVASCRIPT");
    console.log(localStorage.getItem('jsCode'));
    console.log("–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––");
    console.log("–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––");
    console.log("–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––");
}


function saveAddedCss(){
    localStorage.setItem('linkedCss', $('#addCss').val());
}
function saveAddedJs(){
    localStorage.setItem('linkedJs', $('#addJs').val());
}