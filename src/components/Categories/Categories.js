import React from 'react';
import { ListGroup } from "react-bootstrap";
//import { categoryData } from "../../mock/categoriesData";
import CategoryItem from "./CategoryItem";
import axios from 'axios';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Categories() {
    //const categories = categoryData;
    const [categories, setCategories] = useState([]);
    let { category } = useParams();
    useEffect(() => {
        const url = "https://fakestoreapi.com/products/categories"
        axios.get(url)
        .then(res => {
            setCategories(res.data)
        })
    }, []);

    return (
        <div className="mt-5">
            <h3 className="category__title">Categorías</h3>
            <ListGroup defaultActiveKey="#link1">
                <CategoryItem
                    name={"Todas"}
                    amount={0}
                    link={""}
                    active={category === undefined}
                />
                {categories.map((categoryElem) => (
                    <CategoryItem
                        name={categoryElem}
                        amount={0}
                        active={category === categoryElem}
                        link={`/category/${categoryElem}`}
                        key={categoryElem}
                    />
                ))}
            </ListGroup>
        </div>
    );
};

export default Categories;
