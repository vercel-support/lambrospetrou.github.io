import Head from 'next/head'
import { readAllPosts } from "../lib/posts-store";
import {Layout} from "../components/layout";
import {dateToLongDisplay} from "../components/display-formatters";

export default function ArticlesIndex({posts}) {
  posts.sort((a, b) => b.date.valueOf() - a.date.valueOf());

  return (
    <Layout>
      <Head>
        <link rel="canonical" href="https://www.lambrospetrou.com/" />
        <title>Home | Lambros Petrou</title>
        <meta property="og:title" content="Home | Lambros Petrou" />
        <meta property="og:description" content="My personal blog where I publish my thoughts."/>
        <meta name="description" content="My personal blog where I publish my thoughts."/>
      </Head>
      <ul className="index-posts">
        {posts.map(p => <PostEntry key={p.slug} post={p}/>)}
      </ul>
    </Layout>
  );
};

function PostEntry({post}) {
  const {date, slug, title} = post;
  return (
    <li>
      <article>
        <header>
          <h2 className="post-title"><a href={`/articles/${slug}`} title="view post">{title}</a></h2>
          <div className="post-meta">{dateToLongDisplay(date)}</div>
        </header>
      </article>
    </li>
  );
}

/////////////////
// NextJS hooks!
/////////////////

export async function getStaticProps() {
  return {
    props: {
      posts: readAllPosts()
    }
  };
}
