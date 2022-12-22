import React from "react"
import {Route, Navigate, Outlet} from "react-router-dom"
import Login from "./Login"

const PrivateRoute = () => {
if(localStorage.getItem("token")){
    return <Outlet/>
}
    return <Navigate to="/"/>
}

export default PrivateRoute