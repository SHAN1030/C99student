var speech=window.webkitSpeechRecognition;//speech to text
var recognition = new speech();
function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;
    if(content == "Take my selfie"){
      speak();
    }
 }
 function speak(){
    var synth = window.speechSynthesis;//speak out the converted text
    speak_data ="Taking your selfie in five seconds";
    var utter = new SpeechSynthesisUtterance(speak_data);//text to speech
    synth.speak(utter);
    Webcam.attach(camera);
    setTimeout(function(){
      take_snapshot();
    }, 5000);
 }
 Webcam.set({
    width: 360,
    height: 250,
    image_format:'png',
    png_quality: 90
 });
 camera = document.getElementById("camera");
 function take_snapshot(){
   Webcam.snap(function(data_uri){
      document.getElementById("result").innerHTML = "<img id = 'selfie_image' src = '" + data_uri + "'>";
   });
 }
 function save(){
   link = document.getElementById("link");
   image = document.getElementById("selfie_image");
   link.href = image;
   link.click();
 }
