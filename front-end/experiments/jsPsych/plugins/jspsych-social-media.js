/**
 *
 * social media sharing, CMB @ Harvard Music Lab
 *
 * Adapted from Mariela Jennings jspsych-display-prediction plugin
 *
**/

function definePlugin (){
var plugin = {};

plugin.info= {
	name: 'display-prediction',
	description:'This plugin displays a prediction in a visually appealing way!',
	parameters: {
	prediction1: {
        type: [jsPsych.plugins.parameterType.ARRAY],
        default: undefined,
        description: 'This is the first prediction to be displayed, in the example case this is the participant\'s native language'
      },
  prediction2: {
        type: [jsPsych.plugins.parameterType.ARRAY],
        default: undefined,
        description: 'This is the second prediction to be displayed, in the example case this is the participant\'s dialect'
      },
      quizURL: {
        type: [jsPsych.plugins.parameterType.STRING],
        default: null,
        description: 'URL to be used with social media post'
      },
      subjectLine: {
        type: [jsPsych.plugins.parameterType.STRING],
        default: null,
        description: 'Subject line for an email (something to do with the quiz the participant just took)'
      },
      teaserPart1: {
        type: [jsPsych.plugins.parameterType.STRING],
        default: '',
        description: 'teaser about your results part 1'
      },
      teaserPart2: {
        type: [jsPsych.plugins.parameterType.STRING],
        default: '',
        description: 'teaser about your results part 2'
      },
      teaserPart3: {
        type: [jsPsych.plugins.parameterType.STRING],
        default: '',
        description: 'teaser about your results part 3'
      },
      socialPost1: {
        type: [jsPsych.plugins.parameterType.STRING],
        default: '',
        description: 'teaser about your results part 3'
      },
 buttonText: {
        type: [jsPsych.plugins.parameterType.STRING],
        default: 'Finish',
        description: 'Button label'
      },
  mailButtonImg:{
        type: [jsPsych.plugins.parameterType.STRING],
        default: '',
        description: 'Path to image to be used for the mail button.'
      },
  fbButtonImg:{
        type: [jsPsych.plugins.parameterType.STRING],
        default: '',
        description: 'Path to image to be used for the Facebook button.'
      },
   twitterButtonImg:{
        type: [jsPsych.plugins.parameterType.STRING],
        default: '',
        description: 'Path to image to be used for the Twitter button.'
      },
   weiboButtonImg:{
        type: [jsPsych.plugins.parameterType.STRING],
        default: '',
        description: 'Path to image to be used for the Weibo button.'
      }
	}

}

plugin.trial= function (display_element, trial) {
  var _join = function( /*args*/ ) {
      var arr = Array.prototype.slice.call(arguments, _join.length);
      return arr.join(separator = '-');
    }



if (trial.teaserPart1 != '' || trial.teaserPart2 != '' || trial.teaserPart3 != ''  || trial.socialPost1 != '' || trial.socialPost2 != '' || trial.socialPost3 != ''){

//assembling the trial
var teaserDiv = document.createElement("div")
display_element.appendChild(teaserDiv)

//text and results for page
teaserDiv.innerHTML +='<p style="font-family:Arial;">'+trial.teaserPart1+''+trial.prediction1[0]+''+trial.teaserPart2+'</p><br><p><b>Share your results!</b></p>';
}

//text and results to post to social medi
var teaser = ''+trial.socialPost1+''+trial.prediction1+''+trial.teaserPart3+'';
 //trial = jsPsych.pluginAPI.evaluateFunctionParameters(trial); (this is only useful for jsPsych 5, if you wanted to use this plugin with it)
var prediction1 = trial.prediction1
var prediction2 = trial.prediction2


if (prediction1.length>prediction2.length){
  lengthToUse = prediction1.length
 // for (i=prediction2.length; i<=prediction2.length + (prediction1.length-prediction2.length); i++){
 //  prediction2.push(' ')
 //  //I want matching numbers on both sides, but don't want to get undefined, so pushing an empty string
 // }

} else {lengthToUse = prediction2.length}





///buttons
var socialDiv = document.createElement('div');

var mailimg = document.createElement('img')
mailimg.src = trial.mailButtonImg
mailimg.setAttribute("height", "100");
mailimg.setAttribute("width", "100");
var mailTo = document.createElement('a');
mailTo.href = 'mailto:?body='+teaser+'&subject='+trial.subjectLine+''
mailTo.appendChild(mailimg);
socialDiv.appendChild(mailTo);

display_element.appendChild(socialDiv)

var fbimg = document.createElement('img')
fbimg.src = trial.fbButtonImg 
fbimg.setAttribute("height", "100");
fbimg.setAttribute("width", "100");
var fblink = document.createElement('a');
fblink.href = 'https://www.facebook.com/sharer.php?u='+trial.quizURL
fblink.appendChild(fbimg);
socialDiv.appendChild(fblink);

var twitterimg = document.createElement('img')
twitterimg.src = trial.twitterButtonImg 
twitterimg.setAttribute("height", "100");
twitterimg.setAttribute("width", "100");
var twitterlink = document.createElement('a');
twitterlink.href = 'https://twitter.com/intent/tweet?url='+trial.quizURL+'&text='+teaser;
twitterlink.appendChild(twitterimg);
socialDiv.appendChild(twitterlink);


var buttonDiv = document.createElement('div')
buttonDiv.innerHTML+='<br><br><br>'
display_element.appendChild(buttonDiv)
var button = document.createElement('button');
button.setAttribute('type','button');
button.setAttribute('class', 'jspsych-btn')
buttonDiv.appendChild(button);
button.innerHTML=trial.buttonText;
button.addEventListener('click', () => {jsPsych.finishTrial({})});










}
return plugin;
}

jsPsych.plugins['display-prediction'] = definePlugin() ;


