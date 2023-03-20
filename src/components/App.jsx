import { Routes, Route } from 'react-router-dom';
import Blog from 'views/Blog/Blog';
import Contacts from 'views/Contacts/Contacts';
import Home from 'views/Home/Home';
import PostPage from 'views/PostPage/PostPage';
import Profile from 'views/Profile/Profile';
import ProjectPage from 'views/ProjectPage/ProjectPage';
import Projects from 'views/Projects/Projects';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="profile" element={<Profile />} />
      <Route path="projects" element={<Projects />} />
      <Route
        path="projects/phonebook"
        element={<ProjectPage title="Phonebook" />}
      />
      <Route
        path="projects/spacenews"
        element={<ProjectPage title="Space News" />}
      />
      <Route
        path="projects/githubsearcher"
        element={<ProjectPage title="GitHub Searcher" />}
      />
      <Route
        path="projects/moviemania"
        element={<ProjectPage title="Movie Mania" />}
      />
      <Route
        path="projects/filmoteka"
        element={<ProjectPage title="Filmoteka" />}
      />
      <Route
        path="projects/deliveryfood"
        element={<ProjectPage title="Delivery Food" />}
      />
      <Route
        path="projects/typemania"
        element={<ProjectPage title="Typemania" />}
      />
      <Route
        path="projects/webstudio"
        element={<ProjectPage title="Web Studio" />}
      />
      <Route path="blog" element={<Blog />} />
      <Route path="blog/post/:data" element={<PostPage />} />

      <Route path="contact" element={<Contacts />} />
    </Routes>
  );
};
