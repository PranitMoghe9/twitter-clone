// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { sanityClient } from "../../sanity";
import { Tweet } from "../../typings";
import { groq } from "next-sanity";

const feedQuery = groq`
*[_type == "tweet" && !blockTweet]{
    _id,
    ...,
  }|order(_createdAt desc)
`;

// a query to get results/tweets

type Data = {
  tweets: Tweet[];
};

//Data is datatype the req will return

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const tweets: Tweet[] = await sanityClient.fetch(feedQuery);
  res.status(200).json({ tweets });
}

//the above function handles req and res from api

//basically a end point from which tweets are fetched
