import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import RestrictedContainer from '../../../../components/Containers/Restricited/Restricited';
import Header from '../Header/Header';
import Subhead from '../Subhead/Subhead';
import Footer from '../Footer/Footer';
import * as theme from '../../../../theme';

const AppContainer = styled.div`
  font-family: ${props => props.theme.fontFamily('primary')};
  display: flex;
  flex-direction: column;
  height: 100vh;
  
  > .main-container {
    flex-grow: 1;
    display: flex;
    align-items: center;
  }
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <AppContainer>
      <Header />
      <Subhead />
      <RestrictedContainer className="main-container">Rodolfo Gonçalves</RestrictedContainer>
      <Footer />
    </AppContainer>
  </ThemeProvider>
);

export default App;
