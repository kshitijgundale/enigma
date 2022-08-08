import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import BasicInfo from "../modelForm/basicInfo";

const CreateModelModal = ({show, setShow}) => {

    const [currStep, setCurrStep] = useState(0)

    return (
        <Modal show={show} onHide={()=>{setShow(false)}} centered>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body className="d-flex flex-column justify-content-center align-items-center">
                {
                    function () {
                        if(currStep === 0){
                            return <BasicInfo></BasicInfo>
                        } 
                    }()
                }
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-center align-items-center">
                <Button onClick={()=>{ if(currStep > 0) setCurrStep(currStep - 1) }} disabled={currStep === 0} size="sm">Previous</Button>
                <Button onClick={()=>{ if(currStep < 10) setCurrStep(currStep + 1)}} size="sm" disabled={currStep === 10}>Next</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CreateModelModal