import { Card, Button, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faStar } from '@fortawesome/free-solid-svg-icons';
import ModalComponent from './Modal';

import { useState } from 'react';

function ProductsComponents() {
    const arrayProducts = [{
        src: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-1.jpg",
        title: "Hipster Ultimate",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pellentesque turpis mauris"
    },
    {
        src: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-2.jpg",
        title: "Hipster Ultimate",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pellentesque turpis mauris"
    },
    {
        src: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-3.jpg",
        title: "Hipster Ultimate",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pellentesque turpis mauris"
    },
    {
        src: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-4.jpg",
        title: "Hipster Ultimate",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pellentesque turpis mauris"
    },
    {
        src: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-5.jpg",
        title: "Hipster Ultimate",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pellentesque turpis mauris"
    },

    ]
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Row>

                {arrayProducts.map((product, index) => (
                    <Col lg={4} xl={4} sm={6} xs={6} md={4}  >
                        <Card style={{ width: '100%' ,height:'500px' }}  >
                            <Card.Img variant="top" src={product.src} />
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>
                                    {product.description}
                                </Card.Text>

                                <Button variant="primary" >$229 <FontAwesomeIcon icon={faShoppingCart} /></Button>
                                <Button variant="outline-dark" onClick={handleShow} idProducto={index}> Detalles</Button>
                                    

                            </Card.Body>
                        </Card>

                    </Col>)
                )}

            </Row>
            <ModalComponent show={show} handleClose={handleClose} false={false} url={"https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-1.jpg"}  />

       
        </>
    )
}

export default ProductsComponents;