const animation = document.querySelectorAll("[data-anime]");

const animeScroll = () => {
  const windowTop = window.pageYOffset + window.innerHeight * 0.7;

  animation.forEach((e) => {
    if (windowTop > e.offsetTop) {
      e.classList.add("animate");
    } else {
      e.classList.remove("animate");
    }
  });
};

animeScroll();

window.addEventListener("scroll", () => {
  animeScroll();
});
