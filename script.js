function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    
    
   
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
    
}
function loadingAnimation(){
    
var tl = gsap.timeline();   //By this animation will star one by one 
tl.from(".line h1",{        //Loader page text
    stagger:0.25,
    y:150,
    duration:0.6,
    delay:0.5
});

tl.from("#line1-part1",{      //0 to 100 loader animation
    opacity:0,
    onStart : function(){               //The function will run when loader animation get starts
        var line1Loader = document.querySelector("#line1-part1 h5");
        let count = 0;
    const interval = setInterval(() => {
        if (count <= 100) {
        line1Loader.innerHTML = count;
        count++;
  }
}, 30);                                 //In 30ms loading will get completed 
    }
});

tl.to(" .line h2" ,{
    animationName:"anime",
    opacity:1
})

tl.to("#loader",{                       //By this our page will disapper becouse of 0 opacity
    opacity:0,                          //We are doing this becouse we want loader page only for 3 sec
    delay:2.7,
    duration:1
});

tl.from("#page1" ,{
    y:1600,
    delay:0.2,
    opacity: 0,
    duration:0.5
});

tl.to("#loader",{
    display: "none"
})
tl.from("#nav",{
    opacity:0,
    y:10
})
tl.from("#hero1 h1, #hero2 h1, #hero4 h1" ,{    //hero3 h2 website pe nhi dikh rha
    y:140,
    stagger:0.2
},"a")
tl.from("#hero3 h1" ,{    //hero3 h1 website pe nhi dikh rha gsap me dikkt thi fir humne from ki jagah to lagaya gsap me
    y:140,
    delay:-0.4
})
tl.from("#hero1", {
    opacity:0
}, "-=1.2")
}
function cursorAnimation(){
    document.addEventListener("mousemove",function(dets){ //pure doccument pe jaha mouse move krega wha ki location mil jayegi
        gsap.to("#crsr" ,{                  //location jaha milegi wha animation kr dena cursur div ka 
            left:dets.x,                        
            top:dets.y
        })
        
    });
    
    Shery.makeMagnet("#nav-part2 h4");   //we used shery js librery here 
}
loadingAnimation(); //loading animation function ko call kiya
// cursorAnimation();  //cursor animation function ko call kiya
locomotiveAnimation(); //locomotive scrolltriggeer wala animation call kiya 