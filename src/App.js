import React from 'react';
import './App.scss';
import {Container,Row,Col} from'react-bootstrap'
import LeftMenuComponent from './Components/LeftMenuComponent'
import HomePage from './Pages/HomePage'
import RightSideComponent from './Components/RightSideComponent'

function App() {
  return (
    <div className="App">
      <Container className='main-container'>
        <Row className='main-container-row'>
          <Col className='customblock left-customblock' xs={1}><LeftMenuComponent/></Col>
          <Col className='customblock content-customblock' xs={8}><HomePage/></Col>
          <Col className='customblock right-customblock' xs={3}><RightSideComponent/></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
