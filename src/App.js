import './App.scss';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path = "/" component = {NavBar}/>
          <Route exact path="/" component={Home} />
          <Route exact path="/product/:productId" /*component={detalleteProducto}*//>
          <Route>404 Not Found!</Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default App;
