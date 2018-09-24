$(document).ready(function(){

    // a special function for timing out some fades and sounds
    function landingText() {
        setTimeout(function(){ 
            document.getElementById('initialTitle').className='initialTitle1';
        }, 3000);
        setTimeout(function(){ 
            $('#initialTitle').text('are you ready?')
            document.getElementById('initialTitle').className='initialTitle';
        }, 4500);
        setTimeout(function(){ 
            document.getElementById('startButton').className='firstButton';
        }, 7000);
    }

    //this will eventually be called on load of all sound bites
    landingText();


})