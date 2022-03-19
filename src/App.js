import "./styles.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Error from "./components/Error/Error";

export default function App() {
  let location = useLocation();

  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/Error" element={<Error />} />
      </Routes>
    </>
  );
}
