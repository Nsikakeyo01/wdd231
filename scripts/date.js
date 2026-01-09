const yearSpan = document.querySelector("#currentyear");
const modifiedSpan = document.querySelector("#lastModified");

yearSpan.textContent = new Date().getFullYear();
modifiedSpan.textContent = document.lastModified;
