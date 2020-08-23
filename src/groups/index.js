import {
  exitWithError, objectToList, setItemStore, setPropertiesToDefaultFromListNames,
} from '../utils';
import { groupsStore, conf } from '../store';

export const groupsName = Object.keys(groupsStore);

export const groupsList = objectToList(groupsStore);

export const setGroupStore = ({ property = '', value }) => (
  setItemStore({
    itemName: 'groups', property, value, conf,
  })
);

/**
 * Factory Method: accept a object that have a 'name' property (obj.name)
 * @param {[string]}
 * @return void
 */
export const setDefaultGroups = (groups) => {
  const propertiesToSave = setPropertiesToDefaultFromListNames({
    listName: groups,
    // listObj: groupsList,
    objStore: groupsStore,
    properties: ['default', 'checked'],
  });
  setGroupStore({ value: propertiesToSave });
};

/**
 * If argument group exist on group storage
 * @param {object} program commander package instance
 */
const existsArgumentGroups = (groups) => groupsName.some(
  (group) => groups.some((groupsArgument) => group === groupsArgument),
);

const groupValidation = (groups) => {
  if (!existsArgumentGroups(groups)) {
    exitWithError(`Oops, please insert a valid group: ${groupsName}.`);
  }
};

/**
 * Validates groups and set default if necessray
 * @param {object} program commander package instance
 * @return {[string]} Valid groups
 */
// eslint-disable-next-line import/prefer-default-export
export const configureGroups = (groups) => {
  groupValidation(groups);
};
