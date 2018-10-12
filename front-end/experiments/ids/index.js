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


//save data, reaction time problem, styles in general, mobile data
//what;s up with the versions!



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
  choices: ['Next'],
  on_finish: function(data){
      saveDataOnFinish(data);      }
};

var prequiz = {
  type: 'html-button-response',
  stimulus: 'Before we begin, we have a few questions about you and your musical experiences if you would like to share.',
  prompt1: ' ',
  prompt2: ' ',
  choices: ['Do experiences survey', 'Skip to quiz'],
  on_finish: function(data){
      saveDataOnFinish(data);      }
}


var optionsL1 = ['Mom/dad made me', 'My friends were starting lessons so I did too', 'School requirement', 'I really wanted to'];

var musicxp1 = {
  timeline: [
  {
    type: 'html-button-response-vert',
    stimulus: 'How many hours per week do you currently practice a musical instrument? (voice counts too)',
    prompt1: ' ',
    prompt2: ' ',
    choices: ['I don\'t currently play a musical instrument or sing', '<1 hour per week', '2&ndash;3 hours per week', '4&ndash;7 hours per week', '8 or more hours per week'],
    on_finish: function(data){
      saveDataOnFinish(data);      }
  },
  {
    type: 'html-button-response-vert',
    stimulus: 'Think back as far as you can remember. When you were little, how often did your parent sing to you?',
    prompt1: ' ',
    prompt2: ' ',
    choices: ['Once every 3 days or less', 'Once every day or two', '2&ndash;3 times a day', '4&ndash;7 times a day', '8 or more times a day'],
    on_finish: function(data){
      saveDataOnFinish(data);      }
  },
  {
    type: 'html-button-response-vert',
    stimulus: 'Think back as far as you can remember. When you were little, how often did your parent play music recordings for you?',
    prompt1: ' ',
    prompt2: ' ',
    choices: ['Once every 3 days or less', 'Once every day or two', '2&ndash;3 times a day', '4&ndash;7 times a day', '8 or more times a day'],
    on_finish: function(data){
      saveDataOnFinish(data);      }
  },
  {
    type: 'html-button-response-vert',
    stimulus: 'Do you have \"perfect pitch\"? (this is sometimes referred to as \"absolute pitch\")',
    prompt1: ' ',
    prompt2: ' ',
    choices: ['Yes', 'No', 'I don\'t know'],
    on_finish: function(data){
      saveDataOnFinish(data);      }
  },
  {
    type: 'html-button-response-vert',
    stimulus: 'Have you ever taken instrumental/vocal music lessons?',
    prompt1: ' ',
    prompt2: ' ',
    choices: ['Yes', 'No'],
    on_finish: function(data){
      saveDataOnFinish(data);      }
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
    choices: ['1 not much', '2 just okay', '3 liked it', '4 loved it'],
    on_finish: function(data){
      saveDataOnFinish(data);      }
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
      choices: ['They were a lot better than me', 'They were a little better than me', 'I was a little better than them', 'I was a lot better than them'],

      on_finish: function(data){
      saveDataOnFinish(data);      }
    },
    {
      type: 'html-button-response-vert',
      stimulus: 'On an average day, how much time do you spend using the internet (on a computer, smartphone, or other device)?',
      prompt1: ' ',
      prompt2: ' ',
      choices: ['No time at all', '1&ndash;5 minutes', '6&ndash;10 minutes', '11&ndash;15 minutes', '16&ndash;30 minutes', '31&ndash;60 minutes', '1&ndash;2 hours', '2&ndash;4 hours', 'More than 4 hours'],
      on_finish: function(data){
      saveDataOnFinish(data);      }
    },
    {
      type: 'html-button-response-vert',
      stimulus: 'On an average day, when using the internet, how much time do you spend listening to music and/or watching videos that include music?',
      prompt1: ' ',
      prompt2: ' ',
      choices: ['No time at all', '1&ndash;5 minutes', '6&ndash;10 minutes', '11&ndash;15 minutes', '16&ndash;30 minutes', '31&ndash;60 minutes', '1&ndash;2 hours', '2&ndash;4 hours', 'More than 4 hours'],
      on_finish: function(data){
      saveDataOnFinish(data);      }
    },
    {
      type: 'html-button-response-vert',
      stimulus: 'Think of your skill at performing music (using a musical instrument or using your singing voice). How would you rate your own skill?',
      prompt1: ' ',
      prompt2: ' ',
      choices: ['I have no skill at all', 'I\'m a novice', 'I have some skill', 'I have a lot of skill', 'I\'m an expert'],
      on_finish: function(data){
      saveDataOnFinish(data);      }
    },
    {
      type: 'html-button-response-vert',
      stimulus: 'How familiar are you with traditional music from around the world, including music from remote, indigenous peoples?',
      prompt1: ' ',
      prompt2: ' ',
      choices: ['I\'ve never heard their music', 'I\'m a little familiar with their music', 'I\'m somewhat familiar with their music', 'I\'m extremely familiar with their music'],
      on_finish: function(data){
      saveDataOnFinish(data);      }
    },
    {
      type: 'survey-text',
      questions: [{prompt: 'Anything you want to tell us about your musical experience?', rows: 10, columns: 80}],
      on_finish: function(data){
      saveDataOnFinish(data);      }
    },
    {
      type: 'survey-text',
      questions: [{prompt: 'Do you want to participate in a follow-up study in the future? If so, please provide your email in the field below so that we can let you know when the next study is happening!'}],
      on_finish: function(data){
      saveDataOnFinish(data);      }
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
      choices: ['American Indian/Alaska Native', 'Asian', 'Native Hawaiian or other Pacific Islander', 'White', 'More than One Race', 'Prefer not to say'],
      on_finish: function(data){
      saveDataOnFinish(data);      }
    },
    {
      type: 'html-button-response-vert',
      stimulus: 'Are you <b>Hispanic or Latino?</b>',
      prompt1: ' ',
      prompt2: ' ',
      choices: ['Yes', 'No', 'Prefer not to say'],
      on_finish: function(data){
      saveDataOnFinish(data);      }
    },
    {
      type: 'html-button-response-vert',
      stimulus: 'What is your <b>sex</b>',
      prompt1: ' ',
      prompt2: ' ',
      choices: ['Male', 'Female', 'Other/Prefer not to say'],
      on_finish: function(data){
      saveDataOnFinish(data);      }
    }
  ]
};

let reactionT2

var quiztime = {
  type: 'html-button-response',
  stimulus: 'Thank you for filling out the survey!',
  prompt1: ' ',
  prompt2: ' ',
  choices: ['Click here to continue to the quiz!'],
  on_finish: function(data){
      saveDataOnFinish(data);      }
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
  stimulus: '<p align="left">In this study, we\'ll play you recordings of people from all over the world. They will either be <b>singing</b> or <b>speaking</b>. We\'ll ask you to tell us <b>who you think is listening</b>: a baby or an adult. <p> For example, if you hear someone singing a lullaby, you might answer that you think a <b>baby</b> is listening. <p>Try to answer as fast as you can!</p><p align="center">Press any key to continue.</p>',
  on_finish: function(data){
      saveDataOnFinish(data);      }
};
/* training */
/* Baby */
var trainInfo1B = {
  type: 'html-keyboard-response',
  stimulus: '<p align="center">First, let\'s practice! The first excerpt you will hear is a lullaby sung to a baby. So you should choose the <b>BABY</b> character for your response. Try to answer as fast as you can!</p><p align="center">Press any key to continue.</p>',
  on_finish: function(data){
      saveDataOnFinish(data);      }


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
            saveDataOnFinish(data)
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
          {return `<p style="font-size:24px"><font color="#00cc00">Correct!</font></p><p style="font-size:18px">You responded in <b>`+reactionT1+` seconds</b>.<br>Press any key to continue!</p><table align="center" width=80%><tr><td><img src="`+imgR[0]+`" width=90%></td><td>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</td><td><img src=${baseUrl}/quizzes/fc/img/white.jpg width=90%></td></tr></table>`;}
        else if(correct == true && key== "74")
          {return `<p style="font-size:24px"><font color="#00cc00">Correct!</font></p><p style="font-size:18px">You responded in <b>`+reactionT1+` seconds</b>.<br>Press any key to continue!</p><table align="center" width=80%><tr><td><img src=${baseUrl}/quizzes/fc/img/white.jpg width=90%></td><td>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</td><td><img src="`+imgR[1]+`" width=90%></td></tr></table>`;}
        else if(correct == false && key=="70")
          {return `<p style="font-size:24px"><font color="red">Incorrect.</font></p><p style="font-size:18px">You responded in <b>`+reactionT1+` seconds</b>.<br>Press any key to try again!</p><table align="center" width=80%><tr><td><img src=${baseUrl}/quizzes/fc/img/incorrect.jpg width=90%></td><td>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</td><td><img src=${baseUrl}/quizzes/fc/img/white.jpg width=90%></td></tr></table>`;}
        else if(correct == false && key=="74")
          {return `<p style="font-size:24px"><font color="red">Incorrect.</font></p><p style="font-size:18px">You responded in <b>`+reactionT1+` seconds</b>.<br>Press any key to try again!</p><table align="center" width=80%><tr><td><img src=${baseUrl}/quizzes/fc/img/white.jpg width=90%></td><td>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</td><td><img src="${baseUrl}/quizzes/fc/img/incorrect.jpg width=90%></td></tr></table>`;}
      },
      on_finish: function(data){
      saveDataOnFinish(data);      }
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
  stimulus: '<p align="center">Let\'s practice a second time. This next excerpt will be directed toward an adult, so you should choose the <b>ADULT</b> character. Try to answer as quickly as possible!</p><p align="center">Press any key to continue.</p>',
  on_finish: function(data){
      saveDataOnFinish(data);      }
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
            saveDataOnFinish(data)
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
          {return `<p style="font-size:24px"><font color="#00cc00">Correct!</font></p><p style="font-size:18px">You responded in <b>`+reactionT1+` seconds</b>.<br>Press any key to continue!</p><table align="center" width=80%><tr><td><img src="`+imgR[0]+`" width=90%></td><td>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</td><td><img src=${baseUrl}/quizzes/fc/img/white.jpg width=90%></td></tr></table>`;}
        else if(correct == true && key== "74")
          {return `<p style="font-size:24px"><font color="#00cc00">Correct!</font></p><p style="font-size:18px">You responded in <b>`+reactionT1+` seconds</b>.<br>Press any key to continue!</p><table align="center" width=80%><tr><td><img src=${baseUrl}/quizzes/fc/img/white.jpg width=90%></td><td>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</td><td><img src="`+imgR[1]+`" width=90%></td></tr></table>`;}
        else if(correct == false && key=="70")
          {return `<p style="font-size:24px"><font color="red">Incorrect.</font></p><p style="font-size:18px">You responded in <b>`+reactionT1+` seconds</b>.<br>Press any key to try again!</p><table align="center" width=80%><tr><td><img src=${baseUrl}/quizzes/fc/img/incorrect.jpg width=90%></td><td>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</td><td><img src=${baseUrl}/quizzes/fc/img/white.jpg width=90%></td></tr></table>`;}
        else if(correct == false && key=="74")
          {return `<p style="font-size:24px"><font color="red">Incorrect.</font></p><p style="font-size:18px">You responded in <b>`+reactionT1+` seconds</b>.<br>Press any key to try again!</p><table align="center" width=80%><tr><td><img src=${baseUrl}/quizzes/fc/img/white.jpg width=90%></td><td>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</td><td><img src=${baseUrl}/quizzes/fc/img/incorrect.jpg width=90%></td></tr></table>`;}
      },
      on_finish: function(data){
      saveDataOnFinish(data);      }
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
  stimulus: '<p align="left">Great work on the practice! Now you\'re ready to begin.</p><p align="center">Press any key to continue.</p>',
  on_finish: function(data){
      saveDataOnFinish(data);      }
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
            saveDataOnFinish(data)
            data.correct = data.key_press == jsPsych.pluginAPI.convertKeyCharacterToKeyCode(data.key);
            count = jsPsych.data.get().filter({correct: true}).count();
            reaction1 = (data.rt)/1000;
            console.log(count)
           
          },
    },
    {
      type: 'html-keyboard-response',
      stimulus: function(){
        var correct = jsPsych.data.get().last(1).values()[0].correct;
        var key = jsPsych.data.get().last(1).values()[0].key_press;
        if(correct == true && key== "70")
          {return `<p style="font-size:24px"><font color="#00cc00">Correct!</font></p><p style="font-size:18px">You responded in <b>`+reaction1+` seconds</b>.<br>Press any key to continue.</p><table align="center" width=80%><tr><td><img src="`+imgR[0]+`" width=90%></td><td>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</td><td><img src=${baseUrl}/quizzes/fc/img/white.jpg width=90%></td></tr></table>`;}
        else if(correct == true && key== "74")
          {return `<p style="font-size:24px"><font color="#00cc00">Correct!</font></p><p style="font-size:18px">You responded in <b>`+reaction1+` seconds</b>.<br>Press any key to continue.</p><table align="center" width=80%><tr><td><img src=${baseUrl}/quizzes/fc/img/white.jpg width=90%></td><td>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</td><td><img src="`+imgR[1]+`" width=90%></td></tr></table>`;}
        else if(correct == false && key=="70")
          {return `<p style="font-size:24px"><font color="red">Incorrect.</font></p><p style="font-size:18px">You responded in <b>`+reaction1+` seconds</b>.<br>Press any key to continue.</p><table align="center" width=80%><tr><td><img src=${baseUrl}/quizzes/fc/img/incorrect.jpg width=90%></td><td>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</td><td><img src=${baseUrl}/quizzes/fc/img/white.jpg width=90%></td></tr></table>`;}
        else if(correct == false && key=="74")
          {return `<p style="font-size:24px"><font color="red">Incorrect.</font></p><p style="font-size:18px">You responded in <b>`+reaction1+` seconds</b>.<br>Press any key to continue.</p><table align="center" width=80%><tr><td><img src=${baseUrl}/quizzes/fc/img/white.jpg width=90%></td><td>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</td><td><img src=${baseUrl}/quizzes/fc/img/incorrect.jpg width=90%></td></tr></table>`;}
      },
      on_finish: function(data){
        saveDataOnFinish(data)
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
let reaction1;
let trialCount;
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





var saveDataOnFinish= function(data){
  const toSend = data;
  return axiosIDS
        .post('/stimulusResponse', {
        user_id: self.props.user.profile.id,
        data_string: toSend,
        })    
  
};



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




new Promise((resolve, reject) => {
    


timeline.push(welcome1, prequiz, takeMusicxp, intro1, trainInfo1B, reTrain1B, trainInfo1A, reTrain1A, ready1, songTest1, /*continueLogic1, */social1);



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
          preload_audio: preload,
          use_webaudio: false,
         display_element: this.refs.jsPsychTarget,
          on_finish: function() {
            jsPsych.data.displayData();
          },
          default_iti: 250
      });
      })










