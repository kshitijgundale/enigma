import { useState } from "react"

const handleExpandNav = (setSideNavWidth, setExpandArrowDisplay, setMenuContentDisplay) => {
    if(window.matchMedia("(min-width: 768px)").matches) {
        setSideNavWidth("25%")
    }
    else{
        setSideNavWidth("100%")
    }

    setExpandArrowDisplay("none")
    setMenuContentDisplay("flex")
}

const handleCollapseNav = (setSideNavWidth, setExpandArrowDisplay, setMenuContentDisplay) => {
    if(window.matchMedia("(min-width: 768px)").matches) {
        setSideNavWidth("5%")
    }
    else{
        setSideNavWidth("25%")
    }

    setExpandArrowDisplay("flex")
    setMenuContentDisplay("none")
}

const SideNav = () => {

    const initialWidth = window.matchMedia("(min-width: 768px)").matches ? "5%" : "25%"

    const [sideNavWidth, setSideNavWidth] = useState(initialWidth)
    const [expandArrowDisplay, setExpandArrowDisplay] = useState("flex")
    const [menuContentDisplay, setMenuContentDisplay] = useState("none")

    const style = {
        height: "100%",
        width: sideNavWidth,
        zIndex: 1,
        position: "fixed",
        backgroundColor: "#111",
        overflowX: "hidden",
        paddingTop: "60px",
        transition: "0.5s",
        paddingLeft: "20px",
        paddingRight: "20px"
    }

    return (
        <div style={style}>
            <div onClick={()=>handleExpandNav(setSideNavWidth, setExpandArrowDisplay, setMenuContentDisplay)} style={{display: expandArrowDisplay}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
                    <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z"/>
                </svg>
            </div>
            <div className={`d-${menuContentDisplay} flex-column justify-content-start align-items-start w-100`}>
                <div className={`d-flex justify-content-end align-items-end w-100`} onClick={()=>handleCollapseNav(setSideNavWidth, setExpandArrowDisplay, setMenuContentDisplay)}>
                    <a href="#">&times;</a>
                </div>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
            </div>
        </div>
    )
}

export default SideNav