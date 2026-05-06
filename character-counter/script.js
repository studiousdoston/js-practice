const textInput = document.getElementById("text-input");
const counter = document.getElementById("counter")
const limit = 50
textInput.addEventListener("input", () => {
  if(textInput.value.length >= limit){
    textInput.value = textInput.value.slice(0,limit)
    textInput.style.borderColor = "red"
    counter.style.color = "red"
   }else{
    textInput.style.borderColor = "black";
    counter.style.color = "black";
   }
  counter.textContent = "Character Count: " + textInput.value.length + "/50";
});

