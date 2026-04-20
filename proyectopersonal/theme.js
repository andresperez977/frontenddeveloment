const btns = document.querySelectorAll(".theme-btn");
const body = document.body;

btns.forEach(btn => {
  btn.addEventListener("click", () => {
    const theme = btn.dataset.theme;
    body.className = theme;
  });
});