import React from 'react';
import GlobalStyle from './components/GlobalStyle'
import { Routes, Route} from "react-router-dom";
import  AdminDashBoard  from './Pages/AdminDashBoard/AdminDashBoard'
import SignUp from './components/Authentication/SignUp'
import Dashboard from './Pages/Dashboard'
import Home from './Pages/Home';
import "./Pages/HomeStyles.css"
import ProtectedRoute from './components/ProtectedRoute';


const App = () => {
  return (
    <div>
      {/* <Globalstyle/> */}
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/auth' element={<SignUp />}></Route>
        <Route element={<ProtectedRoute />}>
          <Route exact path='/*' element={<AdminDashBoard />}></Route>
        </Route>
      </Routes>
    </div>

  );
}


export default App;
