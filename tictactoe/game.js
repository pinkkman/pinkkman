let boxes=document.querySelectorAll(".box");
let rstbtn=document.querySelector("#rstbtn");
let winner= document.querySelector(".winner h1");

const wcon=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [6,4,2],
    [0,3,6],
    [1,4,7],
    [2,5,8]
]

checkwinner=()=>{
for (pattern  of wcon){
    console.log(pattern[0],pattern[1],pattern[2]);
    let ps1=boxes[pattern[0]].innerText;
    let ps2=boxes[pattern[1]].innerText;
    let ps3=boxes[pattern[2]].innerText;
    if(ps1!="" && ps2!="" && ps3!=""){
if(ps1===ps2 && ps2===ps3){
    return true;
}
    }
}
};


let turn0=true;//x or y
boxes.forEach((box)=>{
    box.addEventListener("click",() =>{
console.log("button clicked");
if (turn0===true ){
    box.innerHTML="X";
    turn0=false;
}else{
    box.innerHTML="O";
    turn0=true;
}
box.disabled=true;

checkwinner();
if(checkwinner()){
    if(turn0==false){
        alert("X WON!");
    }
    else {
        alert("O WON!");
    }
    location.reload();
}
    } );

});

rstbtn.addEventListener("click",()=>{
    location.reload();
})
