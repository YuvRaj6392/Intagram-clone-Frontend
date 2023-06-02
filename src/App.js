import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/screens/Home";
import Login from "./components/screens/Login";
import Profile from "./components/screens/Profile";
import Signup from "./components/screens/Signup";
import CreatePost from "./components/screens/CreatePost";
import { useState, createContext, useHistory, useReducer } from "react";
import { reducer, initialState } from "./reducers/userReducer";
const UserContext = createContext();
const Routing = () => {
  const history = useHistory();
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signin" element={<Login />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/create" element={<CreatePost />} />
        <Route />
        <Route />
      </Routes>
    </>
  );
};
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <div>
        <Router>
          <Navbar />
          <Routing />
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
