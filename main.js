import data from "./data.json" assert {type: "json"};

console.log(data);

let bgColors = [
  "hsl(15, 100%, 70%)",
  "hsl(195, 74%, 62%)",
  "hsl(348, 100%, 68%",
  "hsl(145, 58%, 55%)",
  "hsl(264, 64%, 52%)",
  "hsl(43, 84%, 65%)",
];

let dailyArray = data.map(item => item.timeframes.daily);
let weeklyArray = data.map(item => item.timeframes.weekly);
let monthlyArray = data.map(item => item.timeframes.monthly);

let dailyBtn = document.querySelector("#daily");
let weeklyBtn = document.querySelector("#weekly");
let monthlyBtn = document.querySelector("#monthly");

let secondSection = document.querySelector(".second-section");

drawElements(dailyArray);

dailyBtn.addEventListener("click", ()=>{
  drawElements(dailyArray);
});

weeklyBtn.addEventListener("click", ()=>{
  drawElements(weeklyArray);
});

monthlyBtn.addEventListener("click", ()=>{
  drawElements(monthlyArray);
});

function drawElements(array) {
  secondSection.innerHTML = "";
  array.forEach((element, index)=>{

    let title = data[index].title;
    let icon = data[index].title.toLowerCase();

    if(icon == "self care") {
      icon = "self-care";
    };

    secondSection.innerHTML += `
      <div class="card">
        <div class="card__background" style="background-color: ${bgColors[index]}">
          <img class="card__img" src="./images/icon-${icon}.svg" alt="${icon}-icon">
        </div>
        <div class="card__details">
          <div class="card__activity">
            <p class="card__title">${title}</p>
            <img src="./images/icon-ellipsis.svg" alt="three points">
          </div>
          <div class="card__hours">
            <p class="card__hour">${element.current}hrs</p>
            <p class="card__previous">Previus - ${element.previous}hrs</p>
          </div>
        </div>
      </div>`
  });
};