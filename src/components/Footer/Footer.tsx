import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3">
      <Container>
        <Row>
          <Col className="footer__item text-center">
            <a href="/privacy-policy" className="text-muted text-white">
              AGB
            </a>
          </Col>
          <Col className="footer__item text-center">
            <a href="/terms" className="text-muted text-white">
              Datenschutz
            </a>
          </Col>
          <Col className="footer__item text-center">
            <a href="/terms" className="text-muted text-white">
              Impressum
            </a>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="footer__copyright text-center">
            <span className="text-muted">&copy; {new Date().getFullYear()} absmartrepair</span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
