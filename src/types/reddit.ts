export type Post = {
  id: string;
  title: string;
  src?: string;
  author: string;
  ups: number;
  createdAt: string;
  permalink: string;
  isGallery: boolean;
};

export type RedditResponse = {
  id: string;
  data: {
    id: string;
    title: string;
    created_utc: number;
    ups: number;
    author: string;
    permalink: string;
    preview: {
      images: Array<PreviewImage>;
    };
  };
};

export type PreviewImage = {
  source: {
    url: string;
    width: number;
    height: number;
  };
  resolutions: Array<{
    url: string;
    width: number;
    height: number;
  }>;
};
