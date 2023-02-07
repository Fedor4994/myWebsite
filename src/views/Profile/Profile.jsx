import Tooling from 'components/Tooling/Tooling.';
import Layout from 'views/Layout/Layout';
import profilePhoto from './avatar.jpeg';
import s from './Profile.module.css';

const Profile = () => {
  return (
    <Layout>
      <section className={s.profile}>
        <p className={s.title}>Profile</p>

        <img className={s.profilePhoto} src={profilePhoto} alt="profile" />
        <div className={s.about}>
          <h2 className={s.me}>
            I'm an 18 year old front-end developer located in Ukraine.
          </h2>

          <p>
            I am looking for a full-time position in a friendly company to
            cooperate for a long time. I have knowledge of HTML, CSS,
            JavaScript, TypeScript, React and Node.js. I am a fast learner,
            responsible, and ready for challenging tasks. At the moment of my
            life, programming is the main occupation, where I use all my time to
            get new information. Ready to learn the technologies you need, and
            develop with you. At this stage, I am looking for a company not so
            much for the financial component, but for professional growth as a
            developer. The quickest way to contact me would be through&nbsp;
            <a
              className={s.link}
              href="https://t.me/FedorSosnin"
              target="_blank"
              rel="noreferrer"
            >
              Telegram.&nbsp;
            </a>
            I can also be reached by other{' '}
            <a
              className={s.link}
              href="https://drive.google.com/file/d/1EWE0iCa7unsX5F1LXEJC-wsjJ_To9bHi/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              resume&nbsp;
            </a>
            contact information.
          </p>
        </div>
        <Tooling />
      </section>
    </Layout>
  );
};

export default Profile;
