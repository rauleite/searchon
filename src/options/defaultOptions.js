import customOptions, { multipleOptional } from './customOptions';
import { groupsName } from '../groups';
// import store from '../store';

const options = {
  GROUP: {
    flag1: '-g',
    flag2: '--group <group1,group2>',
    option: 'group',
    comments: `Avaible: ${groupsName}`,
    custom: (value, previous) => customOptions({
      value,
      previous,
      types: [multipleOptional],
      callback: (v) => {
      },
    }),
    initValue: undefined,
  },
  DEFAULT: {
    flag1: '-d',
    flag2: '--defaults',
    option: 'defaults',
    comments: 'search on all defaults groups and sites',
    custom: undefined,
    initValue: undefined,
  },
  EDIT_CACHE: {
    flag1: '',
    flag2: '--edit-cache',
    option: 'edit-cache',
    comments: 'Open and edit cache file',
    custom: undefined,
    initValue: undefined,
  },
  PATH: {
    flag1: '',
    flag2: '--cache-path',
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

export default options;
