import { Modal } from "react-bootstrap";

const CreateModelModal = ({show, setShow}) => {
    return (
        <Modal show={show} onHide={()=>{setShow(false)}} centered>
            <Modal.Header closeButton>
                <Modal.Title>
                    Modal heading
                </Modal.Title>
            </Modal.Header>
        </Modal>
    )
}

export default CreateModelModal