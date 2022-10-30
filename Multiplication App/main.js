


let num1 = Math.ceil(Math.random()*10);
let num2 = Math.ceil(Math.random()*10);



const fromEl = document.getElementById("from");
// const scoroEl = document.getElementById("scoro");
const quesEl = document.getElementById("question");
const inputEl = document.getElementById("input");
// const submitEL = document.getElementById("submit");


let scoro = 0;
quesEl.innerText = `what is ${num1} multiply by ${num2} `;
const correctAns = num1 * num2;
// console.log(ans);


fromEl.addEventListener("submit" ,()=>{
   const userAns = inputEl.value ;
    console.log(userAns, typeof userAns);
    if(userAns === correctAns){
        scoro++;
        console.log(scoro);
    }
    else{
        scoro--;
        console.log(scoro);
    }

})

