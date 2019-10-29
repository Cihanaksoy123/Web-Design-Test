import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./CardComponent.scss";
class CardComponent extends Component {
  render() {
    const { header, content, right,left,footer,theme } = this.props;
    const renderRight = () =>{
        if(right!=null)
        {
            return(<Col xs={5}><div className="customcard-right">{right}</div></Col>)
        }
    } ;
    const renderLeft = () =>{
        if(left!=null)
        {
            return(<Col xs={5}><div className="customcard-left">{left}</div></Col>)
        }
    } ;
    const renderFooter=()=>{
      if(footer!=null)
        {
            return(<div className="customcard-footer">{footer}</div>)
        }
    }
    return (
      <Container className={(theme=='dark'?"customcard-theme-dark":'')+" "+"customcard"}>
        <Row>
          {renderLeft()}
          <Col xs={(right==null && left==null)?12:7}>
            <div className="customcard-header title">
              <b>{header}</b>
            </div>
            <div className="customcard-content">{content}</div>
            {renderFooter()}
          </Col>
        {renderRight()}
        </Row>
      </Container>
    );
  }
}
export default CardComponent;
