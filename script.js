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
var logBase = 100;

var i = 1000000000001;
var clockIn = 1000000000000;
var punchID = 0;
var shiftLength = 4025;
var ECO = clockIn + shiftLength; // Expected Clock Out
var elapsedTime = i - clockIn;
var TUCO = shiftLength -= elapsedTime; // Time Until Clock Out

setInterval (time, 5);
setInterval (whichVolume, 5);
// ----------------------------- who's who of HTML input ------------------------------------ //
var master = document.getElementById('masterslider');
var fISlider = document.getElementById('fadein');
var fOSlider = document.getElementById('fadeout');
// -------------------------------- what's the funtion? ----------------------------------- //
function test() {
    console.log (punchID);
}
function time(){
    var d = new Date();
    i = d.getTime();
    document.getElementById('time').innerHTML = i;
}
function whichVolume() {
    if(i > ECO){
        isPlaying.volume = VAM
        console.log ( 0 )}
    else if (i < ECO && punchID == 0){
        elapsedTime = i -= clockIn;
        TUCO = shiftLength -= elapsedTime;
        isPlaying.volume = 1000*((Math.log (logBase) / Math.log (TUCO)));
        console.log ( isPlaying.volume );}
        // log base n of elapsed time = volume to output //
    else if (i < ECO && punchID == 1){
        elapsedTime = i -= clockIn;
        isPlaying.volume = 1000*((Math.log (logBase) / Math.log (elapsedTime)));
        console.log ( isPlaying.volume );
        // log base n of TUCO = volume to output //
    }}
master.oninput = function newVolume() {
    VAM = 1000*(Math.log (master.value) / Math.log (100));
    // log base 100 of master.value = the new volume -- slider input is converted to a logarithmic scale of volume output //
    isPlaying.volume = VAM;
    audioOnDeck.volume = VAM;
}
function playPause() {
    if (isAudioPlaying == 0) {
        fadeIn();
        clockIn = i;
        punchID = 0;
        shiftLength = fadeInLength;
        ECO = clockIn + shiftLength;
        playPad();
    }
    else {
        fadeOut();
        clockIn = i;
        punchID = 1;
        shiftLength = fadeOutLength;
        ECO = clockIn + shiftLength;
        setTimeout(pausePad, shiftLength);
    }
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
fISlider.oninput = function fadeInTime() {
    x = (fISlider.value * 75.75) + 425.25; // slider input is translated to a value between .5 and 8 seconds
    fadeInLength = x;
}
fOSlider.oninput = function fadeOutTime() {
    x = (fOSlider.value * 75.75) + 425.25; // slider input is translated to a value between .5 and 8 seconds
    fadeOutLength = x;
}
function fadeIn() {
    logBase = Math.pow( master.value, (1 / fadeInLength) );
    // this function uses the fade-in length and the fade-in depth (the current master position) to determine the log base needed to calculate the logarithmic fade //
}
function fadeOut() {
    logBase = Math.pow( master.value, (1 / fadeOutLength) );
    // this function uses the fade-out length and the fade-out depth (the current master position) to determine the log base needed to calculate the logarithmic fade //
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