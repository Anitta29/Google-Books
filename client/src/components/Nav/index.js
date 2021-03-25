import React from "react";
import "./style.css";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';

function Navigate() {
    return (
      <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Books</NavbarBrand>
        <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/saved">MyList</NavLink>
            </NavItem>
          </Nav>
      </Navbar>
    </div>
    );
  }

export default Navigate;
