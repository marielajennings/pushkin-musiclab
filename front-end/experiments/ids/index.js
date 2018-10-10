/* eslint-disable max-len */

require('script-loader!../jsPsych/jspsych.js');
require('script-loader!../jsPsych/plugins/jspsych-html-keyboard-response.js');
require('script-loader!../jsPsych/plugins/jspsych-social-media.js');
require('script-loader!../jsPsych/plugins/jspsych-survey-multi-select.js');
require('script-loader!../jsPsych/plugins/jspsych-survey-multi-choice.js');
require('script-loader!../jsPsych/plugins/jspsych-html-button-response2.js');
require('script-loader!../jsPsych/plugins/jspsych-html-button-response2-vert.js');
require('script-loader!../jsPsych/plugins/jspsych-survey-text.js');
require('script-loader!../jsPsych/plugins/jspsych-audio-imageButton-response-loop.js');
require('script-loader!../jsPsych/plugins/jspsych-image-keyboard-response.js')
require('script-loader!../jsPsych/plugins/jspsych-audio-keyboard-response-loop.js');
require('script-loader!../jsPsych/plugins/jspsych-audio-button-response-vert.js');
;
require('script-loader!../jsPsych/plugins/jspsych-audio-imageButton-response-training.js');
require('script-loader!../jsPsych/plugins/jspsych-audio-keyboard-response-training.js');





import React from 'react';
import ReactResizeDetector from 'react-resize-detector';
import { browserHistory } from 'react-router';
import axiosIDS from './axiosIDS';
import baseUrl from '../../core/baseUrl';
import s from './ids.css';
//import Responsive from 'react-responsive-decorator';



class IDS extends React.Component {


  constructor(props) {
    super(props);
    this.state = { loading: true };
    this.hideLoading = this.hideLoading.bind(this);
    this.onResize = this.onResize.bind(this);
    window.addEventListener('resize', this.onResize.bind(this));
    // this is an important workaround to clear any generated jspsych stuff that stays in the dom once even if you switch pages (because it's a single page app you're not actually switching pages, and also,  because jspysch generates dom nodes out of the scope of react, there's no automatic garbage collection). if you don't do do the following, there's a chance the experiment could accidentally carry on in the background.
    browserHistory.listen(() => {
      jsPsych.endExperiment();
      window.location.reload();
    });
  }
  hideLoading(props) {
    this.setState({ loading: false });
  }



  //Fixed onResize (doesn't break the quiz anymore)
  onResize() {
    const margin =
      (document.documentElement.clientHeight -
        document.getElementById('header').scrollHeight -
        document.getElementById('footer').scrollHeight -
        15 -
        document.getElementById('jsPsychTarget').scrollHeight) /
      2;
    if (margin > 0) {
      document.getElementById('jsPsychTarget').style.marginTop = `${margin}px`;
    } else {
      document.getElementById('jsPsychTarget').style.marginTop = '0px';
    }
  }

 
 
