import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './Pages/Home/HomePage'
import CoursePage from './Pages/Course/CoursePage'
import TeachePage from './Pages/Teache/TeachePage'
import AboutPage from './Pages/About/AboutPage'
import CommentsPage from './Pages/Comments/CommentsPage'
import ContactPage from './Pages/Contact/ContactPage'
import BsWhatsapp  from './components/whatsApp/WhatsApp'
// i18next connect
import "./locales/i18n";
// CSS style
import './index.css'
import Loading from './Pages/Home/Loading';
import { useState } from 'react';
import { useEffect } from 'react';


const App = () => {
  const [loading , setLoading] = useState(true)
 

  useEffect(() =>{
    if(loading){
    setTimeout(() => {
    setLoading(false);
  }, 200000);
    }
  },[loading] )

  if (loading) return <Loading/>
  return (
    <div style={{fontFamily: 'Montserrat, sans-serif'}}>
      <BsWhatsapp />
      <Routes>
        <Route path ='/' element = {<Layout/>}>
          <Route index element={<HomePage/>}/>
          <Route path='Course' element={<CoursePage/>}/>
          <Route path='Teache' element={<TeachePage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='Comments' element={<CommentsPage/>}/>
          <Route path='Contact' element={<ContactPage/>}/>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
