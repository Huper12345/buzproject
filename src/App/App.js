import './App.scss';
import React from "react"
import {Routes, Route} from 'react-router-dom';
import { Layout } from '../pages/Layout';
import { Home } from '../pages/Home';



export const App = () => {
  return(
    <div className="App">
        <Routes>
          <Route path='/' element={<Layout />}>

            <Route index element={<Home />} />

          </Route>
        </Routes>
    </div>
  )
}
