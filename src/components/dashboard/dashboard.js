import SideNav from "../sidenav"
import NavBar from "../navbar"

const Dashboard = () => {

    const marginLeft = window.matchMedia("(min-width: 768px)").matches ? "5%" : "25%"

    return (
        <div className="d-flex flex-column vh-100 w-100">
            <div style={{minHeight: "56px"}}>
                <div className="position-fixed w-100">
                    <NavBar></NavBar>
                </div>
            </div>
            <div className="d-flex flex-row w-100 flex-grow-1">
                <SideNav></SideNav>
            </div>
        </div>
        
    )
}

export default Dashboard