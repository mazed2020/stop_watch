let isstop=true;
let second=0;
let minutes=0;
let hours=0;
let output=document.getElementById("display");
let outputValue=output.innerText;
 
// let startButton=document.getElementsByClassName('start-next');

//console.log(startButton);
//function for reset here
function reset(){
    isstop=true;
    second=0;
    minutes=0;
    hours=0;
    output.innerText=outputValue 

}
 
 function start(){
    //console.log("starting");
   isstop=false;
   if(isstop==false){
    timer();
   }
 }
 function timer(){
    //console.log("timer running")
    if(isstop==false)
    {
        second=parseInt(second);
        minutes=parseInt(minutes);
        hours=parseInt(hours);
       
        second++;
        if(second==60){
            second=0;
             minutes++;
        }
        if(minutes==60){
            minutes=0;
            hours++;
        }

        if(second<10){
           second="0"+ second ;
        }
        if(minutes<10){
            minutes="0"+ minutes; 
         }
         if(hours<10){
             hours="0"+ hours;
         }
       output.innerText=hours + " : " + minutes + " : " +second;
        setTimeout("timer()",1000);

    }
 }

 function stop(){
  if(isstop==false){
    isstop=true;
  }
 }
