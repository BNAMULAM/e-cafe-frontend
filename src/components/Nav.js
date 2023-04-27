import React from "react"
// import { useDispatch } from "react-redux";
import  { useNavigate } from 'react-router-dom'
import { Navbar,Container,Nav } from 'react-bootstrap';


const NavBar = ()=>{
    
    // const dispatch = useDispatch();
    const navigate = useNavigate();

    return( 
        <> 
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container fluid>
                        <Navbar.Brand href="/">E-CAFE<a href="/"></a></Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link onClick={()=>{navigate('/customerLogin');}}>Customer Login</Nav.Link>
                            <Nav.Link onClick={()=>{navigate('/memberLogin');}}>Manager Login</Nav.Link>
                        </Nav>
                         </Navbar.Collapse>
                            
                    </Container>
                </Navbar>
        </>
    )
}

export default NavBar;