import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ErrorPage } from "./pages/ErrorPage";

import "./App.css";

import { AppLayout } from "./components/Layout/AppLayout";

import{ Home }from "./pages/Home";          // if default export
import {About}from "./pages/About";        // if default export
import {Country}from "./pages/Country";    // Change this line to default import
import {Contact} from "./pages/Contact";    // if default export
import {CountryDetails}from "./components/Layout/CountryDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "country", element: <Country /> },
      { path: "country/:id", element: <CountryDetails /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
