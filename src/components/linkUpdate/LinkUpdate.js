import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";

const LinkUpdate = ({productId}) => {
	return (
		<Link to={`addProduct/${productId}`}>
			<Button variant="outline-dark" className="mt-3">
				Actualizar
			</Button>
		</Link>
	);
};

export default LinkUpdate;
