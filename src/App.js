import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import Friends from './Components/Friends/Friends';
import About from './Components/About/About';
import Navbar from './Components/Navbar/Navbar';
import NotFound from './Components/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Friends" element={<Friends></Friends>}></Route>
        <Route path="/About" element={<About></About>}></Route>
        <Route path="/Navbar" element={<Navbar></Navbar>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>

    </div>
  );
}

export default App;
