import inquirer from 'inquirer';

import { defaultComunitiesList } from './defaultCommunities';

const communities = async () => (
  inquirer.prompt([{
    type: 'checkbox',
    message: 'Select communities to search',
    name: 'community',
    // choices: defaultCommunities,
    choices: defaultComunitiesList,
    validate(answer) {
      if (answer.length < 1) {
        return 'You must choose at least one site.';
      }
      return true;
    },
  }])
);

export default communities;
