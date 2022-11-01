const  quizData =[
    
    {
        question: "how old is hafiz ",
        a: '12',
        b: '13',
        c: '15',
        d: '17',
        correct: "c"
    },
    {
        question: "what is the most used programimh langualge in 2019?",
        a: "java",
        b: "javascript",
        c: "python",
        d: "PHP",
        correct: "b",
    },

    {
        question: "what is the most popularity js framework in 2022?",
        a: "React",
        b: "Angula",
        c: "jQurey",
        d: "vue.js",
    },

    {
        question : "Inside which HTML element do we put the JavaScript? ",
        a: "<javascript>",
        b: "<js>",
        c: "<cj>",
        d: "<script>",
    },

];

const questionEl = document.getElementById("question");
const a_text = document.getElemantById("a_text");
const b_text = document.getElemantById("b_text");
const c_text = document.getElemantById("c_text");
const d_text = document.getElemantById("d_text");





let currentQuiz= 0;
loadQuiz();

function loadQuiz(){
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    
    
     
    currentQuiz++;
}
