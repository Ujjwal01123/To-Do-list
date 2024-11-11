let con=document.getElementById("con");
let box=document.querySelector(".box");
let btn=document.getElementById("btn");
let ADD=()=>{
    let input=document.getElementById("input");
    if(input.value===""){
        alert("Please enter your task...");
    }
    else{
        let newElement=document.createElement("ul");
        newElement.innerHTML=`${input.value} <span>&#10008;</span>`;
        box.appendChild(newElement);
        input.value="";
        newElement.querySelector("span").addEventListener("click",()=>{
            newElement.remove();
        })
    }
}
