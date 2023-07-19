import React, { StrictMode } from 'react';
import { createRoot } from "react-dom/client";
import MainApp from './MainApp.jsx';


import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
 

if (document.getElementById("app")) {
    const root = createRoot(document.getElementById("app"));

    root.render(<StrictMode>
        <MainApp />
    </StrictMode>);
}