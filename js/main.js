// import breathing from "./breathing"
//var breathing = require("./breathing")
//can't split without having a back end which I don't wish to imlement at this time
$(document).ready(function(){
    //this will eventually be called on load of all sound bites
    landingTextFader();

    //on click of start button fade out main so it's only canvas for the portal animation

    //call the portal animation

    //on end of the portal animation call new div


});

// a special function for timing out some fades and sounds
function landingTextFader() {
    //fade out the title
    setTimeout(function(){ 
        document.getElementById('initialTitle').className='initialTitle1';
    }, 3000);
    //give the title new text and fade back in
    setTimeout(function(){ 
        $('#initialTitle').text('are you ready?')
        document.getElementById('initialTitle').className='initialTitle';
    }, 4500);
    //fade in the button
    setTimeout(function(){ 
        document.getElementById('startButton').className='firstButton';
        document.getElementById('initialTitle').className='initialTitle2';
    }, 7000);
    //stager the title and the button & start the 'breathing' 
    setTimeout(function(){ 
        breathing();
    }, 8500);
}
function breathing() {
    setInterval(function(){
        var el = document.querySelector('h1.initialTitle2')
        if (el) {
            el.className = "initialTitle3";
        } 
        else {
            el = document.querySelector('h1.initialTitle3')
            el.className = "initialTitle2";
        }
        return el;
    }, 2500);
}
