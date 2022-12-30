import s from './ProjectPage.module.css';
import Layout from 'views/Layout/Layout';

const ProjectPage = ({ title }) => {
  return (
    <Layout>
      <section className={s.profile}>
        <p className={s.title}>{title}</p>
        {title === 'Phonebook' && (
          <>
            <div className={s.buttonWrapper}>
              <a
                href="https://github.com/Fedor4994/Phonebook"
                target="_blank"
                rel="noreferrer"
                className={s.sourceButton}
              >
                View Source Code
              </a>
              <a
                href="https://fedor4994.github.io/Phonebook/"
                target="_blank"
                rel="noreferrer"
                className={s.sourceButton}
              >
                View In Action!
              </a>
            </div>
            <b className={s.aboutTitle}>About</b>
            <p className={s.about}>
              This app makes it easy to store and manage your contact list. Each
              user has his own independent collection of contacts, due to the
              user authorization functionality. The application has both public
              routes (Home, Login, Registration), which are available to
              everyone, and private, only for registered users (Contacts).
              Without the necessary rights, the user will not be able to use the
              application for its intended purpose, it will be redirected to the
              registration page. I myself developed the design of the
              application, minimalistic, but at the same time beautiful and
              attractive. Data about users and their private collections is
              stored and processed on the Connections API backend. I developed
              the client side, made requests to the server and rendered the UI.
            </p>
            <b className={s.aboutTitle}>Technologies:</b>
            <ul className={s.techList}>
              <li className={s.techItem}>React</li>
              <li className={s.techItem}>Connections API</li>
              <li className={s.techItem}>Redux</li>
              <li className={s.techItem}>Redux Thunk</li>
              <li className={s.techItem}>JavaScript</li>
              <li className={s.techItem}>CSS Modules</li>
            </ul>
          </>
        )}
        {title === 'Movie Mania' && (
          <>
            <div className={s.buttonWrapper}>
              <a
                href="https://github.com/Fedor4994/Movie-Mania"
                target="_blank"
                rel="noreferrer"
                className={s.sourceButton}
              >
                View Source Code
              </a>
              <a
                href="https://fedor4994.github.io/Movie-Mania/"
                target="_blank"
                rel="noreferrer"
                className={s.sourceButton}
              >
                View In Action!
              </a>
            </div>
            <b className={s.aboutTitle}>About</b>
            <p className={s.about}>
              This application allows you to find and select from a huge
              collection of movies you want to watch. You can choose films
              sorted by popularity at the moment, or there is a page with a
              convenient search, where you can find a movie you have heard
              about, look at its rating, read reviews, description, cast and
              available trailers, and decide if you want to watch it. The search
              is convenient in that the user does not have to search for the
              search button, requests occur automatically while entering data
              into the input, but requests do not occur when entering each
              character, thanks to the debounce method from the Lodesh library.
              The application has convenient page navigation, I took care of a
              good UX, all information about the user's position is stored in
              the address bar, nested routes are used, address bar parameters,
              programmatic navigation, work with the object of location, to go
              back after watching the details of the movie, and for example the
              page of pagination or movies did not crash on the previously
              entered line. I myself developed the design of the application,
              bright and attractive. All movie data is sourced from The Movie
              Database API
            </p>
            <b className={s.aboutTitle}>Technologies:</b>
            <ul className={s.techList}>
              <li className={s.techItem}>React</li>
              <li className={s.techItem}>CSS Modules</li>
              <li className={s.techItem}>JavaScript</li>
              <li className={s.techItem}>TMDB API</li>
              <li className={s.techItem}>React Router</li>
              <li className={s.techItem}>Adaptive Layout</li>
            </ul>
          </>
        )}
        {title === 'Filmoteka' && (
          <>
            <div className={s.buttonWrapper}>
              <a
                href="https://github.com/Fedor4994/Filmoteka"
                target="_blank"
                rel="noreferrer"
                className={s.sourceButton}
              >
                View Source Code
              </a>
              <a
                href="https://fedor4994.github.io/Filmoteka/"
                target="_blank"
                rel="noreferrer"
                className={s.sourceButton}
              >
                View In Action!
              </a>
            </div>
            <b className={s.aboutTitle}>About</b>
            <p className={s.about}>
              This application allows you to find and select from a huge
              collection of movies you want to watch and create your own
              collection of watched and queue movies. There is an authorization
              functionality implemented thanks to Firebase, which I figured out
              myself and set up the project. Each user has their own private
              collection of favorite movies. You can choose movies sorted by
              popularity at the moment, or find a movie you've heard about, look
              at a short info about it, and decide if you want to add it to your
              movie collection. The application is written in vanilla
              Javascript, and styled using the SCSS preprocessor. I tried to
              create a kind of SPA application, but still it cannot be fully
              implemented on vanilla JS, because there are no pages and
              interaction with the address bar, in the case of the Filmoteka, I
              simply dynamically re-rendered the content on the main page, when
              the user interacted with interface elements. All movie data is
              sourced from The Movie Database API
            </p>
            <b className={s.aboutTitle}>Technologies:</b>
            <ul className={s.techList}>
              <li className={s.techItem}>JavaScript</li>
              <li className={s.techItem}>SCSS</li>
              <li className={s.techItem}>Firebase</li>
              <li className={s.techItem}>TMDB API</li>
              <li className={s.techItem}>HTML</li>
              <li className={s.techItem}>Adaptive Layout</li>
            </ul>
          </>
        )}
        {title === 'Delivery Food' && (
          <>
            <div className={s.buttonWrapper}>
              <a
                href="https://github.com/Fedor4994/Delivery-Food"
                target="_blank"
                rel="noreferrer"
                className={s.sourceButton}
              >
                View Source Code
              </a>
              <a
                href="https://fedor4994.github.io/Delivery-Food/"
                target="_blank"
                rel="noreferrer"
                className={s.sourceButton}
              >
                View In Action!
              </a>
            </div>
            <b className={s.aboutTitle}>About</b>
            <p className={s.about}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              obcaecati nostrum. Officiis adipisci illum sint ullam quos totam,
              recusandae repellendus itaque quae, in accusamus nulla odio
              aliquam, consectetur atque ex.
            </p>
            <b className={s.aboutTitle}>Technologies:</b>
            <ul className={s.techList}>
              <li className={s.techItem}>React</li>
              <li className={s.techItem}>React</li>
              <li className={s.techItem}>React</li>
            </ul>
          </>
        )}
        {title === 'Image Finder' && (
          <>
            <div className={s.buttonWrapper}>
              <a
                href="https://github.com/Fedor4994/react-image-finder"
                target="_blank"
                rel="noreferrer"
                className={s.sourceButton}
              >
                View Source Code
              </a>
              <a
                href="https://fedor4994.github.io/react-image-finder/"
                target="_blank"
                rel="noreferrer"
                className={s.sourceButton}
              >
                View In Action!
              </a>
            </div>
            <b className={s.aboutTitle}>About</b>
            <p className={s.about}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              obcaecati nostrum. Officiis adipisci illum sint ullam quos totam,
              recusandae repellendus itaque quae, in accusamus nulla odio
              aliquam, consectetur atque ex.
            </p>
            <b className={s.aboutTitle}>Technologies:</b>
            <ul className={s.techList}>
              <li className={s.techItem}>React</li>
              <li className={s.techItem}>React</li>
              <li className={s.techItem}>React</li>
            </ul>
          </>
        )}
        {title === 'Web Studio' && (
          <>
            <div className={s.buttonWrapper}>
              <a
                href="https://github.com/Fedor4994/web-studio-landing"
                target="_blank"
                rel="noreferrer"
                className={s.sourceButton}
              >
                View Source Code
              </a>
              <a
                href="https://fedor4994.github.io/web-studio-landing/"
                target="_blank"
                rel="noreferrer"
                className={s.sourceButton}
              >
                View In Action!
              </a>
            </div>
            <b className={s.aboutTitle}>About</b>
            <p className={s.about}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
              obcaecati nostrum. Officiis adipisci illum sint ullam quos totam,
              recusandae repellendus itaque quae, in accusamus nulla odio
              aliquam, consectetur atque ex.
            </p>
            <b className={s.aboutTitle}>Technologies:</b>
            <ul className={s.techList}>
              <li className={s.techItem}>React</li>
              <li className={s.techItem}>React</li>
              <li className={s.techItem}>React</li>
            </ul>
          </>
        )}
      </section>
    </Layout>
  );
};

export default ProjectPage;
