import { useState, useEffect } from 'react';
import Dashboard from './pages/Dashboard';
import './App.css';
import { ThemeProvider } from '@mui/material';
import theme from "./assets/js/theme";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
