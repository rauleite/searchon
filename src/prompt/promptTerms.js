import inquirer from 'inquirer';
import { getDefaultTerms, termsValidate, termsErrorMessage } from '../configs';
// import { groupsList } from '../groups';

const promptTerms = async () => (
  inquirer.prompt([{
    type: 'input',
    message: 'Type the search terms',
    name: 'inputTerms',
    default: () => getDefaultTerms(),
    // choices: groupsList,
    validate(answer) {
      if (termsValidate(answer)) {
        return termsErrorMessage;
      }
      return true;
    },
  }]));

export default promptTerms;
