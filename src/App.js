
import './App.css';
import Navbar from './Component/Header/Navbar'
import NewNavBar from './Component/NewNavbar/NewNavBar';
import Maincomponent from './Component/Home/Maincomponent';
import Footer from './Component/Footer/footer'
import Sign_in from './Component/Signup_Signin/Sign_in';
import Sign_up from './Component/Signup_Signin/Sign_up';
import Cart from './Component/Cart/cart'
import Buynow from './Component/BuyNow/buynow';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <NewNavBar />
      <Routes>
        <Route path="/" element={<Maincomponent />} />
        <Route path="/login" element={<Sign_in />} />
        <Route path="/register" element={<Sign_up />} />
        <Route path="/getproductsone/:id" element={<Cart />} />
        <Route path="/buynow" element={<Buynow />} />
      </Routes>

      <Footer />



    </>
  );
}

export default App;
