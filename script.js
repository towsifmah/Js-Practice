var rect = document.querySelector("#center");

rect.addEventListener("mousemove" , function (details){
    var rectangleLocation =rect.getBoundingClientRect();
    var insiderectval = details.clientX - rectangleLocation.left;

    if(insiderectval < rectangleLocation.width/2){
       var Redcolor = gsap.utils.mapRange(0 , rectangleLocation.width/2 , 255 , 0 , insiderectval);
       gsap.to(rect,{
        backgroundColor:`rgb(${Redcolor },0,0)`,
        ease:Power4,
       })
    } else{
        var Greencolor = gsap.utils.mapRange(rectangleLocation.width/2 , rectangleLocation.width , 0 ,255 ,insiderectval);
        gsap.to(rect,{
            backgroundColor:`rgb(0,${Greencolor},0)`,
            ease:Power4
        })
    }
});

rect.addEventListener("mouseleave" , function(){
    gsap.to(rect , {
        backgroundColor:"white"
    })
})
