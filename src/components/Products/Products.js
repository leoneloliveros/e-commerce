import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useStateParams } from "../../ParamsContext";
//import { productsData } from "../../mock/productsData";
import ProductCard from "./ProductCard";

const Products = ({searchParametes}) => {
    //const allProducts = productsData;
    let { category } = useParams();
    const [products, setProducts] = useState([]);
    const { params } = useStateParams();

    useEffect(() => {
        let url = "https://fakestoreapi.com/products";
        if(category)
            url = `${url}/category/${category}`;
        if(params.sort)
            url = `${url}?sort=${params.sort}`; 
        axios.get(url)
        .then(res => {
            setProducts(res.data);
        })
    }, [category, params]);
    return (
        <div>
            <Container className="p-0 mb-5">
                <Row>
                    {products.map((elem) => (
                        <Col lg="4" md="4" sm="6" xs="6" className="mt-3" key={elem.id}>
                            <ProductCard
                                image={elem.image}
                                name={elem.title}
                                description={elem.description}
                                price={elem.price}
                                category={elem.category}                              
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Products;
