import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  BrowserRouter,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/Home.jsx";
import Description from "./components/Description.jsx";
import UserContextProvider from "./context/UserContextProvider.jsx";
import CartContextProvider from "./context/CartContextProvider .jsx";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//       <Route path="/" element={<App />}>
//         <Route path="" element={<Home />} />
//         <Route path="description/:id" element={<Description />} />
//       </Route>
//   ),
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserContextProvider>
    <CartContextProvider>
      <BrowserRouter>
        {/* <RouterProvider router={router} /> */}
        <App />
      </BrowserRouter>
    </CartContextProvider>
  </UserContextProvider>
);
