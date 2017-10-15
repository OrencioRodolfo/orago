import React, { Component } from 'react';
import styled from 'styled-components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { getAbout } from '../../../../actions';
import { media } from '../../../../theme/style-utils';
import Header from '../Header/Header';
import Subhead from '../Subhead/Subhead';
import Navigation from '../Navigation/Navigation';
import CommitHistory from '../CommitHistory/CommitHistory';
import Footer from '../Footer/Footer';
import { fetchAbout } from '../../services/about';

const HomeContainer = styled.div`
  font-family: ${props => props.theme.fontFamily('primary')};
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const MainContent = styled.div`
  max-width: 1012px;
  width: 100%;
  box-sizing: border-box;
  padding: 0 12px;
  margin: 0 auto;
  flex-grow: 1;

  ${media.phone`
    padding: 0;
  `}
`;

const Desc = styled.p`
  ${props => props.theme.textSetting('nr')};

  ${media.phone`
    display: none;
  `}
`;

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

class Home extends Component {
  componentDidMount() {
    fetchAbout().then((response) => {
      this.props.getAbout(response);
    });
  }

  render() {
    return (
      <HomeContainer>
        <Header />
        <Subhead />
        <Router>
          <div>
            <MainContent>
              <Desc>{this.props.description}</Desc>
              <Navigation />
              <Route path="/commits" component={CommitHistory} />
              <Route path="/organizations" component={About} />
              <Route path="/repos" component={CommitHistory} />
            </MainContent>
          </div>
        </Router>
        <Footer />
      </HomeContainer>
    );
  }
}

Home.propTypes = {
  getAbout: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired,
};

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    getAbout,
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    description: state.about.description,
  };
}

export default connect(mapStateToProps, matchDispatchToProps)(Home);

export {
  Home,
};
