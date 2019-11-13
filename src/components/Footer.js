import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Primate Land</h5>
            <p>
              Site sur les primates et autres formes chelou !!!
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Liens</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Accueil</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Gestion des primates</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;