
let num1 = Math.ceil(Math.random()*10);
let num2 = Math.ceil(Math.random()*10);

const fromEl = document.getElementById("from");
const scoroEl = document.getElementById("score");
const quesEl = document.getElementById("question");
const inputEl = document.getElementById("input");
// const submitEL = document.getElementById("submit");


// let score = 0;
let score = JSON.parse(localStorage.getItem("score"));

if(!score){
 score = 0;              
}

scoroEl.innerText = `scoro :  ${score}`;


quesEl.innerText = `what is ${num1} multiply by ${num2} `;
const correctAns = num1 * num2;
// console.log(ans);


fromEl.addEventListener("submit", ()=>{
   const userAns = +inputEl.value ;
    // console.log(userAns, typeof userAns);
    if(userAns === correctAns){
        score++;
        updateLocalStorage();
    }
    
    else{
        score--;
        updateLocalStorage();
        
    }


    function updateLocalStorage(){
        localStorage.setItem("score", JSON.stringify(score))
    }

})

