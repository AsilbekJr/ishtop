import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import AuthLayout from "./pages/auth/AuthLayout.tsx";
import Register from "./pages/auth/Register.tsx";
import Login from "./pages/auth/Login.tsx";
import HomePage from "./pages/Home.tsx";
import Layout from "./components/Layout.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import ProfileCard, { type Profile } from "./pages/Profile.tsx";
import ProfileForm from "./pages/ProfileForm.tsx";
const demo: Profile = {
  name: "Akbar Xolidov",
  company: "Akbar Usta",
  serviceType: "Usta",
  experienceYears: 8,
  portfolio: ["/images/p1.jpg", "/images/p2.jpg"],
  packages: [
    {
      title: "Asosiy ta'mirlash",
      price: "200 000 UZS",
      description: "Xona ta'miri - shift, devorlar.",
    },
    {
      title: "Tez xizmat",
      price: "300 000 UZS",
      description: "24 soat ichida bajarish.",
    },
  ],
  location: "Buxoro viloyati, G'ijduvon",
  contacts: {
    phone: "+998901234567",
    telegram: "akbar_usta",
    email: "akbar@example.uz",
  },
  workingHours: "Dushanba–Juma 09:00–18:00",
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/ustalar",
        element: <h2 className="text-xl">Barcha ustalar ro‘yxati</h2>,
      },
      {
        path: "/xizmatlar",
        element: <h2 className="text-xl">Xizmatlar</h2>,
      },
      {
        path: "/profile",
        element: <ProfileCard profile={demo} />,
      },
      {
        path: "/profile-form",
        element: <ProfileForm />,
      },
      {
        path: "/auth",
        element: <AuthLayout />,
        children: [
          {
            index: true,
            element: <Navigate to="login" replace />,
          },
          {
            path: "register",
            element: <Register />,
          },
          {
            path: "login",
            element: <Login />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
