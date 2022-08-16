import SideNav from "../navigation/sidenav"
import NavBar from "../navigation/navbar"
import { useDispatch, useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { useMediaQuery } from "../../hooks/useMediaQuery"
import { useState } from "react"
import { Card } from "react-bootstrap"
import excelImage from "../../images/tabularData.png"
import { toggleDisplay } from "../../reducers/modalReducer"

const Plus = () => { 
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-plus-square" viewBox="0 0 16 16">
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
        </svg>
    )
}

const LinkItem = ({text, handleOnClick}) => {

    const [bgcolor, setbgcolor] = useState("white")

    const handleOnMouseEnter = () => {
        setbgcolor("lightgray")
    }

    const handleOnMouseLeave = () => {
        setbgcolor("white")
    }

    return (
        <div 
            className="d-flex justify-content-start align-items-center m-2 p-2 rounded" 
            onMouseEnter={handleOnMouseEnter} 
            onMouseLeave={handleOnMouseLeave}
            style={{backgroundColor: bgcolor, cursor: "pointer"}}
            onClick={handleOnClick}
        >
            <Plus></Plus>
            <p className="m-2">{text}</p>
        </div>
    )
}

const CardItem = ({isPageLarge, imgSrc}) => {

    const [boxShadow, setBoxShadow] = useState("0px 0px 1px 1px gray")

    const handleOnMouseEnter = () => {
        setBoxShadow("0px 0px 5px 5px gray")
    }

    const handleOnMouseLeave = () => {
        setBoxShadow("0px 0px 2px 2px gray")
    }

    return (
        <Card className="m-5" onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} style={{height: isPageLarge ? "40%" : "25%", width: isPageLarge ? "40%" : "75%", boxShadow: boxShadow, cursor: "pointer"}}>
            <Card.Img className="h-50" src={imgSrc}></Card.Img>
            <Card.Body className="p-3 overflow-auto"> 
                <Card.Title> Upload your first dataset. </Card.Title>
                <Card.Text> Upload a dataset to get detailed analysis of your data allowing you to create models tailored to your needs. </Card.Text>
            </Card.Body>
        </Card>
    )
}

const Dashboard = () => {

    const isLoggedIn = useSelector(state => state.user.isLoggedIn)
    const workspaces = useSelector(state => state.user.workspaces)
    const datasets = useSelector(state => state.user.datasets)

    const dispatch = useDispatch()

    const openModal = (field) => {
        dispatch(toggleDisplay({field: field, value: true}))
    }

    const isPageLarge = useMediaQuery("(min-width: 768px)")

    return (
        <div className="d-flex flex-column vh-100 w-100">
            {isLoggedIn ? (Object.keys(workspaces).length > 0 ? <></> : <Navigate to="/create-first-workspace"></Navigate>) : <Navigate to="/"></Navigate>}
            <div style={{minHeight: "56px"}}>
                <div className="position-fixed w-100" style={{zIndex: 2}}>
                    <NavBar></NavBar>
                </div>
            </div>
            <div className="d-flex flex-row w-100 flex-grow-1">
                <SideNav></SideNav>
                <div className="d-flex flex-row w-100 h-100" style={{marginLeft: isPageLarge ? "10%": "25%"}}>
                    <div className="d-flex justify-content-center h-100" style={{width: isPageLarge ? "75%": "100%"}}>
                        <CardItem isPageLarge={isPageLarge} imgSrc={excelImage}></CardItem>
                        <CardItem isPageLarge={isPageLarge} imgSrc={excelImage}></CardItem>
                        <CardItem isPageLarge={isPageLarge} imgSrc={excelImage}></CardItem>
                    </div>
                    {
                        isPageLarge ? 
                        <div className="w-25 border border-bottom-0">
                            <h6 className="m-3 text-bold ">Links</h6>
                            <LinkItem text={"Create New Workspace"} handleOnClick={ ()=>openModal("workspace") }></LinkItem>
                            <LinkItem text={"Create New Dataset"}></LinkItem>
                            {
                                Object.keys(datasets).length > 0 ?
                                <LinkItem text={"Create New Model"} handleOnClick={ ()=>openModal("model") }></LinkItem>
                                :
                                <></>
                            }
                        </div> 
                        : 
                        <></>
                    }
                </div>
            </div>
        </div>      
    )
}

export default Dashboard