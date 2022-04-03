import React from "react";
import { Route, Routes } from "react-router-dom";
import LayoutStruture from "../Layout";
import Login from "../pages/login";
import NotFound from "../pages/NotFound";
import { Dasboard } from "../pages/school";
import UsersPanel from "../pages/school/user";
import PrivateRoute from "./PrivateRoute";




const PagesRouter: React.FC = (): JSX.Element => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route
      path="/dashboad-school"
      element={
        <LayoutStruture>
          <PrivateRoute>
            <Dasboard />
          </PrivateRoute>
        </LayoutStruture>
      }
    />
    <Route
      path="/users"
      element={
        <LayoutStruture>
          <PrivateRoute>
            <UsersPanel />
          </PrivateRoute>
        </LayoutStruture>
      }
    />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default PagesRouter;
