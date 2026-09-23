import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../pages/Home";
import MembershipForm from "../pages/MembershipForm";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: RootLayout,
        children : [
            {
                index: true,
                Component: Home
            },
            {
                path: 'membership-form',
                Component: MembershipForm
            }
        ]
    }
])