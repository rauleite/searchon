import { isArrayEmpty, lastArrayElement } from '../utils';

/**
 * Factory Method: handles all custom types functions
 * @param {{value, previous, types, callback }} object
 */
const customOptions = ({
  value, previous, types, callback,
}) => {
  if (isArrayEmpty(types)) {
    return value;
  }

  let tempValue = value;
  // Call all custom function in the 'custom' property
  types.forEach((type, index) => {
    tempValue = type(tempValue, previous);
    if (lastArrayElement(types, index)) {
      if (callback) {
        callback(tempValue);
      }
    }
  });
  return tempValue;
};

/**
 * If this can take more than one arguments
 * @param {string} value argument(s)
 * @return {[string]} treated value
 */
export const multipleOptional = (value) => {
  const argumentToArray = (str, separator) => {
    if (str.includes(separator)) {
      return str.split(separator);
    }
    return [str];
  };
  return argumentToArray(value, ',');
};

export default customOptions;
