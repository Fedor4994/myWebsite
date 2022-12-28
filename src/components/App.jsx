import { Routes, Route } from 'react-router-dom';
import Blog from 'views/Blog/Blog';
import Contacts from 'views/Contacts/Contacts';
import Home from 'views/Home/Home';
import Profile from 'views/Profile/Profile';
import Projects from 'views/Projects/Projects';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="profile" element={<Profile />} />
      <Route path="projects" element={<Projects />} />
      <Route path="blog" element={<Blog />} />
      <Route path="contact" element={<Contacts />} />
    </Routes>
  );
};
