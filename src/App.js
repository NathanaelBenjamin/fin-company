import React from 'react'
import SignUp from './components/Authentication/SignUp'
import Dashboard from './Pages/Dashboard'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'


const App = () => {
  return (


    <div>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/auth' element={<SignUp />}></Route>
        <Route element={<ProtectedRoute />}>
          <Route exact path='/dashboard' element={<Dashboard />}></Route>
        </Route>
      </Routes>
    </div>

  )
}

export default App
