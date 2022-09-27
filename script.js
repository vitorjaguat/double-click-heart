const loveMe = document.querySelector('.loveMe');
const times = document.querySelector('#times');

let clickTime = 0;
let timesClicked = 0;

//We could've used 'dblclick' event listener, but instead we decided to create our own double click listener:
loveMe.addEventListener('click', (e) => {
    if(clickTime === 0) {
        clickTime = new Date().getTime();
    } else {
        if((new Date().getTime() - clickTime < 800)) {
            createHeart(e);
            clickTime = 0;
        } else {
            clickTime = new Date().getTime();
        }
    }
})

const createHeart = (e) => {
    const heart = document.createElement('i');
    heart.classList.add('fas');
    heart.classList.add('fa-heart');

    const x = e.clientX;
    const y = e.clientY;
    //this are coordinates relative to the window
    const leftOffset = e.target.offsetLeft;
    const topOffset = e.target.offsetTop;
    //this are coordinates of the left and top borders (offsets) of the targeted element
    
    
    const xInside = x - leftOffset;
    const yInside = y - topOffset;

    heart.style.top = `${yInside}px`;
    heart.style.left = `${xInside}px`;

    loveMe.appendChild(heart);

    times.innerHTML = ++timesClicked

    setTimeout(() => heart.remove(), 1000);
}