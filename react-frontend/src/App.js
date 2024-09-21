import ListEmployeeComponent from './component/ListEmployeeComponent';
import HeaderComponent from './component/HeaderComponent';
import FooterComponent from './component/FooterComponent';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from "react-router";

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import CreateEmployeeComponent from './component/CreateEmployeeComponent';
import UpdateEmployeeComponent from './component/UpdateEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
	      <div class="container">
        	<Routes>
          <Route path='/' element={<ListEmployeeComponent />} />
          <Route path='/employees' element={<ListEmployeeComponent />} />
          <Route path='/add-employee' element={<CreateEmployeeComponent />} />
          <Route path='/update-employee/:id' element={< UpdateEmployeeComponent/>} />
        	</Routes>
	    </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;