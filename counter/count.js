let counter=document.querySelector(".counter");
let a=0;
let rst=document.querySelector(".rstbtn");

counter.addEventListener("click",()=>{
  a++;
  counter.innerText="";
  counter.innerText=a;
  counter.style.fontSize="50px"
//   counter.style.fontSize = a * 5 + "px";
})

rst.addEventListener("click",()=>{
    location.reload();
})