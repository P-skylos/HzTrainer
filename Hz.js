function play(){
    var context = new (window.AudioContext || window.webkitAudioContext)();
    var osc = context.createOscillator();
    var vol = context.createGain();

    osc.frequency.value = frequency; // Hz
    osc.type = type; //sine, square, sawtooth, triangle
    vol.gain.value = 0.1; // 0-1

    //connect up to audio device
    osc.connect(vol);
    vol.connect(context.destination); 


    osc.start(); 
    osc.stop(context.currentTime + 2); //2 seconds 
};

