import * as f from "react-foundation";
import { Row, Col, Image, Panel, Media, Button } from "react-bootstrap";
import React, { PropTypes } from "react";
import s from "./styles.css";
import { Link } from "react-router";
import * as i from 'react-social-icons';

class QuizPage extends React.Component {
  render() {
    const babydescription = "We are now recruiting babies age 2 to 12 months for science 20 research about the world's music. In the study, babies listen to songs while we measure their heart rate, pupil dilation, gaze, motion, and more! We are conveniently located on Harvard's Cambridge campus, with free parking, and you can take home a Music Lab onesie or other cool prizes as a thank-you gift."
    if (!this.props.children) {
      return (
        <div id="page-wrap">
          <div>
            <Row>
              <Col>
              <div className={s.tan}>
                <p className={s.tan}>
                SAM UPDATE ME If you are reading this text, you are probably doing so on a device that plays music. You are probably able to hear and perceive that music and you probably can also produce music of your own, even if you've never had music lessons. You are probably motivated to engage with music on a regular basis, regardless of your cultural background, location in the world, or socioeconomic status. You have probably been this way your whole life.
                <br />
                <br />
                In the Music Lab, we're figuring out why the human mind is designed in such a way that all of the above is true. We do basic science, running experiments with typically developing people of all ages and in populations with genetic conditions. We focus in particular on infancy and on people who live in isolated small-scale societies around the world. We also work on large corpus studies of ethnographies and field recordings from the Natural History of Song project, which we host, and use those data in large-scale online experiments. 
                <br />
                <br />
                The Music Lab is the newest lab in the Department of Psychology at Harvard University. We are funded by the High-Risk, High-Reward program of the National Institutes of Health and by the Harvard Data Science Initiative. On this page, you can learn more about our work, download our papers, and (soon) participate in our research yourself!
                <br />
                </p>


              </div>
                <div className={s.blurb}>
                  <h2 className={s.sub}>
                    <strong>
                    Test Your Musical Knowledge
                    </strong>
                  </h2>
                </div>
              </Col>

              <Col md={4}>
                  <div>
                    <Panel bsStyle="info">
                      <Panel.Heading>
                        <a
                          className={s.title}
                        >
                        World Music Quiz
                        </a>


               <Link to="/quizzes/fc">
                    <Button className="pull-right" bsStyle="danger">Click here to play!</Button>
               </Link>


                      </Panel.Heading>
                        <Panel.Body className={s.quizbox}>
                          <p className={s.tan}>
                            <Image src={require("../../img/FC-icon-small.jpg")} className="img-thumbnail" responsive/>
                            <br />Listen to songs from around the world and guess what they are used for!{" "}
                            <br />
                              <strong>
                                This game takes about 13 minutes to complete.
                              </strong>
                          </p>
                          <div className={s.tan}>
                            <div className={s.vert}>
                              <nobr>
                                <span className={s.pad5}>
                                  <i.SocialIcon
                                    network="facebook"
                                    url="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fgameswithwords.org&t=GamesWithWords"
                                  />
                                </span>
                                <span className={s.pad5}>
                                  <i.SocialIcon
                                    network="twitter"
                                    url="https://twitter.com/intent/tweet?source=http%3A%2F%2Fgameswithwords.org&text=GamesWithWords:%20http%3A%2F%2Fgameswithwords.org"
                                  />
                                </span>
                                <span className={s.pad5}>
                                  <i.SocialIcon
                                    network="email"
                                    url="mailto:?subject=Check%20Out%20GamesWithWords&body=How%20good%20is%20your%20language%20sense%3F%20Find%20out%20by%20playing%20games%20while%20participating%20in%20cutting-edge%20research!:%20http%3A%2F%2Fgameswithwords.org"
                                  />
                                </span>
                              </nobr>
                            </div>
                          </div>
                        </Panel.Body>
                        <Panel.Footer>
                        </Panel.Footer>
                    </Panel>
                  </div>
                </Col>

                <Col md={4}>
                  <div>
                    <Panel bsStyle="info">
                      <Panel.Heading>
                        <a
                          className={s.title}
                        >
                          Synthesizer Game
                        </a>
                          <Link to="/quizzes/cb">
                    <Button className="pull-right" bsStyle="danger">Click here to play!</Button>
               </Link>
                      </Panel.Heading>
                      <Panel.Body className={s.quizbox}>
                        <p className={s.tan}>
                          <Image src={require("../../img/CB-icon2-small.jpg")} className="img-thumbnail" responsive/>
                          <br />Listen to some music and rate what you think it could be used for and how much you like it!{" "}
                          <br />
                            <strong>
                              This game takes about 14 minutes to complete.
                            </strong>
                        </p>
                        <div className={s.tan}>
                          <div className={s.vert}>
                            <nobr>
                              <span className={s.pad5}>
                                <i.SocialIcon
                                  network="facebook"
                                  url="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fgameswithwords.org&t=GamesWithWords"
                                />
                              </span>
                              <span className={s.pad5}>
                                <i.SocialIcon
                                  network="twitter"
                                  url="https://twitter.com/intent/tweet?source=http%3A%2F%2Fgameswithwords.org&text=GamesWithWords:%20http%3A%2F%2Fgameswithwords.org"
                                />
                              </span>
                              <span className={s.pad5}>
                                <i.SocialIcon
                                  network="email"
                                  url="mailto:?subject=Check%20Out%20GamesWithWords&body=How%20good%20is%20your%20language%20sense%3F%20Find%20out%20by%20playing%20games%20while%20participating%20in%20cutting-edge%20research!:%20http%3A%2F%2Fgameswithwords.org"
                                />
                              </span>
                            </nobr>
                          </div>
                        </div>
                      </Panel.Body>
                      <Panel.Footer>
                      </Panel.Footer>
                    </Panel>
                  </div>
                </Col>

                <Col md={4}>
                  <div>
                    <Panel bsStyle="info">
                      <Panel.Heading>
                      <a
                        className={s.title}
                      >
                      Who Is Listening?
                      </a>
                        <Link to="/quizzes/ids">
                    <Button className="pull-right" bsStyle="danger">Click here to play!</Button>
               </Link>
                    </Panel.Heading>
                    <Panel.Body className={s.quizbox}>
                  <p className={s.tan}>
                  <Image src={require("../../img/IDS-icon-small.jpg")} className="img-thumbnail" responsive/>
                    <br />Guess whether voice recordings of singing and speaking are meant for a baby or an adult!{" "}
                    <br />
                      <strong>
                        This game takes about 10 minutes to complete.
                      </strong>
                  </p>
                  <div className={s.tan}>
                    <div className={s.vert}>
                      <nobr>
                        <span className={s.pad5}>
                          <i.SocialIcon
                            network="facebook"
                            url="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fgameswithwords.org&t=GamesWithWords"
                          />
                        </span>
                        <span className={s.pad5}>
                          <i.SocialIcon
                            network="twitter"
                            url="https://twitter.com/intent/tweet?source=http%3A%2F%2Fgameswithwords.org&text=GamesWithWords:%20http%3A%2F%2Fgameswithwords.org"
                          />
                        </span>
                        <span className={s.pad5}>
                          <i.SocialIcon
                            network="email"
                            url="mailto:?subject=Check%20Out%20GamesWithWords&body=How%20good%20is%20your%20language%20sense%3F%20Find%20out%20by%20playing%20games%20while%20participating%20in%20cutting-edge%20research!:%20http%3A%2F%2Fgameswithwords.org"
                          />
                        </span>
                      </nobr>
                    </div>
                  </div>
                  </Panel.Body>
                  <Panel.Footer>
                  </Panel.Footer>
                </Panel>
              </div>
            </Col>
            <hr />
            </Row>


            <div>
            <Row>
            <Col>
              <div className={s.blue}>
                <h2 className={s.sub}>
                <strong>
                  Visit the music lab with your baby!
                </strong>
                </h2>
                      <p>
                      <strong>
                        You and your baby can help us find out!
                      </strong>
                      <br />
                      {babydescription}
                      <br />
                      <strong>
                      You can click <a href="https://www.themusiclab.org/signup">here</a> to sign up.
                      </strong>
                      </p>
                      <div>
                        <Image src={require("../../img/babystudy.png")} className={s.theophoto} responsive/>
                      </div>
                </div>
                </Col>
              </Row>

            </div>
            </div>
            </div>

      );
    }
    return this.props.children;
  }
}

export default QuizPage;
