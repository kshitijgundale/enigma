import { Modal, Form, Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { toggleDisplay } from "../../reducers/modalReducer"

const CreateWorkspaceModal = () => {

    const show = useSelector(state => state.modals.workspace)
    const dispatch = useDispatch()

    return (
        <Modal show={show} onHide={()=>{ dispatch(toggleDisplay({field: "workspace", value: false})) }} centered>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body className="d-flex flex-column justify-content-center align-items-center">
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Workspace Name</Form.Label>
                        <Form.Control
                            type="text"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                        />
                    </Form.Group>             
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button size="md">Create</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CreateWorkspaceModal