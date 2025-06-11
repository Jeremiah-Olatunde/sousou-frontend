import { Route, Switch } from "wouter";

import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { Register } from "./pages/register";

export function Router() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </>
  );
}
