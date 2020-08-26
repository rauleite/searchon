import open from 'open';
import { program } from 'commander';
import prompt from './src/prompt';
import { configureOptions } from './src/options';
import {
  cachePath, clean, urlBase, terms, inurl, getProgramTerms, getDefaultTerms,
} from './src/configs';
import { urlQuery } from './src/utils';

configureOptions();

const main = async () => {
  if (program.editCache) {
    const path = cachePath();
    console.info(path);
    await open(path);
    return;
  }
  if (program.cachePath) {
    console.info(cachePath());
    return;
  }
  if (program.clean) {
    clean();
    console.info('Ok');
    return;
  }

  const sitesChosen = await prompt(program);

  const BASE = urlBase();

  const QUERY = urlQuery(
    // terms('javascript paradigm'),
    terms(getProgramTerms() || getDefaultTerms()),
    inurl(sitesChosen),
  );
  // console.log(BASE + QUERY);
  await open(BASE + QUERY);
};

main();
