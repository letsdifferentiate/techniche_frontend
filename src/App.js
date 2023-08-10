import React from 'react';
import Header from './components/Header/header';
import AppRoutes from './AppRoutes';
import Footer from './components/Footer/Footer';
import PrivacyTerms from './components/Pages/Privacy/Privacy';
function App() {
  return (
    <div className="App">
      <Header/>
      <AppRoutes/>
      {/* <PrivacyTerms/> */}

    </div>
  );
}

export default App;
