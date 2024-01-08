var numberOfDrumButtons = document.querySelectorAll(".drum").length;


for (let i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonClicked = this.innerHTML
        playSound(buttonClicked);
        buttonAnimate(buttonClicked);
    });
}

document.addEventListener("keydown", function(event){
    playSound(event.key);
    buttonAnimate(event.key);
});

function playSound(instruction) {

    switch (instruction) {
        case "w":
            var playTom1 = new Audio("sounds/tom-1.mp3");
            playTom1.play();
        break;

        case "a":
            var playTom2 = new Audio("sounds/tom-2.mp3");
            playTom2.play();
        break;

        case "s":
            var playTom3 = new Audio("sounds/tom-3.mp3");
            playTom3.play();
        break;

        case "d":
            var playTom4 = new Audio("sounds/tom-4.mp3");
            playTom4.play();
        break;

        case "j":
            var playSnare = new Audio("sounds/snare.mp3");
            playSnare.play();
        break;

        case "k":
            var playCrash = new Audio("sounds/crash.mp3");
            playCrash.play();
        break;

        case "l":
            var playKick = new Audio("sounds/kick-bass.mp3");
            playKick.play();
        break;
    
        default: console.log(buttonInnerHTML);
            break;
    }
}
    
function buttonAnimate(currentButton) {
    var activeButton = document.querySelector("."+currentButton);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}