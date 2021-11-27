let container = document.getElementById("container");
let btnNext = document.getElementById("next");
let slides = document.querySelectorAll(".slide");
let sliders = [];
for (let i = 0; i< slides.length; ++i){
    sliders[i] = slides[i].querySelector('img');
    slides[i].remove()
}
let step = 0;
let offset = 0;

function drow(){
    let slide = document.createElement("div");
    slide.classList.add("slide");
    slide.appendChild(sliders[step])
    slide.style.left = offset*container+"px"
    document.querySelector(".slider").appendChild(slide)
    if (step+1==slides.length){
        step=0;
    } else{
        step++
    }
    offset=1
}
drow(); drow();
function left(){
    btnNext.removeEventListener('click', left)
    let slides2 = document.querySelectorAll(".slide")
    let offset2 = 0;
    for (let i=0; i< slides2.length; i++){
        slides2[i].style.left = offset2*container-container+"px"
        offset2++;
    }
    setTimeout(function(){
        slides2[0].remove()
        drow()
        btnNext.addEventListener("click", left)
    }, 500)
}
btnNext.addEventListener("click", left);



let btnBack = document.getElementById("back");

function drow1(){
    let slide1 = document.createElement("div");
    slide1.classList.add("slide");
    slide1.appendChild(sliders[step])
    slide1.style.right = offset*container+"px"
    document.querySelector(".slider").appendChild(slide1)
    if (step+1==slides.length){
        step=0;
    } else{
        step++
    }
    offset=1
}
drow1(); drow1();
function right(){
    btnBack.removeEventListener('click', right)
    let slides3 = document.querySelectorAll(".slide")
    let offset3 = 0;
    for (let i=0; i< slides3.length; i++){
        slides3[i].style.right = offset3*container-container+"px"
        offset3++;
    }
    setTimeout(function (){
        slides3[0].remove()
        drow1()
        btnBack.addEventListener("click", right)
    }, 500)
}
btnBack.addEventListener("click", right);
