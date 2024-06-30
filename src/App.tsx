
import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';

import Err404 from './Pages/404';
import MainLayout from './Layouts/MainLayout'
import "./Styles/main.css"
import './Components/SmoothScroll'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout/>}/>
        <Route path="*" element={<Err404 message={"Sayfa Bulunamadı"} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
