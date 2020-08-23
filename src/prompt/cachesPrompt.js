import promptGroup from './promptGroup';
import promptSites from './promptSites';
import { setDefaultGroups, groupsName } from '../groups';
import {
  setDefaultSites, sitesMap, sitesMapByName, sitesName,
} from '../sites';
import { hasOption } from '../utils';

// eslint-disable-next-line import/prefer-default-export
export const handlePromptGroup = async (program) => {
  let groupsNameProgram = [];
  let shouldGroupsBeSaving = false;
  if (hasOption(program.group)) {
    groupsNameProgram = program.group;
    shouldGroupsBeSaving = true;
  } else if (hasOption(program.defaults)) {
    groupsNameProgram = groupsName;
  } else {
    groupsNameProgram = (await promptGroup()).groupsName;
    shouldGroupsBeSaving = true;
  }
  if (shouldGroupsBeSaving) {
    setDefaultGroups(groupsNameProgram);
  }
  return groupsNameProgram;
};

export const handlePromptSites = async (program, groupsNameProgram) => {
  let sitesNameProgram = [];
  if (hasOption(program.defaults)) {
    sitesNameProgram = sitesName;
  } else {
    sitesNameProgram = (await promptSites(groupsNameProgram)).sitesName;
  }
  setDefaultSites(sitesNameProgram);
  return sitesNameProgram;
};
