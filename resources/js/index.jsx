import React, { StrictMode } from 'react';
import { createRoot } from "react-dom/client";
import MainApp from './MainApp.jsx';

if (document.getElementById("app")) {
    const root = createRoot(document.getElementById("app"));

    root.render(<StrictMode>
        <MainApp />
    </StrictMode>);
}