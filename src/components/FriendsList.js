import React, {useState,useEffect} from "react"
import axios from "axios"

const FriendsList = () => {
    const [friendsList,setFriendsList] = useState([])

    useEffect(()=>{
        const token = localStorage.getItem("token")
        axios.get("http://localhost:9000/api/friends",{
            headers:{
                authorization: token
            }
        })
        .then(res => setFriendsList(res.data))
        .catch(err => console.log(err))
    },[])

    return (<div>
        {friendsList.map((el,index) => {return <div key={index}>{el.name} - {el.age} - {el.email} </div>})}
    </div>)
}

export default FriendsList