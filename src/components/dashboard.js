import SideNav from "./sidenav"
import NavBar from "./navbar"

const Dashboard = () => {

    return (
        <div className="d-flex flex-column vh-100 w-100">
            <div style={{minHeight: "56px"}}>
                <div className="position-fixed w-100">
                    <NavBar></NavBar>
                </div>
            </div>
            <div className="d-flex flex-row w-100 flex-grow-1">
                <SideNav></SideNav>
                <div className="d-flex justify-content-center align-items-center w-100 overflow-auto">
                    <div className="border border-dark" style={{height: "1900px"}}>Hello World</div>
                </div>
            </div>
        </div>
        
    )
}

export default Dashboard