import 'bootstrap/dist/css/bootstrap.min.css';

import Title from "./components/title";
import Dashboard from './components/dashboard/dashboard';
import CreateFirstWorkspace from './components/createFirstWorkspace';
import CreateWorkspaceModal from './components/modals/createWorkspaceModal';
import CreateModelModal from './components/modals/createModelModal';

import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom"

function App() {
  return (
    <div>
      <div>
        <CreateWorkspaceModal></CreateWorkspaceModal>
        <CreateModelModal></CreateModelModal>
      </div>
      <Router>
        <Routes>
          <Route path='/' element={<Title></Title>}></Route>
          <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
          <Route path='/create-first-workspace' element={<CreateFirstWorkspace></CreateFirstWorkspace>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
