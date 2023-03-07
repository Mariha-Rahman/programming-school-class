import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../context/Authproider/AuthProvider';
import { GoogleAuthProvider } from "firebase/auth";
import { Link, useLocation, useNavigate } from 'react-router-dom';
const provider = new GoogleAuthProvider();
const Login = () => {
    const { loginWithGoogle, login } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handleGoogleBtn = () => {
        loginWithGoogle(provider)
    }
    const handleOnsubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        login(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                form.reset()
                navigate(from, { replace: true })
            })
            .catch(err => {
                console.error(err)
            })
    };
    return (
        <div>
            <Form onSubmit={handleOnsubmit} className='w-50 mx-auto mt-5'>
                <h1>PLease LogIn</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    LogIn
                </Button>
                <p>New Member? <Link to='/register'>Create a new account</Link></p>
            </Form>

            <div className='google'>
                <Button variant="success" type="submit" onClick={handleGoogleBtn}>
                    Sign In With Google
                </Button>
            </div>
        </div>
    );
};

export default Login;