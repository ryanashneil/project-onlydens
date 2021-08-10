import { useSWRInfinite } from "swr";
import { Post, RedditResponse } from "@od/types";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const PAGE_LIMIT = 15;
const BASE_URL = "https://www.reddit.com";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useReddit = (subreddits: string[], sort: string = "hot") => {
  const url = `${BASE_URL}/r/${subreddits.join("+")}/${sort}.json?raw_json=1`;

  const { data, error, size, setSize } = useSWRInfinite(
    (pageIndex, previousPageData) => {
      // reached the end
      if (previousPageData && !previousPageData.data.after) return null;
      // first page, we don't have `previousPageData`
      if (pageIndex === 0) return `${url}&limit=${PAGE_LIMIT}`;
      // add the cursor to the API endpoint
      return `${url}&after=${previousPageData.data.after}&limit=${PAGE_LIMIT}`;
    },
    fetcher
  );

  const fetched = data ? data.map((i) => i.data.children).flat() : [];
  const isLoadingInitial = !data && !error;
  const isLoadingMore = size > 0 && data && !data[size - 1];
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd = isEmpty || !data?.[data.length - 1]?.data?.after;

  const posts = fetched
    .map((p: RedditResponse) => transformPost(p))
    .filter((p: Post) => p.src);

  return {
    posts,
    error,
    isLoadingInitial,
    isLoadingMore,
    size,
    setSize,
    isReachingEnd
  };
};

export const transformPost = (post: RedditResponse, size = 3): Post => {
  const {
    id,
    title,
    author,
    ups,
    preview,
    created_utc,
    permalink,
    num_comments
  } = post.data;

  let src = "";
  try {
    const resolutions = preview.images[0].resolutions;
    if (resolutions[size]) {
      src = resolutions[size].url;
    } else {
      src = resolutions[resolutions.length - 1].url;
    }
  } catch (e) {
    console.log("Cannot load image for post " + post.id);
  }

  return {
    id,
    title,
    src,
    author,
    ups,
    comments: num_comments,
    createdAt: dayjs.unix(created_utc).fromNow(),
    permalink: `https://reddit.com${permalink}`,
    isGallery: false
  };
};
