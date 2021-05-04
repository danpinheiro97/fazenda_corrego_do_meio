function texto() {
  var string = "Olá, meu nome é ";
  string += document.getElementById("nome").value + " ";
  string += document.getElementById("sobrenome").value;
  string += ". Meu CEP é " + document.getElementById("cep").value;
  string += ", eu sou da cidade de " + document.getElementById("cidade").value;
  string += ", bairro " + document.getElementById("bairro").value;
  string += ", rua " + document.getElementById("rua").value;
  string += ", quadra " + document.getElementById("quadra").value;
  string += ", número " + document.getElementById("numero").value + '. \n';
  string +="Minha forma de pagamento é por "; 
  string += document.getElementById("pagamento").value + '\n';
  sessionStorage.setItem("frase", string);
  console.log(string);
}

function frase(){
  var frase = sessionStorage.getItem("frase");
  var conteudo = frase + '\n' + "Quantidade         Produto           Preço " + '\n';
  var tamanho = (sessionStorage.length -3) /3; 
  for (i = 1; i <= tamanho; i++) {
    conteudo += sessionStorage.getItem("qtd" + i) + "                          ";
    conteudo += sessionStorage.getItem("produto" + i) + "               R$";
    conteudo += sessionStorage.getItem("valor" + i) + '\n';
  }
  conteudo += "Total= R$" + sessionStorage.getItem("total");
  console.log(conteudo)
  sessionStorage.setItem("conteudo", conteudo);

}

  function whatsapp(){
    var mensagem = encodeURIComponent(sessionStorage.getItem("conteudo"));
    console.log(mensagem);
    document.getElementById("whatsapp-button").href =
      "https://api.whatsapp.com/send?text=" + mensagem;
  }
