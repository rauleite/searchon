import inquirer from 'inquirer';
import { configureGroups } from '../groups';
import { sitesFromGroups } from '../sites';

const promptSites = async (groups) => {
  configureGroups(groups);
  return (
    inquirer.prompt([{
      type: 'checkbox',
      message: 'Select sites to search',
      name: 'sitesName',
      choices: sitesFromGroups(groups),
      validate(answer) {
        if (answer.length < 1) {
          return 'You must choose at least one site.';
        }
        return true;
      },
    }]));
};

export default promptSites;
