import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Toaster } from "react-hot-toast";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";
import { Tweet } from "../typings";
import { fetchTweets } from "../utils/fetchTweets";

interface Props {
  tweets: Tweet[];
}
//here also tweets are passed as props to feed component

const Home = ({ tweets }: Props) => {
  // console.log(tweets);
  return (
    <div className="lg:max-w-6xl mx-auto max-h-fit overflow-hidden">
      <Head>
        <title>Twitter </title>
        <link rel="icon" href="https://links.papareact.com/drq" />
      </Head>
      <Toaster />
      <main className="grid grid-cols-9">
        {/*sidebar*/}

        <Sidebar />
        {/*feeds*/}
        <Feed tweets={tweets} />
        {/*widgets*/}
        <Widgets />
      </main>
    </div>
  );
};

export default Home;
export const getServerSideProps: GetServerSideProps = async (context) => {
  const tweets = await fetchTweets();
  return {
    props: {
      tweets,
    },
  };
};
// the above function is handle the tweets from api end point

// the ratio of the 3 (feed,sidebar,widgets) is 2:5:2 (total 9 col spans)
