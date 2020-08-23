import inquirer from 'inquirer';
import { program } from 'commander';

import packageJson from '../../package.json';

import defaultOptions from './defaultOptions';
import { exitWithError } from '../utils';
import { setProgramTerms, setDefaultTerms } from '../configs';

const decorated = (text) => new inquirer.Separator(text).line;

// eslint-disable-next-line import/prefer-default-export
export const configureOptions = () => {
  Object.entries(defaultOptions).forEach(([key, opt]) => {
    const separator = opt.flag1 && opt.flag2 ? ', ' : '';
    program.option(
      `${opt.flag1}${separator}${opt.flag2}`,
      opt.comments,
      opt.custom,
      opt.initValue,
    );
  });

  program.version(packageJson.version, '-v, --version', 'current version')
    .name(packageJson.name)
    .usage(decorated('[--options param1[,param2]] ["search terms"]'))
    .description(decorated(`  ${packageJson.description}`))
    .arguments('[terms] [oneArg]')
    .action((terms, oneArg) => {
      // Only one argument
      if (oneArg) {
        exitWithError(`There must be only one search term. Try to surround it with quotes: "${terms} ${oneArg}"`);
        return;
      }
      if (terms) {
        setProgramTerms(terms);
        setDefaultTerms(terms);
      }
    })
    .on('--help', () => {
      console.info('');
      console.info('Examples:');
      console.info('Search wizard:');
      console.info(decorated(`  $ ${packageJson.name}`));

      console.info('Search based on the multiple groups:');
      console.info(decorated(`  $ ${packageJson.name} -g myGroup,otherGroup "deno vs nodejs"`));

      console.info('Tip: If you know what you\'re doing, you can create groups and sites by editing the cache file. (Warning: risk of corrupting it)');
      console.info(decorated(`  $ ${packageJson.name} --cache-path`));
      console.info(decorated(`  $ ${packageJson.name} --edit-cache`));
      // open(store.path, { wait: true });
    })
    .parse(process.argv);
};

// export default configureOptions;
