import {Container, Navbar} from "react-bootstrap";

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    Task Management App
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
};

export default NavBar;
