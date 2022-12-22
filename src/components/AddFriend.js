import React, {useState} from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const AddFriend = () => {
    const navigate = useNavigate()
    const [formData,setFormData] = useState({
        name:"",
        age:"",
        email:""
    })

    const inputChangeHandler = (e) => (
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
    }))

    const submitHandler = (e) => {
        e.preventDefault()
        const token = localStorage.getItem("token")
        axios.post("http://localhost:9000/api/friends",formData,
        {
            headers:{
                authorization: token
            }
        })
        .then(res => navigate("/friends/list"))
        .catch(err => console.log(err))
    }

    return (<div>
        <h2>Add Friend</h2>
        <form onSubmit={submitHandler}>
            <div>
                <label>Name:</label>
                <input onChange={inputChangeHandler} id="name"></input>
            </div>
            <div>
                <label>Age:</label>
                <input onChange={inputChangeHandler} id="age"></input>
            </div>
            <div>
                <label>Email:</label>
                <input onChange={inputChangeHandler} id="email"></input>
            </div>
            <button>Submit</button>
        </form>
    </div>)
}

export default AddFriend