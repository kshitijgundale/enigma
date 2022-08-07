import 'bootstrap/dist/css/bootstrap.min.css';

import Title from "./components/title";
import Dashboard from './components/dashboard/dashboard';
import CreateNewWorkspace from './components/createNewWorkspace';

import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Title></Title>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/create-new-workspace' element={<CreateNewWorkspace></CreateNewWorkspace>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
