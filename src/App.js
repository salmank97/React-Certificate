import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Container,Row,Col,Visible,Hidden} from 'react-grid-system';
import inventLogo from './assets/invent-logo.png'
import IBALogo from './assets/IBA-logo.png'
import ibaesLogo from './assets/ibaes-logo.png'

class App extends Component {
  render() {
    return (
      <div>
        {/* <header className="App-header">
          Hello
        </header> */}
        <div>
          <div className="cert-border">
            <Container>
              <Row>
                <Col  md={3} xs={4} sm={4}>
                  <img className="header-logo-left" src={IBALogo}/>
                </Col>
                <Hidden sm xs>
                <Col  md={1} sm={0} xs={0}>
                  
                </Col>
                </Hidden>
                <Col className="text-center" md={4} xs={4} sm={4}>
                  <img className="header-logo-center" src={inventLogo}/>
                </Col>
                <Hidden sm xs>
                <Col  md={1} sm={0} xs={0}>
                  
                </Col>
                </Hidden>
                <Col  md={3} xs={4} sm={4}>
                  <img className="header-logo-right" src={ibaesLogo}/>
                </Col>
                </Row>
                </Container>
            <div>
              <h3 className="text-center text-uppercase">This certificate is awarded to</h3>
            </div>
            <div className="participant-placeholder text-center">
              <p>Khwaja Abdul Sami</p>
            </div>
            <div>
              <h3 className="text-center text-uppercase">Of Team</h3>
            </div>
            <div className="participant-placeholder text-center">
              <p>Utopians</p>
            </div>

          
            {/* <div>
              <p className="text-center">for participation and remarkable contribution towards</p>
              <p className="text-center">INVENT 2019 - THE ENTREPRENEURIAL CHALLENGE</p>
              <p className="text-center">organized by IBA Entrepreneurship Society</p>
              <p className="text-center">At IBA Karachi from 19th-21st April 2019</p>
            </div> */}

          </div>
        </div>
      </div>
    );
  }
}

export default App;
