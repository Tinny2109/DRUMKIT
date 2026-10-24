document.addEventListener("keydown", function(event){
    const key = event.key.toLowerCase();
    const sound = document.getElementById("sound_" + key);
    if (sound) {
        sound.currentTime=0;
        sound.play();
    }
    const btn = document.querySelector("." + key);
    if (btn){
        btn.classList.add("pressed");
        setTimeout(function(){
            btn.classList.remove("pressed");
        }, 50);
    }
});