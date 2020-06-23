import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Services = () => {
  return (
    <div className="services" id="services">
      <h1 className="serv-h1">Services</h1>
      <h5 className="serv-txt2">
        Builders’ Bridge is a marketplace that provides highest excellence and
        performance services in the field of construction
      </h5>
      <Container>
        <Row>
          <Col>
            <div className="col-content">
              <img className="ser-imgs" src="./imgs/services-1.jpg" />
              <h4 className="serv-h4">Recommended Business Listings & Online Presence</h4>
              <p className="serv-txt">
                We help to connect the service providers to service seekers in
                the construction industry.
              </p>
            </div>
          </Col>

          <Col>
            <div className="col-content">
              <img className="ser-imgs" src="./imgs/services-2.jpeg" />
              <h4 className="serv-h4">Email, SMS Marketing and Banner Ads</h4>
              <p className="serv-txt"> 
                We advertise and market the services provided by the service
                providers in the construction industry.
              </p>
            </div>
          </Col>

          <Col>
            <div className="col-content">
              <img className="ser-imgs" src="./imgs/services-3.jpg" />
              <h4 className="serv-h4">Priority Listings</h4>
              <p className="serv-txt">
                We have three different plans and we advertise the service of
                the service providers based on their subscription plans.
              </p>
              
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Services;
