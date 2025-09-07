import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import header from './components/header';
import Footer from './components/Footer';
import AppRoutes from './routes/AppRoutes';
import './App.css';
import { Analytics } from '@vercel/analytics/react';


function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        <header/>
        <main className="main-content">
          <AppRoutes />
        </main>
        {/* <Footer /> */}
      
      <Analytics />
      
      </div>
    </Router>
  );
}

export default App;