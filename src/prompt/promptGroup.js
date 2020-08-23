import inquirer from 'inquirer';
import { groupsList } from '../groups';

const promptGroup = async () => (
  inquirer.prompt([{
    type: 'checkbox',
    message: 'Select groups to search',
    name: 'groupsName',
    choices: groupsList,
    validate(answer) {
      if (answer.length < 1) {
        return 'You must choose at least one site.';
      }
      return true;
    },
  }]));

export default promptGroup;
