import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';
import s from './styles.css';
import {
  Row,
  Col,
  Image,
  ProgressBar,
  Table,
  Panel,
  Alert
} from 'react-bootstrap';
import Badges from '../Badges/index.js';
import VideoModal from '../VerbcornerLeaderboard/model.js';
import BadgeNotificationModal from '../../BadgeNotificationModal/model.js';

// const BADGEURLS = [
//   require('../../../img/quiz_badges/Blood_Magic/25.jpg'),
//   require('../../../img/quiz_badges/Blood_Magic/50.jpg'),
//   require('../../../img/quiz_badges/Blood_Magic/100.jpg'),
//   require('../../../img/quiz_badges/Blood_Magic/150.jpg')
// ];
// const BADGEURLDictionary = {
//   "5" : require('../../../img/quiz_badges/Blood_Magic/25.jpg'),
//   "10": require('../../../img/quiz_badges/Blood_Magic/50.jpg'),
//   "15": require('../../../img/quiz_badges/Blood_Magic/100.jpg'),
//   "20": require('../../../img/quiz_badges/Blood_Magic/150.jpg'),
// }

// const badgeBoundaries = ["5", "10", "15", "20"]

var badgeModal = {
  width: '100%',
  height: '100%',
  border: '2px solid lightGrey'
};

var badgePanel = {
  position: 'absolute',
  width: '100%',
  height: '100%'
};

var badgeDisplay = {
  width: '3.2em',
  marginRight: '0.5em'
};

var badgeNotificationModal = {
  width: '100%',
  height: "60%",
  border: '2px solid lightGrey',

};

var badgeNotificationPanel = {
  position: 'absolute',
  width: '100%',
  height: '100%'
}

class BadgeHolder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isBadgeHolderOpen: false,
      badgeEarned: false,
      handleUpdating: 0
    };
  }

  showBadgeHolder = () => {
    return (
      <VideoModal
        style={badgeModal}
        id="VideoModal"
        isOpen={this.state.isBadgeHolderOpen}
      >
        <Panel style={badgePanel}>
          <Panel.Body
            style={{
              position: 'absolute',
              top: '20%',
              margin: 'auto',
              textAlign: 'center'
            }}
          >
          {this.renderBadges(this.props.count, s.badgeDisplay)}
          </Panel.Body>
          {
            <Button
              style={{
                position: 'absolute',
                top: '94%',
                fontFamily: 'Ribeye Marrow'
              }}
              onClick={this.showBadges}
              id="video"
              bsStyle="warning"
              bsSize="small"
              block
            >
              Close Badge Holder
            </Button>
          }
        </Panel>
      </VideoModal>
    );
  };

  showBadges = () => {
    this.setState({ isBadgeHolderOpen: !this.state.isBadgeHolderOpen });
  };

  notifyBadgeEarned = () => {
    return (
      <BadgeNotificationModal
        style={badgeNotificationModal}
        id="VideoModal"
        isOpen={this.state.badgeEarned}
      >
        <Panel style={badgeNotificationPanel}>
          <div style = {{fontFamily: 'Ribeye Marrow'}}>Congratulations, that's {this.props.count} questions answered! </div>
          <div style = {{fontFamily: 'Ribeye Marrow'}}>Keep it up!</div>
          <Panel.Body
            style={{
              position: 'absolute',
              top: '18%',
              margin: 'auto',
              textAlign: 'center'
            }}
          >
          
          <img
            src={this.props.config.BADGEURLDictionary[String(this.props.count)]}
            width="85%"
          />
          </Panel.Body>
          {
            <Button
              style={{
                position: 'absolute',
                top: '91%',
                fontFamily: 'Ribeye Marrow'
              }}
              onClick={this.showBadgesNotification}
              id="video"
              bsStyle="warning"
              bsSize="small"
              block
            >
              Awesome!
            </Button>
          }
        </Panel>
      </BadgeNotificationModal>
    )}


  showBadgesNotification = () => {
    this.setState({ badgeEarned: !this.state.badgeEarned });
  };

  renderBadges(count, className) {
   let badgesToShow 
   

if (count<25){badgesToShow = 0} else if (count>=25 && count<50){badgesToShow=1} else if (count>=50 && count<100) {badgesToShow=2} else if (count>=100 && count<150) {badgesToShow=3} else if (count>=150 && count<200) {badgesToShow=4} else if (count>=200 && count<300) {badgesToShow=5} else if (count>=300 && count<400) {badgesToShow=6} else if (count>=400 && count<500) {badgesToShow=7} else if (count>=500 && count<750) {badgesToShow=8} else if (count>=750 && count<1000) {badgesToShow=9} else if (count>=1000) {badgesToShow=10}
      
    
    
    console.log(this.props.config.BADGEURLS.slice(0, badgesToShow))
    return(
      <div>
      {this.props.config.BADGEURLS.slice(0, badgesToShow).map((url, i) => {
        return(
          <img
            key={i}
            className={className}
            src={url}
          />
        )
      })}

      </div>
      )
  }

  // This section is for showing badge earning notifications by using component did update. 
  // Badges are earned for every five successfully answered questions. 

  componentDidUpdate(prevProps, prevState){
    // console.log(this.props.config)
    // console.log(prevProps.count % 5)

    // console.log(this.props.config.BADGEURLDictionary.hasOwnProperty((this.props.count)))

    if(this.props.config.BADGEURLDictionary.hasOwnProperty((this.props.count)) && this.state.handleUpdating == 0){
      console.log("Verify")
      this.setState({ badgeEarned: !this.state.badgeEarned });
      this.setState({ handleUpdating: 1})
      // console.log("new")
    }
    if(!this.props.config.BADGEURLDictionary.hasOwnProperty((this.props.count)) && this.state.handleUpdating == 1){
      // console.log("new")
      this.setState({ handleUpdating: 0})
    }
    
    // if(prevProps.count in badgeBoundaries){
    //   this.setState({ badgeEarned: !this.state.badgeEarned });
    //   this.setState({ handleUpdating: 1})
    //   console.log("Firing pen")
    // }
  }

  render() {

    const panelInstance = (
      <Panel onClick={this.showBadges}>
        <Panel.Body>
        {this.renderBadges(this.props.count,s.badge)}
        </Panel.Body>
      </Panel>
    );
    return (
      <div>
        {<div>{this.notifyBadgeEarned()}</div>}
        {<div>{this.showBadgeHolder()}</div>}
        <div>{panelInstance}</div>
      </div>
    );
  }
}
export default BadgeHolder;
