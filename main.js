const resultBtn = document.querySelector("[data-result]");
const buttonClean = document.querySelector("[data-clear]");
const ageInput = document.querySelector("#age");
const weightInput = document.querySelector("#weight");
const heightInput = document.querySelector("#height");
const selectInput = document.querySelector("#activity_level");

const animation = document.querySelectorAll("[data-anime]");
const buttonTop = document.querySelector(".btnTop");

const handleSubmit = (event) => {
  event.preventDefault();

  const gender = getSelectedValue("gender");
  const age = getInputNumberValue("age");
  const weight = getInputNumberValue("weight");
  const height = getInputNumberValue("height");
  const activityLevel = getSelectedValue("activity_level");

  const tmb = Math.round(
    gender === "female"
      ? 655 + 9.6 * weight + 1.8 * height - 4.7 * age //if (cálculo pronto)
      : 66 + 13.7 * weight + 5 * height - 6.8 * age //else
  );

  const maintenance = Math.round(tmb * Number(activityLevel));
  const loseWeight = maintenance - 450;
  const gainWeight = maintenance + 450;

  //resultados da cálculo para exibir na tela
  const layout = `
    <h2>Resultado:</h2>

    <div class="result-content">
      <ul>
        <li>
          Seu metabolismo basal é de <strong>${tmb} calorias</strong>.
        </li>
        <li>
          Para manter o seu peso você precisa consumir em média <strong>${maintenance} calorias</strong>.
        </li>
        <li>
          Para perder peso você precisa consumir em média <strong>${loseWeight} calorias</strong>.
        </li>
        <li>
          Para ganhar peso você precisa consumir em média <strong>${gainWeight} calorias</strong>.
        </li>
      </ul>
  `;

  const result = document.getElementById("result");

  result.innerHTML = layout; //repassando que o layout deve ser exibido na tela
};

const getSelectedValue = (id) => {
  const select = document.getElementById(id);

  return select.options[select.selectedIndex].value;
};

const getInputNumberValue = (id) => {
  return Number(document.getElementById(id).value);
};

const cleanInputs = () => {
  const resultInput = document.getElementById("result");

  heightInput.value = "";
  ageInput.value = "";
  weightInput.value = "";

  selectInput.value = "1.2";

  resultInput.innerHTML = "";

  console.log(resultInput);
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

resultBtn.addEventListener("click", handleSubmit);

buttonClean.addEventListener("click", (e) => {
  e.preventDefault();

  cleanInputs();
});

window.addEventListener("scroll", () => {
  buttonTop.classList.toggle("active", window.scrollY > 450);

  animeScroll();
});
