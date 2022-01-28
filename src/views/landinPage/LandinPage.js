import {Container, Row, Col} from "react-bootstrap";

import Categories from "../../components/categories/Categories";
import Slider from "../../components/slider/Slider";
import Products from "./products/Products";

//
import Filter from "../../components/filter/Filter";
import FilterCheck from "../../components/filterCheck/FilterCheck";

function LandinPage() {
	return (
		<Container>
			<Row>
				<Col lg={3} xl={3}>
					<Filter />

					<Categories />
				</Col>
				<Col lg={9} xl={9} md={12}>
					<Slider />
					<FilterCheck />
					<Products />
				</Col>
			</Row>
		</Container>
	);
}
export default LandinPage;
