
import './App.css';
import {Routes, Route} from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';
import Main from './Main';

import About from './components/About';
import Reservations from './components/Reservations';
import OrderOnline from './components/OrderOnline';

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/orderonline" element={<OrderOnline />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
