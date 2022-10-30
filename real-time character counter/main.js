// we want to do is to add it event listener to this text element and , we tarck the writing inside this section

// alert("hi")

const textareaEl = document.getElementById("textarea");

const totalCharaterEl = document.getElementById("total-charater");
textareaEl.addEventListener("keyUp", ()=>{
    // console.log("the key ");
    updatedKey();

})

function updatedKey(){
    totalCharaterEl.innerHTML = textareaEl.value.length;
}

