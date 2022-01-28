import {Navbar, Container, Nav, Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {useStateParams} from "../../ParamsContext";
import {Link} from "react-router-dom";

function Home() {
	const {setScheme, scheme} = useStateParams();

	const handleClick = () => {
		setScheme(scheme === "dark" ? "light" : "dark");
	};

	return (
		<Navbar collapseOnSelect expand="lg" bg={scheme} variant={scheme}>
			<Container>
				<Navbar.Brand href="/">E-commerce</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto" />
					<Nav>
						<Nav.Link href="/addProduct">
							<Button
								variant={scheme === "dark" ? "dark" : "light"}
								className="border border-light"
							>
								Crear Producto
							</Button>
						</Nav.Link>
						<Nav.Link href="#deets">
							<FontAwesomeIcon icon={faShoppingCart} /> Canasta
						</Nav.Link>
						<Button
							variant={scheme === "dark" ? "light" : "dark"}
							className="border border-light"
							onClick={handleClick}
						>
							{scheme === "dark" ? "light" : "dark"}
						</Button>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
export default Home;
