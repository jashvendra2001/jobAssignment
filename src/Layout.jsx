import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet, useOutlet } from 'react-router-dom';
import DataContext from './Datacontext';


const Layout = () => {
  const [isNightMode, setIsNightMode] = useState(false);

  const handleToggle = () => {
    setIsNightMode(!isNightMode);
  };


  return (
    
    <DataContext.Provider value={isNightMode}>
     <Header toggleBackground={handleToggle} isNightMode={isNightMode} />
       <Outlet  />
      <Footer />
    </DataContext.Provider>
     
   
  );
};

export default Layout;
