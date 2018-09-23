$(document).ready(function(){

    function landingText() {
        setTimeout(function(){ 
            $('#initialTitle').text('are you ready?');
        }, 3000);
        setTimeout(function(){ 
            $('#main').append('<button class="button firstButton" id="startButton" />');
            $('#startButton').text('Dive into the Abyss');
        }, 4000);
    }

    landingText();

    function opacity(direction, node){
        
    }
})