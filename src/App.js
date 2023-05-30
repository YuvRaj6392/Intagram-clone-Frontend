
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/screens/Home';
import Login from './components/screens/Login';
import Profile from './components/screens/Profile';
import Signup from './components/screens/Signup';
import CreatePost from './components/screens/CreatePost';
function App() {
  return (
    <div>
  <Router>
  <Navbar />
  <Routes>
    <Route exact path='/' element={<Home />} />
    <Route exact path='/signin' element={<Login />} />
    <Route exact path='/profile' element={<Profile />} />
    <Route exact path='/signup' element={<Signup />} />
    <Route exact path='/create' element={<CreatePost />} />
    <Route />
    <Route />
  </Routes>
  </Router>
  
    </div>
    
  );
}

export default App;
