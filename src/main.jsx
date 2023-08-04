// Import des dépendances nécessaires
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store/store";

// Import des css
import "./styles/reset.css";
import "./styles/index.css";

import ConnectionForm from "./components/ConnectionForm/ConnectionForm";
import Inscription from "./components/Inscription/Inscription";
import Profil from "./components/pages/Profil/Profil";
import Transaction from "./components/Transaction/Transaction";

// Import Actions
import { logoutAction } from "./components/pages/Budgetpage/actions/logout";
import { deleteBudget } from "./components/pages/Budgetpage/actions/deleteBudget.js";

// Import des pages
import Main, {
  mainLoader,
} from "./components/pages/Budgetpage/layouts/Main.jsx";
import Dashboard, {
  dashBoardAction,
  dashboardLoader,
} from "./components/pages/Budgetpage/pages/Dashboard.jsx";
import Landing from "./components/pages/LandingPage/landingPage";
import Homepage from "./components/pages/Homepage/Homepage";
import Questspage from "./components/pages/Questspage/Questspage";
import Contactpage from "./components/pages/Contactpage/Contactpage";
import Friendspage from "./components/pages/Friendspage/Friendspage";
import Guildepage from "./components/pages/Guildepage/Guildepage";
import Shoppage from "./components/pages/ShopPage/ShopPage";
import Error from "./components/pages/Error/Error";
import Errordashboard from "./components/pages/Budgetpage/pages/Errordashboard.jsx";
import ExpensesPage, {
  expensesAction,
  expensesLoader,
} from "./components/pages/Budgetpage/pages/ExpensesPage.jsx";
import BudgetPage, {
  budgetAction,
  budgetLoader,
} from "./components/pages/Budgetpage/pages/BudgetPage.jsx";
import Layout from "./components/Layout.jsx";
import ConnectionFormCustom from "./components/ConnectionFormCustom/connectionFormCustom.jsx";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

import ProductDetail from "./components/ProductDetailView/ProductDetailView";

import Aboutus from "./components/pages/Aboutuspage/Aboutus.jsx";

const router = createBrowserRouter([
  // ----- Pages sans header, ni footer -----
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/signin",
    element: <ConnectionFormCustom />,
  },
  {
    path: "/signup",
    element: <Inscription />,
  },
  {
    path: "/app/aboutus",
    element: <Aboutus />,
  },

  // ----- Pages avec header & footer -----
  {
    path: "/app",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/app/homepage",
        element: (
          <PrivateRoute>
            <Homepage />
          </PrivateRoute>
        ),
      },
      {
        path: "/app/quests",
        element: (
          <PrivateRoute>
            <Questspage />
          </PrivateRoute>
        ),
      },
      {
        path: "/app/contact",
        element: <Contactpage />,
      },
      {
        path: "/app/friends",
        element: (
          <PrivateRoute>
            <Friendspage />
          </PrivateRoute>
        ),
      },
      {
        path: "/app/guilde",
        element: (
          <PrivateRoute>
            <Guildepage />
          </PrivateRoute>
        ),
      },
      {
        path: "/app/shop",
        element: (
          <PrivateRoute>
            <Shoppage />
          </PrivateRoute>
        ),
      },

      {
        path: "/app/shop/:productId/detail",
        element: (
          <PrivateRoute>
            <ProductDetail />
          </PrivateRoute>
        ),
      },
      {
        path: "/app/profil/1",
        element: (
          <PrivateRoute>
            <Profil />
          </PrivateRoute>
        ),
      },
      {
        path: "/app/transaction",
        element: <Transaction />,
      },
    ],
  },

  // ----- Application de gestion de budget -----
  {
    path: "/budget",
    element: (
      <PrivateRoute>
        <Main />
      </PrivateRoute>
    ),
    loader: mainLoader,
    errorElement: <Errordashboard />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader,
        action: dashBoardAction,
        errorElement: <Errordashboard />,
      },
      {
        path: "/budget/:id",
        element: <BudgetPage />,
        loader: budgetLoader,
        action: budgetAction,
        errorElement: <Errordashboard />,
        children: [
          {
            path: "delete",
            action: deleteBudget,
          },
        ],
      },
      {
        path: "expenses",
        element: <ExpensesPage />,
        loader: expensesLoader,
        action: expensesAction,
        errorElement: <Errordashboard />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
