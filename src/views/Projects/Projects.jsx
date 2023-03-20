import Project from 'components/Project/Project';
import Layout from 'views/Layout/Layout';
import s from './Projects.module.css';
import webstudio from './images/webstudio.png';
import typemania from './images/typemania.png';
import deliveryfood from './images/deliveryfood.png';
import filmoteka from './images/FIlmoteka.png';
import moviemania from './images/moviemania.png';
import phonebook from './images/phonebook.png';
import news from './images/news.png';
import githubsearcher from './images/githubsearcher.png';
const Projects = () => {
  return (
    <Layout>
      <section className={s.projects}>
        <p className={s.title}>Projects</p>
        <ul className={s.projectsList}>
          <Project
            poster={typemania}
            title="Typemania"
            path="/projects/typemania"
          />
          <Project
            poster={phonebook}
            title="Phonebook"
            path="/projects/phonebook"
          />
          <Project
            poster={news}
            title="Space News"
            path="/projects/spacenews"
          />
          <Project
            poster={githubsearcher}
            title="GitHub Searcher"
            path="/projects/githubsearcher"
          />
          <Project
            poster={moviemania}
            title="Movie Mania"
            path="/projects/moviemania"
          />
          <Project
            poster={filmoteka}
            title="Filmoteka"
            path="/projects/filmoteka"
          />
          <Project
            poster={webstudio}
            title="Web Studio"
            path="/projects/webstudio"
          />
          <Project
            poster={deliveryfood}
            title="Delivery Food"
            path="/projects/deliveryfood"
          />
        </ul>
      </section>
    </Layout>
  );
};

export default Projects;
