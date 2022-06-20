import React from "react";
import { useNavigate } from "react-router-dom";

const Home=()=>{
    const history=useNavigate();


    const logOut = () => {
        localStorage.clear();
        history('/');
    }

    // const home=()=>{
    //     localStorage.getItem("username")
    // }
    return(
        <>
        <div>This is Home Page</div>
        <button onClick={()=>logOut()}>Logout</button>
        </>
    )
}
export default Home;