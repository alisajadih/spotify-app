import React from "react";
import "./App.css";
import { Switch ,Redirect} from "react-router-dom";
import { ContextProvider } from "./Context";
import { renderRoutes, routes } from "./routes";

function App() {
  return (
    <div className="App">
      
      <ContextProvider>
        <Switch>
          <Redirect exact from="/" to="/main/home" />
          {renderRoutes(routes)}
        </Switch>
      </ContextProvider>
    </div>
  );
}

export default App;
