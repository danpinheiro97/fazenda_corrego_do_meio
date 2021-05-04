
 function AddCarrinho(produto, qtd, valor, posicao)
 { 
 sessionStorage.setItem("produto" + posicao, produto);
 sessionStorage.setItem("qtd" + posicao, qtd);
 valor = valor * qtd;
 sessionStorage.setItem("valor" + posicao, valor);
 alert("Produto adicionado ao carrinho!");
 }

