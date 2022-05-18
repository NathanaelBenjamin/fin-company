import React from 'react'
import GlobalStyle from './components/GlobalStyle'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import  AdminDashBoard  from './Pages/AdminDashBoard/AdminDashBoard'
const App = () => {
  return (
    <div>
        <BrowserRouter>
        <GlobalStyle/>
        <Routes>
            <Route path="/*" element={<AdminDashBoard/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App
