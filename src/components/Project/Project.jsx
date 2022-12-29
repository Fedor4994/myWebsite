import s from './Project.module.css';
import { Link } from 'react-router-dom';
const Project = ({ poster, title, path }) => {
  return (
    <div className={s.project}>
      <img className={s.poster} src={poster} alt="poster" />
      <div className={s.description}>
        <span className={s.title}>{title}</span>
        <Link to={path} className={s.detailsButton}>
          Take a look
        </Link>
      </div>
    </div>
  );
};

export default Project;
