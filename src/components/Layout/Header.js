import React, { useState } from 'react';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import logo from '../../assets/headerlogo.png';
import { useAuth } from '../../context/auth';
import './Header.css';
const  Header=()=> {
    const[auth,setAuth]=useAuth();
   // const{cartItems}=useContext(CartContext)
    const handleLogout=()=> {setAuth({
        ...auth,
        user:null,
        token:""

    });
    localStorage.removeItem('auth');
    toast.success("Logout Successfully");
}
    
    const[menuVisible,setMenuVisible]=useState(false);

    const titleStyle={
        fontFamily:'Quicksand,sans-serif',
        fontWeight:'bold',
    };
    const toogleMenu=()=>{
        setMenuVisible(!menuVisible);
    };
    const closeMenu=()=>{
        setMenuVisible(false);
    };

  return (
    <div>
        <Navbar expand="lg" className="bg-body-teritary">
            <Container>
                <div style={{position:'relative',display:'inline-block',right: '2cm'}}>
                    <Button
                    variant="light"
                    onClick={toogleMenu}
                    aria-controls="menu-dropdown"
                  aria-expanded={menuVisible}
                    >
                    
                        <span className='fas fa-bars'>
                        </span>
                    </Button>
                </div>
                <Navbar.Brand href="/" style={titleStyle}>
                    <img src={logo} style={{width:'80px',height:'50px'}} alt="e-home-logo"/><p id='logoname'>E-home</p>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                     <Nav className="me-auto" style={{marginLeft:'24cm'}}>
                        {!auth?.user?(
                            <>
                            <li className='nav-item'>
                                <Link to="/aboutus" className="nav-link">
                                    About
                                    </Link>
                                </li>
                                &nbsp;&nbsp;
                                <li className='nav-item'>
                                <Link to="/contactus" className="nav-link">
                                    Contact
                                    </Link>
                                </li>
                                &nbsp;&nbsp;
                                <li className='nav-item'>
                                <Link to="/signin" className="nav-link">
                                    Signin
                                    </Link>
                                </li>
                                &nbsp;&nbsp;
                                <li className='nav-item'>
                                <Link to="/cart" className="nav-link">
                                    {/* {cartItems.length> 0 &&(
                                        <Badge pill bg="danger">
                                            {cartItems.reduce((a,c)=>a+c.quantity,0)}
                                        </Badge>
                                    )} */}
                                    <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                </Link>
                                </li>
                                </>
                        ):
                        (
                        <>
                         <li className='nav-item'>
                                <Link to="/aboutus" className="nav-link">
                                    About
                                    </Link>
                                </li>
                                &nbsp;&nbsp;
                                <li className='nav-item'>
                                <Link to="/contactus" className="nav-link">
                                    Contact
                                    </Link>
                                </li>
                                &nbsp;&nbsp;
                                <li className='nav-item'>
                                <Link to="/cart" className="nav-link">
                                    {/* {cartItems.length> 0 &&(
                                        <Badge pill bg="danger">
                                            {cartItems.reduce((a,c)=>a+c.quantity,0)}
                                        </Badge>
                                    )} */}
                                    <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                </Link>
                                </li>
                                &nbsp;&nbsp;
                                    <li ClassName="nav-item">
                                        <NavDropdown title={auth.user.name}id="basic-nav-dropdown"> 
                                        <NavDropdown.Divider/>
                                        <Link
                                        className="dropdown-item"
                                    to="#signout"
                                    onClick={handleLogout}>
                                        SignOut
                                    </Link>
                                    </NavDropdown>
                                    </li>
                                    </>
                                        )}
                                </Nav> 
                </Navbar.Collapse>


            </Container>
        </Navbar>
    </div>
  )
}



export default Header;