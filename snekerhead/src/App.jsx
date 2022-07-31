import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './componants/navbar';
import { Home } from './componants/home';
import { Routes, Route} from "react-router-dom";
import { Men } from './componants/men';
import { Women } from './componants/women';
import { All } from './componants/all';
import Login from './componants/Login';
import { ShoeDetail } from './componants/shoedetail';
import { Cart } from './componants/cart';
import { Checkout } from './componants/checkout';
import { Payment } from './componants/payment';
// import Footer from './componants/footer';
import { Thankyou } from './componants/thankyou';
import Register from './componants/Register';


function App() {
  return (
    <div className="App">
    <ResponsiveAppBar/>
    <Routes>
    <Route path='' element={<Home/>}></Route>
    <Route path='/men' element={<Men/>}></Route>
    <Route path='/women' element={<Women/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/register' element={<Register/>}></Route>
    <Route path='/all' element={<All/>}></Route>
    <Route path='/shoedetail/:_id' element={<ShoeDetail/>}></Route>
    <Route path='/cart' element={<Cart/>}></Route>
    <Route path='/checkout' element={<Checkout/>}></Route>
    <Route path='/payment' element={<Payment/>}></Route>
    <Route path='/thankyou' element={<Thankyou/>}></Route>
    </Routes>
    {/* <Footer/> */}
     </div>
  );
}

export default App;