 isMobile() {
  let check = false;
  (function(a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|dolfin|dolphin|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|iPhone|iPod|playbook|silk/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
}
   
   

  componentDidMount() {


if (!this.isMobile()){

    /* access to class in inline functions */
    const _this = this;
    /* jspsych timeline */
    const timeline = [];
    const dataArray = [];
    let stims;
    let user;
    var self = this;
    let count;
    let reactionMean;


// for (var i=0; i<118; i++){
// new_track = `${baseUrl}/quizzes/fc/audio/TML-RAW-${info[i].track}.mp3`
// tracks.push(new_track)
// }
  // on_finish: function(){
  //   document.getElementById("jsPsychTarget").focus()
  //   document.getElementById("jsPsychTarget").style.outline='none'
  // }

// var saveDataOnFinish= function(data){
//   const toSend = data;
//   return axiosFC
//         .post('/stimulusResponse', {
//         user_id: self.props.user.profile.id,
//         data_string: toSend,
//         })    
  
// };


//Experiment w/out getAllStimuli
// new Promise((resolve, reject) => {
//     timeline.push(welcome1, ready1, songTest1, social1)
//     resolve();
// })
//      .then(() => {
//         _this.hideLoading();
//         document.getElementById("jsPsychTarget").focus()
//         document.getElementById("jsPsychTarget").style.outline='none'
//       })
//       .then(() => {

//       jsPsych.init({
//           timeline: timeline,
//           preload_audio: tracks,
//           use_webaudio: false,
//          display_element: this.refs.jsPsychTarget,
//           on_finish: function() {
//             jsPsych.data.displayData();
//           },
//           default_iti: 250
//       });
//       })

var img = ['baby', 'adult'];
var labelR = jsPsych.randomization.shuffle(img);
  var imgR = [`${baseUrl}/quizzes/fc/img/${labelR[0]}.jpg`, 
`${baseUrl}/quizzes/fc/img/${labelR[1]}.jpg`];

let imgData1;

if (labelR[0] == img[0])
    imgData1 =
      [{correct_response: 'baby', key: 'f', other_data: 'Key 70, left'},
      {correct_response: 'adult', key: 'j', other_data: 'Key 74, right'}];
  if (labelR[0] !== img[0])
    imgData1 =
      [{correct_response: 'baby', key: 'j', other_data: 'Key 74, right'},
      {correct_response: 'adult', key: 'f', other_data: 'Key 70, left'}];

jsPsych.data.addProperties({image_order1: imgData1});



/* audio setup */
  var tracks = [
      {stimulus: 'ACO01A', data1: imgData1[0]},
      {stimulus: 'HAD08A', data1: imgData1[0]},
      {stimulus: 'NYA04A', data1: imgData1[0]},
      {stimulus: 'TOR06A', data1: imgData1[0]},
      {stimulus: 'WEL07D', data1: imgData1[1]},
      {stimulus: 'ACO01B', data1: imgData1[0]},
      {stimulus: 'HAD08B', data1: imgData1[0]},
      {stimulus: 'NYA04B', data1: imgData1[0]},
      {stimulus: 'TOR06B', data1: imgData1[0]},
      {stimulus: 'WEL08A', data1: imgData1[0]},
      {stimulus: 'ACO01C', data1: imgData1[1]},
      {stimulus: 'HAD08C', data1: imgData1[1]},
      {stimulus: 'NYA04C', data1: imgData1[1]},
      {stimulus: 'TOR06C', data1: imgData1[1]},
      {stimulus: 'WEL08B', data1: imgData1[0]},
      {stimulus: 'ACO01D', data1: imgData1[1]},
      {stimulus: 'HAD08D', data1: imgData1[1]},
      {stimulus: 'NYA04D', data1: imgData1[1]},
      {stimulus: 'TOR06D', data1: imgData1[1]},
      {stimulus: 'WEL08C', data1: imgData1[1]},
      {stimulus: 'ACO02A', data1: imgData1[0]},
      {stimulus: 'HAD09A', data1: imgData1[0]},
      {stimulus: 'NYA05A', data1: imgData1[0]},
      {stimulus: 'TOR07A', data1: imgData1[0]},
      {stimulus: 'WEL08D', data1: imgData1[1]},
      {stimulus: 'ACO02B', data1: imgData1[0]},
      {stimulus: 'HAD09B', data1: imgData1[0]},
      {stimulus: 'NYA05B', data1: imgData1[0]},
      {stimulus: 'TOR07B', data1: imgData1[0]},
      {stimulus: 'WEL09A', data1: imgData1[0]},
      {stimulus: 'ACO02C', data1: imgData1[1]},
      {stimulus: 'HAD09C', data1: imgData1[1]},
      {stimulus: 'NYA05C', data1: imgData1[1]},
      {stimulus: 'TOR07C', data1: imgData1[1]},
      {stimulus: 'WEL09B', data1: imgData1[0]},
      {stimulus: 'ACO02D', data1: imgData1[1]},
      {stimulus: 'HAD09D', data1: imgData1[1]},
      {stimulus: 'NYA05D', data1: imgData1[1]},
      {stimulus: 'TOR07D', data1: imgData1[1]},
      {stimulus: 'WEL09C', data1: imgData1[1]},
      {stimulus: 'ACO03A', data1: imgData1[0]},
      {stimulus: 'HAD10B', data1: imgData1[0]},
      {stimulus: 'NYA06A', data1: imgData1[0]},
      {stimulus: 'TOR08A', data1: imgData1[0]},
      {stimulus: 'WEL09D', data1: imgData1[1]},
      {stimulus: 'ACO03B', data1: imgData1[0]},
      {stimulus: 'HAD10D', data1: imgData1[1]},
      {stimulus: 'NYA06B', data1: imgData1[0]},
      {stimulus: 'TOR08B', data1: imgData1[0]},
      {stimulus: 'WEL10A', data1: imgData1[0]},
      {stimulus: 'ACO03C', data1: imgData1[1]},
      {stimulus: 'JEN01A', data1: imgData1[0]},
      {stimulus: 'NYA06C', data1: imgData1[1]},
      {stimulus: 'TOR08C', data1: imgData1[1]},
      {stimulus: 'WEL10B', data1: imgData1[0]},
      {stimulus: 'ACO03D', data1: imgData1[1]},
      {stimulus: 'JEN01B', data1: imgData1[0]},
      {stimulus: 'NYA06D', data1: imgData1[1]},
      {stimulus: 'TOR08D', data1: imgData1[1]},
      //{stimulus: 'WEL10C', data1: imgData1[1]},
      {stimulus: 'ACO04A', data1: imgData1[0]},
      {stimulus: 'JEN01C', data1: imgData1[1]},
      {stimulus: 'NYA07A', data1: imgData1[0]},
      {stimulus: 'TOR09A', data1: imgData1[0]},
      {stimulus: 'WEL10D', data1: imgData1[1]},
      {stimulus: 'ACO04B', data1: imgData1[0]},
      {stimulus: 'JEN01D', data1: imgData1[1]},
      {stimulus: 'NYA07B', data1: imgData1[0]},
      {stimulus: 'TOR09B', data1: imgData1[0]},
      {stimulus: 'WEL11A', data1: imgData1[0]},
      {stimulus: 'ACO04C', data1: imgData1[1]},
      {stimulus: 'JEN02A', data1: imgData1[0]},
      {stimulus: 'NYA07C', data1: imgData1[1]},
      {stimulus: 'TOR09C', data1: imgData1[1]},
      {stimulus: 'WEL11B', data1: imgData1[0]},
      {stimulus: 'ACO04D', data1: imgData1[1]},
      {stimulus: 'JEN02B', data1: imgData1[0]},
      {stimulus: 'NYA07D', data1: imgData1[1]},
      {stimulus: 'TOR09D', data1: imgData1[1]},
      {stimulus: 'WEL11C', data1: imgData1[1]},
      {stimulus: 'ACO05A', data1: imgData1[0]},
      {stimulus: 'JEN02C', data1: imgData1[1]},
      {stimulus: 'NYA08A', data1: imgData1[0]},
      {stimulus: 'TOR10A', data1: imgData1[0]},
      {stimulus: 'WEL11D', data1: imgData1[1]},
      {stimulus: 'ACO05B', data1: imgData1[0]},
      {stimulus: 'JEN02D', data1: imgData1[1]},
      {stimulus: 'NYA08B', data1: imgData1[0]},
      {stimulus: 'TOR10B', data1: imgData1[0]},
      {stimulus: 'WEL12A', data1: imgData1[0]},
      {stimulus: 'ACO05C', data1: imgData1[1]},
      {stimulus: 'JEN03A', data1: imgData1[0]},
      {stimulus: 'NYA08C', data1: imgData1[1]},
      {stimulus: 'TOR10C', data1: imgData1[1]},
      {stimulus: 'WEL12B', data1: imgData1[0]},
      {stimulus: 'ACO05D', data1: imgData1[1]},
      {stimulus: 'JEN03B', data1: imgData1[0]},
      {stimulus: 'NYA08D', data1: imgData1[1]},
      {stimulus: 'TOR10D', data1: imgData1[1]},
      {stimulus: 'WEL12C', data1: imgData1[1]},
      {stimulus: 'ACO06A', data1: imgData1[0]},
      {stimulus: 'JEN03C', data1: imgData1[1]},
      {stimulus: 'NYA09A', data1: imgData1[0]},
      {stimulus: 'TOR11A', data1: imgData1[0]},
      {stimulus: 'WEL12D', data1: imgData1[1]},
      {stimulus: 'ACO06C', data1: imgData1[1]},
      {stimulus: 'JEN03D', data1: imgData1[1]},
      {stimulus: 'NYA09B', data1: imgData1[0]},
      {stimulus: 'TOR11B', data1: imgData1[0]},
      {stimulus: 'WEL13A', data1: imgData1[0]},
      {stimulus: 'ACO06D', data1: imgData1[1]},
      {stimulus: 'JEN04A', data1: imgData1[0]},
      {stimulus: 'NYA09C', data1: imgData1[1]},
      {stimulus: 'TOR11C', data1: imgData1[1]},
      {stimulus: 'WEL13B', data1: imgData1[0]},
      {stimulus: 'ACO07A', data1: imgData1[0]},
      {stimulus: 'JEN04B', data1: imgData1[0]},
      {stimulus: 'NYA09D', data1: imgData1[1]},
      {stimulus: 'TOR11D', data1: imgData1[1]},
      {stimulus: 'WEL13C', data1: imgData1[1]},
      {stimulus: 'ACO07C', data1: imgData1[1]},
      {stimulus: 'JEN04C', data1: imgData1[1]},
      {stimulus: 'NYA10A', data1: imgData1[0]},
      {stimulus: 'TOR12A', data1: imgData1[0]},
      {stimulus: 'WEL13D', data1: imgData1[1]},
      {stimulus: 'ACO07D', data1: imgData1[1]},
      {stimulus: 'JEN04D', data1: imgData1[1]},
      {stimulus: 'NYA10B', data1: imgData1[0]},
      {stimulus: 'TOR12B', data1: imgData1[0]},
      {stimulus: 'WEL14A', data1: imgData1[0]},
      {stimulus: 'ACO08A', data1: imgData1[0]},
      {stimulus: 'JEN05A', data1: imgData1[0]},
      {stimulus: 'NYA10C', data1: imgData1[1]},
      {stimulus: 'TOR12C', data1: imgData1[1]},
      {stimulus: 'WEL14B', data1: imgData1[0]},
      {stimulus: 'ACO08B', data1: imgData1[0]},
      {stimulus: 'JEN05B', data1: imgData1[0]},
      {stimulus: 'NYA10D', data1: imgData1[1]},
      {stimulus: 'TOR12D', data1: imgData1[1]},
      {stimulus: 'WEL14C', data1: imgData1[1]},
      {stimulus: 'ACO08C', data1: imgData1[1]},
      {stimulus: 'JEN05C', data1: imgData1[1]},
      {stimulus: 'NYA11A', data1: imgData1[0]},
      {stimulus: 'TOR13A', data1: imgData1[0]},
      {stimulus: 'WEL14D', data1: imgData1[1]},
      {stimulus: 'ACO08D', data1: imgData1[1]},
      {stimulus: 'JEN05D', data1: imgData1[1]},
      {stimulus: 'NYA11B', data1: imgData1[0]},
      {stimulus: 'TOR13B', data1: imgData1[0]},
      {stimulus: 'WEL15A', data1: imgData1[0]},
      {stimulus: 'ACO09A', data1: imgData1[0]},
      {stimulus: 'JEN06A', data1: imgData1[0]},
      {stimulus: 'NYA11C', data1: imgData1[1]},
      {stimulus: 'TOR13C', data1: imgData1[1]},
      {stimulus: 'WEL15B', data1: imgData1[0]},
      {stimulus: 'ACO09B', data1: imgData1[0]},
      {stimulus: 'JEN06B', data1: imgData1[0]},
      {stimulus: 'NYA11D', data1: imgData1[1]},
      {stimulus: 'TOR13D', data1: imgData1[1]},
      {stimulus: 'WEL15C', data1: imgData1[1]},
      {stimulus: 'ACO09C', data1: imgData1[1]},
      {stimulus: 'JEN06C', data1: imgData1[1]},
      {stimulus: 'NYA12A', data1: imgData1[0]},
      {stimulus: 'TOR14A', data1: imgData1[0]},
      {stimulus: 'WEL15D', data1: imgData1[1]},
      {stimulus: 'ACO09D', data1: imgData1[1]},
      {stimulus: 'JEN06D', data1: imgData1[1]},
      {stimulus: 'NYA12B', data1: imgData1[0]},
      {stimulus: 'TOR14B', data1: imgData1[0]},
      {stimulus: 'WEL16A', data1: imgData1[0]},
      {stimulus: 'ACO10A', data1: imgData1[0]},
      {stimulus: 'JEN07A', data1: imgData1[0]},
      {stimulus: 'NYA12C', data1: imgData1[1]},
      {stimulus: 'TOR14C', data1: imgData1[1]},
      {stimulus: 'WEL16B', data1: imgData1[0]},
      {stimulus: 'ACO10B', data1: imgData1[0]},
      {stimulus: 'JEN07B', data1: imgData1[0]},
      {stimulus: 'NYA12D', data1: imgData1[1]},
      {stimulus: 'TOR14D', data1: imgData1[1]},
      {stimulus: 'WEL16C', data1: imgData1[1]},
      {stimulus: 'ACO10C', data1: imgData1[1]},
      {stimulus: 'JEN07C', data1: imgData1[1]},
      {stimulus: 'NYA13A', data1: imgData1[0]},
      {stimulus: 'TOR15A', data1: imgData1[0]},
      {stimulus: 'WEL16D', data1: imgData1[1]},
      {stimulus: 'ACO10D', data1: imgData1[1]},
      {stimulus: 'JEN07D', data1: imgData1[1]},
      {stimulus: 'NYA13B', data1: imgData1[0]},
      {stimulus: 'TOR15B', data1: imgData1[0]},
      {stimulus: 'WEL17A', data1: imgData1[0]},
      {stimulus: 'ACO11A', data1: imgData1[0]},
      {stimulus: 'JEN08A', data1: imgData1[0]},
      {stimulus: 'NYA13C', data1: imgData1[1]},
      {stimulus: 'TOR15C', data1: imgData1[1]},
      {stimulus: 'WEL17B', data1: imgData1[0]},
      {stimulus: 'ACO11B', data1: imgData1[0]},
      {stimulus: 'JEN08B', data1: imgData1[0]},
      {stimulus: 'NYA13D', data1: imgData1[1]},
      {stimulus: 'TOR15D', data1: imgData1[1]},
      {stimulus: 'WEL17C', data1: imgData1[1]},
      {stimulus: 'ACO11C', data1: imgData1[1]},
      {stimulus: 'JEN08C', data1: imgData1[1]},
      {stimulus: 'NYA14A', data1: imgData1[0]},
      {stimulus: 'TOR16A', data1: imgData1[0]},
      {stimulus: 'WEL17D', data1: imgData1[1]},
      {stimulus: 'ACO11D', data1: imgData1[1]},
      {stimulus: 'JEN08D', data1: imgData1[1]},
      {stimulus: 'NYA14B', data1: imgData1[0]},
      {stimulus: 'TOR16B', data1: imgData1[0]},
      {stimulus: 'WEL18A', data1: imgData1[0]},
      {stimulus: 'ACO12A', data1: imgData1[0]},
      {stimulus: 'JEN09A', data1: imgData1[0]},
      {stimulus: 'NYA14C', data1: imgData1[1]},
      {stimulus: 'TOR16C', data1: imgData1[1]},
      {stimulus: 'WEL18B', data1: imgData1[0]},
      {stimulus: 'ACO12B', data1: imgData1[0]},
      {stimulus: 'JEN09B', data1: imgData1[0]},
      {stimulus: 'NYA14D', data1: imgData1[1]},
      {stimulus: 'TOR16D', data1: imgData1[1]},
      {stimulus: 'WEL18C', data1: imgData1[1]},
      {stimulus: 'ACO12C', data1: imgData1[1]},
      {stimulus: 'JEN09C', data1: imgData1[1]},
      {stimulus: 'PNG01A', data1: imgData1[0]},
      {stimulus: 'TOR17A', data1: imgData1[0]},
      {stimulus: 'WEL18D', data1: imgData1[1]},
      {stimulus: 'ACO12D', data1: imgData1[1]},
      {stimulus: 'JEN09D', data1: imgData1[1]},
      {stimulus: 'PNG01B', data1: imgData1[0]},
      {stimulus: 'TOR17B', data1: imgData1[0]},
      {stimulus: 'WEL19A', data1: imgData1[0]},
      {stimulus: 'ACO13A', data1: imgData1[0]},
      {stimulus: 'JEN10A', data1: imgData1[0]},
      {stimulus: 'PNG01C', data1: imgData1[1]},
      {stimulus: 'TOR17C', data1: imgData1[1]},
      {stimulus: 'WEL19B', data1: imgData1[0]},
      {stimulus: 'ACO13B', data1: imgData1[0]},
      {stimulus: 'JEN10B', data1: imgData1[0]},
      {stimulus: 'PNG01D', data1: imgData1[1]},
      {stimulus: 'TOR17D', data1: imgData1[1]},
      {stimulus: 'WEL19C', data1: imgData1[1]},
      {stimulus: 'ACO13C', data1: imgData1[1]},
      {stimulus: 'JEN10C', data1: imgData1[1]},
      {stimulus: 'PNG02A', data1: imgData1[0]},
      {stimulus: 'TOR18A', data1: imgData1[0]},
      {stimulus: 'WEL19D', data1: imgData1[1]},
      {stimulus: 'ACO13D', data1: imgData1[1]},
      {stimulus: 'JEN10D', data1: imgData1[1]},
      {stimulus: 'PNG02B', data1: imgData1[0]},
      {stimulus: 'TOR18B', data1: imgData1[0]},
      {stimulus: 'WEL20A', data1: imgData1[0]},
      {stimulus: 'ACO14A', data1: imgData1[0]},
      {stimulus: 'JEN11A', data1: imgData1[0]},
      {stimulus: 'PNG03A', data1: imgData1[0]},
      {stimulus: 'TOR18C', data1: imgData1[1]},
      {stimulus: 'WEL20B', data1: imgData1[0]},
      {stimulus: 'ACO14B', data1: imgData1[0]},
      {stimulus: 'JEN11B', data1: imgData1[0]},
      {stimulus: 'PNG03B', data1: imgData1[0]},
      {stimulus: 'TOR18D', data1: imgData1[1]},
      {stimulus: 'WEL20C', data1: imgData1[1]},
      {stimulus: 'ACO14D', data1: imgData1[1]},
      {stimulus: 'JEN11C', data1: imgData1[1]},
      {stimulus: 'PNG03C', data1: imgData1[1]},
      {stimulus: 'TOR19A', data1: imgData1[0]},
      {stimulus: 'WEL20D', data1: imgData1[1]},
      {stimulus: 'BEJ01A', data1: imgData1[0]},
      {stimulus: 'JEN11D', data1: imgData1[1]},
      {stimulus: 'PNG03D', data1: imgData1[1]},
      {stimulus: 'TOR19B', data1: imgData1[0]},
      {stimulus: 'WEL21A', data1: imgData1[0]},
      {stimulus: 'BEJ01B', data1: imgData1[0]},
      {stimulus: 'JEN12A', data1: imgData1[0]},
      {stimulus: 'PNG04A', data1: imgData1[0]},
      {stimulus: 'TOR19C', data1: imgData1[1]},
      {stimulus: 'WEL21B', data1: imgData1[0]},
      {stimulus: 'BEJ01C', data1: imgData1[1]},
      {stimulus: 'JEN12B', data1: imgData1[0]},
      {stimulus: 'PNG04B', data1: imgData1[0]},
      {stimulus: 'TOR19D', data1: imgData1[1]},
      {stimulus: 'WEL21C', data1: imgData1[1]},
      {stimulus: 'BEJ01D', data1: imgData1[1]},
      {stimulus: 'JEN12C', data1: imgData1[1]},
      {stimulus: 'PNG04C', data1: imgData1[1]},
      {stimulus: 'TOR20A', data1: imgData1[0]},
      {stimulus: 'WEL21D', data1: imgData1[1]},
      {stimulus: 'BEJ02A', data1: imgData1[0]},
      {stimulus: 'JEN12D', data1: imgData1[1]},
      {stimulus: 'PNG04D', data1: imgData1[1]},
      {stimulus: 'TOR20B', data1: imgData1[0]},
      {stimulus: 'WEL22A', data1: imgData1[0]},
      {stimulus: 'BEJ02B', data1: imgData1[0]},
      {stimulus: 'JEN13A', data1: imgData1[0]},
      {stimulus: 'PNG05A', data1: imgData1[0]},
      {stimulus: 'TOR20C', data1: imgData1[1]},
      {stimulus: 'WEL22B', data1: imgData1[0]},
      {stimulus: 'BEJ02C', data1: imgData1[1]},
      {stimulus: 'JEN13B', data1: imgData1[0]},
      {stimulus: 'PNG05B', data1: imgData1[0]},
      {stimulus: 'TOR20D', data1: imgData1[1]},
      {stimulus: 'WEL22C', data1: imgData1[1]},
      {stimulus: 'BEJ02D', data1: imgData1[1]},
      {stimulus: 'JEN13C', data1: imgData1[1]},
      {stimulus: 'PNG05C', data1: imgData1[1]},
      {stimulus: 'TOR21A', data1: imgData1[0]},
      {stimulus: 'WEL22D', data1: imgData1[1]},
      {stimulus: 'BEJ03A', data1: imgData1[0]},
      {stimulus: 'JEN13D', data1: imgData1[1]},
      {stimulus: 'PNG05D', data1: imgData1[1]},
      {stimulus: 'TOR21B', data1: imgData1[0]},
      {stimulus: 'WEL23A', data1: imgData1[0]},
      {stimulus: 'BEJ03B', data1: imgData1[0]},
      {stimulus: 'JEN14A', data1: imgData1[0]},
      {stimulus: 'PNG06A', data1: imgData1[0]},
      {stimulus: 'TOR21C', data1: imgData1[1]},
      {stimulus: 'WEL23B', data1: imgData1[0]},
      {stimulus: 'BEJ03C', data1: imgData1[1]},
      {stimulus: 'JEN14B', data1: imgData1[0]},
      {stimulus: 'PNG06B', data1: imgData1[0]},
      {stimulus: 'TOR21D', data1: imgData1[1]},
      {stimulus: 'WEL23C', data1: imgData1[1]},
      {stimulus: 'BEJ03D', data1: imgData1[1]},
      {stimulus: 'JEN14C', data1: imgData1[1]},
      {stimulus: 'PNG06C', data1: imgData1[1]},
      {stimulus: 'TOR22A', data1: imgData1[0]},
      {stimulus: 'WEL23D', data1: imgData1[1]},
      {stimulus: 'BEJ04A', data1: imgData1[0]},
      {stimulus: 'JEN14D', data1: imgData1[1]},
      {stimulus: 'PNG06D', data1: imgData1[1]},
      {stimulus: 'TOR22B', data1: imgData1[0]},
      {stimulus: 'WEL24A', data1: imgData1[0]},
      {stimulus: 'BEJ04B', data1: imgData1[0]},
      {stimulus: 'JEN15A', data1: imgData1[0]},
      {stimulus: 'SPA01A', data1: imgData1[0]},
      {stimulus: 'TOR22C', data1: imgData1[1]},
      {stimulus: 'WEL24B', data1: imgData1[0]},
      {stimulus: 'BEJ04C', data1: imgData1[1]},
      {stimulus: 'JEN15B', data1: imgData1[0]},
      {stimulus: 'SPA01B', data1: imgData1[0]},
      {stimulus: 'TOR22D', data1: imgData1[1]},
      {stimulus: 'WEL24C', data1: imgData1[1]},
      {stimulus: 'BEJ04D', data1: imgData1[1]},
      {stimulus: 'JEN15C', data1: imgData1[1]},
      {stimulus: 'SPA01C', data1: imgData1[1]},
      {stimulus: 'TOR23A', data1: imgData1[0]},
      {stimulus: 'WEL24D', data1: imgData1[1]},
      {stimulus: 'BEJ05A', data1: imgData1[0]},
      {stimulus: 'JEN15D', data1: imgData1[1]},
      {stimulus: 'SPA01D', data1: imgData1[1]},
      {stimulus: 'TOR23B', data1: imgData1[0]},
      {stimulus: 'WEL25A', data1: imgData1[0]},
      {stimulus: 'BEJ05B', data1: imgData1[0]},
      {stimulus: 'JEN16A', data1: imgData1[0]},
      {stimulus: 'SPA02A', data1: imgData1[0]},
      {stimulus: 'TOR23C', data1: imgData1[1]},
      {stimulus: 'WEL25B', data1: imgData1[0]},
      {stimulus: 'BEJ05C', data1: imgData1[1]},
      {stimulus: 'JEN16B', data1: imgData1[0]},
      {stimulus: 'SPA02B', data1: imgData1[0]},
      {stimulus: 'TOR23D', data1: imgData1[1]},
      {stimulus: 'WEL25C', data1: imgData1[1]},
      {stimulus: 'BEJ05D', data1: imgData1[1]},
      {stimulus: 'JEN16C', data1: imgData1[1]},
      {stimulus: 'SPA02C', data1: imgData1[1]},
      {stimulus: 'TOR24A', data1: imgData1[0]},
      {stimulus: 'WEL25D', data1: imgData1[1]},
      {stimulus: 'BEJ06A', data1: imgData1[0]},
      {stimulus: 'JEN16D', data1: imgData1[1]},
      {stimulus: 'SPA02D', data1: imgData1[1]},
      {stimulus: 'TOR24B', data1: imgData1[0]},
      {stimulus: 'WEL26A', data1: imgData1[0]},
      {stimulus: 'BEJ06B', data1: imgData1[0]},
      {stimulus: 'JEN17A', data1: imgData1[0]},
      {stimulus: 'SPA03A', data1: imgData1[0]},
      {stimulus: 'TOR24C', data1: imgData1[1]},
      {stimulus: 'WEL26B', data1: imgData1[0]},
      {stimulus: 'BEJ06C', data1: imgData1[1]},
      {stimulus: 'JEN17B', data1: imgData1[0]},
      {stimulus: 'SPA03B', data1: imgData1[0]},
      {stimulus: 'TOR24D', data1: imgData1[1]},
      {stimulus: 'WEL26C', data1: imgData1[1]},
      {stimulus: 'BEJ06D', data1: imgData1[1]},
      {stimulus: 'JEN17C', data1: imgData1[1]},
      {stimulus: 'SPA03C', data1: imgData1[1]},
      {stimulus: 'TOR25A', data1: imgData1[0]},
      {stimulus: 'WEL26D', data1: imgData1[1]},
      {stimulus: 'BEJ07A', data1: imgData1[0]},
      {stimulus: 'JEN17D', data1: imgData1[1]},
      {stimulus: 'SPA03D', data1: imgData1[1]},
      {stimulus: 'TOR25B', data1: imgData1[0]},
      {stimulus: 'WEL27A', data1: imgData1[0]},
      {stimulus: 'BEJ07B', data1: imgData1[0]},
      {stimulus: 'JEN18A', data1: imgData1[0]},
      {stimulus: 'SPA04A', data1: imgData1[0]},
      {stimulus: 'TOR25C', data1: imgData1[1]},
      {stimulus: 'WEL27B', data1: imgData1[0]},
      {stimulus: 'BEJ07C', data1: imgData1[1]},
      {stimulus: 'JEN18B', data1: imgData1[0]},
      {stimulus: 'SPA04B', data1: imgData1[0]},
      {stimulus: 'TOR25D', data1: imgData1[1]},
      {stimulus: 'WEL27C', data1: imgData1[1]},
      {stimulus: 'BEJ07D', data1: imgData1[1]},
      {stimulus: 'JEN18C', data1: imgData1[1]},
      {stimulus: 'SPA04C', data1: imgData1[1]},
      {stimulus: 'TOR26A', data1: imgData1[0]},
      {stimulus: 'WEL27D', data1: imgData1[1]},
      {stimulus: 'BEJ08A', data1: imgData1[0]},
      {stimulus: 'JEN18D', data1: imgData1[1]},
      {stimulus: 'SPA04D', data1: imgData1[1]},
      {stimulus: 'TOR26B', data1: imgData1[0]},
      {stimulus: 'WEL28A', data1: imgData1[0]},
      {stimulus: 'BEJ08B', data1: imgData1[0]},
      {stimulus: 'JEN19A', data1: imgData1[0]},
      {stimulus: 'SPA05A', data1: imgData1[0]},
      {stimulus: 'TOR26C', data1: imgData1[1]},
      {stimulus: 'WEL28B', data1: imgData1[0]},
      {stimulus: 'BEJ08C', data1: imgData1[1]},
      {stimulus: 'JEN19B', data1: imgData1[0]},
      {stimulus: 'SPA05B', data1: imgData1[0]},
      {stimulus: 'TOR26D', data1: imgData1[1]},
      {stimulus: 'WEL28C', data1: imgData1[1]},
      {stimulus: 'BEJ08D', data1: imgData1[1]},
      {stimulus: 'JEN19C', data1: imgData1[1]},
      {stimulus: 'SPA05C', data1: imgData1[1]},
      {stimulus: 'TOR27A', data1: imgData1[0]},
      {stimulus: 'WEL28D', data1: imgData1[1]},
      {stimulus: 'BEJ09A', data1: imgData1[0]},
      {stimulus: 'JEN19D', data1: imgData1[1]},
      {stimulus: 'SPA05D', data1: imgData1[1]},
      {stimulus: 'TOR27B', data1: imgData1[0]},
      {stimulus: 'WEL29A', data1: imgData1[0]},
      {stimulus: 'BEJ09B', data1: imgData1[0]},
      {stimulus: 'JEN20A', data1: imgData1[0]},
      {stimulus: 'SPA06A', data1: imgData1[0]},
      {stimulus: 'TOR27C', data1: imgData1[1]},
      {stimulus: 'WEL29B', data1: imgData1[0]},
      {stimulus: 'BEJ09C', data1: imgData1[1]},
      {stimulus: 'JEN20B', data1: imgData1[0]},
      {stimulus: 'SPA06B', data1: imgData1[0]},
      {stimulus: 'TOR27D', data1: imgData1[1]},
      {stimulus: 'WEL29C', data1: imgData1[1]},
      {stimulus: 'BEJ09D', data1: imgData1[1]},
      {stimulus: 'JEN20C', data1: imgData1[1]},
      {stimulus: 'SPA06C', data1: imgData1[1]},
      {stimulus: 'TOR28A', data1: imgData1[0]},
      {stimulus: 'WEL29D', data1: imgData1[1]},
      {stimulus: 'BEJ10A', data1: imgData1[0]},
      {stimulus: 'JEN20D', data1: imgData1[1]},
      {stimulus: 'SPA06D', data1: imgData1[1]},
      {stimulus: 'TOR28B', data1: imgData1[0]},
      {stimulus: 'WEL30A', data1: imgData1[0]},
      {stimulus: 'BEJ10B', data1: imgData1[0]},
      {stimulus: 'MEN01A', data1: imgData1[0]},
      {stimulus: 'SPA07A', data1: imgData1[0]},
      {stimulus: 'TOR28C', data1: imgData1[1]},
      {stimulus: 'WEL30B', data1: imgData1[0]},
      {stimulus: 'BEJ10C', data1: imgData1[1]},
      {stimulus: 'MEN01B', data1: imgData1[0]},
      {stimulus: 'SPA07B', data1: imgData1[0]},
      {stimulus: 'TOR28D', data1: imgData1[1]},
      {stimulus: 'WEL30C', data1: imgData1[1]},
      {stimulus: 'BEJ10D', data1: imgData1[1]},
      {stimulus: 'MEN01C', data1: imgData1[1]},
      {stimulus: 'SPA07D', data1: imgData1[1]},
      {stimulus: 'TOR29A', data1: imgData1[0]},
      {stimulus: 'WEL30D', data1: imgData1[1]},
      {stimulus: 'BEJ11A', data1: imgData1[0]},
      {stimulus: 'MEN01D', data1: imgData1[1]},
      {stimulus: 'SPA08A', data1: imgData1[0]},
      {stimulus: 'TOR29B', data1: imgData1[0]},
      {stimulus: 'WEL31A', data1: imgData1[0]},
      {stimulus: 'BEJ11B', data1: imgData1[0]},
      {stimulus: 'MEN02A', data1: imgData1[0]},
      {stimulus: 'SPA08B', data1: imgData1[0]},
      {stimulus: 'TOR29C', data1: imgData1[1]},
      {stimulus: 'WEL31B', data1: imgData1[0]},
      {stimulus: 'BEJ11C', data1: imgData1[1]},
      {stimulus: 'MEN02B', data1: imgData1[0]},
      {stimulus: 'SPA08C', data1: imgData1[1]},
      {stimulus: 'TOR29D', data1: imgData1[1]},
      {stimulus: 'WEL31C', data1: imgData1[1]},
      {stimulus: 'BEJ11D', data1: imgData1[1]},
      {stimulus: 'MEN02C', data1: imgData1[1]},
      {stimulus: 'SPA08D', data1: imgData1[1]},
      {stimulus: 'TOR30A', data1: imgData1[0]},
      {stimulus: 'WEL31D', data1: imgData1[1]},
      {stimulus: 'BEJ12A', data1: imgData1[0]},
      {stimulus: 'MEN02D', data1: imgData1[1]},
      {stimulus: 'SPA09A', data1: imgData1[0]},
      {stimulus: 'TOR30B', data1: imgData1[0]},
      {stimulus: 'WEL32A', data1: imgData1[0]},
      {stimulus: 'BEJ12B', data1: imgData1[0]},
      {stimulus: 'MEN03A', data1: imgData1[0]},
      {stimulus: 'SPA09B', data1: imgData1[0]},
      {stimulus: 'TOR30C', data1: imgData1[1]},
      {stimulus: 'WEL32B', data1: imgData1[0]},
      {stimulus: 'BEJ12C', data1: imgData1[1]},
      {stimulus: 'MEN03B', data1: imgData1[0]},
      {stimulus: 'SPA09C', data1: imgData1[1]},
      {stimulus: 'TOR30D', data1: imgData1[1]},
      {stimulus: 'WEL32C', data1: imgData1[1]},
      {stimulus: 'BEJ12D', data1: imgData1[1]},
      {stimulus: 'MEN03C', data1: imgData1[1]},
      {stimulus: 'SPA09D', data1: imgData1[1]},
      {stimulus: 'TOR31A', data1: imgData1[0]},
      {stimulus: 'WEL32D', data1: imgData1[1]},
      {stimulus: 'BEJ13A', data1: imgData1[0]},
      {stimulus: 'MEN03D', data1: imgData1[1]},
      {stimulus: 'SPA10A', data1: imgData1[0]},
      {stimulus: 'TOR31B', data1: imgData1[0]},
      {stimulus: 'WEL33A', data1: imgData1[0]},
      {stimulus: 'BEJ13B', data1: imgData1[0]},
      {stimulus: 'MEN04A', data1: imgData1[0]},
      {stimulus: 'SPA10B', data1: imgData1[0]},
      {stimulus: 'TOR31C', data1: imgData1[1]},
      {stimulus: 'WEL33B', data1: imgData1[0]},
      {stimulus: 'BEJ13C', data1: imgData1[1]},
      {stimulus: 'MEN04B', data1: imgData1[0]},
      {stimulus: 'SPA10C', data1: imgData1[1]},
      {stimulus: 'TOR31D', data1: imgData1[1]},
      {stimulus: 'WEL33C', data1: imgData1[1]},
      {stimulus: 'BEJ13D', data1: imgData1[1]},
      {stimulus: 'MEN04C', data1: imgData1[1]},
      {stimulus: 'SPA10D', data1: imgData1[1]},
      {stimulus: 'TOR32A', data1: imgData1[0]},
      {stimulus: 'WEL33D', data1: imgData1[1]},
      {stimulus: 'BEJ14A', data1: imgData1[0]},
      {stimulus: 'MEN04D', data1: imgData1[1]},
      {stimulus: 'SPA11A', data1: imgData1[0]},
      {stimulus: 'TOR32B', data1: imgData1[0]},
      {stimulus: 'WEL34A', data1: imgData1[0]},
      {stimulus: 'BEJ14B', data1: imgData1[0]},
      {stimulus: 'MEN05A', data1: imgData1[0]},
      {stimulus: 'SPA11B', data1: imgData1[0]},
      {stimulus: 'TOR32C', data1: imgData1[1]},
      {stimulus: 'WEL34B', data1: imgData1[0]},
      {stimulus: 'BEJ14C', data1: imgData1[1]},
      {stimulus: 'MEN05B', data1: imgData1[0]},
      {stimulus: 'SPA11C', data1: imgData1[1]},
      {stimulus: 'TOR32D', data1: imgData1[1]},
      {stimulus: 'WEL34C', data1: imgData1[1]},
      {stimulus: 'BEJ14D', data1: imgData1[1]},
      {stimulus: 'MEN05C', data1: imgData1[1]},
      {stimulus: 'SPA11D', data1: imgData1[1]},
      {stimulus: 'TOR33A', data1: imgData1[0]},
      {stimulus: 'WEL34D', data1: imgData1[1]},
      {stimulus: 'BEJ15A', data1: imgData1[0]},
      {stimulus: 'MEN05D', data1: imgData1[1]},
      {stimulus: 'SPA12A', data1: imgData1[0]},
      {stimulus: 'TOR33B', data1: imgData1[0]},
      {stimulus: 'WEL35A', data1: imgData1[0]},
      {stimulus: 'BEJ15B', data1: imgData1[0]},
      {stimulus: 'MEN06A', data1: imgData1[0]},
      {stimulus: 'SPA12B', data1: imgData1[0]},
      {stimulus: 'TOR33C', data1: imgData1[1]},
      {stimulus: 'WEL35B', data1: imgData1[0]},
      {stimulus: 'BEJ15C', data1: imgData1[1]},
      {stimulus: 'MEN06B', data1: imgData1[0]},
      {stimulus: 'SPA12C', data1: imgData1[1]},
      {stimulus: 'TOR33D', data1: imgData1[1]},
      {stimulus: 'WEL35C', data1: imgData1[1]},
      {stimulus: 'BEJ15D', data1: imgData1[1]},
      {stimulus: 'MEN06C', data1: imgData1[1]},
      {stimulus: 'SPA12D', data1: imgData1[1]},
      {stimulus: 'TOR34A', data1: imgData1[0]},
      {stimulus: 'WEL35D', data1: imgData1[1]},
      {stimulus: 'BEJ16A', data1: imgData1[0]},
      {stimulus: 'MEN06D', data1: imgData1[1]},
      {stimulus: 'SPA13A', data1: imgData1[0]},
      {stimulus: 'TOR34B', data1: imgData1[0]},
      {stimulus: 'WEL36A', data1: imgData1[0]},
      {stimulus: 'BEJ16B', data1: imgData1[0]},
      {stimulus: 'MEN07A', data1: imgData1[0]},
      {stimulus: 'SPA13B', data1: imgData1[0]},
      {stimulus: 'TOR34C', data1: imgData1[1]},
      {stimulus: 'WEL36B', data1: imgData1[0]},
      {stimulus: 'BEJ16C', data1: imgData1[1]},
      {stimulus: 'MEN07B', data1: imgData1[0]},
      {stimulus: 'SPA13C', data1: imgData1[1]},
      {stimulus: 'TOR34D', data1: imgData1[1]},
      {stimulus: 'WEL36C', data1: imgData1[1]},
      {stimulus: 'BEJ16D', data1: imgData1[1]},
      {stimulus: 'MEN07C', data1: imgData1[1]},
      {stimulus: 'SPA13D', data1: imgData1[1]},
      {stimulus: 'TOR35A', data1: imgData1[0]},
      {stimulus: 'WEL36D', data1: imgData1[1]},
      {stimulus: 'BEJ17A', data1: imgData1[0]},
      {stimulus: 'MEN07D', data1: imgData1[1]},
      {stimulus: 'SPA14A', data1: imgData1[0]},
      {stimulus: 'TOR35B', data1: imgData1[0]},
      {stimulus: 'WEL37A', data1: imgData1[0]},
      {stimulus: 'BEJ17B', data1: imgData1[0]},
      {stimulus: 'MEN08A', data1: imgData1[0]},
      {stimulus: 'SPA14B', data1: imgData1[0]},
      {stimulus: 'TOR35C', data1: imgData1[1]},
      {stimulus: 'WEL37B', data1: imgData1[0]},
      {stimulus: 'BEJ17C', data1: imgData1[1]},
      {stimulus: 'MEN08B', data1: imgData1[0]},
      {stimulus: 'SPA14C', data1: imgData1[1]},
      {stimulus: 'TOR35D', data1: imgData1[1]},
      {stimulus: 'WEL37C', data1: imgData1[1]},
      {stimulus: 'BEJ17D', data1: imgData1[1]},
      {stimulus: 'MEN08C', data1: imgData1[1]},
      {stimulus: 'SPA14D', data1: imgData1[1]},
      {stimulus: 'TOR36A', data1: imgData1[0]},
      {stimulus: 'WEL37D', data1: imgData1[1]},
      {stimulus: 'BEJ18A', data1: imgData1[0]},
      {stimulus: 'MEN08D', data1: imgData1[1]},
      {stimulus: 'SPA15A', data1: imgData1[0]},
      {stimulus: 'TOR36B', data1: imgData1[0]},
      {stimulus: 'WEL38A', data1: imgData1[0]},
      {stimulus: 'BEJ18B', data1: imgData1[0]},
      {stimulus: 'MEN09A', data1: imgData1[0]},
      {stimulus: 'SPA15B', data1: imgData1[0]},
      {stimulus: 'TOR36C', data1: imgData1[1]},
      {stimulus: 'WEL38B', data1: imgData1[0]},
      {stimulus: 'BEJ18C', data1: imgData1[1]},
      {stimulus: 'MEN09B', data1: imgData1[0]},
      {stimulus: 'SPA15C', data1: imgData1[1]},
      {stimulus: 'TOR36D', data1: imgData1[1]},
      {stimulus: 'WEL38C', data1: imgData1[1]},
      {stimulus: 'BEJ18D', data1: imgData1[1]},
      {stimulus: 'MEN09C', data1: imgData1[1]},
      {stimulus: 'SPA15D', data1: imgData1[1]},
      {stimulus: 'TOR37A', data1: imgData1[0]},
      {stimulus: 'WEL38D', data1: imgData1[1]},
      {stimulus: 'BEJ19A', data1: imgData1[0]},
      {stimulus: 'MEN09D', data1: imgData1[1]},
      {stimulus: 'TOP01A', data1: imgData1[0]},
      {stimulus: 'TOR37B', data1: imgData1[0]},
      {stimulus: 'WEL39A', data1: imgData1[0]},
      {stimulus: 'BEJ19B', data1: imgData1[0]},
      {stimulus: 'MEN10A', data1: imgData1[0]},
      {stimulus: 'TOP01B', data1: imgData1[0]},
      {stimulus: 'TOR37C', data1: imgData1[1]},
      {stimulus: 'WEL39B', data1: imgData1[0]},
      {stimulus: 'BEJ19C', data1: imgData1[1]},
      {stimulus: 'MEN10B', data1: imgData1[0]},
      {stimulus: 'TOP01C', data1: imgData1[1]},
      {stimulus: 'TOR37D', data1: imgData1[1]},
      {stimulus: 'WEL39C', data1: imgData1[1]},
      {stimulus: 'BEJ19D', data1: imgData1[1]},
      {stimulus: 'MEN10C', data1: imgData1[1]},
      {stimulus: 'TOP01D', data1: imgData1[1]},
      {stimulus: 'TOR38A', data1: imgData1[0]},
      {stimulus: 'WEL39D', data1: imgData1[1]},
      {stimulus: 'BEJ20A', data1: imgData1[0]},
      {stimulus: 'MEN10D', data1: imgData1[1]},
      {stimulus: 'TOP02A', data1: imgData1[0]},
      {stimulus: 'TOR38B', data1: imgData1[0]},
      {stimulus: 'WEL40A', data1: imgData1[0]},
      {stimulus: 'BEJ20B', data1: imgData1[0]},
      {stimulus: 'MEN11A', data1: imgData1[0]},
      {stimulus: 'TOP02B', data1: imgData1[0]},
      {stimulus: 'TOR38C', data1: imgData1[1]},
      {stimulus: 'WEL40B', data1: imgData1[0]},
      {stimulus: 'BEJ20C', data1: imgData1[1]},
      {stimulus: 'MEN11B', data1: imgData1[0]},
      {stimulus: 'TOP02C', data1: imgData1[1]},
      {stimulus: 'TOR38D', data1: imgData1[1]},
      {stimulus: 'WEL40C', data1: imgData1[1]},
      {stimulus: 'BEJ20D', data1: imgData1[1]},
      {stimulus: 'MEN11C', data1: imgData1[1]},
      {stimulus: 'TOP02D', data1: imgData1[1]},
      {stimulus: 'TOR39A', data1: imgData1[0]},
      {stimulus: 'WEL40D', data1: imgData1[1]},
      {stimulus: 'BEJ21A', data1: imgData1[0]},
      {stimulus: 'MEN11D', data1: imgData1[1]},
      {stimulus: 'TOP03A', data1: imgData1[0]},
      {stimulus: 'TOR39B', data1: imgData1[0]},
      {stimulus: 'WEL41A', data1: imgData1[0]},
      {stimulus: 'BEJ21B', data1: imgData1[0]},
      {stimulus: 'MEN12A', data1: imgData1[0]},
      {stimulus: 'TOP03B', data1: imgData1[0]},
      {stimulus: 'TOR39C', data1: imgData1[1]},
      {stimulus: 'WEL41B', data1: imgData1[0]},
      {stimulus: 'BEJ21C', data1: imgData1[1]},
      {stimulus: 'MEN12B', data1: imgData1[0]},
      {stimulus: 'TOP03C', data1: imgData1[1]},
      {stimulus: 'TOR39D', data1: imgData1[1]},
      {stimulus: 'WEL41C', data1: imgData1[1]},
      {stimulus: 'BEJ21D', data1: imgData1[1]},
      {stimulus: 'MEN12C', data1: imgData1[1]},
      {stimulus: 'TOP03D', data1: imgData1[1]},
      {stimulus: 'TOR40A', data1: imgData1[0]},
      {stimulus: 'WEL41D', data1: imgData1[1]},
      {stimulus: 'BEJ22A', data1: imgData1[0]},
      {stimulus: 'MEN12D', data1: imgData1[1]},
      {stimulus: 'TOP04A', data1: imgData1[0]},
      {stimulus: 'TOR40B', data1: imgData1[0]},
      {stimulus: 'WEL42A', data1: imgData1[0]},
      {stimulus: 'BEJ22B', data1: imgData1[0]},
      {stimulus: 'MEN13A', data1: imgData1[0]},
      {stimulus: 'TOP04B', data1: imgData1[0]},
      {stimulus: 'TOR41A', data1: imgData1[0]},
      {stimulus: 'WEL42B', data1: imgData1[0]},
      {stimulus: 'BEJ22C', data1: imgData1[1]},
      {stimulus: 'MEN13B', data1: imgData1[0]},
      {stimulus: 'TOP04C', data1: imgData1[1]},
      {stimulus: 'TOR41B', data1: imgData1[0]},
      {stimulus: 'WEL42C', data1: imgData1[1]},
      {stimulus: 'BEJ22D', data1: imgData1[1]},
      {stimulus: 'MEN13C', data1: imgData1[1]},
      {stimulus: 'TOP04D', data1: imgData1[1]},
      {stimulus: 'TOR41C', data1: imgData1[1]},
      {stimulus: 'WEL42D', data1: imgData1[1]},
      {stimulus: 'BEJ23A', data1: imgData1[0]},
      {stimulus: 'MEN13D', data1: imgData1[1]},
      {stimulus: 'TOP05A', data1: imgData1[0]},
      {stimulus: 'TOR41D', data1: imgData1[1]},
      {stimulus: 'WEL43A', data1: imgData1[0]},
      {stimulus: 'BEJ23B', data1: imgData1[0]},
      {stimulus: 'MEN14A', data1: imgData1[0]},
      {stimulus: 'TOP05B', data1: imgData1[0]},
      {stimulus: 'TOR42A', data1: imgData1[0]},
      {stimulus: 'WEL43B', data1: imgData1[0]},
      {stimulus: 'BEJ23C', data1: imgData1[1]},
      {stimulus: 'MEN14B', data1: imgData1[0]},
      {stimulus: 'TOP05C', data1: imgData1[1]},
      {stimulus: 'TOR42B', data1: imgData1[0]},
      {stimulus: 'WEL43C', data1: imgData1[1]},
      {stimulus: 'BEJ23D', data1: imgData1[1]},
      {stimulus: 'MEN14C', data1: imgData1[1]},
      {stimulus: 'TOP05D', data1: imgData1[1]},
      {stimulus: 'TOR42C', data1: imgData1[1]},
      {stimulus: 'WEL43D', data1: imgData1[1]},
      {stimulus: 'BEJ24A', data1: imgData1[0]},
      {stimulus: 'MEN14D', data1: imgData1[1]},
      {stimulus: 'TOP06A', data1: imgData1[0]},
      {stimulus: 'TOR42D', data1: imgData1[1]},
      {stimulus: 'WEL44A', data1: imgData1[0]},
      {stimulus: 'BEJ24B', data1: imgData1[0]},
      {stimulus: 'MEN15A', data1: imgData1[0]},
      {stimulus: 'TOP06B', data1: imgData1[0]},
      {stimulus: 'TOR43A', data1: imgData1[0]},
      {stimulus: 'WEL44B', data1: imgData1[0]},
      {stimulus: 'BEJ24C', data1: imgData1[1]},
      {stimulus: 'MEN15B', data1: imgData1[0]},
      {stimulus: 'TOP06C', data1: imgData1[1]},
      {stimulus: 'TOR43B', data1: imgData1[0]},
      {stimulus: 'WEL44C', data1: imgData1[1]},
      {stimulus: 'BEJ24D', data1: imgData1[1]},
      {stimulus: 'MEN15C', data1: imgData1[1]},
      {stimulus: 'TOP06D', data1: imgData1[1]},
      {stimulus: 'TOR43C', data1: imgData1[1]},
      {stimulus: 'WEL44D', data1: imgData1[1]},
      {stimulus: 'BEJ25A', data1: imgData1[0]},
      {stimulus: 'MEN15D', data1: imgData1[1]},
      {stimulus: 'TOP07A', data1: imgData1[0]},
      {stimulus: 'TOR43D', data1: imgData1[1]},
      {stimulus: 'WEL45A', data1: imgData1[0]},
      {stimulus: 'BEJ25B', data1: imgData1[0]},
      {stimulus: 'MES01A', data1: imgData1[0]},
      {stimulus: 'TOP07B', data1: imgData1[0]},
      {stimulus: 'TOR44A', data1: imgData1[0]},
      {stimulus: 'WEL45B', data1: imgData1[0]},
      {stimulus: 'BEJ25C', data1: imgData1[1]},
      {stimulus: 'MES01B', data1: imgData1[0]},
      {stimulus: 'TOP07C', data1: imgData1[1]},
      {stimulus: 'TOR44B', data1: imgData1[0]},
      {stimulus: 'WEL45C', data1: imgData1[1]},
      {stimulus: 'BEJ25D', data1: imgData1[1]},
      {stimulus: 'MES01C', data1: imgData1[1]},
      {stimulus: 'TOP07D', data1: imgData1[1]},
      {stimulus: 'TOR44C', data1: imgData1[1]},
      {stimulus: 'WEL45D', data1: imgData1[1]},
      {stimulus: 'BEJ26A', data1: imgData1[0]},
      {stimulus: 'MES01D', data1: imgData1[1]},
      {stimulus: 'TOP08A', data1: imgData1[0]},
      {stimulus: 'TOR44D', data1: imgData1[1]},
      {stimulus: 'WEL46A', data1: imgData1[0]},
      {stimulus: 'BEJ26B', data1: imgData1[0]},
      {stimulus: 'MES02A', data1: imgData1[0]},
      {stimulus: 'TOP08B', data1: imgData1[0]},
      {stimulus: 'TOR45A', data1: imgData1[0]},
      {stimulus: 'WEL46B', data1: imgData1[0]},
      {stimulus: 'BEJ26C', data1: imgData1[1]},
      {stimulus: 'MES02B', data1: imgData1[0]},
      {stimulus: 'TOP08C', data1: imgData1[1]},
      {stimulus: 'TOR45B', data1: imgData1[0]},
      {stimulus: 'WEL46C', data1: imgData1[1]},
      {stimulus: 'BEJ26D', data1: imgData1[1]},
      {stimulus: 'MES02C', data1: imgData1[1]},
      {stimulus: 'TOP08D', data1: imgData1[1]},
      {stimulus: 'TOR45C', data1: imgData1[1]},
      {stimulus: 'WEL46D', data1: imgData1[1]},
      {stimulus: 'BEJ27A', data1: imgData1[0]},
      {stimulus: 'MES02D', data1: imgData1[1]},
      {stimulus: 'TOP09A', data1: imgData1[0]},
      {stimulus: 'TOR45D', data1: imgData1[1]},
      {stimulus: 'WEL47A', data1: imgData1[0]},
      {stimulus: 'BEJ27B', data1: imgData1[0]},
      {stimulus: 'MES03A', data1: imgData1[0]},
      {stimulus: 'TOP09B', data1: imgData1[0]},
      {stimulus: 'TOR46A', data1: imgData1[0]},
      {stimulus: 'WEL47B', data1: imgData1[0]},
      {stimulus: 'BEJ27C', data1: imgData1[1]},
      {stimulus: 'MES03B', data1: imgData1[0]},
      {stimulus: 'TOP09C', data1: imgData1[1]},
      {stimulus: 'TOR46B', data1: imgData1[0]},
      {stimulus: 'WEL47C', data1: imgData1[1]},
      {stimulus: 'BEJ27D', data1: imgData1[1]},
      {stimulus: 'MES03C', data1: imgData1[1]},
      {stimulus: 'TOP09D', data1: imgData1[1]},
      {stimulus: 'TOR46C', data1: imgData1[1]},
      {stimulus: 'WEL47D', data1: imgData1[1]},
      {stimulus: 'BEJ28A', data1: imgData1[0]},
      {stimulus: 'MES03D', data1: imgData1[1]},
      {stimulus: 'TOP10A', data1: imgData1[0]},
      {stimulus: 'TOR46D', data1: imgData1[1]},
      {stimulus: 'WEL48A', data1: imgData1[0]},
      {stimulus: 'BEJ28B', data1: imgData1[0]},
      {stimulus: 'MES04A', data1: imgData1[0]},
      {stimulus: 'TOP10B', data1: imgData1[0]},
      //{stimulus: 'TOR47A', data1: imgData1[0]},
      {stimulus: 'WEL48B', data1: imgData1[0]},
      {stimulus: 'BEJ28C', data1: imgData1[1]},
      {stimulus: 'MES04B', data1: imgData1[0]},
      {stimulus: 'TOP10C', data1: imgData1[1]},
      {stimulus: 'TOR47B', data1: imgData1[0]},
      {stimulus: 'WEL48C', data1: imgData1[1]},
      {stimulus: 'BEJ28D', data1: imgData1[1]},
      {stimulus: 'MES04C', data1: imgData1[1]},
      {stimulus: 'TOP10D', data1: imgData1[1]},
      {stimulus: 'TOR47C', data1: imgData1[1]},
      {stimulus: 'WEL48D', data1: imgData1[1]},
      {stimulus: 'BEJ29A', data1: imgData1[0]},
      {stimulus: 'MES04D', data1: imgData1[1]},
      {stimulus: 'TOP11A', data1: imgData1[0]},
      {stimulus: 'TOR47D', data1: imgData1[1]},
      {stimulus: 'WEL49A', data1: imgData1[0]},
      {stimulus: 'BEJ29B', data1: imgData1[0]},
      {stimulus: 'MES05A', data1: imgData1[0]},
      {stimulus: 'TOP11B', data1: imgData1[0]},
      {stimulus: 'TOR48A', data1: imgData1[0]},
      {stimulus: 'WEL49B', data1: imgData1[0]},
      {stimulus: 'BEJ29C', data1: imgData1[1]},
      {stimulus: 'MES05B', data1: imgData1[0]},
      {stimulus: 'TOP11C', data1: imgData1[1]},
      {stimulus: 'TOR48B', data1: imgData1[0]},
      {stimulus: 'WEL49C', data1: imgData1[1]},
      {stimulus: 'BEJ29D', data1: imgData1[1]},
      {stimulus: 'MES05C', data1: imgData1[1]},
      {stimulus: 'TOP11D', data1: imgData1[1]},
      {stimulus: 'TOR48C', data1: imgData1[1]},
      {stimulus: 'WEL49D', data1: imgData1[1]},
      {stimulus: 'BEJ30A', data1: imgData1[0]},
      {stimulus: 'MES05D', data1: imgData1[1]},
      {stimulus: 'TOP12A', data1: imgData1[0]},
      {stimulus: 'TOR48D', data1: imgData1[1]},
      {stimulus: 'WEL50A', data1: imgData1[0]},
      {stimulus: 'BEJ30B', data1: imgData1[0]},
      {stimulus: 'MES06A', data1: imgData1[0]},
      {stimulus: 'TOP12B', data1: imgData1[0]},
      {stimulus: 'TOR49A', data1: imgData1[0]},
      {stimulus: 'WEL50B', data1: imgData1[0]},
      {stimulus: 'BEJ30C', data1: imgData1[1]},
      {stimulus: 'MES06B', data1: imgData1[0]},
      {stimulus: 'TOP12C', data1: imgData1[1]},
      {stimulus: 'TOR49B', data1: imgData1[0]},
      {stimulus: 'WEL50C', data1: imgData1[1]},
      {stimulus: 'BEJ30D', data1: imgData1[1]},
      {stimulus: 'MES06C', data1: imgData1[1]},
      {stimulus: 'TOP12D', data1: imgData1[1]},
      {stimulus: 'TOR49C', data1: imgData1[1]},
      {stimulus: 'WEL50D', data1: imgData1[1]},
      {stimulus: 'BEJ31A', data1: imgData1[0]},
      {stimulus: 'MES06D', data1: imgData1[1]},
      {stimulus: 'TOP13A', data1: imgData1[0]},
      {stimulus: 'TOR49D', data1: imgData1[1]},
      {stimulus: 'WEL51A', data1: imgData1[0]},
      {stimulus: 'BEJ31B', data1: imgData1[0]},
      {stimulus: 'MES07A', data1: imgData1[0]},
      {stimulus: 'TOP13B', data1: imgData1[0]},
      {stimulus: 'TOR50A', data1: imgData1[0]},
      {stimulus: 'WEL51B', data1: imgData1[0]},
      {stimulus: 'BEJ31C', data1: imgData1[1]},
      {stimulus: 'MES07B', data1: imgData1[0]},
      {stimulus: 'TOP13C', data1: imgData1[1]},
      {stimulus: 'TOR50B', data1: imgData1[0]},
      {stimulus: 'WEL51C', data1: imgData1[1]},
      {stimulus: 'BEJ31D', data1: imgData1[1]},
      {stimulus: 'MES07C', data1: imgData1[1]},
      {stimulus: 'TOP13D', data1: imgData1[1]},
      {stimulus: 'TOR50C', data1: imgData1[1]},
      {stimulus: 'WEL51D', data1: imgData1[1]},
      {stimulus: 'HAD01A', data1: imgData1[0]},
      {stimulus: 'MES07D', data1: imgData1[1]},
      {stimulus: 'TOP14A', data1: imgData1[0]},
      {stimulus: 'TOR50D', data1: imgData1[1]},
      {stimulus: 'WEL52A', data1: imgData1[0]},
      {stimulus: 'HAD01B', data1: imgData1[0]},
      {stimulus: 'MES08A', data1: imgData1[0]},
      {stimulus: 'TOP14B', data1: imgData1[0]},
      {stimulus: 'WEL01A', data1: imgData1[0]},
      {stimulus: 'WEL52B', data1: imgData1[0]},
      {stimulus: 'HAD01C', data1: imgData1[1]},
      {stimulus: 'MES08B', data1: imgData1[0]},
      {stimulus: 'TOP14C', data1: imgData1[1]},
      {stimulus: 'WEL01B', data1: imgData1[0]},
      {stimulus: 'WEL52C', data1: imgData1[1]},
      {stimulus: 'HAD01D', data1: imgData1[1]},
      {stimulus: 'MES08C', data1: imgData1[1]},
      {stimulus: 'TOP14D', data1: imgData1[1]},
      {stimulus: 'WEL01C', data1: imgData1[1]},
      {stimulus: 'WEL52D', data1: imgData1[1]},
      {stimulus: 'HAD02A', data1: imgData1[0]},
      {stimulus: 'MES08D', data1: imgData1[1]},
      {stimulus: 'TOP15A', data1: imgData1[0]},
      {stimulus: 'WEL01D', data1: imgData1[1]},
      {stimulus: 'WEL53A', data1: imgData1[0]},
      {stimulus: 'HAD02B', data1: imgData1[0]},
      {stimulus: 'MES09A', data1: imgData1[0]},
      {stimulus: 'TOP15B', data1: imgData1[0]},
      {stimulus: 'WEL02A', data1: imgData1[0]},
      {stimulus: 'WEL53B', data1: imgData1[0]},
      {stimulus: 'HAD02C', data1: imgData1[1]},
      {stimulus: 'MES09B', data1: imgData1[0]},
      {stimulus: 'TOP15C', data1: imgData1[1]},
      {stimulus: 'WEL02B', data1: imgData1[0]},
      {stimulus: 'WEL53C', data1: imgData1[1]},
      {stimulus: 'HAD02D', data1: imgData1[1]},
      {stimulus: 'MES09D', data1: imgData1[1]},
      {stimulus: 'TOP15D', data1: imgData1[1]},
      {stimulus: 'WEL02C', data1: imgData1[1]},
      {stimulus: 'WEL53D', data1: imgData1[1]},
      {stimulus: 'HAD03A', data1: imgData1[0]},
      {stimulus: 'MES10A', data1: imgData1[0]},
      {stimulus: 'TOR01A', data1: imgData1[0]},
      {stimulus: 'WEL02D', data1: imgData1[1]},
      {stimulus: 'WEL54A', data1: imgData1[0]},
      {stimulus: 'HAD03B', data1: imgData1[0]},
      {stimulus: 'MES10B', data1: imgData1[0]},
      {stimulus: 'TOR01B', data1: imgData1[0]},
      {stimulus: 'WEL03A', data1: imgData1[0]},
      {stimulus: 'WEL54B', data1: imgData1[0]},
      {stimulus: 'HAD03C', data1: imgData1[1]},
      {stimulus: 'MES10C', data1: imgData1[1]},
      {stimulus: 'TOR01C', data1: imgData1[1]},
      {stimulus: 'WEL03B', data1: imgData1[0]},
      {stimulus: 'WEL54C', data1: imgData1[1]},
      {stimulus: 'HAD03D', data1: imgData1[1]},
      {stimulus: 'MES10D', data1: imgData1[1]},
      {stimulus: 'TOR01D', data1: imgData1[1]},
      {stimulus: 'WEL03C', data1: imgData1[1]},
      {stimulus: 'WEL54D', data1: imgData1[1]},
      {stimulus: 'HAD04A', data1: imgData1[0]},
      {stimulus: 'MES11A', data1: imgData1[0]},
      {stimulus: 'TOR02A', data1: imgData1[0]},
      {stimulus: 'WEL03D', data1: imgData1[1]},
      {stimulus: 'WEL55A', data1: imgData1[0]},
      {stimulus: 'HAD04B', data1: imgData1[0]},
      {stimulus: 'MES11B', data1: imgData1[0]},
      {stimulus: 'TOR02B', data1: imgData1[0]},
      {stimulus: 'WEL04A', data1: imgData1[0]},
      {stimulus: 'WEL55B', data1: imgData1[0]},
      {stimulus: 'HAD04C', data1: imgData1[1]},
      {stimulus: 'MES11C', data1: imgData1[1]},
      {stimulus: 'TOR02C', data1: imgData1[1]},
      {stimulus: 'WEL04B', data1: imgData1[0]},
      {stimulus: 'WEL55C', data1: imgData1[1]},
      {stimulus: 'HAD04D', data1: imgData1[1]},
      {stimulus: 'MES11D', data1: imgData1[1]},
      {stimulus: 'TOR02D', data1: imgData1[1]},
      {stimulus: 'WEL04C', data1: imgData1[1]},
      {stimulus: 'WEL55D', data1: imgData1[1]},
      {stimulus: 'HAD05A', data1: imgData1[0]},
      {stimulus: 'NYA01A', data1: imgData1[0]},
      {stimulus: 'TOR03A', data1: imgData1[0]},
      {stimulus: 'WEL04D', data1: imgData1[1]},
      {stimulus: 'WEL56A', data1: imgData1[0]},
      {stimulus: 'HAD05B', data1: imgData1[0]},
      {stimulus: 'NYA01B', data1: imgData1[0]},
      {stimulus: 'TOR03B', data1: imgData1[0]},
      {stimulus: 'WEL05A', data1: imgData1[0]},
      {stimulus: 'WEL56B', data1: imgData1[0]},
      {stimulus: 'HAD05C', data1: imgData1[1]},
      {stimulus: 'NYA01C', data1: imgData1[1]},
      {stimulus: 'TOR03C', data1: imgData1[1]},
      {stimulus: 'WEL05B', data1: imgData1[0]},
      {stimulus: 'WEL56C', data1: imgData1[1]},
      {stimulus: 'HAD05D', data1: imgData1[1]},
      {stimulus: 'NYA01D', data1: imgData1[1]},
      {stimulus: 'TOR03D', data1: imgData1[1]},
      {stimulus: 'WEL05C', data1: imgData1[1]},
      {stimulus: 'WEL56D', data1: imgData1[1]},
      {stimulus: 'HAD06A', data1: imgData1[0]},
      {stimulus: 'NYA02A', data1: imgData1[0]},
      {stimulus: 'TOR04A', data1: imgData1[0]},
      {stimulus: 'WEL05D', data1: imgData1[1]},
      {stimulus: 'WEL57A', data1: imgData1[0]},
      {stimulus: 'HAD06B', data1: imgData1[0]},
      {stimulus: 'NYA02B', data1: imgData1[0]},
      {stimulus: 'TOR04B', data1: imgData1[0]},
      {stimulus: 'WEL06A', data1: imgData1[0]},
      {stimulus: 'WEL57B', data1: imgData1[0]},
      {stimulus: 'HAD06C', data1: imgData1[1]},
      {stimulus: 'NYA02C', data1: imgData1[1]},
      {stimulus: 'TOR04C', data1: imgData1[1]},
      {stimulus: 'WEL06B', data1: imgData1[0]},
      {stimulus: 'WEL57C', data1: imgData1[1]},
      {stimulus: 'HAD06D', data1: imgData1[1]},
      {stimulus: 'NYA02D', data1: imgData1[1]},
      {stimulus: 'TOR04D', data1: imgData1[1]},
      {stimulus: 'WEL06C', data1: imgData1[1]},
      {stimulus: 'WEL57D', data1: imgData1[1]},
      {stimulus: 'HAD07A', data1: imgData1[0]},
      {stimulus: 'NYA03A', data1: imgData1[0]},
      {stimulus: 'TOR05A', data1: imgData1[0]},
      {stimulus: 'WEL06D', data1: imgData1[1]},
      {stimulus: 'HAD07B', data1: imgData1[0]},
      {stimulus: 'NYA03B', data1: imgData1[0]},
      {stimulus: 'TOR05B', data1: imgData1[0]},
      {stimulus: 'WEL07A', data1: imgData1[0]},
      {stimulus: 'HAD07C', data1: imgData1[1]},
      {stimulus: 'NYA03C', data1: imgData1[1]},
      {stimulus: 'TOR05C', data1: imgData1[1]},
      {stimulus: 'WEL07B', data1: imgData1[0]},
      {stimulus: 'HAD07D', data1: imgData1[1]},
      {stimulus: 'NYA03D', data1: imgData1[1]},
      {stimulus: 'TOR05D', data1: imgData1[1]},
      {stimulus: 'WEL07C', data1: imgData1[1]}
  ];

  var tracksR = jsPsych.randomization.sampleWithoutReplacement(tracks,80);

var song_list = []
let current

for (var i=0; i<80; i++){

current = {stimulus: `${baseUrl}/quizzes/fc/audio/${tracksR[i].stimulus}.mp3`, data1: tracksR[i].data1, data2:tracksR[i].data2} 
song_list.push(current)

}


var welcome1 = {
  type: 'html-button-response',
  stimulus: '<p align="left">This quiz is part of research conducted by scientists at Harvard University. We are studying how people make sense of the world, including the things they see and hear, the people they interact with, and the abstract worlds of music, arts, and other areas of cognition.</p><p align="left">This research has no known risks or anticipated direct benefits. Your participation in this research is completely voluntary. You can end your participation at any time.</p><p align="left">Your participation is completely anonymous. The results and data from this study will be shared with the public. After the quiz, we will explain several ways to be informed. You can also find this information on the main page of this website. At the end of the quiz, there will be the option to share your results on social media.</p><p align="left">If you have questions or problems, you can contact us at musiclab+q@g.harvard.edu. By proceeding, you agree to participate in this study.</p><p align="left">Thank you for your interest.<br>The Music Lab at Harvard University<p>',
  prompt1: ' ',
  prompt2: ' ',
  choices: ['Next']
};

var prequiz = {
  type: 'html-button-response',
  stimulus: 'Before we begin, we have a few questions about you and your musical experiences if you would like to share.',
  prompt1: ' ',
  prompt2: ' ',
  choices: ['Do experiences survey', 'Skip to quiz']
}


var optionsL1 = ['Mom/dad made me', 'My friends were starting lessons so I did too', 'School requirement', 'I really wanted to'];

var musicxp1 = {
  timeline: [
  {
    type: 'html-button-response-vert',
    stimulus: 'How many hours per week do you currently practice a musical instrument? (voice counts too)',
    prompt1: ' ',
    prompt2: ' ',
    choices: ['I don\'t currently play a musical instrument or sing', '<1 hour per week', '2&ndash;3 hours per week', '4&ndash;7 hours per week', '8 or more hours per week']
  },
  {
    type: 'html-button-response-vert',
    stimulus: 'Think back as far as you can remember. When you were little, how often did your parent sing to you?',
    prompt1: ' ',
    prompt2: ' ',
    choices: ['Once every 3 days or less', 'Once every day or two', '2&ndash;3 times a day', '4&ndash;7 times a day', '8 or more times a day']
  },
  {
    type: 'html-button-response-vert',
    stimulus: 'Think back as far as you can remember. When you were little, how often did your parent play music recordings for you?',
    prompt1: ' ',
    prompt2: ' ',
    choices: ['Once every 3 days or less', 'Once every day or two', '2&ndash;3 times a day', '4&ndash;7 times a day', '8 or more times a day']
  },
  {
    type: 'html-button-response-vert',
    stimulus: 'Do you have \"perfect pitch\"? (this is sometimes referred to as \"absolute pitch\")',
    prompt1: ' ',
    prompt2: ' ',
    choices: ['Yes', 'No', 'I don\'t know']
  },
  {
    type: 'html-button-response-vert',
    stimulus: 'Have you ever taken instrumental/vocal music lessons?',
    prompt1: ' ',
    prompt2: ' ',
    choices: ['Yes', 'No']
  },
]
};
var lessonxp = {
  timeline: [
  {
    type: 'survey-multi-select',
    questions: [{prompt: 'Why did you start lessons? (check all that apply)', options: optionsL1}]
  },
  {
    type: 'html-button-response-vert',
    stimulus: 'On a scale from 1-4, how much did you enjoy your music lessons? (1 being \"not much\", and 4 being \"loved it\")',
    prompt1: ' ',
    prompt2: ' ',
    choices: ['1 not much', '2 just okay', '3 liked it', '4 loved it']
  },
]
};





var lessons1 = {
  timeline: [lessonxp],
  conditional_function: function(data){
    var button = jsPsych.data.get().last(1).values()[0].button_pressed;
    console.log(button);
    if(button == 0){
      return true;
    } else if(button == 1){return false}
  }
};

var musicxpMore1 = {
  timeline: [
    {
      type: 'html-button-response-vert',
      stimulus: 'Think about your peers when you first started playing. How did your musical skills compare to theirs?',
      prompt1: ' ',
      prompt2: ' ',
      choices: ['They were a lot better than me', 'They were a little better than me', 'I was a little better than them', 'I was a lot better than them']
    },
    {
      type: 'html-button-response-vert',
      stimulus: 'On an average day, how much time do you spend using the internet (on a computer, smartphone, or other device)?',
      prompt1: ' ',
      prompt2: ' ',
      choices: ['No time at all', '1&ndash;5 minutes', '6&ndash;10 minutes', '11&ndash;15 minutes', '16&ndash;30 minutes', '31&ndash;60 minutes', '1&ndash;2 hours', '2&ndash;4 hours', 'More than 4 hours']
    },
    {
      type: 'html-button-response-vert',
      stimulus: 'On an average day, when using the internet, how much time do you spend listening to music and/or watching videos that include music?',
      prompt1: ' ',
      prompt2: ' ',
      choices: ['No time at all', '1&ndash;5 minutes', '6&ndash;10 minutes', '11&ndash;15 minutes', '16&ndash;30 minutes', '31&ndash;60 minutes', '1&ndash;2 hours', '2&ndash;4 hours', 'More than 4 hours']
    },
    {
      type: 'html-button-response-vert',
      stimulus: 'Think of your skill at performing music (using a musical instrument or using your singing voice). How would you rate your own skill?',
      prompt1: ' ',
      prompt2: ' ',
      choices: ['I have no skill at all', 'I\'m a novice', 'I have some skill', 'I have a lot of skill', 'I\'m an expert']
    },
    {
      type: 'html-button-response-vert',
      stimulus: 'How familiar are you with traditional music from around the world, including music from remote, indigenous peoples?',
      prompt1: ' ',
      prompt2: ' ',
      choices: ['I\'ve never heard their music', 'I\'m a little familiar with their music', 'I\'m somewhat familiar with their music', 'I\'m extremely familiar with their music']
    },
    {
      type: 'survey-text',
      questions: [{prompt: 'Anything you want to tell us about your musical experience?', rows: 10, columns: 80}],
    },
    {
      type: 'survey-text',
      questions: [{prompt: 'Do you want to participate in a follow-up study in the future? If so, please provide your email in the field below so that we can let you know when the next study is happening!'}]
    }
  ]
};
/* demographics */
var demographics1 = {
  timeline: [
    {
      type: 'html-button-response-vert',
      stimulus: 'How would you describe your race?',
      prompt1: ' ',
      prompt2: ' ',
      choices: ['American Indian/Alaska Native', 'Asian', 'Native Hawaiian or other Pacific Islander', 'White', 'More than One Race', 'Prefer not to say']
    },
    {
      type: 'html-button-response-vert',
      stimulus: 'Are you <b>Hispanic or Latino?</b>',
      prompt1: ' ',
      prompt2: ' ',
      choices: ['Yes', 'No', 'Prefer not to say']
    },
    {
      type: 'html-button-response-vert',
      stimulus: 'What is your <b>sex</b>',
      prompt1: ' ',
      prompt2: ' ',
      choices: ['Male', 'Female', 'Other/Prefer not to say']
    }
  ]
};



var quiztime = {
  type: 'html-button-response',
  stimulus: 'Thank you for filling out the survey!',
  prompt1: ' ',
  prompt2: ' ',
  choices: ['Click here to continue to the quiz!']
}
var takeMusicxp = {
  timeline: [musicxp1, lessons1, musicxpMore1, demographics1, quiztime],
  conditional_function: function(data){
    var button = jsPsych.data.get().last(1).values()[0].button_pressed;
    if(button == 0){
      return true;
    } else { return false;}
  }
};

var intro1 = {
  type: 'html-keyboard-response',
  stimulus: '<p align="left">In this study, we\'ll play you recordings of people from all over the world. They will either be <b>singing</b> or <b>speaking</b>. We\'ll ask you to tell us <b>who you think is listening</b>: a baby or an adult. <p> For example, if you hear someone singing a lullaby, you might answer that you think a <b>baby</b> is listening. <p>Try to answer as fast as you can!</p><p align="center">Press any key to continue.</p>'
};
/* training */
/* Baby */
var trainInfo1B = {
  type: 'html-keyboard-response',
  stimulus: '<p align="center">First, let\'s practice! The first excerpt you will hear is a lullaby sung to a baby. So you should choose the <b>BABY</b> character for your response. Try to answer as fast as you can!</p><p align="center">Press any key to continue.</p>'


};



var trainData1B = [{stimulus:`${baseUrl}/quizzes/fc/audio/TOR47A.mp3`, data: imgData1[0]}];

let reactionT1


var training1B = {
  timeline: [
    {
      type: 'audio-keyboard-response-training',
      stimulus: jsPsych.timelineVariable('stimulus'),
      data: jsPsych.timelineVariable('data'),
      choices: ['f', 'j'],
      prompt: '<p>Someone is speaking or singing. Who do you think they are singing or speaking to?</p><p>Press <b>f</b> for '+labelR[0]+' or <b>j</b> for '+labelR[1]+'. </p><p>Try to answer as quickly as you can!</p><br><table align="center" width=80%><tr><td><img src='+imgR[0]+' width=90%></td><td>&emsp;</td><td><img src='+imgR[1]+' width=90%></td></tr><tr><td>F</td><td>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</td><td>J</td></tr></table>',
      response_ends_trial: true,
          on_finish: function(data){
        data.correct1 = data.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode(data.key);
        console.log(JSON.stringify(data));
        reactionT1 = (data.rt)/1000
              console.log(reactionT1)
          },
    },
    {
      type: 'html-keyboard-response',
      stimulus: function(){
        var correct = jsPsych.data.get().last(1).values()[0].correct1;
        var key = jsPsych.data.get().last(1).values()[0].key_press;
        if(correct == true && key== "70")
          {return `<p style="font-size:24px"><font color="#00cc00">Correct!</font></p><p style="font-size:18px">You responded in <b>'+reactionT1+' seconds</b>.<br>Press any key to continue!</p><table align="center" width=80%><tr><td><img src="'+imgR[0]+'" width=90%></td><td>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</td><td><img src=${baseUrl}/quizzes/fc/img/white.jpg width=90%></td></tr></table>`;}
        else if(correct == true && key== "74")
          {return `<p style="font-size:24px"><font color="#00cc00">Correct!</font></p><p style="font-size:18px">You responded in <b>'+reactionT1+' seconds</b>.<br>Press any key to continue!</p><table align="center" width=80%><tr><td><img src=${baseUrl}/quizzes/fc/img/white.jpg width=90%></td><td>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</td><td><img src="'+imgR[1]+'" width=90%></td></tr></table>`;}
        else if(correct == false && key=="70")
          {return `<p style="font-size:24px"><font color="red">Incorrect.</font></p><p style="font-size:18px">You responded in <b>'+reactionT1+' seconds</b>.<br>Press any key to try again!</p><table align="center" width=80%><tr><td><img src=${baseUrl}/quizzes/fc/img/incorrect.jpg width=90%></td><td>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</td><td><img src=${baseUrl}/quizzes/fc/img/white.jpg width=90%></td></tr></table>`;}
        else if(correct == false && key=="74")
          {return `<p style="font-size:24px"><font color="red">Incorrect.</font></p><p style="font-size:18px">You responded in <b>'+reactionT1+' seconds</b>.<br>Press any key to try again!</p><table align="center" width=80%><tr><td><img src=${baseUrl}/quizzes/fc/img/white.jpg width=90%></td><td>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</td><td><img src="${baseUrl}/quizzes/fc/img/incorrect.jpg width=90%></td></tr></table>`;}
      },
    },
  ],
  timeline_variables: trainData1B,
  sample: {
    size: 1,
    type: 'without-replacement'
  }
};





var reTrain1B = {
  timeline: [training1B],
  loop_function: function(data){
    if(jsPsych.pluginAPI.convertKeyCharacterToKeyCode(imgData1[1].key) == data.values()[0].key_press){
      return true;
    } else { return false;}
  }
};

var trainInfo1A = {
  type: 'html-keyboard-response',
  stimulus: '<p align="center">Let\'s practice a second time. This next excerpt will be directed toward an adult, so you should choose the <b>ADULT</b> character. Try to answer as quickly as possible!</p><p align="center">Press any key to continue.</p>'
};


var trainData1A = [{stimulus: `${baseUrl}/quizzes/fc/audio/WEL10C.mp3` , data: imgData1[1]}];

var training1A = {
  timeline: [
    {
      type: 'audio-keyboard-response-training',
      stimulus: jsPsych.timelineVariable('stimulus'),
      data: jsPsych.timelineVariable('data'),
      choices: ['f', 'j'],
      prompt: '<p>Someone is speaking or singing. Who do you think they are singing or speaking to?</p><p>Press <b>f</b> for '+labelR[0]+' or <b>j</b> for '+labelR[1]+'. </p><p>Try to answer as quickly as you can!</p><br><table align="center" width=80%><tr><td><img src='+imgR[0]+' width=90%></td><td>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</td><td><img src='+imgR[1]+' width=90%></td></tr><tr><td>F</td><td>&emsp;</td><td>J</td></tr></table> ',//CONNIE CONTINUE HERE!!!
      response_ends_trial: true,
          on_finish: function(data){
        data.correct1 = data.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode(data.key);
        console.log(JSON.stringify(data));
        reactionT1 = (data.rt)/1000
              console.log(reactionT1)
          },
    },
    {
      type: 'html-keyboard-response',
      stimulus: function(){
        var correct = jsPsych.data.get().last(1).values()[0].correct1;
        var key = jsPsych.data.get().last(1).values()[0].key_press;
        if(correct == true && key== "70")
          {return `<p style="font-size:24px"><font color="#00cc00">Correct!</font></p><p style="font-size:18px">You responded in <b>'+reactionT1+' seconds</b>.<br>Press any key to continue!</p><table align="center" width=80%><tr><td><img src="'+imgR[0]+'" width=90%></td><td>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</td><td><img src=${baseUrl}/quizzes/fc/img/white.jpg width=90%></td></tr></table>`;}
        else if(correct == true && key== "74")
          {return `<p style="font-size:24px"><font color="#00cc00">Correct!</font></p><p style="font-size:18px">You responded in <b>'+reactionT1+' seconds</b>.<br>Press any key to continue!</p><table align="center" width=80%><tr><td><img src=${baseUrl}/quizzes/fc/img/white.jpg width=90%></td><td>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</td><td><img src="'+imgR[1]+'" width=90%></td></tr></table>`;}
        else if(correct == false && key=="70")
          {return `<p style="font-size:24px"><font color="red">Incorrect.</font></p><p style="font-size:18px">You responded in <b>'+reactionT1+' seconds</b>.<br>Press any key to try again!</p><table align="center" width=80%><tr><td><img src=${baseUrl}/quizzes/fc/img/incorrect.jpg width=90%></td><td>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</td><td><img src=${baseUrl}/quizzes/fc/img/white.jpg width=90%></td></tr></table>`;}
        else if(correct == false && key=="74")
          {return `<p style="font-size:24px"><font color="red">Incorrect.</font></p><p style="font-size:18px">You responded in <b>'+reactionT1+' seconds</b>.<br>Press any key to try again!</p><table align="center" width=80%><tr><td><img src=${baseUrl}/quizzes/fc/img/white.jpg width=90%></td><td>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</td><td><img src=${baseUrl}/quizzes/fc/img/incorrect.jpg width=90%></td></tr></table>`;}
      },
    },
  ],
  timeline_variables: trainData1A,
  sample: {
    size: 1,
    type: 'without-replacement'
  }
};


var reTrain1A = {
  timeline: [training1A],
  loop_function: function(data){
    if(jsPsych.pluginAPI.convertKeyCharacterToKeyCode(imgData1[0].key) == data.values()[0].key_press){
      return true;
    } else { return false;}
  }
};
/* real study begins here! */
var ready1 = {
  type: 'html-keyboard-response',
  stimulus: '<p align="left">Great work on the practice! Now you\'re ready to begin.</p><p align="center">Press any key to continue.</p>'
};
var songTest1 = {
  timeline: [
    {
      type: 'audio-keyboard-response',
      stimulus: jsPsych.timelineVariable('stimulus'),
      data: jsPsych.timelineVariable('data1'),
      choices: ['f', 'j'],
      prompt: '<p>Someone is speaking or singing. Who do you think they are singing or speaking to?</p><p>Press <b>f</b> for '+labelR[0]+' or <b>j</b> for '+labelR[1]+'. </p><p>Try to answer as quickly as you can!</p><br><table align="center" width=80%><tr><td><img src='+imgR[0]+' width=90%></td><td>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</td><td><img src='+imgR[1]+' width=90%></td></tr><tr><td>F</td><td>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</td><td>J</td></tr></table>',
      response_ends_trial: true,
          on_finish: function(data){
            data.correct = data.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode(data.key);
            count = jsPsych.data.get().filter({correct: true}).count();
            reaction1 = (data.rt)/1000;
            console.log(count)
            console.log(reaction1)
          },
    },
    {
      type: 'html-keyboard-response',
      stimulus: function(){
        var correct = jsPsych.data.get().last(1).values()[0].correct;
        var key = jsPsych.data.get().last(1).values()[0].key_press;
        if(correct == true && key== "70")
          {return `<p style="font-size:24px"><font color="#00cc00">Correct!</font></p><p style="font-size:18px">You responded in <b>'+reaction1+' seconds</b>.<br>Press any key to continue.</p><table align="center" width=80%><tr><td><img src="'+imgR[0]+'" width=90%></td><td>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</td><td><img src=${baseUrl}/quizzes/fc/img/white.jpg width=90%></td></tr></table>`;}
        else if(correct == true && key== "74")
          {return `<p style="font-size:24px"><font color="#00cc00">Correct!</font></p><p style="font-size:18px">You responded in <b>'+reaction1+' seconds</b>.<br>Press any key to continue.</p><table align="center" width=80%><tr><td><img src=${baseUrl}/quizzes/fc/img/white.jpg width=90%></td><td>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</td><td><img src="'+imgR[1]+'" width=90%></td></tr></table>`;}
        else if(correct == false && key=="70")
          {return `<p style="font-size:24px"><font color="red">Incorrect.</font></p><p style="font-size:18px">You responded in <b>'+reaction1+' seconds</b>.<br>Press any key to continue.</p><table align="center" width=80%><tr><td><img src=${baseUrl}/quizzes/fc/img/incorrect.jpg width=90%></td><td>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</td><td><img src=${baseUrl}/quizzes/fc/img/white.jpg width=90%></td></tr></table>`;}
        else if(correct == false && key=="74")
          {return `<p style="font-size:24px"><font color="red">Incorrect.</font></p><p style="font-size:18px">You responded in <b>'+reaction1+' seconds</b>.<br>Press any key to continue.</p><table align="center" width=80%><tr><td><img src=${baseUrl}/quizzes/fc/img/white.jpg width=90%></td><td>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</td><td><img src=${baseUrl}/quizzes/fc/img/incorrect.jpg width=90%></td></tr></table>`;}
      },
      on_finish: function(data){
        reactionMean = (jsPsych.data.get().filter({trial_type: 'audio-keyboard-response'}).select('rt').mean())/1000;
        trialCount = jsPsych.data.get().filter({trial_type: 'audio-keyboard-response'}).count();
        console.log(reactionMean);
        console.log(trialCount);
      }
    }
  ],
  timeline_variables: song_list,
  sample: {
    size: 16,
    type: 'without-replacement'
  }
};
let reacion1;

/* results and social media sharing */
var social1 = {
  type:'display-prediction',
  prediction1: ' ',
  //prediction1:['percent goes here'], //depending on data format, may need to be wrapped in a function?
  prediction2:[' '],
  buttonText:'Submit',
  quizURL:'https://www.themusiclab.org', //this will be the quiz URL for sharing
  subjectLine: 'Guessing who is being sung or spoken to.',
  teaserPart1: function () {return '<div align="center" style="color:#008000; font-size:3em; line-height:60px">You got <b>'+count+' out of '+trialCount+' correct</b>!</div><br><div align="center">Nice work! Your average speed was <b>'+reactionMean+' seconds</b>.'},
  teaserPart2: ' ',
  //teaserPart2: ' of people who have taken this quiz. ',
  teaserPart3: ' Do you think you can do better than me?',
  teaserShare: '<div align="center"><b>About this research:</b></div><div align="left">&emsp;The clips of singing and speaking you just heard were collected from all over the world from various cultures, including small-scale societies. We asked people to demonstrate how they would sing and speak to a fussy baby, and how they would sing and speak to an adult. With your help, we can then see if there is a noticable difference between the vocal sounds meant for a baby compared to the vocal sounds not meant for a baby, and if there are differences between cultures.</div><br><br><b>Click on a social media button to share your results!</b>',
  socialPost1: function () {return 'When guessing whether a baby or adult was being sung or spoken to, I got '+count+' correct! My average speed of guessing was '+reactionMean+' seconds.'},
  socialSharing: true,
  encourageDemographics: ' ',
  fbButtonImg: `${baseUrl}/quizzes/fc/img/facebook.png`,
  twitterButtonImg: `${baseUrl}/quizzes/fc/img/twitter.png`,
  mailButtonImg: `${baseUrl}/quizzes/fc/img/mail.png`,
  footer: ''
};
var self = this;



timeline.push(welcome1, prequiz, takeMusicxp, intro1, trainInfo1B, reTrain1B, trainInfo1A, reTrain1A, ready1, songTest1, /*continueLogic1, */social1);

var preload = [song_list[0].stimulus, song_list[1].stimulus, song_list[2].stimulus, song_list[3].stimulus, song_list[4].stimulus, song_list[5].stimulus,
song_list[6].stimulus, song_list[7].stimulus, song_list[8].stimulus, song_list[9].stimulus, song_list[10].stimulus, song_list[11].stimulus, song_list[12].stimulus,
song_list[13].stimulus, song_list[14].stimulus, song_list[15].stimulus, song_list[16].stimulus, song_list[17].stimulus, song_list[18].stimulus, song_list[19].stimulus,
song_list[20].stimulus, song_list[21].stimulus, song_list[22].stimulus, song_list[23].stimulus, song_list[24].stimulus, song_list[25].stimulus, song_list[26].stimulus,
song_list[27].stimulus, song_list[28].stimulus, song_list[29].stimulus, song_list[30].stimulus, song_list[31].stimulus, song_list[32].stimulus, song_list[33].stimulus,
song_list[34].stimulus, song_list[35].stimulus, song_list[36].stimulus, song_list[37].stimulus, song_list[38].stimulus, song_list[39].stimulus, song_list[40].stimulus,
song_list[41].stimulus, song_list[42].stimulus, song_list[43].stimulus, song_list[44].stimulus, song_list[45].stimulus, song_list[46].stimulus, song_list[47].stimulus,
song_list[48].stimulus, song_list[49].stimulus, song_list[50].stimulus, song_list[51].stimulus, song_list[52].stimulus, song_list[53].stimulus, song_list[54].stimulus,
song_list[55].stimulus, song_list[56].stimulus, song_list[57].stimulus, song_list[58].stimulus, song_list[59].stimulus, song_list[60].stimulus, song_list[61].stimulus,
song_list[62].stimulus, song_list[63].stimulus, song_list[64].stimulus, song_list[65].stimulus, song_list[66].stimulus, song_list[67].stimulus, song_list[68].stimulus,
song_list[69].stimulus, song_list[70].stimulus, song_list[71].stimulus, song_list[72].stimulus, song_list[73].stimulus, song_list[74].stimulus, song_list[75].stimulus,
song_list[76].stimulus, song_list[77].stimulus, song_list[78].stimulus, song_list[79].stimulus, `${baseUrl}/quizzes/fc/audio/WEL10C.mp3`, `${baseUrl}/quizzes/fc/audio/TOR47A.mp3`];



jsPsych.init({
    timeline: timeline,
    preload_audio: preload,
    use_webaudio: false,
    on_finish: function() {
      jsPsych.data.displayData();
    },
    default_iti: 250
});









//closing for isMobile

} else {


 /* access to class in inline functions */
    const _this = this;
    /* jspsych timeline */
    const timeline = [];
    const dataArray = [];
    let stims;
    let user;


var buttonLabels = ['Soothing a baby', 'Dancing', 'Healing the sick', 'Expressing love'];
  var buttons = jsPsych.randomization.sampleWithoutReplacement(buttonLabels);
  var keys = ['s', 'f', 'j', 'l'];
  var keyData = [{key: keys[0], label: buttons[0]},
  {key: keys[1], label: buttons[1]},
  {key: keys[2], label: buttons[2]},
  {key: keys[3], label: buttons[3]},
  ];

/* number code for keys (for reference) */
  jsPsych.data.addProperties({keyNumbers: ['S=key #83, F=key #70, J=key #74, L=key #76; 1=key #49, 2=key #50, 3=key #51, 4=key #52']});



/* link correct response to key */
  if(buttons[0] == buttonLabels[0])
      {var lullaby = 's'} //lullaby is correct
    if(buttons[1] == buttonLabels[0])
      {var lullaby = 'f'} //lullaby is correct
    if(buttons[2] == buttonLabels[0])
      {var lullaby = 'j'} //lullaby is correct
    if(buttons[3] == buttonLabels[0])
      {var lullaby = 'l'} //lullaby is correct
  if(buttons[0] == buttonLabels[1])
      {var dancing = 's'} //dancing is correct
    if(buttons[1] == buttonLabels[1])
      {var dancing = 'f'} //dancing is correct
    if(buttons[2] == buttonLabels[1])
      {var dancing = 'j'} //dancing is correct
    if(buttons[3] == buttonLabels[1])
      {var dancing = 'l'} //dancing is correct
  if(buttons[0] == buttonLabels[2])
      {var healing = 's'} //healing is correct
    if(buttons[1] == buttonLabels[2])
      {var healing = 'f'} //healing is correct
    if(buttons[2] == buttonLabels[2])
      {var healing = 'j'} //healing is correct
    if(buttons[3] == buttonLabels[2])
      {var healing = 'l'} //healing is correct
  if(buttons[0] == buttonLabels[3])
      {var love = 's'} //love is correct
    if(buttons[1] == buttonLabels[3])
      {var love = 'f'} //love is correct
    if(buttons[2] == buttonLabels[3])
      {var love = 'j'} //love is correct
    if(buttons[3] == buttonLabels[3])
      {var love = 'l'} //love is correct



/* song paths */
  var info = [
    {
      "track": "001",
      "blurb": "This song is a lullaby of the Lardil people, native to Mornington Island in Queensland, Australia. The Lardil language is unique to other Australian languages in that it features a special ceremonial register (or dialect) called Damin which is considered a separate language. Damin is the only language outside of Africa that uses click consonants.",
      "citation": "Lullaby\" [Track 4]. On Songs from North Queensland [CD]. Canberra, Australia: Australian Institute of Aboriginal Studies (2013)."
    },
    {
      "track": "002",
      "blurb": "This is a healing song performed by a member of the Anggor people of Papua New Guinea. The Anggor people reside in several distinct villages in the north-westernmost province of the country, each with a population ranging from 13 to 140. The settlements are surrounded by guardian spirits called sanema, which are seen as protectors from the attacks of both sorcerers and neighboring enemy villages.",
      "citation": "Healing Song\" [Track 9]. On Songs & Dances from Papua New Guinea [CD]. London: Topic Records (2001)."
    },
    {
      "track": "003",
      "blurb": "This song is a lullaby performed by a member of the Blackfoot tribe of the North American Great Plains. Historically, the Blackfoot people were nomadic hunters, following the migration of bison. However, after commercial hunting eliminated much of the bison population, the Blackfoot tribe was forced to adopt ranching and farming, settling on permanent reservations. Blackfoot culture is still celebrated in the modern day with events such as the North American Indian Days Celebration and The Heart Butte Indian Days, featuring traditional dancing, singing, drumming, stick games, and rodeos.",
      "citation": "Lullaby\" [Track 9]. On An Historical Album of Blackfoot Indian Music [CD]. New York: Smithsonian Folkways Recordings (2001)."
    },
    {
      "track": "004",
      "blurb": "This is an Indian healing song sung by a resident of Karimanj, a village in the state of Uttar Pradesh. This song accompanies a snake-bite curing ritual called dank, which is also used to cure other illnesses, as well as to induce bodily possession by the \"oracle of the snake king\".",
      "citation": "Untitled Karimganj healing track\". Unpublished recording acquired from Susan Wadley (1994)."
    },
    {
      "track": "005",
      "blurb": "This is a dance song originating from the Emberá people, native to Panama and Colombia. This indigenous group is riverine, with houses and village centers mostly situated along riverbanks. The political and social organization of Emberá society is fundamentally egalitarian, with no formal tribal leaders, chiefs, councils, or structure of elders.",
      "citation": "Wadana dances\" [Track 2]. On The Music of Some Indian Tribes of Colombia [LP]. London: British Institute of Recorded Sound (1972)."
    },
    {
      "track": "006",
      "blurb": "This is a healing song of the Baoulé, a subgroup of the Akan people, and one of the largest groups in Côte d'Ivoire. Baoulé religion separates the world into three realms: the domain of God, the mortal realm, and the beyond, where ancestor spirits live. Similar to other Akan peoples, Baoulé children are often named according to the day of the week on which they were born; for example, Koffi may be a name for a boy born on a Friday.",
      "citation": "Drumming and singing for a medicine-man's dance\" [Track 6]. On Baoul� C�te d�Ivoire [LP]. Paris: Africavox (1946-1952)."
    },
    {
      "track": "007",
      "blurb": "This is a love song of the Guaraní people, native to Paraguay. Much of Guaraní mythology and folklore recounts plants and animals turning into humans, and vice versa. One such legend tells of at hummingbird who transports good spirits, who are residents of flowers, back to Tubá, so he can cherish them; another tells of a woman who was turned into a giant lily because she fell in love with the moon.",
      "citation": "Musiqueada jazmin guype\" [Side 1, Track 3]. On Les Quatre Guaranis Chant, Guitares et Harpe Indienne [LP]. Paris: �ditions de la Boite � Musique (1953)."
    },
    {
      "track": "008",
      "blurb": "This is a love song of the Garifuna people, indigenous mixed-race descendants of West African, Central African, Island Carib, European, and Arawak people, who currently reside in Central America. Garifuna music and dance is a richly developed part of the culture, and the most well-known form of dance is called punta. Starting in the 1970's, a new form of punta music began to evolve into a modernized punta rock, which is popular throughout Central America.",
      "citation": "Paranda\" [Track 7]. On Traditional Music of the Garifuna (Black Carib) of Belize [CD]. New York: Smithsonian Folkways Recordings (2001)."
    },
    {
      "track": "009",
      "blurb": "This is a lullaby of the Nahuas people, an indigenous group of central Mexico and El Salvador. Their languages, Nahuatl and Pipil, consist of a range of dialects so diverse that some are not mutually intelligble. Many Nahuatl words have made their way into Spanish and English, including the words \"avocado\", \"chayote\", \"chili\", \"chocolate\", \"atlatl\", \"coyote\", and \"tomato\".",
      "citation": "Canci�n de cuna\" [Track 1]. On In X�chitl in cu�catl [CD]. Mexico City: Instituto Nacional De Antropologia E Historia (1980)."
    },
    {
      "track": "010",
      "blurb": "This is a love song of the Kwakwaka'wakw people, native to Pacific Northwest Coast of North America. Kwakwaka'wakw origin myths tell that their ancestors came to the area as animals by way of land, sea, and underground. The ancestors animals came in many species, including the grizzly bear, orca, seagull, and Thunderbird. When one of these ancestor animals arrived at a given location, he shed his animal appearance and became human.",
      "citation": "Love song\" [Side 4, Track 1]. On Indian Music of the Pacific Northwest Coast [LP]. New York: Folkways Records (1967)."
    },
    {
      "track": "011",
      "blurb": "This song is a lullaby originating from the Yapese culture. The Yapese people, originating from the Micronesian island of Yap, practice a form of dance called “Churu”, which serves as a form of oral history. Churu dances tell stories of canoes, conquest, religious events, and more, and often incorporate audience participation, with observers serving as real-time coaches for the colorfully-costumed dancers.",
      "citation": "Song for sick people\" [Track 29]. On Spirit of Micronesia [CD]. Wotton-under-Edge, Gloucestershire, United Kingdom: Saydisc Records (1995)."
    },
    {
      "track": "012",
      "blurb": "This is a love song of the Fulani people, a large ethnic group located in the Sahel and West Africa, with roots in Northern Africa and the Middle East. About a third of Fulani people are nomadic pastoralists, making them the group with the largest nomadic population in the world today. Fulani lifestyle is governed by a central moral code, consisting of four pillars: Munyal (patience/discipline), Gacce / Semteende (modesty/respect), Hakkile (wisdom), and Sagata / Tiinande (courage/hard work). These four tenets are viewed as what distinguishes a person as essentially Fulani.",
      "citation": "Niger: Kompule\" [Track 17]. On Chants d'amour [CD]. Ivry-sur-Seine, France: Auvidis/Unesco (1996)."
    },
    {
      "track": "013",
      "blurb": "This is a dance song of the Yolngu people, an Aboriginal group native to Northeast Austrlia. This region is the origin of the yiḏaki instrument, also known as the didgeridoo. This instrument is a wooden pipe ranging from three to ten feet in length, producing a distinctive drone that sounds like an \"aural kaleidescope of timbres\". There is strict protocol surrounding yiḏaki playing among the Yolngu people, with permission for its use granted only to certain men.",
      "citation": "Wadamiri\" [Side 1, Track 5]. On Tribal Music of Australia [LP]. Washington, D.C.: Folkways Records (1953)."
    },
    {
      "track": "014",
      "blurb": "This is a dance song of the Aymara people, native to Bolivia, Peru, and Chile. For centuries, the Aymara people have grown and chewed the coca plant, its leaves used in medicine as well as in ceremonial offerings to the father god Inti, representing the sun, and the mother goddess Pachamama, a symbol of the moon. Ritual use of the plant is a symbol of cultural identity, despite clashes with authorities attempting to eliminate it during drug wars. Much of contemporary Aymara culture was developed in the working-class suburbs of La Paz, Bolivia.",
      "citation": "Tata San Juan\" [Track 2]. On Ameridian Music of Chile: Aymara, Qaqashqar, Mapuche [CD]. New York: Folkways Records (2002)."
    },
    {
      "track": "015",
      "blurb": "This is a love song from the Pawnee people of the Great Plains region of the United States. The tribe is most well-known for the Peace Pipe ceremony, a diplomatic event at which the leaders from different Native American groups would alternately smoke from a tobacco pipe as a showing of goodwill. This song was written to be sung by a man, and the lyrics roughly translate to \"A woman says to me 'I love you.' I will go when I am lonely. There, someone comes.",
      "citation": "Man's love song\" [Side 1, Track 3]. On Music of the Pawnee [LP]. New York: Folkways Records (1965)."
    },
    {
      "track": "016",
      "blurb": "This is a love song of the Kogi poeple, a group native to the Sierra Nevada de Santa Marta in Colombia whose name means \"jaguar\" in the Kogi language. The Kogi live in an isolated agricultural mountaintop society, and their main crops are sugar and coffee. Kogi culture centers on the prominent role of the Mama (meaning \"sun\" in Kogi), a male priest who serves as both leader and healer for the Kogi. This song is accompanied by the paired hembra and macho flutes, and the lyrics translate to: \"I am full of joy for I have new loves. These are new words. I am full of joy when I have new loves. Those are my words. I have new loves. Here are these men who have come to listen to me, always full of emotion. When I sing of new loves, men, I tell you this with all affection: if I have no new loves, I lead an unhappy life.",
      "citation": "Amores nuevos\" [Track 3]. On The Music of Some Indian Tribes of Colombia [LP]. London: British Institute of Recorded Sound (1972)."
    },
    {
      "track": "017",
      "blurb": "Wugenqu (\"The Fifth Watch of the Night\") is a love song representing the Bai ethnic group's distinctive life in Yunnan.  Yunnan is a province located in Southern China, known for its diverse culture and biodiversity. 25 out of 56 recognized ethnic groups in China are found in Yunnan, and most of them are known by their unique dressing style and folk music. This song is accompanied by the longtousanxian, a dragon-headed 3-stringed lute, and the lyrics describe a man trying to convince a woman to marry him while they are still young.",
      "citation": "Wugenqu\" [Track 12]. On Baishibai Songs of the Minority Nationalities of Yunnan [CD]. Leiden, Netherlands: Pan Records (1995)."
    },
    {
      "track": "018",
      "blurb": "This is a love song from the Highland Scots in the modern-day United Kingdom. The Highland Scots are most well-known for the bagpipe, a wind instrument that creates its distinctive sound by squeezing air out of a bag and through a reed while the player blows air into the bag and covers holes on the attached pipe. In this song, a woman describes how her love didn't recognize her when she saw him, but she is unconcerned because she is actually in love with someone else.",
      "citation": "S chunna mise mo leannan\" [Track 17]. On Gaelic Songs of Scotland: Women at Work in the Western Isles [CD]. Cambridge, MA: Rounder Records (2006)."
    },
    {
      "track": "019",
      "blurb": "This is a love song from the Saramaka people of Suriname and French Guiana in South America. The song is an example of a sĕkĕti song, a type of song composed by all members of the Saramaka people to commemorate the ups and downs of daily life. These songs are sung at all major events in a call-and-response style. This particular song was written by a woman to describe her lingering feelings for a former husband despite being married to another man, and the lyrics roughly translate to \"The love I have never grows old.",
      "citation": "Untitled S_k_ti songs\" [Side 2, Track 2]. On Music from Saramaka: A Dynamic Afro-American Tradition [CD]. New York: Smithsonian Folkways Recordings (2002)."
    },
    {
      "track": "020",
      "blurb": "This is a dance song from the Blackfoot people of North America. Historically, the Blackfoot were nomadic, traveling throughout the Great Plains to hunt bison, and the tribe is known for their inventive uses of all parts of the bison. This song is performed at a powwow, a social gathering of multiple Native American groups for dancing, singing, and intercultural exchange.",
      "citation": "War or grass dance songs\" [Track 9]. On An Historical Album of Blackfoot Indian Music [CD]. New York: Smithsonian Folkways Recordings (2001)."
    },
    {
      "track": "021",
      "blurb": "This is a lullaby from the Saami people of Scandinavia, who are best known for their reindeer-herding practices. This song is titled \"Mana gallaka noukat (The Children Ought to Sleep)\" and is a well-known lullaby in this culture. Another common genre of Saami music is the yoik, an improvised song sung a cappella that describes a person, a special occassion, or something in nature.",
      "citation": "Mana gallaka noukat\" [Track 36]. On Lappish Joik Songs from Northern Norway [LP]. New York: Folkways Records (1961)."
    },
    {
      "track": "022",
      "blurb": "This is a dance song from the Bahia people of eastern Brazil, a region known for its long-standing Carnaval celebrations. This song incorporates two types of dance music, the samba and the choro. The samba follows a pattern of alternating between chorus and soloist and is accompanied by guitars and percussion. The choro refers to music written for a choro, an instrumental ensemble consisting of woodwinds, guitars, and cavaquinhos (a type of small guitar).",
      "citation": "Samba urbano\" [Side 2, Track 1]. On Songs and Dances of Brazil [CD]. New York: Smithsonian Folkways Recordings (2001)."
    },
    {
      "track": "023",
      "blurb": "This is a healing song from the Seri people of the Sonora region of Mexico. The Seri were originally divided into 6 subgroups that spoke 3 languages but became one group that spoke one language after conflict and disease resulted in signifcant population reduction. One of the original languages was said to sound more like music or singing than spoken language. This song is intended to be sung by a medicine man for healing purposes. The Seri believe that all their music is divinely-inspired and conveyed to them through their medicine man.",
      "citation": "Cancion del curandero\" [Side 1, Track 8]. On Folk Music of Mexico [LP]. Washington, D.C.: Library of Congress (1959)."
    },
    {
      "track": "024",
      "blurb": "This is a healing song from the Ye'kuana people of the Caura River and Orinoco River regions of Venezuela. \"Ye-kuana\" translates to \"people of the canoe.\" In the Ye-kuana culture, infants are held for 24 hours every day by their caregivers. This song begins by praying for good health in all Ye-kuana villages and continues as prayer from the village shaman for the good health of his village.",
      "citation": "M�d�jene\" [Track 6]. On Music of the Venezuelan Yekuana Indians [CD]. New York: Smithsonian Folkways Records (circa 2000)."
    },
    {
      "track": "025",
      "blurb": "This is a dance song from the Aka people of the Central African Republic and the Republic of the Congo. The Aka are a traditional hunter-gatherer society, and Aka fathers spend significantly more time with their infants than in other societies, having their infant within reach almost half of the day. The Aka are known for their highly polyphonic music, and this song in particular is a polyphonic dance to commemorate the hunt of an elephant. The song is accompanied by a drum, two iron blades being hit against each other, and clapping.",
      "citation": "Monzoli\" [Disc 1, Track 7]. On Musical Anthology of the Aka Pygmies [CD]. Paris: Ocora Radio France (2002)."
    },
    {
      "track": "026",
      "blurb": "This is a love song from the Nenets people of northern (arctic) Russia, who are known for reindeer herding. The lyrics of this song translate to \"My beloved wife, I chose her among a thousand women. For her working hands, for her beauty, I chose her. I'll go with her in life, for the time God has given me. All this time, we'll live together with my favorite wife.",
      "citation": "My beloved wife\" [Disc 1, Track 12]. On Voix du Finisterre Arctique: Voices from the Arctic Land's End [CD]. Paris: Buda Records (1998)."
    },
    {
      "track": "027",
      "blurb": "This is a healing song from the Lunda people of the Democratic Republic of the Congo and Zambia. The Lunda religion centers on Nzambi as Supreme Creator of everything on Earth. This song is intended to be sung by a diviner and is accompanied by clapping. The lyrics translate to: \"Go straight off and keep together - don't linger.",
      "citation": "Atufundi uyanganje\" [Side A, Track 5]. On TR-48: Sons d'Afrique (Congo) [LP]. Johannesburg: International Library of African Music (1957)."
    },
    {
      "track": "028",
      "blurb": "This is a love song from the Ojibwa people of northern North America. The Ojibwa are known for their use of birch bark to make canoes and scrolls that can contain anything from stories to maps to music. The song is accompanied by the flute used in Ojibwa courtship rituals, and the first three stanzas translate to: \"The sound of an old motorboat is heard. When I look, my sweetheart was standing as she left. My sweetheart intends to leave. When I look, the old motorboat is heard departing. My sweetheart was standing as she left, waving a while handkerchief. It fades away going to Walker. I just cry when I remember what she said around.",
      "citation": "Love song, James Littlewolf\" [Track 12]. On Ojibway Music from Minnesota: A Century of Song for Voice and Drum [CD]. St. Paul, Minnesota, USA: Minnesota Historical Society Press (1997)."
    },
    {
      "track": "029",
      "blurb": "This is a dance song from Greece. The lyrics tell the story of a man who has fallen in love with an orphan girl in spite of their difference in social class, and the song is accompanied by violin, guitar, and the Bouzouki (similar to a mandolin). The dance to this song is called the Kalamatiano - it performed in groups of three or more and consists of three steps forward and two steps back with the leader dancing more difficult steps.",
      "citation": "Agapisa mia orphani (I have fallen in love with an orphan)\" [Track 2]. On Songs and Dances of Greece [LP]. New York: Folkways Records (1953)."
    },
    {
      "track": "030",
      "blurb": "This is a Swedish polska performed by Måns Olsson on violin. The polska is a partner dance in three that originated in Poland. Olsson was famous for his polska recordings, even arranging a few of the genre in a jazz style after spending 12 years in America.",
      "citation": "Lapp nils polska efter munter-johan\" [Track 36]. On Vall- trall- & Lapp-Nils L�tar: Folk Tunes from J�mtland [CD]. Stockholm: Caprice Records/Sveriges Radio P2 (1996)."
    },
    {
      "track": "031",
      "blurb": "This is a set of four healing songs from the Iroquois people of northern North America. Each is individually called a \"throwing song\" because each participating medicine man \"throws\" a song into the healing ceremony in order to pray for the sick person to get well before continuing on to the Medicine Dance. Each song is accompanied by shaking a gourd rattle.",
      "citation": "Throwing songs of four individual medicine men and introductory songs of the medicine men\" [Side 1, Track 6]. On Songs from the Iroquois Longhouse [LP]. Washington, D.C.: Library of Congress (1950)."
    },
    {
      "track": "032",
      "blurb": "This is the Robin Dance from the Iroquois people of northern North America. The dance is led by the singer and involves a line of people following each other around a circular path. The steps consist of stomping, turning, side-stepping, and hopping to imitate a robin. The dance is accompanied by cowhorn rattles and the sound of stomping heels.",
      "citation": "Three robin dance songs\" [Track 3]. On Seneca Social Dance Music [LP]. New York: Folkways Records (1980)."
    },
    {
      "track": "033",
      "blurb": "This is a healing song used in a Mayan purification ceremony for a sick person. “H-men” incorporate “xi’nche” branches into rhythmic elements of the song in order to extract the spirits causing the person’s illness. The lyrics can only be spoken by “h-men” and some words are incomprehensible to even native Mayan speakers!",
      "citation": "Rezo de santiguaci�n\" [Track 13]. On Ki'ichkelem Tata Dios: M�sica Ritual del Oriente de Yucat�n [CD]. Mexico City: Instituto Nacional de Antropologia e Historia (2003)."
    },
    {
      "track": "034",
      "blurb": "This is a lullaby from the Goajiro people of Colombia and Venezuela. The Goajiro, also known as the Wayuu, are known for their woven bags and agriculture practices. In the Goajiro culture, music is a part of all areas of life, from cattle herding to celebrations.",
      "citation": "Canci�n de cuna\" [Side 1, Track 5] On Chicha Maya: Folklore de la Guajira Venezolana [LP]. Caracas, Venezuela: Laffer (1971)."
    },
    {
      "track": "035",
      "blurb": "This is a dance song from the Gourara culture of Northern Africa. The dance can only be performed by Sudanese who live in the region as a result of the slave trade and is accompanied by the dendoun, a two-headed drum, and the qarqabou, a metal instrument that functions as both a clapper and a cymbal. The lyrics to the song are in the extinct Kouriya dialect, and, therefore, cannot be translated.",
      "citation": "Dance with qarqabou\" [Track 7]. On Music of Gourara [CD]. France: Auvidis (1991)."
    },
    {
      "track": "036",
      "blurb": "This is a dancing song for celebrating one of the Chippewa Tribe's religious ceremonies - Medicine Dance. The Medicine Dance usually lasts for several days in Spring and early fall.  The Chippewa Tribe worships supernatural forces such as air and wind. They also believe in spirits like Kiccimanto and the Great Spirit which bring power upon them by showing visions in their dreams.",
      "citation": "Kingbird singers\" [Track 1]. On Ojibway Music from Minnesota: A Century of Song for Voice and Drum [CD]. St. Paul, Minnesota, United States: Minnesota Historical Society (1997)."
    },
    {
      "track": "037",
      "blurb": "This is a lullaby from the Brazillian Indian Culture - Javaé. They live inside the massive river-island in central Brazil, is considered the hicks or backwoods. Javaé people maintain an old lifestyle due to their minimum contact with our civilians. They showed their proud and art-loving nature through several types of songs such as Funeral songs, mourning, departure, and arrival of relatives, lullaby-songs, and others.",
      "citation": "Javahe: Lullaby-song, mother and child\" [Track 14]. On Brazilian Indian Music [CD]. New York: Folkways Records (2000)."
    },
    {
      "track": "038",
      "blurb": "This is a healing song originating from the Bahia Brazilians. This song, entitled \"Priest's Blessing,\" is performed by a 78-year-old man named Valdemar Valdivino, who, after having been suddenly cured of a 15-day fever, began preaching and blessing people \"just like a priest.\" He claims that this song came to him not from having learned or composed it, but instead, that it emerged from a divine revelation.",
      "citation": "B�n��o de cura\" [Track 10]. On Bahia singular e plural [CD]. Bahia, Brazil: Instituto de Radiodifus�o Educativa da Bahia (1998)."
    },
    {
      "track": "039",
      "blurb": "This is an old traditional lullaby by Chewa women of Chadza, Lilongwe, Central Nyasaland. Women have a special place in Chewa society and belief where they are recognized as reproducers of the lineage (Bele) - an extended family of people related to the same ancestor. In this lullaby, \"Alulu kalele mwana\" means \"Alulu, go and nurse the kid.",
      "citation": "Alulu kalele mwana\" [Side A, Track 4]. On Sons d' Afrique TR-76: Nyasaland Chewa [LP]. Johannesburg: International Library of African Music (1958)."
    },
    {
      "track": "040",
      "blurb": "This is a lullaby by Aka, a traditional hunter-gatherer society that is one of three groups of pygmies found in central Africa today. Many ethnomusicologists such as Simha Arom and Mauro Campagnoli have studied their complex polyphonic music. In this song, two young girls were sitting in the traditional hut of leaves and singing a lullaby. There is a distinctive contrast between this intimate indoor style music and their dance songs.",
      "citation": "Mo boma\" [Disc 1, Track 15]. On Musical Anthology of the Aka Pygmies [CD]. France: Ocora Radio France (2002)."
    },
    {
      "track": "041",
      "blurb": "This is a healing song from Georgia, one of the most musical places in the world. Georgia is the place where you can find classical music sheet being sold on the pavement and middle-aged gentelmen singing folk chants on street-corners. The performers and performances reflect the nature of Georgian music - both Archaic and Modernist, incorparated influence from east and west.",
      "citation": "Iavnana (Violet Mother)\" [Disc 2, Track 10]. On Songs of Survival: Traditional Music of Georgia [CD]. London: Topic Records (2007)."
    },
    {
      "track": "042",
      "blurb": "This is a dance song of Ainu culture - indigeous people from Japan, who once inhabited  Jomon, Okhotsk and Satsumon islands.The elements of nature, plants, and animals (especially bears) are central in Ainu people's belief of god. Therefore, Ainu music includes imitations of animal cries, birds singing, and insects chirping in addition to puffing sound to exorcise evil spirits. The \"Rimse\" was sung mainly antiphonally by a leader and a chorus during the bear festival.",
      "citation": "Rimse\" [Track 4]. On Ainu Songs Chants des Ainou [CD]. France: Auvidis (1993)."
    },
    {
      "track": "043",
      "blurb": "This is a lullaby sung to a little girl by Don Mackinnon.The lullaby from the people of Hebridean islands is stemming from acient or medieval times. Deregarding a few variations, there is only one main melody used for lullabies in Gaelic - a melody common to the western isles both of Scotland and Ireland.",
      "citation": "Ho ho vo laidi bheag\" [Side 2, Track 3]. On Songs and Pipes of the Hebrides [LP]. New York: Folkways Records (1961)."
    },
    {
      "track": "044",
      "blurb": "This is a lullaby of Seri, an indigenous group of the Mexican state of Sonora. The name Seri is an exonym of uncertain origin and thet name themselves \"Comcaac.\" They are one of the ethnic Mexican groups that has most strongly retained their language and culture throughout the years after contact with Spanish and Mexican cultures.",
      "citation": "Voice with rattle\" [Track EC 3402-3]. On Mexico, Sonora, Seri Indians, 1966 [sound tape reel]. Archives of Traditional Music (1969)."
    },
    {
      "track": "045",
        "blurb": "This is a love song of Tuareg people from the Sahara in a vast area stretching from far southwestern Libya to southern Algeria, Niger, Mali and Burkina Faso. The social organization of Tuareg people is featured by clan membership and caste hierarchies. The music of Tuareg tribes share similaries with certain berber tribes from Atlas mountains of Morocco. The song is closely related to the sexual traditions of the people.",
        "citation": "Ezzel n oufada aoua etteb ales ou n abaradh\" [Side 1, Track 3]. On Tuareg Music of the Southern Sahara [LP]. New York: Folkways Records (1960)."
      },
      {
        "track": "046",
        "blurb": "This is a dance song of Garo people (Hill People), a Tibeto-Burman ethnic group stemming from the Madhupur Forest. Brass gongs (rang) is the most distinctive and important musical instrument in Garo culture. It became a symbol of a man's prestige due to the expense. Addtionaly, gongs are perforated and hung over a funerary post erected to the memory of the deceased person.",
        "citation": "Dance of the morning dove (Dokrusuani)\" [Track 7]. On Bangladesh: Les Garo de la for�t de Madhupur [CD]. Paris: Ocora Radio France: Distribution Harmonia Mundi (1994)."
      },
      {
        "track": "047",
        "blurb": "This is a Peruvian love song presents Quechua music with an emphasis on the isolated regions of Q'eros, though generally is not considered as typical of the highland Quechua. Translation: \"To thepalm tree-'give me shade. That my love should grow.' To [a different tree] 'cry for me. That my love might grow.'",
        "citation": "Love song\" [Track 31]. On Mountain Music of Peru [CD]. Washington, D.C.: Smithsonian Folkways Records (1991)."
      },
      {
        "track": "048",
        "blurb": "This is a Kurdish lullaby sung a married woman from the noble class of the village Bawale. This is an old lullaby serving to comfort and quiet small children. Lullabies are often sung\nby married women only in the private rooms of a family, and never in the presence of adult men outside the harem. One feature among Kurdish lullabies is that the flattering in lyrics address girls as if they were boys.",
        "citation": "La�la�\" [Side 2, Track 8]. On Kurdish Folk Music from Western Iran [LP]. New York: Folkways Records (1966)."
      },
      {
        "track": "049",
        "blurb": "This is a lullaby of Bafut, a tribe of approximately 20,000 living near Bamenda in the grassy highlands of the British Cameroons. Music is an integral part of Cameroons culture, being interwoven into nearly every facet of daily and ceremonial life. This lullaby is sung without accompaniment, but you can hear the slapping of the mother's hand against the baby.",
        "citation": "Four lullabies\" [Side 1, Track 8]*. On Music of the Cameroons [LP]. New York: Folkways Records (1961). *Note: The online track has an error. Track 8 is labelled \"Funeral song\" but is actually \"Four lullabies."
      },
      {
        "track": "050",
        "blurb": "This is a dance song of Hawaiian people - original Polynesian settlers of Hawaii. Although missionaries, merchants, and monarchs extensively influenced Hawaiian music, it still retained its unique Hawaiian artistic expression. The song is a name chant for the goddess Hi'iaka accompanied by double-gourd drummers and chanters.",
        "citation": "Mele inoa no Hi'iaka; name chant for the goddess Hi'iaka\" [Track 20]. On N_ Leo Hawai'i Kahiko: Voices of Old Hawaii [CD]. Honolulu: Bernice P. Bishop Museum (1997)."
      },
      {
        "track": "051",
        "blurb": "This is a lullaby sung by Samoans - a Polynesian ethnic group native to the Samoan Islands. Young Samoans have been interested in modern pop and rock, but there is a trend of the remixed style of reggae with some traditional elements, such as the use of the pate and old chord structure. The song is a recording of Fa'a'u'uga's voice, while she was cradling her grandchild who eventually falls asleep in the evening. The song describes two people: Tapitofau and Ogafau who are being rebuked for the forgetfulness.",
        "citation": "Tagi lullaby\" [Track 16]. On Spirit of Polynesia [CD]. Wotton-under-Edge, Gloucestershire, United Kingdom: Saydisc Records (1993)."
      },
      {
        "track": "052",
        "blurb": "This is a love song of the Saami - indigenous inhabitants from Sápmi, which today encompasses four realms: Norway, Sweden, Finland, and Russia. The Saami people admire nature and see themselves as a part of it. The Yoik is the folk music of the Sámi, and it can be animals, people, places, feelings, hopes, and a lot of other things. The traditional use of Yoik focused on people - smirking, admiring, pitying, proposing marriage and seducing.",
        "citation": "A love song\" [Disc 3, Track 21]. On Yoik: A Presentation of Saami Folk Music [CD]. Stockholm, Sweden: Caprice (1997)."
      },
      {
        "track": "053",
        "blurb": "This is a dance song of Hawaiian people - original Polynesian settlers of Hawaii. Although missionaries, merchants, and monarchs extensively influenced Hawaiian music, it still retained its unique Hawaiian artistic expression. The song is a name chant for the goddess Hi'iaka accompanied by double-gourd drummers and chanters.",
        "citation": "Mele ho'oipoipo, love chant\" [Track 14]. On Na Leo Hawai'i Kahiko: Voices of Old Hawaii [CD]. Honolulu: Bernice P. Bishop Museum (1997)."
      },
      {
        "track": "054",
        "blurb": "This is a healing oration sung by the Cuna or Tule, indigenous people live in the Archipelago of San Bias, Bayano, and Panama. Music, prayers, spiritual assistance and botanical knowledge of roots, leaves, and barks are known for healing in Cuna culture. In the Haiti (healing process), Aquanusa will sing this particular prayer to release the spirit of the stone. In this oration for the Aquanusa, the text starts with an introduction to the spirit of the stone to the person being cured.",
        "citation": "Aquanusa (stone) a healing oration sung by Wilfredo Morris\" [Side 1, Track 4]. On Music of the Indians of Panama: The Cuna (Tule) & Chocoe (Embera) Tribes [CD]. New York: Smithsonian Folkways Records (2001)."
      },
      {
        "track": "055",
        "blurb": "This is a lullaby of Marathi people - inhabitants of Maharashtra and borders of Belgaum, Karwar of Karnataka, Margao of Goa states in western India. This Palna song is addressed to the child Shivaji, who was a Maratha King in the 16th century. Shivaji is also a national hero in Maharashtra who fought against the Mughal emperors. The songs describe a mother's attempts to make the child go to sleep as well as Shivaji's Chivalry.",
        "citation": "Palna\" [Track 1]. On Marathi Songs from the Arnold Bake Collection [LP]. New Delhi: Archives and Research Centre for Ethnomusicology (1938)."
      },
      {
        "track": "056",
        "blurb": "This is a healing song of Pawnee - a plains Indian tribe who are living in Pawnee, Oklahoma. The name of the song \"Peyote\" refers to a vision-induced plant that can cure illness and relieve fatigue. Some ceremonies take dry peyote plant and add into the tea to cure a sick person. The song itself addresses the peyote meeting held among the Arikara in North Dakota that Mark Evarts attended.",
        "citation": "Peyote song\" [Side 1, Track 3F]. On Music of the Pawnee [LP]. New York: Folkways Records (1967)."
      },
      {
        "track": "057",
        "blurb": "This is a love song performed by a member, of the Iwaidja people, a group indigenous to Northern Australia. The Iwaidja language, still spoken by some 150 people, is unique from nearly all languages in the world in that it uses verbs, rather than nouns, to denote familial relations. For example, instead of the English \"he is her brother\", an Iwaidja speaker would say the equivalent to \"he brothers her\". The word \"Iwaidja\" derives from the language's word for \"no\".",
        "citation": "Dangkarrarnaka\" [Track 28]. On Jurtbirrk: Love Songs From North Western Arnhem Land [CD]. Batchelor, Northern Territory, Australia: Batchelor Press (2005)."
      },
      {
        "track": "058",
        "blurb": "This is a love song originating from the Melpa people, a group native to the highlands of Papua New Guinea. The Melpa people have practiced intensive horticulture for some 9,000 years, with sweet potato and taro as their staple crops. In more rural Melpa regions, villages are often spread quite far apart from each other; in these cases, long distance greetings are accomplished via yodeling.",
        "citation": "Untitled Paupau New Guinea love track.\" Unpublished recording acquired from Don Niles (2011)."
      },
      {
        "track": "059",
        "blurb": "This is a love song of the Guaraní people of Bolivia. Much of Guaraní mythology and folklore recounts plants and animals turning into humans, and vice versa. One such legend tells of at hummingbird who transports good spirits, who are residents of flowers, back to Tubá, so he can cherish them; another tells of a woman who was turned into a giant lily because she fell in love with the moon.",
        "citation": "Tapiti\" [Track 46]. On Le chant des engants du monde: vol. 6 Am�rique du Sud (CD). Paris, France: Arion (1998)."
      },
      {
        "track": "060",
        "blurb": "This is a healing song of the Meratus people, native to Indonesia. In Meratus culture, it is customary for an individual's name to change several times through the course of their life depending on their age, area of residence, and the names of their children. Various Meratus dances are performed as a way to summon ancestral spirits.",
        "citation": "Belian (slow) - Meratus\" [Track 4]. On Born�o: Music of the Dayak and of the Punan [CD]. Paris, France: Buda Musique (1999)."
      },
      {
        "track": "061",
        "blurb": "This is a love song originating from Rwanda, a country in central Africa. One of the most cherished forms of music in Rwanda is a dance, called the ikinimba, that tells the stories of Rwandan heroes and kings. Rwanda is currently (as of July 2018) one of only two countries in the world with a female majority in its national parliament.",
        "citation": "Lama\" [Side A, Track 2]. On TR-181: Sons d' Afrique (Rwanda) [LP]. Johannesburg: International Library of African Music (1952)."
      },
      {
        "track": "062",
        "blurb": "This is a lullaby originating from the Ainu people of Japan. A particular feature of this type of song, called ihumke, is its manner of vocal production, its trills sung in the high-register falsetto with a rolling tongue. To the Ainu people, the beautiful sound represents the chiming of God's bells in heaven showering down upon the infant.",
        "citation": "Ihumke\" [Track 14]. On Ainu Songs Chants des Ainou [CD]. France: Auvidis (1993)."
      },
      {
        "track": "063",
        "blurb": "This is a dance song of the Maasai people of Tanzania. This type of dance, called embrukoi, is performed by leaping high into the air with a rigid body and lifting the chin. The singer of the song praises his friends for killing lions, and describes his own experience killing a lion with his spear. This is a well-known song in this area, called the Arusha district.",
        "citation": "Embrukoi\" [Track 20]. Tanzania Vocals Tanganyika [CD]. Utrecht, Netherlands: SWP Records; Grahamstown, South Africa: International Library of African Music (2003)."
      },
      {
        "track": "064",
        "blurb": "This South Korean healing song is an appeal to the god tusin, who is believed to control smallpox. The name of the song translates to 'separate' or 'guest' because in folk mythology, smallpox is referred to as a 'guest' disease. The melodies of shaman songs such as this one are largely improvised, rather than composed.",
        "citation": "Changgunr_i: Py_lsangg_ri, Sinjangg_ri, Taegamg_ri, T'_judaegamg_ri\" [Disc 2, Track 7]. On Seoul Jaesu Kut & Kin'ogwi Kut [CD]. Seoul: National Center for Korean Traditional Performing Arts/Korean Broadcasting System (1997). *Note: the English liner notes list the track as Track 8 in Section 1."
      },
      {
        "track": "065",
        "blurb": "This is a love song of the Zulu people, located in Southern Africa. The name of the song translates to \"he is so handsome and how I love him,\" with the singer praising the man to whom she is engaged to marry. One should imagine the performer singing quietly to herself while admiring her love from afar. One of the lyrics translates to: \"If only he would walk past my house, I would set the dogs after him and catch him that way.",
        "citation": "Ngimthanda nje muhle\" [Side B, Track 1] On The Zulu Songs of Princess Constance Magogo KaDinuzulu [LP]. Johannesburg: Gallo Records (1973)."
      },
      {
        "track": "066",
        "blurb": "This is a healing song originating from the Turkmen people of Iran. This song, called Porkhâni (Zekre Khanjar), belongs to an ancient ritual meant to banish evil spirits and treat mental diseases.",
        "citation": "Pork�ni (Zekre Khanjar)\" [Disc 3, Track 5]. On Hasht Behesht : A Selection of Iranian Regional Music [CD]. Tehran, Iran: Mahoor Institute of Culture and Art (2005)."
      },
      {
        "track": "067",
        "blurb": "This is a lullaby of the Chukchi people, native to the far northern tundra of Russia. A Chukchi lullaby may be written to celebrate the birth of a child, the song remaining linked to the child for the rest of his or her life. Chukchi music is deeply connected to nature, with many songs containing imitations of bird and animal cries, and with a distinctive form of throat singing serving to represent the breathing of reindeer.",
        "citation": "Berceuse / Lullaby\" [Track 22]. On Russian Far North: The Chukchi [CD]. Boulogne, France: Auvidis (1997)."
      },
      {
        "track": "068",
        "blurb": "This is a dance song of the Lozi people, native to southern Africa. A significant part of Lozi culture revolves around the flood cycle of the Zambezi river. At the start of the wet season each year, there are festivals to celebrate migration from the flood plains to higher ground.",
        "citation": "Musahowelele likishi la Mulena\" [Tape 72]. On C3X-10 [Acetate record]. Johannesburg, South Africa: International Library of African Music (1949)."
      },
      {
        "track": "069",
        "blurb": "This is a love song of the Huichol people, native to Northern mexico. Huichol mythology tells that mankind was created from the saliva of the Sun God, a substance which manifests in the red foam appearing atop ocean waves. An important tradition in Huichol culture is a yealy pilgrimage by foot to a site called Wirikúta. The spiritual journey is seen as a means to return to the origin of life.",
        "citation": "Canci�n de amor (canto de entretenimiento)\" [Track 14]. On M�sica y Cantos para la Luz y los Ocuridad: 100 a�os de Testimonios de los Pueblos Ind�genas: M�sica y Cantos Huicholes Grabados por Carl Lumholtz [CD]. Mexico: Comisi�n para el Desarrollo de los Pueblos Ind�genas (2005)."
      },
      {
        "track": "070",
        "blurb": "This is a lullaby of the Kanak people, native to the Melanesia region of Oceania. In Kanak culture, lullabies are rich with place-names, names, and tales of historical events. The lyrics of this song translate to: \"Sleep eats your eyes / Sleep, little one, sleep.",
        "citation": "Deux berceuses de l'Ile des Pins\" [Track 15]. On Chants Kanaks [CD]. Arles, France: Harmonia Mundi (1990)."
      },
      {
        "track": "071",
        "blurb": "This is a lullaby sung by a resident of the island of Leros, Greece, located in the South Aegean sea. One stanza of the lyrics translates to: \"Sleep, as you take children away / Come take this one too / It's tiny as I give it to you / But bring it back fully grown.\" This lullaby can be sung with several different melodies.",
        "citation": "Lullaby\" [Disc 1, Track 6]. On T_s Leros Ta Tragoudia [CD]. Leros, Greece: Music Folklore Archive (1998)."
      },
      {
        "track": "072",
        "blurb": "This song, entitled \"Tsimshian Blanket Dance Song\", is sung by a member of the Tlingit people, native to Southern Alaska. The Tlingit people predicted the coming of the Europeans long before they arrived. The prophetess and shaman, named Daxoodzoo, warned her people: \"Moving villages floating over the ocean will soon be visiting.",
        "citation": "Tsimshian blanket dance song\" [Side 2, Track 4]. On Southeast Alaska Folk Tradition, Vol. 1: Exploration and Discovery, 1786-1897 [LP]. New York: Folkways Records (1981)."
      },
      {
        "track": "073",
        "blurb": "This is a lullaby of the Tuareg people, originating from North Africa. The Tuareg people, sometimes known as the \"blue people\" for their signature indigo-colored robes, are a semi-nomadic, Muslim, Afroasiatic people. The lyrics of the lullaby translate to, \"My son, why do you cry? Your father has money, goats, camels, sheep, and many slaves. Do not cry. You will be a rich man soon.",
        "citation": "Lullaby\" [Track 6, Song 3]. On African Music [LP]. New York: Folkways Records (1957)."
      },
      {
        "track": "074",
        "blurb": "This is a love song sung by a member of the Nahua people, indigenous to Mexico. Many Nahuatl words have made their way into Spanish and English, including the words \"avocado\", \"chili\", \"chocolate\", \"coyote\", and \"tomato\". The lyrics translate to: \"Hold this flower to your chest; Hold it, because I love you; Hold it because I cherish you with all my heart.",
        "citation": "Canto de amor\" [Track 2]. On In X�chitl in Cu�catl [CD]. Mexico City: Instituto Nacional de Antropolog�a e Historia (2002)."
      },
      {
        "track": "075",
        "blurb": "This is a healing song of the Kwakwaka'wakw people, native to Pacific Northwest Coast of North America. Kwakwaka'wakw tradition regards music as a connection to the supernatural, allowing for a transcendence of human limitations. Doctors, who were often women, are believed to be immortal and clairvoyant. Some Kwakawaka'wakw people regard the power of healing as hereditary; others believe it to be endowed to those posessing the power of vision and dreams.",
        "citation": "Little woman doctor song\" [Side 3, Track 6]. On Indian Music of the Pacific Northwest Coast [LP]. New York: Folkways Records (1967)."
      },
      {
        "track": "076",
        "blurb": "This is a lullaby sung by a member of the Nyangatom people, an agro-pastoralist group of Ethiopia and South Sudan. A subset of the Nyangatom people are nomadic, living in livestock villages that may move several times per year. This song's lyrics are aout the harvest.",
        "citation": "Tolema, tolema-ey\". Unpublished recording acquired from Hannah Wild (2012)."
      },
      {
        "track": "077",
        "blurb": "This is a love song sung in the Kawésqar (also known as Acalufe) langauge, an endangered language spoken in southern Chile. Archeologists estimate that the nomadic Kawésqar people lived in this region of Chilean Patagonia for some 6,000 years, but following the arrival of European settlers their population dwindelled to the point that they are now on the cusp of extinction. Only 7 native speakers of the Kawésqar language remain.",
        "citation": "Lovers' song\" [Track ALC001R001]. On AILLA's South American Languages Collection [Audio]. Austin: www.ailla.utexas.org (2006)."
      },
      {
        "track": "078",
        "blurb": "Festive songs such as this one were often used ritualistically by the Cayapa people of the northwesten Ecuadorian jungles, with healing connotations. Following the distress of a death or misfortune, the group shaman would lead a healing festivity to banish the evil force and reinvigorate the community; these were orchestrated by the shaman using chants, dance, group intoxication, and festive songs such as this one.",
        "citation": "Festive song\" [Track 6]. On Lowland Tribes of Ecuador [CD]. New York: Smithsonian Folkways Recordings (2001)."
      },
      {
        "track": "079",
        "blurb": "This chant accompanies a men's standing dance in Chuuk State, the most populous of the four states that make up the Federated States of Micronesia. Large groups of men in traditional loinclothes (thu) perform this spirited dance, with the rhythm driven by lunging stomps and clapping.",
        "citation": "Men's standing dance\" [Track 25]. On Spirit of Micronesia [CD]. Wotton-under-Edge, Gloucestershire, United Kingdom: Saydisc Records (1995)."
      },
      {
        "track": "080",
        "blurb": "The Yuman singer of this song had such special status as a medicine man that it was said that he was immune to the cold and heat, and could linger amongst the spirits. Each of the four recorded healing songs were sung with different goals and accompanied with different actions. This one, the third healing song, was sung to aid the patient to regain motion; the \"secret language\" in which the song was sung spoke of a lively insect.",
        "citation": "Third song when treating the sick\" [Track 8]. On Healing Songs of the American Indians [CD]. New York: Smithsonian Folkways Records (2000)."
      },
      {
        "track": "081",
        "blurb": "This healing prayer chant reaches out to the Haiwaiian goddess Hi'iaka. Sung in the tradition of the 19th century Hawaiian chant style mele, this was styled as an oli, meaning it would usually be unaccompanied by dance or instruments, and where the notes are long and sustained. The lyrics speak of a peaceful scene of rain, shade, and breeze to grant a lady health into old age.",
        "citation": "Mele pule ho'ola no Hi'iaka, prayer chant for healing\" [Track 4]. On Na Leo Hawai'i Kahiko: Voices of Old Hawaii [CD]. Honolulu: Bernice P. Bishop Museum (1997)."
      },
      {
        "track": "082",
        "blurb": "This is a reportedly a very ancient and rarely performed dance song, here performed by the Kanaks of Melanesia. This choir of men and women accompanies a dance performed by elderly women who mime pulling a conoe along the beach. This example of a dance song is derived from traditional music form, but may show modifications following European colonisation, such as using the Western scale and singing in unison.",
        "citation": "Dance of Tiga: Uke cao naso\"\" [Track 12]. On Chants Kanaks [CD]. Arles, France: Harmonia Mundi (1990)."
      },
      {
        "track": "083",
        "blurb": "This is a Tunisian healing song that accompanies trance rituals. They use a complex system of rhythms where the rhythms of the music and the dance may or may not synchronise in order to emphasize or syncopate the overall rhythm. The person being healed dances with fire surrounded by the musicians, and as the rhythm accelerates to a climax they would pass out, indicating that the posessing entity has left them.",
        "citation": "S_d_ b_ ra's el-�ajm_\" [Track 4]. On Stambeli: Music, Trance, and Alterity in Tunisia [CD]. Chicago: University of Chicago Press (2010)."
      },
      {
        "track": "084",
        "blurb": "This Kurdish dance song is in the form of a royne, a form popular in the Mukriyan area; two singers sing alternate verses that accompany parallel lines of dancing men and women. Kurdish music changes as a function of locale and social strata; this song is taken from the third class, where this piece is not a professional performace, but music taken from the fabric of everyday social activities.",
        "citation": "Royne: �� b� �it l� kirdim\" [Side B, Track 5]. On Kurdish Folk Music from Western Iran [CD]. New York: Folkways Records (1966)."
      },
      {
        "track": "085",
        "blurb": "This traditional song of requited love is from the Amhara region of Ethiopia. The singer is accompanied by a krar (or Ethiopian lyre), an instrument that is traditionally understood to be powerful in invoking humans' destructive impulses such as hatred, or carnal love.",
        "citation": "Shemonmuanaye\" [Side 2, Track 1]. On The Music of Ethiopia: Azmari Music of the Amharas [LP]. New York: Anthology Record and Tape Corporation (1969)."
      },
      {
        "track": "086",
        "blurb": "This is a love song from the Mi'kmaq First Nations people. Prior to European contact, they used to have a hieroglyphic writing system, which strongly displays their reliance and respect for their maratime and land environment.",
        "citation": "Micmac love song; Lenny Ward\" [ATL 8861, Track 1.13]. On United States, Virginia and Maine; Canada, Quebec, New Brunswick, and Newfoundland; Various North American Indian Groups, 1909-1911 [Cylinder]. Bloomington, Indiana, USA: Indiana University Press (1979)."
      },
      {
        "track": "087",
        "blurb": "This is a lullaby from the Haida culture. Songs such as these are very difficult to collect, due to their usually ritualistic and sacred use. The thriving cedar forests in this region were central to their life and culture, used to both build canoes and furniture, as well as being the canvas for their now famous totem poles.",
        "citation": "Lullaby song\" [Disc 2, Track 2]. On Haida: Indian Music of the Pacific Northwest [CD]. New York: Smithsonian Folkways Recordings (2001)."
      },
      {
        "track": "088",
        "blurb": "This Mataco dance song accompanies traditional night-dances that were intimate in nature. A recurring theme in Mataco religious belief is interdependence and balance; between humans and animals, sky and earth, and the natural and supernatural. Breaking social codes or taboos was thought to bring one in conflict with their zoomorphic and anthropomorphic supernatural figures.",
        "citation": "Dance/chant ring of men\" [Track 5]. On Argentina: The Indians of the Gran Chaco [CD]. New York: Lyrichord Discs Inc (2005)."
      },
      {
        "track": "089",
        "blurb": "This dance song from the Saramaka people accompanies an athletically impressive dance, where a man balances on long horizontal poles that are held and moved by two others. In the 1970s, this festive dance morphed into a similar form where the dancer performed on stilts.",
        "citation": "Alesingo\" [Side 1, Track 3]. On From Slavery to Freedom: Music of the Saramaka Maroons, Suriname [LP]. New York: Lyrichord Discs . (1981)."
      },
      {
        "track": "090",
        "blurb": "This Mentawaian dance song accompanies what is traditionally a performance in braise of the local kind of gibbon called bilou. The dancers may be still to sing, or stamp in rhythm on the loose floorboards, and make animal noises. Should the dancers enter a trance during the performance, the steady beat of the drum would accelerate and switch to a different rhythm.",
        "citation": "Urai turuk bilou\" [Track 16]. On Music of Indonesia: Music from the Forests of Riau and Mentawai [CD]. Washington, D.C.: Smithsonian/Folkways Recordings (1995)."
      },
      {
        "track": "091",
        "blurb": "This is a traditional dance song derived from an old war dance. Due to the recreational and social function of this music, this welcomed people of all classes, age, sex, and religion to join in dance. As the music unfolds, there are sections dedicated to prayer for gods and ancestors, historical and philosophical reflection, and dance sections that may last for hours.",
        "citation": "Agbadza\" [Track 2]. On Ghana Rhythms of the People: Traditional Music and Dance of the Ewe, Dagbamba, Fante, and Ga People [CD]. Montpelier, Vermont, USA: Multicultural Media (2000)."
      },
      {
        "track": "092",
        "blurb": "This is a Nepali love song, specifically from the Thakali group. This is an indigenous group of some 10,000 people, where it is thought that the \"Thak\" etymology of this word come from the Tibetan for \"distant country, possibly referring to how this group was historically elusive of Tibetan control.",
        "citation": "Nepali love song\" [Side 1, Track 1]. On Songs and Dances of Nepal [LP]. New York: Folkways Records (1964)."
      },
      {
        "track": "093",
        "blurb": "In the Kuna culture, lullabies such as this one were an important aspect of children's education for their social role. These lullabies are also a rare case of female vocal expression; this role is usually assigned to men.",
        "citation": "Lullaby for a little boy\" [Track 2]. On Music of the Indians of Panama: The Cuna (Tule) & Chocoe (Embera) Tribes [CD]. New York: Smithsonian Folkways Records (2001)."
      },
      {
        "track": "094",
        "blurb": "This \"love song to a married woman\" was recorded in Truk. The lyrics translate to \"Do not speak of me / I sen you a short look / From the boat, Leuota. / But don't take it up / The word which I spoke to you, / My eyes look at you / From under a beautiful canopy.",
        "citation": "Angi: Love song to a married woman\" [Disc 1, Side B, Track 10]. On The Demonstration Collection of E.M. von Hornbostel and the Berlin Phonogramm-Archiv [LP]. New York: Folkways Records (1963)."
      },
      {
        "track": "095",
        "blurb": "This is a lullaby of the Ona group. This people used to live in what is now known as the Tierra del Fuego region of Argentina, and were known for being a powerful warriors. They survived the harsh conditions of the region by wearing leathers and heavy furs, and adorned themselves with jewelry made from bird bones, shells, and guanaco (an animal similar to llamas) tendons.",
        "citation": "Lullaby no. 45\" [Disc 2, Track 29]. On Selk'nam Chants of Tierra del Fuego, Argentina Vol 1 [CD]. New York: Smithsonian/Folkways Recordings (2004)."
      },
      {
        "track": "096",
        "blurb": "This is a healing song from the Native American Ojibwa people. This song accompanies a ceremony that includes a demonstration with bones, and the treatment itself. The lyrics speak of the dream in which the doctor received his power.",
        "citation": "The approach of the thunderbirds\" [Track 1]. On Healing Songs of the American Indians [CD]. New York: Folkways Records (2000)."
      },
      {
        "track": "097",
        "blurb": "This Serbian love song is in a form that was once traditionally sung at southeastern Serbian village gatherings. It it sung by a solo singer, and the lyrics gradually enrichen with repetition.",
        "citation": "Omile mi un selo devoj_e (I fell in love with a girl in the village)\" [Track 27]. On Serbia: An Anthology of Serbian Folk Music [CD]. Lausanne, Switzerland: VDE-GALLO Records (1999)."
      },
      {
        "track": "098",
        "blurb": "This is a dance song of the Tzeltal people in Chiapas, México. This type of song, called the bolonchón, is referred to as the \"tiger dance\", and its lyrics describe the daily life of this big cat. The song is accompanied by harp and twelve-string guitar.",
        "citation": "El bolonch�n\" [Track 12]. On M�sica Ind�gena de los Altos de Chiapas [CD]. Mexico City: Instituto Nacional de Antropolog�a e Historia (2002)."
      },
      {
        "track": "099",
        "blurb": "This is a lullaby from the Iglulik Inuit people of the Arctic and Subarctic. While this particular song does not fall under this category, the most popular musical form in this culture is throat singing. In this practice, two women will sit face to face and try to outperform the other in a battle to see who can sing for the longest.",
        "citation": "Lullabies and aqausiit: Lullaby\" [Track 37]. On Songs of the Inuit Iglulik [CD]. Barcelona: Witness (2004)."
      },
      {
        "track": "100",
        "blurb": "This is a lullaby of the Q'ero Quichua people of the Central Andres. The lyrics roughly translate to, \"Chi, chi, chi wawa (baby) that you might learn to work the potatoes, young\none.",
        "citation": "Lullaby\" [Track 32]. On Mountain Music of Peru [CD]. Washington, D.C.: Smithsonian Folkways Records (1991)."
      },
      {
        "track": "101",
        "blurb": "This song is a lullaby from the Iroquois native to North America. This recording was taken on the south side of St. Lawrence on a reservation not far from Montreal. Today, the Iroquois live on the Grand River and the Bay of Quinte in Ontario as well as St. Regis and Caughnawaga in Quebec.",
        "citation": "Iroqois lullaby\" [Side 1, Track 2]. On Canada's Story in Song [LP]. New York: Folkways Records (1960)."
      },
      {
        "track": "102",
        "blurb": "This is a healing song from the Nanai of Nothern Asia. It is known as a shamanic song, which are meant for the spirits. The person singing is ill and singing to the spirits for help. The lyrics translate to: \"People coming from far gace come to me, and I address you, my spiritds (I touch no-one, I agress no-one), what can I sing, what can I say (\"shamanize\")? In older days I had much power, but now I live like this, I am so weak. If anuthing comes out of me, out of my mouth, it will come from my ancestors, my spirits. Do not feel hurt, even if I don't always talk like I should. When I grew up in my village of Djapian, I was strong, but now I live and suffer.",
        "citation": "Shamanic song with u_tu drum\" [Track 8]. On Chants Chamaniques et Quotidiens du Bassin de l'Amour [CD]. Paris: Buda Musique (1997)."
      },
      {
        "track": "103",
        "blurb": "Puirt-a-beul\" is a type of dance song native to the Highland Scots in the British Isles. The name directly translates to “tunes from a mouth.” While it is used for merriment and dance, this type of song stems from the banning of the pipes in the '45 rebellion and continued to be used during the time of Calvinism where music was seen as a sin and insturments were burned.",
        "citation": "Puirt-a-beul\" [Side 1, Track 3]. On Songs And Pipes of the Hebrides [LP]. New York: Folkways Records (1961)."
      },
      {
        "track": "104",
        "blurb": "This is a love song of the Kurds in the Middle East. The song is refered to as \"Heyran,\" which is the name of a genre native to the Kurds. They do not traditionally utilize individual titles for songs of this type. Singer Hadji Hemedere of Indirgaş performed this particular recording outside in the open air.",
        "citation": "Heyran\" [Side 2, Track 2]. On Kurdish Folk Music from Western Iran [LP]. New York: Folkways Records (1966)."
      },
      {
        "track": "105",
        "blurb": "This is a love song native to the Kelabit people of Southeast Asia. In this particular culture, their proposals involve singing a song to your significant other, so \"Adtah ulus lagku ai-ai\" was performed as a marriage request.",
        "citation": "Adtah ulus lagku ai-ai - kelabit\" [Track 11]. On Born�o: Music of the Dayak and of the Punan [CD]. Paris: Buda Musique (1999)."
      },
      {
        "track": "106",
        "blurb": "This is a dance song of the Chukchee people of Northern Asia. This song translates to \"Shell Dance.\" Chukchee music is deeply connected to nature, with many songs containing imitations of bird and animal cries, and with a distinctive form of throat singing serving to represent the breathing of reindeer.",
        "citation": "La danse des coquillages / Shell dance\" [Track 1]. On Russian Far North: The Chukchi [CD]. Boulogne, France: PlayaSound (1997)."
      },
      {
        "track": "107",
        "blurb": "This is a healing song from the Mataco people of South America. This song translates to the \"Poisonous Bites Song.\" In their culture, \"medicine men\" will sing to the ill in order to heal them of their sickness.",
        "citation": "Poisonous bites song\" [Track 14]. On Argentina: The Indians of the Gran Chaco [CD]. New York: Lyrichord Discs Inc (2005)."
      },
      {
        "track": "108",
        "blurb": "This is a healing song from the Walbiri people of Austrailia. There are roughly 5,000-6,000 Walbiri still living in the Northern portion of Australia and about 3,000 still speak their distinct language.",
        "citation": "Women's secret Yowalyu ceremonies\" [Track 37A]. On Australian and New Guinea musical records (LP). Sydney, Australia: University of Sydney (1957)."
      },
      {
        "track": "109",
        "blurb": "This is a healing song of the Kogi people, an indigenous ethnic group that lives in the Sierra Nevada de Santa Marta in Colombia. The core belief of Kogi people is that they are children of the earth. They believe in \"Aluna,\" the great mother who is the force behind nature. All Kogi people attune their spiritual leader - Mamas (means sun in Kogi language) for guidance, healing, and leadership.",
        "citation": "Canto 'de curaci�n'\" [Side 1, Track 7]. On M�sica Ind�gena y Folkl�rica de Colombia [LP]. Colombia: Importaciones Daro (1971)."
      },
      {
        "track": "110",
        "blurb": "This is a dance song of the Hopi people. To dance to this song, a lot of coordination is needed. The dancer will step into a hoop and then move their body in order to get the hoop up to the top of their head. The song simultaneously motivates the dancer and applaudes them for their ability to manipulate the hoop.",
        "citation": "Hoop dance song\" [Track 14]. On Hopi Katcina Songs and Six Other Songs by Hopi Chanters [CD]. New York: Smithsonian Folkways Recordings (2001)."
      },
      {
        "track": "111",
        "blurb": "This is a lullaby from the Hopi people. Performed by Clarence Taptuka, this song uses a metaphor that compares a baby riding on their mother's back to a bettle riding upon another beetle. This is one of the most famous lullabies within this culture.",
        "citation": "Sleep song\" [Track 8]. On A Cry from the Earth: Music of the North American Indians [CD]. New York: Smithsonian Folkways Recordings (2001)."
      },
      {
        "track": "112",
        "blurb": "This is a healing song from the Otavalo Quichua of South America. The title of this track tranlstes to \"Magical Healing Session.\" This indigenous group will use a song of this nature to assist in the treatment of the ill.",
        "citation": "S�ance de gu�rison magique\" [Side B, Track 2-3]. On Equateur: Indiens Jivaro, Cayapa, Otavalo [LP]. Paris: Vogue Contrepoint (1960)."
      },
      {
        "track": "113",
        "blurb": "This is a healing song of the Ganda people of Eastern Africa. During this recording, a doctor laid a sick child upon his knees and gave him medicine while singing. Meanwhile, the doctor's assistant shook an akanyege, a gourd with sand or pebbles inside, while the doctor performed the treatment. This song functions as a way to help the healing process.",
        "citation": "Traditional doctor's cure\" [Track 7]. On Uganda and Other African Nations: Feasts of the Savanna: Feasts of the Savanna: A Musical Journey through East and West Africa [CD]. Barre, VT: Multicultural Media (1997)."
      },
      {
        "track": "114",
        "blurb": "This is a lullaby from the Yapese people of Micronesia. In this recording, Letachipei Maria can be heard singing to her nine month old granddaughter, Lagiyelmang Grace, while she tries to soothe the infant to sleep.",
        "citation": "Cradle song\" [Track 31]. On Spirit of Micronesia [CD]. (1995). Great Britain: Saydisc Records (1995)."
      },
      {
        "track": "115",
        "blurb": "This is a dance song from the Yaqui people of Northern Mexico. This is one of their famous deer songs, which are a tribute to the sacrifice that deer make so that the Yaqui people may live. The song is accompanied by dancers who wear rattles while the performers often sing from the deer's perspective.",
        "citation": "Baile del venado: El palo verde\" [Side 1, Track 10]. On Folk Music of Mexico [LP]. Washington, D.C.: Library of Congress (1959)."
      },
      {
        "track": "116",
        "blurb": "This is a healing song from the Mbuti people of Central Africa. This song is used in place of any type of foreign medicine and serves as a way to help the ill. They do not typically turn to sources beyond the forest for medical help.",
        "citation": "Curative song\" [Side B, Track 9]. On TR-125: Sons d' Afrique (Congo Mbuti/Pygmy) [LP]. Johannesburg: International Library of African Music (1952)."
      },
      {
        "track": "117",
        "blurb": "This is a lullaby from the Phunoi people of Southeast Asia. It utilizes a soft, high pitched voice to soothe the infant, indicative of most lullabies.",
        "citation": "Berceuse / Lullaby\" [Track 18]. On Music of Laos [CD]. Paris: Maison des Cultures du Monde (2004)."
      },
      {
        "track": "118",
        "blurb": "This is a love song of the Navajo Native American Tribe of Southwestern United States. It is performed by Reg Begay who sings about how he doesn't care that his relationship with this beautiful women has ended, but no matter how much he says this, he keeps thinking about her.",
        "citation": "I didn't care\" [Track 1]. On Traditional Navajo Songs [CD]. Phoenix, Arizona: Canyon Records (1998).",

      }
    ];


var tracks = []
var new_track
for (var i=0; i<118; i++){
new_track = `${baseUrl}/quizzes/fc/audio/TML-RAW-${info[i].track}.mp3`
tracks.push(new_track)
}

var img =[]
var new_img

for (var i=0;i<118;i++){
new_img = `${baseUrl}/quizzes/fc/img/NHSDiscography-${info[i].track}-pic.jpg`
img.push(new_img)
}





/* songs and function */
  var song_data = [
        {stimulus: tracks[0], image: img[0], citation: info[0].citation, blurb: info[0].blurb, data: {test_part: 'response', key: lullaby, correct_response: 'Soothing a baby'}, correct: 'Soothing a baby'},
        {stimulus: tracks[1], image: img[1], citation: info[1].citation, blurb: info[1].blurb, data: {test_part: 'response', key: healing, correct_response: 'Healing the sick'}, correct: 'Healing the sick'},
        {stimulus: tracks[2], image: img[2], citation: info[2].citation, blurb: info[2].blurb, data: {test_part: 'response', key: lullaby, correct_response: 'Soothing a baby'}, correct: 'Soothing a baby'},
        {stimulus: tracks[3], image: img[3], citation: info[3].citation, blurb: info[3].blurb, data: {test_part: 'response', key: healing, correct_response: 'Healing the sick'}, correct: 'Healing the sick'},
        {stimulus: tracks[4], image: img[4], citation: info[4].citation, blurb: info[4].blurb, data: {test_part: 'response', key: dancing, correct_response: 'Dancing'}, correct: 'Dancing'},
        {stimulus: tracks[5], image: img[5], citation: info[5].citation, blurb: info[5].blurb, data: {test_part: 'response', key: healing, correct_response: 'Healing the sick'}, correct: 'Healing the sick'},
        {stimulus: tracks[6], image: img[6], citation: info[6].citation, blurb: info[6].blurb, data: {test_part: 'response', key: love, correct_response: 'Expressing love to another person'}, correct: 'Expressing love to another person'},
        {stimulus: tracks[7], image: img[7], citation: info[7].citation, blurb: info[7].blurb, data: {test_part: 'response', key: love, correct_response: 'Expressing love to another person'}, correct: 'Expressing love to another person'},
        {stimulus: tracks[8], image: img[8], citation: info[8].citation, blurb: info[8].blurb, data: {test_part: 'response', key: lullaby, correct_response: 'Soothing a baby'}, correct: 'Soothing a baby'},
        {stimulus: tracks[9], image: img[9], citation: info[9].citation, blurb: info[9].blurb, data: {test_part: 'response', key: love, correct_response: 'Expressing love to another person'}, correct: 'Expressing love to another person'},
        {stimulus: tracks[10], image: img[10], citation: info[10].citation, blurb: info[10].blurb, data: {test_part: 'response', key: healing, correct_response: 'Healing the sick'}, correct: 'Healing the sick'},
        {stimulus: tracks[11], image: img[11], citation: info[11].citation, blurb: info[11].blurb, data: {test_part: 'response', key: love, correct_response: 'Expressing love to another person'}, correct: 'Expressing love to another person'},
        {stimulus: tracks[12], image: img[12], citation: info[12].citation, blurb: info[12].blurb, data: {test_part: 'response', key: dancing, correct_response: 'Dancing'}, correct: 'Dancing'},
        {stimulus: tracks[13], image: img[13], citation: info[13].citation, blurb: info[13].blurb, data: {test_part: 'response', key: dancing, correct_response: 'Dancing'}, correct: 'Dancing'},
        {stimulus: tracks[14], image: img[14], citation: info[14].citation, blurb: info[14].blurb, data: {test_part: 'response', key: love, correct_response: 'Expressing love to another person'}, correct: 'Expressing love to another person'},
        {stimulus: tracks[15], image: img[15], citation: info[15].citation, blurb: info[15].blurb, data: {test_part: 'response', key: love, correct_response: 'Expressing love to another person'}, correct: 'Expressing love to another person'},
        {stimulus: tracks[16], image: img[16], citation: info[16].citation, blurb: info[16].blurb, data: {test_part: 'response', key: love, correct_response: 'Expressing love to another person'}, correct: 'Expressing love to another person'},
        {stimulus: tracks[17], image: img[17], citation: info[17].citation, blurb: info[17].blurb, data: {test_part: 'response', key: love, correct_response: 'Expressing love to another person'}, correct: 'Expressing love to another person'},
        {stimulus: tracks[18], image: img[18], citation: info[18].citation, blurb: info[18].blurb, data: {test_part: 'response', key: love, correct_response: 'Expressing love to another person'}, correct: 'Expressing love to another person'},
        {stimulus: tracks[19], image: img[19], citation: info[19].citation, blurb: info[19].blurb, data: {test_part: 'response', key: dancing, correct_response: 'Dancing'}, correct: 'Dancing'},
        {stimulus: tracks[20], image: img[20], citation: info[20].citation, blurb: info[20].blurb, data: {test_part: 'response', key: lullaby, correct_response: 'Soothing a baby'}, correct: 'Soothing a baby'},
        {stimulus: tracks[21], image: img[21], citation: info[21].citation, blurb: info[21].blurb, data: {test_part: 'response', key: dancing, correct_response: 'Dancing'}, correct: 'Dancing'},
        {stimulus: tracks[22], image: img[22], citation: info[22].citation, blurb: info[22].blurb, data: {test_part: 'response', key: healing, correct_response: 'Healing the sick'}, correct: 'Healing the sick'},
        {stimulus: tracks[23], image: img[23], citation: info[23].citation, blurb: info[23].blurb, data: {test_part: 'response', key: healing, correct_response: 'Healing the sick'}, correct: 'Healing the sick'},
        {stimulus: tracks[24], image: img[24], citation: info[24].citation, blurb: info[24].blurb, data: {test_part: 'response', key: dancing, correct_response: 'Dancing'}, correct: 'Dancing'},
        {stimulus: tracks[25], image: img[25], citation: info[25].citation, blurb: info[25].blurb, data: {test_part: 'response', key: love, correct_response: 'Expressing love to another person'}, correct: 'Expressing love to another person'},
        {stimulus: tracks[26], image: img[26], citation: info[26].citation, blurb: info[26].blurb, data: {test_part: 'response', key: healing, correct_response: 'Healing the sick'}, correct: 'Healing the sick'},
        {stimulus: tracks[27], image: img[27], citation: info[27].citation, blurb: info[27].blurb, data: {test_part: 'response', key: love, correct_response: 'Expressing love to another person'}, correct: 'Expressing love to another person'},
        {stimulus: tracks[28], image: img[28], citation: info[28].citation, blurb: info[28].blurb, data: {test_part: 'response', key: dancing, correct_response: 'Dancing'}, correct: 'Dancing'},
        {stimulus: tracks[29], image: img[29], citation: info[29].citation, blurb: info[29].blurb, data: {test_part: 'response', key: dancing, correct_response: 'Dancing'}, correct: 'Dancing'},
        {stimulus: tracks[30], image: img[30], citation: info[30].citation, blurb: info[30].blurb, data: {test_part: 'response', key: healing, correct_response: 'Healing the sick'}, correct: 'Healing the sick'},
        {stimulus: tracks[31], image: img[31], citation: info[31].citation, blurb: info[31].blurb, data: {test_part: 'response', key: dancing, correct_response: 'Dancing'}, correct: 'Dancing'},
        {stimulus: tracks[32], image: img[32], citation: info[32].citation, blurb: info[32].blurb, data: {test_part: 'response', key: healing, correct_response: 'Healing the sick'}, correct: 'Healing the sick'},
        {stimulus: tracks[33], image: img[33], citation: info[33].citation, blurb: info[33].blurb, data: {test_part: 'response', key: lullaby, correct_response: 'Soothing a baby'}, correct: 'Soothing a baby'},
        {stimulus: tracks[34], image: img[34], citation: info[34].citation, blurb: info[34].blurb, data: {test_part: 'response', key: dancing, correct_response: 'Dancing'}, correct: 'Dancing'},
        {stimulus: tracks[35], image: img[35], citation: info[35].citation, blurb: info[35].blurb, data: {test_part: 'response', key: dancing, correct_response: 'Dancing'}, correct: 'Dancing'},
        {stimulus: tracks[36], image: img[36], citation: info[36].citation, blurb: info[36].blurb, data: {test_part: 'response', key: lullaby, correct_response: 'Soothing a baby'}, correct: 'Soothing a baby'},
        {stimulus: tracks[37], image: img[37], citation: info[37].citation, blurb: info[37].blurb, data: {test_part: 'response', key: healing, correct_response: 'Healing the sick'}, correct: 'Healing the sick'},
        {stimulus: tracks[38], image: img[38], citation: info[38].citation, blurb: info[38].blurb, data: {test_part: 'response', key: lullaby, correct_response: 'Soothing a baby'}, correct: 'Soothing a baby'},
        {stimulus: tracks[39], image: img[39], citation: info[39].citation, blurb: info[39].blurb, data: {test_part: 'response', key: lullaby, correct_response: 'Soothing a baby'}, correct: 'Soothing a baby'},
        {stimulus: tracks[40], image: img[40], citation: info[40].citation, blurb: info[40].blurb, data: {test_part: 'response', key: healing, correct_response: 'Healing the sick'}, correct: 'Healing the sick'},
        {stimulus: tracks[41], image: img[41], citation: info[41].citation, blurb: info[41].blurb, data: {test_part: 'response', key: dancing, correct_response: 'Dancing'}, correct: 'Dancing'},
        {stimulus: tracks[42], image: img[42], citation: info[42].citation, blurb: info[42].blurb, data: {test_part: 'response', key: lullaby, correct_response: 'Soothing a baby'}, correct: 'Soothing a baby'},
        {stimulus: tracks[43], image: img[43], citation: info[43].citation, blurb: info[43].blurb, data: {test_part: 'response', key: lullaby, correct_response: 'Soothing a baby'}, correct: 'Soothing a baby'},
        {stimulus: tracks[44], image: img[44], citation: info[44].citation, blurb: info[44].blurb, data: {test_part: 'response', key: love, correct_response: 'Expressing love to another person'}, correct: 'Expressing love to another person'},
        {stimulus: tracks[45], image: img[45], citation: info[45].citation, blurb: info[45].blurb, data: {test_part: 'response', key: dancing, correct_response: 'Dancing'}, correct: 'Dancing'},
        {stimulus: tracks[46], image: img[46], citation: info[46].citation, blurb: info[46].blurb, data: {test_part: 'response', key: love, correct_response: 'Expressing love to another person'}, correct: 'Expressing love to another person'},
        {stimulus: tracks[47], image: img[47], citation: info[47].citation, blurb: info[47].blurb, data: {test_part: 'response', key: lullaby, correct_response: 'Soothing a baby'}, correct: 'Soothing a baby'},
        {stimulus: tracks[48], image: img[48], citation: info[48].citation, blurb: info[48].blurb, data: {test_part: 'response', key: lullaby, correct_response: 'Soothing a baby'}, correct: 'Soothing a baby'},
        {stimulus: tracks[49], image: img[49], citation: info[49].citation, blurb: info[49].blurb, data: {test_part: 'response', key: dancing, correct_response: 'Dancing'}, correct: 'Dancing'},
        {stimulus: tracks[50], image: img[50], citation: info[50].citation, blurb: info[50].blurb, data: {test_part: 'response', key: lullaby, correct_response: 'Soothing a baby'}, correct: 'Soothing a baby'},
        {stimulus: tracks[51], image: img[51], citation: info[51].citation, blurb: info[51].blurb, data: {test_part: 'response', key: love, correct_response: 'Expressing love to another person'}, correct: 'Expressing love to another person'},
        {stimulus: tracks[52], image: img[52], citation: info[52].citation, blurb: info[52].blurb, data: {test_part: 'response', key: love, correct_response: 'Expressing love to another person'}, correct: 'Expressing love to another person'},
        {stimulus: tracks[53], image: img[53], citation: info[53].citation, blurb: info[53].blurb, data: {test_part: 'response', key: healing, correct_response: 'Healing the sick'}, correct: 'Healing the sick'},
        {stimulus: tracks[54], image: img[54], citation: info[54].citation, blurb: info[54].blurb, data: {test_part: 'response', key: lullaby, correct_response: 'Soothing a baby'}, correct: 'Soothing a baby'},
        {stimulus: tracks[55], image: img[55], citation: info[55].citation, blurb: info[55].blurb, data: {test_part: 'response', key: healing, correct_response: 'Healing the sick'}, correct: 'Healing the sick'},
        {stimulus: tracks[56], image: img[56], citation: info[56].citation, blurb: info[56].blurb, data: {test_part: 'response', key: love, correct_response: 'Expressing love to another person'}, correct: 'Expressing love to another person'},
        {stimulus: tracks[57], image: img[57], citation: info[57].citation, blurb: info[57].blurb, data: {test_part: 'response', key: love, correct_response: 'Expressing love to another person'}, correct: 'Expressing love to another person'},
        {stimulus: tracks[58], image: img[58], citation: info[58].citation, blurb: info[58].blurb, data: {test_part: 'response', key: lullaby, correct_response: 'Soothing a baby'}, correct: 'Soothing a baby'},
        {stimulus: tracks[59], image: img[59], citation: info[59].citation, blurb: info[59].blurb, data: {test_part: 'response', key: healing, correct_response: 'Healing the sick'}, correct: 'Healing the sick'},
        {stimulus: tracks[60], image: img[60], citation: info[60].citation, blurb: info[60].blurb, data: {test_part: 'response', key: love, correct_response: 'Expressing love to another person'}, correct: 'Expressing love to another person'},
        {stimulus: tracks[61], image: img[61], citation: info[61].citation, blurb: info[61].blurb, data: {test_part: 'response', key: lullaby, correct_response: 'Soothing a baby'}, correct: 'Soothing a baby'},
        {stimulus: tracks[62], image: img[62], citation: info[62].citation, blurb: info[62].blurb, data: {test_part: 'response', key: dancing, correct_response: 'Dancing'}, correct: 'Dancing'},
        {stimulus: tracks[63], image: img[63], citation: info[63].citation, blurb: info[63].blurb, data: {test_part: 'response', key: healing, correct_response: 'Healing the sick'}, correct: 'Healing the sick'},
        {stimulus: tracks[64], image: img[64], citation: info[64].citation, blurb: info[64].blurb, data: {test_part: 'response', key: love, correct_response: 'Expressing love to another person'}, correct: 'Expressing love to another person'},
        {stimulus: tracks[65], image: img[65], citation: info[65].citation, blurb: info[65].blurb, data: {test_part: 'response', key: healing, correct_response: 'Healing the sick'}, correct: 'Healing the sick'},
        {stimulus: tracks[66], image: img[66], citation: info[66].citation, blurb: info[66].blurb, data: {test_part: 'response', key: lullaby, correct_response: 'Soothing a baby'}, correct: 'Soothing a baby'},
        {stimulus: tracks[67], image: img[67], citation: info[67].citation, blurb: info[67].blurb, data: {test_part: 'response', key: dancing, correct_response: 'Dancing'}, correct: 'Dancing'},
        {stimulus: tracks[68], image: img[68], citation: info[68].citation, blurb: info[68].blurb, data: {test_part: 'response', key: love, correct_response: 'Expressing love to another person'}, correct: 'Expressing love to another person'},
        {stimulus: tracks[69], image: img[69], citation: info[69].citation, blurb: info[69].blurb, data: {test_part: 'response', key: lullaby, correct_response: 'Soothing a baby'}, correct: 'Soothing a baby'},
        {stimulus: tracks[70], image: img[70], citation: info[70].citation, blurb: info[70].blurb, data: {test_part: 'response', key: lullaby, correct_response: 'Soothing a baby'}, correct: 'Soothing a baby'},
        {stimulus: tracks[71], image: img[71], citation: info[71].citation, blurb: info[71].blurb, data: {test_part: 'response', key: dancing, correct_response: 'Dancing'}, correct: 'Dancing'},
        {stimulus: tracks[72], image: img[72], citation: info[72].citation, blurb: info[72].blurb, data: {test_part: 'response', key: lullaby, correct_response: 'Soothing a baby'}, correct: 'Soothing a baby'},
        {stimulus: tracks[73], image: img[73], citation: info[73].citation, blurb: info[73].blurb, data: {test_part: 'response', key: love, correct_response: 'Expressing love to another person'}, correct: 'Expressing love to another person'},
        {stimulus: tracks[74], image: img[74], citation: info[74].citation, blurb: info[74].blurb, data: {test_part: 'response', key: healing, correct_response: 'Healing the sick'}, correct: 'Healing the sick'},
        {stimulus: tracks[75], image: img[75], citation: info[75].citation, blurb: info[75].blurb, data: {test_part: 'response', key: lullaby, correct_response: 'Soothing a baby'}, correct: 'Soothing a baby'},
        {stimulus: tracks[76], image: img[76], citation: info[76].citation, blurb: info[76].blurb, data: {test_part: 'response', key: love, correct_response: 'Expressing love to another person'}, correct: 'Expressing love to another person'},
        {stimulus: tracks[77], image: img[77], citation: info[77].citation, blurb: info[77].blurb, data: {test_part: 'response', key: dancing, correct_response: 'Dancing'}, correct: 'Dancing'},
        {stimulus: tracks[78], image: img[78], citation: info[78].citation, blurb: info[78].blurb, data: {test_part: 'response', key: dancing, correct_response: 'Dancing'}, correct: 'Dancing'},
        {stimulus: tracks[79], image: img[79], citation: info[79].citation, blurb: info[79].blurb, data: {test_part: 'response', key: healing, correct_response: 'Healing the sick'}, correct: 'Healing the sick'},
        {stimulus: tracks[80], image: img[80], citation: info[80].citation, blurb: info[80].blurb, data: {test_part: 'response', key: healing, correct_response: 'Healing the sick'}, correct: 'Healing the sick'},
        {stimulus: tracks[81], image: img[81], citation: info[81].citation, blurb: info[81].blurb, data: {test_part: 'response', key: dancing, correct_response: 'Dancing'}, correct: 'Dancing'},
        {stimulus: tracks[82], image: img[82], citation: info[82].citation, blurb: info[82].blurb, data: {test_part: 'response', key: healing, correct_response: 'Healing the sick'}, correct: 'Healing the sick'},
        {stimulus: tracks[83], image: img[83], citation: info[83].citation, blurb: info[83].blurb, data: {test_part: 'response', key: dancing, correct_response: 'Dancing'}, correct: 'Dancing'},
        {stimulus: tracks[84], image: img[84], citation: info[84].citation, blurb: info[84].blurb, data: {test_part: 'response', key: love, correct_response: 'Expressing love to another person'}, correct: 'Expressing love to another person'},
        {stimulus: tracks[85], image: img[85], citation: info[85].citation, blurb: info[85].blurb, data: {test_part: 'response', key: love, correct_response: 'Expressing love to another person'}, correct: 'Expressing love to another person'},
        {stimulus: tracks[86], image: img[86], citation: info[86].citation, blurb: info[86].blurb, data: {test_part: 'response', key: lullaby, correct_response: 'Soothing a baby'}, correct: 'Soothing a baby'},
        {stimulus: tracks[87], image: img[87], citation: info[87].citation, blurb: info[87].blurb, data: {test_part: 'response', key: dancing, correct_response: 'Dancing'}, correct: 'Dancing'},
        {stimulus: tracks[88], image: img[88], citation: info[88].citation, blurb: info[88].blurb, data: {test_part: 'response', key: dancing, correct_response: 'Dancing'}, correct: 'Dancing'},
        {stimulus: tracks[89], image: img[89], citation: info[89].citation, blurb: info[89].blurb, data: {test_part: 'response', key: dancing, correct_response: 'Dancing'}, correct: 'Dancing'},
        {stimulus: tracks[90], image: img[90], citation: info[90].citation, blurb: info[90].blurb, data: {test_part: 'response', key: dancing, correct_response: 'Dancing'}, correct: 'Dancing'},
        {stimulus: tracks[91], image: img[91], citation: info[91].citation, blurb: info[91].blurb, data: {test_part: 'response', key: love, correct_response: 'Expressing love to another person'}, correct: 'Expressing love to another person'},
        {stimulus: tracks[92], image: img[92], citation: info[92].citation, blurb: info[92].blurb, data: {test_part: 'response', key: lullaby, correct_response: 'Soothing a baby'}, correct: 'Soothing a baby'},
        {stimulus: tracks[93], image: img[93], citation: info[93].citation, blurb: info[93].blurb, data: {test_part: 'response', key: love, correct_response: 'Expressing love to another person'}, correct: 'Expressing love to another person'},
        {stimulus: tracks[94], image: img[94], citation: info[94].citation, blurb: info[94].blurb, data: {test_part: 'response', key: lullaby, correct_response: 'Soothing a baby'}, correct: 'Soothing a baby'},
        {stimulus: tracks[95], image: img[95], citation: info[95].citation, blurb: info[95].blurb, data: {test_part: 'response', key: healing, correct_response: 'Healing the sick'}, correct: 'Healing the sick'},
        {stimulus: tracks[96], image: img[96], citation: info[96].citation, blurb: info[96].blurb, data: {test_part: 'response', key: love, correct_response: 'Expressing love to another person'}, correct: 'Expressing love to another person'},
        {stimulus: tracks[97], image: img[97], citation: info[97].citation, blurb: info[97].blurb, data: {test_part: 'response', key: dancing, correct_response: 'Dancing'}, correct: 'Dancing'},
        {stimulus: tracks[98], image: img[98], citation: info[98].citation, blurb: info[98].blurb, data: {test_part: 'response', key: lullaby, correct_response: 'Soothing a baby'}, correct: 'Soothing a baby'},
        {stimulus: tracks[99], image: img[99], citation: info[99].citation, blurb: info[99].blurb, data: {test_part: 'response', key: lullaby, correct_response: 'Soothing a baby'}, correct: 'Soothing a baby'},
        {stimulus: tracks[100], image: img[100], citation: info[100].citation, blurb: info[100].blurb, data: {test_part: 'response', key: lullaby, correct_response: 'Soothing a baby'}, correct: 'Soothing a baby'},
        {stimulus: tracks[101], image: img[101], citation: info[101].citation, blurb: info[101].blurb, data: {test_part: 'response', key: healing, correct_response: 'Healing the sick'}, correct: 'Healing the sick'},
        {stimulus: tracks[102], image: img[102], citation: info[102].citation, blurb: info[102].blurb, data: {test_part: 'response', key: dancing, correct_response: 'Dancing'}, correct: 'Dancing'},
        {stimulus: tracks[103], image: img[103], citation: info[103].citation, blurb: info[103].blurb, data: {test_part: 'response', key: love, correct_response: 'Expressing love to another person'}, correct: 'Expressing love to another person'},
        {stimulus: tracks[104], image: img[104], citation: info[104].citation, blurb: info[104].blurb, data: {test_part: 'response', key: love, correct_response: 'Expressing love to another person'}, correct: 'Expressing love to another person'},
        {stimulus: tracks[105], image: img[105], citation: info[105].citation, blurb: info[105].blurb, data: {test_part: 'response', key: dancing, correct_response: 'Dancing'}, correct: 'Dancing'},
        {stimulus: tracks[106], image: img[106], citation: info[106].citation, blurb: info[106].blurb, data: {test_part: 'response', key: healing, correct_response: 'Healing the sick'}, correct: 'Healing the sick'},
        {stimulus: tracks[107], image: img[107], citation: info[107].citation, blurb: info[107].blurb, data: {test_part: 'response', key: healing, correct_response: 'Healing the sick'}, correct: 'Healing the sick'},
        {stimulus: tracks[108], image: img[108], citation: info[108].citation, blurb: info[108].blurb, data: {test_part: 'response', key: healing, correct_response: 'Healing the sick'}, correct: 'Healing the sick'},
        {stimulus: tracks[109], image: img[109], citation: info[109].citation, blurb: info[109].blurb, data: {test_part: 'response', key: dancing, correct_response: 'Dancing'}, correct: 'Dancing'},
        {stimulus: tracks[110], image: img[110], citation: info[110].citation, blurb: info[110].blurb, data: {test_part: 'response', key: lullaby, correct_response: 'Soothing a baby'}, correct: 'Soothing a baby'},
        {stimulus: tracks[111], image: img[111], citation: info[111].citation, blurb: info[111].blurb, data: {test_part: 'response', key: healing, correct_response: 'Healing the sick'}, correct: 'Healing the sick'},
        {stimulus: tracks[112], image: img[112], citation: info[112].citation, blurb: info[112].blurb, data: {test_part: 'response', key: healing, correct_response: 'Healing the sick'}, correct: 'Healing the sick'},
        {stimulus: tracks[113], image: img[113], citation: info[113].citation, blurb: info[113].blurb, data: {test_part: 'response', key: lullaby, correct_response: 'Soothing a baby'}, correct: 'Soothing a baby'},
        {stimulus: tracks[114], image: img[114], citation: info[114].citation, blurb: info[114].blurb, data: {test_part: 'response', key: dancing, correct_response: 'Dancing'}, correct: 'Dancing'},
        {stimulus: tracks[115], image: img[115], citation: info[115].citation, blurb: info[115].blurb, data: {test_part: 'response', key: healing, correct_response: 'Healing the sick'}, correct: 'Healing the sick'},
        {stimulus: tracks[116], image: img[116], citation: info[116].citation, blurb: info[116].blurb, data: {test_part: 'response', key: lullaby, correct_response: 'Soothing a baby'}, correct: 'Soothing a baby'},
        {stimulus: tracks[117], image: img[117], citation: info[117].citation, blurb: info[117].blurb, data: {test_part: 'response', key: love, correct_response: 'Expressing love to another person'}, correct: 'Expressing love to another person'},
      ];

var song_list = jsPsych.randomization.sampleWithoutReplacement(song_data, 8);

/* data collector */
    let count;
    let reactionMean;

var welcome2 = {
  type: 'html-button-response',
  stimulus: '<p align="left">This quiz is part of research conducted by scientists at Harvard University. We are studying how people make sense of the world, including the things they see and hear, the people they interact with, and the abstract worlds of music, arts, and other areas of cognition.</p><p align="left">This research has no known risks or anticipated direct benefits. Your participation in this research is completely voluntary. You can end your participation at any time.</p><p align="left">Your participation is completely anonymous. The results and data from this study will be shared with the public. After the quiz, we will explain several ways to be informed. You can also find this information on the main page of this website. At the end of the quiz, there will be the option to share your results on social media.</p><p align="left">If you have questions or problems, you can contact us at musiclab+q@g.harvard.edu. By proceeding, you agree to participate in this study.</p><p align="left">Thank you for your interest.<br>The Music Lab at Harvard University<p>',
  prompt1: ' ',
  prompt2: ' ',
  choices: ['<div>Next</div>']
};

var ready2 = {
  type: 'html-button-response',
  stimulus: '<p align="left">In this study, you will listen to excerpts from songs and be asked to select what you think the song is used for:</p><p align="center" ><b>'+buttons[0]+'<br><br>'+buttons[1]+'<br><br>'+buttons[2]+'<br><br>'+buttons[3]+'</b><br><br>Hit the button below when you are ready to begin!',
  prompt1: ' ',
  prompt2: ' ',
  choices: ['<div>Begin!</div>']
};

var songPlay2
var correctResp2

var songTest2 = {
  timeline: [
    {
      type: 'audio-button-response-vert',
      prompt1: '<p align="center">Please listen to the song excerpt.</p><p align="center">What do you think this song is used for?</p>',
      prompt2: ' ',
      choices: buttons,
      button_html: '<button class="jspsych-btn" ><p style="margin-top:40px; margin-bottom:40px"><b>%choice%</b></p></button>',
      stimulus: jsPsych.timelineVariable('stimulus'),
      response_ends_trial: true,
      data: jsPsych.timelineVariable('data'),
      on_finish: function(data) {
        data.correct = data.response == data.correct_response;
          count = jsPsych.data.get().filter({correct: true}).count();
          reaction2 = jsPsych.data.get().select('rt');
          songPlay2 = data.stimulus;
          correctResp2 = data.correct_response;
          }
    },
    {
      type: 'html-button-response-vert',
      stimulus: function(){
        var correct = jsPsych.data.get().last(1).values()[0].correct;
        var reaction2 = jsPsych.data.get().last(1).values()[0].rt;
        if(correct == true)
          {return '<p><font color="#00cc00"><b>Correct!</b></font><br><br><b>'+correctResp2+'</b> is the correct use of the song. You responded in <b>'+reaction2+' msecs</b>!</p>'}
        else if(correct == false)
          {return '<p><font color="red"><b>Incorrect.</b></font><br><br><b>'+correctResp2+'</b> is the correct use of the song. You responded in <b>'+reaction2+' msecs</b>.</p>'}
      },
      prompt1: ' ',
      prompt2: ' ',
      choices: ['<div>continue</div>'],
      on_finish: function(data){
        reactionMean = jsPsych.data.get().filter({trial_type: 'audio-button-response-vert'}).select('rt').mean();
        
      }
    },
    {
      type: 'html-button-response',
      stimulus: function(){return '<p align="center">On a scale from 1-4, how much did you like this song? 1 being "hated it" and 4 being "loved it.""<br><br><b>Hear the song again:<br></b> <audio controls><source src='+songPlay2+'></audio></p>'},
      choices: ['<div>1</div>', '<div>2</div>', '<div>3</div>', '<div>4</div>'],
      prompt1: 'Hate',
      prompt2: 'Love'
    },
    {
      type: 'image-button-response',
      stimulus: jsPsych.timelineVariable('image'),
      blurb: jsPsych.timelineVariable('blurb'),
      citation: jsPsych.timelineVariable('citation'),
      choices: ['<div>Click to continue!</div>'],
      prompt1: ' ',
      response_ends_trial: true
    }
  ],
  timeline_variables: song_list,
  sample: {
    size: 8,
    type: 'without-replacement'
  },
  data: keyData
};
let reaction2;


var social2 = {
  type:'display-prediction',
  prediction1:[''],
  prediction2:[' '],
  buttonText:'Submit',
  quizURL:'https://www.themusiclab.org', //this will be the quiz URL for sharing
  subjectLine: 'Guessing what songs are used for.',
  teaserPart1: function() {return '<div align="center"><b>About this research:</b></div><div align="left">&emsp;In previous research, we’ve found that adult listeners can accurately guess what a song is meant for, even if it is from an unfamiliar culture. In this quiz, we wanted to see how quickly people can guess meanings by listening to songs, as well as continue to test how accurate people are with each of the different songs.</div><br><br><div align="center"><b>Your results:</b><br>You got <b>'+count+'</b> out of 8 correct! Your average speed of guessing was '+reactionMean+' msecs</b>. '},
  teaserPart2: " ",
  teaserPart3: " ",
  teaserShare: '<b>Click on a social media button to share your results!</b>',
  socialPost1: function() {return 'When guessing what songs from around the world are used for, I got '+count+' correct! My average speed of guessing was '+reactionMean+'.'},
  socialSharing: true,
  encourageDemographics: ' ',
  fbButtonImg: `${baseUrl}/quizzes/fc/img/facebook.png`,
  twitterButtonImg: `${baseUrl}/quizzes/fc/img/twitter.png`,
  mailButtonImg: `${baseUrl}/quizzes/fc/img/mail.png`,
  footer: ''
};

var self = this;

var saveDataOnFinish= function(data){
  const toSend = data;
  return axiosFC
        .post('/stimulusResponse', {
        user_id: self.props.user.profile.id,
        data_string: toSend,
        })    
  
};


new Promise((resolve, reject) => {
    timeline.push(welcome2, ready2, songTest2, social2)
    resolve();
})
     .then(() => {
        _this.hideLoading();
        document.getElementById("jsPsychTarget").focus()
        document.getElementById("jsPsychTarget").style.outline='none'
      })
      .then(() => {

      jsPsych.init({
          timeline: timeline,
         display_element: this.refs.jsPsychTarget,
         preload_audio: tracks,
          use_webaudio: false,
          on_finish: function() {
            jsPsych.data.displayData();
          },
          default_iti: 250
      });
      })

}
}
      

  render() {
    const loading = this.state.loading;
    if (!this.props.children) {
      return (
        <div>
          <div id="jsPsychContainer">
            {/* this is important for having an event to bind to that signifies when the dom is totally finished loading and thus you can actually get ths size of various elements. i would set margins entirely with css, but things don't end up firing at the right time, and they use null heights, etc. in this case, i'm using it to center the jsPsych div between the header and footer if there's excess whitespace. */}
            <ReactResizeDetector
              handleWidth
              handleHeight
              onResize={this.onResize}
            />

            <link
              rel="stylesheet"
              type="text/css"
              href={`${baseUrl}/css/jspsych.css`}
            />

            <div ref="preamble" id="preamble">
            <div style={{ display: loading ? 'none' : '' }}>
                <p className={s.title}>IDS</p>
                <hr className={s.divider} />
              </div>
            </div>

            <div ref="jsPsychTarget" id="jsPsychTarget" />
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default IDS;
/* eslint-disable max-len */
