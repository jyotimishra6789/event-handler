var tl=gsap.timeline();
tl.from(".nav li",{
    y:-20,
    opacity:0,
    duration:1,
    stagger:0.3,
})
var firstClick=0;
const aside = document.querySelector(".side_nav");
function O(){
if(firstClick===0){
    aside.style.display='block';
    firstClick=1;
}else{
        aside.style.display='none';
        firstClick=0;
    }
}
