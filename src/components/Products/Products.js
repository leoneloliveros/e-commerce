import { Col, Container, Row } from "react-bootstrap";
import { products } from "./data";
import ProductCard from "./ProductCard";

const Products = () => {
    const allProducts = products;
    return (
        <div>
            <Container className="p-0 mb-5">
                <Row>
                    {allProducts.map((elem, index) => (
                        <Col lg="4" md="4" sm="6" xs="6" className="mt-5" key={index}>
                            <ProductCard
                                image={elem.image}
                                name={elem.name}
                                description={elem.description}
                                price={elem.price}                                
                            ></ProductCard>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Products;
