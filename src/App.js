import logo from './logo.svg';
import './App.css';
import { Link,Route,Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact'
import About from './Pages/About'
import Services from './Pages/Services';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footer from './Pages/Footer';

function App() {
  return (
  <>
  <div className=""> 
    <nav  class="navbar navbar-expand-lg navbar-dark bg-primary">
       <div class="container">
    <a class="navbar-brand" href="#">Redivivus | Technologies</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    </div>
       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link to="/" class="nav-link active">
            Home
          </Link>
        </li>
        <li class="nav-item">
        <Link to="/Contact" class="nav-link">
            Contact
          </Link>
        </li>
        <li class="nav-item">
        <Link to="/About" class="nav-link">
          About
          </Link>
        </li>
        
        <li class="nav-item">
        <Link to="/Services" class="nav-link">
          Services
          </Link>
        </li>

      </ul>
    </nav> 
      <Routes>
        <Route path='/' element={<Home /> }/>
        <Route path='/Contact' element={ <Contact />}/>
        <Route path='/About' element={ <About />}/>      
        <Route path='/Services' element={ <Services />}/>      
      </Routes>
      </div>
      <Footer className="footer"/>
  </>
  );
}

export default App;
