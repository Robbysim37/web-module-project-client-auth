import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <>
            <div>Friends Database</div>
            <Link className="link" to="/">Login</Link>
            <Link className="link" to="/friends/list">Friends List</Link>
            <Link className="link" to="/friends/add">Add Friend</Link>
            <Link className="link" to="/logout">Logout</Link>
        </>
    )
}

export default Header