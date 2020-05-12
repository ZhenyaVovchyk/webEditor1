let htmlEditor = ace.edit("html-editor");
htmlEditor.setTheme("ace/theme/twilight");
htmlEditor.session.setMode("ace/mode/html");
htmlEditor.session.setUseWrapMode(true);
htmlEditor.setHighlightActiveLine(false);
htmlEditor.getSession().setUseSoftTabs(true);
htmlEditor.resize();


let cssEditor = ace.edit("css-editor");
cssEditor.setTheme("ace/theme/twilight");
cssEditor.session.setMode("ace/mode/css");
cssEditor.session.setUseWrapMode(true);
cssEditor.setHighlightActiveLine(false);
cssEditor.getSession().setUseSoftTabs(true);
cssEditor.resize();


let jsEditor = ace.edit("js-editor");
jsEditor.setTheme("ace/theme/twilight");
jsEditor.session.setMode("ace/mode/javascript");
jsEditor.session.setUseWrapMode(true);
jsEditor.setHighlightActiveLine(false);
jsEditor.getSession().setUseSoftTabs(true);
jsEditor.resize();


htmlEditor.getSession().on('change', function() {
    update();
})
cssEditor.getSession().on('change', function() {
    update();
})
jsEditor.getSession().on('change', function() {
    update();
})

function update() {
    var res = document.getElementById('result').contentWindow.document;
    res.open();
    res.write('<style>' + cssEditor.getValue() + '</style>');
    res.write('<script>' + jsEditor.getValue() + '</script>');
    res.write(htmlEditor.getValue());
    res.close();
}
update();



document.addEventListener("keyup", () => {
    var htmlSave = htmlEditor.getValue();
    var cssSave = cssEditor.getValue();
    var jsSave = jsEditor.getValue();
    localStorage.setItem('htmlSave', htmlSave);
    localStorage.setItem('cssSave', cssSave);
    localStorage.setItem('jsSave', jsSave);
});

window.onload = () => {
    var htmlSave = (localStorage.getItem("htmlSave"));
    var cssSave = (localStorage.getItem("cssSave"));
    var jsSave = (localStorage.getItem("jsSave"));
    htmlEditor.session.replace(new ace.Range(0, 0, 1, 1), htmlSave);
    cssEditor.session.replace(new ace.Range(0, 0, 1, 1), cssSave);
    jsEditor.session.replace(new ace.Range(0, 0, 1, 1), jsSave);
}


let clearStorage = document.getElementById('bl-7');
clearStorage.addEventListener('click', () => {
    location.reload();
    localStorage.clear();
});

let i, block = document.getElementsByClassName('block');

window.addEventListener('click', (event) => {
    for (i = 0; i < block.length; i++) {
        if (event.target.className == 'bl') {
            if (event.target.id == 'bl-1') {
                block[0].style.display = 'block';
            } else block[0].style.display = 'none';
            if (event.target.id == 'bl-2') {
                block[1].style.display = 'block';
            } else block[1].style.display = 'none';
            if (event.target.id == 'bl-3') {
                block[2].style.display = 'block';
            } else block[2].style.display = 'none';

            if (event.target.id == 'bl-4') {
                block[3].style.display = 'block';
            } else block[3].style.display = 'none';
        }
    }
});