import { NavLink } from 'react-router-dom';
import { stack as Menu } from 'react-burger-menu';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare, FaPencilAlt, FaEnvelope } from 'react-icons/fa';
import { GoPerson } from 'react-icons/go';
import { RiCodeSSlashLine } from 'react-icons/ri';
import { VscFilePdf } from 'react-icons/vsc';
import './burgermenu.css';
import s from './BurgerMenu.module.css';

const BurgerMenu = () => {
  return (
    <div id="outer-container">
      <Menu
        right
        width={'100%'}
        pageWrapId={'page-wrap'}
        outerContainerId={'outer-container'}
      >
        <div>
          <NavLink
            className={({ isActive }) =>
              isActive ? s.activeNavLink : s.navLink
            }
            to="/profile"
          >
            <GoPerson className={s.icon} size={25} />
            Profile
          </NavLink>
        </div>
        <div>
          <NavLink
            className={({ isActive }) =>
              isActive ? s.activeNavLink : s.navLink
            }
            to="/projects"
          >
            <RiCodeSSlashLine className={s.icon} size={25} />
            Projects
          </NavLink>
        </div>
        <div>
          <NavLink
            className={({ isActive }) =>
              isActive ? s.activeNavLink : s.navLink
            }
            to="/blog"
          >
            <FaPencilAlt className={s.icon} size={25} />
            Blog
          </NavLink>
        </div>
        <div>
          <NavLink
            className={({ isActive }) =>
              isActive ? s.activeNavLink : s.navLink
            }
            to="/contact"
          >
            <FaEnvelope className={s.icon} size={25} />
            Contact me
          </NavLink>
        </div>

        <div className={s.contactsWrapper}>
          <a
            className={s.navLink}
            href="https://www.linkedin.com/in/fedor-sosnin-4686b425a/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin size={45} />
          </a>
          <a
            className={s.navLink}
            href="https://github.com/Fedor4994"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithubSquare size={50} />
          </a>
          <a
            className={s.navLink}
            href="https://drive.google.com/file/d/1lQf5EsvNePJp6cZ5b5oGK2PD1G-9r88F/view?usp=share_link"
            target="_blank"
            rel="noreferrer"
          >
            <VscFilePdf size={50} />
          </a>
        </div>
      </Menu>
    </div>
  );
};

export default BurgerMenu;
