let i = 0;
function show() {
    i++
    if (i == 1) {
       $('.header__info').css({
           'background': `url(./img/area.jpg) center center / cover no-repeat`,
           transition: '1s'
       }) 
    } else if (i == 2) {
        $('.header__info').css({
            'background': `url(./img/code.jpg) center center / cover no-repeat`,
            transition: '1s'
        }) 
    } else if (i == 3) {
        $('.header__info').css({
            'background': `url(./img/write.png) center center / cover no-repeat`,
            transition: '1s'
        }) 
    }
  
    else if (i == 4) {
        $('.header__info').css({
            'background': `url(./img/prog.png) center center / cover no-repeat`,
            transition: '1s'
        }) 
    }
  


    if (i == 5) {
        i = 0;
    }
    setTimeout(() => {
        show()
    }, 5000);
}

setTimeout(() => {
    show()
}, 5000);