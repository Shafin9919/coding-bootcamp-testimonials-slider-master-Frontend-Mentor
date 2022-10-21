const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const container=document.querySelectorAll(".container");
const container_len=container.length;

next.addEventListener("click", function () {
  let i = 1;
  let j = i + 1;
  while(i<container_len)
  {
    document.querySelector(`.container_${i}`).style.transform =
      "translateX(-200%)";
    document.querySelector(`.container_${j}`).style.transform =
      "translateX(0%)";
      i++;
  }
});

prev.addEventListener("click", function () {
let j=container_len;
let i=j-1;
while(0<j)
{
  document.querySelector(`.container_${j}`).style.transform =
    "translateX(-200%)";
  document.querySelector(`.container_${i}`).style.transform =
    "translateX(0%)";
    j--;
}
  
});
