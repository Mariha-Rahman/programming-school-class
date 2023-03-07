import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../context/Authproider/AuthProvider';
import { GoogleAuthProvider } from "firebase/auth";
import './Register.css'
import { useNavigate } from 'react-router-dom';
const provider = new GoogleAuthProvider();
const Register = () => {

    const { loginWithGoogle, emailSignup, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate()
    const handleGoogleBtn = () => {
        loginWithGoogle(provider)
    }
    const handleOnsubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photourl.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password, name, photo)
        emailSignup(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                form.reset();
                navigate('/')
                handleUpdateUserProfile(name, photo)
            })
            .catch(err => {
                console.error(err)
            })
    };
    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(err => console.error(err))
    }
    return (
        <div>
            <Form onSubmit={handleOnsubmit} className='w-50 mx-auto mt-5'>
                <h1>PLease Register</h1>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhoto">
                    <Form.Label>PhotoURL</Form.Label>
                    <Form.Control type="text" name="photourl" placeholder="photo" />
                </Form.Group>
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
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Already register?" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <div className='google'>
                <Button variant="success" type="submit" onClick={handleGoogleBtn}>
                    Sign In With Google
                </Button>
            </div>

        </div>

    );
};

export default Register;