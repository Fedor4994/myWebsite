import Layout from 'views/Layout/Layout';
import s from './Contacts.module.css';

const Contacts = () => {
  return (
    <Layout>
      <section className={s.contacts}>
        <p className={s.title}>Contact Me</p>
        <p className={s.about}>
          The quickest way to contact me would be through&nbsp;
          <a
            className={s.link}
            href="https://t.me/FedorSosnin"
            target="_blank"
            rel="noreferrer"
          >
            Telegram.&nbsp;
          </a>
          <br /> <br /> I can also be reached by email:&nbsp;
          <a
            className={s.link}
            href="mailto:fedorsosnin04@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            fedorsosnin04@gmail.com
          </a>
          <a
            className={s.link}
            href="https://www.linkedin.com/in/fedor-sosnin-4686b425a/"
            target="_blank"
            rel="noreferrer"
          >
            , Linkedin
          </a>
          , and other&nbsp;
          <a
            className={s.link}
            href="https://drive.google.com/file/d/1j_s3GSdL44khCcUidCl659V69iYfrQUx/view?usp=share_link"
            target="_blank"
            rel="noreferrer"
          >
            resume&nbsp;
          </a>
          contact information.
        </p>
      </section>
    </Layout>
  );
};

export default Contacts;
