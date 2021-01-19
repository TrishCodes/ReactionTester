
                var start = new Date().getTime();
              
              
                 function getRandomColor() {             
                  
                  
                  var letters = '0123456789ABCDEF'.split('');
                  var color = '#';
                  for (var i = 0; i < 6; i++){
                      
                      color += letters[Math.floor(Math.random() *16)];
                  }
                  return color;
              }
              
              function makeShapeAppear() {
                  var top = Math.random() * 400; 
                  var left = Math.random() * 400;
                  var width = (Math.random() *200)+100;// SO the minimun size will be a 100px
                  
                  
        //Make the shape a circle 50% of the time
                  
                  if(Math.random() > 0.5){
                      
                      document.getElementById("shape").style.borderRadius = "50%";
                  }
                  
                  else{
                          document.getElementById("shape").style.borderRadius = "0";
                      
                  }
                  
                  document.getElementById("shape").style.backgroundColor = getRandomColor();   
                  document.getElementById("shape").style.width = width +"px";
                  document.getElementById("shape").style.height = width +"px"; // Looks like we want to make the width and height equal
                  document.getElementById("shape").style.top = top +"px";
                  document.getElementById("shape").style.left = left +"px";
                  document.getElementById("shape").style.display = "block";
                  start = new Date().getTime();
                  
              }
              
             function appearAfterDelay(){
                 
                setTimeout(makeShapeAppear, Math.random() *1000); 
                 
             }
                   
             
              appearAfterDelay(); //makes the shape appear after a random delay, kaili onPageLoad the shape doesnt display
              
    
document.getElementById("shape").onclick = function(){

document.getElementById("shape").style.display = "none";    
    var end = new Date().getTime();
    var timeTaken = (end - start)/1000;
document.getElementById("timeTaken").innerHTML = timeTaken + "s";
  appearAfterDelay();

}
              
              
              
      