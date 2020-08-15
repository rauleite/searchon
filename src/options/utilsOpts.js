import packageJson from '../../package.json';

const multipleOptional = (value, previous) => {
  if (value.includes(',')) {
    return value.split(',');
  }
  return previous.concat([value]);
};
const groupCustom = (value, previous) => multipleOptional(value, previous);

export const opts = {
  GROUP: {
    flag1: '-g',
    flag2: '--group <groups...>',
    option: 'group',
    comments: `»${packageJson.name} -g <myGroup>[,myGroup2] "deno vs nodejs"`,
    custom: groupCustom,
    initValue: [],
  },
  ALL: {
    flag1: '-a',
    flag2: '--all',
    option: 'all',
    comments: 'search all',
    custom: undefined,
    initValue: undefined,
  },
  TOGETHER: {
    flag1: '-t',
    flag2: '--together',
    option: 'together',
    comments: 'search all in one tab',
    custom: undefined,
    initValue: undefined,
  },
  SEPARETED: {
    flag1: '-p',
    flag2: '--separeted',
    option: 'separeted',
    comments: 'search in separeted tabs (many tabs can be opened)',
    custom: undefined,
    initValue: undefined,
  },
  ADD: {
    flag1: '-n',
    flag2: '--add-new',
    option: 'add',
    comments: 'add new site to cache',
    custom: undefined,
    initValue: undefined,
  },
  REMOVE: {
    flag1: '-r',
    flag2: '--remove-site',
    option: 'remove',
    comments: `remove from cache: »${packageJson.name} -r stackoverflow`,
    custom: undefined,
    initValue: undefined,
  },
  CREATE_GROUP: {
    flag1: '',
    flag2: '--create-group',
    option: 'sites',
    comments: 'create a new Group of sites',
    custom: undefined,
    initValue: undefined,
  },
  PATH: {
    flag1: '',
    flag2: '--path',
    option: 'path',
    comments: 'shows the cache path',
    custom: undefined,
    initValue: undefined,
  },
  CLEAN: {
    flag1: '',
    flag2: '--clean',
    option: 'clean',
    comments: 'clean the cache file',
    custom: undefined,
    initValue: undefined,
  },
};
const excludesNonAppOpts = (program) => {
  const { version, ...programOpts } = program.opts();
  return programOpts;
};

export const hasOpts = (program) => {
  // a
  const programOpts = excludesNonAppOpts(program);
  return Object.entries(programOpts).some(([key, opt]) => {
    if (opt) {
      return true;
    }
    return false;
  });
};
