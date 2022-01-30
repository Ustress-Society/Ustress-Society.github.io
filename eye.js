var balls = document.getElementsByClassName("ball");
document.onmousemove = function(e){
  var x = e.clientX * 100  / window.innerWidth + "%";
  var y = e.clientY * 100  / window.innerHeight + "%" ;
  //event.clientX => get the horizontal coordinate of the mouse
  //event.clientY => get the Vertical coordinate of the mouse
  //window.innerWidth => get the browser width
  //window.innerHeight => get the browser height
  var eyeN = 28;

  for(var i=0;i<eyeN;i++){
	
  balls[i].style.left = x;
	balls[i].style.top = y;
	balls[i].style.transform = "translate(-"+ x +", -"+ y +")";
  }
}