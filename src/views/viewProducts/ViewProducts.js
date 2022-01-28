import {Col, Container, Row} from "react-bootstrap";
import ModalComponent from "../../components/modal/Modal";
import {useStateParams} from "../../ParamsContext";
import ProductCard from "../../components/productCard/ProductCard";
import {useState} from "react";

const ViewProducts = () => {
	const {productos} = useStateParams();
	const [show, setShow] = useState(null);
	const [productoModal, setProductoModal] = useState({});
	const handleClose = () => setShow(false);

	console.log(productos);
	return (
		<>
			{" "}
			<Container>
				<Row>
					{productos.map((product, index) => (
						<Col lg={4} xl={4} md={4} sm={6} xs={6} key={index}>
							<ProductCard
								product={product}
								setProductoModal={setProductoModal}
								setShow={setShow}
							/>
						</Col>
					))}
				</Row>
			</Container>
			<ModalComponent
				show={show}
				handleClose={handleClose}
				productoModal={productoModal}
			/>
		</>
	);
};

export default ViewProducts;
