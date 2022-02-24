
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Allusers from './components/allusers';
import Editusers from './components/editusers';
import Navbar from './components/Navbar';
import Newusers from './components/newusers';

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>   {/*routing enabled*/}
      <Navbar/>
      <Routes>
        <Route  path="/" element={<Allusers/>} ></Route> {/*component rendering*/}
        <Route exact path="/newusers" element={<Newusers/>} > </Route>
        <Route exact path="/editusers/:id" element={<Editusers/>} ></Route>
         
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
