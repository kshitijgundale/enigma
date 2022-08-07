import { useState, useEffect } from "react"
import { useMediaQuery } from "../../hooks/useMediaQuery"

const SideNav = () => {

    const isPageLarge = useMediaQuery("(min-width: 768px)")

    const initialWidth = isPageLarge ? "10%" : "25%"

    useEffect(()=>{
        setSideNavWidth(initialWidth)
    }, [isPageLarge])

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

    const handleExpandNav = () => {
        if(isPageLarge) {
            setSideNavWidth("25%")
        }
        else{
            setSideNavWidth("100%")
        }
    
        setExpandArrowDisplay("none")
        setMenuContentDisplay("flex")
    }

    const handleCollapseNav = () => {
        if(isPageLarge) {
            setSideNavWidth("10%")
        }
        else{
            setSideNavWidth("25%")
        }
    
        setExpandArrowDisplay("flex")
        setMenuContentDisplay("none")
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
                    <button>&times;</button>
                </div>
            </div>
        </div>
    )
}

export default SideNav