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
    Shery.mouseFollower({
        skew: true,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 0.5,
      });
    var video = document.querySelector("#video-container video");
    var videoContainer = document.querySelector("#video-container");
    videoContainer.addEventListener("mouseenter",function(){
        videoContainer.addEventListener("mousemove",function(dets){
            gsap.to(".mousefollower",{
                opacity:0
            });
            gsap.to("#video-cursor",{
                left: dets.x - 430,
                top: dets.y  -170
            });
        });
    });
   
    videoContainer.addEventListener("mouseleave",function(){
        gsap.to("#video-cursor",{
            top:"-10%",
            left:"70%"
        });
        gsap.to(".mousefollower",{
            opacity:1
        })
    });




    var flag = 0;
    videoContainer.addEventListener("click",function(){
        if(flag==0){
            video.play();
            video.style.opacity = 1;
            document.querySelector("#video-cursor").innerHTML = `<i class="ri-pause-large-fill"></i>`;
            gsap.to("#video-cursor",{
                scale:0.5
            })
            flag = 1;
        }
        else{
            video.pause();
            video.style.opacity = 0;
            document.querySelector("#video-cursor").innerHTML = `<i class="ri-play-large-fill"></i>`;
            gsap.to("#video-cursor",{
                scale:1
            })
            flag = 0;
        }
       
    })
    Shery.makeMagnet("#nav-part2 h4");   //we used shery js librery here 
}
function sheryAnimation(){
    Shery.imageEffect(".image-div", {
        style: 6,
        config: {"noiseDetail":{"value":7.44,"range":[0,100]},"distortionAmount":{"value":2.98,"range":[0,10]},"scale":{"value":36.36,"range":[0,100]},"speed":{"value":0.79,"range":[0,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6666666666666666},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":2.01,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.61,"range":[0,10]},"metaball":{"value":0.47,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.47,"range":[0,2]},"noise_scale":{"value":7.63,"range":[0,100]}},
        gooey: true,
      });
}
function flagAnimation(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#flag",{
            x:dets.x,
            y:dets.y,
            xPercent: -50,
            yPercent: -50
        })
    })
    
    document.querySelector("#hero3").addEventListener("mouseenter",function(){
        gsap.to("#flag",{
            opacity:1
        })
    })
    document.querySelector("#hero3").addEventListener("mouseleave",function(){
        gsap.to("#flag",{
            opacity:0
        })
    })
}

loadingAnimation(); //loading animation function ko call kiya
cursorAnimation();  //cursor animation function ko call kiya
locomotiveAnimation(); //locomotive scrolltriggeer wala animation call kiya 
sheryAnimation();   //gooey effect is se aya h 
flagAnimation();

var textAnimate = document.querySelector("#footer h1");
textAnimate.addEventListener("mouseenter",function(){
    gsap.to("#footer h1",{
        fontFamily: 'Silk Serif',   //pehela ki ye change nhi ho rhi h
        onStart:function(){
            $('#footer h1').textillate({ in: { effect: 'fadeIn' } });
        }
    })
})

textAnimate.addEventListener("mouseleave", function () {  //dusra ki ye nhi kr rha work
    gsap.to("#footer h1", {
        onStart: function () {
            $('#footer h1').textillate({ in: { effect: 'fadeOut' } }); 
        }
    });
});
