import React from "react";
import { Nav } from "react-bootstrap";

const Menu = () => {
  return (
    <div className="menu">
      <Nav variant="pills" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="#header-slide">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#about">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#services">Services</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#products">Products & Pricing</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link href="#footer">Contact Us</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};
export default Menu;
