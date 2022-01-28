import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {Card, Button} from "react-bootstrap";

const ProductCard = ({product, setProductoModal, setShow, children}) => {
	const handleShow = (product) => {
		setShow(true);
		setProductoModal(product);
	};

	return (
		<Card style={{width: "100%", padding: "20px"}}>
			<Card.Img
				variant="top"
				src={product.image}
				style={{maxWidth: "100%", height: "200px"}}
			/>
			<Card.Body className="mt-5">
				<Card.Title
					style={{
						whiteSpace: "nowrap",
						textOverflow: " ellipsis",
						overflow: " hidden",
					}}
				>
					{product.title}
				</Card.Title>
				<Card.Text
					style={{
						whiteSpace: "nowrap",
						textOverflow: " ellipsis",
						overflow: " hidden",
					}}
				>
					{product.description}
				</Card.Text>
				<div>
					<Button variant="primary">
						${product.price} <FontAwesomeIcon icon={faShoppingCart} />
					</Button>
					<Button
						variant="outline-dark"
						onClick={() => handleShow(product)}
					>
						Detalles
					</Button>
				</div>

				{children}
			</Card.Body>
		</Card>
	);
};
export default ProductCard;
