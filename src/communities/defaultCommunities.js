const groups = Object.freeze({
  communities: 'communities',
  site: 'site',
});

const defaultCommunities = {
  stackoverflow: {
    name: 'Stack Overflow',
    url: 'https://stackoverflow.com/questions/',
    checked: true,
    groups: [groups.communities],
    // initValue: [],
  },
  stackexchange: {
    name: 'Stackexchange',
    url: 'https://www.stackexchange.com',
    checked: true,
    groups: [groups.communities],
  },
  reddit: {
    name: 'Reddit',
    url: 'https://www.reddit.com/',
    checked: true,
    groups: [groups.communities],
  },
  quora: {
    name: 'Quora',
    url: 'https://www.quora.com/',
    checked: true,
    groups: [groups.communities],
  },
  devto: {
    name: 'Dev.to – Community',
    url: 'https://dev.to',
    checked: true,
    groups: [groups.communities],
  },
  hackernews: {
    name: 'Hacker News',
    url: 'https://news.ycombinator.com/',
    checked: true,
    groups: [groups.communities],
  },
  hackernoon: {
    name: 'Hackernoon',
    url: 'https://hackernoon.com',
    checked: true,
    groups: [groups.communities],
  },
  freecodecamp: {
    name: 'freeCodeCamp',
    url: 'https://www.freecodecamp.org/forum/',
    checked: true,
    groups: [groups.communities],
  },
  sitepoint: {
    name: 'Site Point – Community',
    url: 'https://www.sitepoint.com/',
    checked: false,
    groups: [groups.communities],
  },
  spectrum: {
    name: 'Spectrum',
    url: 'https://www.spectrum.chat/',
    checked: false,
    groups: [groups.communities],
  },
  codeproject: {
    name: 'CodeProject',
    url: 'https://www.codeproject.com/',
    checked: false,
    groups: [groups.communities],
  },
};

export default defaultCommunities;

// intext:(javascript paradigm) inurl:"stackoverflow.com" OR inurl:"hackernoon.com" OR inurl:"quora.com" OR inurl:"dev.to" OR inurl:"news.ycombinator.com" OR inurl:"reddit.com" OR inurl:"spectrum.chat" OR inurl:"stackexchange.com" OR inurl:"codeproject.com" OR inurl:"groups.google.com/forum"
