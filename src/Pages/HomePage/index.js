import React, { Component } from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import SearchBarComponent from "../../Components/SearchBarComponent";
import CardComponent from "../../Components/CardComponent";
import ListComponent from "../../Components/ListComponent";
import IconicLinkComponent from "../../Components/IconicLinkComponent";
import CalendarComponent from "../../Components/CalendarComponent";
import "./HomePage.scss";
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["Market share", "Customer service", "Increase Efficiency"],
      links: [
        { text: "Graph", icon: "fa-pie-chart", bgColor: "#fe6f46" },
        { text: "Cloud", icon: "fa-cloud", bgColor: "blue" }
      ]
    };
  }
  render() {
    return (
      <div className="page-container">
        <Container>
          <Row>
            <Col xs={8}>
              <SearchBarComponent />
            </Col>
            <Col xs={4}>
              <i
                class="fa fa-2x fa-bell-o"
                style={{
                  float: "right",
                  position: "relative",
                  top: "calc(50% - 10px)"
                }}
                aria-hidden="true"
              ></i>
            </Col>
          </Row>
          <Row>
            <Col>
              <CardComponent
                header="What is SMART planning?"
                footer={
                  <div style={{ color: "#fe6f46", fontWeight: 900 }}>
                    <a>Learn more</a>
                    <i
                      style={{ paddingLeft: 5 }}
                      class="fa fa-sm fa-chevron-right"
                      aria-hidden="true"
                    ></i>
                  </div>
                }
                content={
                  <div>
                    Business goals should always be Specific, Measurable and
                    Achievable
                  </div>
                }
                right={this.state.links.map(item => (
                  <IconicLinkComponent
                    icon={item.icon}
                    text={item.text}
                    backgroundColor={item.bgColor}
                  />
                ))}
              ></CardComponent>
            </Col>
          </Row>
          <Row>
            <Col>
              <CalendarComponent />
            </Col>
          </Row>
          <Row>
            <Col>
              <CardComponent
                header="Goals achieved"
                content={<ListComponent list={this.state.list} />}
                right={
                  <img
                    class="overflow-image"
                    src="https://www.rasyotek.com.tr/Content/images/iep2.png"
                  ></img>
                }
              ></CardComponent>
            </Col>
            <Col>
              <CardComponent
                theme="dark"
                header="SMART Progress"
                content={
                  <div className='progressbarcontainer'>
                    <div>
                      <b>32.1%</b>
                      <ProgressBar variant="warning" now={32.1}></ProgressBar>
                    </div>
                    <div className="progressbarcontainer-list">
                      <ul>
                        <li>Archieved</li><li style={{paddingLeft:12,color:'#96989c'}}>Actived</li>
                      </ul>
                    </div>
                  </div>
                }
                left={
                  <img
                    class="overflow-image"
                    src="./Content/images/man.png"
                  ></img>
                }
              ></CardComponent>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default HomePage;
