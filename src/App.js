import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyles from './globalStyles';
import { Navbar, Footer } from './components'; // Komponenty pre Navbar a Footer
import Home from './pages/HomePage/Home'; // Hlavná stránka
import Services from './pages/Services/Services'; // Stránka služieb
import Products from './pages/Products/Products'; // Stránka produktov
import SignUp from './pages/SignUp/SignUp'; // Stránka na prihlásenie
import ScrollToTop from './components/ScrollToTop'; // Komponent na skrolovanie hore

function App() {
  return (
    <Router>
      {/* Globálne štýly pre celý projekt */}
      <GlobalStyles />
      
      {/* Komponent na skrolovanie hore po zmene stránky */}
      <ScrollToTop />
      
      {/* Navbar bude viditeľný na každej stránke */}
      <Navbar />
      
      {/* Hlavné routovanie medzi jednotlivými stránkami */}
      <Switch>
        <Route path='/' exact component={Home} /> {/* Domovská stránka */}
        <Route path='/services' component={Services} /> {/* Služby */}
        <Route path='/products' component={Products} /> {/* Produkty */}
        <Route path='/sign-up' component={SignUp} /> {/* Prihlásenie */}
      </Switch>
      
      {/* Footer bude viditeľný na každej stránke */}
      <Footer />
    </Router>
  );
}

export default App;
