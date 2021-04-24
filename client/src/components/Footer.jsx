import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import '../style/style.css';

const FooterPage = () => {
  return (
<div className="FooterPage">
<MDBFooter className= "font-small pt-4 mt-4 boxxx ">
  <MDBContainer fluid className="text-center text-md-left">
    <MDBRow>
      <MDBCol md="6">
        <h5 className="title">Contact us</h5>
        <p className="title">
          Contact Info
        </p>
      </MDBCol>
      <MDBCol md="6">
        <h5 className="title">Links</h5>
        <ul className="title">
          <li className="list-unstyled">
            <a href="#!">Link 1</a>
          </li>
          <li className="list-unstyled">
            <a href="#!">Link 2</a>
          </li>
        </ul>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
  <div className="footer-copyright text-center py-3">
    <MDBContainer fluid>
      &copy; {new Date().getFullYear()} Copyright: <a>FaceMaskCheck Pty Ltd </a>
    </MDBContainer>
  </div>
</MDBFooter></div>
  );
}

export default FooterPage;
