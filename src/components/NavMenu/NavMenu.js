import { Button, Container, Navbar } from "react-bootstrap";
import { BsCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function NavMenu() {
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top">
                <Container>
                    <Link to="/" style={{textDecoration:'auto'}}>
                        <Navbar.Brand>
                            E-commerce
                        </Navbar.Brand>
                    </Link>
                    <Navbar className="justify-content-end">
                        <Link to="/create-new">
                            <Button variant="outline-light" className="me-3">
                                Crear Nuevo
                            </Button>
                        </Link>
                        <Button variant="outline-light" className="me-3">
                            <BsCartFill />
                            <span className="ms-2">Canasta</span>
                        </Button>
                        <Button variant="outline-light">Salir</Button>
                    </Navbar>
                </Container>
            </Navbar>
        </>
    );
}

export default NavMenu;
