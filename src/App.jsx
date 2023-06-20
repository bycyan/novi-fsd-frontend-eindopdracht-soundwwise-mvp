import Nav from "./components/Nav.jsx";
import "./assets/global.css";
import {Routes, Route, useLocation} from "react-router-dom";
import Profile from "./pages/profile/profile.jsx";
import UpperNav from "./components/UpperNav.jsx";
import Tasks from "./pages/tasks/Tasks.jsx";
import Music from "./pages/music/music.jsx";
import Posts from "./pages/posts/Posts.jsx";
import MusicDetail from "./pages/music-detail/MusicDetail.jsx";
import LoginPage from "./pages/login/LoginPage.jsx";
import { AuthProvider } from './context/AuthProvider.jsx';


function App() {
    const location = useLocation();
    const hideNav = location.pathname === '/music/MusicDetail';

  return (
      <AuthProvider>
          <>

              {!hideNav && <UpperNav />}
              {!hideNav && <Nav />}
              <div>
              <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/tasks" element={<Tasks />} />
                    <Route path="/music" element={<Music />} />
                    <Route path="/posts" element={<Posts />} />
                    <Route path="/music/MusicDetail" element={<MusicDetail />} />
              </Routes>
              </div>

          </>
      </AuthProvider>

  );
}

export default App;


