import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./views/header/Header";

import NotFound from "./views/NotFound";

import {useStateParams} from "./ParamsContext";

import {BrowserRouter, Routes, Route} from "react-router-dom";
import AddProduct from "./views/AddProducts/AddProduct";
import ViewProducts from "./views/viewProducts/ViewProducts";
import LandinPage from "./views/landinPage/LandinPage";

const App = () => {
	const params = useStateParams();

	return (
		<div
			className={
				params.scheme === "dark"
					? "bg-light text-dark"
					: "bg-dark text-light"
			}
		>
			<Header />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LandinPage />}>
						<Route path="category/:category" element={<LandinPage />} />
					</Route>
					<Route path="viewProducts" element={<ViewProducts />} />
					<Route path="/addProduct" element={<AddProduct />}>
						<Route path=":idProduct" element={<AddProduct />} />
					</Route>

					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};
/* <Route path="AddProduct" element={<AddProduct />} />
<Route path="EditProduct" element={<EditProduct />} />
import AddProduct from "./views/AddProduct";
import EditProduct from "./views/EditProduct";
*/
export default App;
