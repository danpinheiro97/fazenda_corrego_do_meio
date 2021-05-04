document.addEventListener(
  "DOMContentLoaded",
  function () {
    var conteudo = "";
    var tamanho = sessionStorage.length / 3

    for (i = 1; i <= tamanho; i++) {
      conteudo += sessionStorage.getItem("qtd" + i) + "X";
      conteudo += sessionStorage.getItem("produto" + i);
      conteudo += sessionStorage.getItem("valor" + i);
      

    }
    conteudo += sessionStorage.getItem("total")
    document.getElementById("whatsapp-share-btt").href =
      "https://api.whatsapp.com/send?text=" + conteudo;
  },
  false
);
