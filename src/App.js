import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes,Navigate} from 'react-router-dom';
import Login from "./components/Login"
import Header from "./components/Header"
import AddFriend from './components/AddFriend';
import FriendsList from './components/FriendsList';
import Logout from "./components/Logout"
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route exact path="/" element={<Login></Login>}></Route>
        <Route path="/login" element={<Navigate to="/"/>}></Route>
        <Route element={<PrivateRoute/>}>
          <Route path="/friends/add" element={<AddFriend></AddFriend>}/>
          <Route path="/friends/list" element={<FriendsList></FriendsList>}></Route>
          <Route path="/logout" element={<Logout></Logout>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
