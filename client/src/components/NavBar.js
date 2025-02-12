import React, {useContext} from "react";
import {Context} from "../index";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { SHOP_ROUTE } from "../utils/consts";
import { observer } from "mobx-react-lite";

const NavBar = observer(() => {

    const {user} = useContext(Context)
    return(
        <Navbar bg="light" expand="lg">
        <Container fluid className="ms-5 me-5">
          <Navbar.Brand href={SHOP_ROUTE}>Девайс для Вас</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href={SHOP_ROUTE}>Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            {user.isAuth ? 
              <div>
                <Button  variant="outline-success" >Войти как админ</Button>
                <Button  variant="outline-success" className="ms-3">Выйти</Button>
              </div>
                :
              <div>
                <Button  variant="outline-success"  onClick={() => user.setIsAuth(true)}>Авторизация</Button>  
              </div>
            }
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  });

export default NavBar;