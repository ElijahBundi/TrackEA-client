import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Carousel from './Components/SignupLogin/Carousel';
import Login from './Components/SignupLogin/Login';
import LoginSignup from './Components/SignupLogin/LoginSignup';
import Signup from './Components/SignupLogin/Signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route 
          path='login'
          element={<LoginSignup />}
        />      
        <Route 
          path='carousel'
          element={<Carousel />}
        />      
        <Route 
          path='login1'
          element={<Login />}
        />      
        <Route 
          path='signup'
          element={<Signup />}
        /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
