
import './App.css';
import Home from './Component/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Playground from './Component/Playground';
function App() {
  return (
    <div className='App'>

      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/playground' element={<Playground/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
