import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./shared/header/Layout";
import HomePage from "./pages/HomePage";
import PostDetails from "./features/posts/PostDetails";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
function App() {
  const routs=createBrowserRouter([
    {path:'',element:<Layout/> ,children:[
      {path:'',element:<HomePage/>},
      {path:'/post/:id',element:<PostDetails/>},
      {path:'about',element:<AboutPage/>},
      {path:'contact',element:<ContactPage/>},
    ]}
  ])
  return (
    <RouterProvider router={routs}/>
  );
}

export default App;
