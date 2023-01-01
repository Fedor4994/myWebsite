import { Link } from 'react-router-dom';
import s from './PostLink.module.css';

const PostLink = ({ data, title }) => {
  return (
    <li className={s.linkWrapper}>
      <p className={s.data}>{data}</p>
      <Link className={s.link} to={`post/${data}`}>
        {title}
      </Link>
    </li>
  );
};

export default PostLink;
