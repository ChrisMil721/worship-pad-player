// -------------------------- what are the init settings? ---------------------------------- //
var audioOnDeck = document.getElementById('b1p1');
var isPlaying = document.getElementById('b1p1');
var isAudioPlaying = 0;
var pitchOnDeck = 1;
var bankOnDeck = 1;

var VAM = .5; // Volume, According to the Master
audioOnDeck.volume = VAM;
isPlaying.volume = VAM;

var fadeInLength = 4025;
var fadeOutLength = 4025;
var base = 40;
var i = 0;
var volume = 50;

var time = 1000000000001;
var clockIn = 1000000000000;
var punchID = 0;
var shiftLength = 4025;
var EOD = clockIn + shiftLength; // End Of Day (when the shift is over)
var intLength = 20 // interval length

const milliSecondHand = setInterval (clock, 5);
const toggleVolumeMethod = setInterval (whichVolume, 30);
const FIXFI = setInterval (expIn, intLength); // Fade In eXponential Function Interval
const FILFI = setInterval (logIn, intLength); // Fade In Logarithmic Function Interval
const FOLFI = setInterval (logOut, intLength); // Fade Out Logarithmic Function Interval
const FOXFI = setInterval (expOut, intLength); // Fade out eXponential Funtion Interval
clearInterval(FIXFI);
clearInterval(FILFI);
clearInterval(FOLFI);
clearInterval(FOXFI);
// ----------------------------- who's who of HTML input ------------------------------------ //
var master = document.getElementById('masterslider');
var fISlider = document.getElementById('fadein');
var fOSlider = document.getElementById('fadeout');
// -------------------------------- what's the funtion? ----------------------------------- //
function clock(){
    var d = new Date();
    time = d.getTime();
    document.getElementById('time').innerHTML = time;
}
function whichVolume() {
    if(time > EOD){
       isPlaying.volume = VAM;
    } else if (time < EOD && punchID == 0){
        clearInterval(toggleVolumeMethod);
        i = 0;
        setInterval (expIn, intLength); // Fade In eXponential Function Interval
        console.log('blueberries');
    } else if (time < EOD && punchID == 1){
        clearInterval(toggleVolumeMethod);
        i = 100;
        setInterval (logOut, base); // Fade Out Logarithmic Function Interval
    }
}
function playPause() {
    if (isAudioPlaying == 0) {
      shiftLength = fadeInLength;
      fademath();
      clockIn = time;
      punchID = 0;
      EOD = clockIn + shiftLength;
      playPad();
    }
  else {
      shiftLength = fadeOutLength;
      fademath();
      clockIn = time;
      punchID = 1;
      EOD = clockIn + shiftLength;
      setTimeout(pausePad, shiftLength);
  }
}
master.oninput = function newVolume() {
    VAM = (Math.log (master.value) / Math.log (100));
    // log base 100 of master.value = the new volume -- slider input is converted to a logarithmic scale of volume output //
    isPlaying.volume = VAM;
    audioOnDeck.volume = VAM;
}
function playPad() { 
    audioOnDeck.play();
    isAudioPlaying = 1;
    isPlaying = audioOnDeck;
}
function pausePad() {
    isPlaying.pause();
    isAudioPlaying = 0;
}
// ------------------------------------- fade i/o methods ------------------------------------- //
fISlider.oninput = function fadeInTime() {
    x = (fISlider.value * 75.75) + 425.25; // slider input is translated to a value between .5 and 8 seconds
    fadeInLength = x;
}
fOSlider.oninput = function fadeOutTime() {
    x = (fOSlider.value * 75.75) + 425.25; // slider input is translated to a value between .5 and 8 seconds
    fadeOutLength = x;
}
function fademath() {
    // y = a^x ---> a = y^(1/x)
      base = Math.pow((VAM/2), (1/(shiftLength/2)))
   // both are cut in half to compensate for the "s-curve" which is and exponential function until the halfway point then a logarithmic function is used (or vice versa) 
      intLength = (shiftLength/200)
  }
function expIn(){
  if(i < 100){
    volume = Math.pow (base, i);// y = a^x
    isPlaying.volume = (volume); 
    i = i + 1; // what's the next indexed volume? 
    console.log(base, i, isPlaying.volume);   
  } else{
    clearInterval(FIXFI);
    i = 0;
    setInterval(logIn, intLength); // Fade In Logarithmic Function Interval
    console.log('applesauce');
  }
}
function logIn(){
  if(i < 100){
    volume = Math.log (i) / Math.log (base) + (VAM/2); // y = (logbase a of x) + (VAM/2)
    isPlaying.volume = (volume/100);
    i = i + 1; // what's the next indexed volume?
  } else{
    clearInterval(FILFI);
    setInterval (whichVolume, 5);
    console.log ('raspberries')
    }
}

