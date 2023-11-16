import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Details from "./Pages/Details/Details";
import Error from "./Pages/Error/Error";
import MainAbout from "./Pages/MainAbout/MainAbout";
import LoginTab from "./Pages/Login/LoginTab";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/about" element={<MainAbout />} />
        <Route path="/login" element={<LoginTab />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
