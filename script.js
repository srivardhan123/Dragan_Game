score = 0;
cross=true;
audio = new Audio('bgmusic.mp3');
audiogo = new Audio('endmusic.mp3');
setTimeout(() => {
    audio.play()
}, 1000);

document.addEventListener('keydown',function(e){
    console.log("key code is ",e.key);
    if (e.key == "ArrowUp") {
        dino = document.querySelector('.hero');
        dino.classList.add('animatehero');
        setTimeout(() => {
            dino.classList.remove('animatehero')
        }, 700);
    }
    if (e.key == "ArrowRight") {
        dino = document.querySelector('.hero');
        dinox = parseInt(window.getComputedStyle(hero,null).getPropertyValue('left'));
        dino.style.left= dinox + 80 + "px";
    }
    if (e.key == "ArrowLeft") {
        dino = document.querySelector('.hero');
        dinox = parseInt(window.getComputedStyle(hero,null).getPropertyValue('left'));
        dino.style.left= dinox - 80 + "px";
    }
})

setInterval(() => {
    hero = document.querySelector('.hero');
    gameover  = document.querySelector('.gameover');
    villian = document.querySelector('.villian');

    dx= parseInt(window.getComputedStyle(hero,null).getPropertyValue('left'));
    dy= parseInt(window.getComputedStyle(hero,null).getPropertyValue('top'));

    vx= parseInt(window.getComputedStyle(villian,null).getPropertyValue('left'));
    vy= parseInt(window.getComputedStyle(villian,null).getPropertyValue('top'));  
    
    offsetx = Math.abs(dx-vx);
    offsety = Math.abs(dy-vy);
    if(offsetx < 150 && offsety<52){
        gameover.innerHTML  = 'GameOver -Reload to play again';
        villian.classList.remove('animatevillian');
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000);
    }else if (offsetx < 180 && cross) {
        score += 1;
        updateScore(score);
        console.log(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(villian, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.03;
            villian.style.animationDuration = newDur + 's';
            console.log('New animation duration: ', newDur)
        }, 500);
    }
},10);

function updateScore(score) {
    scoreCont.innerHTML = "Your Score: " + score
}