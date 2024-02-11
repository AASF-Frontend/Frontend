// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './Screens/Home';
import Navbar from './Components/Navbar'
import Autoplay_slider from './Components/Autoplay_slider';
import Gallerysection from './Components/Gallerysection';


function App() {
  return (

   <div>

     <div>
      <Navbar></Navbar>
    </div>

    <Autoplay_slider/>

    <Gallerysection/>

    <Routes>
      <Route path='/' ></Route>
      <Route path='/About'></Route>
      <Route path='/Quiz'></Route>
      <Route path='/Games'></Route>
      <Route path='/Login'></Route>
      <Route path='/Signup'></Route>
    </Routes >
   </div>

  );
}
export default App;
