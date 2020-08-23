import querystring from 'querystring';

export const lastArrayElement = (arr, index) => (
  arr && arr.length - 1 === index
);
export const isArrayEmpty = (arr) => (
  arr && arr.length <= 0
);
export const objectToList = (object) => (
  Object.entries(object).map(([key, innerObject]) => (innerObject))
);

export const exitWithError = (text) => {
  console.error('Error:', text);
  process.exit(1);
};

export const listMatches = (list, maches) => list.find((item) => item === maches);

const getOrSetQuery = (itemName, property) => {
  const dot = property ? '.' : '';
  return `${itemName}${dot}${property}`;
};

export const setItemStore = ({
  itemName, property = '', value, conf,
}) => {
  const query = getOrSetQuery(itemName, property);
  conf.set(query, value);
};
export const getItemStore = ({
  itemName, property = '', conf,
}) => {
  const query = getOrSetQuery(itemName, property);
  conf.get(query);
};

const setPropertiesValues = ({ value, obj, properties }) => {
  const objTemp = obj;
  properties.forEach((property) => {
    objTemp[property] = value;
  });
  return objTemp;
};

/**
 * @param {{[string], object, object }}
 * @return object
 */
export const setMachedAsDefault = ({ list, obj, properties }) => {
  const setProperties = (value) => setPropertiesValues({ value, obj, properties });

  let objTemp = {};
  if (listMatches(list, obj.name)) {
    objTemp = setProperties(true);
  } else {
    objTemp = setProperties(false);
  }
  return objTemp;
};

/**
 * Gets list of strings, Storage objects that matches obj.name, and properties to set
 *
 * @param {{listName: [string], objStore: {}, properties: [string]}
 * @return {{}} same object but with its properties set to save
 */
export const setPropertiesToDefaultFromListNames = ({
  listName,
  objStore,
  properties = ['default'],
}) => {
  const propertiesToSave = {};
  Object.entries(objStore).forEach(([key, item]) => {
    propertiesToSave[key] = setMachedAsDefault({
      list: listName,
      obj: item,
      properties,
    });
  });
  return propertiesToSave;
};

export const hasOption = (option) => !!option;

export const hasOptionsConflicts = (program) => {
  const conflicts = [
    ['defaults', 'group'],
  ];
  const options = Object.keys(program);
  let optionsConflicts = [];

  // Encontra algum item (outro array) de conflicts...
  const hasConflicts = conflicts.some(
    // Que todos elementos batam...
    (items) => {
      // re-initalizing for keep only the last
      optionsConflicts = [];
      return items.every(
      // Com algum elemento de options
        (item) => {
        // temp: keep only the matched
          const found = options.find(
            (opt) => item === opt,
          );
          optionsConflicts.push(found);
          return !!found;
        },
      );
    },
  );
  return { hasConflicts, optionsConflicts };
};

export const urlQuery = (terms, inurl) => querystring.escape(`${terms} ${inurl}`);
