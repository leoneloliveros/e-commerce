import {Alert} from "react-bootstrap";
const NotFound = () => (
	<Alert variant="danger">
		Pagina no encontrada :c <br />
		<Alert.Link href="/">Regresar</Alert.Link>. A la pagina principal
	</Alert>
);
export default NotFound;
