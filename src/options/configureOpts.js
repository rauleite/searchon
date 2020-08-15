import packageJson from '../../package.json';

import { opts } from './utilsOpts';

const configureOpts = (program) => {
  Object.entries(opts).forEach(([key, opt]) => {
    const separator = opt.flag1 && opt.flag2 ? ', ' : '';
    program.option(
      `${opt.flag1}${separator}${opt.flag2}`, opt.comments, opt.custom, opt.initValue,
    );
  });
  program.version(packageJson.version, '-v, --version', 'current version')
    .name(packageJson.name)
    .description('execute the given remote cmd')
    .usage('[--options params] ["search terms"]')
    .arguments('<cmd> [env]')
    .action((cmd, env) => {
      console.log('configureOpts -> env', env);
      console.log('configureOpts -> cmd', cmd);
      if (typeof cmd === 'undefined') {
        console.error('Oops, the search terms was missing.');
        process.exit(1);
      }
    })
    .addHelpCommand(true)
    // .addHelpCommand(`${packageJson.name}`, 'opens in wizard mode')

    .parse(process.argv);
};

export default configureOpts;
