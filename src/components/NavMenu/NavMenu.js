import { Button, Container, Navbar } from "react-bootstrap";
import { BsCartFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function NavMenu() {
    let navigate = useNavigate();
    const redirectToHome = () => {
        navigate("/");
    }
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand onClick={redirectToHome}>
                        E-commerce
                    </Navbar.Brand>
                    <Navbar className="justify-content-end">
                        <Button variant="outline-light" className="me-3">Crear Nuevo</Button>
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
