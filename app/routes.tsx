import { createBrowserRouter } from "react-router";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Work } from "./pages/Work";
import { Resume } from "./pages/Resume";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "work", Component: Work },
      { path: "resume", Component: Resume },
      { path: "contact", Component: Contact },
    ],
  },
]);
