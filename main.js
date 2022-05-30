x = 0;
y = 0;
screen_width = 0;
screen_height = 0;
apple = "";
speak_data = "";
to_number = "";
draw_apple = "";

function preload(){
  apple = loadImage("https://i.postimg.cc/k50qx5Jj/apple.png");
  to_number = Number(content);
  if(Number.isInteger(to_number))
  {
    draw_apple = "set";
  }
  else{
    draw_apple = "The sppech has not recognized a number";
  }
}
var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function setup() {
  screen_width = window.innerWidth;
  screen_height = window.innerHeight;
  canvas = createCanvas(screen_width,screen_height-150);
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
    for (let i = 1; i <= to_number; i++){
      x = Math.floor(Math.random()*700);
      y = Math.floor(Math.random*400);
      image(apple,x,y,50,50);
      document.getElementById("status").innerHTML = to_number + "Apples drawn";
      speak();
    }
      
    }
  
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
