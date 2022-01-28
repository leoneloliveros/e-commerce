import {Form, Button} from "react-bootstrap";
import Message from "../../components/message/Message";
import React, {useState, useEffect} from "react";
import {useStateParams} from "../../ParamsContext";
import {useParams} from "react-router-dom";

const AddProduct = () => {
	const [show, setShow] = useState(false);
	const {idProduct} = useParams();
	const [formData, setFormData] = useState({
		title: "",
		price: "",
		description: "",
		image: "",
		category: "",
	});
	const {setProductos, productos} = useStateParams();

	const handleInputChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};
	const dataSend = (e) => {
		e.preventDefault();

		let url = "https://fakestoreapi.com/products";
		if (idProduct) {
			url = `${url}/${idProduct}`;
			const config = {
				method: "PUT",
				body: JSON.stringify(formData),
			};

			fetch(url, config)
				.then((res) => res.json())
				.then((data) => {
					const newData = productos.map((el) =>
						el.id === formData.id ? formData : el
					);

					setProductos(newData);
					setShow(true);
				});
		} else {
			const config = {
				method: "POST",
				body: JSON.stringify(formData),
				headers: {
					"Content-Type": "application/json",
				},
			};
			fetch(url, config)
				.then((res) => res.json())
				.then((data) => {
					data.id = new Date().getMilliseconds();
					setProductos([...productos, data]);
					setShow(true);
				});
		}
	};

	useEffect(() => {
		if (idProduct) {
			const url = `https://fakestoreapi.com/products/${idProduct}`;
			fetch(url)
				.then((res) => res.json())
				.then((data) => {
					setFormData(data);
				})

				.catch((err) => console.log(err));
		}
	}, [idProduct]);

	return (
		<>
			{show && <Message show={show} setShow={setShow} />}
			<Form onSubmit={dataSend}>
				<fieldset>
					{idProduct ? "Editar Producto" : "Crear nuevo producto"}
				</fieldset>
				<Form.Group className="mb-3">
					<Form.Label>Título</Form.Label>
					<Form.Control
						type="text"
						placeholder="Ingresa el título"
						name="title"
						value={formData.title}
						onChange={handleInputChange}
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label>Precio</Form.Label>

					<Form.Control
						type="number"
						placeholder="Ingresa el precio"
						name="price"
						value={formData.price}
						onChange={handleInputChange}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="description">
					<Form.Label>Descripción</Form.Label>
					<Form.Control
						name="description"
						as="textarea"
						rows={3}
						cols={5}
						style={{resize: "none"}}
						value={formData.description}
						onChange={handleInputChange}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="image">
					<Form.Label>Imagen</Form.Label>

					<Form.Control
						type="text"
						placeholder="Ingresa la imagen"
						name="image"
						value={formData.image}
						onChange={handleInputChange}
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="category">
					<Form.Label>Categoría</Form.Label>

					<Form.Control
						type="text"
						placeholder="Ingresa la categoría"
						name="category"
						value={formData.category}
						onChange={handleInputChange}
					/>
				</Form.Group>

				<Button variant="primary" type="submit" disabled={show}>
					{idProduct ? "Actualizar Producto" : "Crear Producto"}
				</Button>
			</Form>
		</>
	);
};
export default AddProduct;
