import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import DetailModal from "./DetailModal";

const ProductCard = (props) => {
    const [showInfo, setShowInfo] = useState(false);
    return (
        <>
            <Card>
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>{props.description}</Card.Text>
                    <Button variant="primary">${props.price}</Button> {' '}
                    <Button
                        variant="outline-secondary"
                        onClick={() => setShowInfo(true)}
                        
                    >
                        Detalles
                    </Button>
                    <DetailModal
                        show={showInfo}
                        title={props.name}
                        image={props.image}
                        onHide={() => setShowInfo(false)}
                    />
                </Card.Body>
            </Card>
        </>
    );
};

export default ProductCard;
