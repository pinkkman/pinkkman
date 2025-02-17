let cs=0;
let ys=0;
let sc1=document.querySelector(".sc1");
let sc2=document.querySelector(".sc2");
let p=document.querySelector("p");
let rst=document.querySelector(".rstbtn");
const choices= document.querySelectorAll(".stone , .paper , .scissors");

const  compchoice=()=>{
const k=["stone","paper","scissors"];
return ( k[Math.floor(Math.random()*3)]);
};

rst.addEventListener("click",()=>{
    location.reload();
})
const playgame=(userchoice) =>{
    let computerchoice=compchoice();
if((userchoice==="scissors" && computerchoice==="paper") || (userchoice==="paper" && computerchoice==="stone") ||(userchoice==="stone" && computerchoice==="scissors")){
    ys++;
    sc1.innerHTML=ys;
    p.innerHTML="";
    p.innerHTML=`You Won! your ${userchoice} beats ${computerchoice} `;
    p.style.backgroundColor="green";
}
else if((userchoice==="scissors" && computerchoice==="stone")|| (userchoice==="stone" && computerchoice==="paper")|| (userchoice==="paper" && computerchoice==="scissors")){
cs++;
sc2.innerHTML=cs;
p.innerHTML="";
p.innerHTML=`You lost! ${computerchoice} beats your ${userchoice}`;
p.style.backgroundColor="red";
}
else{
console.log("Draw");
p.innerHTML="";
p.innerHTML=`Its a Draw! Both played  ${userchoice} `;
p.style.backgroundColor="blue";
}
};

choices.forEach((choice)=>{
choice.addEventListener("click",()=>{
 const userchoice=choice.getAttribute("class");
playgame(userchoice);
}
)

})