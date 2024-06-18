import 'bootstrap/dist/css/bootstrap.min.css' 
import 'bootstrap/dist/js/bootstrap.min.js'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Eventos from './components/Eventos';
import Menu from './components/Menu';

function App() {
  return (
    <>
      <Router>
          <Routes>
              <Route path='/' element={<Menu/>}/>
              <Route path='/eventos' element={<Eventos/>}/>
          </Routes>
      </Router>
    </>
    
  );
}

export default App;
