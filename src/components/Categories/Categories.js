import { ListGroup } from "react-bootstrap";
import CategoryItem from "./CategoryItem";

const Categories = () => {
    
    return (
        <div className="mt-5">
            <h3 className="category__title">Categorías</h3>
            <ListGroup defaultActiveKey="#link1">
                <CategoryItem name="Todos" amount="100" link="#link1"></CategoryItem>
                <CategoryItem name="Hombre" amount="4" link="#link2"></CategoryItem>
                <CategoryItem name="Mujer" amount="12" link="#link3"></CategoryItem>
                <CategoryItem name="Hipster" amount="24" link="#link4"></CategoryItem>
                <CategoryItem name="Metal" amount="6" link="#link5"></CategoryItem>
                <CategoryItem name="Universidad" amount="5" link="#link6"></CategoryItem>
                <CategoryItem name="Deportiva" amount="8" link="#link7"></CategoryItem>
                <CategoryItem name="Rayas" amount="11" link="#link8"></CategoryItem>
                <CategoryItem name="Apretada" amount="19" link="#link9"></CategoryItem>                
            </ListGroup>
        </div>
    );
};

export default Categories;
