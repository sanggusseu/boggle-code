const searchPlatformList = [
  {
    title: 'Google',
    url: 'https://www.google.com/search?q=',
  },
  {
    title: 'Naver',
    url: 'https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=',
  },
  {
    title: 'Youtube',
    url: 'https://www.youtube.com/results?search_query=',
  },
];

export const getBaseUrl = title =>
  searchPlatformList.find(platform => platform.title === title).url;
