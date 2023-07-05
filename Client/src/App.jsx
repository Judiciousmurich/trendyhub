
// import Navbar from './components/navbar/Navbar';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login';
import SignupForm from './pages/signup/Signup';




const App = () => {


  return (
    <BrowserRouter>
      {/* <Navbar /> */}

      <Routes>
    
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignupForm />} />
       

      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default App;
