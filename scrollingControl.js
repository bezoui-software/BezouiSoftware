const controller = new ScrollMagic.Controller();
var tl1 = new TimelineMax();
var tl2 = new TimelineMax();
var tl3 = new TimelineMax();
const fadeOut ={
opacity: 0,
y: 200
};
const fadeIn ={
opacity: 1,
y: -200
};

tl1.add(TweenMax.from(".skills",0.3, fadeOut));
tl1.add(TweenMax.from(".skill",0.3, fadeOut));
tl1.add(TweenMax.from(".skill .value",0.5,{width:"10%"}));

const scene1 = new ScrollMagic.Scene({
triggerElement: ".skills",
triggerHook: 0.5,
})	
   .setTween(tl1)
   .addTo(controller);


$('.fullscreen-light').each(function() {
  // build a tween
  tl2 = new TimelineMax();
  tl2.add(TweenMax.from($(this),0.3, fadeOut));
  tl2.add(TweenMax.from($(this).id+" #texts",0.3, fadeOut));
  // build a scene
  var scene5 = new ScrollMagic.Scene({
        triggerElement: this,
	triggerHook: 0.5,
        reverse: true,
  })
  .setTween(tl2)
  .addTo(controller);
  
});




$('footer').each(function() {
  
  // build a tween
  var tl3 = TweenMax.to($(this), 3, fadeOut);
  // build a scene
  var scene3 = new ScrollMagic.Scene({
        triggerElement: this,
	triggerHook: 0.5,
        reverse: true,
        duration: 3000
  })
  .setTween(tl3)
  .setPin(this)
  .addTo(controller);
  
});






