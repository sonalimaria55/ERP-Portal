// // import React from "react";
// // import ReactDOM from "react-dom/client";
// // import { BrowserRouter } from "react-router-dom";
// // import store from "./app/store";
// // import { StrictMode } from 'react'
// // import { createRoot } from 'react-dom/client'
// // import './index.css'
// // import App from './App.jsx'
// // import { Provider } from "react-redux";

// // ReactDOM.createRoot(document.getElementById('root')).render(
// //    <Provider store={store}>
// //    <BrowserRouter>
// //     <App />
// //     </BrowserRouter>
// //    </Provider>
// // );
// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import { Provider } from "react-redux";
// import { ToastContainer } from "react-toastify";
// import { ThemeProvider, CssBaseline } from "@mui/material";
// import theme from "./theme/theme";


// import "react-toastify/dist/ReactToastify.css";

// import App from "./App";
// import store from "./app/store";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <Provider store={store}>
//     <BrowserRouter>

//  <ThemeProvider theme={theme}>
//       <CssBaseline />

//       <App />
//       <ToastContainer
//        position="top-right"
//         autoClose={3000} 
//         />
//          </ThemeProvider>
//     </BrowserRouter>
//   </Provider>
// );
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import { store } from "./app/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);