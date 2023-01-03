const animation = document.querySelectorAll("[data-anime]");
const buttonTop = document.querySelector(".btnTop");
const buttonResult = document.querySelector("#form");

buttonResult.addEventListener("submit", (e) => {
  e.preventDefault();

  handleButton;
});

const getSelectedValue = (id) => {
  const select = document.getElementById(id);
  return select.options[select.selectindex].value;
};

const getInputNumberValue = (id) => {
  return Number(document.getElementById(id).value);
};

const handleButton = (event) => {
  event.preventDefault();

  const gender = getSelectedValue("gender");
  const age = getInputNumberValue("age");
  const weight = getInputNumberValue("weight");
  const height = getInputNumberValue("height");

  console.log(gender);
};

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
