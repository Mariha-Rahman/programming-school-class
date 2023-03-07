import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/Authproider/AuthProvider';
import { ImUser } from "react-icons/im";
import './Header.css'
import { Image } from 'react-bootstrap';
const Header = () => {
    const { user, logout } = useContext(AuthContext);
    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch(err => console.error(err))
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"> <span className='text-warning top'>Programming </span>SCHOOL</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto link">
                            <Link to='/'>Home</Link>
                            <Link to='/classes'>Classes</Link>
                            {user?.uid ?
                                <button className='ms-3' onClick={handleLogout}>Log Out</button>
                                :
                                <>
                                    <Link to='/login'>Log In</Link>
                                    <Link to='/register'>Register</Link>
                                </>
                            }


                        </Nav>
                        <Nav className='name'>
                            <Link eventKey={2} to='/profile'>
                                <span className='text-warning me-3'>{user?.displayName}</span>
                                {
                                    user?.photoURL ? <Image
                                        style={{ height: '30px' }}
                                        roundedCircle
                                        src={user?.photoURL}>
                                    </Image> : <ImUser></ImUser>
                                }

                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;