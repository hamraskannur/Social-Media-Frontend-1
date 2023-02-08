import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import User from "./Routes/User";
import Admin from "./Routes/Admin";
import ErrorPage from './Routes/ErrorPage'
import { useSelector } from "react-redux";
import Spinner from "./components/User/Spinner/Spinner";
import ToastContainer from "./components/Toast/ToastContainer";

function App() {
  const { loading } = useSelector((state) => state.loader);
  console.log(loading);
  return (
    <div>
      <Router>
        {loading && (
          <div className=" h-screen ">
            <Spinner />
          </div>
        )}
        {!loading && (
          <>
          <ToastContainer/>
            <Routes>
              <Route path="/*" element={<User />} />
            </Routes>
            <Routes>
              <Route path="/admin/*" element={<Admin />} />
            </Routes>
          
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
