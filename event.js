gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();


tl.from(".nav", {
    y: -20,
    opacity: 0,
    duration: 0.5,
    delay: 1,
});

tl.from(".nav li", {
    y: -20,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    delay: 1,
});


var firstClick = 0;
const aside = document.querySelector(".side_nav");

function toggleSideNav() {
    const tl = gsap.timeline();
    if (firstClick === 0) {
        aside.style.display = 'block';
        tl.from(".side_nav", {
            y: -60,
            duration: 1,
            opacity: 0,
            delay: 1,
        })
        .from(".side_nav li", {
            x: -20,
            opacity: 0,
            duration: 1.5,
            stagger: 0.3,
        });
        firstClick = 1;
    } else {
        aside.style.display = 'none';
        firstClick = 0;
    }
}


tl.from(".img-container", {
    y: 20,
    opacity: 0,
    duration: 1,
    delay: 1,
});

tl.from(".text-overlay h2", {
    opacity: 0,
    y: -20,
    duration: 1,
    delay: 1,
})
.from(".text-overlay h3", {
    opacity: 0,
    y: -5,
    duration: 1,
}, "-=0.5")
.from(".text-overlay h4", {
    opacity: 0,
    y: -10,
    duration: 1,
}, "-=0.5");


gsap.utils.toArray("#about, #who, #how, #photo1").forEach(section => {
    tl.from(section, {
        opacity: 0,
        y: -20,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
            trigger: section,
            start: "top 80%", 
            end: "bottom 40%", 
            scrub: true, 
             
        }
    });
});


tl.from(".ftr", {
    x: -20,

    duration: 2,
    stagger: 3,
    delay:1,
    scrollTrigger: {
        trigger: "#footer",
       start:"top 80%",
    }
});


tl.from("#footer", {
    y: 20,
    opacity: 0,
   
    duration: 0.5,
    stagger: 0.3,
    
    scrollTrigger: {
        trigger: "#footer",

    }
});

