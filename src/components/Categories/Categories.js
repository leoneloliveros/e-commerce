import React from "react";
import { ListGroup } from "react-bootstrap";
import CategoryItem from "./CategoryItem";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Categories() {
  const [categories, setCategories] = useState([]);
  let { category } = useParams();
  console.log(category);
  useEffect(() => {
    const url = "https://fakestoreapi.com/products/categories";
    axios.get(url).then((res) => {
      res.data.unshift("Todas");
      setCategories(res.data);
    });
  }, []);
  return (
    <div className="mt-5">
      <h3 className="category__title">Categorías</h3>
      <ListGroup defaultActiveKey="#link1">
        {categories.map((categoryElem) => (
          <CategoryItem
            name={categoryElem}
            amount={0}
            active={
              category === categoryElem ||
              (!category && categoryElem === "Todas")
            }
            link={`${
              categoryElem === "Todas" ? "" : "/category/" + categoryElem
            }`}
            key={categoryElem}
          />
        ))}
      </ListGroup>
    </div>
  );
}

export default Categories;
