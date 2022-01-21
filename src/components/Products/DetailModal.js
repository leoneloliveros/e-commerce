import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  FormControl,
  Modal,
  Row,
  Tab,
  Tabs,
} from "react-bootstrap";
import { BsFillHeartFill, BsStar, BsStarFill } from "react-icons/bs";
/* import Comments from "./Comments"; */

const DetailModal = (props) => {
  return (
    <>
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <Alert variant="primary">
                        <BsFillExclamationCircleFill></BsFillExclamationCircleFill>
                        <span className="m-left-text">
                            Este producto está agotado
                        </span>
                    </Alert> */}
          <Container>
            <Row>
              <Col lg={6}>
                <Card>
                  <Card.Img variant="top" src={props.image} />
                </Card>
              </Col>
              <Col lg={6}>
                <p className="detail__modal">
                  Precio: <b>${props.price}</b>
                </p>
                <p className="detail__modal">
                  Calificación:
                  <BsStarFill></BsStarFill>
                  <BsStarFill></BsStarFill>
                  <BsStarFill></BsStarFill>
                  <BsStarFill></BsStarFill>
                  <BsStar></BsStar>
                </p>
                <div className="detail__modal">
                  <Badge bg="warning" text="dark">
                    {props.category}
                  </Badge>
                  {/* <Badge
                                        bg="secondary"
                                        className="m-left-text"
                                    >
                                        Deportiva
                                    </Badge> */}{" "}
                </div>

                <p className="detail__modal__fav">
                  <BsFillHeartFill></BsFillHeartFill>
                  <span className="detail__modal__fav__text">
                    Agregar a los deseos
                  </span>
                </p>
              </Col>
            </Row>
            <Row className="mt-2">
              <Col lg="12">
                <Tabs
                  defaultActiveKey="description"
                  id="uncontrolled-tab-example"
                  className="mb-3"
                >
                  <Tab eventKey="description" title="Descripción">
                    <p>{props.description}</p>
                  </Tab>
                  <Tab eventKey="comments" title="Comentarios">
                    {/* <Comments
                                            title="Germán Escobar comentó hace dos días"
                                            comment="Esta camisa está increíble, la quiero!"
                                        ></Comments> */}
                    <FormControl
                      className="mt-2"
                      as="textarea"
                      aria-label="With textarea"
                      placeholder="Ingresa tu comentario"
                    />
                  </Tab>
                </Tabs>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.onHide}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={props.onHide}>
            Comprar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DetailModal;
