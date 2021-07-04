import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import NewPirate from './views/NewPirate';
import Dashboard from './views/Dashboard';
import DetailPirate from './views/DetailPirate';
import Login from './views/Login';
import './App.scss';

function App() {
  return (
    <div className="App">
        <Router>
            <div>
                <nav>
                    <ul>
                        {/* <li>
                          <Link to="/">Home</Link>
                        </li> */}
                        {/* <li>
                          <Link to="/new">Add Pirate</Link>
                        </li> */}
                        <li>
                          <Link to="/Dashboard">Dashboard</Link>
                        </li>
                       {/*  <li>
                          <Link to="/details/:id">View pirate</Link>
                        </li> */}
                       {/*  <li>
                          <Link to="/login">Login</Link>
                        </li> */}
                    </ul>
                </nav>        
                
                <Switch>         
                    {/* <Route exact path="/">
                      <Dashboard/>
                    </Route> */}
                    
                    <Route exact path="/new">
                     <NewPirate/>
                    </Route>
                    <Route exact path="/Dashboard">
                      <Dashboard/>
                    </Route>
                    <Route exact path="/details/:id">
                      <DetailPirate/>
                    </Route> 
                    
                    <Route exact path="/login">
                      <Login/>
                    </Route>

                </Switch>
            </div>
        </Router>
    </div>
  );
}

export default App;
