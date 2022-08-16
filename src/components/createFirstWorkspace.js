import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useMediaQuery } from "../hooks/useMediaQuery";
import newWorkspaceImage from "../images/buildings.webp"
import { logout } from "../reducers/userReducer";
import { createWorkspace } from "../reducers/userReducer";
import { useState } from "react";

const CreateFirstWorkspace = () => {

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")

    const isPageLarge = useMediaQuery("(min-width: 768px)")
    const isLoggedIn = useSelector(state => state.user.isLoggedIn)

    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout)
    }

    const handleSubmit = () => {
        dispatch(createWorkspace({name, description}))
    }

    return (
        <div 
            className="d-flex flex-column vh-100 justify-content-center align-items-center"
            style={{
                backgroundImage: `url(${newWorkspaceImage})`,
                backgroundSize: "100% 100%"
            }}
        >   
            { isLoggedIn ? <></> : <Navigate to="/"></Navigate> }
            <div className="w-100 d-flex justify-content-center p-5"><div onClick={handleLogout} className="btn btn-link">logout</div></div>
            <Form className={isPageLarge ? "w-25" : "w-50"}>
                <Form.Group className="mb-3">
                    <Form.Label>Workspace Name</Form.Label>
                    <Form.Control
                        type="text"
                        value={name}
                        onChange={({target})=>{ setName(target.value) }}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        value={description}
                        onChange={({target})=>{ setDescription(target.value) }}
                    />
                </Form.Group>             
            </Form>
            <Button size="md" onClick={handleSubmit}>Create</Button> 
        </div>
    )
}

export default CreateFirstWorkspace