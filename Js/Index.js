'use strict'
// Start Slider //

const imgsSlidEl=document.querySelectorAll('.sliderImg')
const prevSlidEl=document.querySelector('.prev-slider')
const nextSlidEl=document.querySelector('.next-slider')
let activeSlider=0

const nextSlidFunc=()=>{
    imgsSlidEl[activeSlider].classList.remove('show')
    activeSlider++
    if(activeSlider===imgsSlidEl.length-1)activeSlider=0
    imgsSlidEl[activeSlider].classList.add('show')
}

setInterval(nextSlidFunc,4000)

nextSlidEl.addEventListener('click',nextSlidFunc)

prevSlidEl.addEventListener('click',()=>{
    imgsSlidEl[activeSlider].classList.remove('show')
    activeSlider--
    if(activeSlider===-1)activeSlider=imgsSlidEl.length-1
    imgsSlidEl[activeSlider].classList.add('show')    
})

// Finish Slider 
// start modal offer //

const modal=document.querySelector('.modal')

window.onload=()=>{
    modal.classList.add('active')
}
setTimeout(()=>{
modal.classList.remove('active')
}, 5000)
window.onclick=(e)=>{
    if(e.target!==modal){
        modal.classList.remove('active')
    }
}

// finish modal offer //
// Start Time For Login Page

const timeEl=document.querySelector('timeLoginPage')
timeEl.textContent=new Date().toLocaleTimeString()
let clock=setInterval(()=>{
	timeEl.textContent=new Date().toLocaleTimeString()
} , 1000)

// End Time For Login Page
