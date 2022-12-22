import React, {useState} from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const Login = () => {

    const navigate = useNavigate()
    const [credentials,setCredentials] = useState({
        username: "",
        password: ""
    })

    const inputChangeHandler = (e) => (
        setCredentials({
            ...credentials,
            [e.target.id]: e.target.value
    }))

    const onSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:9000/api/login",credentials).then(
            res => {
                console.log(res.data)
                localStorage.setItem("token",res.data.token)
                navigate("/friends/list")
            })
            .catch(
                err => console.log(err)
            )
    }
        
    return (
        <>
            <h1>Login</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <label>Username:</label>
                    <input onChange={inputChangeHandler} value={credentials.username} id="username"></input>
                </div>
                <div>
                    <label>Password:</label>
                    <input onChange={inputChangeHandler} value={credentials.password} type="password" id="password"></input>
                </div>
                <button>Submit</button>
            </form>
        </>
    )
}

export default Login