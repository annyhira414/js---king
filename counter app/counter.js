const counterEl = document.getElementById("counter");

const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement ");
const resetEl = document.getElementById("reset");

const input_btn_incrementEl = document.getElementById("input_btn_increment")
const input_btn_decrementEl = document.getElementById("input_btn_decrement")



// input_btn_incrementEl.addEventListener("click", ()=>{
//     value.innerHTML++;
// });

// input_btn_decrementEl.addEventListener("click", ()=>{
//     value.innerHTML--;
// });

 function myIncrement(){
    let userIncrement = input_btn_incrementEl;

    let valueEl = document.querySelector("#value");
    // userIncrement.innerHTML = valueEl.innerHTML++;
    valueEl.innerHTML = userIncrement.value;
 }

 
//   kolija aage amr project ta run korraba .ai ponto thik ache ,
// akhon recurement chnage hoyse , akhon input e ami je value dibo ,
// like 2 dilam , akhon increment button press korly akhon 2.. 2 kore  berbe   mane 2,4,6,8,10, amon  
// .aber jodi 4 dey tahole 4 4 kore berbe    4,8,12,16,20 amon kore .  


  /* function myIncrement(){
    let userIncrement = input_btn_incrementEl;

    let valueEl = document.querySelector("#value");
    // userIncrement.innerHTML = value.innerHTML++;
    let take = userIncrement.value
    let adding = getincrement + take;
    console.log(adding)
     valueEl.innerHTML = adding;
    

 } */


// let count = 0 ;

incrementEl.addEventListener("click", ()=>{
    value.innerHTML++;
});

decrementEl.addEventListener("click", ()=>{
    value.innerHTML--;
});

resetEl.addEventListener("click", ()=>{
    value.innerHTML= 0;
});