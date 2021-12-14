import { ListGroup } from "react-bootstrap";
import { categoryData } from "../../mock/categoriesData";
import CategoryItem from "./CategoryItem";

const Categories = () => {
    const categories = categoryData;
    return (
        <div className="mt-5">
            <h3 className="category__title">Categorías</h3>
            <ListGroup defaultActiveKey="#link1">
                {categories.map((elem, index) => (
                    <CategoryItem
                        name={elem.name}
                        amount={elem.amount}
                        link={elem.link}
                        key={index}
                    />
                ))}
            </ListGroup>
        </div>
    );
};

export default Categories;
