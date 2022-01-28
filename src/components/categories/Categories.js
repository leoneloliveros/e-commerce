import {ListGroup, Badge} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import {useStateParams} from "../../ParamsContext";
import "./Categories.css";
import {Link} from "react-router-dom";
function Categories() {
	const [categoriaItem, setCategoriaItem] = useState("");
	const [arrayItms, setArrayItms] = useState([]);
	const {queryOption} = useStateParams();
	const urlValue = queryOption.sort ? "?sort=" + queryOption.sort : "";
	const handleClick = (item) => {
		setCategoriaItem(item);
	};
	const urlCategories = "https://fakestoreapi.com/products/categories";
	useEffect(() => {
		fetch(urlCategories)
			.then((res) => res.json())
			.then((data) => {
				setArrayItms(["All", ...data]);
			});
	}, [urlCategories]);
	return (
		<ListGroup as="ol" numbered className="component-hidenn">
			<h2>Categorías</h2>
			{arrayItms.map((item, i) => {
				return (
					<ListGroup.Item
						style={{cursor: "pointer"}}
						key={i}
						className="d-flex align-items-start list-group"
						onClick={() => handleClick(item)}
						active={categoriaItem === item}
					>
						<Link
							to={`${item === "All" ? "" : "/category/" + item + urlValue}`}
							className=" d-flex justify-content-between  list-group__link"
						>
							{item}{" "}
							<Badge pill bg="secondary">
								{i}
							</Badge>
						</Link>
					</ListGroup.Item>
				);
			})}
		</ListGroup>
	);
}

export default Categories;
