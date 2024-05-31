import './App.css';
import './styles/font.css'
import HomePage from './components/HomePage';
import AllBrands from './components/carabao';
import SignIn from './components/signIn';
import SignUp from './components/SignUp';
import {Routes, Route } from 'react-router-dom'

function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/carabao" element={<AllBrands/>}/>
        <Route path="/carabao" element={<AllBrands/>}/>
        <Route path="/signIn" element={<SignIn/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
      </Routes>
  );
}

export default App;
