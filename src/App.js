import { BrowserRouter, Routes, Route} from 'react-router-dom';

//components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

//pages
import Home from './pages/Home/Home';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
          <Header />
          <div>
            <Routes>
              <Route path="/" element={<Home/>}/>
            </Routes>
          </div>
          <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
