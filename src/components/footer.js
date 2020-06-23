import React from "react";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <h1 className="serv-h1">Contact us</h1>
      <br></br>
      <br></br>
      <div className="footer-out">
        <div className="footer-in">
          <h4 className="serv-h4"></h4>
          <p className="serv-txt">
            Address: 5249 Chesham Avenue Burnaby BC V5H 2L1
          </p>
          <p className="serv-txt">info@buildersbridge.com</p>
        </div>
        <div className="footer-in">
          <h4 className="serv-h4"></h4>

          <p className="serv-txt">Tel: 236-456-7890</p>
          <p className="serv-txt">Fax: 0987-654-321</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
