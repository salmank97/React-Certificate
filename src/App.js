import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Container,Row,Col,Visible,Hidden} from 'react-grid-system';
import inventLogo from './assets/invent-logo.png'
import IBALogo from './assets/IBA-logo.png'

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
                  <img className="header-logo-center" src={IBALogo}/>
                </Col>
                <Col  md={1} sm={0} xs={0}>
                  
                </Col>
                <Col className="text-center" md={4} xs={4} sm={4}>
                  <img className="header-logo-left" src={inventLogo}/>
                </Col>
                <Col  md={1} sm={0} xs={0}>
                  
                </Col>
                <Col  md={3} xs={4} sm={4}>
                  Test3
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
