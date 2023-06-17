import Nav from "./components/Nav.jsx";
import "./assets/global.css";
import {Routes, Route} from "react-router-dom";
import Profile from "./pages/profile/profile.jsx";
import UpperNav from "./components/UpperNav.jsx";
import Tasks from "./pages/tasks/Tasks.jsx";


function App() {

  return (
      <>
          <UpperNav />
          <Nav />
          <div>
          <Routes>
                <Route path="/profile" element={<Profile />} />
                <Route path="/tasks" element={<Tasks />} />
          </Routes>
          </div>
      </>
  );
}

export default App;


