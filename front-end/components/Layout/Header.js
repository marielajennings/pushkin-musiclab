import React from 'react';
import ReactDOM from 'react-dom';
import * as b from 'react-bootstrap';
import * as i from 'react-social-icons';
import s from './Header.css';
import l from './Layout.css';
import { Link } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

class Header extends React.Component {
  constructor() {
    super();
    this.state = { mobile: false };
    this.updateDimensions = this.updateDimensions.bind(this);
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  home() {
    if (window.location.pathname.toString().split('/')[1] === '') {
      return true;
    } else {
      return false;
    }
  }
  showDashboardOrLogIn = (loggedIn, mobile) => {
    if (mobile) {
      if (loggedIn) {
        return <font className={s.navLinks}>Dashboard</font>;
      } else {
        return <font className={s.navLinks}>log in</font>;
      }
    } else {
      if (loggedIn) {
        return <b.NavItem>Dashboard</b.NavItem>;
      } else {
        return <b.NavItem>log in</b.NavItem>;
      }
    }
  };
  updateDimensions() {
    if (window.innerWidth < 768) {
      this.setState({ mobile: true });
    } else {
      this.setState({ mobile: false });
    }
  }

  render() {
    const { auth, showForum, isAdmin } = this.props;
    let loggedIn;
    if (auth) {
      loggedIn = auth.isAuthenticated();
    }

      return (
        <div id="App">
        <header
          className={s.header}
          id="header"
          ref={node => (this.root = node)}
        >
          <b.Image
            src={require('../../img/themusiclablogo.png')}
            responsive
          />

          <b.Nav style={{
              margin: '0px',
              fontFamily: "'San Francisco'",
              fontSize: '20px',
              backgroundColor: '#2F2E2E'
            }}
            bsStyle="pills"
          >
          <b.NavItem href="https://www.themusiclab.org/">
            home
          </b.NavItem>
          <b.NavItem>
            about
          </b.NavItem>
          <b.NavItem>
            quizzes
          </b.NavItem>
          <b.NavItem>
            studies
          </b.NavItem>
          <b.NavItem>
            natural history of song
          </b.NavItem>
          {typeof loggedIn !== 'undefined' && (
              <LinkContainer to="/dashboard">
                {this.showDashboardOrLogIn(loggedIn)}
              </LinkContainer>
            )}
          </b.Nav>

          </header>
          </div>

      );
    }
  }

export default Header;
