import { Routes, Route } from "react-router";
import './App.css'
import React, { Suspense } from "react";



function App() {
const Login =React.lazy(()=>import('./Pages/Login'))
const Register =React.lazy(()=>import('./Pages/Register'))
const Ui =React.lazy(()=>import('./Components/Ui/Ui'))

  return (
    <>
       <Routes>
      <Route path="/" element={
        <Suspense fallback= {<h1>....... loading</h1>}>
          <Ui></Ui>
        </Suspense>
      } />
      <Route path="/login" element={
        <Suspense fallback= {<h1>....... loading</h1>}>
          <Login></Login>
        </Suspense>
      } />
      <Route path="/register" element={
        <Suspense fallback= {<h1>....... loading</h1>}>
          <Register></Register>
        </Suspense>
      } />
    </Routes>
  
    </>
  )
}

export default App
