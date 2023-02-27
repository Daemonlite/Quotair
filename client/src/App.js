import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {ToastContainer} from 'react-toastify'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import CreatePost from './pages/CreatePost';



function App() {
  return (
    <div >
<BrowserRouter>
<ToastContainer position='bottom-left'/>
<Navbar/>
<Routes>
  <Route path='/home'  element={<Home/>}/>
  <Route path='/' element={<Login/>} />
  <Route path='/register' element={<Register/>}/>
  <Route path='/create_post' element={<CreatePost/>}/>
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
