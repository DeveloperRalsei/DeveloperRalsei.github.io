
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Err404 from './Pages/404';
import Main from './Pages/Main';
import "./Styles/main.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' >
          <Route path='/' index element={<Main/>}/>
          <Route path='about' element={<Main/>}/>
        </Route>
        <Route path="*" element={<Err404 message={"Sayfa Bulunamadı"}/>}/>
      </Routes>
    </BrowserRouter>    
  );
}

export default App;