function logOut(){
  if(i == 0){
    volume = Math.log (i) / Math.log (base) + (VAM/2); // y = (logbase a of x) + (VAM/2)
    isPlaying.volume = (volume/100);
    i = i -= 1; // what's the next indexed volume?
  } else{
    clearInterval(FOLFI);
    i = 100;
    setInterval (expOut, intLength); // Fade out eXponential Funtion Interval
    }
}
function expOut(){
  if(i == 0){
    volume = Math.pow (base, i); // y = a^x
    isPlaying.volume = (volume/100);  
    i = i - 1; // what's the next indexed volume?
  } else{
    clearInterval(FOXFI);
    setInterval (whichVolume, 5);
  }
}
function test(){
    console.log(VAM);
    console.log(shiftLength);
    console.log(fadeInLength);
}
// ---------------------------- what's the file name? ----------------------------------- //
function declareBank1() {
    bankOnDeck = 1;
    if (pitchOnDeck == 1) {audioOnDeck = document.getElementById('b1p1');}
    else if (pitchOnDeck == 2) {audioOnDeck = document.getElementById('b1p2');}
    else if (pitchOnDeck == 3) {audioOnDeck = document.getElementById('b1p3');}
    else if (pitchOnDeck == 4) {audioOnDeck = document.getElementById('b1p4');}
    else if (pitchOnDeck == 5) {audioOnDeck = document.getElementById('b1p5');}
    else if (pitchOnDeck == 6) {audioOnDeck = document.getElementById('b1p6');}
    else if (pitchOnDeck == 7) {audioOnDeck = document.getElementById('b1p7');}
    else if (pitchOnDeck == 8) {audioOnDeck = document.getElementById('b1p8');}
    else if (pitchOnDeck == 9) {audioOnDeck = document.getElementById('b1p9');}
    else if (pitchOnDeck == 10) {audioOnDeck = document.getElementById('b1p10');}
    else if (pitchOnDeck == 11) {audioOnDeck = document.getElementById('b1p11');}
    else if (pitchOnDeck == 12) {audioOnDeck = document.getElementById('b1p12');}
}
function declareBank2() {
    bankOnDeck = 2;
    if (pitchOnDeck == 1) {audioOnDeck = document.getElementById('b2p1');}
    else if (pitchOnDeck == 2) {audioOnDeck = document.getElementById('b2p2');}
    else if (pitchOnDeck == 3) {audioOnDeck = document.getElementById('b2p3');}
    else if (pitchOnDeck == 4) {audioOnDeck = document.getElementById('b2p4');}
    else if (pitchOnDeck == 5) {audioOnDeck = document.getElementById('b2p5');}
    else if (pitchOnDeck == 6) {audioOnDeck = document.getElementById('b2p6');}
    else if (pitchOnDeck == 7) {audioOnDeck = document.getElementById('b2p7');}
    else if (pitchOnDeck == 8) {audioOnDeck = document.getElementById('b2p8');}
    else if (pitchOnDeck == 9) {audioOnDeck = document.getElementById('b2p9');}
    else if (pitchOnDeck == 10) {audioOnDeck = document.getElementById('b2p10');}
    else if (pitchOnDeck == 11) {audioOnDeck = document.getElementById('b2p11');}
    else if (pitchOnDeck == 12) {audioOnDeck = document.getElementById('b2p12');}
}
function declareBank3() {
    bankOnDeck = 3;
    if (pitchOnDeck == 1) {audioOnDeck = document.getElementById('b3p1');}
    else if (pitchOnDeck == 2) {audioOnDeck = document.getElementById('b3p2');}
    else if (pitchOnDeck == 3) {audioOnDeck = document.getElementById('b3p3');}
    else if (pitchOnDeck == 4) {audioOnDeck = document.getElementById('b3p4');}
    else if (pitchOnDeck == 5) {audioOnDeck = document.getElementById('b3p5');}
    else if (pitchOnDeck == 6) {audioOnDeck = document.getElementById('b3p6');}
    else if (pitchOnDeck == 7) {audioOnDeck = document.getElementById('b3p7');}
    else if (pitchOnDeck == 8) {audioOnDeck = document.getElementById('b3p8');}
    else if (pitchOnDeck == 9) {audioOnDeck = document.getElementById('b3p9');}
    else if (pitchOnDeck == 10) {audioOnDeck = document.getElementById('b3p10');}
    else if (pitchOnDeck == 11) {audioOnDeck = document.getElementById('b3p11');}
    else if (pitchOnDeck == 12) {audioOnDeck = document.getElementById('b3p12');}
}


