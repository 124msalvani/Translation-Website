document.getElementById("submit").addEventListener("click", initialize);



function initialize() {
    var text = document.getElementById("text").value;
    console.log(text)
    google.language.translate(text, 'es', 'en', function(result) {
        var translated = document.getElementById("output");
        if (result.translation) {
            translated.innerHTML = result.translation;
        }
    });
}


