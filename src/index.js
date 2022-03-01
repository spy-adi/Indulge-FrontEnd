import React from 'react'
import ReactDOM from 'react-dom';
import {Admin, Login, Registration, Signup} from './portals';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';


function App() {

    return (
      <Router>
            <Routes>
              <Route path='/' element={<Login/>} />
              <Route path='/register' element={<Signup/>} />
              <Route path='reg/*' element={<Registration />} />
              <Route path='ad/*' element={<Admin />} />
            </Routes>
      </Router>
    );
}
reportWebVitals();

ReactDOM.render(<App />, document.getElementById("root"));
