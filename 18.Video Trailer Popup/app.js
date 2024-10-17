//btn
const btn = document.querySelector('.btn');
//close-btn
const closeIcon = document.querySelector('.close-icon');

//trailer-container
const traileContainer = document.querySelector('.trailer-container');


//Video
const video = document.querySelector('video')

btn.addEventListener('click',()=>{
    traileContainer.classList.remove('active');
})

closeIcon.addEventListener('click',()=>{
    traileContainer.classList.add('active');
    video.pause();
    video.currentTime = 0;
    
})
