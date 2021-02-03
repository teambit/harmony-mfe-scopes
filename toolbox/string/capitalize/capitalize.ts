/**
 * capitalize the first letter of a string.
 * @param str string to capitalize
 */
export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
