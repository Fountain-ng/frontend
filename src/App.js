import './App.css';
import './styles/font.css'
import HomePage from './components/HomePage';
import AllBrands from './components/carabao';
import SignIn from './components/signIn';
import SignUp from './components/SignUp';
import LogoutButton from './components/LogoutButton';
import CarabaoProducts from './components/carabao-products';
import { QueryClient, QueryClientProvider } from 'react-query';
import {Routes, Route } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/carabao" element={<AllBrands/>}/>
        {/* <Route path="/DistributorForm" element={<DistributorForm/>}/> */}
        <Route path="/signIn" element={<SignIn/>}/>
        <Route path="/signUp" element={<SignUp/>}/>
        <Route path="/LogoutButton" element={<LogoutButton/>}/>
        <Route path="/protected" element={<ProtectedRoute><CarabaoProducts/></ProtectedRoute>} />
      </Routes>
      </QueryClientProvider>
  );
}

export default App;
