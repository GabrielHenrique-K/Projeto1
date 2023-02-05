const botaoSobre = document.querySelector(".botaosobre");
const botaoFecharModal = document.querySelector(".fechar-modal");
const carta = document.getElementById("carta");
const modal = document.querySelector(".modal");

function alternarModal(){
	modal.classList.toggle("aberto");
}

botaoSobre.addEventListener("click", () => {
	alternarModal();
});

botaoFecharModal.addEventListener("click", () => {
	alternarModal();
	carta.setAttribute("src", "");
});