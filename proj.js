var movingpic = 1;
setInterval(function
  (){
  document.getElementById('radio' + movingpic).checked=true;
  movingpic++;
  if(movingpic >4){
    movingpic=1;
  }

},3000);