import promptTerms from './promptTerms';
import {
  setDefaultTerms, getProgramTerms, termsValidate, termsErrorMessage, setProgramTerms,
} from '../configs';
import { hasOptionsConflicts, exitWithError } from '../utils';
import { handlePromptGroup, handlePromptSites } from './cachesPrompt';

const prompt = async (program) => {
  const { hasConflicts, optionsConflicts } = hasOptionsConflicts(program);

  if (hasConflicts) {
    exitWithError(`You cannot use those two options combined: ${optionsConflicts.join(', ')}`);
    return;
  }

  let inputTerms = getProgramTerms();

  if (!inputTerms) {
    inputTerms = (await promptTerms()).inputTerms;
  }
  if (termsValidate(inputTerms)) {
    exitWithError(termsErrorMessage);
    return;
  }
  setProgramTerms(inputTerms);
  setDefaultTerms(inputTerms);
  const groupsNameProgram = await handlePromptGroup(program);
  const sitesKey = await handlePromptSites(program, groupsNameProgram);
  return sitesKey;
};

export default prompt;
