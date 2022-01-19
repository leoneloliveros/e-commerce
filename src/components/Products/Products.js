import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams, useSearchParams } from "react-router-dom";
//import { productsData } from "../../mock/productsData";
import ProductCard from "./ProductCard";

const Products = () => {
    //const allProducts = productsData;
    let { category } = useParams();
    let [searchParams] = useSearchParams();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        let url = "https://fakestoreapi.com/products";
        if(category)
            url = `${url}/category/${category}`;
        if(searchParams.get("sort"))
            url = `${url}?sort=${searchParams.get("sort")}`; 

        axios.get(url)
        .then(res => {
            setProducts(res.data);
        })
    }, [category, searchParams]);
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
