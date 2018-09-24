// import breathing from "./breathing"
//var breathing = require("./breathing")
//can't split without having a back end which I don't wish to imlement at this time
$(document).ready(function(){
    //this will eventually be called on load of all sound bites
    landingTitleAnimation();
    
    //on click of start button fade out main so it's only canvas for the portal animation
    $('body').on('click', '#startButton', function(){
        //delete main for the tundercrash
        $('#main').remove();
        //canvas animations

        //call the portal animation

        //on end of the portal animation call new div
    });
});

// a special function for timing out some fades and sounds
function landingTitleAnimation() {
    //fade out the title
    setTimeout(function(){ 
        document.getElementById('initialTitle').className='initialTitle1';
    }, 3000);
    //give the title new text and fade back in
    setTimeout(function(){ 
        $('#initialTitle').text('are you ready?')
        document.getElementById('initialTitle').className='initialTitle';
    }, 6000);
    //fade the title out again
    setTimeout(function(){ 
        document.getElementById('initialTitle').className='initialTitle1';
    }, 10000);
    //replace title with button
    setTimeout(function(){ 
        $('#initialTitle').remove()
        $('#main').append('<button class="firstButton1" id="startButton">');
        $('#startButton').html("Show me the way<br> I want into the Abyss");
    }, 13000);
    //fade the button in
    setTimeout(function(){ 
        document.getElementById('startButton').className='firstButton';
        //also must add in fades for sign in later
    }, 13005);
};

