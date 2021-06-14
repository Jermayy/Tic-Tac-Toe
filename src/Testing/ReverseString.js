// @flow

const reverseString = (string:string):string => {
  const array = string.split('');
  const reverseArray = array.reverse();
  const reversedString = reverseArray.join('');

  if (string || string !== '') {
    return reversedString;
  }
  throw Error;
};

export default reverseString;
