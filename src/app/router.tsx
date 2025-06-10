import { Route, Switch } from "wouter";

import { Home } from "./pages/home";
import { CreateAccount } from "./pages/create-account";
import { Login } from "./pages/login";

export function Router() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/create-account" component={CreateAccount} />
      </Switch>
    </>
  );
}
