import { createRoot } from 'react-dom/client'
import RootPage from "./Page/RootPage.tsx";
import {createBrowserRouter, RouterProvider} from "react-router";
import HomePage from "./Page/HomePage.tsx";
import SkillsPage from "./Page/SkillsPage.tsx";
import ProjectPage from "./Page/ProjectPage.tsx";
import ContactPage from "./Page/ContactPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootPage/>,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: '/skills',
                element: <SkillsPage />
            },
            {
                path: '/project',
                element: <ProjectPage />
            },
            {
                path: '/contact',
                element: <ContactPage />
            }
        ]
    }
])

const reactRoot = createRoot(document.querySelector("#root") as HTMLDivElement);
reactRoot.render(
    <RouterProvider router={router} />
)
