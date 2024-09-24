import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import Layout from './components/Layout'
import Cards from './components/Cards'
import Docter from './components/Docter'
import Logos from './components/Logos'
import Blogs from './components/Blogs'
import About from './pages/About'
import Service from './pages/Service'
import Contact from './pages/Contact'
import Data from './components/Data'
import Handle from './components/Handle'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <>
      <Home />
      {/* <Navbar /> */}
      <Layout />
      <Cards />
      <Docter />
      <Logos />
      < Blogs />
      < Footer />

    </>,
  },
  {
    path: "/about",
    element: <About />
  },

  {
    path: "/service",
    element: <Service />
  },
  {
    path: "/contact",
    element: <Contact />
  }

]);



function App() {
  return (
    <RouterProvider router={router} />
  )
}
export default App
