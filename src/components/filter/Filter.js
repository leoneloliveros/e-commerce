import {InputGroup, FormControl} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

const Filter = () => (
	<InputGroup className="mb-3">
		<FormControl
			placeholder="Buscar  camisetas "
			aria-label="Username"
			aria-describedby="basic-addon1"
		/>
		<InputGroup.Text id="basic-addon1">
			<FontAwesomeIcon icon={faSearch} />
		</InputGroup.Text>
	</InputGroup>
);
export default Filter;
