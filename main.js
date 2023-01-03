const animation = document.querySelectorAll("[data-anime]");
const buttonTop = document.querySelector(".btnTop");

const animeScroll = () => {
  const windowTop = window.pageYOffset + window.innerHeight * 0.7;

  animation.forEach((e) => {
    if (windowTop > e.offsetTop) {
      e.classList.add("animate");
    } else {
      e.classList.remove("animate");
    }
  });

  buttonTop.addEventListener("click", () => backTop());
};

const backTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// Eventos
window.addEventListener("scroll", () => {
  buttonTop.classList.toggle("active", window.scrollY > 450);

  animeScroll();
});
