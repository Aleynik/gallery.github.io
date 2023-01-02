var isStart = false;
// create new element Audio
var audio = new Audio();
// Show direction of music
audio.src = "./music/jingle.mp3";
//play and pause audio DIV with CLASS=MAIN ONCLICK
function playAudio() {
    if (isStart) {
        audio.pause();
        isStart = false;
    } else {
        audio.play();
        isStart = true;
    }
} 