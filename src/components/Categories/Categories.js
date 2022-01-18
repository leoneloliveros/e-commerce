import { ListGroup } from "react-bootstrap";
//import { categoryData } from "../../mock/categoriesData";
import CategoryItem from "./CategoryItem";
import axios from 'axios';
import { useEffect, useState } from "react";

const Categories = () => {
    //const categories = categoryData;
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const url = "https://fakestoreapi.com/products/categories"
        axios.get(url)
        .then(res => {
            console.log(res.data);
            setCategories(res.data)
        })
    }, []);

    return (
        <div className="mt-5">
            <h3 className="category__title">Categorías</h3>
            <ListGroup defaultActiveKey="#link1">
                {categories.map((elem, index) => (
                    <CategoryItem
                        name={elem}
                        amount={0}
                        link={elem}
                        key={elem}
                    />
                ))}
            </ListGroup>
        </div>
    );
};

export default Categories;
