import React from 'react'
import ReactDOM from 'react-dom';
import {Admin, Login, Registration, Signup} from './portals';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import PrivateRoute from './CommonComponents/PrivateRoute';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import LoadUser from "./CommonComponents/LoadUser";
function App() {

    return (
      <AuthState>
        <AlertState>
        <LoadUser/>
          <Router>
                <Routes>
                  <Route path='/' element={<Login/>} />
                  <Route path='/register' element={<Signup/>} />
                  <Route path='reg/*' element={<PrivateRoute component={Registration} />} />
                  {/* <Route path='reg/*' element={<Registration/>}/> */}
                  <Route path='ad/*' element={<Admin />} />
                </Routes>
          </Router>
        </AlertState>
      </AuthState>
    );
}
reportWebVitals();

ReactDOM.render(<App />, document.getElementById("root"));

