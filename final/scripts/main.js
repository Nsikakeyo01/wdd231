const menuButton = document.querySelector("#menu");
const nav = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
});
