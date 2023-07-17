import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
// import NewsItem from './Components/NewsItem';

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path='/' element={<News key='general' pageSize={6} country='in'category='general' />}></Route>
             <Route exact  path='/Business' element={<News key='Business' pageSize={6} country='in'category='Business' />}></Route>
             <Route exact path='/Entertainment' element={<News key='Entertainment' pageSize={6} country='in'category='Entertainment' />}></Route>
             <Route exact path='/Health' element={<News key='Health' pageSize={6} country='in'category='Health' />}></Route>
             <Route exact path='/Science' element={<News key='Science' pageSize={6} country='in'category='Science' />}></Route>
             <Route exact path='/Sports' element={<News key='Sports' pageSize={6} country='in'category='Sports' />}></Route>
             <Route exact path='/Technology' element={<News key='Technology' pageSize={6} country='in'category='Technology' />}></Route>
        </Routes>
        </BrowserRouter>
      </div>
    )
  }
}

          // <Navbar />
          // 
          //   
          // </Routes>
