import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import './App.css'
import Advice from './components/Advice';

const App = () => {
    return(
      <div className='app'>
        <Header />
        <Advice />
        <Footer />
      </div>
    );
}

export default App;