import { Tweet } from "../typings";

export const fetchTweets = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getTweet`);
  const data = await res.json();
  const tweets: Tweet[] = data.tweets;
  return tweets;
};

//a async func to fetch tweets from api end pint
//its a util function (helper func so stored in utils folder)
//sanity base url is used from .env.local file
