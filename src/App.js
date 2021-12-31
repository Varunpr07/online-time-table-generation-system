import { useEffect } from "react";
import { useContextValue } from "./views/pages/shared/contextProvider";
import Footer from "./views/pages/shared/Footer";
import Header from "./views/pages/shared/Header";
import { allActionTypes } from "./views/pages/shared/reducer";
import Home from "./views/pages/Home";
import Login from "./views/pages/Login";
import SignUp from "./views/pages/SignUp";
import Dashboard from "./views/pages/Dashboard";
import PageNotFound from "./views/PageNotFound";
import Admin from "./views/pages/Admin";
import Help from "./views/pages/Help";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const [, dispatch] = useContextValue();
  useEffect(() => {
    const localuser = JSON.parse(localStorage.getItem("user"));
    if (localuser)
      dispatch({ type: allActionTypes.SETUSER, action: localuser });
  }, [dispatch]);

  // useEffect(() => {}, [user]);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/online-time-table-generation-system/"
          element={<Header />}
        >
          <Route index element={<Home />} />
          <Route
            path="/online-time-table-generation-system/login/"
            element={<Login />}
          />
          <Route
            path="/online-time-table-generation-system/signup/"
            element={<SignUp />}
          />
          <Route
            path="/online-time-table-generation-system/dashboard/"
            element={<Dashboard />}
          />
          <Route
            path="/online-time-table-generation-system/admin/"
            element={<Admin />}
          />
          <Route
            path="/online-time-table-generation-system/help/"
            element={<Help />}
          />
          <Route
            path="/online-time-table-generation-system/*"
            element={<PageNotFound />}
          />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
