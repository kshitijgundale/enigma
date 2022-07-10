import { Form, Button } from "react-bootstrap"
import { useState } from 'react';

const handleLogin = (event, username, password) => {
    event.preventDefault()
    console.log('logging in with', username, password)
}

const Login = ({setCurrDialog}) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <button class="text-white btn btn-link" onClick={()=>setCurrDialog("signup")}>
                Sign Up
            </button>
            <Form className="d-flex flex-column justify-content-center align-items-center text-white m-2" onSubmit={(event)=>handleLogin(event, username, password)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter email"  
                        value={username} 
                        onChange={({ target }) => setUsername(target.value)}
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