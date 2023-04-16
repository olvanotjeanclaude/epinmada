import { Redirect, Route, Switch } from "react-router-dom";
import routes from "../routes";

 const getRoutes = (
    <Switch>
        {routes.items.map((item, index) =>
            item.type === "external" ? (
                <Route
                    exact
                    path={item.path}
                    component={item.component}
                    name={item.name}
                    key={index}
                />
            ) : item.type === "submenu" ? (
                item.children.map(subItem => (
                    <Route
                        exact
                        path={`${item.path}${subItem.path}`}
                        component={subItem.component}
                        name={subItem.name}
                    />
                ))
            ) : (
                <Route
                    exact
                    path={item.path}
                    component={item.component}
                    name={item.name}
                    key={index}
                />
            )
        )}
        <Redirect to="/404" />
    </Switch>
);

export default getRoutes;