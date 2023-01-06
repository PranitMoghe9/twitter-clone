import { RefreshIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import { Tweet } from "../typings";
import TweetBox from "./TweetBox";
import TweetComponent from "./Tweet";
import { fetchTweets } from "../utils/fetchTweets";
import toast from "react-hot-toast";

interface Props {
  tweets: Tweet[];
}

//here tweets are passed as props to be displayed in the feed

function Feed({ tweets: TweetsProp }: Props) {
  const [tweets, setTweets] = useState<Tweet[]>(TweetsProp);

  const handleRefresh = async () => {
    const refreshToast = toast.loading("Refreshing...");

    const tweets = await fetchTweets();
    setTweets(tweets);

    toast.success("Feed Updated", {
      id: refreshToast,
    });
  };
  return (
    <div className="col-span-7 lg:col-span-5 border-x overflow-scroll scrollbar-hide max-h-screen">
      <div className="flex items-center justify-between">
        <h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
        <RefreshIcon
          onClick={handleRefresh}
          className="h-8 w-8 cursor-pointer text-twitter transition-all duration-500 ease-out hover:rotate-180 active:scale-125"
        />
      </div>
      {/* tweetbox */}
      <div>
        <TweetBox setTweets={setTweets} />
      </div>

      {/* tweets */}
      <div>
        {tweets.map((tweet) => (
          <TweetComponent key={tweet._id} tweet={tweet} />
        ))}
      </div>
    </div>
  );
}

export default Feed;

function uTeState(TweetsProp: Tweet[]): [any, any] {
  throw new Error("Function not implemented.");
}
//center of the page
