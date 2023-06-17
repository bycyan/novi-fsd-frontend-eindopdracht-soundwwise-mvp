import Nav from "./components/Nav.jsx";
import "./assets/global.css";
import { Routes, Route } from "react-router-dom";
import Profile from "./pages/profile/profile.jsx";


function App() {

  return (
      <>
          <Nav />
          <div className="container">
          <Routes>
                <Route path="/profile" element={<Profile />} />
          </Routes>
          </div>
      </>
  );
}

export default App;


