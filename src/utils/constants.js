const MY_API_KEY="AIzaSyDK_X8mcF1icYI-X0BA6Ydc29Og0pEbF3A"

export const YOUTUBE_API="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+MY_API_KEY;

export const VIDEO_INFO_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  MY_API_KEY +
  "&id=";
export const CHANNEL_INFO_URL =
  "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  MY_API_KEY +
  "&id=";

export const YOUTUBE_SEARCH_API =
  // "https://thingproxy.freeboard.io/fetch/http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

  "https://api.codetabs.com/v1/proxy?quest=" + encodeURIComponent("https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=");

  // hit and trail form discord not working -------  ("https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=namaste",{mode: 'no-cors',method: "get"}) ---------------------




//  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

export const YOUTUBE_COMMENT_API =
  "https://youtube.googleapis.com/youtube/v3/commentThreads?part=id%2Csnippet%2Creplies&videoId=[VIDEO_ID]&maxResults=500&key=" +
  MY_API_KEY;