import titleImage from "../../src/images/3079600.webp"
import Login from "./login"
import SignUp from "./signup";
import { useState } from "react";

const Title = () => {

    const [currDialog, setCurrDialog] = useState("login")

    return (
        <div 
            className="d-flex flex-column justify-content-center align-items-center vh-100"
            style={{
                backgroundImage: `url(${titleImage})`,
                backgroundSize: "100% 100%"
            }}
        >
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