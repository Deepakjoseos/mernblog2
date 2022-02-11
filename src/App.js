import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Error from './components/error/error';
import Welcome from './pages/Welcome';
import Loginpage from './pages/Loginpage';
import Signuppage from './pages/Signuppage';
import AboutPage from './pages/AboutPage';
import ArticlelistPage from './pages/ArticlelistPage';
import Articlepage from './pages/Articlepage';
import Homepage from './pages/Homepage';
import Addblogpage from './pages/Addblogpage';

function App() {
  return (

    <Router>

    <>  

    <Routes>
      <Route path='/' element={<Welcome />}/>
      <Route path='/home' element={<Homepage />}/>
      <Route path='/add-blog' element={<Addblogpage />} />
      <Route path='/signup' element={<Signuppage />}/>
      <Route path='/login' element={<Loginpage />}/>
      <Route path='/about' element={<AboutPage />}/> 
      <Route path='/article-list' element={<ArticlelistPage />} />
      <Route path='/article/:name' element={<Articlepage />} />  
      <Route path='*' element={<Error />} />   
    </Routes>
      </>
      
      
      
      </Router>
    
    
    
  );
}

export default App;
