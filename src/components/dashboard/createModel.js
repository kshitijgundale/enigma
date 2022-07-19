import CreateModelModal from "./createModelModal"
import { useState } from "react"

const CreateModel = () => {

    const [show, setShow] = useState(false)

    const marginLeft = window.matchMedia("(min-width: 768px)").matches ? "5%" : "25%"

    const handleShowModal = () => {
        setShow(true)
    }

    return (
        <div className="d-flex flex-column w-100 h-25 justify-content-center align-items-center" style={{marginLeft: marginLeft, borderBottom: "2px solid black"}}>
            Create New Model
            <svg onClick={handleShowModal} role="button" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="m-3 bi bi-plus-square" viewBox="0 0 16 16">
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg>
            <CreateModelModal show={show} setShow={setShow}></CreateModelModal>
        </div>
    )
}

export default CreateModel