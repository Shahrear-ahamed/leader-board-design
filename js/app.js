document.getElementById("top-player").style.color = "rgba(245, 40, 145, 0.8)";
document.getElementById("top-blog").style.color = "rgba(245, 40, 145, 0.8)";

const players= document.getElementsByClassName("player");
for(const player of players){
    player.style.backgroundColor = "rgba(84, 125, 142, 0.21)";
    player.style.margin = "0 5px"
    player.style.padding = "0 5px"
    player.style.borderRadius = "10px"
}

document.getElementById("add-li").addEventListener("click", function(){
    const father = document.getElementById("extra-list");
    const li = document.createElement("li");
    li.innerText = "hi are you ok";
    father.appendChild(li);
});
function updateValue(isAdd){
    const numberTest = document.getElementById("numbers");
    const numberAmount = parseInt(numberTest.value);
    const plus = document.getElementById("plus-number");
    const minus = document.getElementById("minus-number");
    if(isAdd){
        numberTest.value = numberAmount+1
        if(numberTest.value>= 5){
            plus.setAttribute("disabled", true);
        }else{
            minus.removeAttribute("disabled", true);
        }
    }else{
        numberTest.value = numberAmount-1
        if(numberTest.value< 1){
            minus.setAttribute("disabled", true);
        }else{
            plus.removeAttribute("disabled", true);
        }
    }
}

document.getElementById("plus-number").addEventListener("click", function(){
    updateValue(true)
})
document.getElementById("minus-number").addEventListener("click", function(){
    updateValue(false)
})