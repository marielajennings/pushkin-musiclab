jsPsych.plugins["timer"] = (function() {

  var plugin = {};

  jsPsych.pluginAPI.registerPreload('audio-countdown-keyboard-response', 'stimulus', 'audio');

  plugin.info = {
    name: 'audio-countdown-keyboard-response',
    description: '',
    parameters: {
      time: {
        type: jsPsych.plugins.parameterType.INTEGER,
        pretty_name: 'Time',
        default: undefined,
        description: 'the duration of the timer'
      }
      
    }
  }

  plugin.trial = function(display_element, trial) {

    



var timerDiv = document.createElement('div')
timerDiv.setAttribute('id', 'timerdiv')
display_element.appendChild(timerDiv)



// function initializeClock(id){
//   var clock = document.getElementById(id);
//   var timeinterval = setInterval(function(){
//     var t = 15
//     clock.innerHTML = 'time remaining(secs) ' + t
//     if(t<=0){
//       clearInterval(timeinterval);
//     }
//   },1000);
// }



//initializeClock('timerdiv');



function startTimer(duration, display) {
   var timer = duration, minutes, seconds;
    setInterval(function () {
        seconds = parseInt(timer % 60, 10);
       display_element.innerHTML = seconds;
      if (--timer < 0) {
           timer = 0;
       }
            }, 1000);
}
    var maxtimer = 14,
            display = document.querySelector('#time');
     startTimer(maxtimer, display);
     display_element.innerHTML = display;







}

  return plugin;
})();
