"use strict";
console.log("hello world");
const btn = document.querySelector("button");
const pointData = document.querySelectorAll(".special-data");

const getData = async function () {
  const response = await fetch("/data.json");
  const data = await response.json();

  //   console.log(data);
  pointData.forEach((point, index) => {
    point.innerHTML = data[index].score;
  });
};

btn.addEventListener("click", function (e) {
  console.log("click");
});

getData();
