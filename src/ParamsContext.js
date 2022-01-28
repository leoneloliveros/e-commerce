import React, {createContext, useContext, useState, useEffect} from "react";

const paramsContext = createContext();

export const ParamsProvider = ({children, value = {}}) => {
	const [scheme, setScheme] = useState("dark");
	const [queryOption, setQueryOption] = useState({});
	const [productos, setProductos] = useState([]);

	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((res) => res.json())
			.then((data) => {
				setProductos(data);
			});
	}, []);

	const objectParams = {
		scheme,
		setScheme,
		queryOption,
		setQueryOption,
		productos,
		setProductos,
	};
	return (
		<paramsContext.Provider value={objectParams}>
			{children}
		</paramsContext.Provider>
	);
};

export const useStateParams = () => {
	const context = useContext(paramsContext);

	if (context === undefined) {
		throw new Error("useStateParams must be used within a ParamsProvider");
	}
	return context;
};
