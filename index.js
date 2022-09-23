var numberOfDrumButtons=document.querySelectorAll(".drum").length;

for (var i=0;i<numberOfDrumButtons; i++)
{

document.querySelectorAll("button")[i].addEventListener("click", function() {
    
   this.style.color="white";
} );

// In above code of event listener we have made use of ananomous function! 
// what happen here is instead of just passing whole function like "finction_name()" 
//we declare the function there in add event listener attributes.



}




//var audio = new Audio('sounds/crash.mp3');
//audio.play();