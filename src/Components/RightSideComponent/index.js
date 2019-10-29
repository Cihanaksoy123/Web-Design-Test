import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import './RightSideComponent.scss'
import CardComponent from '../CardComponent' 

class RightSideComponent extends Component {
  render() {
    return (
      <div class="rightside">
        <Container>
          <Row>
            <Col>
                <img className='imageprofile' src='./Content/images/profile.jpg'/>
                <span style={{paddingLeft: 10}}>Banifaje Estanji</span>
            </Col>
          </Row>
          <Row>
            <Col>
                <div className='poster'>
                    <img className='imageposter' src='./Content/images/posterman.png'/>
                </div>
            </Col>
          </Row>
          <Row>
            <Col>
            <CardComponent header='Welcome To SMART'
             content='Goal setting and goal management software for high achievers.'
             footer={
               <button style={{width:130,height:55}} className='button button-themedark'>
                 Get Started
               </button>
             }
            >

            </CardComponent>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default RightSideComponent;
