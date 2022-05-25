import React from 'react';
//import GlobalStyle from './components/GlobalStyle'
import { Routes, Route } from "react-router-dom";
import AdminDashBoard from './Pages/AdminDashBoard/AdminDashBoard'
// import Dashboard from './Pages/Dashboard'
import Home from './Pages/Home';
import "./Pages/HomeStyles.css"
import ProtectedRoute from './components/ProtectedRoute';
import Auth from './components/Authentication/auth';



const App = () => {
  return (
<<<<<<< HEAD

    <div>
      {/* <Globalstyle/> */}
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/auth' element={<Auth />}></Route>
        <Route element={<ProtectedRoute />}>
          <Route exact path='/*' element={<AdminDashBoard />}></Route>
        </Route>
      </Routes>
    </div>

  );
=======
    <div>
    
    </div>
  )
>>>>>>> 311ffe7022ca6121706c0c2cec5913f69d1d5560
}


export default App;
