import './App.css';
import Navbaar from './components/header/Navbaar';
import Newnav from './components/newnavbaar/newnav';
import Maincomp from './components/home/Maincomp';
import Footer from './components/footer/footer';
import Signin from './components/signup_sign/Signin';
import Signup from './components/signup_sign/Signup';
import {Routes,Route} from 'react-router-dom';
import Cart from './components/cart/Cart';
import Buynow from './components/buynow/Buynow';
function App() {
  return (
    <>
    <Navbaar />
    <Newnav />
    <Routes>
      <Route path='/' element={<Maincomp/>}/>
      <Route path='/login' element={<Signin/>}/>
      <Route path='/register' element={<Signup/>}/>
      <Route path='/getproductsone/:id' element={<Cart/>}/>
      <Route path='/buynow' element={<Buynow/>}/>
    </Routes>
  
    <Footer />
    </>
  );
}

export default App;
