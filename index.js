// #!/usr/bin/env node
import { program } from 'commander';
import configureOpts from './src/options/configureOpts';
import { hasOpts } from './src/options/utilsOpts';
import communities from './src/communities';
import store from './src/store';

console.log('config', store);

program.version('1.0.0');

configureOpts(program);

// const browserType = ['chromium', 'firefox', 'webkit']

const main = async () => {
  // hasOpts()
  console.log('main -> hasOpts()', hasOpts(program));

  if (program.communities) {
    const answers = await communities();
    //  .then((answers) => {
    console.log(JSON.stringify(answers, null, '  '));
    // const playwright = require('playwright');

    //  });
  }
};

main();

//   (async () => {
//     const browser = await playwright[browserType[0]].launch({headless: false});
//     // const context = await browser.newContext();
//     const page = await browser.newPage();
//     await page.goto('http://whatsmyuseragent.org/');
//     // await page.screenshot({ path: `example-${browserType}.png` });
//     // await browser.close();
//   // }
// })();
// };
// console.log('pizza details:');
// if (program.small) console.log('- small pizza size');
// if (program.pizzaType) console.log(`- ${program.pizzaType}`);
