import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Button } from "@/components/ui/button"
import Layout from './pages/Layout';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import Quiz from './pages/Quiz';

//this is the comment added from harsh side
//this is the second comment added by harsh
//third comment
function App() {

  return (
 <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NoPage/>} />
          <Route path="/quiz" element={<Quiz />} />
        </Route>
      </Routes>
    </BrowserRouter>
    //this comment added from harsh
  )
}

export default App
