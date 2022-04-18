import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import About from './Pages/About/About';

import Blogs from './Pages/Blogs/Blogs';
import Login from './Pages/Login/Login/Login';
import Resister from './Pages/Login/Resister/Resister';
import Checkout from './Pages/Checkout/Checkout/Checkout';
import RequirAuth from './Pages/Login/RequiirAuth/RequirAuth';
import NotFound from './NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/resister' element={<Resister></Resister>}></Route>
        <Route path='/checkout' element={
          <RequirAuth>
            <Checkout></Checkout>
          </RequirAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
