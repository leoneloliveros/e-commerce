import {Row, Col} from "react-bootstrap";

import ModalComponent from "../../../components/modal/Modal";
import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import ProductCard from "../../../components/productCard/ProductCard";
import {useStateParams} from "../../../ParamsContext";
import LinkUpdate from "../../../components/linkUpdate/LinkUpdate";

function Products() {
	const [show, setShow] = useState(null);
	const [productoModal, setProductoModal] = useState({});
	const {queryOption, setProductos, productos} = useStateParams();
	const {category} = useParams();

	const handleClose = () => setShow(false);

	let urlProducts = "https://fakestoreapi.com/products";
	if (category) urlProducts = `${urlProducts}/category/${category}`;
	if (queryOption.sort)
		urlProducts = `${urlProducts}?sort=${queryOption.sort}`;

	useEffect(() => {
		fetch(urlProducts)
			.then((res) => res.json())
			.then((data) => {
				setProductos(data);
			});
	}, [urlProducts, queryOption, category]);
	return (
		<>
			<Row>
				{productos.map((product, index) => (
					<Col lg={4} xl={4} md={4} sm={6} xs={6} key={index}>
						<ProductCard
							product={product}
							setProductoModal={setProductoModal}
							setShow={setShow}
						>
							<LinkUpdate productId={product.id} />
						</ProductCard>
					</Col>
				))}
			</Row>
			<ModalComponent
				show={show}
				handleClose={handleClose}
				productoModal={productoModal}
			/>
		</>
	);
}
// 	false={false}
//	<Card.Text>{product.description}</Card.Text>
export default Products;
