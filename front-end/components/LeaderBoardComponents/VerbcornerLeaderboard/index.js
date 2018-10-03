import React from "react";
import { Button } from "react-bootstrap";
import s from "./styles.css";
import { Row, Col, Image, ProgressBar, Table, Badge } from "react-bootstrap";
import VideoModal from "./model.js";
import LeaderBoardRow from "../LeaderBoardRow/index.js";
import BadgeHolder from "../BadgeHolder/index.js";
import localAxios from "../../../actions/localAxios";
import { flatten, orderBy } from "lodash";

var videoModal = {
  width: "auto",
  height: "auto"
};

class VerbcornerLeaderboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVideoModalOpen: false,
      isTextModalOpen: false,
      badgeHasBeenEarned: false,
      users: [],
      personalBadges: [],
      totalScore: 0,
    };
  }

  componentDidMount() {
    // load the data, for the leaderboard for that specific quiz
    Promise.all(
      this.props.quiz.map(quiz => {
        return localAxios
          .get(`/verbcorner/leaderboard`, {
            params: {
              quiz
            }
          })
          .then(res => res.data);
      })
    ).then(data => {
      let scores = flatten(data);
      scores = scores.reduce((acc, curr) => {
        acc.push(curr.data);
        return acc;
      }, []);
      scores = flatten(scores);
      scores = scores.reduce((acc, curr) => {
        if (acc[curr.userName]) {
          acc[curr.userName] = acc[curr.userName] + curr.response_count;
        } else {
          acc[curr.userName] = curr.response_count;
        }
        return acc;
      }, {});
      const arr = Object.keys(scores).map(key => {
        return {
          userName: key,
          response_count: parseInt(scores[key])
        };
      });
      console.log(arr);
      const allScores = orderBy(arr, ["response_count", "userName"], "desc");
      this.setState({ users: allScores });
    });

    // Load progress bar data
    Promise.all(
      this.props.quiz.map(quiz => {
        return localAxios
          .get(`/verbcorner/progress`, {
            params: {
              quiz
            }
          })
          .then(res => res.data);
      })
    )

    Promise.all(
      this.props.quiz.map(quiz => {
        return localAxios
          .get(`/verbcorner/badges`, {
            params: {
              quiz
            }
          })
          .then(res => res.data);
          })
        ).then(data => {
          console.log(data)
        })
  }


  // Video Modal functions

  showVideoPopUp = () => {
    return (
      <VideoModal
        style={videoModal}
        id="VideoModal"
        isOpen={this.state.isVideoModalOpen}
      >
        <div>
          <video controls autoPlay src={this.props.videoSource}>
            {" "}
          </video>
          {<button onClick={this.onVideoChange}>Close</button>}
        </div>
      </VideoModal>
    );
  };

  onVideoChange = () => {
    this.setState({ isVideoModalOpen: !this.state.isVideoModalOpen });
  };

  // Text modal functions

  showTextPopUp = () => {
    return (
      <VideoModal
        style={videoModal}
        id="TextModal"
        isOpen={this.state.isTextModalOpen}
      >
        <div>
          {this.props.textInstructions}
          {<button onClick={this.onTextChange}>Close</button>}
        </div>
      </VideoModal>
    );
  };

  onTextChange = () => {
    this.setState({ isTextModalOpen: !this.state.isTextModalOpen });
  };

  rows = () => {
    let firstComponent = this.state.users.map((user, index) => (
      <LeaderBoardRow
        key = {index}
        position={index}
        userName={user.userName}
        score={user.response_count}
      />
    ));

    for (var i = firstComponent.length; i < 10; i++) {
      firstComponent.push(
        <LeaderBoardRow
        key = {i}
        position={i}
        userName={" "}
        score={" "}
      />
      )
    }

    return firstComponent

  };

  // componentDidUpdate(){
  //     Promise.all(
  //       this.props.quiz.map(quiz => {
  //         return localAxios
  //           .get(`/verbcorner/leaderboard`, {
  //             params: {
  //               quiz
  //             }
  //           })
  //           .then(res => res.data);
  //       })
  //     ).then(data => {
  //       let scores = flatten(data);
  //       scores = scores.reduce((acc, curr) => {
  //         acc.push(curr.data);
  //         return acc;
  //       }, []);
  //       scores = flatten(scores);
  //       scores = scores.reduce((acc, curr) => {
  //         if (acc[curr.userName]) {
  //           acc[curr.userName] = acc[curr.userName] + curr.response_count;
  //         } else {
  //           acc[curr.userName] = curr.response_count;
  //         }
  //         return acc;
  //       }, {});
  //       const arr = Object.keys(scores).map(key => {
  //         return {
  //           userName: key,
  //           response_count: parseInt(scores[key])
  //         };
  //       });
  //       const allScores = orderBy(arr, ["response_count", "userName"], "desc");
  //       this.setState({ users: allScores });
  //     });

  //     // Load progress bar data
  //     Promise.all(
  //       this.props.quiz.map(quiz => {
          
  //         return localAxios
  //           .get(`/verbcorner/progress`, {
  //             params: {
  //               quiz
  //             }
  //           })
  //           .then(res => res.data);
  //       })
  //     ).then(data => {
  //       let scores = flatten(data);
  //       scores = scores.reduce((acc, curr) => {
  //         acc.push(curr.data);
  //         // console.log(acc)
  //         this.setState({ accArray: acc });
  //         return acc;
  //       }, []);
        
  //     })
  //     this.countScores()
  // }

  // countScores = () => {
  //   const totalScore = this.state.accArray[0].map(x => parseInt(x.response_count))
  //   const reducer = (accumulator, currentValue) => accumulator + currentValue;
  //   this.setState({ total: totalScore.reduce(reducer) });
  //   return totalScore
  // }

  render() {
    const now = 60;
    // console.log(this.props);
    return (
      <div>
        <div className={s.monitorWrapper}>

          {this.props.showVideo && (
            <div>
              <div>{this.showVideoPopUp()}</div>
              <Button
                className={s.instructionButton}
                onClick={this.onVideoChange}
                id="video"
                bsStyle="primary"
                bsSize="small"
                block
              >
                Review Video Instructions
              </Button>
            </div>
          )}
          <h5 style={{ fontFamily: "Ribeye Marrow" }}>Progress</h5>
          <div className={s.progressBarWrapper}>
            <ProgressBar
              striped
              bsClass={s.progressBarCustom}
              bsStyle="warning"
              active
              now={60}
              label={`${now}%`}
            />
          </div>

          <h5 style={{ fontFamily: "Ribeye Marrow" }}>Leaderboard</h5>
          <div className={s.leaderBoardWrapper}>
            <Table responsive striped condensed hover bordered>
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>User</th>
                  <th>Score</th>
                </tr>
              </thead>
              {<tbody>{this.rows()}</tbody>}
            </Table>
          </div>

          <h5 style={{ fontFamily: "Ribeye Marrow" }}>Badges Earned</h5>
          <div className={s.BadgeHolder}>
            <BadgeHolder config = {this.props.config} count={this.props.count}/>
          </div>
          {this.props.showInstructions && (
            <div>
              <div>{this.showTextPopUp()}</div>
              <Button
                className={s.instructionButton}
                onClick={this.onTextChange}
                id="video"
                bsStyle="primary"
                bsSize="small"
                block
              >
                Review Text Instructions{" "}
              </Button>
            </div>
          )}
        </div>
      </div>
    );
  }
}
VerbcornerLeaderboard.propTypes = {
  showInstructions: React.PropTypes.bool,
  showVideo: React.PropTypes.bool
};
export default VerbcornerLeaderboard;
