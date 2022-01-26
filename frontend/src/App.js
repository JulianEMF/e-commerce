import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';

function App() {
  return (
    <Router>
      <Header />
          <main className="py-3">
            <Container>
              <Routes>
                {/* The exact keyword ensures that the browser is routed when the url is exactly "/" and not "/" plus other values */}
                <Route path='/' element={<HomeScreen/>} />
                <Route path='/login' element={<LoginScreen/>} />
                <Route path='/product/:id' element={<ProductScreen/>}/>
                <Route path='/cart/:id' element={<CartScreen/>}/>
                <Route path='/cart/' element={<CartScreen/>}/>
              </Routes>
            </Container>
          </main>
      <Footer />
    </Router>
  );
}

export default App;
