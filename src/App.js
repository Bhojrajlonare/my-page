import './App.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Registration from './Components/Pages/registration';
import Userdetail from './Components/Pages/Userdetail';
import Edituser from './Components/Pages/Edituser';
import Deleteuser from './Components/Pages/Deleteuser';
import Login from './Components/Pages/Login';
import Home from './Components/Pages/Home';
import Forgot from './Components/Pages/Forgot';
import Contectus from './Components/Pages/Contectus';
import Information from './Components/Pages/Information';

function App() {
  return (
   
      <div className="main">
        <BrowserRouter>
        
      <Routes>
        <Route  path='/registration' element={<Registration/>}/>
      <Route path='/userdetail' element={<Userdetail/>}/>
      <Route path='/edituser' element={<Edituser/>}/>
      <Route path='/deleteuser' element={<Deleteuser/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/forgot' element={<Forgot/>}/>
      <Route path='/contectus' element={<Contectus/>}/>
      <Route path='/information' element={<Information/>}/>
      </Routes>
        
      </BrowserRouter>
      </div>
   
  );
}

export default App;
