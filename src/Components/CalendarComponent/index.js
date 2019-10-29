import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./CalendarComponent.scss";

class CalendarComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dates:
        [
          { day: '5', name: 'Mo', active: false }, { day: '6', name: 'Tu', active: false },
          { day: '7', name: 'We', active: true }, { day: '8', name: 'Th', active: false },
          { day: '9', name: 'Fr', active: false }, { day: '10', name: 'Sa', active: false },
          { day: '11', name: 'Su', active: false }
        ]
    }
  }
  render() {
    return (
      <div>
        <Container>
          <Row className='title'>
            <Col xs={9}>
              <b style={{ paddingRight: 10 }}>5-11 August</b>
              <button class="button button-direction button-themedark">
                <i class="fa fa-xs fa-chevron-left" aria-hidden="true"></i>
                <i class="fa fa-xs fa-chevron-right" aria-hidden="true"></i>
              </button>
            </Col>
            <Col xs={3}>
            <div className="rightalign">
              <button class="button button-selection button-themelight">
                Week
                <i class="fa fa-xs fa-chevron-down" aria-hidden="true"></i>
              </button>
              </div>
            </Col>
          </Row>
          <Row className="calendarcontainer">
            <Col  xs={9}>
              <div className="timeline" >
                {this.state.dates.map(item => (<div className={'timeline-item' + ' ' + (item.active ? 'active-date' : '')}>
                  <b>{item.name}</b>
                  <b>{item.day}</b>
                </div>))}
              </div>
            </Col>
            <Col xs={3}>
              <div className="calender-buttoncontainer">
                <button style={{color:'blue',borderColor:'blue',marginTop:5}} class="button button-themelight">
                  In Progress
                  </button>
              </div>
            </Col>
          </Row>
          <Row>
            <Col></Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default CalendarComponent;
