var audio_game = new sound('sounds/Fantasy Choir 1.wav');
var audio_end = new sound('sounds/10-ending.mp3');
var audio_win = new sound('sounds/Green Hills.mp3');
var audio_meow = new sound('sounds/Meow.ogg');
var audio_door = new sound('sounds/door.wav');


function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}