export const opts = {
  COMMUNNITIES: {
    flag1: '-c',
    flag2: '--communities',
    option: 'communities',
    comments: 'Search in latest communities',
  },
  SITES: {
    flag1: '-s',
    flag2: '--sites',
    option: 'sites',
    comments: 'Search in latest sites',
  },
  ALL: {
    flag1: '-a',
    flag2: '--all',
    option: 'all',
    comments: 'Search all',
  },
  TOGETHER: {
    flag1: '-t',
    flag2: '--together',
    option: 'together',
    comments: 'Search all in one tab',
  },
  SEPARETED: {
    flag1: '-p',
    flag2: '--separeted',
    option: 'separeted',
    comments: 'Search in separeted tabs (many tabs can be opened)',
  },
  ADD: {
    flag1: '-n',
    flag2: '--add-new',
    option: 'add',
    comments: 'Add new site to cache',
  },
  REMOVE: {
    flag1: '-r',
    flag2: '--remove-site',
    option: 'remove',
    comments: 'Remove site from cache by key:devsearch -r stackoverflow',
  },
  PATH: {
    flag1: '',
    flag2: '--path',
    option: 'path',
    comments: 'Shows the cache path [Single Command]',
  },
  CLEAN: {
    flag1: '',
    flag2: '--clean',
    option: 'clean',
    comments: 'Clean the cache file [Single Command]',
  },
};
const excludesNonAppOpts = (program) => {
  console.log('excludesNonAppOpts -> program.opts()', program.opts());
  const { version, ...programOpts } = program.opts();
  return programOpts;
};

export const hasOpts = (program) => {
  // a
  const programOpts = excludesNonAppOpts(program);
  return Object.entries(programOpts).some(([key, opt]) => {
    if (opt) {
      console.log('entrou');
      return true;
    }
    return false;
  });
};
