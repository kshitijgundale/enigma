import SideNav from "../navigation/sidenav"
import NavBar from "../navigation/navbar"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import CreateModel from "./createModel"

const Dashboard = () => {

    const isLoggedIn = useSelector(state => state.user.isLoggedIn)

    return (
        <div className="d-flex flex-column vh-100 w-100">
            {isLoggedIn ? <></> : <Navigate to="/"></Navigate>}
            <div style={{minHeight: "56px"}}>
                <div className="position-fixed w-100" style={{zIndex: 2}}>
                    <NavBar></NavBar>
                </div>
            </div>
            <div className="d-flex flex-row w-100 flex-grow-1">
                <SideNav></SideNav>
                <CreateModel></CreateModel>
            </div>
        </div>      
    )
}

export default Dashboard