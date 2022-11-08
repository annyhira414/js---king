const mybuttonEl = document.querySelector(".MyBtn  button");
const RulesBoxEl = document.querySelector(".RulesBox");
const ExitButtonEl = document.querySelector(".Buttons .ExitButton");

const ContinueButtonEl = document.querySelector(".Buttons .ContinueButton");
const QuestionsEl = document.querySelector(".Questions");

const optionsList = document.querySelector(".MyOptions");

const nextBtnEl = document.querySelector(".nextBtn");

const TimeCountEl = document.querySelector(".TimeCount .Seconds");

const timeLines= document.querySelector("QuestionsHeader .time_lines");

// const textEl = document.querySelector(".text");

mybuttonEl.onclick = () => {
    RulesBoxEl.classList.add("activeInfo");

}

ExitButtonEl.onclick = () => {
    RulesBoxEl.classList.remove("activeInfo");
}

ContinueButtonEl.onclick = () => {
    RulesBoxEl.classList.remove("activeInfo");
    QuestionsEl.classList.add("activeQuiz");
    showQuestion(0);
    startTimer(15);
    // startTimeLine(0);
}


/// nextBtn 



let question_counterNetBtn = 0;
let counter; 
let timeValue = 15;
let counterLine;
let widthValue = 0;

nextBtnEl.onclick = () => {
    if(question_counterNetBtn < QuestionData.length - 1 ){
        question_counterNetBtn++;
        showQuestion(question_counterNetBtn);
        clearInterval(counter);
        startTimer(timeValue);
        nextBtnEl.style.display ="none";
        // clearInterval(counterLine);
        // startTimeLine(widthValue);
       
    }
}

function showQuestion(index) {
    const textEl = document.querySelector(".text");
  
    const option_tag =  '<div class="options">'+ QuestionData[index].options[0] +  '</div>' 
    + '<div class="options">'+ QuestionData[index].options[1] +  '</div>' 
    + '<div class="options">'+ QuestionData[index].options[2] +  '</div>'
    + '<div class="options">'+ QuestionData[index].options[3] +  '</div>'

    let que_tag = "<span>" + QuestionData[index].num +  ". " + QuestionData[index].question + "</span>";
    textEl.innerHTML = que_tag;

    optionsList.innerHTML = option_tag;
    

    const total_queEl = document.querySelector(".total_que");
    const show_total_queEl  = '<p>'+ QuestionData[index].num + ' of 5 </p>';
    total_queEl.innerHTML = show_total_queEl;
    
   
     const option = optionsList.querySelectorAll(".options");
    //  option.forEach(option)

    for( let i = 0 ; i < option.length;  i++){
        option[i].setAttribute("onclick",  "optionSelected(this)")
    }
    

}

let tick = '<div class="tick icon"><i class="fas fa-check"></i></div>'
let cross = '<div class="cross icon"><i class="fas fa-times"></i></div>'

function optionSelected(answers){
    clearInterval(counter)  // kono option seleted korly time stop hoye jabe . 
    let userAns = answers.textContent;
    let correctAns = QuestionData[question_counterNetBtn].answer;
    let allOption =  optionsList.children.length;
    if(userAns == correctAns){
        answers.classList.add("correct"); // correct ans hole -> change color 
        console.log("ans is right");
        answers.insertAdjacentHTML("beforeend", tick);

    }
    else{
        answers.classList.add("incorrect");
        console.log("ans is not right")
        answers.insertAdjacentHTML("beforeend", cross);


        for(let i=0; i< allOption ; i++){
            if( optionsList.children[i].textContent == correctAns){
                optionsList.children[i].setAttribute("class" , "options correct") // ai kaj ta korra jonno now ans vul dile right ans ta show korbe . 
                optionsList.children[i].insertAdjacentHTML("beforeend", tick);

            }
        }
    }

    for( let i = 0 ; i < allOption ; i++){
        optionsList.children[i].classList.add("disabled")  // akta selete korra por others option e selete kora jabe na 
    }
  

    nextBtnEl.style.display ="block"; // ans na dile button show korbe na
    
}


function startTimer(time){
    counter = setInterval(timer , 1000)
    function timer(){
        TimeCountEl.textContent = time;
        time--;
  
        if(time < 9){
            TimeCountEl.textContent = "0" + TimeCountEl.textContent;
        }
       
        if(time < 0){
            clearInterval(counter)
            TimeCountEl.textContent = "00";
        }
    }

   
 
}

// function startTimeLine(time){
//     counterLine = setInterval(timer , 50);
//     function timer(){
//         time += 1;
//         timeLines.style.width = time + "px";
//         console.log("hi i am time" + time)
//         if(time > 319){
//             clearInterval(counterLine);
//         }
//     }
// }