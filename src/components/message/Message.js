import React from "react";

import {Toast, ToastContainer} from "react-bootstrap";
import {Link} from "react-router-dom";

const AddProduct = ({show, setShow}) => {
	const toggleShow = () => setShow(!show);
	return (
		<>
			<ToastContainer position="top-end" className="p-3">
				<Toast
					show={show}
					onClose={toggleShow}
					bg="primary"
					className="text-white"
				>
					<Toast.Header>
						<Link to="/viewProducts">
							{" "}
							<strong className="me-auto">Ver Productos!!</strong>{" "}
						</Link>
						<small>Ahora</small>
					</Toast.Header>
					<Toast.Body>Se ha registrado un nuevo producto</Toast.Body>
				</Toast>
			</ToastContainer>
		</>
	);
};
export default AddProduct;
