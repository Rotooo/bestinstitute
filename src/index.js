import React from "react";
import * as ReactDOMClient from "react-dom/client";
import HolaMundo from "./Pages/HomePage";
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import './assets/styles/argon-design-system.css';
import './assets/styles/argon-design-system.min.css';

const root = ReactDOMClient.createRoot(document.getElementById("app"));
root.render(
    <HolaMundo />
);