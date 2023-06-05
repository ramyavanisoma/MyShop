import Footer from './components/Footer';
import Header from './components/Header';
import {Container} from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import ProfileScreen from './screens/ProfileScreen'
import RegisterScreen from './screens/RegisterScreen'

import ProductScreen from './screens/ProductScreen';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CartScreen from './screens/CartScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
const App=()=> {
  return (
   <>
   <Router>
    <Header />
      <main>

        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} exact />
             
            <Route path='/product/:id' element={<ProductScreen />} />
            <Route path="/cart/:id" element={<CartScreen />} />
            <Route path="/cart" element={<CartScreen />} />
            <Route path='/order/:id' element={<OrderScreen />} />
            <Route path='/login' element={<LoginScreen />} />
            <Route path='/shipping' element={<ShippingScreen />} />
            <Route path='/payment' element={<PaymentScreen />} /> 
            <Route path='/register' element={<RegisterScreen />} />
              <Route path='/profile' element={<ProfileScreen />} />
            <Route path='/placeorder' element={<PlaceOrderScreen />} />

          </Routes>
        </Container>
    
      </main>
    <Footer />
   </Router>
   
   </>
  );
}

export default App;
