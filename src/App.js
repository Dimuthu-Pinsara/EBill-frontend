import logo from './logo.svg';
import './App.css';
import NavBarTest from './components/NavBarTest';
import Login from './components/pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Ceb from './components/pages/Ceb';

function App() {
  return (
    <div className="App">
      <div className='container-fluid bg-white p-0'>
        <NavBarTest />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/ceb' element={<Ceb />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
