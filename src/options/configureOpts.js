import { opts } from './utilsOpts';

const configureOpts = (program) => {
  Object.entries(opts).forEach(([key, opt]) => {
    const separator = opt.flag1 && opt.flag2 ? ', ' : '';
    program.option(`${opt.flag1}${separator}${opt.flag2}`, opt.comments);
  });
  program.parse(process.argv);
};

export default configureOpts;
