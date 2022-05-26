import {BrowserRouter, Route,Link,Routes} from 'react-router-dom'

import Header from './components/header';
import Home from './components/contents/home';
import Footer from './components/footer';

import About from './components/contents/aboutus';
import Beauty from './components/contents/kmbeauty'; 
import LifeStyle from './components/contents/lifestyle';
import Education from './components/contents/education'
import Contact from './components/contents/contactus';
import './App.scss';

function App() {
  return (
    <BrowserRouter  id='App' 
    >
      <div className='headerContainer'>
      <Header></Header>
      </div>

      <Routes >
          <Route  path='/' element={<Home></Home>} />
          <Route  path='/about' element={<About></About>} />
          <Route  path='/beauty' element={<Beauty></Beauty>}  />
          <Route  path='/lifestyle'  element={<LifeStyle></LifeStyle>}  />       
          <Route  path='/education'  element={<Education></Education>}  />          
          <Route  path='/contact'  element={<Contact></Contact>} />
      </Routes>

      <div className='footerContainer'>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
