const images=[
    'https://images.unsplash.com/photo-1570824104453-508955ab713e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1911&q=80',
    'https://images.unsplash.com/photo-1589883661923-6476cb0ae9f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    'https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=868&q=80',
    'https://images.unsplash.com/photo-1583795128727-6ec3642408f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=757&q=80',
    'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=860&q=80'
]

const n=images.length;
const flexContainer=document.getElementById('flex-container');
const leftButton=document.getElementById('left-btn');
const rightButton=document.getElementById('right-btn');
const carouselNav=document.getElementById('carousel-nav');

const containerWidth=80;
const flexContainerWidth=n*containerWidth;
flexContainer.style.width = flexContainerWidth;

for (let i=0; i<n; i++) {
    const newImg = document.createElement('img');
    newImg.src=images[i];
    newImg.classList.add('img-style');
    flexContainer.appendChild(newImg);

    const dot=document.createElement('div');
    dot.classList.add('carousel-dot');
    carouselNav.appendChild(dot);
    dot.addEventListener('click',(event)=>{
        const index=[...carouselNav.children].indexOf(event.target)
        showImg(index);
    })
}

let currentPosition=0;
showImg(0);
leftButton.addEventListener('click',()=>{
    if (currentPosition>0) {
        showImg(currentPosition-1)
    } else {
        showImg(n-1);
    }
})

rightButton.addEventListener('click',()=>{
    if (currentPosition<n-1) {
        showImg(currentPosition+1);
    } else {
        showImg(0);
    }
})

function showImg(position) {
    const prevDot=carouselNav.children[currentPosition];
    prevDot.classList.remove('active');
    currentPosition=position;
    const curDot=carouselNav.children[currentPosition];
    curDot.classList.add('active');
    const translateXDistance = -currentPosition * containerWidth;
    flexContainer.style.transform=`translateX(${translateXDistance}vw)`;

}