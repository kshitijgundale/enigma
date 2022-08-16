import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { useMediaQuery } from "../../hooks/useMediaQuery"

const MenuItem = ({name, models, datasets}) => {

    const [bgcolor, setBgcolor] = useState("")
    const [expand, setExpand] = useState(false)

    const arrow = expand ? "\u23f6" : "\u23f7"
    const subMenuDisplay = expand ? "flex" : "none"

    const handleExpand = () => {
        setExpand(!expand)
    }

    const handleOnMouseEnter = () => {
        setBgcolor("lightgray")
    }

    const handleOnMouseLeave = () => {
        setBgcolor("")
    }

    return (
        <div style={{width: "100%", borderRadius: "5px", marginTop: "5px", marginBottom: "5px"}}>
            <div className="d-flex flex-row w-100" style={{backgroundColor: bgcolor, borderRadius: "2%"}} onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} onClick={handleExpand} role="button">
                <div className="d-flex justify-content-start align-items-center w-75 m-1">
                    <h6>{name}</h6>
                </div>
                <div className="d-flex justify-content-end align-items-center w-25">
                    <h4>{arrow}</h4>
                </div>
            </div>
            <div className={`d-${subMenuDisplay}`}>
                {
                    Object.keys(models).length > 0 ?
                    <></>
                    :
                    (
                        datasets ? 
                        <></>
                        :
                        <div style={{backgroundColor: "lightgray"}} className="p-3">
                            <div>You don't have any datasets yet.</div>
                            <a href="#">Upload a dataset.</a>
                        </div>
                    )

                }
            </div>
        </div>
    )
}

const SideNav = () => {

    const workspaces = useSelector(state => state.user.workspaces)
    const datasets = useSelector(state => state.user.datasets)

    const isPageLarge = useMediaQuery("(min-width: 768px)")

    const initialWidth = isPageLarge ? "10%" : "25%"

    useEffect(()=>{
        setSideNavWidth(initialWidth)
    }, [isPageLarge])

    const [sideNavWidth, setSideNavWidth] = useState(initialWidth)
    const [expand, setExpand] = useState(false)

    const expandArrowDisplay = expand ? "none": "flex"
    const menuContentDisplay = expand ? "flex": "none"
    const bgColor = expand ? "white": "black"

    const style = {
        height: "100%",
        width: sideNavWidth,
        zIndex: 1,
        position: "fixed",
        backgroundColor: bgColor,
        overflowX: "hidden",
        paddingTop: "40px",
        transition: "0.5s",
        paddingLeft: "20px",
        paddingRight: "20px",
        borderRight: "1px solid black"
    }

    const handleExpandNav = () => {
        if(isPageLarge) {
            setSideNavWidth("25%")
        }
        else{
            setSideNavWidth("100%")
        }
    
        setExpand(true)
    }

    const handleCollapseNav = () => {
        if(isPageLarge) {
            setSideNavWidth("10%")
        }
        else{
            setSideNavWidth("25%")
        }
    
        setExpand(false)
    }

    return (
        <div style={style}>
            <div onClick={()=>handleExpandNav()} style={{display: expandArrowDisplay}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
                    <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z"/>
                </svg>
            </div>
            <div className={`d-${menuContentDisplay} flex-column justify-content-start align-items-start h-100 w-100`}>
                <div className={`d-flex justify-content-end align-items-end w-100`} onClick={()=>handleCollapseNav()}>
                    <button style={{color: "white", backgroundColor: "black"}}>&times;</button>
                </div>
                <div className="d-flex flex-column h-100 w-100 p-4">
                    <h6 style={{color: "gray"}}>Workspaces</h6>
                    {
                        Object.keys(workspaces).map(elm => (
                            <MenuItem
                                key={workspaces[elm].name}
                                name={workspaces[elm].name}
                                models={workspaces[elm].models}
                                datasets={ Object.keys(datasets).length > 0 }
                            >
                            </MenuItem>
                        ))
                    }
                    <h6 style={{color: "gray"}}>Datasets</h6>
                    {
                        Object.keys(datasets).length > 0 ?
                        <></>
                        :
                        <div style={{backgroundColor: "lightgray"}} className="p-3">
                            <div>You don't have any datasets yet.</div>
                            <a href="#">Upload a dataset.</a>
                        </div>
                    }
                </div>                
            </div>
        </div>
    )
}

export default SideNav