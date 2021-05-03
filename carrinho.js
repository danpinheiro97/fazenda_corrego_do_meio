
document.addEventListener("DOMContentLoaded", function() {
    var conteudo = "";
 for (i = 1; i <= 3; i++){
    conteudo += localStorage.getItem("qtd"+i) + "X";
    conteudo += localStorage.getItem("produto"+i);
    conteudo += localStorage.getItem("valor" + i);

 
}
document.getElementById("whatsapp-share-btt").href =
  "https://api.whatsapp.com/send?text=" + conteudo;
}, false);

