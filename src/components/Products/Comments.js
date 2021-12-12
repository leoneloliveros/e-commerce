import { Card } from "react-bootstrap";

const Comments = (props) => {
    return (
        <>
            <Card>
                <Card.Header>{props.title}</Card.Header>
                <Card.Body>
                    <Card.Text>{props.comment}</Card.Text>
                </Card.Body>
            </Card>
        </>
    );
};

export default Comments;
