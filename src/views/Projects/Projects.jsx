import Project from 'components/Project/Project';
import Layout from 'views/Layout/Layout';
import s from './Projects.module.css';
import webstudio from './images/webstudio.png';
import imagefinder from './images/imagefinder.png';
import deliveryfood from './images/deliveryfood.png';
import filmoteka from './images/FIlmoteka.png';
import moviemania from './images/moviemania.png';
import phonebook from './images/phonebook.png';
const Projects = () => {
  return (
    <Layout>
      <section className={s.projects}>
        <p className={s.title}>Projects</p>
        <ul className={s.projectsList}>
          <Project
            poster={phonebook}
            title="Phonebook"
            path="/projects/phonebook"
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
            poster={deliveryfood}
            title="Delivery Food"
            path="/projects/deliveryfood"
          />
          <Project
            poster={imagefinder}
            title="Image Finder"
            path="/projects/imagefinder"
          />
          <Project
            poster={webstudio}
            title="Web Studio"
            path="/projects/webstudio"
          />
        </ul>
      </section>
    </Layout>
  );
};

export default Projects;
