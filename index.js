// #!/usr/bin/env node
import open from 'open';
import querystring from 'querystring';

import { program } from 'commander';
import configureOpts from './src/options/configureOpts';
// import { hasOpts } from './src/options/utilsOpts';
import communities from './src/communities';
// import store from './src/store';

configureOpts(program);

console.log('program.group', program.group);

// const browserType = ['chromium', 'firefox', 'webkit']

const answers = {
  communities: {},
  sites: {},
};

// const COLON = '%3A';
// const QUOTE = '%22';
// const OPEN_PARENTHESES = '%28';
// const CLOSE_PARENTHESES = '%29';

const url = {
  BASE: 'https://www.google.com/search?q=',
  QUERY: '',
  INTEXT: '',
};

const main = async () => {
  if (program.communities) {
    answers.communities = await communities();

    url.QUERY = querystring.escape(
      'intext:(javascript paradigm) inurl:"stackoverflow.com" OR inurl:"hackernoon.com" OR inurl:"quora.com" OR inurl:"dev.to" OR inurl:"news.ycombinator.com" OR inurl:"reddit.com" OR inurl:"spectrum.chat" OR inurl:"stackexchange.com" OR inurl:"codeproject.com" OR inurl:"groups.google.com/forum"',
    );

    console.log('main -> urlToOpen', url);
    // await open(url.BASE + url.QUERY, { wait: true });
    await open(url.BASE + url.QUERY);

    // // Opens the URL in a specified browser.
    // await open('https://sindresorhus.com', { app: 'firefox' });

    // // Specify app arguments.
    // await open('https://sindresorhus.com', { app: ['google chrome', '--incognito'] });

    //  .then((answers) => {
    console.log(JSON.stringify(answers, null, '  '));
    // const playwright = require('playwright');

    //  });
  }
};

main();
