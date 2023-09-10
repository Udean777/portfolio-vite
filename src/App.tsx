import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/section/Home";
import About from "./components/section/About";
import Skills from "./components/section/Skills";
import Projects from "./components/section/Projects";
import Contact from "./components/section/Contact";
import RootElement from "./components/RootElement";
import { DarkModeProvider } from "./components/DarkMode/DarkContext";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootElement />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    )
  );

  // const router = createBrowserRouter([
  //   {
  //     path: '/',
  //     element: <RootElement />,
  //     children: [
  //       {
  //         path: '/',
  //         element: <Home />
  //       },
  //       {
  //         path: '/about',
  //         element: <About />,
  //       }
  //     ]
  //   }
  // ])

  return (
    <DarkModeProvider>
      <RouterProvider router={router} />
    </DarkModeProvider>
  );
}

export default App;
