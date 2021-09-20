import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from "./component/pages/Home";
import Contact from './component/pages/Contact';
import About from './component/pages/About';
import Navbar from './component/layout/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NotFound from './component/pages/NotFound';
import AddUser from './component/users/AddUser';
import EditUser from './component/users/EditUser';

 
function App() {
  return (
     
      <Router>
        <div className="App">
      <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/users/add' component={AddUser} />
          <Route exact path='/users/edit/:id' component={EditUser} />
          <Route component={NotFound} />

        </Switch>

          </div>
          </Router>
   
  );
}

export default App;
