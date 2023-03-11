import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'
import Homepage from './Components/Homepage/Homepage';
import EngHomepage from './Components/EngHomepage/EngHomepage'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Homepage></Homepage>}></Route>
        <Route path='/rs' element={<Homepage></Homepage>}></Route>
        <Route path='/en' element={<EngHomepage></EngHomepage>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
