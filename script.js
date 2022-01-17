// -------------------------- what are the init settings? ---------------------------------- //
var audioOnDeck = document.getElementById('b1p1');
var isAudioPlaying = 0;
var pitchOnDeck = 1;
var bankOnDeck = 1;
audioOnDeck.volume = .5
isPlaying.volume = .5

// ----------------------------- who's who of HTML input ------------------------------------ //
var master = document.getElementById('masterslider');
var fISlider = document.getElementById('fadein');
var fOSlider = document.getElementById('fadeout');

/* -------------------------- work in progress ------------------------------------
fISlider.oninput = function newFITime() {}

fOSlider.oninput = function newFOTime() {}
function test() {
  console.log( y );  
}
--------------------------------------------------------------------------------*/

// -------------------------------- what's the funtion? ----------------------------------- //
function playPause() {
    if (isAudioPlaying == 0) {
      playPad(); }
    else {
      pausePad(); }
}
function playPad() { 
    audioOnDeck.play();
    isAudioPlaying = 1;
    isPlaying = audioOnDeck;
    console.log(isPlaying);
}
function pausePad() {
    isPlaying.pause();
    isAudioPlaying = 0;
}
master.oninput = function newVolume() {
    y = Math.log (master.value) / Math.log (100);
    isPlaying.volume = y;
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
