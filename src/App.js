import "./App.css";
import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import PrivateRoute from "./components/hoc/privateroute";
import { isUserLoggedIn } from "./actions/auth.actions";
import { useDispatch, useSelector } from "react-redux";

function App() {

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);


  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
    // if(auth.authenticate){
    //   dispatch(getInitialData());
    // }
    

  }, [auth.authenticate]);

  return (
    <div className="App">
      <Switch>
        <PrivateRoute path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </div>
  );
}

export default App;
