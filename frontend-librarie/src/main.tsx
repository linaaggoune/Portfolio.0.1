import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import { Provider } from "./provider.tsx";

import "@/styles/globals.css";
import { MediaQueryProvider } from "@/context/mediaQueryContext.tsx";
import {HashRouter} from "react-router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <MediaQueryProvider>
            <HashRouter>
                <App />
            </HashRouter>
        </MediaQueryProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
