//Определяем действующие элементы на странице
const year = document.querySelector("#year");
const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
const countdown = document.querySelector("#countdown");
const preloader = document.querySelector("#preloader");

//делаем расчеты
const currentYear = new Date().getFullYear();
console.log(currentYear);
const nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);

//Устанавливаем  год на страницу
year.innerText = currentYear + 1;

function updateCounter() {
  const currentTime = new Date();

  const diff = nextYear - currentTime;

  //Переводим в секунды/минуты/часы/дни
  //Перевод в дни
  const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
  //Часов всего, далее остаток от деления на 24 (преобразования в дни), получаем количество часов
  const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
  //Минут всего, далее остаток от преобразования в часы, минут осталось
  const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
  //Секунд всего, далее остаток от преобразования в минуты, секунд осталось
  const secondLeft = Math.floor(diff / 1000) % 60;

  console.log(daysLeft, hoursLeft, minutesLeft, secondLeft);

  days.innerText = daysLeft;
  hours.innerText = hoursLeft < 10 ? "0" + hoursLeft : hoursLeft;
  minutes.innerText = minutesLeft < 10 ? "0" + minutesLeft : minutesLeft;
  seconds.innerText = secondLeft < 10 ? "0" + secondLeft : secondLeft;
}

updateCounter();
//Запускаем расчет 1 раз в 1 секунду (каждую секунду)
setInterval(updateCounter, 1000);

setTimeout(function () {
  preloader.remove();
  countdown.style.display = "flex";
}, 1000);
