window.onload = function () {
  let endereco = document.getElementById("endereco");
  let enviar = document.querySelector(".btn-flat");

  enviar.addEventListener("click", function () {
    event.preventDefault();

    if (endereco.value.trim() === '') {
      alert("Oops!😱 Você precisa preencher o campo endereço!");
    } else {
      window.location.href = 'pagina5.html';
    }
  });

}
