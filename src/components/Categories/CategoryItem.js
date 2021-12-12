import { Badge, ListGroup } from "react-bootstrap";

const CategoryItem = (props) => {
    return (
        <>
            <ListGroup.Item
                action
                href={props.link}
                className="d-flex justify-content-between align-items-start"
            >
                <div className="ms-2 me-auto">{props.name}</div>
                <Badge bg="secondary" pill>
                    {props.amount}
                </Badge>
            </ListGroup.Item>
        </>
    );
};

export default CategoryItem;