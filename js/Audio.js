var audio_game = new sound('images/02-overworld.mp3');
var audio_end = new sound('images/10-ending.mp3');
var audio_meow = new sound('images/Meow.ogg');


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