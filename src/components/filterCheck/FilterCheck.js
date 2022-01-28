import {Form} from "react-bootstrap";
import React from "react";
import {useSearchParams} from "react-router-dom";
import {useStateParams} from "../../ParamsContext";

const FilterCheck = () => {
	const [queryParams, setQueryParams] = useSearchParams();

	const {setQueryOption} = useStateParams();

	const handleChecked = (e) => {
		if (e.target.value) {
			setQueryParams({sort: e.target.value});
			setQueryOption({sort: e.target.value});
		} else {
			setQueryParams({});
			setQueryOption({});
		}
	};

	return (
		<Form.Select className="mt-2 mb-2" onChange={handleChecked}>
			<option selected value="">
				Default
			</option>
			<option value="desc">Descendente</option>
			<option value="asc">Ascendente</option>
		</Form.Select>
	);
};

export default FilterCheck;
