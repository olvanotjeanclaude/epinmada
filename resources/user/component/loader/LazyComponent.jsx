import { Suspense } from "react";
import Loader from "./Loader";

const LazyComponent = (Component) => (props) => (
    <Suspense fallback={<Loader />}>
        <Component {...props} />
    </Suspense>
);

export default LazyComponent;