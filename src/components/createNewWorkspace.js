import { Form, Button } from "react-bootstrap";
import { useMediaQuery } from "../hooks/useMediaQuery";
import newWorkspaceImage from "../images/buildings.webp"

const CreateNewWorkspace = () => {

    const isPageLarge = useMediaQuery("(min-width: 768px)")

    return (
        <div 
            className="d-flex flex-column vh-100 justify-content-center align-items-center"
            style={{
                backgroundImage: `url(${newWorkspaceImage})`,
                backgroundSize: "100% 100%"
            }}
        >   
            <Form className={isPageLarge ? "w-25" : "w-50"}>
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
            <Button size="md">Create</Button> 
        </div>
    )
}

export default CreateNewWorkspace