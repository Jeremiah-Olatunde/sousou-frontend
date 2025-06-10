import { Route, Switch } from "wouter";

import { Home } from "./pages/home";
import { CreateAccount } from "./pages/create-account";

export function Router() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/create-account" component={CreateAccount} />
      </Switch>
    </>
  );
}
