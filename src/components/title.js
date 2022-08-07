import titleImage from "../../src/images/title.webp"
import Login from "./auth/login"
import SignUp from "./auth/signup";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { tokenLogin } from "../reducers/userReducer";

const Title = () => {

    const dispatch = useDispatch()

    const isLoggedIn = useSelector(state => state.user.isLoggedIn)
    const workspaces = useSelector(state => state.user.workspaces)

    useEffect(()=>{
        dispatch(tokenLogin)
    }, [dispatch])

    const [currDialog, setCurrDialog] = useState("login")

    return (
        <div 
            className="d-flex flex-column justify-content-center align-items-center vh-100"
            style={{
                backgroundImage: `url(${titleImage})`,
                backgroundSize: "100% 100%"
            }}
        >
            {isLoggedIn ? (workspaces ? <Navigate to="/dashboard"></Navigate> : <Navigate to="/create-new-workspace"></Navigate>) : <></>}
            <p className="m-0" style={{
                fontSize: "100px",
                color: "lightgray",
                fontFamily: "serif"
            }}>
                Enigma
            </p>
            {
                currDialog === "login" ? <Login setCurrDialog={setCurrDialog}></Login> : <SignUp setCurrDialog={setCurrDialog}></SignUp>
            }
        </div>
    )
}

export default Title