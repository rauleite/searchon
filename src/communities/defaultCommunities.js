const defaultCommunities = {
  stackoverflow: {
    name: 'Stack Overflow',
    url: 'https://stackoverflow.com/questions/',
  },
  reddit: {
    name: 'Reddit',
    url: 'https://www.reddit.com/',
  },
  quora: {
    name: 'Quora',
    url: 'https://www.quora.com/',
  },
  devto: {
    name: 'Dev.to – Community',
    url: 'https://dev.to',
  },
  hackernews: {
    name: 'Hacker News',
    url: 'https://news.ycombinator.com/',
  },
  hackernoon: {
    name: 'Hackernoon',
    url: 'https://hackernoon.com',
  },
  freecodecamp: {
    name: 'freeCodeCamp',
    url: 'https://www.freecodecamp.org/forum/',
  },
  sitepoint: {
    name: 'Site Point – Community',
    url: 'https://www.sitepoint.com/',
  },
  spectrum: {
    name: 'Spectrum',
    url: 'https://www.spectrum.chat/',
  },
  stackexchange: {
    name: 'Stackexchange',
    url: 'https://www.stackexchange.com',
  },
  codeproject: {
    name: 'CodeProject',
    url: 'https://www.codeproject.com/',
  },
};

// usar persistencia pra criar essa lista ao inves de defaultCommunities

// Lista ao inves de objeto
export const defaultComunitiesList = (
  Object.entries(defaultCommunities).map(([key, cmt]) => (cmt))
);

export default defaultCommunities;

// intext:(javascript paradigm) inurl:"stackoverflow.com" OR inurl:"hackernoon.com" OR inurl:"quora.com" OR inurl:"dev.to" OR inurl:"news.ycombinator.com" OR inurl:"reddit.com" OR inurl:"spectrum.chat" OR inurl:"stackexchange.com" OR inurl:"codeproject.com" OR inurl:"groups.google.com/forum"
