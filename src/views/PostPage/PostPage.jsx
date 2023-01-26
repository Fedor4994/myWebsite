import { useParams } from 'react-router-dom';
import Layout from 'views/Layout/Layout';
import s from './PostPage.module.css';

const PostPage = () => {
  const { data } = useParams();

  return (
    <Layout>
      {data === 'Jan 26, 2023' && (
        <section className={s.post}>
          <h1 className={s.title}>Getting Started with NodeJS</h1>
          <p className={s.data}>{data}</p>
          <p className={s.text}>
            So the time has come, after 8 months of study, when I can say that I
            am good enough in the frontend (good enough to work on a commercial
            basis), the last step was the transfer of my phone book to
            TypeScript. P. s. the technology as for me now, is the coolest there
            😎
            <br />
            <br />
            But of course, I have too little experience to easily get a job, my
            level is trainee/junior, so the demand for me is not big yet, but
            the question of work will become critical for me when I lose my
            workflow , that is, masthead technologies that I have to learn are
            still in my way, so now I kind of work too, and, accordingly, I am
            very productive (this is how it works with me😇) I always have to
            move towards something that inspires me.
            <br />
            <br />
            Let's finally move on to the topic of the post, it's time to take on
            the backend, and of course this is Node JS. I've just started, and
            so far for me it's just a javascript runtime where I can work with
            the file system, and write the simplest CLI application. And then, I
            just learned about it all today, and I still don’t fully understand
            how, for example, the Commander works, but I plan to study 2 courses
            at once, so there should be enough information, the main thing is
            not to forget to read the docks📚
            <br />
            <br />
            In general, I have high hopes for Node JS, because I think I'll
            should love the development of the backend, maybe even more than the
            frontend🤓 I'm doing my best, and of course I'll keep you informed.
          </p>
        </section>
      )}
      {data === 'Jan 17, 2023' && (
        <section className={s.post}>
          <h1 className={s.title}>My first test task</h1>
          <p className={s.data}>{data}</p>
          <p className={s.text}>
            Since the beginning of this year, I continued to learn TypeScript
            diligently and, of course, respond to vacancies, look for a job as a
            Front End developer (now I continue the same way, but I'm almost
            done). <br />
            <br /> Gradually, every day, I became more and more comfortable
            doing this. And so, on January 9, I received the first relatively
            positive response from a company, a company called Codebridge, they
            answered on the email and asked for additional information about
            themselves. I provided, and already on January 10, late in the
            evening, they answered me again and asked me to complete a test
            task! This was already a great joy and a breakthrough for me, I can
            imagine what emotions I will have when some company call me for the
            first interview, and there is already the first job as a developer.
            <br />
            <br />
            In general, the deadline was 5 days, but I had to invest in 4,
            because on the 5th day I had already bought tickets for the train to
            Lviv, I went there for a couple of days for a friend's birthday. The
            test was not really difficult, but I really liked that I was able to
            use my fresh knowledge of TypeScript, and also learn the Material UI
            from scratch! Really, how many times I didn't force myself, I didn't
            manage to take on this library, and as soon as I saw the requirement
            to use it in the test, all doubts immediately disappeared. <br />
            <br /> The conclusion is that I need to continue to search hard for
            a work, because then you see what specific things you need to learn
            in this unit of time, and what specific practical application you
            can give to your studies. It's a very cool feeling.
          </p>
        </section>
      )}
      {data === 'Jan 1, 2023' && (
        <section className={s.post}>
          <h1 className={s.title}>
            The beginning of the best year in the life
          </h1>
          <p className={s.data}>{data}</p>
          <p className={s.text}>
            The first inclusion in the new year, according to tradition, we
            start a new life? Although it’s a cliché, our life changes at the
            moment of decision, and January 1st is a great date to make powerful
            decisions🔥 <br />
            <br /> I made decisions to start doing every day a little better,
            because despite the fact that I`m already moving in the direction I
            need, but the path is not at all perfect, adding some kind of extra
            point, extra strength to the routine, creating a new habit or
            killing an old one, due to regularity, you can get unexpectedly
            powerful extra results. For example, if you read only half an hour
            every day, then in a year you will have an average of 36 books read,
            and you can already develop this idea in all sorts of ways😉 <br />{' '}
            <br />
            Let 2023 be a year of investing in yourself to acquire wisdom, which
            will be the key everything we want from life.
          </p>
        </section>
      )}
      {data === 'Dec 24, 2022' && (
        <section className={s.post}>
          <h1 className={s.title}>My first job in IT</h1>
          <p className={s.data}>{data}</p>
          <p className={s.text}>
            In November 24th, my previously mentioned friend offers me a job at
            a programming school where he teaches himself.
            <br />
            <br /> I agree, I have been working as a mentor for a month. I check
            students' homework, give feedback, and try to explain to students
            things that are already elementary for me.
            <br />
            <br /> At first it was difficult, the courses were really miserable,
            everything was terribly unorganized and unstable, but over time you
            get used to everything and it became much easier for me.
            <br />
            <br /> But what I want to highlight, to stay in such a job, I would
            not. Routine, monotonous and boring, you don’t feel like a part of
            something great and worthwhile, the feeling when you work only for
            the sake of money is not cool at all, the only pleasure I got was
            when I REALLY helped a student who REALLY wants to study, but this,
            unfortunately, is rare , most of them don't want to study very
            much😔 <br />
            <br />
            But still, I am extremely glad that I got this experience, because
            it is also what kind of psychological barrier that I overcame! So a
            start has been made and in the near future I will get a job as a web
            developer, and maybe you, the reader, can help me with that😉
          </p>
        </section>
      )}
      {data === 'Dec 9, 2022' && (
        <section className={s.post}>
          <h1 className={s.title}>Getting Started with React</h1>
          <p className={s.data}>{data}</p>
          <p className={s.text}>
            The third block of my learning is the React library⚛️. This is
            already a serious, most practical tool for Frontend development. I
            started studying on November 14, so far it’s most interesting,
            although I’m still getting acquainted with the basic concepts, but
            it’s already clear how useful this tool can be, and optimize writing
            some routine things, shorten and divide the code into modules, each
            piece, each component , everything lives its own life, and as a
            result, you are like a conductor, you tell someone what to do and
            where to stand, and miraculously the picture turns out.
            <br />
            <br /> This week I studied JSX, a syntax extension in which you can
            describe markup, Virtual DOM, what it is and how it works, and most
            importantly, components and props, as well as component properties,
            these are the building blocks of which the entire React application
            consists, I also studied this view of components as Component
            Classes, which are very similar to classes in vanilla JS, but here
            they also have a state (state), props (properties) and a render ()
            method, in which the markup of the component is located.
            <br />
            <br /> Styling, css modules, event handlers, rendering of
            collections, forms and working with them, controlled forms are also
            studied. <br />
            <br />A lot, fast, and I don’t stop, all because now I can devote
            all the available time to this, which I do, and don’t waste my life
            on trifles, because I know that Super Efforts Give Super Results,
            and I don’t agree to less 🤴
          </p>
        </section>
      )}
      {data === 'Dec 2, 2022' && (
        <section className={s.post}>
          <h1 className={s.title}>How I learned JavaScript</h1>
          <p className={s.data}>{data}</p>
          <p className={s.text}>
            The most turning point! I shared with my very good friend, who was
            already working as a web developer at that time, earning real money,
            and had a clear vision of the future, that I also began to study web
            development, showed him my first landing page, he checked it out,
            supported, and said that JS needs to be given maximum effort and
            attention, for which I am grateful to him. <br />
            <br />
            And mid-July, I'm already starting to learn JS, full of strength and
            enthusiasm, after all, this is a programming language! I draw
            information from 3 courses (one of which is English), go through
            problems on CodeWars, watch 100500 videos on YouTube, I can’t get
            enough, I don’t know how to make my day more and more productive.{' '}
            <br />
            <br />
            Let's delve a little into the topic of productivity, I want to pay
            attention to the fact that I started getting up at 5 in the
            morning🤯 I started studying touch typing, reading self-development
            books, in general, the focus on the future was maximum. <br />
            <br />I worked at this pace until the beginning of November, then
            the pace slows down, due to my family moving to Chernivtsi, due to
            the intensification of the war in Zaporozhye ... Well, literally by
            the middle of November, I again take the bull by the horns and start
            working no less , and perhaps even at a faster pace than before,
            because all possible distractions disappear from my life. On that
            note, I'm getting into React ⚛️
          </p>
        </section>
      )}
      {data === 'Nov 25, 2022' && (
        <section className={s.post}>
          <h1 className={s.title}>How I learend HTML and CSS</h1>
          <p className={s.data}>{data}</p>
          <p className={s.text}>
            So, May 2022, I am finishing my third year of college, summer is
            ahead, a lot of free time, my environment has plans and goals for
            the coming months, develop new skills, or, more often, make money,
            no matter how, the main thing is to be in business. In short,
            entertainment is already starting to fade into the background.
            <br />
            <br /> I was no exception, and also took care of myself, it was not
            easy, every day I had to force myself to do something, because at
            the time, as I already see it, it was still extremely unusual for me
            to make any real efforts towards my future. <br />
            <br /> Of course everything was very smooth, the pace of learning
            was minimal, but consistency turned out to be the key 🔑 After 2
            months, I made my first landing page, and it was a real starting
            point, all this time I was building a springboard, and in mid-July I
            saw the results, I felt potential and soared 🚀 <br />
            <br /> As a result, the fact that my acquaintance with layout,
            semantics, styles, preprocessors, adaptation, etc. was so soft and
            calm, allowed me to build a strong foundation, I was already
            standing on something, and now it’s not so easy to fall.
          </p>
        </section>
      )}
      {data === 'Nov 18, 2022' && (
        <section className={s.post}>
          <h1 className={s.title}>
            The beginning of my journey in web development
          </h1>
          <p className={s.data}>{data}</p>
          <p className={s.text}>
            First, I will describe how my path in programming began. In 2019, I
            still don’t know what I’m interested in this life besides computer
            games🙃 I’m going to college to be a software engineer, all I knew
            about this profession is you sit at a computer and get a lot of
            money, it’s hard to refuse 😅 <br />
            <br /> After 3 years... I realize that I don’t get any pleasure, and
            I don’t see my future in it, so I spend the whole 3rd year
            wandering, what interests me and what I want to do in life 🤔
            <br />
            <br /> Having unsuccessfully skipped and had fun for almost a whole
            year, until May 2022, I didn’t get better, I understood that I was
            already 18 years old, and I didn’t really represent myself, but I
            still don’t find the answer to this question, but he finds me
            himself. I'm getting into web development courses. At first, the
            attitude was extremely skeptical, because the college scared away
            from this profession in the strongest way ... <br />
            <br />
            But probably only thanks to my responsibility and diligence, I did
            not abandon these courses from the beginning and began to succeed,
            this business interested me very much! I understood what programming
            is, and that this is a business that you can do and enjoy without
            even getting a penny for it, and in the modern world it can also
            become a full-fledged source of achieving financial independence.
            Starting around August, when I started learning JavaScript, I
            plunged into this business with my head, and to this day, I'm not
            going to get out 😉 Now that I know what I want, my goal is invest
            everything in myself, achieve maximum concentration and discipline,
            finally succeed. <br />
            <br /> Realizing this, I begin to think that my life suddenly takes
            on ✨meaning✨, I understand that I can really bring something into
            this world, become the best in something, and live this life like a
            dream life. Against this background, all sorts of everyday problems
            and trifles are simply lost in the shadow of ambition.
            <br />
            <br /> In each entry, I will describe my small but constant steps
            towards this dream, because it doesn`t matter how fast you move, the
            main thing is not to stop!!! See you at the top 🏔️
          </p>
        </section>
      )}
    </Layout>
  );
};

export default PostPage;
