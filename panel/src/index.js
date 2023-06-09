import {
  BackendError,
  Lockscreen,
  NotFound,
  PasswordReset,
  Signin,
  Signup
} from "./pages";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import AppProvider from "./components/AppProvider/AppProvider";
import React from "react";
import registerServiceWorker from "./registerServiceWorker";
import { render } from "react-dom";
import { AuthProvider } from "./components/AppProvider/AuthProvider";
import Layout from "./containers/Layout";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
render(
  <AppProvider>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/404" component={NotFound} />
            <Route exact path="/500" component={BackendError} />
            <Route exact path="/Lockscreen" component={Lockscreen} />
            <Route exact path="/forgot" component={PasswordReset} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/signup" component={Signup} />
            {/* <Route exact path="/utilisateurs" component={Users} /> */}
            <Route path="/" component={Layout} />
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  </AppProvider>,
  document.getElementById("root")
);

registerServiceWorker();