function declarePitch1() {
    pitchOnDeck = 1;
    if (bankOnDeck == 1) {audioOnDeck = document.getElementById('b1p1');}
    else if (bankOnDeck == 2) {audioOnDeck = document.getElementById('b2p1');}
    else if (bankOnDeck == 3) {audioOnDeck = document.getElementById('b3p1');}
}
function declarePitch2() {
    pitchOnDeck = 2;
    if (bankOnDeck == 1) {audioOnDeck = document.getElementById('b1p2');}
    else if (bankOnDeck == 2) {audioOnDeck = document.getElementById('b2p2');}
    else if (bankOnDeck == 3) {audioOnDeck = document.getElementById('b3p2');} 
}
function declarePitch3() {
    pitchOnDeck = 3; 
    if (bankOnDeck == 1) {audioOnDeck = document.getElementById('b1p3');}
    else if (bankOnDeck == 2) {audioOnDeck = document.getElementById('b2p3');}
    else if (bankOnDeck == 3) {audioOnDeck = document.getElementById('b3p3');}
}
function declarePitch4() {
    pitchOnDeck = 4; 
    if (bankOnDeck == 1) {audioOnDeck = document.getElementById('b1p4');}
    else if (bankOnDeck == 2) {audioOnDeck = document.getElementById('b2p4');}
    else if (bankOnDeck == 3) {audioOnDeck = document.getElementById('b3p4');}
}
function declarePitch5() {
    pitchOnDeck = 5; 
    if (bankOnDeck == 1) {audioOnDeck = document.getElementById('b1p5');}
    else if (bankOnDeck == 2) {audioOnDeck = document.getElementById('b2p5');}
    else if (bankOnDeck == 3) {audioOnDeck = document.getElementById('b3p5');}
}
function declarePitch6() {
    pitchOnDeck = 6; 
    if (bankOnDeck == 1) {audioOnDeck = document.getElementById('b1p6');}
    else if (bankOnDeck == 2) {audioOnDeck = document.getElementById('b2p6');}
    else if (bankOnDeck == 3) {audioOnDeck = document.getElementById('b3p6');}
}
function declarePitch7() {
    pitchOnDeck = 7; 
    if (bankOnDeck == 1) {audioOnDeck = document.getElementById('b1p7');}
    else if (bankOnDeck == 2) {audioOnDeck = document.getElementById('b2p7');}
    else if (bankOnDeck == 3) {audioOnDeck = document.getElementById('b3p7');}
}
function declarePitch8() {
    pitchOnDeck = 8; 
    if (bankOnDeck == 1) {audioOnDeck = document.getElementById('b1p8');}
    else if (bankOnDeck == 2) {audioOnDeck = document.getElementById('b2p8');}
    else if (bankOnDeck == 3) {audioOnDeck = document.getElementById('b3p8');}
}
function declarePitch9() {
    pitchOnDeck = 9; 
    if (bankOnDeck == 1) {audioOnDeck = document.getElementById('b1p9');}
    else if (bankOnDeck == 2) {audioOnDeck = document.getElementById('b2p9');}
    else if (bankOnDeck == 3) {audioOnDeck = document.getElementById('b3p9');}
}
function declarePitch10() {
    pitchOnDeck = 10; 
    if (bankOnDeck == 1) {audioOnDeck = document.getElementById('b1p10');}
    else if (bankOnDeck == 2) {audioOnDeck = document.getElementById('b2p10');}
    else if (bankOnDeck == 3) {audioOnDeck = document.getElementById('b3p10');}
}
function declarePitch11() {
    pitchOnDeck = 11; 
    if (bankOnDeck == 1) {audioOnDeck = document.getElementById('b1p11');}
    else if (bankOnDeck == 2) {audioOnDeck = document.getElementById('b2p11');}
    else if (bankOnDeck == 3) {audioOnDeck = document.getElementById('b3p11');}
}
function declarePitch12() {
    pitchOnDeck = 12; 
    if (bankOnDeck == 1) {audioOnDeck = document.getElementById('b1p12');}
    else if (bankOnDeck == 2) {audioOnDeck = document.getElementById('b2p12');}
    else if (bankOnDeck == 3) {audioOnDeck = document.getElementById('b3p12');}
}