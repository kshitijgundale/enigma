import { Form, Button } from "react-bootstrap"
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { login } from '../reducers/userReducer'
import { Navigate } from "react-router-dom";

const Login = ({setCurrDialog}) => {

    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (event) => {
        event.preventDefault()
        dispatch(login({email, password}))
    }

    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <button className="text-white btn btn-link" onClick={()=>setCurrDialog("signup")}>
                Sign Up
            </button>
            <Form className="d-flex flex-column justify-content-center align-items-center text-white m-2" onSubmit={(event)=>handleLogin(event)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter email"  
                        value={email} 
                        onChange={({ target }) => setEmail(target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Password" 
                        value={password}
                        onChange={({ target }) => setPassword(target.value)}
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    )
}

export default Login