import { Button, Container, Navbar } from "react-bootstrap";
import { BsCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useStateTheme } from "../../ThemeContext";

function NavMenu() {
  const { themeConfig, setThemeConfig } = useStateTheme();
  const handleThemeChange = () => {
    setThemeConfig((elem) => {
      return {
        isDark: !elem.isDark,
        navBarClass: !elem.isDark ? "dark" : "light",
        buttonClass: !elem.isDark ? "outline-light" : "outline-dark",
      };
    });
  };
  return (
    <>
      <Navbar
        bg={themeConfig.navBarClass}
        variant={themeConfig.navBarClass}
        sticky="top"
      >
        <Container>
          <Link to="/" style={{ textDecoration: "auto" }}>
            <Navbar.Brand>E-commerce</Navbar.Brand>
          </Link>
          <Navbar className="justify-content-end">
            <Link to="/create-new">
              <Button variant={themeConfig.buttonClass} className="me-3">
                Crear Nuevo
              </Button>
            </Link>
            <Button variant={themeConfig.buttonClass} className="me-3">
              <BsCartFill />
              <span className="ms-2">Canasta</span>
            </Button>
            <Button
              variant={themeConfig.buttonClass}
              className="me-3"
              onClick={handleThemeChange}
            >
              {themeConfig.isDark ? "Claro" : "Oscuro"}
            </Button>
            <Button variant={themeConfig.buttonClass}>Salir</Button>
          </Navbar>
        </Container>
      </Navbar>
    </>
  );
}

export default NavMenu;
