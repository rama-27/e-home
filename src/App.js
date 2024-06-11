import React from 'react';
import './App.css';
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';

function App() {
  return (
    <div>
      <header id="header">
        <Header/>
      </header>
      <footer id="footer">
        <Footer/>
      </footer>

    </div>
  );
}

export default App;
