
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import 'jquery/dist/jquery.min.js'
import 'popper.js/dist/popper'
import { Route, BrowserRouter as Router } from "react-router-dom";
import CreateNote from "./components/CreateNote";
import Navegation from './components/Navegation';
import Notes from "./components/Notes";
import Users from './components/Users';

function App() {
  return (
    <Router>

      <Navegation></Navegation>
      <Route path="/mern-stack-frontend" exact component={Notes} />
      <Route path="/mern-stack-frontend/edit/:id" exact component={CreateNote} />
      <Route path="/mern-stack-frontend/create" exact component={CreateNote} />
      <Route path="/mern-stack-frontend/user" exact component={Users} />

    </Router>
  );
}

export default App;
