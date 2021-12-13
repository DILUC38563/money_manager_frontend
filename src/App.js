import "./App.css";
import AppBar from "@material-ui/core/AppBar";
import { Daily } from "./components/Daily/Daily";
// import { Weekly } from "./components/Weekly/Weekly";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { GlobalProvider } from "./contexts/Daily/GlobalStates";

function App() {
  return (
    <Router>
      <GlobalProvider>
        <AppBar position="static" color="primary" style={{ borderRadius: 10 }}>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/moneymanager">Money-Manager</Link>
            {/* <Link to="/weekly">weekly-expense</Link> */}
          </nav>
        </AppBar>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/moneymanager">
            <Daily />
          </Route>

          {/* <Route path="/weekly">
            <Weekly />
          </Route> */}
        </Switch>
      </GlobalProvider>
    </Router>
  );
}

function Home() {
  return (
    <div className="home">
      <h1 style={{ paddingLeft: "25px" }}>Welcome to Money Manager!!</h1>
    </div>
  );
}
export default App;
