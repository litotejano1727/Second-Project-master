import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from './Admin/Admin'
import { useState } from 'react';
import Onlineshop from './Onlineshop'


function App2() {
  const [isSignIn, setIsSignIn] = useState(false);
  return (

    <div className="App">

{isSignIn ? (
    
    <Onlineshop setIsSignin={setIsSignIn} />

) : (

  <Routes>
    <Route path='/Admin/*' element={<Admin/>} />
    <Route path='/*' element={<Onlineshop/>} />
    
</Routes>
)
    }
      </div>
  )
}

export default App2