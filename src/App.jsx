import Nav from "./components/Nav.jsx";
import "./assets/global.css";
import { Routes, Route } from "react-router-dom";
import Profile from "./pages/profile/profile.jsx";
import UpperNav from "./components/UpperNav.jsx";


function App() {

  return (
      <>
          <UpperNav />
          <Nav />
          <div>
          <Routes>
                <Route path="/profile" element={<Profile />} />
          </Routes>
          </div>
      </>
  );
}

export default App;


