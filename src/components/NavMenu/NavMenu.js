import { Button, Container, Navbar } from "react-bootstrap";
import { BsCartFill } from "react-icons/bs";

function NavMenu() {
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="#home">E-commerce</Navbar.Brand>
                    <Navbar className="justify-content-end">
                        <Button variant="dark" className="me-3">
                            <BsCartFill />
                            Canasta
                        </Button>
                        <Button variant="outline-light">Salir</Button>
                    </Navbar>
                </Container>
            </Navbar>
        </>
    );
}

export default NavMenu;
