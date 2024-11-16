import './App.css'
import { AuthProvider } from './componentes/AuthContext'
import { BrowserRouter as Router , Routes,Route } from "react-router-dom";
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import Trending from './pages/Trending';
import Favourites from './pages/Favourites';
import NavBar from './componentes/NavBar';

function App() {

  return (
    <AuthProvider>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Welcome/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/trending' element={<Trending/>}/>
          <Route path='/favorite' element={<Favourites/>}/>
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
