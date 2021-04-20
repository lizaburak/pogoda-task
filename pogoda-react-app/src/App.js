import "./App.css";
import React from "react";
import Table from "./components/Table.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/map">Map</Link>
            </li>

            <li>
              <Link to="/highlights">Top groups</Link>
            </li>
          </ul>
        </nav>

        <div className="App">
          <section>
            <Switch>
              <Route path="/about">
                <About />
              </Route>

              <Route path="/map">
                <h1>Map</h1>
                <Table/>
              </Route>

              <Route path="/highlights">
                <h1>Top groups</h1>
                Click at the button to reload the page and see the top groups
                list! 
              </Route>

              <Route path="/">
                <h1>Home</h1>
                Welcome to our service. Please explore
              </Route>

              <Route path="*">
                <NoMatch />
              </Route>
            </Switch>
          </section>
        </div>
      </div>
    </Router>
  );
}

function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

function About() {
  let location = useLocation();

  return (
    <div>
      <h2>About us</h2>
      <p>Here is the description of the service and necessary terms.</p>
    </div>
  );
}

export default App;