//closing for isMobile

} else {


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
    let imgData2;
var img = ['baby', 'adult'];
var labelR = jsPsych.randomization.shuffle(img);
  var imgR = [`${baseUrl}/quizzes/fc/img/${labelR[0]}.jpg`, 
`${baseUrl}/quizzes/fc/img/${labelR[1]}.jpg`];



if (labelR[0] == img[0])
  imgData2 =
    [{correct_response: 'baby', button: 0},
    {correct_response: 'adult', button: 1}
];
if (labelR[0] !== img[0])
  imgData2 =
    [{correct_response: 'baby', button: 1},
    {correct_response: 'adult', button: 0}
];
/* image order data */
jsPsych.data.addProperties({
  image_order: imgData2
});



var tracks = [
    {stimulus: 'ACO01A', data2: imgData2[0]},
    {stimulus: 'HAD08A', data2: imgData2[0]},
    {stimulus: 'NYA04A', data2: imgData2[0]},
    {stimulus: 'TOR06A', data2: imgData2[0]},
    {stimulus: 'WEL07D', data2: imgData2[1]},
    {stimulus: 'ACO01B', data2: imgData2[0]},
    {stimulus: 'HAD08B', data2: imgData2[0]},
    {stimulus: 'NYA04B', data2: imgData2[0]},
    {stimulus: 'TOR06B', data2: imgData2[0]},
    {stimulus: 'WEL08A', data2: imgData2[0]},
    {stimulus: 'ACO01C', data2: imgData2[1]},
    {stimulus: 'HAD08C', data2: imgData2[1]},
    {stimulus: 'NYA04C', data2: imgData2[1]},
    {stimulus: 'TOR06C', data2: imgData2[1]},
    {stimulus: 'WEL08B', data2: imgData2[0]},
    {stimulus: 'ACO01D', data2: imgData2[1]},
    {stimulus: 'HAD08D', data2: imgData2[1]},
    {stimulus: 'NYA04D', data2: imgData2[1]},
    {stimulus: 'TOR06D', data2: imgData2[1]},
    {stimulus: 'WEL08C', data2: imgData2[1]},
    {stimulus: 'ACO02A', data2: imgData2[0]},
    {stimulus: 'HAD09A', data2: imgData2[0]},
    {stimulus: 'NYA05A', data2: imgData2[0]},
    {stimulus: 'TOR07A', data2: imgData2[0]},
    {stimulus: 'WEL08D', data2: imgData2[1]},
    {stimulus: 'ACO02B', data2: imgData2[0]},
    {stimulus: 'HAD09B', data2: imgData2[0]},
    {stimulus: 'NYA05B', data2: imgData2[0]},
    {stimulus: 'TOR07B', data2: imgData2[0]},
    {stimulus: 'WEL09A', data2: imgData2[0]},
    {stimulus: 'ACO02C', data2: imgData2[1]},
    {stimulus: 'HAD09C', data2: imgData2[1]},
    {stimulus: 'NYA05C', data2: imgData2[1]},
    {stimulus: 'TOR07C', data2: imgData2[1]},
    {stimulus: 'WEL09B', data2: imgData2[0]},
    {stimulus: 'ACO02D', data2: imgData2[1]},
    {stimulus: 'HAD09D', data2: imgData2[1]},
    {stimulus: 'NYA05D', data2: imgData2[1]},
    {stimulus: 'TOR07D', data2: imgData2[1]},
    {stimulus: 'WEL09C', data2: imgData2[1]},
    {stimulus: 'ACO03A', data2: imgData2[0]},
    {stimulus: 'HAD10B', data2: imgData2[0]},
    {stimulus: 'NYA06A', data2: imgData2[0]},
    {stimulus: 'TOR08A', data2: imgData2[0]},
    {stimulus: 'WEL09D', data2: imgData2[1]},
    {stimulus: 'ACO03B', data2: imgData2[0]},
    {stimulus: 'HAD10D', data2: imgData2[1]},
    {stimulus: 'NYA06B', data2: imgData2[0]},
    {stimulus: 'TOR08B', data2: imgData2[0]},
    {stimulus: 'WEL10A', data2: imgData2[0]},
    {stimulus: 'ACO03C', data2: imgData2[1]},
    {stimulus: 'JEN01A', data2: imgData2[0]},
    {stimulus: 'NYA06C', data2: imgData2[1]},
    {stimulus: 'TOR08C', data2: imgData2[1]},
    {stimulus: 'WEL10B', data2: imgData2[0]},
    {stimulus: 'ACO03D', data2: imgData2[1]},
    {stimulus: 'JEN01B', data2: imgData2[0]},
    {stimulus: 'NYA06D', data2: imgData2[1]},
    {stimulus: 'TOR08D', data2: imgData2[1]},
    //{stimulus: 'WEL10C', data2: imgData2[1]},
    {stimulus: 'ACO04A', data2: imgData2[0]},
    {stimulus: 'JEN01C', data2: imgData2[1]},
    {stimulus: 'NYA07A', data2: imgData2[0]},
    {stimulus: 'TOR09A', data2: imgData2[0]},
    {stimulus: 'WEL10D', data2: imgData2[1]},
    {stimulus: 'ACO04B', data2: imgData2[0]},
    {stimulus: 'JEN01D', data2: imgData2[1]},
    {stimulus: 'NYA07B', data2: imgData2[0]},
    {stimulus: 'TOR09B', data2: imgData2[0]},
    {stimulus: 'WEL11A', data2: imgData2[0]},
    {stimulus: 'ACO04C', data2: imgData2[1]},
    {stimulus: 'JEN02A', data2: imgData2[0]},
    {stimulus: 'NYA07C', data2: imgData2[1]},
    {stimulus: 'TOR09C', data2: imgData2[1]},
    {stimulus: 'WEL11B', data2: imgData2[0]},
    {stimulus: 'ACO04D', data2: imgData2[1]},
    {stimulus: 'JEN02B', data2: imgData2[0]},
    {stimulus: 'NYA07D', data2: imgData2[1]},
    {stimulus: 'TOR09D', data2: imgData2[1]},
    {stimulus: 'WEL11C', data2: imgData2[1]},
    {stimulus: 'ACO05A', data2: imgData2[0]},
    {stimulus: 'JEN02C', data2: imgData2[1]},
    {stimulus: 'NYA08A', data2: imgData2[0]},
    {stimulus: 'TOR10A', data2: imgData2[0]},
    {stimulus: 'WEL11D', data2: imgData2[1]},
    {stimulus: 'ACO05B', data2: imgData2[0]},
    {stimulus: 'JEN02D', data2: imgData2[1]},
    {stimulus: 'NYA08B', data2: imgData2[0]},
    {stimulus: 'TOR10B', data2: imgData2[0]},
    {stimulus: 'WEL12A', data2: imgData2[0]},
    {stimulus: 'ACO05C', data2: imgData2[1]},
    {stimulus: 'JEN03A', data2: imgData2[0]},
    {stimulus: 'NYA08C', data2: imgData2[1]},
    {stimulus: 'TOR10C', data2: imgData2[1]},
    {stimulus: 'WEL12B', data2: imgData2[0]},
    {stimulus: 'ACO05D', data2: imgData2[1]},
    {stimulus: 'JEN03B', data2: imgData2[0]},
    {stimulus: 'NYA08D', data2: imgData2[1]},
    {stimulus: 'TOR10D', data2: imgData2[1]},
    {stimulus: 'WEL12C', data2: imgData2[1]},
    {stimulus: 'ACO06A', data2: imgData2[0]},
    {stimulus: 'JEN03C', data2: imgData2[1]},
    {stimulus: 'NYA09A', data2: imgData2[0]},
    {stimulus: 'TOR11A', data2: imgData2[0]},
    {stimulus: 'WEL12D', data2: imgData2[1]},
    {stimulus: 'ACO06C', data2: imgData2[1]},
    {stimulus: 'JEN03D', data2: imgData2[1]},
    {stimulus: 'NYA09B', data2: imgData2[0]},
    {stimulus: 'TOR11B', data2: imgData2[0]},
    {stimulus: 'WEL13A', data2: imgData2[0]},
    {stimulus: 'ACO06D', data2: imgData2[1]},
    {stimulus: 'JEN04A', data2: imgData2[0]},
    {stimulus: 'NYA09C', data2: imgData2[1]},
    {stimulus: 'TOR11C', data2: imgData2[1]},
    {stimulus: 'WEL13B', data2: imgData2[0]},
    {stimulus: 'ACO07A', data2: imgData2[0]},
    {stimulus: 'JEN04B', data2: imgData2[0]},
    {stimulus: 'NYA09D', data2: imgData2[1]},
    {stimulus: 'TOR11D', data2: imgData2[1]},
    {stimulus: 'WEL13C', data2: imgData2[1]},
    {stimulus: 'ACO07C', data2: imgData2[1]},
    {stimulus: 'JEN04C', data2: imgData2[1]},
    {stimulus: 'NYA10A', data2: imgData2[0]},
    {stimulus: 'TOR12A', data2: imgData2[0]},
    {stimulus: 'WEL13D', data2: imgData2[1]},
    {stimulus: 'ACO07D', data2: imgData2[1]},
    {stimulus: 'JEN04D', data2: imgData2[1]},
    {stimulus: 'NYA10B', data2: imgData2[0]},
    {stimulus: 'TOR12B', data2: imgData2[0]},
    {stimulus: 'WEL14A', data2: imgData2[0]},
    {stimulus: 'ACO08A', data2: imgData2[0]},
    {stimulus: 'JEN05A', data2: imgData2[0]},
    {stimulus: 'NYA10C', data2: imgData2[1]},
    {stimulus: 'TOR12C', data2: imgData2[1]},
    {stimulus: 'WEL14B', data2: imgData2[0]},
    {stimulus: 'ACO08B', data2: imgData2[0]},
    {stimulus: 'JEN05B', data2: imgData2[0]},
    {stimulus: 'NYA10D', data2: imgData2[1]},
    {stimulus: 'TOR12D', data2: imgData2[1]},
    {stimulus: 'WEL14C', data2: imgData2[1]},
    {stimulus: 'ACO08C', data2: imgData2[1]},
    {stimulus: 'JEN05C', data2: imgData2[1]},
    {stimulus: 'NYA11A', data2: imgData2[0]},
    {stimulus: 'TOR13A', data2: imgData2[0]},
    {stimulus: 'WEL14D', data2: imgData2[1]},
    {stimulus: 'ACO08D', data2: imgData2[1]},
    {stimulus: 'JEN05D', data2: imgData2[1]},
    {stimulus: 'NYA11B', data2: imgData2[0]},
    {stimulus: 'TOR13B', data2: imgData2[0]},
    {stimulus: 'WEL15A', data2: imgData2[0]},
    {stimulus: 'ACO09A', data2: imgData2[0]},
    {stimulus: 'JEN06A', data2: imgData2[0]},
    {stimulus: 'NYA11C', data2: imgData2[1]},
    {stimulus: 'TOR13C', data2: imgData2[1]},
    {stimulus: 'WEL15B', data2: imgData2[0]},
    {stimulus: 'ACO09B', data2: imgData2[0]},
    {stimulus: 'JEN06B', data2: imgData2[0]},
    {stimulus: 'NYA11D', data2: imgData2[1]},
    {stimulus: 'TOR13D', data2: imgData2[1]},
    {stimulus: 'WEL15C', data2: imgData2[1]},
    {stimulus: 'ACO09C', data2: imgData2[1]},
    {stimulus: 'JEN06C', data2: imgData2[1]},
    {stimulus: 'NYA12A', data2: imgData2[0]},
    {stimulus: 'TOR14A', data2: imgData2[0]},
    {stimulus: 'WEL15D', data2: imgData2[1]},
    {stimulus: 'ACO09D', data2: imgData2[1]},
    {stimulus: 'JEN06D', data2: imgData2[1]},
    {stimulus: 'NYA12B', data2: imgData2[0]},
    {stimulus: 'TOR14B', data2: imgData2[0]},
    {stimulus: 'WEL16A', data2: imgData2[0]},
    {stimulus: 'ACO10A', data2: imgData2[0]},
    {stimulus: 'JEN07A', data2: imgData2[0]},
    {stimulus: 'NYA12C', data2: imgData2[1]},
    {stimulus: 'TOR14C', data2: imgData2[1]},
    {stimulus: 'WEL16B', data2: imgData2[0]},
    {stimulus: 'ACO10B', data2: imgData2[0]},
    {stimulus: 'JEN07B', data2: imgData2[0]},
    {stimulus: 'NYA12D', data2: imgData2[1]},
    {stimulus: 'TOR14D', data2: imgData2[1]},
    {stimulus: 'WEL16C', data2: imgData2[1]},
    {stimulus: 'ACO10C', data2: imgData2[1]},
    {stimulus: 'JEN07C', data2: imgData2[1]},
    {stimulus: 'NYA13A', data2: imgData2[0]},
    {stimulus: 'TOR15A', data2: imgData2[0]},
    {stimulus: 'WEL16D', data2: imgData2[1]},
    {stimulus: 'ACO10D', data2: imgData2[1]},
    {stimulus: 'JEN07D', data2: imgData2[1]},
    {stimulus: 'NYA13B', data2: imgData2[0]},
    {stimulus: 'TOR15B', data2: imgData2[0]},
    {stimulus: 'WEL17A', data2: imgData2[0]},
    {stimulus: 'ACO11A', data2: imgData2[0]},
    {stimulus: 'JEN08A', data2: imgData2[0]},
    {stimulus: 'NYA13C', data2: imgData2[1]},
    {stimulus: 'TOR15C', data2: imgData2[1]},
    {stimulus: 'WEL17B', data2: imgData2[0]},
    {stimulus: 'ACO11B', data2: imgData2[0]},
    {stimulus: 'JEN08B', data2: imgData2[0]},
    {stimulus: 'NYA13D', data2: imgData2[1]},
    {stimulus: 'TOR15D', data2: imgData2[1]},
    {stimulus: 'WEL17C', data2: imgData2[1]},
    {stimulus: 'ACO11C', data2: imgData2[1]},
    {stimulus: 'JEN08C', data2: imgData2[1]},
    {stimulus: 'NYA14A', data2: imgData2[0]},
    {stimulus: 'TOR16A', data2: imgData2[0]},
    {stimulus: 'WEL17D', data2: imgData2[1]},
    {stimulus: 'ACO11D', data2: imgData2[1]},
    {stimulus: 'JEN08D', data2: imgData2[1]},
    {stimulus: 'NYA14B', data2: imgData2[0]},
    {stimulus: 'TOR16B', data2: imgData2[0]},
    {stimulus: 'WEL18A', data2: imgData2[0]},
    {stimulus: 'ACO12A', data2: imgData2[0]},
    {stimulus: 'JEN09A', data2: imgData2[0]},
    {stimulus: 'NYA14C', data2: imgData2[1]},
    {stimulus: 'TOR16C', data2: imgData2[1]},
    {stimulus: 'WEL18B', data2: imgData2[0]},
    {stimulus: 'ACO12B', data2: imgData2[0]},
    {stimulus: 'JEN09B', data2: imgData2[0]},
    {stimulus: 'NYA14D', data2: imgData2[1]},
    {stimulus: 'TOR16D', data2: imgData2[1]},
    {stimulus: 'WEL18C', data2: imgData2[1]},
    {stimulus: 'ACO12C', data2: imgData2[1]},
    {stimulus: 'JEN09C', data2: imgData2[1]},
    {stimulus: 'PNG01A', data2: imgData2[0]},
    {stimulus: 'TOR17A', data2: imgData2[0]},
    {stimulus: 'WEL18D', data2: imgData2[1]},
    {stimulus: 'ACO12D', data2: imgData2[1]},
    {stimulus: 'JEN09D', data2: imgData2[1]},
    {stimulus: 'PNG01B', data2: imgData2[0]},
    {stimulus: 'TOR17B', data2: imgData2[0]},
    {stimulus: 'WEL19A', data2: imgData2[0]},
    {stimulus: 'ACO13A', data2: imgData2[0]},
    {stimulus: 'JEN10A', data2: imgData2[0]},
    {stimulus: 'PNG01C', data2: imgData2[1]},
    {stimulus: 'TOR17C', data2: imgData2[1]},
    {stimulus: 'WEL19B', data2: imgData2[0]},
    {stimulus: 'ACO13B', data2: imgData2[0]},
    {stimulus: 'JEN10B', data2: imgData2[0]},
    {stimulus: 'PNG01D', data2: imgData2[1]},
    {stimulus: 'TOR17D', data2: imgData2[1]},
    {stimulus: 'WEL19C', data2: imgData2[1]},
    {stimulus: 'ACO13C', data2: imgData2[1]},
    {stimulus: 'JEN10C', data2: imgData2[1]},
    {stimulus: 'PNG02A', data2: imgData2[0]},
    {stimulus: 'TOR18A', data2: imgData2[0]},
    {stimulus: 'WEL19D', data2: imgData2[1]},
    {stimulus: 'ACO13D', data2: imgData2[1]},
    {stimulus: 'JEN10D', data2: imgData2[1]},
    {stimulus: 'PNG02B', data2: imgData2[0]},
    {stimulus: 'TOR18B', data2: imgData2[0]},
    {stimulus: 'WEL20A', data2: imgData2[0]},
    {stimulus: 'ACO14A', data2: imgData2[0]},
    {stimulus: 'JEN11A', data2: imgData2[0]},
    {stimulus: 'PNG03A', data2: imgData2[0]},
    {stimulus: 'TOR18C', data2: imgData2[1]},
    {stimulus: 'WEL20B', data2: imgData2[0]},
    {stimulus: 'ACO14B', data2: imgData2[0]},
    {stimulus: 'JEN11B', data2: imgData2[0]},
    {stimulus: 'PNG03B', data2: imgData2[0]},
    {stimulus: 'TOR18D', data2: imgData2[1]},
    {stimulus: 'WEL20C', data2: imgData2[1]},
    {stimulus: 'ACO14D', data2: imgData2[1]},
    {stimulus: 'JEN11C', data2: imgData2[1]},
    {stimulus: 'PNG03C', data2: imgData2[1]},
    {stimulus: 'TOR19A', data2: imgData2[0]},
    {stimulus: 'WEL20D', data2: imgData2[1]},
    {stimulus: 'BEJ01A', data2: imgData2[0]},
    {stimulus: 'JEN11D', data2: imgData2[1]},
    {stimulus: 'PNG03D', data2: imgData2[1]},
    {stimulus: 'TOR19B', data2: imgData2[0]},
    {stimulus: 'WEL21A', data2: imgData2[0]},
    {stimulus: 'BEJ01B', data2: imgData2[0]},
    {stimulus: 'JEN12A', data2: imgData2[0]},
    {stimulus: 'PNG04A', data2: imgData2[0]},
    {stimulus: 'TOR19C', data2: imgData2[1]},
    {stimulus: 'WEL21B', data2: imgData2[0]},
    {stimulus: 'BEJ01C', data2: imgData2[1]},
    {stimulus: 'JEN12B', data2: imgData2[0]},
    {stimulus: 'PNG04B', data2: imgData2[0]},
    {stimulus: 'TOR19D', data2: imgData2[1]},
    {stimulus: 'WEL21C', data2: imgData2[1]},
    {stimulus: 'BEJ01D', data2: imgData2[1]},
    {stimulus: 'JEN12C', data2: imgData2[1]},
    {stimulus: 'PNG04C', data2: imgData2[1]},
    {stimulus: 'TOR20A', data2: imgData2[0]},
    {stimulus: 'WEL21D', data2: imgData2[1]},
    {stimulus: 'BEJ02A', data2: imgData2[0]},
    {stimulus: 'JEN12D', data2: imgData2[1]},
    {stimulus: 'PNG04D', data2: imgData2[1]},
    {stimulus: 'TOR20B', data2: imgData2[0]},
    {stimulus: 'WEL22A', data2: imgData2[0]},
    {stimulus: 'BEJ02B', data2: imgData2[0]},
    {stimulus: 'JEN13A', data2: imgData2[0]},
    {stimulus: 'PNG05A', data2: imgData2[0]},
    {stimulus: 'TOR20C', data2: imgData2[1]},
    {stimulus: 'WEL22B', data2: imgData2[0]},
    {stimulus: 'BEJ02C', data2: imgData2[1]},
    {stimulus: 'JEN13B', data2: imgData2[0]},
    {stimulus: 'PNG05B', data2: imgData2[0]},
    {stimulus: 'TOR20D', data2: imgData2[1]},
    {stimulus: 'WEL22C', data2: imgData2[1]},
    {stimulus: 'BEJ02D', data2: imgData2[1]},
    {stimulus: 'JEN13C', data2: imgData2[1]},
    {stimulus: 'PNG05C', data2: imgData2[1]},
    {stimulus: 'TOR21A', data2: imgData2[0]},
    {stimulus: 'WEL22D', data2: imgData2[1]},
    {stimulus: 'BEJ03A', data2: imgData2[0]},
    {stimulus: 'JEN13D', data2: imgData2[1]},
    {stimulus: 'PNG05D', data2: imgData2[1]},
    {stimulus: 'TOR21B', data2: imgData2[0]},
    {stimulus: 'WEL23A', data2: imgData2[0]},
    {stimulus: 'BEJ03B', data2: imgData2[0]},
    {stimulus: 'JEN14A', data2: imgData2[0]},
    {stimulus: 'PNG06A', data2: imgData2[0]},
    {stimulus: 'TOR21C', data2: imgData2[1]},
    {stimulus: 'WEL23B', data2: imgData2[0]},
    {stimulus: 'BEJ03C', data2: imgData2[1]},
    {stimulus: 'JEN14B', data2: imgData2[0]},
    {stimulus: 'PNG06B', data2: imgData2[0]},
    {stimulus: 'TOR21D', data2: imgData2[1]},
    {stimulus: 'WEL23C', data2: imgData2[1]},
    {stimulus: 'BEJ03D', data2: imgData2[1]},
    {stimulus: 'JEN14C', data2: imgData2[1]},
    {stimulus: 'PNG06C', data2: imgData2[1]},
    {stimulus: 'TOR22A', data2: imgData2[0]},
    {stimulus: 'WEL23D', data2: imgData2[1]},
    {stimulus: 'BEJ04A', data2: imgData2[0]},
    {stimulus: 'JEN14D', data2: imgData2[1]},
    {stimulus: 'PNG06D', data2: imgData2[1]},
    {stimulus: 'TOR22B', data2: imgData2[0]},
    {stimulus: 'WEL24A', data2: imgData2[0]},
    {stimulus: 'BEJ04B', data2: imgData2[0]},
    {stimulus: 'JEN15A', data2: imgData2[0]},
    {stimulus: 'SPA01A', data2: imgData2[0]},
    {stimulus: 'TOR22C', data2: imgData2[1]},
    {stimulus: 'WEL24B', data2: imgData2[0]},
    {stimulus: 'BEJ04C', data2: imgData2[1]},
    {stimulus: 'JEN15B', data2: imgData2[0]},
    {stimulus: 'SPA01B', data2: imgData2[0]},
    {stimulus: 'TOR22D', data2: imgData2[1]},
    {stimulus: 'WEL24C', data2: imgData2[1]},
    {stimulus: 'BEJ04D', data2: imgData2[1]},
    {stimulus: 'JEN15C', data2: imgData2[1]},
    {stimulus: 'SPA01C', data2: imgData2[1]},
    {stimulus: 'TOR23A', data2: imgData2[0]},
    {stimulus: 'WEL24D', data2: imgData2[1]},
    {stimulus: 'BEJ05A', data2: imgData2[0]},
    {stimulus: 'JEN15D', data2: imgData2[1]},
    {stimulus: 'SPA01D', data2: imgData2[1]},
    {stimulus: 'TOR23B', data2: imgData2[0]},
    {stimulus: 'WEL25A', data2: imgData2[0]},
    {stimulus: 'BEJ05B', data2: imgData2[0]},
    {stimulus: 'JEN16A', data2: imgData2[0]},
    {stimulus: 'SPA02A', data2: imgData2[0]},
    {stimulus: 'TOR23C', data2: imgData2[1]},
    {stimulus: 'WEL25B', data2: imgData2[0]},
    {stimulus: 'BEJ05C', data2: imgData2[1]},
    {stimulus: 'JEN16B', data2: imgData2[0]},
    {stimulus: 'SPA02B', data2: imgData2[0]},
    {stimulus: 'TOR23D', data2: imgData2[1]},
    {stimulus: 'WEL25C', data2: imgData2[1]},
    {stimulus: 'BEJ05D', data2: imgData2[1]},
    {stimulus: 'JEN16C', data2: imgData2[1]},
    {stimulus: 'SPA02C', data2: imgData2[1]},
    {stimulus: 'TOR24A', data2: imgData2[0]},
    {stimulus: 'WEL25D', data2: imgData2[1]},
    {stimulus: 'BEJ06A', data2: imgData2[0]},
    {stimulus: 'JEN16D', data2: imgData2[1]},
    {stimulus: 'SPA02D', data2: imgData2[1]},
    {stimulus: 'TOR24B', data2: imgData2[0]},
    {stimulus: 'WEL26A', data2: imgData2[0]},
    {stimulus: 'BEJ06B', data2: imgData2[0]},
    {stimulus: 'JEN17A', data2: imgData2[0]},
    {stimulus: 'SPA03A', data2: imgData2[0]},
    {stimulus: 'TOR24C', data2: imgData2[1]},
    {stimulus: 'WEL26B', data2: imgData2[0]},
    {stimulus: 'BEJ06C', data2: imgData2[1]},
    {stimulus: 'JEN17B', data2: imgData2[0]},
    {stimulus: 'SPA03B', data2: imgData2[0]},
    {stimulus: 'TOR24D', data2: imgData2[1]},
    {stimulus: 'WEL26C', data2: imgData2[1]},
    {stimulus: 'BEJ06D', data2: imgData2[1]},
    {stimulus: 'JEN17C', data2: imgData2[1]},
    {stimulus: 'SPA03C', data2: imgData2[1]},
    {stimulus: 'TOR25A', data2: imgData2[0]},
    {stimulus: 'WEL26D', data2: imgData2[1]},
    {stimulus: 'BEJ07A', data2: imgData2[0]},
    {stimulus: 'JEN17D', data2: imgData2[1]},
    {stimulus: 'SPA03D', data2: imgData2[1]},
    {stimulus: 'TOR25B', data2: imgData2[0]},
    {stimulus: 'WEL27A', data2: imgData2[0]},
    {stimulus: 'BEJ07B', data2: imgData2[0]},
    {stimulus: 'JEN18A', data2: imgData2[0]},
    {stimulus: 'SPA04A', data2: imgData2[0]},
    {stimulus: 'TOR25C', data2: imgData2[1]},
    {stimulus: 'WEL27B', data2: imgData2[0]},
    {stimulus: 'BEJ07C', data2: imgData2[1]},
    {stimulus: 'JEN18B', data2: imgData2[0]},
    {stimulus: 'SPA04B', data2: imgData2[0]},
    {stimulus: 'TOR25D', data2: imgData2[1]},
    {stimulus: 'WEL27C', data2: imgData2[1]},
    {stimulus: 'BEJ07D', data2: imgData2[1]},
    {stimulus: 'JEN18C', data2: imgData2[1]},
    {stimulus: 'SPA04C', data2: imgData2[1]},
    {stimulus: 'TOR26A', data2: imgData2[0]},
    {stimulus: 'WEL27D', data2: imgData2[1]},
    {stimulus: 'BEJ08A', data2: imgData2[0]},
    {stimulus: 'JEN18D', data2: imgData2[1]},
    {stimulus: 'SPA04D', data2: imgData2[1]},
    {stimulus: 'TOR26B', data2: imgData2[0]},
    {stimulus: 'WEL28A', data2: imgData2[0]},
    {stimulus: 'BEJ08B', data2: imgData2[0]},
    {stimulus: 'JEN19A', data2: imgData2[0]},
    {stimulus: 'SPA05A', data2: imgData2[0]},
    {stimulus: 'TOR26C', data2: imgData2[1]},
    {stimulus: 'WEL28B', data2: imgData2[0]},
    {stimulus: 'BEJ08C', data2: imgData2[1]},
    {stimulus: 'JEN19B', data2: imgData2[0]},
    {stimulus: 'SPA05B', data2: imgData2[0]},
    {stimulus: 'TOR26D', data2: imgData2[1]},
    {stimulus: 'WEL28C', data2: imgData2[1]},
    {stimulus: 'BEJ08D', data2: imgData2[1]},
    {stimulus: 'JEN19C', data2: imgData2[1]},
    {stimulus: 'SPA05C', data2: imgData2[1]},
    {stimulus: 'TOR27A', data2: imgData2[0]},
    {stimulus: 'WEL28D', data2: imgData2[1]},
    {stimulus: 'BEJ09A', data2: imgData2[0]},
    {stimulus: 'JEN19D', data2: imgData2[1]},
    {stimulus: 'SPA05D', data2: imgData2[1]},
    {stimulus: 'TOR27B', data2: imgData2[0]},
    {stimulus: 'WEL29A', data2: imgData2[0]},
    {stimulus: 'BEJ09B', data2: imgData2[0]},
    {stimulus: 'JEN20A', data2: imgData2[0]},
    {stimulus: 'SPA06A', data2: imgData2[0]},
    {stimulus: 'TOR27C', data2: imgData2[1]},
    {stimulus: 'WEL29B', data2: imgData2[0]},
    {stimulus: 'BEJ09C', data2: imgData2[1]},
    {stimulus: 'JEN20B', data2: imgData2[0]},
    {stimulus: 'SPA06B', data2: imgData2[0]},
    {stimulus: 'TOR27D', data2: imgData2[1]},
    {stimulus: 'WEL29C', data2: imgData2[1]},
    {stimulus: 'BEJ09D', data2: imgData2[1]},
    {stimulus: 'JEN20C', data2: imgData2[1]},
    {stimulus: 'SPA06C', data2: imgData2[1]},
    {stimulus: 'TOR28A', data2: imgData2[0]},
    {stimulus: 'WEL29D', data2: imgData2[1]},
    {stimulus: 'BEJ10A', data2: imgData2[0]},
    {stimulus: 'JEN20D', data2: imgData2[1]},
    {stimulus: 'SPA06D', data2: imgData2[1]},
    {stimulus: 'TOR28B', data2: imgData2[0]},
    {stimulus: 'WEL30A', data2: imgData2[0]},
    {stimulus: 'BEJ10B', data2: imgData2[0]},
    {stimulus: 'MEN01A', data2: imgData2[0]},
    {stimulus: 'SPA07A', data2: imgData2[0]},
    {stimulus: 'TOR28C', data2: imgData2[1]},
    {stimulus: 'WEL30B', data2: imgData2[0]},
    {stimulus: 'BEJ10C', data2: imgData2[1]},
    {stimulus: 'MEN01B', data2: imgData2[0]},
    {stimulus: 'SPA07B', data2: imgData2[0]},
    {stimulus: 'TOR28D', data2: imgData2[1]},
    {stimulus: 'WEL30C', data2: imgData2[1]},
    {stimulus: 'BEJ10D', data2: imgData2[1]},
    {stimulus: 'MEN01C', data2: imgData2[1]},
    {stimulus: 'SPA07D', data2: imgData2[1]},
    {stimulus: 'TOR29A', data2: imgData2[0]},
    {stimulus: 'WEL30D', data2: imgData2[1]},
    {stimulus: 'BEJ11A', data2: imgData2[0]},
    {stimulus: 'MEN01D', data2: imgData2[1]},
    {stimulus: 'SPA08A', data2: imgData2[0]},
    {stimulus: 'TOR29B', data2: imgData2[0]},
    {stimulus: 'WEL31A', data2: imgData2[0]},
    {stimulus: 'BEJ11B', data2: imgData2[0]},
    {stimulus: 'MEN02A', data2: imgData2[0]},
    {stimulus: 'SPA08B', data2: imgData2[0]},
    {stimulus: 'TOR29C', data2: imgData2[1]},
    {stimulus: 'WEL31B', data2: imgData2[0]},
    {stimulus: 'BEJ11C', data2: imgData2[1]},
    {stimulus: 'MEN02B', data2: imgData2[0]},
    {stimulus: 'SPA08C', data2: imgData2[1]},
    {stimulus: 'TOR29D', data2: imgData2[1]},
    {stimulus: 'WEL31C', data2: imgData2[1]},
    {stimulus: 'BEJ11D', data2: imgData2[1]},
    {stimulus: 'MEN02C', data2: imgData2[1]},
    {stimulus: 'SPA08D', data2: imgData2[1]},
    {stimulus: 'TOR30A', data2: imgData2[0]},
    {stimulus: 'WEL31D', data2: imgData2[1]},
    {stimulus: 'BEJ12A', data2: imgData2[0]},
    {stimulus: 'MEN02D', data2: imgData2[1]},
    {stimulus: 'SPA09A', data2: imgData2[0]},
    {stimulus: 'TOR30B', data2: imgData2[0]},
    {stimulus: 'WEL32A', data2: imgData2[0]},
    {stimulus: 'BEJ12B', data2: imgData2[0]},
    {stimulus: 'MEN03A', data2: imgData2[0]},
    {stimulus: 'SPA09B', data2: imgData2[0]},
    {stimulus: 'TOR30C', data2: imgData2[1]},
    {stimulus: 'WEL32B', data2: imgData2[0]},
    {stimulus: 'BEJ12C', data2: imgData2[1]},
    {stimulus: 'MEN03B', data2: imgData2[0]},
    {stimulus: 'SPA09C', data2: imgData2[1]},
    {stimulus: 'TOR30D', data2: imgData2[1]},
    {stimulus: 'WEL32C', data2: imgData2[1]},
    {stimulus: 'BEJ12D', data2: imgData2[1]},
    {stimulus: 'MEN03C', data2: imgData2[1]},
    {stimulus: 'SPA09D', data2: imgData2[1]},
    {stimulus: 'TOR31A', data2: imgData2[0]},
    {stimulus: 'WEL32D', data2: imgData2[1]},
    {stimulus: 'BEJ13A', data2: imgData2[0]},
    {stimulus: 'MEN03D', data2: imgData2[1]},
    {stimulus: 'SPA10A', data2: imgData2[0]},
    {stimulus: 'TOR31B', data2: imgData2[0]},
    {stimulus: 'WEL33A', data2: imgData2[0]},
    {stimulus: 'BEJ13B', data2: imgData2[0]},
    {stimulus: 'MEN04A', data2: imgData2[0]},
    {stimulus: 'SPA10B', data2: imgData2[0]},
    {stimulus: 'TOR31C', data2: imgData2[1]},
    {stimulus: 'WEL33B', data2: imgData2[0]},
    {stimulus: 'BEJ13C', data2: imgData2[1]},
    {stimulus: 'MEN04B', data2: imgData2[0]},
    {stimulus: 'SPA10C', data2: imgData2[1]},
    {stimulus: 'TOR31D', data2: imgData2[1]},
    {stimulus: 'WEL33C', data2: imgData2[1]},
    {stimulus: 'BEJ13D', data2: imgData2[1]},
    {stimulus: 'MEN04C', data2: imgData2[1]},
    {stimulus: 'SPA10D', data2: imgData2[1]},
    {stimulus: 'TOR32A', data2: imgData2[0]},
    {stimulus: 'WEL33D', data2: imgData2[1]},
    {stimulus: 'BEJ14A', data2: imgData2[0]},
    {stimulus: 'MEN04D', data2: imgData2[1]},
    {stimulus: 'SPA11A', data2: imgData2[0]},
    {stimulus: 'TOR32B', data2: imgData2[0]},
    {stimulus: 'WEL34A', data2: imgData2[0]},
    {stimulus: 'BEJ14B', data2: imgData2[0]},
    {stimulus: 'MEN05A', data2: imgData2[0]},
    {stimulus: 'SPA11B', data2: imgData2[0]},
    {stimulus: 'TOR32C', data2: imgData2[1]},
    {stimulus: 'WEL34B', data2: imgData2[0]},
    {stimulus: 'BEJ14C', data2: imgData2[1]},
    {stimulus: 'MEN05B', data2: imgData2[0]},
    {stimulus: 'SPA11C', data2: imgData2[1]},
    {stimulus: 'TOR32D', data2: imgData2[1]},
    {stimulus: 'WEL34C', data2: imgData2[1]},
    {stimulus: 'BEJ14D', data2: imgData2[1]},
    {stimulus: 'MEN05C', data2: imgData2[1]},
    {stimulus: 'SPA11D', data2: imgData2[1]},
    {stimulus: 'TOR33A', data2: imgData2[0]},
    {stimulus: 'WEL34D', data2: imgData2[1]},
    {stimulus: 'BEJ15A', data2: imgData2[0]},
    {stimulus: 'MEN05D', data2: imgData2[1]},
    {stimulus: 'SPA12A', data2: imgData2[0]},
    {stimulus: 'TOR33B', data2: imgData2[0]},
    {stimulus: 'WEL35A', data2: imgData2[0]},
    {stimulus: 'BEJ15B', data2: imgData2[0]},
    {stimulus: 'MEN06A', data2: imgData2[0]},
    {stimulus: 'SPA12B', data2: imgData2[0]},
    {stimulus: 'TOR33C', data2: imgData2[1]},
    {stimulus: 'WEL35B', data2: imgData2[0]},
    {stimulus: 'BEJ15C', data2: imgData2[1]},
    {stimulus: 'MEN06B', data2: imgData2[0]},
    {stimulus: 'SPA12C', data2: imgData2[1]},
    {stimulus: 'TOR33D', data2: imgData2[1]},
    {stimulus: 'WEL35C', data2: imgData2[1]},
    {stimulus: 'BEJ15D', data2: imgData2[1]},
    {stimulus: 'MEN06C', data2: imgData2[1]},
    {stimulus: 'SPA12D', data2: imgData2[1]},
    {stimulus: 'TOR34A', data2: imgData2[0]},
    {stimulus: 'WEL35D', data2: imgData2[1]},
    {stimulus: 'BEJ16A', data2: imgData2[0]},
    {stimulus: 'MEN06D', data2: imgData2[1]},
    {stimulus: 'SPA13A', data2: imgData2[0]},
    {stimulus: 'TOR34B', data2: imgData2[0]},
    {stimulus: 'WEL36A', data2: imgData2[0]},
    {stimulus: 'BEJ16B', data2: imgData2[0]},
    {stimulus: 'MEN07A', data2: imgData2[0]},
    {stimulus: 'SPA13B', data2: imgData2[0]},
    {stimulus: 'TOR34C', data2: imgData2[1]},
    {stimulus: 'WEL36B', data2: imgData2[0]},
    {stimulus: 'BEJ16C', data2: imgData2[1]},
    {stimulus: 'MEN07B', data2: imgData2[0]},
    {stimulus: 'SPA13C', data2: imgData2[1]},
    {stimulus: 'TOR34D', data2: imgData2[1]},
    {stimulus: 'WEL36C', data2: imgData2[1]},
    {stimulus: 'BEJ16D', data2: imgData2[1]},
    {stimulus: 'MEN07C', data2: imgData2[1]},
    {stimulus: 'SPA13D', data2: imgData2[1]},
    {stimulus: 'TOR35A', data2: imgData2[0]},
    {stimulus: 'WEL36D', data2: imgData2[1]},
    {stimulus: 'BEJ17A', data2: imgData2[0]},
    {stimulus: 'MEN07D', data2: imgData2[1]},
    {stimulus: 'SPA14A', data2: imgData2[0]},
    {stimulus: 'TOR35B', data2: imgData2[0]},
    {stimulus: 'WEL37A', data2: imgData2[0]},
    {stimulus: 'BEJ17B', data2: imgData2[0]},
    {stimulus: 'MEN08A', data2: imgData2[0]},
    {stimulus: 'SPA14B', data2: imgData2[0]},
    {stimulus: 'TOR35C', data2: imgData2[1]},
    {stimulus: 'WEL37B', data2: imgData2[0]},
    {stimulus: 'BEJ17C', data2: imgData2[1]},
    {stimulus: 'MEN08B', data2: imgData2[0]},
    {stimulus: 'SPA14C', data2: imgData2[1]},
    {stimulus: 'TOR35D', data2: imgData2[1]},
    {stimulus: 'WEL37C', data2: imgData2[1]},
    {stimulus: 'BEJ17D', data2: imgData2[1]},
    {stimulus: 'MEN08C', data2: imgData2[1]},
    {stimulus: 'SPA14D', data2: imgData2[1]},
    {stimulus: 'TOR36A', data2: imgData2[0]},
    {stimulus: 'WEL37D', data2: imgData2[1]},
    {stimulus: 'BEJ18A', data2: imgData2[0]},
    {stimulus: 'MEN08D', data2: imgData2[1]},
    {stimulus: 'SPA15A', data2: imgData2[0]},
    {stimulus: 'TOR36B', data2: imgData2[0]},
    {stimulus: 'WEL38A', data2: imgData2[0]},
    {stimulus: 'BEJ18B', data2: imgData2[0]},
    {stimulus: 'MEN09A', data2: imgData2[0]},
    {stimulus: 'SPA15B', data2: imgData2[0]},
    {stimulus: 'TOR36C', data2: imgData2[1]},
    {stimulus: 'WEL38B', data2: imgData2[0]},
    {stimulus: 'BEJ18C', data2: imgData2[1]},
    {stimulus: 'MEN09B', data2: imgData2[0]},
    {stimulus: 'SPA15C', data2: imgData2[1]},
    {stimulus: 'TOR36D', data2: imgData2[1]},
    {stimulus: 'WEL38C', data2: imgData2[1]},
    {stimulus: 'BEJ18D', data2: imgData2[1]},
    {stimulus: 'MEN09C', data2: imgData2[1]},
    {stimulus: 'SPA15D', data2: imgData2[1]},
    {stimulus: 'TOR37A', data2: imgData2[0]},
    {stimulus: 'WEL38D', data2: imgData2[1]},
    {stimulus: 'BEJ19A', data2: imgData2[0]},
    {stimulus: 'MEN09D', data2: imgData2[1]},
    {stimulus: 'TOP01A', data2: imgData2[0]},
    {stimulus: 'TOR37B', data2: imgData2[0]},
    {stimulus: 'WEL39A', data2: imgData2[0]},
    {stimulus: 'BEJ19B', data2: imgData2[0]},
    {stimulus: 'MEN10A', data2: imgData2[0]},
    {stimulus: 'TOP01B', data2: imgData2[0]},
    {stimulus: 'TOR37C', data2: imgData2[1]},
    {stimulus: 'WEL39B', data2: imgData2[0]},
    {stimulus: 'BEJ19C', data2: imgData2[1]},
    {stimulus: 'MEN10B', data2: imgData2[0]},
    {stimulus: 'TOP01C', data2: imgData2[1]},
    {stimulus: 'TOR37D', data2: imgData2[1]},
    {stimulus: 'WEL39C', data2: imgData2[1]},
    {stimulus: 'BEJ19D', data2: imgData2[1]},
    {stimulus: 'MEN10C', data2: imgData2[1]},
    {stimulus: 'TOP01D', data2: imgData2[1]},
    {stimulus: 'TOR38A', data2: imgData2[0]},
    {stimulus: 'WEL39D', data2: imgData2[1]},
    {stimulus: 'BEJ20A', data2: imgData2[0]},
    {stimulus: 'MEN10D', data2: imgData2[1]},
    {stimulus: 'TOP02A', data2: imgData2[0]},
    {stimulus: 'TOR38B', data2: imgData2[0]},
    {stimulus: 'WEL40A', data2: imgData2[0]},
    {stimulus: 'BEJ20B', data2: imgData2[0]},
    {stimulus: 'MEN11A', data2: imgData2[0]},
    {stimulus: 'TOP02B', data2: imgData2[0]},
    {stimulus: 'TOR38C', data2: imgData2[1]},
    {stimulus: 'WEL40B', data2: imgData2[0]},
    {stimulus: 'BEJ20C', data2: imgData2[1]},
    {stimulus: 'MEN11B', data2: imgData2[0]},
    {stimulus: 'TOP02C', data2: imgData2[1]},
    {stimulus: 'TOR38D', data2: imgData2[1]},
    {stimulus: 'WEL40C', data2: imgData2[1]},
    {stimulus: 'BEJ20D', data2: imgData2[1]},
    {stimulus: 'MEN11C', data2: imgData2[1]},
    {stimulus: 'TOP02D', data2: imgData2[1]},
    {stimulus: 'TOR39A', data2: imgData2[0]},
    {stimulus: 'WEL40D', data2: imgData2[1]},
    {stimulus: 'BEJ21A', data2: imgData2[0]},
    {stimulus: 'MEN11D', data2: imgData2[1]},
    {stimulus: 'TOP03A', data2: imgData2[0]},
    {stimulus: 'TOR39B', data2: imgData2[0]},
    {stimulus: 'WEL41A', data2: imgData2[0]},
    {stimulus: 'BEJ21B', data2: imgData2[0]},
    {stimulus: 'MEN12A', data2: imgData2[0]},
    {stimulus: 'TOP03B', data2: imgData2[0]},
    {stimulus: 'TOR39C', data2: imgData2[1]},
    {stimulus: 'WEL41B', data2: imgData2[0]},
    {stimulus: 'BEJ21C', data2: imgData2[1]},
    {stimulus: 'MEN12B', data2: imgData2[0]},
    {stimulus: 'TOP03C', data2: imgData2[1]},
    {stimulus: 'TOR39D', data2: imgData2[1]},
    {stimulus: 'WEL41C', data2: imgData2[1]},
    {stimulus: 'BEJ21D', data2: imgData2[1]},
    {stimulus: 'MEN12C', data2: imgData2[1]},
    {stimulus: 'TOP03D', data2: imgData2[1]},
    {stimulus: 'TOR40A', data2: imgData2[0]},
    {stimulus: 'WEL41D', data2: imgData2[1]},
    {stimulus: 'BEJ22A', data2: imgData2[0]},
    {stimulus: 'MEN12D', data2: imgData2[1]},
    {stimulus: 'TOP04A', data2: imgData2[0]},
    {stimulus: 'TOR40B', data2: imgData2[0]},
    {stimulus: 'WEL42A', data2: imgData2[0]},
    {stimulus: 'BEJ22B', data2: imgData2[0]},
    {stimulus: 'MEN13A', data2: imgData2[0]},
    {stimulus: 'TOP04B', data2: imgData2[0]},
    {stimulus: 'TOR41A', data2: imgData2[0]},
    {stimulus: 'WEL42B', data2: imgData2[0]},
    {stimulus: 'BEJ22C', data2: imgData2[1]},
    {stimulus: 'MEN13B', data2: imgData2[0]},
    {stimulus: 'TOP04C', data2: imgData2[1]},
    {stimulus: 'TOR41B', data2: imgData2[0]},
    {stimulus: 'WEL42C', data2: imgData2[1]},
    {stimulus: 'BEJ22D', data2: imgData2[1]},
    {stimulus: 'MEN13C', data2: imgData2[1]},
    {stimulus: 'TOP04D', data2: imgData2[1]},
    {stimulus: 'TOR41C', data2: imgData2[1]},
    {stimulus: 'WEL42D', data2: imgData2[1]},
    {stimulus: 'BEJ23A', data2: imgData2[0]},
    {stimulus: 'MEN13D', data2: imgData2[1]},
    {stimulus: 'TOP05A', data2: imgData2[0]},
    {stimulus: 'TOR41D', data2: imgData2[1]},
    {stimulus: 'WEL43A', data2: imgData2[0]},
    {stimulus: 'BEJ23B', data2: imgData2[0]},
    {stimulus: 'MEN14A', data2: imgData2[0]},
    {stimulus: 'TOP05B', data2: imgData2[0]},
    {stimulus: 'TOR42A', data2: imgData2[0]},
    {stimulus: 'WEL43B', data2: imgData2[0]},
    {stimulus: 'BEJ23C', data2: imgData2[1]},
    {stimulus: 'MEN14B', data2: imgData2[0]},
    {stimulus: 'TOP05C', data2: imgData2[1]},
    {stimulus: 'TOR42B', data2: imgData2[0]},
    {stimulus: 'WEL43C', data2: imgData2[1]},
    {stimulus: 'BEJ23D', data2: imgData2[1]},
    {stimulus: 'MEN14C', data2: imgData2[1]},
    {stimulus: 'TOP05D', data2: imgData2[1]},
    {stimulus: 'TOR42C', data2: imgData2[1]},
    {stimulus: 'WEL43D', data2: imgData2[1]},
    {stimulus: 'BEJ24A', data2: imgData2[0]},
    {stimulus: 'MEN14D', data2: imgData2[1]},
    {stimulus: 'TOP06A', data2: imgData2[0]},
    {stimulus: 'TOR42D', data2: imgData2[1]},
    {stimulus: 'WEL44A', data2: imgData2[0]},
    {stimulus: 'BEJ24B', data2: imgData2[0]},
    {stimulus: 'MEN15A', data2: imgData2[0]},
    {stimulus: 'TOP06B', data2: imgData2[0]},
    {stimulus: 'TOR43A', data2: imgData2[0]},
    {stimulus: 'WEL44B', data2: imgData2[0]},
    {stimulus: 'BEJ24C', data2: imgData2[1]},
    {stimulus: 'MEN15B', data2: imgData2[0]},
    {stimulus: 'TOP06C', data2: imgData2[1]},
    {stimulus: 'TOR43B', data2: imgData2[0]},
    {stimulus: 'WEL44C', data2: imgData2[1]},
    {stimulus: 'BEJ24D', data2: imgData2[1]},
    {stimulus: 'MEN15C', data2: imgData2[1]},
    {stimulus: 'TOP06D', data2: imgData2[1]},
    {stimulus: 'TOR43C', data2: imgData2[1]},
    {stimulus: 'WEL44D', data2: imgData2[1]},
    {stimulus: 'BEJ25A', data2: imgData2[0]},
    {stimulus: 'MEN15D', data2: imgData2[1]},
    {stimulus: 'TOP07A', data2: imgData2[0]},
    {stimulus: 'TOR43D', data2: imgData2[1]},
    {stimulus: 'WEL45A', data2: imgData2[0]},
    {stimulus: 'BEJ25B', data2: imgData2[0]},
    {stimulus: 'MES01A', data2: imgData2[0]},
    {stimulus: 'TOP07B', data2: imgData2[0]},
    {stimulus: 'TOR44A', data2: imgData2[0]},
    {stimulus: 'WEL45B', data2: imgData2[0]},
    {stimulus: 'BEJ25C', data2: imgData2[1]},
    {stimulus: 'MES01B', data2: imgData2[0]},
    {stimulus: 'TOP07C', data2: imgData2[1]},
    {stimulus: 'TOR44B', data2: imgData2[0]},
    {stimulus: 'WEL45C', data2: imgData2[1]},
    {stimulus: 'BEJ25D', data2: imgData2[1]},
    {stimulus: 'MES01C', data2: imgData2[1]},
    {stimulus: 'TOP07D', data2: imgData2[1]},
    {stimulus: 'TOR44C', data2: imgData2[1]},
    {stimulus: 'WEL45D', data2: imgData2[1]},
    {stimulus: 'BEJ26A', data2: imgData2[0]},
    {stimulus: 'MES01D', data2: imgData2[1]},
    {stimulus: 'TOP08A', data2: imgData2[0]},
    {stimulus: 'TOR44D', data2: imgData2[1]},
    {stimulus: 'WEL46A', data2: imgData2[0]},
    {stimulus: 'BEJ26B', data2: imgData2[0]},
    {stimulus: 'MES02A', data2: imgData2[0]},
    {stimulus: 'TOP08B', data2: imgData2[0]},
    {stimulus: 'TOR45A', data2: imgData2[0]},
    {stimulus: 'WEL46B', data2: imgData2[0]},
    {stimulus: 'BEJ26C', data2: imgData2[1]},
    {stimulus: 'MES02B', data2: imgData2[0]},
    {stimulus: 'TOP08C', data2: imgData2[1]},
    {stimulus: 'TOR45B', data2: imgData2[0]},
    {stimulus: 'WEL46C', data2: imgData2[1]},
    {stimulus: 'BEJ26D', data2: imgData2[1]},
    {stimulus: 'MES02C', data2: imgData2[1]},
    {stimulus: 'TOP08D', data2: imgData2[1]},
    {stimulus: 'TOR45C', data2: imgData2[1]},
    {stimulus: 'WEL46D', data2: imgData2[1]},
    {stimulus: 'BEJ27A', data2: imgData2[0]},
    {stimulus: 'MES02D', data2: imgData2[1]},
    {stimulus: 'TOP09A', data2: imgData2[0]},
    {stimulus: 'TOR45D', data2: imgData2[1]},
    {stimulus: 'WEL47A', data2: imgData2[0]},
    {stimulus: 'BEJ27B', data2: imgData2[0]},
    {stimulus: 'MES03A', data2: imgData2[0]},
    {stimulus: 'TOP09B', data2: imgData2[0]},
    {stimulus: 'TOR46A', data2: imgData2[0]},
    {stimulus: 'WEL47B', data2: imgData2[0]},
    {stimulus: 'BEJ27C', data2: imgData2[1]},
    {stimulus: 'MES03B', data2: imgData2[0]},
    {stimulus: 'TOP09C', data2: imgData2[1]},
    {stimulus: 'TOR46B', data2: imgData2[0]},
    {stimulus: 'WEL47C', data2: imgData2[1]},
    {stimulus: 'BEJ27D', data2: imgData2[1]},
    {stimulus: 'MES03C', data2: imgData2[1]},
    {stimulus: 'TOP09D', data2: imgData2[1]},
    {stimulus: 'TOR46C', data2: imgData2[1]},
    {stimulus: 'WEL47D', data2: imgData2[1]},
    {stimulus: 'BEJ28A', data2: imgData2[0]},
    {stimulus: 'MES03D', data2: imgData2[1]},
    {stimulus: 'TOP10A', data2: imgData2[0]},
    {stimulus: 'TOR46D', data2: imgData2[1]},
    {stimulus: 'WEL48A', data2: imgData2[0]},
    {stimulus: 'BEJ28B', data2: imgData2[0]},
    {stimulus: 'MES04A', data2: imgData2[0]},
    {stimulus: 'TOP10B', data2: imgData2[0]},
    //{stimulus: 'TOR47A', data2: imgData2[0]},
    {stimulus: 'WEL48B', data2: imgData2[0]},
    {stimulus: 'BEJ28C', data2: imgData2[1]},
    {stimulus: 'MES04B', data2: imgData2[0]},
    {stimulus: 'TOP10C', data2: imgData2[1]},
    {stimulus: 'TOR47B', data2: imgData2[0]},
    {stimulus: 'WEL48C', data2: imgData2[1]},
    {stimulus: 'BEJ28D', data2: imgData2[1]},
    {stimulus: 'MES04C', data2: imgData2[1]},
    {stimulus: 'TOP10D', data2: imgData2[1]},
    {stimulus: 'TOR47C', data2: imgData2[1]},
    {stimulus: 'WEL48D', data2: imgData2[1]},
    {stimulus: 'BEJ29A', data2: imgData2[0]},
    {stimulus: 'MES04D', data2: imgData2[1]},
    {stimulus: 'TOP11A', data2: imgData2[0]},
    {stimulus: 'TOR47D', data2: imgData2[1]},
    {stimulus: 'WEL49A', data2: imgData2[0]},
    {stimulus: 'BEJ29B', data2: imgData2[0]},
    {stimulus: 'MES05A', data2: imgData2[0]},
    {stimulus: 'TOP11B', data2: imgData2[0]},
    {stimulus: 'TOR48A', data2: imgData2[0]},
    {stimulus: 'WEL49B', data2: imgData2[0]},
    {stimulus: 'BEJ29C', data2: imgData2[1]},
    {stimulus: 'MES05B', data2: imgData2[0]},
    {stimulus: 'TOP11C', data2: imgData2[1]},
    {stimulus: 'TOR48B', data2: imgData2[0]},
    {stimulus: 'WEL49C', data2: imgData2[1]},
    {stimulus: 'BEJ29D', data2: imgData2[1]},
    {stimulus: 'MES05C', data2: imgData2[1]},
    {stimulus: 'TOP11D', data2: imgData2[1]},
    {stimulus: 'TOR48C', data2: imgData2[1]},
    {stimulus: 'WEL49D', data2: imgData2[1]},
    {stimulus: 'BEJ30A', data2: imgData2[0]},
    {stimulus: 'MES05D', data2: imgData2[1]},
    {stimulus: 'TOP12A', data2: imgData2[0]},
    {stimulus: 'TOR48D', data2: imgData2[1]},
    {stimulus: 'WEL50A', data2: imgData2[0]},
    {stimulus: 'BEJ30B', data2: imgData2[0]},
    {stimulus: 'MES06A', data2: imgData2[0]},
    {stimulus: 'TOP12B', data2: imgData2[0]},
    {stimulus: 'TOR49A', data2: imgData2[0]},
    {stimulus: 'WEL50B', data2: imgData2[0]},
    {stimulus: 'BEJ30C', data2: imgData2[1]},
    {stimulus: 'MES06B', data2: imgData2[0]},
    {stimulus: 'TOP12C', data2: imgData2[1]},
    {stimulus: 'TOR49B', data2: imgData2[0]},
    {stimulus: 'WEL50C', data2: imgData2[1]},
    {stimulus: 'BEJ30D', data2: imgData2[1]},
    {stimulus: 'MES06C', data2: imgData2[1]},
    {stimulus: 'TOP12D', data2: imgData2[1]},
    {stimulus: 'TOR49C', data2: imgData2[1]},
    {stimulus: 'WEL50D', data2: imgData2[1]},
    {stimulus: 'BEJ31A', data2: imgData2[0]},
    {stimulus: 'MES06D', data2: imgData2[1]},
    {stimulus: 'TOP13A', data2: imgData2[0]},
    {stimulus: 'TOR49D', data2: imgData2[1]},
    {stimulus: 'WEL51A', data2: imgData2[0]},
    {stimulus: 'BEJ31B', data2: imgData2[0]},
    {stimulus: 'MES07A', data2: imgData2[0]},
    {stimulus: 'TOP13B', data2: imgData2[0]},
    {stimulus: 'TOR50A', data2: imgData2[0]},
    {stimulus: 'WEL51B', data2: imgData2[0]},
    {stimulus: 'BEJ31C', data2: imgData2[1]},
    {stimulus: 'MES07B', data2: imgData2[0]},
    {stimulus: 'TOP13C', data2: imgData2[1]},
    {stimulus: 'TOR50B', data2: imgData2[0]},
    {stimulus: 'WEL51C', data2: imgData2[1]},
    {stimulus: 'BEJ31D', data2: imgData2[1]},
    {stimulus: 'MES07C', data2: imgData2[1]},
    {stimulus: 'TOP13D', data2: imgData2[1]},
    {stimulus: 'TOR50C', data2: imgData2[1]},
    {stimulus: 'WEL51D', data2: imgData2[1]},
    {stimulus: 'HAD01A', data2: imgData2[0]},
    {stimulus: 'MES07D', data2: imgData2[1]},
    {stimulus: 'TOP14A', data2: imgData2[0]},
    {stimulus: 'TOR50D', data2: imgData2[1]},
    {stimulus: 'WEL52A', data2: imgData2[0]},
    {stimulus: 'HAD01B', data2: imgData2[0]},
    {stimulus: 'MES08A', data2: imgData2[0]},
    {stimulus: 'TOP14B', data2: imgData2[0]},
    {stimulus: 'WEL01A', data2: imgData2[0]},
    {stimulus: 'WEL52B', data2: imgData2[0]},
    {stimulus: 'HAD01C', data2: imgData2[1]},
    {stimulus: 'MES08B', data2: imgData2[0]},
    {stimulus: 'TOP14C', data2: imgData2[1]},
    {stimulus: 'WEL01B', data2: imgData2[0]},
    {stimulus: 'WEL52C', data2: imgData2[1]},
    {stimulus: 'HAD01D', data2: imgData2[1]},
    {stimulus: 'MES08C', data2: imgData2[1]},
    {stimulus: 'TOP14D', data2: imgData2[1]},
    {stimulus: 'WEL01C', data2: imgData2[1]},
    {stimulus: 'WEL52D', data2: imgData2[1]},
    {stimulus: 'HAD02A', data2: imgData2[0]},
    {stimulus: 'MES08D', data2: imgData2[1]},
    {stimulus: 'TOP15A', data2: imgData2[0]},
    {stimulus: 'WEL01D', data2: imgData2[1]},
    {stimulus: 'WEL53A', data2: imgData2[0]},
    {stimulus: 'HAD02B', data2: imgData2[0]},
    {stimulus: 'MES09A', data2: imgData2[0]},
    {stimulus: 'TOP15B', data2: imgData2[0]},
    {stimulus: 'WEL02A', data2: imgData2[0]},
    {stimulus: 'WEL53B', data2: imgData2[0]},
    {stimulus: 'HAD02C', data2: imgData2[1]},
    {stimulus: 'MES09B', data2: imgData2[0]},
    {stimulus: 'TOP15C', data2: imgData2[1]},
    {stimulus: 'WEL02B', data2: imgData2[0]},
    {stimulus: 'WEL53C', data2: imgData2[1]},
    {stimulus: 'HAD02D', data2: imgData2[1]},
    {stimulus: 'MES09D', data2: imgData2[1]},
    {stimulus: 'TOP15D', data2: imgData2[1]},
    {stimulus: 'WEL02C', data2: imgData2[1]},
    {stimulus: 'WEL53D', data2: imgData2[1]},
    {stimulus: 'HAD03A', data2: imgData2[0]},
    {stimulus: 'MES10A', data2: imgData2[0]},
    {stimulus: 'TOR01A', data2: imgData2[0]},
    {stimulus: 'WEL02D', data2: imgData2[1]},
    {stimulus: 'WEL54A', data2: imgData2[0]},
    {stimulus: 'HAD03B', data2: imgData2[0]},
    {stimulus: 'MES10B', data2: imgData2[0]},
    {stimulus: 'TOR01B', data2: imgData2[0]},
    {stimulus: 'WEL03A', data2: imgData2[0]},
    {stimulus: 'WEL54B', data2: imgData2[0]},
    {stimulus: 'HAD03C', data2: imgData2[1]},
    {stimulus: 'MES10C', data2: imgData2[1]},
    {stimulus: 'TOR01C', data2: imgData2[1]},
    {stimulus: 'WEL03B', data2: imgData2[0]},
    {stimulus: 'WEL54C', data2: imgData2[1]},
    {stimulus: 'HAD03D', data2: imgData2[1]},
    {stimulus: 'MES10D', data2: imgData2[1]},
    {stimulus: 'TOR01D', data2: imgData2[1]},
    {stimulus: 'WEL03C', data2: imgData2[1]},
    {stimulus: 'WEL54D', data2: imgData2[1]},
    {stimulus: 'HAD04A', data2: imgData2[0]},
    {stimulus: 'MES11A', data2: imgData2[0]},
    {stimulus: 'TOR02A', data2: imgData2[0]},
    {stimulus: 'WEL03D', data2: imgData2[1]},
    {stimulus: 'WEL55A', data2: imgData2[0]},
    {stimulus: 'HAD04B', data2: imgData2[0]},
    {stimulus: 'MES11B', data2: imgData2[0]},
    {stimulus: 'TOR02B', data2: imgData2[0]},
    {stimulus: 'WEL04A', data2: imgData2[0]},
    {stimulus: 'WEL55B', data2: imgData2[0]},
    {stimulus: 'HAD04C', data2: imgData2[1]},
    {stimulus: 'MES11C', data2: imgData2[1]},
    {stimulus: 'TOR02C', data2: imgData2[1]},
    {stimulus: 'WEL04B', data2: imgData2[0]},
    {stimulus: 'WEL55C', data2: imgData2[1]},
    {stimulus: 'HAD04D', data2: imgData2[1]},
    {stimulus: 'MES11D', data2: imgData2[1]},
    {stimulus: 'TOR02D', data2: imgData2[1]},
    {stimulus: 'WEL04C', data2: imgData2[1]},
    {stimulus: 'WEL55D', data2: imgData2[1]},
    {stimulus: 'HAD05A', data2: imgData2[0]},
    {stimulus: 'NYA01A', data2: imgData2[0]},
    {stimulus: 'TOR03A', data2: imgData2[0]},
    {stimulus: 'WEL04D', data2: imgData2[1]},
    {stimulus: 'WEL56A', data2: imgData2[0]},
    {stimulus: 'HAD05B', data2: imgData2[0]},
    {stimulus: 'NYA01B', data2: imgData2[0]},
    {stimulus: 'TOR03B', data2: imgData2[0]},
    {stimulus: 'WEL05A', data2: imgData2[0]},
    {stimulus: 'WEL56B', data2: imgData2[0]},
    {stimulus: 'HAD05C', data2: imgData2[1]},
    {stimulus: 'NYA01C', data2: imgData2[1]},
    {stimulus: 'TOR03C', data2: imgData2[1]},
    {stimulus: 'WEL05B', data2: imgData2[0]},
    {stimulus: 'WEL56C', data2: imgData2[1]},
    {stimulus: 'HAD05D', data2: imgData2[1]},
    {stimulus: 'NYA01D', data2: imgData2[1]},
    {stimulus: 'TOR03D', data2: imgData2[1]},
    {stimulus: 'WEL05C', data2: imgData2[1]},
    {stimulus: 'WEL56D', data2: imgData2[1]},
    {stimulus: 'HAD06A', data2: imgData2[0]},
    {stimulus: 'NYA02A', data2: imgData2[0]},
    {stimulus: 'TOR04A', data2: imgData2[0]},
    {stimulus: 'WEL05D', data2: imgData2[1]},
    {stimulus: 'WEL57A', data2: imgData2[0]},
    {stimulus: 'HAD06B', data2: imgData2[0]},
    {stimulus: 'NYA02B', data2: imgData2[0]},
    {stimulus: 'TOR04B', data2: imgData2[0]},
    {stimulus: 'WEL06A', data2: imgData2[0]},
    {stimulus: 'WEL57B', data2: imgData2[0]},
    {stimulus: 'HAD06C', data2: imgData2[1]},
    {stimulus: 'NYA02C', data2: imgData2[1]},
    {stimulus: 'TOR04C', data2: imgData2[1]},
    {stimulus: 'WEL06B', data2: imgData2[0]},
    {stimulus: 'WEL57C', data2: imgData2[1]},
    {stimulus: 'HAD06D', data2: imgData2[1]},
    {stimulus: 'NYA02D', data2: imgData2[1]},
    {stimulus: 'TOR04D', data2: imgData2[1]},
    {stimulus: 'WEL06C', data2: imgData2[1]},
    {stimulus: 'WEL57D', data2: imgData2[1]},
    {stimulus: 'HAD07A', data2: imgData2[0]},
    {stimulus: 'NYA03A', data2: imgData2[0]},
    {stimulus: 'TOR05A', data2: imgData2[0]},
    {stimulus: 'WEL06D', data2: imgData2[1]},
    {stimulus: 'HAD07B', data2: imgData2[0]},
    {stimulus: 'NYA03B', data2: imgData2[0]},
    {stimulus: 'TOR05B', data2: imgData2[0]},
    {stimulus: 'WEL07A', data2: imgData2[0]},
    {stimulus: 'HAD07C', data2: imgData2[1]},
    {stimulus: 'NYA03C', data2: imgData2[1]},
    {stimulus: 'TOR05C', data2: imgData2[1]},
    {stimulus: 'WEL07B', data2: imgData2[0]},
    {stimulus: 'HAD07D', data2: imgData2[1]},
    {stimulus: 'NYA03D', data2: imgData2[1]},
    {stimulus: 'TOR05D', data2: imgData2[1]},
    {stimulus: 'WEL07C', data2: imgData2[1]}
];
var tracksR = jsPsych.randomization.sampleWithoutReplacement(tracks,80);



var song_list2=[]
let current2


for (var j=0; j<80; j++){

current2 = {stimulus: `${baseUrl}/quizzes/fc/audio/${tracksR[j].stimulus}.mp3`, data: tracksR[j].data2} 
song_list2.push(current2)

}


var welcome2 = {
  type: 'html-button-response',
  stimulus: '<p align="left">This quiz is part of research conducted by scientists at Harvard University. We are studying how people make sense of the world, including the things they see and hear, the people they interact with, and the abstract worlds of music, arts, and other areas of cognition.<br><br>This research has no known risks or anticipated direct benefits. Your participation in this research is completely voluntary. You can end your participation at any time.<br><br>Your participation is completely anonymous. The results and data from this study will be shared with the public. After the quiz, we will explain several ways to be informed. You can also find this information on the main page of this website. At the end of the quiz, there will be the option to share your results on social media.<br><br>If you have questions or problems, you can contact us at musiclab+q@g.harvard.edu. By proceeding, you agree to participate in this study.<br><br>Thank you for your interest.<br>The Music Lab at Harvard University<br><br></p>',
  prompt1: ' ',
  prompt2: ' ',
  choices: ['Next']
};
var intro2 = {
  type: 'html-button-response',
  stimulus: '<p align="left">In this study, we\'ll play you recordings of people from all over the world. They will either be <b>singing</b> or <b>speaking</b>. We\'ll ask you to tell us <b>who you think is listening</b>: a baby or an adult.<br><br>For example, if you hear someone singing a lullaby, you might answer that you think a <b>baby</b> is listening.<br><br>Try to answer as fast as you can!</p>',
  prompt1: ' ',
  prompt2: ' ',
  choices: ['Next']
};
var trainInfo2B = {
  type: 'html-button-response',
  stimulus: '<p align="left">First, let\'s practice! The first excerpt you will hear is a lullaby sung to a baby. So you should choose the <b>BABY</b> character for your response. Try to answer as fast as you can!</p>',
  prompt1: ' ',
  prompt2: ' ',
  choices: ['Let\'s begin!']
};



var trainData2B = [{stimulus:`${baseUrl}/quizzes/fc/audio/TOR47A.mp3`, data: imgData2[0]}];



var training2B = {
  timeline: [
    {
      type: 'audio-button-response-training',
      stimulus: jsPsych.timelineVariable('stimulus'),
      data: jsPsych.timelineVariable('data'),
      choices: [imgR[0], imgR[1]],
      prompt: '<p align="center">Someone is speaking or singing. Who do you think they are singing or speaking to?</p><p align="center">Tap the character being sung to!</p>',
      response_ends_trial: true,
          on_finish: function(data){
        data.correct1 = data.button_pressed == data.button;
        console.log(JSON.stringify(data));
        reactionT2 = data.rt/1000;
              console.log(reactionT2)
          },
    },
    {
      type: 'html-button-response',
      stimulus: function(){
        var correct = jsPsych.data.get().last(1).values()[0].correct1;
        var button = jsPsych.data.get().last(1).values()[0].button_pressed;
        if(correct == true && button== 0)
          {return `<br><br><img src="`+imgR[0]+`" width=300><img src=${baseUrl}/quizzes/fc/img/white.jpg width=300><br><div align="center"><font size=24 color="#00cc00">Correct!</font></div><br><div>You responded in `+reactionT2+`seconds.</div>`;}
        else if(correct == true && button== 1)
          {return `<br><br><img src=${baseUrl}/quizzes/fc/img/white.jpg width=300><img src="`+imgR[1]+`" width=300><br><div align="center"><font size=24 color="#00cc00">Correct!</font></div><br><div>You responded in `+reactionT2+` seconds.</div>`;}
        else if(correct == false && button==0)
          {return `<br><br><img src=${baseUrl}/quizzes/fc/img/incorrect.jpg" width=300><img src=${baseUrl}/quizzes/fc/img/white.jpg width=300><br><div align="center"><font size=24 color="red">Incorrect.</font></div><br><div>You responded in `+reactionT2+` seconds.<br>Try again!</div>`;}
        else if(correct == false && button==1)
          {return `<br><br><img src=${baseUrl}/quizzes/fc/img/white.jpg width=300><img src=${baseUrl}/quizzes/fc/img/incorrect.jpg width=300><br><div align="center"><font size=24 color="red">Incorrect.</font></div><br><div>You responded in `+reactionT2+` seconds.<br>Try again!</div>`;}
      },
      prompt1: ' ',
      prompt2: ' ',
      choices: ['Next']
    },
  ],
  timeline_variables: trainData2B,
  sample: {
    size: 1,
    type: 'without-replacement'
  }
};

var reTrain2B = {
  timeline: [training2B],
  loop_function: function(data){
    if(imgData2[1].button == data.values()[0].button_pressed){
      return true;
    } else { return false;}
  }
};

var trainInfo2A = {
  type: 'html-button-response',
  stimulus: '<p align="left">Let\'s practice a second time. This next excerpt will be directed toward an adult, so you should choose the <b>ADULT</b> character. Try to answer as quickly as possible!</p>',
  prompt1: ' ',
  prompt2: ' ',
  choices: ['Continue']
};
var trainData2A = [{stimulus: `${baseUrl}/quizzes/fc/audio/WEL10C.mp3` , data: imgData2[1]}];


var training2A = {
  timeline: [
    {
      type: 'audio-button-response-training',
      stimulus: jsPsych.timelineVariable('stimulus'),
      data: jsPsych.timelineVariable('data'),
      choices: [imgR[0], imgR[1]],
      prompt: '<p align="center">Someone is speaking or singing. Who do you think they are singing or speaking to?</p><p align="center">Tap the character being sung to!</p>',
      response_ends_trial: true,
          on_finish: function(data){
        data.correct1 = data.button_pressed == data.button;;
        console.log(JSON.stringify(data));
        reactionT2 = data.rt/1000;
              console.log(reactionT2)
          },
    },
    {
      type: 'html-button-response',
      stimulus: function(){
        var correct = jsPsych.data.get().last(1).values()[0].correct1;
        var button = jsPsych.data.get().last(1).values()[0].button_pressed;
        if(correct == true && button== 0)
          {return `<br><br><img src="`+imgR[0]+`" width=300><img src=${baseUrl}/quizzes/fc/img/white.jpg width=300><br><div align="center"><font size=24 color="#00cc00">Correct!</font><br>You responded in `+reactionT2+` seconds.</div>`;}
        else if(correct == true && button== 1)
          {return `<br><br><img src=${baseUrl}/quizzes/fc/img/white.jpg width=300><img src="`+imgR[1]+`" width=300><br><div align="center"><font size=24 color="#00cc00">Correct!</font><br>You responded in `+reactionT2+` seconds.</div>`;}
        else if(correct == false && button==0)
          {return `<br><br><img src=${baseUrl}/quizzes/fc/img/incorrect.jpg width=300><img src=${baseUrl}/quizzes/fc/img/white.jpg width=300><br><div align="center"><font size=24 color="red">Incorrect.</font><br>You responded in `+reactionT2+` seconds.<br>Try again!</div>`;}
        else if(correct == false && button==1)
          {return `<br><br><img src=${baseUrl}/quizzes/fc/img/white.jpg width=300><img src=${baseUrl}/quizzes/fc/img/incorrect.jpg width=300><br><div align="center"><font size=24 color="red">Incorrect.</font><br>You responded in `+reactionT2+` seconds.<br>Try again!</div>`;}
      },
      prompt1: ' ',
      prompt2: ' ',
      choices: ['Next']
    },
  ],
  timeline_variables: trainData2A,
  sample: {
    size: 1,
    type: 'without-replacement'
  }
};

var reTrain2A = {
  timeline: [training2A],
  loop_function: function(data){
    if(imgData2[0].button == data.values()[0].button_pressed){
      return true;
    } else { return false;}
  }
};


var ready2 = {
  type: 'html-button-response',
  stimulus: '<p align="left">You are now ready to begin the study!</p>',
  prompt1: ' ',
  prompt2: ' ',
  choices: ['Begin!']
};


var songTest2 = {
  timeline: [
    {
      type: 'audio-button-response',
      stimulus: jsPsych.timelineVariable('stimulus'),
      data: jsPsych.timelineVariable('data'),
      choices: [imgR[0], imgR[1]],
      prompt: '<p align="center">Someone is speaking or singing. Who do you think they are singing or speaking to?</p><p align="center">Tap the character being sung to!</p>',
      response_ends_trial: true,
          on_finish: function(data){
            data.correct = data.button_pressed == data.button;
            count = jsPsych.data.get().filter({correct: true}).count();
            reaction2 = data.rt/1000;
            console.log(count)
            console.log(reaction2)
          },
    },
    {
      type: 'html-button-response',
      stimulus: function(){
        var correct = jsPsych.data.get().last(1).values()[0].correct;
        var button = jsPsych.data.get().last(1).values()[0].button_pressed;
        if(correct == true && button== 0)
          {return `<br><br><img src="`+imgR[0]+`" width=300><img src=${baseUrl}/quizzes/fc/img/white.jpg width=300><div><font size=24 color="#00cc00">Correct!</font><br>You responded in `+reaction2+` seconds.</div>`;}
        else if(correct == true && button== 1)
          {return `<br><br><img src=${baseUrl}/quizzes/fc/img/white.jpg width=300><img src="`+imgR[1]+`" width=300><div><font size=24 color="#00cc00">Correct!</font><br>You responded in `+reaction2+` seconds.</div>`;}
        else if(correct == false && button==0)
          {return `<br><br><img src=${baseUrl}/quizzes/fc/img/incorrect.jpg width=300><img src=${baseUrl}/quizzes/fc/img/white.jpg width=300><div><font size=24 color="red">Incorrect.</font><br>You responded in `+reaction2+` seconds.</div>`;}
        else if(correct == false && button==1)
          {return `<br><br><img src=${baseUrl}/quizzes/fc/img/white.jpg width=300><img src=${baseUrl}/quizzes/fc/img/incorrect.jpg width=300><div><font size=24 color="red">Incorrect.</font><br>You responded in `+reaction2+` seconds.</div>`;}
      },
      on_finish: function(data){
        reactionMean = (jsPsych.data.get().filter({trial_type: 'audio-button-response'}).select('rt').mean())/1000;
        console.log(reactionMean);
      },
      prompt1: ' ',
      prompt2: ' ',
      choices: ['Next']
    },
  ],
  timeline_variables: song_list2,
  sample: {
    size: 16,
    type: 'without-replacement'
  },
};
let reacion2;




var social2 = {
  type:'display-prediction',
  prediction1:[' '], //depending on data format, may need to be wrapped in a function?
  prediction2:[' '],
  buttonText:'Submit',
  quizURL:'https://www.themusiclab.org', //this will be the quiz URL for sharing
  subjectLine: 'Guessing who is being sung or spoken to.',
  teaserPart1: function () {return '<div align="center" style="color:#008000; font-size:3em; line-height:60px">You got <b>'+count+'</b> out of 16 correct!</div><br><div align="center">Nice work! Your average speed of guessing was <b>'+reactionMean+' seconds</b>.</div>' /* You responded correctly more than '*/},
  teaserPart2: ' '/*of people who have taken this quiz. '*/,
  teaserPart3: ' Do you think you can do better than me?</p>',
  teaserShare: '<div align="center"><b>About this research:</b></div><div align="left">&emsp;The clips of singing and speaking you just heard were collected from all over the world from various cultures, including small-scale societies. We asked people to demonstrate how they would sing and speak to a fussy baby, and how they would sing and speak to an adult. With your help, we can then see if there is a noticable difference between the vocal sounds meant for a baby compared to the vocal sounds not meant for a baby, and if there are differences between cultures.</div><br><br><b>Click on a social media button to share your results!</b>',
  socialPost1: function () {return 'When guessing whether a baby or adult was being sung or spoken to, I got '+count+' correct! My average speed of guessing was '+reactionMean+' msecs.' /*I got more correct than '*/},
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
  return axiosIDS
        .post('/stimulusResponse', {
        user_id: self.props.user.profile.id,
        data_string: toSend,
        })    
  
};



var preload =  [song_list2[0].stimulus, song_list2[1].stimulus, song_list2[2].stimulus, song_list2[3].stimulus, song_list2[4].stimulus, song_list2[5].stimulus,
song_list2[6].stimulus, song_list2[7].stimulus, song_list2[8].stimulus, song_list2[9].stimulus, song_list2[10].stimulus, song_list2[11].stimulus, song_list2[12].stimulus,
song_list2[13].stimulus, song_list2[14].stimulus, song_list2[15].stimulus, song_list2[16].stimulus, song_list2[17].stimulus, song_list2[18].stimulus, song_list2[19].stimulus,
song_list2[20].stimulus, song_list2[21].stimulus, song_list2[22].stimulus, song_list2[23].stimulus, song_list2[24].stimulus, song_list2[25].stimulus, song_list2[26].stimulus,
song_list2[27].stimulus, song_list2[28].stimulus, song_list2[29].stimulus, song_list2[30].stimulus, song_list2[31].stimulus, song_list2[32].stimulus, song_list2[33].stimulus,
song_list2[34].stimulus, song_list2[35].stimulus, song_list2[36].stimulus, song_list2[37].stimulus, song_list2[38].stimulus, song_list2[39].stimulus, song_list2[40].stimulus,
song_list2[41].stimulus, song_list2[42].stimulus, song_list2[43].stimulus, song_list2[44].stimulus, song_list2[45].stimulus, song_list2[46].stimulus, song_list2[47].stimulus,
song_list2[48].stimulus, song_list2[49].stimulus, song_list2[50].stimulus, song_list2[51].stimulus, song_list2[52].stimulus, song_list2[53].stimulus, song_list2[54].stimulus,
song_list2[55].stimulus, song_list2[56].stimulus, song_list2[57].stimulus, song_list2[58].stimulus, song_list2[59].stimulus, song_list2[60].stimulus, song_list2[61].stimulus,
song_list2[62].stimulus, song_list2[63].stimulus, song_list2[64].stimulus, song_list2[65].stimulus, song_list2[66].stimulus, song_list2[67].stimulus, song_list2[68].stimulus,
song_list2[69].stimulus, song_list2[70].stimulus, song_list2[71].stimulus, song_list2[72].stimulus, song_list2[73].stimulus, song_list2[74].stimulus, song_list2[75].stimulus,
song_list2[76].stimulus, song_list2[77].stimulus, song_list2[78].stimulus, song_list2[79].stimulus, `${baseUrl}/quizzes/fc/audio/WEL10C.mp3`, `${baseUrl}/quizzes/fc/audio/TOR47A.mp3`];



new Promise((resolve, reject) => {
    


timeline.push(welcome2, intro2, trainInfo2B, reTrain2B, trainInfo2A, reTrain2A, ready2, songTest2, social2);


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
          preload_audio: preload,
          use_webaudio: false,
         display_element: this.refs.jsPsychTarget,
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
                <p className={s.title}>Who's Listening?</p>
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
