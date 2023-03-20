import PostLink from 'components/Post/PostLink';
import Layout from 'views/Layout/Layout';
import s from './Blog.module.css';

const Blog = () => {
  return (
    <Layout>
      <section className={s.blog}>
        <p className={s.title}>Posts:</p>
        <ul className={s.blogList}>
          <PostLink data="Mar 20, 2023" title="The biggest app I ever made" />
          <PostLink data="Jan 26, 2023" title="Getting Started with NodeJS" />
          <PostLink data="Jan 17, 2023" title="My first test task" />
          <PostLink
            data="Jan 1, 2023"
            title="The beginning of the best year in the life"
          />
          <PostLink data="Dec 24, 2022" title="My first job in IT" />
          <PostLink data="Dec 9, 2022" title="Getting Started with React" />
          <PostLink data="Dec 2, 2022" title="How I learned JavaScript" />
          <PostLink data="Nov 25, 2022" title="How I learned HTML and CSS" />
          <PostLink
            data="Nov 18, 2022"
            title="The beginning of my journey in web development"
          />
        </ul>
      </section>
    </Layout>
  );
};

export default Blog;
