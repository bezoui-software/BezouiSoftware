
if (localStorage.getItem("visitedCount")!=""){
localStorage.setItem("visitedCount",parseInt(localStorage.getItem("visitedCount"))+1);
}else{
localStorage.setItem("visitedCount",1);
}



$(window).resize(function(){
  if ($(window).width()>=600){
var element = document.querySelector("#links");
     if (element.style.opacity == 0){
      autoDisplay("#links");
     }
  }
});
function ScrollTo(element, align="center", scrollType="smooth"){
var element = document.querySelector(element);
element.scrollIntoView({ behavior: scrollType, block: align});
}

function autoDisplay(element, idle="block"){
var rotateZ=90;
var top="43px";
var element = document.querySelector(element);
var arrow = document.querySelector("#show-navbar");
    if (element.style.opacity == 0){
        element.style.opacity = 1;
        rotateZ=-90;
    }else{
        top="0"
        element.style.opacity = 0;
        rotateZ=90;
    }
    
        element.style.top=top;
var style="transform: rotateZ("+rotateZ.toString()+"deg)";
arrow.style = style;
   

}
