var resultado = document.querySelector(".resultado");

var numeroSecreto = parseInt(Math.random() * 11);

function calcula() {
  var chute = parseInt(document.querySelector("#valor").value);
  if (chute === numeroSecreto) {
    resultado.innerHTML = `Parabéns, você acertou!`;
    numeroSecreto = parseInt(Math.random() * 11);
  } else if (chute > 10 || chute < 0) {
    resultado.innerHTML = `Ops, o número não pode ser maior que 10 ou menor que 0`;
  } else if (chute < numeroSecreto) {
    resultado.innerHTML = `Infelizmente você errou, o número secreto é maior que ${chute}`;
  } else if (chute > numeroSecreto) {
    resultado.innerHTML = `Infelizmente você errou, o número secreto é menor que ${chute}`;
  }
}
