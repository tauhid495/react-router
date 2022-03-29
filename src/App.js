
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';
import FriendDetail from './Components/friendDetail/FriendDetail';
import Friends from './Components/Friends/Friends';
import Header from './Components/header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/friends' element={<Friends />} />
        <Route path='/friends/:friendId' element={<FriendDetail />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
