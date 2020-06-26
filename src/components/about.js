import React from "react";

const About = () => {
  return (
    <div className="about" id="about">
      <h1 className="about-head">About</h1>

      <div className="about-sec">
        <h2 className="about-h">Company History</h2>
        <p className="about-txt">
          Builders’ Connect is a tech company established in May 2020. It was
          started by four friends (the co-owners) who saw the need to create an
          online marketplace that will bridge the gap between construction
          professionals as well as construction service providers and their
          target market regardless of their location. These friends currently
          make up the management of the company.
        </p>
      </div>

      <div className="about-sec">
        <h2 className="about-h">Vision</h2>
        <p className="about-txt">
          The company’s vision is to become the ultimate provider of a world
          class online interface that bridges the gap between construction
          service providers and a vast range of consumers in Canada, Dubai,
          India and the rest of the world.
        </p>
      </div>

      <div className="about-sec">
        <h2 className="about-h">Mission</h2>
        <p className="about-txt">
          Builders’ Connect seeks to bring construction consumers closer to their
          construction needs with unparalleled precision and flexibility, and
          not compromising on quality.
        </p>
      </div>
    </div>
  );
};
export default About;
