import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Products = () => {
  return (
    <div className="products" id="products">
      <br></br>
      <br></br>
      <h1 className="serv-h1">Products & Pricing:</h1>
      <div className="about-sec">
        <h3 className="serv-h4">The Product</h3>
        <p className="serv-txt">
          Builders’ Bridge will provide an unprecedented service, through a web
          interface, which links people from different parts of the world who
          have a need for construction services. We will provide services such
          as recommended business listing, email and SMS marketing, banner ads,
          and online presence. This will be offered through the sale of
          subscriptions, which are categorized into Silver Builder, Gold
          Builder, and Platinum Builder. Our value proposition is that we will
          provide online visibility to the businesses on our website and not
          just help them sell their products and also create an avenue for
          building lasting relationships between these businesses and their
          potential customers without charging any commission. Our target market
          will be construction service providers as well as construction
          professionals. It will be segmented geographically in 3 countries,
          that is, Canada (Vancouver), Dubai (Dubai Industrial Park) and India
          (Mumbai-Pune). We will generate visibility and market control using a
          pull strategy, which involves a combination of targeted advertisement,
          networking, and website enhancement.
        </p>
      </div>

      <div className="price" id="price">
        <h3 className="serv-h4">Pricing</h3>
        <h5 className="serv-txt2">Our products will be prized as follows</h5>
        <Container>
          <Row>
            <Col>
              <div className="col-content">
                <img className="ser-imgs" src="./imgs/products-1.jpg" />
                <h4 className="serv-h4">Silver Builder</h4>
                <p className="serv-txt">$150 per month</p>
              </div>
            </Col>

            <Col>
              <div className="col-content">
                <img className="ser-imgs" src="./imgs/products-2.jpg" />
                <h4 className="serv-h4">Gold Builder </h4>
                <p className="serv-txt">$350 per month</p>
              </div>
            </Col>

            <Col>
              <div className="col-content">
                <img className="ser-imgs" src="./imgs/products-3.jpg" />
                <h4 className="serv-h4">Platinum Builder</h4>
                <p className="serv-txt">$475 per month</p>
              </div>
            </Col>
          </Row>
        </Container>
        <h3 className="serv-h4">
          Our channel of distribution will be our official website and mobile
          app.
        </h3>
        <br></br>
        <br></br>
      </div>
    </div>
  );
};
export default Products;
