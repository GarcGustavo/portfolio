import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Profile from '../components/Profile';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function Index({ posts, globalData }) {
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <div className="grid grid-flow-col auto-cols-max gap-6 mx-6">
        <div className="text-center items-center">
        <Header name={globalData.name}/>
        <div className="mr-12 pt-4 mt-4 md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 last:border-b">
                <div className="prose dark:prose-dark pr-10 dark:bg-transparent bg-opacity-0 rounded-3xl text-1xl dark:text-white ml-5 mb-5" >
                    <p>
                      Hello, I'm a software engineer based in Rochester, NY. 
                      I work full-time, but in my free time I like to work on a variety of gamedev topics.
                      This small blog is a platform for me to share devlogs for some of my personal projects and prototypes.
                      Currently, some of the articles are very brief overviews of tools or systems I already made, I plan on expanding most of these in the future.
                      I also provide links to the relevant repositories at the end of each article, so feel free to check them out!
                    </p>
                </div>
          </div>
        </div>
          <main className="w-full mt-12">
            <h1 className="text-3xl lg:text-5xl text-center mb-12">
              {globalData.blogTitle}
            </h1>
            <ul className="w-full">
              {posts.map((post) => (
                <li
                  key={post.filePath}
                  className="md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 last:border-b hover:border-b hovered-sibling:border-t-0"
                >
                  <Link
                    as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                    href={`/posts/[slug]`}
                  >
                    <a className="py-6 lg:py-10 px-6 lg:px-16 block focus:outline-none focus:ring-4">
                      {post.data.date && (
                        <p className="uppercase mb-3 font-bold opacity-60">
                          {post.data.date}
                        </p>
                      )}
                      <h2 className="text-2xl md:text-3xl">{post.data.title}</h2>
                      {post.data.description && (
                        <p className="mt-3 text-lg opacity-60">
                          {post.data.description}
                        </p>
                      )}
                      <ArrowIcon className="mt-4" />
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </main>

      </div>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
