import React,{useState,useEffect} from 'react'
// import Components from './components/'
import TopSide from './components/TopSide'
import Footer from './components/Footer/Footer'

import {
  BrowserRouter,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import {routers} from './routers'

import store from './redux/store'
import { Provider } from 'react-redux'

import './css/bootstrap.css'
import './css/animate.css'
import './css/style.css'
import './fonts/ionicons/css/ionicons.min.css'
import './fonts/fontawesome/css/font-awesome.min.css'

import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'

import HOCContext from './components/MyHOC/HOCContext'

function App() {
  // const [title, setTitles] = useState('hello')
  // useEffect(() =>{
  //   console.log('asdasd',title)
  // },[])
  return (
    <Provider store={store}>
      <HOCContext.Provider>
      <BrowserRouter>
          <Navbar />
          {/* <Header title="Our Rooms"/> */}
          
        <Switch>
            {
              routers.map((item, index) => {
                const { Component, props } = item;
                return (
                  <Route exact={item.exact} path={item.path} keys={index}>
                    <Component {...props} />
                  </Route>
                )
              })
            }
          </Switch>
        <Footer/>
      </BrowserRouter>
      </HOCContext.Provider>
    </Provider>
  );
}

export default App;
