const modal = document.querySelector("#modal");
const body = document.querySelector("#modal-body");
const close = document.querySelector("#closeModal");

export function openModal(service) {
    body.innerHTML = `
    <h2>${service.title}</h2>
    <p>${service.description}</p>
    <p>Rating: ${service.rating}</p>
  `;
    modal.style.display = "block";
}

close.addEventListener("click", () => {
    modal.style.display = "none";
});
