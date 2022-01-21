import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import DetailModal from "./DetailModal";

const ProductCard = (props) => {
  const [showInfo, setShowInfo] = useState(false);
  const styles = {
    image: {
      maxWidth: "100%",
      maxHeight: "200px",
      width: "fit-content",
      height: "auto",
      alignSelf: "center",
    },
  };
  return (
    <>
      <Card style={{ height: "100%" }}>
        <Card.Img variant="top" src={props.image} style={styles.image} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <Button variant="primary" className="mb-1">
            ${props.price}
          </Button>{" "}
          <Button
            variant="outline-secondary"
            onClick={() => setShowInfo(true)}
            className="mb-1"
          >
            Detalles
          </Button>
          <DetailModal
            show={showInfo}
            title={props.name}
            image={props.image}
            description={props.description}
            price={props.price}
            category={props.category}
            onHide={() => setShowInfo(false)}
          />
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductCard;
