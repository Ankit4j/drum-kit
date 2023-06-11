
let numberOfButtons = document.querySelectorAll(".drum").length;
for(let i = 0;i < numberOfButtons;i++)
    document.querySelectorAll(".drum")[i].addEventListener("click",function() {
        
    let ch = this.innerHTML;
    makeSound(ch);
    makeAnimation(ch);
});

document.addEventListener("keydown", function(event) {
    let ch = event.key;
    makeSound(ch);
    makeAnimation(ch);
});

function makeSound(key) {
    switch (key) {
    case 'w' :  let audiow = new Audio("sounds/crash.mp3");
                audiow.play();
                break;

    case 'a' :  let audioa = new Audio("sounds/kick-bass.mp3");
                audioa.play();
                break;

    case 's' :  let audios = new Audio("sounds/snare.mp3");
                audios.play();
                break;

    case 'd' :  let audiod = new Audio("sounds/tom-1.mp3");
                audiod.play();
                break; 
        
    case 'j' :  let audioj = new Audio("sounds/tom-2.mp3");
                audioj.play();
                break;

    case 'k' :  let audiok = new Audio("sounds/tom-3.mp3");
                audiok.play();
                break;
                
    case 'l' :  let audiol = new Audio("sounds/tom-4.mp3");
                audiol.play();
                break; 
    
    default:    alert("wrong button");

    }
}

function makeAnimation(pressedKey) {
    let currentKey = document.querySelector("." + pressedKey);
    currentKey.classList.add("pressed");

    setTimeout(function() {
        currentKey.classList.remove("pressed");
    }, 100);
}

