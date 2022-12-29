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
            I'm a front-end developer located in Ukraine.
          </h2>

          <p>
            At the moment of my life, programming is the main occupation, where
            I use all my time to get new information. Ready to learn the
            technologies you need, and develop with you. At this stage, I am
            looking for a company not so much for the financial component, but
            for professional growth as a developer. The quickest way to contact
            me would be through&nbsp;
            <a href="https://t.me/TrySigma" target="_blank" rel="noreferrer">
              Telegram.&nbsp;
            </a>
            I can also be reached by other resume contact information.
          </p>
        </div>
        <Tooling />
      </section>
    </Layout>
  );
};

export default Profile;
