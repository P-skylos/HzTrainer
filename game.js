var frequency = 50;
var types = ["sine", "square", "sawtooth", "triangle"];
var type = types[1];
var precision = 30;

function randomize(){
    frequency = Math.floor(Math.random() * (10000-20) + 20);
    type = types[Math.floor(Math.random()*4)];
}

function check_and_update(){
    let status = document.getElementById("status_box");
    let guess = document.getElementById("guess").value;
    guess=parseInt(guess);
    if (guess > (frequency + precision)){
        status.innerText = "too high.";
    }
    else if (guess < (frequency - precision)){
        status.innerText= "too low.";
    }
    else if(guess){
        status.innerText= `good job! the tone was ${frequency}Hz! it's now a new random tone.`;
        randomize();
    }
    else{
        
    }
    console.log(guess);
}

//set up
// randomize()