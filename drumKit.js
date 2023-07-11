//button press
var n=document.querySelectorAll('.drum').length;
for(var i=0; i<n;i++){
    document.querySelectorAll('button')[i].addEventListener("click", function(){
        
        this.style.color="blue"
        var b= this.innerHTML;
        createVoice(b);
        
    });
}

//keypress
document.addEventListener("keypress",(event)=>{
     createVoice(event.key)
})

//Make sound
function createVoice(b){
     switch(b){
          case 'w': var audio= new Audio('./s1.wav');
          audio.play()
          break;
  
          case 'a':var audio= new Audio('./s2.wav');
               audio.play()
          break;
          case 's':var audio= new Audio('./s3.wav');
               audio.play()
          break;
          case 'd':var audio= new Audio('./s4.mp3');
               audio.play()
          break;
          case 'j': var audio= new Audio('./s5.wav');
          audio.play()
          break;
  
          case 'k': var audio= new Audio('./s6.wav');
          audio.play()
          break;
          case 'l': var audio= new Audio('./s7.wav');
          audio.play()
          break;
          default:
           alert("Not a right button");
          break;
         }
}