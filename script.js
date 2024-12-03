// gsap scrolltriger js satrt 


// orientation section 
var div1 = gsap.timeline({scrollTrigger:{
    trigger:".orientation-main",
    start:"50% 50%",
    end:"50% 0%",
    scrub:true,
    markers:false,

}})

div1.to("#orientation-scroll-img", {
    position:"relative",
    top:"550px",
    left:"150%",

})

// graphics section
var div2 = gsap.timeline({scrollTrigger:{
    trigger:".graphics",
    start:"50% 50%",
    end:"50% 0%",
    scrub:true,
    markers:false,

}})

div2.to("#orientation-scroll-img", {
    position:"relative",
    top:"1020px",
    left:"-5%",
})


// accesibility research section 
var div3 = gsap.timeline({scrollTrigger:{
    trigger:".Research-main",
    start:"50% 50%",
    end:"50% 0%",
    scrub:true,
    markers:false,

}})
div3.to("#orientation-scroll-img", {
    position:"relative",
    top:"1520px",
    left:"150%",
})


// user section 
var div4 = gsap.timeline({scrollTrigger:{
    trigger:".user",
    start:"50% 50%",
    end:"50% 0%",
    scrub:true,
    markers:false,

}})
div4.to("#orientation-scroll-img", {
    position:"relative",
    top:"2000px",
    left:"-5%",
})

// development of onboard section 
var div5 = gsap.timeline({scrollTrigger:{
    trigger:".onboard",
    start:"50% 50%",
    end:"50% 0%",
    scrub:true,
    markers:false,

}})
div5.to("#orientation-scroll-img", {
    position:"relative",
    top:"2500px",
    left:"150%",
})


// wp section 
var div6 = gsap.timeline({scrollTrigger:{
    trigger:".wp",
    start:"50% 50%",
    end:"50% 0%",
    scrub:true,
    markers:false,

}})
div6.to("#orientation-scroll-img", {
    position:"relative",
    top:"3000px",
    left:"-5%",
})