const MY_GOOGLE_KEY = "AIzaSyBG3sis2-gSuYfSyjwEjc-eYdoJAGGcd8I";

export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  MY_GOOGLE_KEY;

export const YOUTUBE_SEARCH_URL =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const SEARCH_RESULT_API =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=" +
  MY_GOOGLE_KEY +
  "&q=";

export const VIDEO_INFO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  MY_GOOGLE_KEY +
  "&id=";

export const COMMENT_API = (id) =>
  `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet,replies&videoId=${id}&key=${MY_GOOGLE_KEY}&maxResults=90`;

export const CHANNEL_INFO = (channelId) =>
  `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${channelId}&key=${MY_GOOGLE_KEY}`;
