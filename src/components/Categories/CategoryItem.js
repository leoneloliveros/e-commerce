import { Badge, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const CategoryItem = (props) => {
    return (
        <>
            <ListGroup.Item
                className="d-flex justify-content-between align-items-start"
            >
                <Link to={props.link} className="ms-2 me-auto">
                    {props.name}
                </Link>
                <Badge bg="secondary" pill>
                    {props.amount}
                </Badge>
            </ListGroup.Item>
        </>
    );
};

export default CategoryItem;