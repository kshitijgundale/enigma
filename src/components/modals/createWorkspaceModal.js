import { useState } from "react"
import { Modal, Form, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { toggleDisplay } from "../../reducers/modalReducer"
import { createWorkspace } from "../../reducers/userReducer"

const CreateWorkspaceModal = () => {

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")

    const show = useSelector(state => state.modals.workspace)
    const dispatch = useDispatch()

    const handleSubmit = () => {
        dispatch(createWorkspace({name, description}))
        setName("")
        setDescription("")
    }

    return (
        <Modal show={show} onHide={()=>{ dispatch(toggleDisplay({field: "workspace", value: false})) }} centered>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body className="d-flex flex-column justify-content-center align-items-center">
                <Form>
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
                            onChange={({target})=>{ setDescription(target.value) }}
                            value={description}
                        />
                    </Form.Group>             
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button size="md" onClick={handleSubmit}>Create</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CreateWorkspaceModal