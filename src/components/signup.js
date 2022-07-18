import { Form, Button } from "react-bootstrap"
import { useState } from 'react';
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { signup } from '../reducers/userReducer'

const SignUp = ({setCurrDialog}) => {

    const dispatch = useDispatch()
    const isLoggedIn = useSelector(state => state.user.isLoggedIn)

    console.log(isLoggedIn)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const [username, setUsername] = useState('')

    const handleSignUp = (event) => {
        event.preventDefault()
        dispatch(signup({email, password, confirm, username}))
    }

    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            {isLoggedIn ? <Navigate to="/dashboard"></Navigate> : <></>}
            <button className="text-white btn btn-link" onClick={()=>setCurrDialog("login")}>
                Login
            </button>
            <Form className="d-flex flex-column justify-content-center align-items-center text-white m-2" onSubmit={(event)=>handleSignUp(event)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter email"  
                        value={email} 
                        onChange={({ target }) => setEmail(target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="username"  
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

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Confim password" 
                        value={confirm}
                        onChange={({ target }) => setConfirm(target.value)}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Create Account
                </Button>
            </Form>
        </div>
    )
}

export default SignUp