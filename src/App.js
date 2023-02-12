import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from './Admin/Admin'

import Onlineshop from './Onlineshop'

function app2() {
  return (
    <Routes>
        <Route path='/Admin/*' element={<Admin/>} />
        <Route path='/*' element={<Onlineshop/>} />
        
    </Routes>
  )
}

export default app2