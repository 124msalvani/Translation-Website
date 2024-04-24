var translated;
var dict = {
    "Home": {
      pt: "Início"
    },
    "Download plugin": {
       pt: "Descarregar plugin",
       en: "Download plugin"
    }
  };
var translator = $('body').translate({lang: "en", t: dict}); //use English

document.getElementById("submit").addEventListener("click", onClick);
function onClick() {
    inputText = document.getElementById("input").value;
    console.log(inputText);
    translator.lang("fr");
    console.log(translated);
    document.getElementById('output').innerHTML = translated;

    
}
